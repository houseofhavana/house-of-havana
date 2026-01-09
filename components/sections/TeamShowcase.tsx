import { div } from 'framer-motion/client'
import React from 'react'
import Header from '../ui/header'
import parse from 'html-react-parser'
import Button from '../ui/button'
import { ChevronRight } from 'lucide-react'
import Link from 'next/link'

const TeamShowcase = ({children, className, title = 'Our Team', heading = 'Our Team', supportingText = 'Team Supporting Text', bgSurface = false, showCTA = false}: {children: React.ReactNode, className?: string, title?: string, heading?: string, supportingText?: string, bgSurface?: boolean, showCTA?: boolean}) => {
  return (
    <section className={`${className} py-26 ${bgSurface ? 'bg-surface' : 'bg-background'}`}>
      <div className='container'>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-5'>
            <div className='md:col-start-2 md:col-span-3 mb-16'>
            
              {title && <h2 className="heading-4-italic">{parse(title)}</h2>}
              {heading && <h2 className="heading-2 mb-4">{parse(heading)}</h2>}
              <p className="text-md text-foreground/50 md:max-w-1/2 ml-auto">
                {parse(supportingText)}
              </p>
              
            </div>
            <div className='md:col-start-2 md:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-5 gap-y-10'>
                {children}
            </div>
            
            {/* Optional CTA */}
            {showCTA && (
              <div className='md:col-start-2 md:col-span-3 text-center mt-20'>
                <Link href="https://getsquire.com/booking/brands/house-of-havana-barbershop" target="_blank">
                  <Button variant="primary" size="default">
                    Book Your Experience
                    <ChevronRight className="stroke-background" height={16} width={16} />
                  </Button>
                </Link>
              </div>
            )}
        </div>
      </div>
    </section>
  )
}

export default TeamShowcase