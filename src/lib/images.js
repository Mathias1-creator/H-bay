// Central image registry — replace with client photos when available.
// All images live in public/images/ and are served relative to BASE_URL so
// this works whether the site is hosted at a domain root or a subpath
// (e.g. GitHub Pages project sites at /<repo-name>/).
const img = (filename) => import.meta.env.BASE_URL + "images/" + filename;

export const IMAGES = {
  logo: img("heritage-bay-logo.png"),
  hero: img("hero-commercial-plumbing-construction.png"),
  servicesPlumbing: img("services-plumbing-overview.png"),
  multiFamily: img("multi-family-plumbing.png"),
  renovation: img("renovation-tenant-improvement.png"),
  industrial: img("industrial-plumbing.png"),
  aboutHero: img("about-hero-background.png"),
  aerial: img("aerial-site-view.png"),
  newConstruction: img("new-construction-plumbing.png"),
  project1: img("project-drain-line-installation.jpg"),
  project2: img("project-sewer-trench-commercial.jpg"),
  project3: img("project-industrial-overhead-piping.jpg"),
  project4: img("project-industrial-equipment-yard.jpg"),
  project5: img("project-underground-sewer-new-construction.jpg"),
  project6: img("project-underground-water-main.jpg"),
  galleryDetail: img("gallery-detail.png"),
  teamOnSite: img("team-on-site.png"),
  finishPlumbing: img("finish-plumbing.png"),
};
