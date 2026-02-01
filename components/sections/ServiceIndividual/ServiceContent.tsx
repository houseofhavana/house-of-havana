'use client'

import { motion } from "framer-motion";

interface ServiceContentProps {
  sectionTitle: string;
  sectionItems: string[];
  whyChooseTitle: string;
  whyChooseText: string;
}

export default function ServiceContent({
  sectionTitle,
  sectionItems,
  whyChooseTitle,
  whyChooseText,
}: ServiceContentProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
      <div className="md:col-span-6">
        <h2 className="heading-4-italic mb-2">What's Included</h2>
        <h2 className="heading-3 mb-8">{sectionTitle}</h2>

        <ul className="space-y-4">
          {sectionItems.map((item, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="flex items-start gap-3 text-foreground/70"
            >
              <span className="text-foreground/40">•</span>
              <span dangerouslySetInnerHTML={{ __html: item }} />
            </motion.li>
          ))}
        </ul>
      </div>

      <div className="md:col-span-5 md:col-start-8">
        <h2 className="heading-4-italic mb-2">Why Choose Us</h2>
        <h2 className="heading-3 mb-8">{whyChooseTitle}</h2>
        <p className="text-foreground/60 leading-relaxed">
          {whyChooseText}
        </p>
      </div>
    </div>
  );
}
