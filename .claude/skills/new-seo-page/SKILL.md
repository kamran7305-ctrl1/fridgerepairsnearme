---
name: new-seo-page
description: Create a new suburb, service or region page for fridgerepairsnearme.com.au that follows the site's SEO standard, route and sitemap rules
disable-model-invocation: true
---

# New SEO page

Build one page. Arguments: page name, URL, page type (suburb, service, region), primary keyword.

## Before writing
1. Read `CLAUDE.md` for the content rules and constants.
2. Read the Keyword Strategy plan row for the page if the user supplied it (title, meta, H1, primary and secondary keywords). Never invent keyword volume or difficulty.
3. Open a similar existing page as the layout template, for example `src/pages/FreezerRepairsPage.jsx` (service) or `src/pages/StrathfieldPage.jsx` (suburb). Reuse its classes. Do not copy its text: write content that is specific to this page.
4. Try to fetch competitor pages. If they cannot be fetched, say so. Never invent a competitor table.

## Page requirements
- `usePageSeo` with a title of about 55 to 60 characters and a description of about 140 to 155, keyword first, using `${callOutFee}` and `${warrantyPeriod}`.
- One H1, a quick-answer box, local or topic-specific sections (not a swapped template), a table or checklist, FAQ with 6 to 8 questions, and a closing call to action.
- Schema built into the page: Service, BreadcrumbList and FAQPage (provider `HomeAndConstructionBusiness`, "Fridge Repairs Near Me").
- Links in the copy to related service, region and suburb pages that exist. Link the seven region pages where it fits.
- Only claim what the site already states: $69 call-out, 1-year warranty, ARCtick licensed. Prices are "a general Sydney market guide, not our prices".

## Wiring
1. Import and add two routes in `src/App.jsx` (with and without trailing slash).
2. Add the path to `public/api/known_pages.php`.
3. Point existing links (nav, hub, related pages) at the new page where it replaces an anchor.

## Check before finishing
- `python3 .claude/skills/seo-page-audit/audit.py <PageName>.jsx`
- `npm run build` and `npx oxlint src/pages/<PageName>.jsx`
- Render the page once to confirm it loads without errors.
- Tell the user which hub or region page should link back. Do not open a pull request unless asked.
