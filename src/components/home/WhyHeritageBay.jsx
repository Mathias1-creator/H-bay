import React from 'react';
import { useScrollAnimation } from '@/lib/useScrollAnimation';
import { Shield, Lightbulb, Building } from 'lucide-react';

const REASONS = [
  {
    icon: Shield,
    title: 'UA Union Trained',
    description: 'Heritage Bay Plumbing is a proud UA Signatory Contractor affiliated with UA Plumbing Local 403 out of San Luis Obispo, CA. Every project is completed to union standards — no shortcuts, no compromises.',
  },
  {
    icon: Lightbulb,
    title: 'Old School Ethics. New Age Technology.',
    description: '30 years of hands-on experience combined with the latest plumbing technologies and installation methods. We bring the best of both worlds to every job site.',
  },
  {
    icon: Building,
    title: 'Built for Commercial Scale',
    description: 'We specialize in commercial, multi-family, and industrial projects. From a 10-unit apartment complex to a large commercial build, Heritage Bay has the experience and manpower to deliver.',
  },
];

export default function WhyHeritageBay() {
  const [ref, isVisible] = useScrollAnimation(0.15);

  return (
    <section ref={ref} className="bg-onyx py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          className={`text-center text-3xl sm:text-4xl lg:text-5xl font-heading text-white mb-4 transition-all duration-600 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          30 Years of Union Craftsmanship.
        </h2>
        <p
          className={`text-center text-xl text-amber font-semibold mb-16 transition-all duration-600 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
          style={{ transitionDelay: isVisible ? '100ms' : '0ms' }}
        >
          One Standard: Excellence.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {REASONS.map((reason, i) => (
            <div
              key={reason.title}
              className={`text-center transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: isVisible ? `${300 + i * 150}ms` : '0ms' }}
            >
              <div className="w-16 h-16 bg-amber/10 rounded-lg flex items-center justify-center mx-auto mb-6">
                <reason.icon className="w-8 h-8 text-amber" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">{reason.title}</h3>
              <p className="text-white/60 text-sm leading-relaxed">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}