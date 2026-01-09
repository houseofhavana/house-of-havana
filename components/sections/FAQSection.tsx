'use client'

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import parse from 'html-react-parser';

export interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  faqs: FAQItem[];
  subheading?: string;
  heading?: string;
  bgSurface?: boolean;
}

export default function FAQSection({ 
  faqs, 
  subheading = 'Frequently Asked', 
  heading = 'QUESTIONS', 
  bgSurface = false 
}: FAQSectionProps) {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <section className={`${bgSurface ? 'bg-surface' : 'bg-background'} py-20`}>
      <div className="container pt-5">
        <div className="text-center mb-12">
          {subheading && <h2 className="heading-4-italic">{parse(subheading)}</h2>}
          {heading && <h2 className="heading-2 mb-4">{parse(heading)}</h2>}
        </div>
        
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div 
                key={idx} 
                className="border border-foreground/10 overflow-hidden bg-background/50"
              >
                <button
                  className="cursor-pointer w-full text-left p-6 flex items-center justify-between border-none outline-none hover:bg-foreground/5 transition-colors"
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  aria-expanded={isOpen}
                >
                  <span className="font-medium text-lg pr-4">{faq.question}</span>
                  <motion.span
                    initial={false}
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    className="flex-shrink-0"
                  >
                    <svg 
                      width="24" 
                      height="24" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      xmlns="http://www.w3.org/2000/svg" 
                      className="stroke-foreground"
                    >
                      <path 
                        d="M6 9L12 15L18 9" 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                      />
                    </svg>
                  </motion.span>
                </button>
                
                <AnimatePresence initial={false}>
                  {isOpen && (
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
                      <div className="px-6 pb-6 text-foreground/70 leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
