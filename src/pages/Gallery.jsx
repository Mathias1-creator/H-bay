import React from 'react';
import { Link } from 'react-router-dom';
import PageHero from '@/components/shared/PageHero';
import { useScrollAnimation } from '@/lib/useScrollAnimation';
import { IMAGES } from '@/lib/images';

const GALLERY_ITEMS = [
  { image: IMAGES.project5, caption: 'Underground Sewer — New Construction' },
  { image: IMAGES.project6, caption: 'Underground Water Main — New Construction' },
  { image: IMAGES.project1, caption: 'Drain Line Installation' },
  { image: IMAGES.project2, caption: 'Sewer Trench — Commercial Build' },
  { image: IMAGES.project3, caption: 'Industrial Mechanical — Overhead Piping' },
  { image: IMAGES.project4, caption: 'Industrial Mechanical — Equipment Yard' },
];

function GalleryImage({ item, index }) {
  const [ref, isVisible] = useScrollAnimation(0.1);

  return (
    <div
      ref={ref}
      className={`group relative overflow-hidden rounded-lg cursor-pointer transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: isVisible ? `${index * 80}ms` : '0ms' }}
    >
      <div className="relative bg-offwhite" style={{ aspectRatio: '4/3' }}>
        <img
          src={item.image}
          alt={item.caption}
          className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
          loading="eager"
          decoding="async"
        />
        <div className="absolute inset-0 bg-amber/0 group-hover:bg-amber/15 transition-colors duration-400" />
      </div>
    </div>
  );
}

export default function Gallery() {
  return (
    <>
      <PageHero
        title="Our Work"
        subtitle="Every project is completed to union standards. Here's what that looks like."
        breadcrumb="Gallery"
      />

      <section className="bg-offwhite py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {GALLERY_ITEMS.map((item, i) => (
              <GalleryImage key={i} item={item} index={i} />
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-charcoal/50 text-sm italic mb-2">
              More project photos coming soon as Heritage Bay grows its portfolio.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Band */}
      <section className="bg-navy py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-heading text-white mb-6">Interested in working with Heritage Bay?</h2>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center bg-amber hover:bg-amber-hover text-navy font-bold text-sm px-8 py-3.5 rounded transition-all duration-200 hover:scale-[1.03] active:scale-[0.97] tracking-wide uppercase"
          >
            Request a Quote
          </Link>
        </div>
      </section>
    </>
  );
}