import React from 'react';
import { Link } from 'react-router-dom';
import { useScrollAnimation } from '@/lib/useScrollAnimation';

export default function ServiceDetail({ title, description, image, imageAlt, reversed }) {
  const [ref, isVisible] = useScrollAnimation(0.15);

  return (
    <div
      ref={ref}
      className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center ${reversed ? 'lg:[direction:rtl]' : ''}`}
    >
      <div
        className={`lg:[direction:ltr] transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <h3 className="text-2xl sm:text-3xl font-heading text-navy mb-6">{title}</h3>
        <p className="text-charcoal/70 text-base leading-relaxed mb-8">{description}</p>
        <Link
          to="/contact"
          className="inline-flex items-center justify-center bg-amber hover:bg-amber-hover text-navy font-bold text-sm px-8 py-3.5 rounded transition-all duration-200 hover:scale-[1.03] active:scale-[0.97] tracking-wide uppercase"
        >
          Request a Quote
        </Link>
      </div>
      <div
        className={`lg:[direction:ltr] transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
        style={{ transitionDelay: isVisible ? '200ms' : '0ms' }}
      >
        <div className="rounded-lg overflow-hidden shadow-2xl">
          <img
            src={image}
            alt={imageAlt}
            className="w-full h-[300px] sm:h-[400px] object-cover"
          />
        </div>
      </div>
    </div>
  );
}