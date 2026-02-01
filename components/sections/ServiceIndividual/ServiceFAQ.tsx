'use client'

import { motion } from "framer-motion";

interface FAQ {
  question: string;
  answer: string;
}

interface ServiceFAQProps {
  faqTitle: string;
  faqs: FAQ[];
}

export default function ServiceFAQ({ faqTitle, faqs }: ServiceFAQProps) {
  return (
    <>
      <div className="text-center mb-12">
        <h2 className="heading-4-italic">Common Questions</h2>
        <h2 className="heading-2 mb-4">{faqTitle}</h2>
      </div>

      <div className="max-w-3xl mx-auto space-y-6">
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="border border-foreground/10 bg-surface/50 p-8 hover:border-foreground/20 transition-colors"
          >
            <h3 className="heading-5 text-foreground mb-3">
              {faq.question}
            </h3>
            <p className="text-foreground/70 leading-relaxed">
              {faq.answer}
            </p>
          </motion.div>
        ))}
      </div>
    </>
  );
}
