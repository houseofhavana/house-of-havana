// NOTE: Now using Swiper instead of react-slick
'use client'

import { useState, useRef, useLayoutEffect, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import NewsCard from '../ui/news-card';

export type Insight = {
  image: string;
  date: string;
  title: string;
  excerpt: string;
};

interface InsightsSliderProps {
  insights: Insight[];
  bgSurface?: boolean;
  heading?: string;
}

export default function InsightsSlider({ insights, bgSurface = false, heading = 'Insights and Thought Leadership' }: InsightsSliderProps) {
  const navPrev = useRef<HTMLButtonElement | null>(null);
  const navNext = useRef<HTMLButtonElement | null>(null);
  const [swiperInstance, setSwiperInstance] = useState<any>(null);

  // Ensure at least 4 slides for looping/navigation
  let displayInsights = insights;
  while (displayInsights.length < 4) {
    displayInsights = displayInsights.concat(insights);
  }

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
    <section className={`${bgSurface ? 'bg-[color:var(--surface)]' : ''}`}>
      <div className="container">
        <div className='relative mb-8'>
          <div className="flex items-center justify-center gap-2">
            <button
              ref={navPrev}
              className={`w-12 h-12 flex items-center justify-center cursor-pointer hover:bg-foreground/5 transition ${bgSurface ? 'bg-surface' : 'bg-background'}`}
              aria-label="Previous"
              type="button"
            >
              <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" className='stroke-foreground/50'><path d="M15 18l-6-6 6-6"/></svg>
            </button>
            <button
              ref={navNext}
              className={`w-12 h-12 flex items-center justify-center cursor-pointer hover:bg-foreground/5 transition ${bgSurface ? 'bg-surface' : 'bg-background'}`}
              aria-label="Next"
              type="button"
            >
              <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" className='stroke-foreground/50'><path d="M9 6l6 6-6 6"/></svg>
            </button>
          </div>
        </div>
        <hr className='border-foreground/10 mb-8' />
        <Swiper
          modules={[Navigation]}
          spaceBetween={30}
          slidesPerView={3}
          loop={true}
          onSwiper={setSwiperInstance}
          breakpoints={{
            1024: { slidesPerView: 3 },
            640: { slidesPerView: 2 },
            0: { slidesPerView: 1 },
          }}
          className="!flex h-full"
        >
          {displayInsights.map((insight, idx) => (
            <SwiperSlide key={idx}>
              <NewsCard
                image={insight.image}
                title={insight.title}
                excerpt={insight.excerpt}
                date={insight.date}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
} 