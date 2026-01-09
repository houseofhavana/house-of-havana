'use client'

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from '../ui/header';
import parse from 'html-react-parser';
import Button from '../ui/button';
import { ChevronRight } from 'lucide-react';
import Link from 'next/link';

export interface ServiceItem {
  title: string;
  description?: string | React.ReactNode;
  items?: (string | { name: string; duration?: string; price?: string })[];
}

interface ServicesSectionProps {
  services: ServiceItem[];
  subheading?: string;
  heading?: string;
  bgSurface?: boolean;
  supportingText?: string;
  showCTA?: boolean;
}

export default function ServicesSection({ services, subheading = 'Our', heading = 'Key Components of Our Business Plans', bgSurface = false, supportingText = '', showCTA = false }: ServicesSectionProps) {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <section className={`${bgSurface ? 'bg-surface' : 'bg-background'} py-20`}>
      <div className="container pt-5">
        {subheading && <h2 className="heading-4-italic">{parse(subheading)}</h2>}
        {heading && <h2 className="heading-2 mb-4">{parse(heading)}</h2>}
        {supportingText && <p className="max-w-2xl text-foreground/50">{supportingText}</p>}
        <div className="space-y-4 grid grid-cols-1 md:grid-cols-4 mt-16">
          {services.map((service, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div key={service.title} className="border-b border-foreground/10 last:border-b-0 md:col-span-3 md:col-start-2 flex items-start gap-10">
                <div className='text-sm py-[20px] '>
                  {(idx + 1).toString().padStart(2, '0')}.
                </div>
                <div className='flex-1'>
                  <button
                    className={`cursor-pointer w-full text-left py-4 flex items-center justify-between border-none outline-none `}
                    onClick={() => setOpenIdx(isOpen ? null : idx)}
                    aria-expanded={isOpen}
                    style={{ borderRadius: 0 }}
                  >
                    <span className="heading-5-italic select-none">{parse(service.title)}</span>
                    <motion.span
                      initial={false}
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    >
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="stroke-foreground">
                        <path d="M6 8L10 12L14 8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </motion.span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (service.description || service.items) && (
                      <motion.div
                        key="content"
                        initial="collapsed"
                        animate="open"
                        exit="collapsed"
                        variants={{
                          open: { height: 'auto', opacity: 1 },
                          collapsed: { height: 0, opacity: 0 },
                        }}
                        transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
                        className="overflow-hidden"
                      >
                        {service.description && (
                          <div className="pb-2 text-foreground/50 text-base">
                            {service.description}
                          </div>
                        )}
                        {service.items && service.items.length > 0 && (
                          <ul className="pl-5 pb-4 list-disc text-foreground/80 text-base space-y-2">
                            {service.items.map((item, i) => (
                              <li key={i} className="flex justify-between items-center">
                                {typeof item === 'string' ? (
                                  <span>{item}</span>
                                ) : (
                                  <>
                                    <span className="flex-1">{item.name}</span>
                                    <span className="flex items-center gap-4 text-sm text-foreground/60">
                                      {item.duration && <span>{item.duration}</span>}
                                      {item.price && <span className="font-medium text-foreground">{item.price}</span>}
                                    </span>
                                  </>
                                )}
                              </li>
                            ))}
                          </ul>
                        )}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            );
          })}
        </div>
        
        {/* Optional CTA */}
        {showCTA && (
          <div className="text-center mt-20">
            <Link href="https://getsquire.com/booking/brands/house-of-havana-barbershop" target="_blank">
              <Button variant="primary" size="default">
                Book Your Experience
                <ChevronRight className="stroke-background" height={16} width={16} />
              </Button>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
} 