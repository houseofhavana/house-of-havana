'use client'

import { motion } from 'framer-motion';
import parse from 'html-react-parser';
import { ArrowRight, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import React from 'react';
import Button from '../ui/button';

export interface ServiceItem {
  title: string;
  description?: string | React.ReactNode;
  items?: (string | { name: string; duration?: string; price?: string })[];
  slug?: string;
  page?: {
    slug: string;
    [key: string]: any;
  };
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
  return (
    <section className={`${bgSurface ? 'bg-surface' : 'bg-background'} py-20`}>
      <div className="container pt-5">
        {subheading && <h2 className="heading-4-italic">{parse(subheading)}</h2>}
        {heading && <h2 className="heading-2 mb-4">{parse(heading)}</h2>}
        {supportingText && <p className="max-w-2xl text-foreground/50">{supportingText}</p>}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16">
          {services.map((service, idx) => {
            const serviceSlug = service.slug || service.page?.slug;

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <Link
                  href={serviceSlug ? `/services/${serviceSlug}` : '#'}
                  className="block h-full group"
                >
                  <div className="border border-foreground/10  p-8 h-full hover:border-foreground/30 transition-all duration-300 hover:shadow-lg bg-surface/50">
                    <div className="flex items-start justify-between mb-4">
                      <div className="text-sm text-foreground/40">
                        {(idx + 1).toString().padStart(2, '0')}.
                      </div>
                      <ArrowRight className="text-foreground/40 group-hover:text-foreground group-hover:translate-x-1 transition-all duration-300" size={20} />
                    </div>

                    <h3 className="heading-4-italic mb-3">{parse(service.title)}</h3>

                    {service.description && (
                      <p className="text-foreground/60 text-base mb-4">
                        {service.description}
                      </p>
                    )}

                    {service.items && service.items.length > 0 && (
                      <ul className="space-y-3 mt-6">
                        {service.items.map((item, i) => (
                          <li key={i} className="flex justify-between items-center text-sm border-t border-foreground/10 pt-3">
                            {typeof item === 'string' ? (
                              <span className="text-foreground/70">{item}</span>
                            ) : (
                              <>
                                <span className="text-foreground/70">{item.name}</span>
                                <span className="flex items-center gap-3 text-xs">
                                  {item.duration && <span className="text-foreground/50">{item.duration}</span>}
                                  {item.price && <span className="font-medium text-foreground">{item.price}</span>}
                                </span>
                              </>
                            )}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </Link>
              </motion.div>
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