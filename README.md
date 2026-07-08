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
    contact/      Contact form + appointment booking widgets
    services/     Service detail blocks
    shared/       Reusable PageHero / CTASection
    ui/           shadcn/ui primitives
  lib/
    images.js     Central image registry (see "Images" below)
    submitLead.js Contact form submit handler (see "Contact forms" below)
  pages/          Home, Services, Gallery, About, Contact
```

## Images

All site images live in `public/images/` and are referenced through the
registry in `src/lib/images.js`, which builds paths as
`import.meta.env.BASE_URL + "images/<file>"`. Always add new images through
that registry rather than hardcoding `/images/...` paths, so the site keeps
working when hosted at a subpath (e.g. GitHub Pages project sites at
`/<repo-name>/`).

## Contact forms

`ContactForm`, `AppointmentBooking`, and `GetInTouch` all submit through
`src/lib/submitLead.js`, which currently only logs to the console — **this
site has no backend, so form submissions do not go anywhere yet.** Before
relying on these forms to capture real leads, wire `submitLead` up to a form
backend such as [Formspree](https://formspree.io/), Netlify Forms, EmailJS,
or a custom API endpoint.

## Deployment

Every push to this branch builds the site and publishes it to the `gh-pages`
branch via `.github/workflows/deploy.yml`. See that workflow for details
(base path, SPA fallback, `.nojekyll`). GitHub Pages must be configured once
in the repo settings to serve from the `gh-pages` branch — see the PR/setup
notes for exact steps.
