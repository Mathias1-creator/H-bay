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
      <CarouselContent className="ml-0 h-[48vh] min-h-[320px] max-h-[560px] sm:h-[56vh]">
        {SLIDES.map((slide, i) => (
          <CarouselItem key={i} className="pl-0 h-full basis-full">
            {slide.logo ? (
              <div className="w-full h-full bg-navy flex items-center justify-center p-8 sm:p-14">
                <img
                  src={slide.src}
                  alt={slide.alt}
                  className="max-h-full max-w-full object-contain"
                  loading="eager"
                />
              </div>
            ) : (
              <img
                src={slide.src}
                alt={slide.alt}
                className="w-full h-full object-cover"
                loading={i <= 1 ? 'eager' : 'lazy'}
              />
            )}
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className={`left-3 sm:left-6 ${arrowClasses}`} />
      <CarouselNext className={`right-3 sm:right-6 ${arrowClasses}`} />
    </Carousel>
  );
}
