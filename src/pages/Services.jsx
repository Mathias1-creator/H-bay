import React from 'react';
import { Link } from 'react-router-dom';
import { Phone } from 'lucide-react';
import PageHero from '@/components/shared/PageHero';
import ServiceDetail from '@/components/services/ServiceDetail';
import { IMAGES } from '@/lib/images';

const SERVICES_DATA = [
  {
    title: 'New Construction Plumbing',
    description: 'Heritage Bay Plumbing specializes in complete plumbing system installations for new construction projects. With over 30 years of combined UA union experience, we provide expert layout, rough-in, and finish plumbing for commercial buildings, multi-family residential complexes, and industrial facilities. Every installation is designed for long-term performance and built to code from the ground up. We work closely with general contractors, project managers, and owners to keep projects on schedule and on budget, from pre-construction planning through final inspection.',
    image: IMAGES.newConstruction,
    imageAlt: 'CLIENT PHOTO SLOT — New construction plumbing rough-in',
  },
  {
    title: 'Renovation & Tenant Improvement',
    description: 'Existing buildings need expert hands. Heritage Bay Plumbing handles renovation and tenant improvement plumbing for commercial and multi-family properties throughout Central and Southern California. Whether you are converting a space, upgrading aging systems, or building out a new tenant suite, we bring the same union-quality standards to every renovation project. We understand the complexity of working in occupied or partially occupied buildings — scheduling, coordination, and clean execution are our priorities.',
    image: IMAGES.renovation,
    imageAlt: 'CLIENT PHOTO SLOT — Commercial renovation plumbing',
  },
  {
    title: 'Industrial Plumbing',
    description: "Industrial plumbing demands a different level of expertise, and Heritage Bay delivers. Our team has the experience and training to handle heavy-duty plumbing systems for manufacturing facilities, warehouses, processing plants, and other industrial applications. We design and install systems built for the demands of industrial use: durable, code-compliant, and engineered for long-term performance.",
    image: IMAGES.industrial,
    imageAlt: 'CLIENT PHOTO SLOT — Industrial facility plumbing',
  },
];

export default function Services() {
  return (
    <>
      <PageHero
        title="Our Services"
        subtitle="Complete plumbing construction for commercial, multi-family, and industrial projects across Central and Southern California."
        breadcrumb="Services"
      />

      <div className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24 lg:space-y-32">
          {SERVICES_DATA.map((service, i) => (
            <div key={service.title} className={i % 2 === 0 ? 'bg-offwhite -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 py-16 rounded-none lg:rounded-2xl lg:mx-0 lg:px-16' : ''}>
              <ServiceDetail
                {...service}
                reversed={i % 2 !== 0}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Bottom CTA */}
      <section className="bg-navy py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-heading text-white mb-4">Have a project scope ready? Lets talk.</h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-8">
            <a
              href="tel:+18058726302"
              className="text-amber text-2xl font-heading hover:text-amber-hover transition-colors"
            >
              (805) 872-6302
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center bg-amber hover:bg-amber-hover text-navy font-bold text-sm px-8 py-3.5 rounded transition-all duration-200 hover:scale-[1.03] active:scale-[0.97] tracking-wide uppercase"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}