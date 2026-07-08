import React from 'react';
import { Link } from 'react-router-dom';
import { Building2, Wrench, Factory, ArrowRight } from 'lucide-react';
import { useScrollAnimation } from '@/lib/useScrollAnimation';

const SERVICES = [
  {
    icon: Building2,
    title: 'New Construction Plumbing',
    description: 'Complete plumbing system installations for commercial, multi-family, and industrial new builds from layout through finish.',
  },
  {
    icon: Wrench,
    title: 'Renovation & Tenant Improvement',
    description: 'Expert replumbing and upgrade work for existing commercial and multi-family properties.',
  },
  {
    icon: Factory,
    title: 'Industrial Plumbing',
    description: 'Heavy-duty plumbing solutions for industrial facilities built to code and designed for long-term performance.',
  },
];

export default function ServicesPreview() {
  const [ref, isVisible] = useScrollAnimation(0.15);

  return (
    <section ref={ref} className="bg-offwhite py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transition-all duration-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <span className="text-xs font-bold tracking-[0.2em] uppercase text-navy/60 mb-3 block">What We Do</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading text-navy mb-4">
            Complete Plumbing Construction Solutions
          </h2>
          <p className="text-charcoal/70 text-lg max-w-2xl mx-auto">
            From rough-in to finish — Heritage Bay delivers precision plumbing for every phase of your project.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SERVICES.map((service, i) => (
            <div
              key={service.title}
              className={`group bg-white rounded-lg p-8 border border-transparent hover:border-amber transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: isVisible ? `${300 + i * 150}ms` : '0ms' }}
            >
              <div className="w-14 h-14 bg-navy/5 rounded-lg flex items-center justify-center mb-6 group-hover:bg-amber/10 transition-colors">
                <service.icon className="w-7 h-7 text-navy" />
              </div>
              <h3 className="text-xl font-bold text-navy mb-3">{service.title}</h3>
              <p className="text-charcoal/60 text-sm leading-relaxed mb-6">{service.description}</p>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 text-amber font-bold text-sm hover:text-amber-hover transition-colors group-hover:gap-3"
              >
                Learn More <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}