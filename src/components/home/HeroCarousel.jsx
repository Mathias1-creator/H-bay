import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from '@/components/ui/carousel';
import { IMAGES } from '@/lib/images';

// position = object-position used when the (mostly vertical) photos are
// cropped to fill the full-width banner.
const SLIDES = [
  { src: IMAGES.carouselLogo, alt: 'Heritage Bay Plumbing', logo: true },
  { src: IMAGES.carousel1, alt: 'Commercial mechanical and piping installation', position: 'object-center' },
  { src: IMAGES.carousel3, alt: 'Rough-in drain and vent plumbing on a new build', position: 'object-center' },
  { src: IMAGES.carousel5, alt: 'Underground water and sewer trench on a new construction site', position: 'object-center' },
];

const arrowClasses =
  'h-11 w-11 sm:h-12 sm:w-12 rounded-full border-0 bg-navy/50 text-white ' +
  'hover:bg-amber hover:text-navy backdrop-blur-sm z-30';

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

        <CarouselPrevious className={`left-3 sm:left-6 ${arrowClasses}`} />
        <CarouselNext className={`right-3 sm:right-6 ${arrowClasses}`} />

        {/* Dot indicators */}
        <div className="absolute inset-x-0 bottom-6 z-30 flex justify-center gap-2.5">
          {Array.from({ length: count }).map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => api?.scrollTo(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                selected === i ? 'w-7 bg-amber' : 'w-2.5 bg-white/50 hover:bg-white/80'
              }`}
            />
          ))}
        </div>
      </Carousel>
    </div>
  );
}
