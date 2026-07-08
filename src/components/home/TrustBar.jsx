import React from 'react';
import { useScrollAnimation } from '@/lib/useScrollAnimation';
import { Shield, Award, Building2, MapPin } from 'lucide-react';

const TRUST_ITEMS = [
  { icon: Award, label: '30 Years of Experience' },
  { icon: Shield, label: 'UA Signatory Contractor' },
  { icon: Building2, label: 'Commercial · Multi-Family · Industrial' },
  { icon: MapPin, label: 'Monterey to Simi Valley' },
];

export default function TrustBar() {
  const [ref, isVisible] = useScrollAnimation(0.3);

  return (
    <section ref={ref} className="bg-onyx py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0">
          {TRUST_ITEMS.map((item, i) => (
            <div
              key={item.label}
              className={`flex items-center justify-center gap-3 py-4 lg:py-0 transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              } ${i < TRUST_ITEMS.length - 1 ? 'lg:border-r border-amber/30' : ''}`}
              style={{ transitionDelay: isVisible ? `${i * 100}ms` : '0ms' }}
            >
              <item.icon className="w-5 h-5 text-amber shrink-0" />
              <span className="text-white text-sm font-semibold tracking-wide">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}