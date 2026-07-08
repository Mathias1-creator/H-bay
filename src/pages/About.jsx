import React from 'react';
import { useScrollAnimation } from '@/lib/useScrollAnimation';
import { Shield, Building2, Layers } from 'lucide-react';
import PageHero from '@/components/shared/PageHero';
import ServiceAreaSection from '@/components/about/ServiceAreaSection';
import { IMAGES } from '@/lib/images';

const DIFFERENTIATORS = [
  {
    icon: Shield,
    title: 'Union Quality Standards',
    description: 'Every Heritage Bay project is executed to UA union standards. No shortcuts. No compromises. Just clean, code-compliant, inspection-ready work.',
  },
  {
    icon: Building2,
    title: 'Commercial Scale Experience',
    description: '30 years of commercial, multi-family, and industrial plumbing experience. We understand the complexity of large-scale construction and how to keep projects moving.',
  },
  {
    icon: Layers,
    title: 'Full Service From Layout to Finish',
    description: 'From pre-construction planning and layout through rough-in and final finish plumbing, Heritage Bay handles every phase of the plumbing scope.',
  },
];

function AboutContent() {
  const [ref, isVisible] = useScrollAnimation(0.15);

  return (
    <section ref={ref} className="bg-offwhite py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h2 className="text-3xl sm:text-4xl font-heading text-navy mb-6">About Heritage Bay Plumbing</h2>
            <p className="text-charcoal/70 text-base leading-relaxed">
              Heritage Bay Plumbing Inc. is a licensed, union plumbing construction company founded by Jared Murray and officially launching May 2026. While the Heritage Bay name is new, the experience behind it is not. With over 30 years of UA union-trained plumbing expertise, Jared and his team bring old school work ethics and new age technologies to every commercial, multi-family, and industrial project they take on. Heritage Bay is a proud UA Signatory Contractor affiliated with UA Plumbing Local 403 out of San Luis Obispo, CA, meaning every project is completed to the highest union standards in the industry. Serving clients from Monterey to Simi Valley, Heritage Bay is built for the scale and complexity of commercial plumbing construction.
            </p>
          </div>
          <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: isVisible ? '200ms' : '0ms' }}>
            <div className="rounded-lg overflow-hidden shadow-2xl">
              <img
                src={IMAGES.teamOnSite}
                alt="CLIENT PHOTO SLOT — Jared or team on job site"
                className="w-full h-[350px] sm:h-[450px] object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function UASection() {
  const [ref, isVisible] = useScrollAnimation(0.15);

  return (
    <section ref={ref} className="bg-navy py-24 lg:py-32">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="w-20 h-20 bg-amber/10 rounded-full flex items-center justify-center mx-auto mb-8">
            <Shield className="w-10 h-10 text-amber" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-heading text-white mb-6">Proud UA Signatory Contractor</h2>
          <p className="text-white/70 text-base leading-relaxed mb-10">
            Heritage Bay Plumbing is affiliated with the United Association of Plumbers and Pipefitters, UA Local 403 out of San Luis Obispo, California. As a UA Signatory Contractor we are committed to the highest standards of craftsmanship, safety, and professionalism on every job site.
          </p>
          <a
            href="https://www.ua403.org"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-amber hover:bg-amber-hover text-navy font-bold text-sm px-8 py-3.5 rounded transition-all duration-200 hover:scale-[1.03] active:scale-[0.97] tracking-wide uppercase"
          >
            Learn More About UA Local 403
          </a>
        </div>
      </div>
    </section>
  );
}

function WhatSetsUsApart() {
  const [ref, isVisible] = useScrollAnimation(0.15);

  return (
    <section ref={ref} className="bg-offwhite py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className={`text-center text-3xl sm:text-4xl font-heading text-navy mb-16 transition-all duration-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          What Sets Us Apart
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {DIFFERENTIATORS.map((item, i) => (
            <div
              key={item.title}
              className={`text-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: isVisible ? `${200 + i * 150}ms` : '0ms' }}
            >
              <div className="w-16 h-16 bg-navy/5 rounded-lg flex items-center justify-center mx-auto mb-6">
                <item.icon className="w-8 h-8 text-navy" />
              </div>
              <h3 className="text-xl font-bold text-navy mb-4">{item.title}</h3>
              <p className="text-charcoal/60 text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function About() {
  return (
    <>
      <PageHero
        title="30 Years of Craft. One New Name."
        subtitle="Union trained. Commercially focused. Built for the long haul."
        breadcrumb="About"
        bgImage={IMAGES.aboutHero}
      />
      <AboutContent />
      <UASection />
      <WhatSetsUsApart />
      <ServiceAreaSection />
    </>
  );
}