import React from 'react'
import ParallaxImage from '../ui/ParallaxImage'
import { Button } from '../ui/button'
import { ServiceHeroData } from '@/lib/types'
import ArrowRight from '../icons/ArrowRight'
import parse from 'html-react-parser'

const ServiceHero: React.FC<ServiceHeroData> = ({
  subheading,
  heading,
  className = '',
  backgroundImages,
  showContactForm = true
}) => {
  return (
    <div className='bg-background text-foreground relative overflow-hidden z-10'>
      <div className="container h-screen md:h-[768px] ">
        <ParallaxImage
          responsiveImages={backgroundImages}
          alt="Background"
          fill
          className="absolute inset-0 w-full h-full object-cover -z-10"
          priority
          intensity={0.3}
        />
        
          <div className='flex flex-col justify-end items-start h-full'>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4 pb-10 md:pb-24 items-end'>
              <div className={`md:col-span-2 ${className}`}>
                <p className='text-sm text-foreground/50 mb-4'>
                 {subheading}
                </p>
                <h1 className='heading-2 leading-snug'>
                 {parse(heading)}
                </h1>
              </div>
              {showContactForm && (
                <div className='bg-surface p-8 text-foreground hidden md:block'>
                  <h2 className="heading-4">
                    Submit an Inquiry
                  </h2>
                  <hr className='border-foreground/10 my-4' />
                  <form>
                    <div className="flex flex-col gap-4">
                      <div>
                        <input
                          type="text"
                          placeholder="Full Name"
                          className="w-full bg-transparent border-b border-foreground/10 focus:outline-none py-2 px-0 placeholder:text-foreground/50"
                        />
                      </div>
                      <div className="flex gap-4">
                        <input
                          type="email"
                          placeholder="Email"
                          className="w-full bg-transparent border-b border-foreground/10 focus:outline-none py-2 px-0 placeholder:text-foreground/50"
                        />
                        <input
                          type="tel"
                          placeholder="Phone Number"
                          className="w-full bg-transparent border-b border-foreground/10 focus:outline-none py-2 px-0 placeholder:text-foreground/50"
                        />
                      </div>
                      <div>
                        <input
                          type="text"
                          placeholder="Company"
                          className="w-full bg-transparent border-b border-foreground/10 focus:outline-none py-2 px-0 placeholder:text-foreground/50"
                        />
                      </div>
                      <div>
                        <textarea
                          placeholder="Message"
                          rows={4}
                          className="w-full bg-transparent border-b border-foreground/10 focus:outline-none py-2 px-0 placeholder:text-foreground/50 resize-none"
                        />
                      </div>
                      <Button variant="secondary" size="icon" type='submit'>Submit Inquiry <ArrowRight /></Button>
                    </div>
                  </form>
                </div>
              )}
            </div>
          </div>
      </div>
    </div>
  )
}

export default ServiceHero