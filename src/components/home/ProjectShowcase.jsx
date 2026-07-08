import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useScrollAnimation } from '@/lib/useScrollAnimation';
import { IMAGES } from '@/lib/images';

const PROJECTS = [
  { image: IMAGES.project1, label: 'Drain Line Installation' },
  { image: IMAGES.project2, label: 'Sewer Trench' },
  { image: IMAGES.project3, label: 'Industrial Overhead Piping' },
  { image: IMAGES.project4, label: 'Industrial Equipment Yard' },
  { image: IMAGES.project5, label: 'Underground Sewer — New Construction' },
  { image: IMAGES.project6, label: 'Underground Water Main' },
];

export default function ProjectShowcase() {
  const scrollRef = useRef(null);
  const [sectionRef, isVisible] = useScrollAnimation(0.15);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const amount = 340;
      scrollRef.current.scrollBy({ left: direction === 'left' ? -amount : amount, behavior: 'smooth' });
    }
  };

  return (
    <section ref={sectionRef} className="bg-white py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex flex-col sm:flex-row sm:items-end justify-between mb-12 transition-all duration-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <div>
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-navy/60 mb-3 block">Our Work</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading text-navy">Built for the Long Haul</h2>
          </div>
          <div className="flex gap-3 mt-4 sm:mt-0">
            <button
              onClick={() => scroll('left')}
              className="w-12 h-12 border-2 border-navy/20 hover:border-amber rounded flex items-center justify-center transition-all hover:bg-amber/5"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-5 h-5 text-navy" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="w-12 h-12 border-2 border-navy/20 hover:border-amber rounded flex items-center justify-center transition-all hover:bg-amber/5"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-5 h-5 text-navy" />
            </button>
          </div>
        </div>
      </div>

      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto pb-6 px-4 sm:px-8 lg:px-[max(2rem,calc((100vw-80rem)/2+2rem))] scrollbar-hide"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {PROJECTS.map((project, i) => (
          <div
            key={i}
            className={`group shrink-0 w-[280px] sm:w-[320px] rounded-lg overflow-hidden bg-offwhite transition-all duration-500 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: isVisible ? `${200 + i * 100}ms` : '0ms' }}
          >
            <div className="relative h-[360px] overflow-hidden">
              <img
                src={project.image}
                alt={project.label}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-amber/0 group-hover:bg-amber/15 transition-colors duration-400" />
            </div>
          </div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 text-center">
        <Link
          to="/gallery"
          className="inline-flex items-center justify-center bg-amber hover:bg-amber-hover text-navy font-bold text-sm px-8 py-3.5 rounded transition-all duration-200 hover:scale-[1.03] active:scale-[0.97] tracking-wide uppercase"
        >
          View Full Gallery
        </Link>
      </div>
    </section>
  );
}