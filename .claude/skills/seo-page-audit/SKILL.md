---
name: seo-page-audit
description: Audit page files in src/pages for title and description length, one H1, banned wording, canonical URL, route and sitemap entries, and unused icon imports
---

# SEO page audit

Run the audit script and report the results plainly.

```bash
python3 .claude/skills/seo-page-audit/audit.py            # every page
python3 .claude/skills/seo-page-audit/audit.py FooPage.jsx # one page
```

It checks:
- Title length (about 40 to 62 characters) and description length (about 125 to 158).
- Exactly one `<h1>`.
- Banned wording and claims: "honestly", "genuinely", "straightforward", "24/7".
- `CANONICAL_URL` matches a route in `src/App.jsx` (with and without a trailing slash) and a path in `public/api/known_pages.php`.
- Unused icon imports.

If the build-output check exists (`scripts/seo-check.mjs`), also run `npm run build && node scripts/seo-check.mjs`.

Report what failed and where. Fix only what the user asks for. The script does not judge content quality or duplicate text between pages; read the pages for that.
