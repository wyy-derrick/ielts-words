#!/home/wyy/anaconda3/bin/python
"""生成背词工具的 data.js / local-data.js：

1. 错词表   —— 来自 plan/雅思错词表.xlsx（会持续更新），所有单词在一起，每满 100 词一组
2. 538考点词 —— 来自 词库538.json（固定词库，不再更新），保持原来的三组
3. 听力听写 —— 来自 xlsx「听力错词表」，听音拼写专用
4. d阅读错词 —— 来自 d词表.xlsx，独立板块，与错词表同样选中文
5. d听力单词 —— 来自 d词表.xlsx，独立板块，与听力听写同样听音拼写
xlsx 不上传 GitHub；生成的词库数据写入 data.js，网页端可以使用。

词表 xlsx 更新后在本地运行本脚本再刷新网页：
    python 更新词库.py
依赖 openpyxl。
"""
import json
from datetime import date, datetime
from pathlib import Path

from openpyxl import Workbook, load_workbook
from openpyxl.styles import Alignment, Font, PatternFill
from openpyxl.utils.datetime import from_excel

here = Path(__file__).resolve().parent

# xlsx 位置：优先按笔记库相对路径找，仓库文件夹挪动时再按 home 兜底
XLSX_CANDIDATES = [
    here.parent / 'plan' / '雅思错词表.xlsx',
    Path.home() / 'wyy_notes' / '知识库' / '08-个人发展' / '英语' / 'plan' / '雅思错词表.xlsx',
]
xlsx_path = next((p for p in XLSX_CANDIDATES if p.exists()), None)

out_path = here / 'data.js'
local_out_path = here / 'local-data.js'
local_xlsx_path = here / 'd词表.xlsx'
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


def build_groups(entries, empty_desc='暂无词'):
    """按每 100 词切组成组，编号从 1 起。"""
    if not entries:
        return [{
            'id': 1,
            'name': '第1组',
            'description': empty_desc,
            'words': [],
        }]
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


def cell_text(value):
    if value is None or value == '':
        return ''
    return str(value).strip()


def ensure_local_xlsx(path):
    """本地词表不存在时生成带表头的空表，不会上传 GitHub。"""
    if path.exists():
        return False
    wb = Workbook()
    ws = wb.active
    ws.title = 'd词表'
    headers = ['阅读单词', '阅读中文', '听力单词', '听力中文']
    ws.append(headers)
    header_font = Font(bold=True, color='FFFFFF')
    header_fill = PatternFill('solid', fgColor='C75B39')
    for col, width in enumerate(headers, 1):
        cell = ws.cell(1, col)
        cell.font = header_font
        cell.fill = header_fill
        cell.alignment = Alignment(horizontal='center')
    ws.column_dimensions['A'].width = 18
    ws.column_dimensions['B'].width = 24
    ws.column_dimensions['C'].width = 18
    ws.column_dimensions['D'].width = 24
    ws.freeze_panes = 'A2'
    ws.auto_filter.ref = 'A1:D1'

    note = wb.create_sheet('说明')
    lines = [
        '本文件只留在本地，已加入 .gitignore，不会上传 GitHub。',
        '',
        '两列词表会生成两个前端词库：',
        '  · 阅读单词 + 阅读中文 →「d阅读错词」，和现有错词表一样：看英文选中文。',
        '  · 听力单词 + 听力中文 →「d听力单词」，和现有听力听写一样：听英音拼写。',
        '',
        '阅读必须填中文，否则无法出选择题（没填中文的阅读词会跳过）。',
        '听力可以只填单词，中文可选，会显示在答案卡上。',
        '同一列里重复单词只保留最早一条；已有单词的顺序保持不变，新词追加在末尾。',
        '',
        '填好后在本目录运行：',
        '  python 更新词库.py',
        '然后刷新网页即可。',
    ]
    note.column_dimensions['A'].width = 88
    for line in lines:
        note.append([line])
    wb.save(path)
    return True


def read_local_lists(path, zh_catalog):
    """读取 d词表.xlsx：阅读列 → 错词表模式；听力列 → 听写模式。"""
    wb = load_workbook(path, read_only=True, data_only=True)
    ws = wb[wb.sheetnames[0]]
    rows = list(ws.iter_rows(values_only=True))
    wb.close()
    if not rows:
        return [], [], []

    header = [cell_text(v) for v in rows[0]]
    col = {name: i for i, name in enumerate(header) if name}

    if '阅读单词' in col or '听力单词' in col:
        r_word_i = col.get('阅读单词')
        r_zh_i = col.get('阅读中文')
        l_word_i = col.get('听力单词')
        l_zh_i = col.get('听力中文')
        data_rows = rows[1:]
    else:
        r_word_i, l_word_i = 0, 1
        r_zh_i = l_zh_i = None
        data_rows = rows[1:] if any(cell_text(v) in ('阅读单词', '听力单词') for v in rows[0]) else rows

    def take(row, idx):
        if idx is None or idx >= len(row):
            return ''
        return cell_text(row[idx])

    reading, listening = [], []
    seen_r, seen_l = set(), set()
    skipped_reading = []
    for row in data_rows:
        row = tuple(row or ())
        r_word = take(row, r_word_i)
        r_zh = take(row, r_zh_i) or zh_catalog.get(r_word.lower(), '')
        l_word = take(row, l_word_i)
        l_zh = take(row, l_zh_i) or zh_catalog.get(l_word.lower(), '')

        if r_word:
            key = r_word.lower()
            if key not in seen_r:
                seen_r.add(key)
                if r_zh:
                    reading.append({
                        'word': r_word,
                        'chinese': r_zh,
                        'source': 'd阅读错词',
                        'date': '',
                    })
                else:
                    skipped_reading.append(r_word)
        if l_word:
            key = l_word.lower()
            if key not in seen_l:
                seen_l.add(key)
                listening.append({
                    'word': l_word,
                    'chinese': l_zh,
                    'source': 'd听力单词',
                    'date': '',
                })
    return reading, listening, skipped_reading


def load_existing_data():
    if not out_path.exists():
        return None
    text = out_path.read_text(encoding='utf-8')
    start = text.find('{')
    end = text.rfind('}')
    if start < 0 or end < 0:
        return None
    return json.loads(text[start:end + 1])


def write_js(path, header, payload):
    path.write_text(
        header + ' = ' + json.dumps(payload, ensure_ascii=False, indent=2) + ';\n',
        encoding='utf-8',
    )


# ---- 词库2：538考点词（固定 JSON，不更新） ----
groups_538 = json.loads(bank_538_path.read_text(encoding='utf-8'))
total_538 = sum(len(g['words']) for g in groups_538)

zh_catalog = {}
for g in groups_538:
    for w in g['words']:
        if w.get('word') and w.get('chinese'):
            zh_catalog[w['word'].lower()] = w['chinese']

# ---- 词库1 / 3：错词表 + 听力听写 ----
mistake_entries = []
listening_entries = []
if xlsx_path is None:
    print('找不到 雅思错词表.xlsx，错词表/听力听写沿用现有 data.js，d词表仍写入两个新板块。')
    existing = load_existing_data()
    if existing:
        banks_by_id = {b['id']: b for b in existing.get('banks', [])}
        for b in existing.get('banks', []):
            for g in b.get('groups', []):
                for w in g.get('words', []):
                    if w.get('word') and w.get('chinese'):
                        zh_catalog[w['word'].lower()] = w['chinese']
    else:
        banks_by_id = {}
    mistake_groups = banks_by_id.get('mistakes', {}).get('groups') or build_groups([], '暂无错词')
    listening_groups = banks_by_id.get('listening', {}).get('groups') or build_groups([], '暂无听力词')
    if banks_by_id.get('mistakes'):
        mistake_entries = [w for g in mistake_groups for w in g.get('words', [])]
    if banks_by_id.get('listening'):
        listening_entries = [w for g in listening_groups for w in g.get('words', [])]
else:
    wb = load_workbook(xlsx_path, read_only=True, data_only=True)
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
    wb.close()
    for e in mistake_entries + listening_entries:
        zh_catalog[e['word'].lower()] = e['chinese']
    mistake_groups = build_groups(mistake_entries)
    listening_groups = build_groups(listening_entries, '暂无听力词')

# ---- 本地 d词表.xlsx（不上传 GitHub）----
created = ensure_local_xlsx(local_xlsx_path)
if created:
    print(f'已新建本地词表：{local_xlsx_path}')
d_reading, d_listening, skipped_reading = read_local_lists(local_xlsx_path, zh_catalog)
d_reading_groups = build_groups(d_reading, '暂无阅读错词')
d_listening_groups = build_groups(d_listening, '暂无听力词')

updated = date.today().isoformat()
core_data = {
    'updated': updated,
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
        {
            'id': 'd-reading',
            'name': 'd阅读错词',
            'description': 'd词表阅读错词，看英文选中文',
            'groups': d_reading_groups,
        },
        {
            'id': 'd-listening',
            'name': 'd听力单词',
            'description': 'd词表听力单词，听音拼写',
            'quiz': 'spell',
            'groups': d_listening_groups,
        },
    ],
}
local_data = {
    'updated': updated,
    'banks': [
        {
            'id': 'd-reading',
            'name': 'd阅读错词',
            'description': 'd词表阅读错词，看英文选中文',
            'groups': d_reading_groups,
        },
        {
            'id': 'd-listening',
            'name': 'd听力单词',
            'description': 'd词表听力单词，听音拼写',
            'quiz': 'spell',
            'groups': d_listening_groups,
        },
    ],
}

total = len(mistake_entries) + total_538 + len(d_reading) + len(d_listening)
header = (
    '// 由 更新词库.py 自动生成（错词表/听力听写来自 plan/雅思错词表.xlsx，538考点词来自 词库538.json，d词表来自 d词表.xlsx），请勿手改\n'
    f'// 词表更新后重新运行脚本再 push 即可，最近生成：{updated}，共 {total} 词'
    f'（听力听写 {len(listening_entries)} 词，d阅读错词 {len(d_reading)} 词，d听力单词 {len(d_listening)} 词另库）\n'
    'window.__VOCAB_DATA__'
)
write_js(out_path, header, core_data)
print(out_path)

local_header = (
    '// 由 更新词库.py 从本地 d词表.xlsx 生成，xlsx 不上传；词库数据已写入 data.js\n'
    f'// 最近生成：{updated}，d阅读错词 {len(d_reading)} 词，d听力单词 {len(d_listening)} 词\n'
    'window.__LOCAL_VOCAB_DATA__'
)
write_js(local_out_path, local_header, local_data)

print(f'词库1 错词表:   {len(mistake_entries)} 词，{len(mistake_groups)} 组（每组满 {GROUP_SIZE} 词成组）')
for g in mistake_groups:
    print(f"  {g['name']}: {len(g['words'])} 词（{g['description']}）")
print(f'词库2 538考点词: {total_538} 词，{len(groups_538)} 组（固定）')
print(f'词库3 听力听写: {len(listening_entries)} 词，{len(listening_groups)} 组（听音拼写）')
for g in listening_groups:
    print(f"  {g['name']}: {len(g['words'])} 词（{g['description']}）")
print(f'词库4 d阅读错词: {len(d_reading)} 词，{len(d_reading_groups)} 组（独立板块，xlsx 不上传）')
for g in d_reading_groups:
    print(f"  {g['name']}: {len(g['words'])} 词（{g['description']}）")
print(f'词库5 d听力单词: {len(d_listening)} 词，{len(d_listening_groups)} 组（独立板块，xlsx 不上传）')
for g in d_listening_groups:
    print(f"  {g['name']}: {len(g['words'])} 词（{g['description']}）")
print(local_out_path)
if skipped_reading:
    print('以下阅读词没有中文，已跳过（请在「阅读中文」列补上）：')
    print('  ' + ', '.join(skipped_reading))
