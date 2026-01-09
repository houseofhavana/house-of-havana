'use client'

import React from 'react'
import { Button } from '../../components/ui/button'
import ArrowRight from '../../components/icons/ArrowRight'
import ParallaxImage from '../../components/ui/ParallaxImage'

const Components = () => {
  return (
    <div className='min-h-screen'>
      {/* Hero Section with Parallax */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Parallax Background Image */}
        <ParallaxImage
          src="/design_system.png"
          alt="Background"
          fill
          className="absolute inset-0 w-full h-full object-cover"
          priority
          intensity={0.3}
        />
        
        {/* Content */}
        <div className="relative z-10 text-center text-white pt-16 md:pt-0" >
          <h1 className="heading-2 mb-6">Design System</h1>
          <p className="text-lg max-w-2xl mx-auto text-white/50">
            Explore our comprehensive component library with smooth scroll animations
          </p>
        </div>
      </section>

      {/* Components Section */}
      <section className="py-20 bg-surface">
        <div className='container mx-auto p-8'>
          <div className="space-y-20">
          
            <div>
              <h2 className="mb-8 border-b pb-4 border-stroke/20 heading-2 text-center">Typography</h2>
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-lg mb-4 text-foreground/50">Regular Big Caslon</h3>
                    <div className="space-y-4">
                      <h1>H1 Heading (100/130)</h1>
                      <h2>Gentleman&apos;s Club  (59/130)</h2>
                      <h3>Gentleman&apos;s Club (44.4/130)</h3>
                      <h4>Gentleman&apos;s Club (29.6/130)</h4>
                      <h5>Gentleman&apos;s Club (22/130)</h5>
                      <h6>Gentleman&apos;s Club (18/130)</h6>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg mb-4 text-foreground/50">Italic Big Caslon</h3>
                    <div className="space-y-4">
                      <h1 className="heading-1-italic">Gentleman&apos;s Club (100/130)</h1>
                      <h2 className="heading-2-italic">Gentleman&apos;s Club  (59/130)</h2>
                      <h3 className="heading-3-italic">Gentleman&apos;s Club (44.4/130)</h3>
                      <h4 className="heading-4-italic">Gentleman&apos;s Club (29.6/130)</h4>
                      <h5 className="heading-5-italic">Gentleman&apos;s Club (22/130)</h5>
                      <h6 className="heading-6-italic">Gentleman&apos;s Club (18/130)</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Body Text Section */}
            <div>
              <h2 className="mb-8 border-b pb-4 border-stroke/20 heading-2 text-center">Body Text</h2>
              <div className="space-y-6">
                <p className="text-lg">Body Large (24/Auto). Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <p className="text-md">Body Medium (16/Auto). Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <p className="text-sm">Body Small (14/Auto). Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>

            {/* Usage Examples Section */}
            <div>
              <h2 className="mb-8 border-b pb-4 border-stroke/20 heading-2 text-center">Font Usage Examples</h2>
              <div className="space-y-8">
                {/* Hero Section Example */}
                <div className="bg-background p-6 rounded-lg border border-stroke/20">
                  <h3 className="text-lg mb-4 text-foreground/50">Hero Section Example</h3>
                  <div className="space-y-2">
                    <p className="text-sm text-foreground/50">Preheading</p>
                    <h1 className="heading-1-italic">*WELCOME TO*</h1>
                    <h1 className="heading-1">HAVANA HEIGHTS</h1>
                    <p className="text-lg text-foreground/50 mt-4">Where vintage Havana charm meets today's gentleman.</p>
                  </div>
                </div>

                {/* Quote Example */}
                <div className="bg-background p-6 rounded-lg border border-stroke/20">
                  <h3 className="text-lg mb-4 text-foreground/50">Quote Example</h3>
                  <blockquote className="space-y-4">
                    <h2 className="heading-2-italic">"A good cut isn't just seen — it's felt."</h2>
                    <p className="text-md text-foreground/50">— Usman, Master Barber</p>
                  </blockquote>
                </div>

                {/* Section Headers Example */}
                <div className="bg-background p-6 rounded-lg border border-stroke/20">
                  <h3 className="text-lg mb-4 text-foreground/50">Section Headers Example</h3>
                  <div className="space-y-4">
                    <div>
                      <h2 className="heading-2-italic">*WHY CHOOSE*</h2>
                      <h2 className="heading-2">HAVANA HEIGHTS</h2>
                    </div>
                    <div>
                      <h3 className="heading-3-italic">*MEET YOUR*</h3>
                      <h3 className="heading-3">BARBERS</h3>
                    </div>
                  </div>
                </div>

                {/* Direct Font Class Usage */}
                <div className="bg-background p-6 rounded-lg border border-stroke/20">
                  <h3 className="text-lg mb-4 text-foreground/50">Direct Font Class Usage</h3>
                  <div className="space-y-4">
                    <p className="font-heading text-xl">Regular Big Caslon text using font-heading class</p>
                    <p className="font-heading-italic text-xl">Italic Big Caslon text using font-heading-italic class</p>
                    <p className="font-sans text-md">Body text using Satoshi font (font-sans class)</p>
                  </div>
                </div>

                {/* Font Debugging */}
                <div className="bg-background p-6 rounded-lg border border-stroke/20">
                  <h3 className="text-lg mb-4 text-foreground/50">Font Debugging</h3>
                  <div className="space-y-4">
                    <p className="text-sm text-foreground/50">Testing different approaches:</p>
                    <p style={{fontFamily: 'var(--font-big-caslon-italic)'}} className="text-xl">Inline style with var(--font-big-caslon-italic)</p>
                    <p className="font-heading-italic text-xl">CSS class font-heading-italic</p>
                    <p className="heading-2-italic">heading-2-italic class</p>
                    <p className="text-sm text-foreground/50 mt-4">If the above text looks different from regular Big Caslon, the italic font is working!</p>
                  </div>
                </div>
              </div>
            </div>


            {/* Buttons Section */}
              <div>
                <h2 className="mb-8 border-b pb-4 border-stroke/20 heading-2 text-center">Interactive Elements</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 bg-background border border-stroke/20 p-4 gap-4 rounded-lg">
                  <div className='flex justify-start items-center p-4 bg-surface rounded-lg'>
                      <Button>Contact Us</Button>
                  </div>
                  <div className='flex justify-start items-center p-4 bg-surface rounded-lg'>
                      <Button variant="secondary">Contact Us</Button>
                  </div>
                  <div className='flex justify-start items-center p-4 bg-surface rounded-lg'>
                      <Button variant="tertiary">Contact Us</Button>
                  </div>
                  <div className='flex justify-start items-center p-4 bg-surface rounded-lg'>
                      <Button variant="ghost">Contact Us</Button>
                  </div>
                  <div className='flex justify-start items-center p-4 bg-surface rounded-lg'>
                      <Button size="icon">Contact Us <ArrowRight /></Button>
                  </div>
                  <div className='flex justify-start items-center p-4 bg-surface rounded-lg'>
                      <Button variant="secondary" size="icon">Contact Us <ArrowRight /></Button>
                  </div>
                  <div className='flex justify-start items-center p-4 bg-surface rounded-lg'>
                      <Button variant="tertiary" size="icon">Contact Us <ArrowRight className='stroke-stroke/20'/></Button>
                  </div>
                  <div className='flex justify-start items-center p-4 bg-surface rounded-lg'>
                      <Button variant="ghost" size="icon">Contact Us <ArrowRight className='stroke-stroke/20'/></Button>
                  </div>
                </div>
              </div>
            
          </div>
        </div>
      </section>
    </div>
  )
}

export default Components