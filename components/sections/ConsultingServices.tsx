'use client'

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ArrowRight from '../icons/ArrowRight';
import Link from 'next/link';
import Header from '../ui/header';

const ACCORDION_DATA = [
  {
    title: 'Strategy Consulting',
    cards: [
      { title: 'Feasibility Study' },
      { title: 'Business Plan' },
      { title: 'Growth Strategy' },
      { title: 'Brand Strategy' },
      { title: 'Real Estate Strategy' },
    ],
  },
  {
    title: 'Corporate Finance Consulting',
    cards: [
      { title: 'Business Valuation' },
      { title: 'Transaction Support' },
      { title: 'M&A Consulting' },
    ],
  },
  {
    title: 'Private Capital Consulting',
    cards: [
      { title: 'Commercial Due Diligence' },
      { title: 'Portfolio Valuation' },
      { title: 'Value Creation' },
    ],
  },
  {
    title: 'Turnaround & Restructuring',
    cards: [
      { title: 'Turnaround Advisory' },
      { title: 'Restructuring Consulting' },
    ],
  },
];

export default function ConsultingServices({ bgSurface = false }: { bgSurface?: boolean }) {
  const [openIdx, setOpenIdx] = useState(0);

  return (
    <section className={bgSurface ? "bg-surface pb-16 pt-5" : "bg-background pb-16 pt-5"}>
      <div className="container">
        <Header text="Our Services" className="mb-26" />
        <div className="mb-10">
          <h2 className="heading-4-italic">Our </h2>
          <h2 className="heading-2 mb-4">Grooming <br />Services</h2>
          <p className="max-w-2xl text-foreground/50">
          At House of Havana, grooming is a ritual — not a routine. We offer a carefully curated menu of services designed for modern gentlemen who value craft, comfort, and confidence. Whether you&apos;re here for a sharp fade, a sculpted beard, or a complete transformation, every detail is delivered with precision and care.
          </p>
        </div>
        <div className="space-y-4">
          {ACCORDION_DATA.map((item, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div key={item.title} className='border-b border-foreground/10 last:border-b-0'>
                <button
                  className={`cursor-pointer w-full text-left md:px-6 py-4 transition flex items-center justify-between border-none outline-none ${isOpen ? (bgSurface ? 'bg-[color:var(--background)]' : 'bg-[color:var(--surface)]') : 'bg-transparent'}`}
                  onClick={() => setOpenIdx(idx === openIdx ? -1 : idx)}
                  aria-expanded={isOpen}
                  style={{ borderRadius: 0 }}
                >
                  <span className="heading-4 select-none">{item.title}</span>
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
                  {isOpen && item.cards.length > 0 && (
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
                      className={`overflow-hidden ${bgSurface ? 'bg-background' : 'bg-surface'} border-foreground/10`}
                    >
                      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 my-6">
                        {item.cards.map((card, cidx) => (
                          <Link href={`/services/${card.title.toLowerCase().replace(/\s+/g, '-')}`}
                            key={card.title}>
                            <motion.button
                              whileHover={{ backgroundColor: 'rgba(9,26,42,0.03)' }}
                              whileTap={{ scale: 0.98 }}
                              transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                              className={`cursor-pointer flex flex-col items-end justify-start gap-5 px-6 py-6 border-b border-foreground/10 bg-transparent w-full text-left group focus:outline-none`}
                              style={{ borderTop: 'none', borderLeft: 'none' }}
                            >
                              <span className="heading-6 text-foreground group-hover:text-primary transition-colors duration-200 w-full text-left">
                                {card.title.split(' ').length > 1 ? (
                                  <span className="block">
                                    {card.title.split(' ').slice(0, Math.ceil(card.title.split(' ').length / 2)).join(' ')}
                                    <br />
                                    {card.title.split(' ').slice(Math.ceil(card.title.split(' ').length / 2)).join(' ')}
                                  </span>
                                ) : (
                                  card.title
                                )}
                              </span>
                              <ArrowRight className="stroke-foreground/50 group-hover:stroke-primary transition-colors duration-200" width={18} height={18} />
                            </motion.button>
                          </Link>
                        ))}
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