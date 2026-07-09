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
// names + cities when available). The photos are 3:4, so a 3:4 card shows them
// complete with no crop and no margins.
const SLIDES = [
  { src: IMAGES.carouselLogo, alt: 'Heritage Bay Plumbing', logo: true },
  { src: IMAGES.carousel1, alt: 'Commercial mechanical and piping installation', caption: 'Commercial Mechanical & Piping' },
  { src: IMAGES.carousel2, alt: 'Plumber running pipe through wall framing', caption: 'New Construction Rough-In' },
  { src: IMAGES.carousel3, alt: 'Rough-in drain and vent plumbing on a new build', caption: 'Drain, Waste & Vent Rough-In' },
  { src: IMAGES.carousel4, alt: 'Overhead piping and mechanical rough-in', caption: 'Overhead Piping & Mechanical' },
  { src: IMAGES.carousel5, alt: 'Underground water and sewer trench on a new construction site', caption: 'Underground Utilities' },
];

const arrowClasses =
  'h-10 w-10 rounded-full border-0 bg-navy/60 text-white ' +
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
    <div className="relative mx-auto w-full max-w-[480px] lg:max-w-[520px]">
      <Carousel
        opts={{ loop: true }}
        setApi={setApi}
        className="relative w-full"
        aria-label="Heritage Bay Plumbing project photos"
      >
        <CarouselContent className="ml-0">
          {SLIDES.map((slide, i) => (
            <CarouselItem key={i} className="pl-0 basis-full">
              {/* 3:4 card — portrait photos fill it exactly, nothing cropped */}
              <div className="relative aspect-[3/4] w-full rounded-2xl overflow-hidden bg-navy border border-white/10 shadow-2xl">
                <img
                  src={slide.src}
                  alt={slide.alt}
                  className={`w-full h-full object-contain ${slide.logo ? 'p-10' : ''}`}
                  loading={i <= 1 ? 'eager' : 'lazy'}
                />
                {slide.caption && (
                  <div className="absolute bottom-4 left-4 z-20">
                    <span className="inline-block bg-amber text-navy font-bold text-xs sm:text-sm px-3 py-1.5 rounded uppercase tracking-wide shadow-lg">
                      {slide.caption}
                    </span>
                  </div>
                )}
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious className={`left-3 ${arrowClasses}`} />
        <CarouselNext className={`right-3 ${arrowClasses}`} />
      </Carousel>

      {/* Dot indicators below the card */}
      <div className="mt-5 flex justify-center gap-2.5">
        {Array.from({ length: count }).map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => api?.scrollTo(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`h-2.5 rounded-full transition-all duration-300 ${
              selected === i ? 'w-7 bg-amber' : 'w-2.5 bg-white/40 hover:bg-white/70'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
