import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import { IMAGES } from '@/lib/images';

const SLIDES = [
  { src: IMAGES.carouselLogo, alt: 'Heritage Bay Plumbing', logo: true },
  { src: IMAGES.carousel1, alt: 'Commercial mechanical and piping installation' },
  { src: IMAGES.carousel3, alt: 'Rough-in drain and vent plumbing on a new build' },
  { src: IMAGES.carousel5, alt: 'Underground water and sewer trench on a new construction site' },
  { src: IMAGES.carousel6, alt: 'Commercial building exterior with exposed conduit and piping run' },
  { src: IMAGES.carousel7, alt: 'Overhead commercial mechanical and electrical piping' },
  { src: IMAGES.carousel8, alt: 'Heritage Bay Plumbing service trucks' },
];

export default function HeroCarousel() {
  const [api, setApi] = React.useState(null);
  const [selected, setSelected] = React.useState(0);
  const [count, setCount] = React.useState(SLIDES.length);

  React.useEffect(() => {
    if (!api) return;
    setCount(api.scrollSnapList().length);
    setSelected(api.selectedScrollSnap());
    const onSelect = () => setSelected(api.selectedScrollSnap());
    api.on('select', onSelect);
    return () => api.off('select', onSelect);
  }, [api]);

  // Auto-advance every 4s — no arrows, and the dots below are a display-only
  // progress indicator (not buttons): this stays a purely automatic slideshow.
  React.useEffect(() => {
    if (!api) return;
    const id = setInterval(() => api.scrollNext(), 4000);
    return () => clearInterval(id);
  }, [api, selected]);

  return (
    <div className="relative bg-navy">
      <Carousel
        opts={{ loop: true }}
        setApi={setApi}
        className="relative w-full"
        aria-label="Heritage Bay Plumbing project photos"
      >
        <CarouselContent className="ml-0 h-[calc(100svh-5rem)] md:h-[calc(100svh-6rem)]">
          {SLIDES.map((slide, i) => (
            <CarouselItem key={i} className="pl-0 h-full basis-full">
              {slide.logo ? (
                <div className="w-full h-full bg-navy flex items-center justify-center p-10 sm:p-16">
                  <img
                    src={slide.src}
                    alt={slide.alt}
                    className="max-h-[70%] max-w-[80%] object-contain"
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

        {/* Display-only progress dots — not clickable, matches the current slide */}
        <div className="absolute inset-x-0 bottom-6 z-30 flex justify-center gap-2.5">
          {Array.from({ length: count }).map((_, i) => (
            <span
              key={i}
              aria-hidden="true"
              className={`h-2.5 rounded-full transition-all duration-300 ${
                selected === i ? 'w-7 bg-amber' : 'w-2.5 bg-white/50'
              }`}
            />
          ))}
        </div>
      </Carousel>
    </div>
  );
}
