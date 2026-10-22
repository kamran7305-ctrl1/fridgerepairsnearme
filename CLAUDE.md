# fridgerepairsnearme.com.au

React 19 + Vite + React Router single-page app with a small PHP API (`public/api/`). Deployed to Hostinger over FTPS by `.github/workflows/`.

## Deploy warning
Pushing to `main` or any `claude/**` branch deploys to production straight away. Do not push unfinished or risky work to those branches. Never overwrite `public/api/config.php` (the real one lives on the server).

## Commands
- `npm run build` builds the site
- `npm run lint` runs oxlint
- Pages are checked with `npx oxlint src/pages/<Page>.jsx`

## Adding or editing a page
Use the `new-seo-page` skill. In short:
1. Page file in `src/pages/`, using `usePageSeo` and the shared classes (`hero hero--simple`, `trust-bar`, `data-table-wrap`, `accordion`, `section--dark`).
2. Two routes in `src/App.jsx`: with and without the trailing slash.
3. A path in `public/api/known_pages.php` (feeds the sitemap).
4. Link to it from the hub or a related page.

## Content rules
- Use the constants `callOutFee` ($69), `warrantyPeriod` (1-year) and "ARCtick licensed". Do not claim 24/7, a phone number, a local base, years in business or review counts.
- Prices are always "a general Sydney market guide, not our prices".
- Never invent keyword volume or difficulty.
- Write like a person. Do not use "honestly", "genuinely" or "straightforward"; use "plainly". No stacked em dashes.
- Meta title about 55 to 60 characters; meta description about 140 to 155.
- Every suburb page needs real local detail. Never swap a suburb name into a template.
- Keep the Parramatta URL `/fridge-repairs/fridge-repairs-parramatta/` as it is.
- Blog posts live in the database, not the repo.
