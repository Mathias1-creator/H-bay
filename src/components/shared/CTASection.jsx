import React from 'react';
import { Link } from 'react-router-dom';
import { Phone } from 'lucide-react';
import { useScrollAnimation } from '@/lib/useScrollAnimation';

export default function CTASection() {
  const [ref, isVisible] = useScrollAnimation(0.2);

  return (
    <section ref={ref} className="bg-navy py-24 lg:py-32">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2
          className={`text-3xl sm:text-4xl lg:text-5xl font-heading text-white mb-6 transition-all duration-600 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          Ready to Talk About Your Project?
        </h2>
        <p
          className={`text-white/70 text-lg mb-10 max-w-2xl mx-auto transition-all duration-600 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
          style={{ transitionDelay: isVisible ? '100ms' : '0ms' }}
        >
          Heritage Bay Plumbing serves commercial, multi-family, and industrial clients from Santa Cruz to Calabasas. Let's build something great.
        </p>
        <div
          className={`flex flex-col sm:flex-row gap-4 justify-center mb-8 transition-all duration-600 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
          style={{ transitionDelay: isVisible ? '200ms' : '0ms' }}
        >
          <Link
            to="/contact"
            className="inline-flex items-center justify-center bg-amber hover:bg-amber-hover text-navy font-bold text-sm px-8 py-4 rounded transition-all duration-200 hover:scale-[1.03] active:scale-[0.97] tracking-wide uppercase"
          >
            Request a Quote
          </Link>
          <a
            href="tel:+18058726302"
            className="inline-flex items-center justify-center gap-2 border-2 border-white text-white hover:bg-white/10 font-bold text-sm px-8 py-4 rounded transition-all duration-200 hover:scale-[1.03] active:scale-[0.97] tracking-wide uppercase"
          >
            <Phone className="w-4 h-4" />
            Call (805) 872-6302
          </a>
        </div>
        <p className="text-white/30 text-xs tracking-wide">
          UA Signatory Contractor · UA Local 403 · Licensed · Insured
        </p>
      </div>
    </section>
  );
}