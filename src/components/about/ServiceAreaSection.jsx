import React from 'react';
import { useScrollAnimation } from '@/lib/useScrollAnimation';
import { MapPin } from 'lucide-react';

const CITIES = [
  'Monterey', 'Santa Cruz', 'San Jose', 'Salinas', 'San Luis Obispo',
  'Santa Barbara', 'Ventura', 'Los Angeles', 'Simi Valley',
];

export default function ServiceAreaSection() {
  const [ref, isVisible] = useScrollAnimation(0.15);

  return (
    <section ref={ref} className="bg-white py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-12 transition-all duration-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <h2 className="text-3xl sm:text-4xl font-heading text-navy mb-4">Serving Central & Southern California</h2>
          <p className="text-charcoal/60 text-lg">
            Heritage Bay Plumbing serves clients from Monterey to Simi Valley and everywhere in between.
          </p>
        </div>

        <div className={`flex flex-wrap justify-center gap-3 mb-8 transition-all duration-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`} style={{ transitionDelay: isVisible ? '200ms' : '0ms' }}>
          {CITIES.map((city) => (
            <span
              key={city}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-navy/5 rounded text-navy font-semibold text-sm"
            >
              <MapPin className="w-3.5 h-3.5 text-amber" />
              {city}
            </span>
          ))}
          <span className="inline-flex items-center gap-2 px-5 py-2.5 bg-amber/10 rounded text-amber-hover font-semibold text-sm">
            + surrounding areas
          </span>
        </div>

        <p className="text-center text-charcoal/50 text-sm italic">
          Don't see your city? Call us — we travel for the right project.
        </p>
      </div>
    </section>
  );
}