// NOTE: Now using Swiper instead of react-slick
'use client'

import { useState, useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import parse from 'html-react-parser';
import ReviewCard from '../ui/review-card';

export type Value = {
  title: string;
  description: string;
};

interface OurValuesSliderProps {
  values: Value[];
  bgSurface?: boolean;
  heading?: string;
  supportingText?: string;
}

export default function OurValuesSlider({ values, heading = 'What Sets Us Apart?', bgSurface = false, supportingText }: OurValuesSliderProps) {
  const navPrev = useRef<HTMLButtonElement | null>(null);
  const navNext = useRef<HTMLButtonElement | null>(null);
  const [swiperInstance, setSwiperInstance] = useState<any>(null);

  // Ensure at least 4 slides for looping/navigation
  let displayValues = values;
  while (displayValues.length < 4) {
    displayValues = displayValues.concat(values);
  }

  // --- Equal height logic ---
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  useEffect(() => {
    if (!cardRefs.current.length) return;
    let maxHeight = 0;
    cardRefs.current.forEach((ref) => {
      if (ref) {
        ref.style.height = 'auto'; // reset first
        maxHeight = Math.max(maxHeight, ref.offsetHeight);
      }
    });
    cardRefs.current.forEach((ref) => {
      if (ref) ref.style.height = maxHeight + 'px';
    });
  }, [displayValues]);
  // --- End equal height logic ---

  useEffect(() => {
    if (
      swiperInstance &&
      navPrev.current &&
      navNext.current &&
      swiperInstance.params.navigation
    ) {
      swiperInstance.params.navigation.prevEl = navPrev.current;
      swiperInstance.params.navigation.nextEl = navNext.current;
      swiperInstance.navigation.destroy();
      swiperInstance.navigation.init();
      swiperInstance.navigation.update();
    }
  }, [swiperInstance, navPrev, navNext]);

  return (
    <div className="w-full">
      <div className="w-full">
        <div className='relative mb-8'>
          <div className="flex items-center justify-center  gap-2">
            <button
              ref={navPrev}
              className={`w-12 h-12 flex items-center justify-center cursor-pointer hover:bg-surface transition ${bgSurface ? 'bg-background' : 'bg-[color:var(--surface)]'}`}
              aria-label="Previous"
              type="button"
            >
              <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" className='stroke-foreground/50'><path d="M15 18l-6-6 6-6"/></svg>
            </button>
            <button
              ref={navNext}
              className={`w-12 h-12 flex items-center justify-center cursor-pointer hover:bg-surface transition ${bgSurface ? 'bg-background' : 'bg-[color:var(--surface)]'}`}
              aria-label="Next"
              type="button"
            >
              <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" className='stroke-foreground/50'><path d="M9 6l6 6-6 6"/></svg>
            </button>
          </div>
        </div>
        <hr className='border-foreground/10 mb-8' />
        {
          supportingText && (
            <p className='text-foreground/50 mb-16 max-w-[760px]'>
              {parse(supportingText)}
            </p>
          )
        }
        <div className="">
          <Swiper
            modules={[Navigation]}
            spaceBetween={30}
            slidesPerView={4}
            loop={true}
            onSwiper={setSwiperInstance}
            breakpoints={{
              1024: { slidesPerView: 4 },
              640: { slidesPerView: 2 },
              0: { slidesPerView: 1 },
            }}
            className="!flex h-full"
          >
            {displayValues.map((value, idx) => (
              <SwiperSlide key={idx} className={`!flex !items-stretch h-full ${bgSurface ? 'bg-background' : 'bg-surface'}`}>
                <ReviewCard
                  name={value.title}
                  review={value.description}
                  rating={5}
                  source="google"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
} 