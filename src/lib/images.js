// Central image registry — replace with client photos when available.
// All images live in public/images/ and are served relative to BASE_URL so
// this works whether the site is hosted at a domain root or a subpath
// (e.g. GitHub Pages project sites at /<repo-name>/).
const img = (filename) => import.meta.env.BASE_URL + "images/" + filename;

export const IMAGES = {
  logo: img("heritage-bay-logo.png"),
  // Full-color badge logo — navbar (top-left) and footer, every page
  logoColor: img("heritage-bay-logo-color.png"),
  // Homepage hero carousel — shown in this order (logo first, then job-site photos)
  carouselLogo: img("hero-carousel-logo.png"),
  carousel1: img("hero-carousel-1.jpg"),
  carousel3: img("hero-carousel-3.jpg"),
  carousel5: img("hero-carousel-5.jpg"),
  carousel6: img("hero-carousel-6.jpg"),
  carousel7: img("hero-carousel-7.jpg"),
  carousel8: img("hero-carousel-8.jpg"),
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
  project7: img("project-exterior-piping-run.jpg"),
  project8: img("project-crew-exterior-installation.jpg"),
  project9: img("project-eyewash-station-industrial.jpg"),
  project10: img("project-tenant-improvement-office.jpg"),
  galleryDetail: img("gallery-detail.png"),
  finishPlumbing: img("finish-plumbing.png"),
};
