#!/home/wyy/anaconda3/bin/python
"""生成背词工具的 data.js，包含两个词库：

1. 错词表   —— 来自 plan/雅思错词表.xlsx（会持续更新），所有单词在一起，每满 100 词一组
2. 538考点词 —— 来自 词库538.json（固定词库，不再更新），保持原来的三组

词表 xlsx 更新后在本地运行本脚本再 push，网页即自动更新：
    /home/wyy/anaconda3/bin/python 更新词库.py
依赖 openpyxl（anaconda base 环境自带）。
"""
import json
from datetime import date
from pathlib import Path

from openpyxl import load_workbook

here = Path(__file__).resolve().parent

# xlsx 位置：优先按笔记库相对路径找，仓库文件夹挪动时再按 home 兜底
XLSX_CANDIDATES = [
    here.parent / 'plan' / '雅思错词表.xlsx',
    Path.home() / 'wyy_notes' / '知识库' / '08-个人发展' / '英语' / 'plan' / '雅思错词表.xlsx',
]
xlsx_path = next((p for p in XLSX_CANDIDATES if p.exists()), None)
if xlsx_path is None:
    raise SystemExit(f'找不到 雅思错词表.xlsx，尝试过: {[str(p) for p in XLSX_CANDIDATES]}')

out_path = here / 'data.js'
bank_538_path = here / '词库538.json'
GROUP_SIZE = 100

# ---- 词库1：错词表（xlsx，会更新） ----
wb = load_workbook(xlsx_path, read_only=True, data_only=True)
entries = []
seen = set()
for ws in wb.worksheets:
    if not ws.title.endswith('错词表'):
        continue
    for row in ws.iter_rows(min_row=2, max_col=4, values_only=True):
        record_date, source, word, chinese = (tuple(row) + (None,) * 4)[:4]
        if not word or not chinese:
            continue
        word = str(word).strip()
        chinese = str(chinese).strip()
        # 同一单词多次记错只保留最早一条，顺序稳定，保证编号不变、新词追加在末尾
        if word.lower() in seen:
            continue
        seen.add(word.lower())
        entries.append({
            'word': word,
            'chinese': chinese,
            'source': str(source).strip() if source else '',
            'date': str(record_date).strip() if record_date else '',
        })

mistake_groups = []
for start in range(0, len(entries), GROUP_SIZE):
    chunk = entries[start:start + GROUP_SIZE]
    mistake_groups.append({
        'id': len(mistake_groups) + 1,
        'name': f'第{len(mistake_groups) + 1}组',
        'description': f'第 {start + 1}-{start + len(chunk)} 词',
        'words': [{'id': i + 1, **e} for i, e in enumerate(chunk)],
    })

# ---- 词库2：538考点词（固定 JSON，不更新） ----
groups_538 = json.loads(bank_538_path.read_text(encoding='utf-8'))
total_538 = sum(len(g['words']) for g in groups_538)

data = {
    'updated': date.today().isoformat(),
    'banks': [
        {
            'id': 'mistakes',
            'name': '错词表',
            'description': '阅读/听力复盘错词，随 xlsx 更新',
            'groups': mistake_groups,
        },
        {
            'id': 'w538',
            'name': '538考点词',
            'description': '刘洪波考点词，固定词库',
            'groups': groups_538,
        },
    ],
}
total = len(entries) + total_538
header = (
    '// 由 更新词库.py 自动生成（错词表来自 plan/雅思错词表.xlsx，538考点词来自 词库538.json），请勿手改\n'
    f'// 词表更新后重新运行脚本再 push 即可，最近生成：{data["updated"]}，共 {total} 词\n'
)
out_path.write_text(
    header + 'window.__VOCAB_DATA__ = ' + json.dumps(data, ensure_ascii=False, indent=2) + ';\n',
    encoding='utf-8',
)

print(out_path)
print(f'词库1 错词表:   {len(entries)} 词，{len(mistake_groups)} 组（每组满 {GROUP_SIZE} 词成组）')
for g in mistake_groups:
    print(f"  {g['name']}: {len(g['words'])} 词（{g['description']}）")
print(f'词库2 538考点词: {total_538} 词，{len(groups_538)} 组（固定）')
