import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import { IMAGES } from '@/lib/images';

// position = object-position used when the (mostly vertical) photos are
// cropped to fill the full-width banner.
const SLIDES = [
  { src: IMAGES.carouselLogo, alt: 'Heritage Bay Plumbing', logo: true },
  { src: IMAGES.carousel1, alt: 'Commercial mechanical and piping installation', position: 'object-center' },
  { src: IMAGES.carousel3, alt: 'Rough-in drain and vent plumbing on a new build', position: 'object-center' },
  { src: IMAGES.carousel5, alt: 'Underground water and sewer trench on a new construction site', position: 'object-center' },
  { src: IMAGES.carousel6, alt: 'Commercial building exterior with exposed conduit and piping run', position: 'object-center' },
  { src: IMAGES.carousel7, alt: 'Overhead commercial mechanical and electrical piping', position: 'object-center' },
  { src: IMAGES.carousel8, alt: 'Heritage Bay Plumbing service trucks', position: 'object-center' },
];

export default function HeroCarousel() {
  const [api, setApi] = React.useState(null);
  const [selected, setSelected] = React.useState(0);

  React.useEffect(() => {
    if (!api) return;
    setSelected(api.selectedScrollSnap());
    const onSelect = () => setSelected(api.selectedScrollSnap());
    api.on('select', onSelect);
    return () => api.off('select', onSelect);
  }, [api]);

  // Auto-advance every 4s — no manual controls (no arrows, no dots); this is
  // a purely passive, automatic slideshow.
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
                  className={`w-full h-full object-cover ${slide.position}`}
                  loading={i <= 1 ? 'eager' : 'lazy'}
                />
              )}
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}
