#!/home/wyy/anaconda3/bin/python
"""生成背词工具的 data.js，包含三个词库：

1. 错词表   —— 来自 plan/雅思错词表.xlsx（会持续更新），所有单词在一起，每满 100 词一组
2. 538考点词 —— 来自 词库538.json（固定词库，不再更新），保持原来的三组
3. 听力听写 —— 来自 xlsx「听力错词表」，听音拼写专用

词表 xlsx 更新后在本地运行本脚本再 push，网页即自动更新：
    /home/wyy/anaconda3/bin/python 更新词库.py
依赖 openpyxl（anaconda base 环境自带）。
"""
import json
from datetime import date, datetime
from pathlib import Path

from openpyxl import load_workbook
from openpyxl.utils.datetime import from_excel

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


def format_record_date(value):
    """把表格日期转成 M-D 文本。"""
    if value is None or value == '':
        return ''
    if isinstance(value, datetime):
        return f'{value.month}-{value.day}'
    if isinstance(value, date):
        return f'{value.month}-{value.day}'
    if isinstance(value, (int, float)):
        try:
            d = from_excel(value)
            return f'{d.month}-{d.day}'
        except Exception:
            return str(int(value) if float(value).is_integer() else value)
    return str(value).strip()


def read_sheet_entries(ws):
    """读取一张错词表，同一单词只保留最早一条。"""
    entries = []
    seen = set()
    for row in ws.iter_rows(min_row=2, max_col=4, values_only=True):
        record_date, source, word, chinese = (tuple(row) + (None,) * 4)[:4]
        if not word or not chinese:
            continue
        word = str(word).strip()
        chinese = str(chinese).strip()
        if word.lower() in seen:
            continue
        seen.add(word.lower())
        entries.append({
            'word': word,
            'chinese': chinese,
            'source': str(source).strip() if source else '',
            'date': format_record_date(record_date),
        })
    return entries


def build_groups(entries):
    """按每 100 词切组成组，编号从 1 起。"""
    groups = []
    for start in range(0, len(entries), GROUP_SIZE):
        chunk = entries[start:start + GROUP_SIZE]
        groups.append({
            'id': len(groups) + 1,
            'name': f'第{len(groups) + 1}组',
            'description': f'第 {start + 1}-{start + len(chunk)} 词',
            'words': [{'id': i + 1, **e} for i, e in enumerate(chunk)],
        })
    return groups


wb = load_workbook(xlsx_path, read_only=True, data_only=True)
mistake_entries = []
listening_entries = []
seen_all = set()
for ws in wb.worksheets:
    if not ws.title.endswith('错词表'):
        continue
    sheet_entries = read_sheet_entries(ws)
    if ws.title == '听力错词表':
        listening_entries = sheet_entries
    for e in sheet_entries:
        key = e['word'].lower()
        if key in seen_all:
            continue
        seen_all.add(key)
        mistake_entries.append(e)

mistake_groups = build_groups(mistake_entries)
listening_groups = build_groups(listening_entries)
if not listening_groups:
    listening_groups = [{
        'id': 1,
        'name': '第1组',
        'description': '暂无听力词',
        'words': [],
    }]

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
        {
            'id': 'listening',
            'name': '听力听写',
            'description': '听音拼写，英音',
            'quiz': 'spell',
            'groups': listening_groups,
        },
    ],
}
total = len(mistake_entries) + total_538
header = (
    '// 由 更新词库.py 自动生成（错词表/听力听写来自 plan/雅思错词表.xlsx，538考点词来自 词库538.json），请勿手改\n'
    f'// 词表更新后重新运行脚本再 push 即可，最近生成：{data["updated"]}，共 {total} 词（听力听写 {len(listening_entries)} 词另库）\n'
)
out_path.write_text(
    header + 'window.__VOCAB_DATA__ = ' + json.dumps(data, ensure_ascii=False, indent=2) + ';\n',
    encoding='utf-8',
)

print(out_path)
print(f'词库1 错词表:   {len(mistake_entries)} 词，{len(mistake_groups)} 组（每组满 {GROUP_SIZE} 词成组）')
for g in mistake_groups:
    print(f"  {g['name']}: {len(g['words'])} 词（{g['description']}）")
print(f'词库2 538考点词: {total_538} 词，{len(groups_538)} 组（固定）')
print(f'词库3 听力听写: {len(listening_entries)} 词，{len(listening_groups)} 组（听音拼写）')
for g in listening_groups:
    print(f"  {g['name']}: {len(g['words'])} 词（{g['description']}）")
