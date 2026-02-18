'use client'

import FAQSection from "@/components/sections/FAQSection";
import HeroInner from "@/components/sections/HeroInner";
import { servicesList, servicesPageData } from "@/data/services";
import { motion } from 'framer-motion';
import parse from 'html-react-parser';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

const ServicesPage = () => (
  <>
    <>
  <HeroInner
    subheading="Our"
    title="SERVICES"
    supportingText={servicesPageData.intro}
  />

  {/* SEO Intro Section */}
  <section className="py-12 bg-background">
    <div className="container max-w-4xl">
      <h1 className="text-3xl md:text-4xl font-heading text-primary mb-4">
        Barber Services in Saskatoon
      </h1>

    <p className="text-foreground/60 mb-4">
  House of Havana Barbershop offers premium barber services in Saskatoon, including men’s haircuts,
  <Link href="/services/fade-haircut-saskatoon" className="underline mx-1">
    skin fades
  </Link>,
  <Link href="/services/beard-grooming-saskatoon" className="underline mx-1">
    beard grooming
  </Link>,
  and hot towel shaves. Every service is tailored to your hair type, face shape, and lifestyle.
</p>

      <p className="text-foreground/60">
        Explore our full range of professional barber services below and book your next appointment with confidence.
      </p>
    </div>
  </section>

  <section className="bg-surface py-20">

      <div className="container pt-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {servicesList.map((service, idx) => {
            const serviceSlug = service.page?.slug;

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <div className="h-full">
                  <div className="border border-foreground/10 p-8 h-full hover:border-foreground/30 transition-all duration-300 bg-surface/50">
                    <div className="flex items-start justify-between mb-4">
                      <div className="text-sm text-foreground/40">
                        {(idx + 1).toString().padStart(2, '0')}.
                      </div>
                      <Link
                        href={serviceSlug ? `/services/${serviceSlug}` : '#'}
                        className="group/link"
                      >
                        <ArrowRight className="text-foreground/40 group-hover/link:text-foreground group-hover/link:translate-x-1 transition-all duration-300" size={20} />
                      </Link>
                    </div>

                    <h3 className="heading-4-italic mb-3">{parse(service.title)}</h3>

                    {service.description && (
                      <p className="text-foreground/60 text-base mb-6">
                        {service.description}
                      </p>
                    )}

                    {/* Service Items List */}
                    {service.items && service.items.length > 0 && (
                      <>
                        <div className="space-y-4 mt-6 pt-6 border-t border-foreground/10">
                          {service.items.map((item, itemIdx) => {
                            const itemName = typeof item === 'string' ? item : item.name;
                            const duration = typeof item === 'object' ? item.duration : undefined;
                            const price = typeof item === 'object' ? item.price : undefined;

                            return (
                              <div key={itemIdx} className="group/item">
                                <div className="flex items-baseline justify-between gap-3">
                                  <div className="flex-1">
                                    <span className="text-foreground/80 text-sm font-medium">
                                      {itemName}
                                    </span>
                                    {duration && (
                                      <span className="text-foreground/40 text-xs ml-2">
                                        ({duration})
                                      </span>
                                    )}
                                  </div>
                                  <div className="flex-shrink-0 border-b border-dotted border-foreground/20 flex-grow max-w-[60px] mb-1"></div>
                                  {price && (
                                    <span className="text-foreground/70 text-sm font-medium whitespace-nowrap">
                                      {price}
                                    </span>
                                  )}
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
        <p className="text-sm text-foreground/50 mt-6 text-center">*Price depends on barber</p>
      </div>
    </section>

    <FAQSection faqs={servicesPageData.faqs} bgSurface={false} />
  </>
);

export default ServicesPage;
