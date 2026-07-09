# Heritage Bay Plumbing Inc. — Website

Marketing site for Heritage Bay Plumbing Inc., a UA union commercial plumbing
construction company serving Central & Southern California. Standalone static
React app — no backend, no third-party platform dependency.

## Tech stack

- [React 18](https://react.dev/) + [Vite 6](https://vite.dev/)
- [React Router](https://reactrouter.com/) (client-side routing)
- [Tailwind CSS](https://tailwindcss.com/) + [shadcn/ui](https://ui.shadcn.com/) components
- [TanStack Query](https://tanstack.com/query) (client-side data/query cache)

## Getting started

```bash
npm install
npm run dev       # start the dev server
npm run build      # production build -> dist/
npm run preview    # serve the production build locally
```

## Project structure

```
src/
  api/            (removed — no backend integration)
  components/
    layout/       Navbar, Footer, Layout, floating call button
    home/         Home page sections (hero, stats, showcase, etc.)
    services/     Service detail blocks
    shared/       Reusable PageHero / CTASection
    ui/           shadcn/ui primitives
  lib/
    images.js     Central image registry (see "Images" below)
  pages/          Home, Services, Gallery, About, Contact
```

## Images

All site images live in `public/images/` and are referenced through the
registry in `src/lib/images.js`, which builds paths as
`import.meta.env.BASE_URL + "images/<file>"`. Always add new images through
that registry rather than hardcoding `/images/...` paths, so the site keeps
working when hosted at a subpath (e.g. GitHub Pages project sites at
`/<repo-name>/`).

The homepage opens with an image carousel (`src/components/home/HeroCarousel.jsx`,
built on the shadcn/embla carousel primitive). Its slides are the
`hero-carousel-*` entries in the image registry — a logo panel first, then
job-site photos.

## Contact

The Contact page is intentionally just tap-to-call / tap-to-email cards plus
hours and licensing info — there is no lead-capture form and no backend.

## Deployment

This repo is set up to deploy two ways:

- **GitHub Pages** (current hosting): every push to this branch builds the
  site and publishes it to the `gh-pages` branch via
  `.github/workflows/deploy.yml`, which builds with a `/<repo-name>/` base
  path for GitHub's project-site subpath hosting. GitHub Pages must be
  configured once in the repo settings to serve from the `gh-pages` branch.
- **Netlify** (for handing the site off to someone hosting it themselves):
  `netlify.toml` at the repo root sets the build command (`npm run build`),
  publish directory (`dist`), and the SPA redirect rule needed so direct
  links to non-root routes (e.g. `/services`) don't 404. Netlify auto-detects
  this file — connecting the repo (or dragging a built `dist/` folder into
  Netlify) needs no manual configuration. Netlify serves from the domain
  root, so no base-path flag is needed there (unlike the GitHub Pages build).
