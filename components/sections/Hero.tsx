import React from 'react'
import ParallaxImage from '../ui/ParallaxImage'
import { HeroData } from '@/lib/types'
import parse from 'html-react-parser'
import Link from 'next/link'
import Button from '@/components/ui/button'
import { ChevronRight } from 'lucide-react'

const Hero: React.FC<HeroData> = ({
  backgroundImages,
  subheading = "The",
  heading = "Gentleman&apos;s <br /> Club",
  supportingText = "Crafted scissors. Steam and silence. A glass of something neat. At House of Havana, grooming is the ceremony.",
  className = ''
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
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20 lg:from-black/60 lg:via-black/20 lg:to-transparent -z-10" />
        <div className='flex flex-col justify-end pb-5 md:pb-0 items-start h-full'>
          <div className='pb-4 mb-5 w-full grid grid-cols-1 md:grid-cols-2 items-end border-b border-foreground/10'>
            <div className='relative pt-6'>
              <p className='heading-4-italic md:heading-3-italic mb-2'>
  {subheading}
</p>
              <h1
  aria-label="House of Havana Barbershop in Saskatoon"
  className={`md:!text-6xl leading-[0.9] ${className}`}
>
  {parse(heading)}
</h1>

            </div>
            <p className='text-foreground/50 !text-sm'>
              {supportingText}
            </p>
          </div>
          <div className='w-full md:w-auto mb-8'>
            <Link href="https://getsquire.com/booking/brands/house-of-havana-barbershop" target="_blank">
              <Button variant="primary" size="default" className="w-full md:w-auto">
                Book Your Experience
                <ChevronRight className="stroke-background" height={16} width={16} />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
