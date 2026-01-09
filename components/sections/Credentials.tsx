// NOTE: Now using Swiper instead of react-slick
'use client'

import { useState, useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import parse from 'html-react-parser';

export type CredentialSlide = {
  type: string;
  category: string;
  title: string;
};

export type CredentialTab = {
  label: string;
  value: string;
};

interface CredentialsProps {
  slides: CredentialSlide[];
  tabs?: CredentialTab[];
  disableTabs?: boolean;
  heading?: string;
  supportingText?: string;
  bgSurface?: boolean;
}

export default function Credentials({ slides, tabs = [], disableTabs = false, bgSurface = false, heading = 'Our Credentials', supportingText = 'We bring a history of performance across corporate strategy, capital structuring, and investment advisory — built on deep expertise and delivered with precision.' }: CredentialsProps) {
  const [activeTab, setActiveTab] = useState(tabs[0]?.value || '');
  const navPrev = useRef<HTMLButtonElement | null>(null);
  const navNext = useRef<HTMLButtonElement | null>(null);
  const swiperRef = useRef<any>(null);

  const filteredSlides = disableTabs ? slides : slides.filter((slide) => slide.type === activeTab);

  // Ensure at least 4 slides for looping/navigation
  let displaySlides = filteredSlides;
  while (displaySlides.length < 4) {
    displaySlides = displaySlides.concat(filteredSlides);
  }

  return (
    <section className={`${bgSurface ? 'bg-[color:var(--surface)]' : 'bg-background'} py-16`}>
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-5 border-b border-foreground/10 pb-4 items-end">
          {disableTabs ? (
            <>
              <div className='md:col-span-1'>
                <p className='text-md text-foreground/50'>Our Credentials</p>
              </div>
              <div className='flex gap-8 md:col-span-3'>
                <h2 className="heading-3 max-w-[470px]">{heading}</h2>
              </div>
            </>
          ) : (
            <>
              <div className='md:col-span-1'>
                <p className='text-md text-foreground/50'>Our Credentials</p>
              </div>
              {tabs.length > 0 && (
                <div className='flex gap-8 md:col-span-3'>
                  {tabs.map((tab) => (
                    <button
                      key={tab.value}
                      className={`cursor-pointer heading-2 transition-colors ${activeTab === tab.value ? 'border-primary text-foreground' : 'border-transparent text-foreground/50 hover:text-foreground'}`}
                      onClick={() => setActiveTab(tab.value)}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>
              )}
            </>
          )}
        </div>
        {supportingText && (
          <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
            <p className='text-md text-foreground/50 md:col-start-2 md:col-span-2 pt-4'>{parse(supportingText)}</p>
          </div>
        )}
        <div className="flex items-center justify-end gap-2 mb-4 mt-8">
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
        <Swiper
          key={activeTab}
          modules={[Navigation]}
          spaceBetween={30}
          slidesPerView={4}
          navigation={{ prevEl: navPrev.current, nextEl: navNext.current }}
          loop={true}
          onInit={swiper => {
            // @ts-ignore
            swiper.params.navigation.prevEl = navPrev.current;
            // @ts-ignore
            swiper.params.navigation.nextEl = navNext.current;
            swiper.navigation.init();
            swiper.navigation.update();
          }}
          breakpoints={{
            1024: { slidesPerView: 4 },
            640: { slidesPerView: 2 },
            0: { slidesPerView: 1 },
          }}
        >
          {displaySlides.map((slide, idx) => (
            <SwiperSlide key={idx}>
              <div className="pt-4 text-left bg-transparent shadow-none rounded-none h-full">
                <div className="text-xs text-foreground/50 mb-2 border-b border-foreground/10 pb-2">{slide.category}</div>
                <div className="heading-5 leading-snug text-foreground">
                  {slide.title}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
} 