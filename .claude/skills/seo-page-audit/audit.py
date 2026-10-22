#!/usr/bin/env python3
"""Audit page files in src/pages against the site's SEO and wording rules.

Usage: python3 .claude/skills/seo-page-audit/audit.py [PageName.jsx ...]
Checks: title and description length, one H1, banned words, canonical URL,
route in App.jsx, path in known_pages.php, unused icon imports.
"""
import glob
import os
import re
import sys

ROOT = os.path.abspath(os.path.join(os.path.dirname(__file__), "..", "..", ".."))
PAGES = os.path.join(ROOT, "src", "pages")
BANNED = ["honestly", "genuinely", "straightforward", "24/7"]
SKIP = {"HomePage.jsx", "NotFoundPage.jsx", "BlogIndexPage.jsx", "BlogPostPage.jsx"}

app = open(os.path.join(ROOT, "src", "App.jsx")).read()
known = open(os.path.join(ROOT, "public", "api", "known_pages.php")).read()


def resolve(text):
    return (text.replace("${callOutFee}", "$69").replace("${warrantyPeriod}", "1-year"))


def seo_field(src, name):
    start = src.find("usePageSeo({")
    src = src[start:] if start != -1 else src
    m = re.search(name + r':\s*(?:\n\s*)?([`"])(.*?)\1,', src, re.S)
    return resolve(m.group(2)) if m else None


files = sys.argv[1:] or sorted(os.path.basename(f) for f in glob.glob(os.path.join(PAGES, "*Page.jsx")))
problems = 0
for name in files:
    if name in SKIP or "admin" in name.lower():
        continue
    src = open(os.path.join(PAGES, name)).read()
    issues = []

    title = seo_field(src, "title")
    desc = seo_field(src, "description")
    if title is None:
        issues.append("no title found in usePageSeo")
    elif not 40 <= len(title) <= 62:
        issues.append(f"title is {len(title)} characters (aim for about 55 to 60)")
    if desc is None:
        issues.append("no description found in usePageSeo")
    elif not 125 <= len(desc) <= 158:
        issues.append(f"description is {len(desc)} characters (aim for about 140 to 155)")

    h1s = len(re.findall(r"<h1[\s>]", src))
    if h1s != 1:
        issues.append(f"{h1s} <h1> elements (need 1)")

    low = src.lower()
    for word in BANNED:
        if word in low:
            issues.append(f"contains banned word/claim: {word}")

    m = re.search(r'CANONICAL_URL\s*=\s*"https://fridgerepairsnearme\.com\.au([^"]+)"', src)
    if not m:
        issues.append("no CANONICAL_URL")
    else:
        path = m.group(1)
        comp = name[:-4]
        if f'path="{path}"' not in app or f'path="{path.rstrip("/")}"' not in app:
            issues.append(f"route {path} (with and without slash) missing in App.jsx")
        if f"'{path}'" not in known:
            issues.append(f"{path} missing in known_pages.php")

    imp = re.search(r"import \{([^}]*)\} from \"\.\./components/Icons\"", src)
    if imp:
        for icon in [i.strip() for i in imp.group(1).split(",") if i.strip()]:
            if len(re.findall(r"\b" + icon + r"\b", src)) < 2:
                issues.append(f"unused icon import: {icon}")

    if issues:
        problems += len(issues)
        print(f"{name}")
        for i in issues:
            print(f"  - {i}")

print(f"\n{problems} issue(s) found." if problems else "No issues found.")
sys.exit(1 if problems else 0)
