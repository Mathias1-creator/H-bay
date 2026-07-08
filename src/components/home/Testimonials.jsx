import React from 'react';
import { useScrollAnimation } from '@/lib/useScrollAnimation';
import { Quote } from 'lucide-react';

const REVIEWS = [
  {
    text: "Heritage Bay came in on schedule and on budget. Jared's team understood the scope immediately and executed flawlessly. We'll be using them on our next build.",
    author: 'General Contractor',
    project: 'Commercial Project · Central Coast',
  },
  {
    text: '30 years of experience shows in every detail. The rough-in work was clean, precise, and passed inspection first time. Exactly what we needed.',
    author: 'Project Manager',
    project: 'Multi-Family Development · SLO County',
  },
  {
    text: 'Union quality work at every phase. Heritage Bay set the standard on our industrial facility project. Highly recommend for any commercial plumbing scope.',
    author: 'Facilities Director',
    project: 'Industrial Client · Southern California',
  },
];

export default function Testimonials() {
  const [ref, isVisible] = useScrollAnimation(0.15);

  return (
    <section ref={ref} className="bg-offwhite py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transition-all duration-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading text-navy mb-4">What Our Clients Say</h2>
          <p className="text-charcoal/60 text-lg">Real feedback from real projects. More reviews coming as we grow.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {REVIEWS.map((review, i) => (
            <div
              key={i}
              className={`bg-white rounded-lg p-8 border border-navy/5 relative transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: isVisible ? `${300 + i * 150}ms` : '0ms' }}
            >
              <Quote className="w-8 h-8 text-amber/30 mb-4" />
              <p className="text-charcoal/80 text-sm leading-relaxed mb-6 italic">"{review.text}"</p>
              <div className="border-t border-navy/5 pt-4">
                <p className="text-navy font-bold text-sm">— {review.author}</p>
                <p className="text-charcoal/50 text-xs mt-1">{review.project}</p>
              </div>
              <div className="mt-4 px-3 py-1.5 bg-amber/10 rounded text-[10px] font-semibold text-amber-hover uppercase tracking-wider inline-block">
                Placeholder — Replace with real review
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <a
            href="#"
            className="inline-flex items-center justify-center bg-amber hover:bg-amber-hover text-navy font-bold text-sm px-8 py-3.5 rounded transition-all duration-200 hover:scale-[1.03] active:scale-[0.97] tracking-wide uppercase"
            onClick={(e) => e.preventDefault()}
          >
            Leave Us a Google Review
          </a>
          <p className="text-charcoal/40 text-xs mt-3">FLAG: Replace with real Google Review URL</p>
        </div>
      </div>
    </section>
  );
}