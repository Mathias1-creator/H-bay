import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from '@/components/ui/carousel';
import { IMAGES } from '@/lib/images';

const SLIDES = [
  { src: IMAGES.carouselLogo, alt: 'Heritage Bay Plumbing', logo: true },
  { src: IMAGES.carousel1, alt: 'Commercial mechanical and piping installation' },
  { src: IMAGES.carousel2, alt: 'Plumber running pipe through wall framing' },
  { src: IMAGES.carousel3, alt: 'Rough-in drain and vent plumbing on a new build' },
  { src: IMAGES.carousel4, alt: 'Overhead piping and mechanical rough-in' },
  { src: IMAGES.carousel5, alt: 'Underground water and sewer trench on a new construction site' },
];

const arrowClasses =
  'h-10 w-10 sm:h-12 sm:w-12 rounded-full border-white/40 bg-navy/50 text-white ' +
  'hover:bg-amber hover:text-navy hover:border-amber backdrop-blur-sm z-20';

export default function HeroCarousel() {
  return (
    <Carousel
      opts={{ loop: true }}
      className="relative w-full bg-navy"
      aria-label="Heritage Bay Plumbing project photos"
    >
      <CarouselContent className="ml-0 h-[100svh]">
        {SLIDES.map((slide, i) => (
          <CarouselItem key={i} className="pl-0 h-full basis-full">
            {slide.logo ? (
              <div className="w-full h-full bg-navy flex items-center justify-center p-10 sm:p-16">
                <img
                  src={slide.src}
                  alt={slide.alt}
                  className="max-h-[65%] max-w-[80%] sm:max-h-[70%] object-contain"
                  loading="eager"
                />
              </div>
            ) : (
              <div className="relative w-full h-full overflow-hidden bg-navy">
                {/* Soft blurred fill of the same photo so the screen is full
                    without cropping the real image */}
                <img
                  src={slide.src}
                  alt=""
                  aria-hidden="true"
                  className="absolute inset-0 w-full h-full object-cover scale-110 blur-2xl opacity-60"
                />
                <div className="absolute inset-0 bg-navy/30" />
                {/* The full, uncropped photo, centered */}
                <img
                  src={slide.src}
                  alt={slide.alt}
                  className="relative z-10 w-full h-full object-contain"
                  loading={i <= 1 ? 'eager' : 'lazy'}
                />
              </div>
            )}
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className={`left-3 sm:left-6 ${arrowClasses}`} />
      <CarouselNext className={`right-3 sm:right-6 ${arrowClasses}`} />
    </Carousel>
  );
}
