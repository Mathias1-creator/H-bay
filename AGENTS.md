# AGENTS.md

Guidance for AI coding agents working in this repository.

## What this is

A standalone static marketing site for Heritage Bay Plumbing Inc., built
with React 18 + Vite 6 + React Router + Tailwind CSS + shadcn/ui. It is
**not** connected to any backend or third-party platform — it was originally
generated with Base44 and has since been fully de-integrated (no Base44
packages, no Base44 auth, no Base44-hosted assets).

## Commands

- `npm install` — install dependencies
- `npm run dev` — start the Vite dev server
- `npm run build` — production build to `dist/`
- `npm run preview` — serve the production build locally
- `npm run lint` / `npm run lint:fix` — ESLint
- `npm run typecheck` — `tsc` over the jsconfig-included files

## Conventions

- Path alias `@` maps to `src/` (configured in both `vite.config.js` and
  `jsconfig.json`) — use `@/...` imports rather than relative `../../..`.
- All images are served from `public/images/` and referenced through the
  `IMAGES` registry in `src/lib/images.js`, which resolves paths as
  `import.meta.env.BASE_URL + "images/<file>"`. Never hardcode `/images/...`
  — this site is deployed to a GitHub Pages **project** site, so the app is
  served from a subpath (`/<repo-name>/`), not the domain root.
- Client-side routing: `BrowserRouter` is given
  `basename={import.meta.env.BASE_URL}` in `src/App.jsx` for the same
  subpath reason. Keep this if you touch routing.
- Contact/appointment forms submit through `src/lib/submitLead.js`, which is
  currently a no-op logger — there is no backend. See the README section
  "Contact forms" before changing this.
- There is no authentication anywhere in this app. Don't reintroduce a login
  gate without discussing it first — this is a public marketing site.

## Deployment

`.github/workflows/deploy.yml` builds and publishes to the `gh-pages` branch
on every push to the working branch. It passes `--base=/<repo-name>/` to
`vite build` and copies `dist/index.html` to `dist/404.html` as an SPA
fallback for direct links to non-root routes. Don't remove the
`.nojekyll` step — without it GitHub Pages' Jekyll processing can break the
`_assets`-style Vite output paths.
