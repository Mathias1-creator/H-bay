import React from 'react';
import { useScrollAnimation, useCountUp } from '@/lib/useScrollAnimation';

const STATS = [
  { end: 30, suffix: '+', label: 'Years of Combined Experience' },
  { end: 3, suffix: '', label: 'Project Types: Commercial · Multi-Family · Industrial' },
  { end: 1, suffix: '', label: 'Standard: Union Quality' },
  { end: 100, suffix: '%', label: 'UA Trained Craftsmen' },
];

function StatItem({ end, suffix, label, isVisible, delay }) {
  const count = useCountUp(end, 2000, isVisible);

  return (
    <div
      className={`text-center transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="text-5xl sm:text-6xl lg:text-7xl font-heading text-amber mb-3">
        {count}{suffix}
      </div>
      <p className="text-white/80 text-sm sm:text-base font-medium max-w-[200px] mx-auto">{label}</p>
    </div>
  );
}

export default function AnimatedStats() {
  const [ref, isVisible] = useScrollAnimation(0.2);

  return (
    <section ref={ref} className="bg-navy py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          className={`text-center text-3xl sm:text-4xl lg:text-5xl font-heading text-white mb-16 transition-all duration-600 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          The Numbers Behind the Work
        </h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {STATS.map((stat, i) => (
            <StatItem
              key={stat.label}
              {...stat}
              isVisible={isVisible}
              delay={200 + i * 150}
            />
          ))}
        </div>
      </div>
    </section>
  );
}