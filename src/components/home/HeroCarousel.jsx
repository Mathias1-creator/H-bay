import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from '@/components/ui/carousel';
import { IMAGES } from '@/lib/images';

// caption = short trade description shown bottom-left (swap for real project
// names + cities when available). position = object-position for the crop.
const SLIDES = [
  { src: IMAGES.carouselLogo, alt: 'Heritage Bay Plumbing', logo: true },
  { src: IMAGES.carousel1, alt: 'Commercial mechanical and piping installation', caption: 'Commercial Mechanical & Piping', position: 'object-center' },
  { src: IMAGES.carousel2, alt: 'Plumber running pipe through wall framing', caption: 'New Construction Rough-In', position: 'object-center' },
  { src: IMAGES.carousel3, alt: 'Rough-in drain and vent plumbing on a new build', caption: 'Drain, Waste & Vent Rough-In', position: 'object-center' },
  { src: IMAGES.carousel4, alt: 'Overhead piping and mechanical rough-in', caption: 'Overhead Piping & Mechanical', position: 'object-center' },
  { src: IMAGES.carousel5, alt: 'Underground water and sewer trench on a new construction site', caption: 'Underground Utilities', position: 'object-center' },
];

const arrowClasses =
  'h-11 w-11 sm:h-12 sm:w-12 rounded-full border-0 bg-navy/40 text-white ' +
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
        <CarouselContent className="ml-0 h-[72vh] min-h-[440px] max-h-[780px]">
          {SLIDES.map((slide, i) => (
            <CarouselItem key={i} className="pl-0 h-full basis-full relative">
              {slide.logo ? (
                <div className="w-full h-full bg-navy flex items-center justify-center p-10 sm:p-16">
                  <img
                    src={slide.src}
                    alt={slide.alt}
                    className="max-h-[68%] max-w-[80%] object-contain"
                    loading="eager"
                  />
                </div>
              ) : (
                <>
                  <img
                    src={slide.src}
                    alt={slide.alt}
                    className={`w-full h-full object-cover ${slide.position}`}
                    loading={i <= 1 ? 'eager' : 'lazy'}
                  />
                  {slide.caption && (
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 via-black/25 to-transparent pt-24 pb-14 sm:pb-16">
                      <div className="max-w-7xl mx-auto px-5 sm:px-8">
                        <span className="inline-block bg-amber text-navy font-bold text-sm sm:text-base px-4 py-2 rounded uppercase tracking-wide">
                          {slide.caption}
                        </span>
                      </div>
                    </div>
                  )}
                </>
              )}
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious className={`left-3 sm:left-6 ${arrowClasses}`} />
        <CarouselNext className={`right-3 sm:right-6 ${arrowClasses}`} />

        {/* Dot indicators */}
        <div className="absolute inset-x-0 bottom-5 z-30 flex justify-center gap-2.5">
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
