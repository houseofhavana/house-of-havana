'use client'

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ServiceItem } from "@/components/sections/ServicesSection";

interface RelatedServicesProps {
  services: ServiceItem[];
}

export default function RelatedServices({ services }: RelatedServicesProps) {
  return (
    <>
      <h2 className="heading-4-italic mb-2">Explore More</h2>
      <h2 className="heading-3 mb-8">Related Services</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
        {services
          .filter((related) => related.page?.slug)
          .map((related, idx) => (
            <motion.div
              key={related.page!.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <Link
                href={`/services/${related.page!.slug}`}
                className="block group"
              >
                <div className="border border-foreground/10 rounded-lg p-6 h-full hover:border-foreground/30 transition-all duration-300 hover:shadow-lg bg-surface/50">
                  <div className="flex items-center justify-between">
                    <h3 className="heading-5 text-foreground">
                      {related.page!.h1}
                    </h3>
                    <ArrowRight className="text-foreground/40 group-hover:text-foreground group-hover:translate-x-1 transition-all duration-300" size={20} />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
      </div>
    </>
  );
}
