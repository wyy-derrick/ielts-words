#!/usr/bin/env python
# -*- coding: utf-8 -*-
"""
解析题库PDF.py：把雅思哥口语题库 PDF 解析成 口语题库.xlsx（可人工编辑的题库源表）。

用法（在仓库目录下）：
    /home/wyy/anaconda3/bin/python 解析题库PDF.py [题库.pdf]
    不带参数时自动取目录里最新的 *口语题库*.pdf。

说明：
- 会整体覆盖 口语题库.xlsx；唯一保留的是 P2&P3 表里人工填的「剧本」列（按中文题名匹配）。
- 换季新 PDF：下载后直接跑本脚本；季度内改题请直接编辑 xlsx，再跑 更新口语题库.py。
- 依赖：pdftotext（poppler-utils）、openpyxl。
"""

import glob
import os
import re
import subprocess
import sys
import tempfile
from datetime import datetime

from openpyxl import Workbook, load_workbook
from openpyxl.styles import Font, PatternFill
from openpyxl.utils import get_column_letter

XLSX_NAME = "口语题库.xlsx"

# 剧本关键词提示（按顺序匹配，先命中先用；只是预填，xlsx 里可随意改）
SCRIPT_HINTS = [
    ("剧本三", ["困难事情", "有条理", "教你新技能", "年长", "科技问题",
                "长久目标", "抱负", "重要决定", "机智解决问题"]),
    ("剧本二", ["运动员", "体育赛事", "发小", "送朋友的礼物"]),
    ("剧本一", ["城市", "自然", "建筑", "夜晚", "继续了解", "特别物品", "团队中工作"]),
]


def find_pdf():
    if len(sys.argv) > 1:
        return sys.argv[1]
    here = os.path.dirname(os.path.abspath(__file__))
    candidates = glob.glob(os.path.join(here, "*口语题库*.pdf"))
    if not candidates:
        sys.exit("没找到题库 PDF，请把 PDF 放在本目录或用参数指定路径。")
    return max(candidates, key=os.path.getmtime)


def pdf_to_lines(pdf_path):
    with tempfile.NamedTemporaryFile(suffix=".txt", delete=False) as tmp:
        tmp_path = tmp.name
    try:
        subprocess.run(["pdftotext", "-layout", pdf_path, tmp_path], check=True)
        with open(tmp_path, encoding="utf-8") as f:
            raw = f.read()
    finally:
        os.unlink(tmp_path)
    return raw.replace("\f", "\n").splitlines()


def usable(line):
    """去掉空行、页码行、目录点线行。"""
    s = line.strip()
    if not s or s.isdigit():
        return None
    if ".." in s:  # 目录的页码引导点
        return None
    return s


RE_CHAPTER = re.compile(r"^[一二三]、")
RE_PART = re.compile(r"^Part (1|2&3)\s+(.+)")
RE_P1 = re.compile(r"^(\d+)\s+P1\s+(.+)$")
RE_P2 = re.compile(r"^(\d+)\s+P2\s+(.+)$")
RE_CLASSIC = re.compile(r"^万年老题\s+(.+)$")


def status_of(part_text):
    if "万年老题" in part_text:
        return "万年老题"
    if "保留题" in part_text:
        return "保留题"
    return "新题"


def smart_join(parts):
    """拼接跨行文本；前一行以孤立单字母结尾（PDF 断词）时直接连上，不加空格。"""
    out = ""
    for part in parts:
        if not out:
            out = part
        elif out[-1].isalpha() and out[-1].lower() not in "ai" and part[:1].islower():
            out += part
        else:
            out += " " + part
    return out


def split_questions(buf):
    """把若干行文本按「?」切成完整问题列表（一行可能有两问，跨行会先拼接）。"""
    joined = smart_join(buf)
    items = [seg.strip() for seg in joined.split("?")]
    return [seg + "?" for seg in items if seg]


class Parser:
    def __init__(self):
        self.p1 = []   # {title, region, status, questions[]}
        self.p2 = []   # {title, region, status, cue, points[], p3[]}
        self.region = ""
        self.status = ""
        self.mode = None
        self.buf = []

    # ---- 记录收尾 ----
    def flush_p1(self, title=None):
        if title is None or self.mode != "p1q":
            return
        questions = split_questions(self.buf)
        if questions:
            self.p1.append({"title": title, "region": self.region,
                            "status": self.status, "questions": questions})
        self.buf = []

    def flush_p2(self, title=None):
        if title is None or not self.p2 or self.p2[-1]["title"] != title:
            return
        card = self.p2[-1]
        if "cue_buf" in card:
            card["cue"] = smart_join(card.pop("cue_buf"))
            card["points"] = card.pop("points_buf", [])
        card["p3"] = split_questions(self.buf) if self.mode == "p3q" else card.get("p3", [])
        self.buf = []

    def open_p2(self, title):
        self.p2.append({"title": title, "region": self.region, "status": self.status,
                        "cue_buf": [], "points_buf": [], "p3": []})

    # ---- 主循环 ----
    def feed(self, s):
        m = RE_P1.match(s)
        if m:
            self.flush_p1(self.cur_p1)
            self.flush_p2(self.cur_p2)
            self.cur_p1, self.cur_p2 = m.group(2).strip(), None
            self.mode = "p1q"
            self.buf = []
            return
        m = RE_P2.match(s)
        if m:
            self.flush_p1(self.cur_p1)
            self.flush_p2(self.cur_p2)
            self.cur_p1, self.cur_p2 = None, m.group(2).strip()
            self.open_p2(self.cur_p2)
            self.mode = "p2cue"
            self.buf = []
            return
        m = RE_CLASSIC.match(s)
        if m:
            self.flush_p1(self.cur_p1)
            self.flush_p2(self.cur_p2)
            self.cur_p1, self.cur_p2 = m.group(1).strip(), None
            self.status = "万年老题"
            self.mode = "p1q"
            self.buf = []
            return
        if RE_CHAPTER.match(s):
            self.flush_p1(self.cur_p1)
            self.flush_p2(self.cur_p2)
            self.cur_p1 = self.cur_p2 = None
            self.region = "非大陆" if "非大陆" in s else "大陆"
            self.mode = None
            return
        m = RE_PART.match(s)
        if m:
            self.flush_p1(self.cur_p1)
            self.flush_p2(self.cur_p2)
            self.cur_p1 = self.cur_p2 = None
            self.status = status_of(m.group(2))
            self.mode = None
            return
        if s == "You should say:":
            self.mode = "p2points"
            return
        if s == "P3":
            self.mode = "p3q"
            self.buf = []
            return
        # 正文内容行
        if self.mode == "p1q":
            self.buf.append(s)
        elif self.mode == "p2cue":
            self.p2[-1]["cue_buf"].append(s)
        elif self.mode == "p2points":
            buf = self.p2[-1]["points_buf"]
            if buf and s[0].islower():  # 长提示点换行的续行
                buf[-1] += " " + s
            else:
                buf.append(s)
        elif self.mode == "p3q":
            self.buf.append(s)

    cur_p1 = None
    cur_p2 = None


def guess_script(title):
    for script, keys in SCRIPT_HINTS:
        if any(k in title for k in keys):
            return script
    return ""


def version_of(pdf_path):
    name = os.path.basename(pdf_path)
    m = re.search(r"(\d{4})年(\d+)[-–](\d+)月.*?[-–](\d+)", name)
    if m:
        return "{}年{}-{}月（截至{}）".format(m.group(1), m.group(2), m.group(3), m.group(4))
    return name


def load_old_scripts(path):
    """重跑时保留人工填的「剧本」列。"""
    if not os.path.exists(path):
        return {}
    try:
        wb = load_workbook(path, read_only=True)
    except Exception:
        return {}
    result = {}
    for ws in wb.worksheets:
        if not ws.title.startswith("P2"):
            continue
        rows = ws.iter_rows(values_only=True)
        header = [str(c or "").strip() for c in next(rows, [])]
        if "中文题名" not in header or "剧本" not in header:
            continue
        ti, si = header.index("中文题名"), header.index("剧本")
        for row in rows:
            if row and len(row) > max(ti, si) and row[si]:
                result[str(row[ti]).strip()] = str(row[si]).strip()
    return result


def write_xlsx(path, parser, version, pdf_path):
    old_scripts = load_old_scripts(path)
    wb = Workbook()
    bold = Font(bold=True)
    fill = PatternFill("solid", fgColor="F0E6D8")

    def sheet(name, headers, widths):
        ws = wb.create_sheet(name)
        ws.append(headers)
        for i, w in enumerate(widths, 1):
            ws.column_dimensions[get_column_letter(i)].width = w
        for c in ws[1]:
            c.font, c.fill = bold, fill
        ws.freeze_panes = "A2"
        return ws

    ws1 = sheet("P1", ["话题", "地区", "状态", "小问（一行一个）"], [24, 8, 10, 90])
    for t in parser.p1:
        ws1.append([t["title"], t["region"], t["status"], "\n".join(t["questions"])])
        ws1.cell(ws1.max_row, 4).alignment = wrap_top()

    ws2 = sheet("P2&P3", ["中文题名", "地区", "状态", "英文题卡",
                          "提示点（一行一个）", "P3追问（一行一个）", "剧本"],
                [26, 8, 10, 70, 40, 70, 10])
    for t in parser.p2:
        script = t["title"] in old_scripts and old_scripts[t["title"]] or guess_script(t["title"])
        ws2.append([t["title"], t["region"], t["status"], t["cue"],
                    "\n".join(t["points"]), "\n".join(t["p3"]), script])
        for col in (5, 6):
            ws2.cell(ws2.max_row, col).alignment = wrap_top()

    ws3 = wb.create_sheet("说明")
    notes = [
        ["题库版本", version],
        ["来源文件", os.path.basename(pdf_path)],
        ["生成时间", datetime.now().strftime("%Y-%m-%d %H:%M")],
        [],
        ["使用方法", "本表由 解析题库PDF.py 生成，可直接手工修改或加题"],
        ["", "改完运行 更新口语题库.py 重新生成 speaking-questions.js（地区填「非大陆」的题不进网页，留空或「大陆」都进）"],
        ["", "换季新 PDF：直接重跑 解析题库PDF.py，人工填的「剧本」列会按题名保留"],
        ["", "P1 的小问、P2 的提示点和 P3 追问都一格一题、一行一个"],
        ["", "「剧本」列：这道 P2 建议套的万能剧本（剧本一/二/三），网页演练时会提示"],
    ]
    for row in notes:
        ws3.append(row)
    ws3.column_dimensions["A"].width = 12
    ws3.column_dimensions["B"].width = 100

    if "Sheet" in wb.sheetnames:
        del wb["Sheet"]
    wb.save(path)


def wrap_top():
    from openpyxl.styles import Alignment
    return Alignment(wrap_text=True, vertical="top")


def main():
    pdf_path = find_pdf()
    lines = pdf_to_lines(pdf_path)
    parser = Parser()
    for line in lines:
        s = usable(line)
        if s:
            parser.feed(s)
    parser.flush_p1(parser.cur_p1)
    parser.flush_p2(parser.cur_p2)

    out = os.path.join(os.path.dirname(os.path.abspath(__file__)), XLSX_NAME)
    write_xlsx(out, parser, version_of(pdf_path), pdf_path)

    cn1 = sum(1 for t in parser.p1 if t["region"] == "大陆")
    cn2 = sum(1 for t in parser.p2 if t["region"] == "大陆")
    no_p3 = [t["title"] for t in parser.p2 if not t["p3"]]
    print("P1 话题：共 {} 个（大陆 {}）".format(len(parser.p1), cn1))
    print("P2 题卡：共 {} 张（大陆 {}）".format(len(parser.p2), cn2))
    if no_p3:
        print("注意，这 {} 张题卡没有 P3：{}".format(len(no_p3), "、".join(no_p3)))
    print("已生成 {}".format(out))


if __name__ == "__main__":
    main()
