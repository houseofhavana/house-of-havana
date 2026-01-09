import React from 'react'
import Image from 'next/image'
import CTAButton from '../ui/ctaButton'
import parse from 'html-react-parser'
import Link from 'next/link'

const CallToAction = ({buttonText, secondButton, secondLink, heading = 'Let&apos;s Talk Growth', description = 'We&apos;d love to hear about your ambition. Whether you&apos;re aiming to double your revenue, enter new markets, or transform your business model, our team is here to guide you'}: {buttonText?: string, secondButton?: string, secondLink?: string, heading?: string, description?: string}) => {
  return (
    <div className='bg-background text-foreground relative overflow-hidden z-10'>
      <div className="container py-20">
        <Image
          src="/call_to_action.png"
          alt="call_to_action"
          fill
          className="absolute inset-0 w-full h-full object-cover object-center -z-10"
          priority
          quality={100}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/w8AAn8B9p6k9wAAAABJRU5ErkJggg=="
        />
          <div className='flex flex-col justify-between items-start h-full gap-10'>
            <div className='flex flex-col gap-6'>
              <h2 className='heading-2 max-w-[640px]'>
                {parse(heading)}
              </h2>
              <p className='text-foreground/50 max-w-[450px]'>
                {parse(description)}
              </p>
            </div>
            <div className='flex gap-4'>
              <CTAButton text={buttonText || 'Schedule your Consultation'} />
              {secondButton && secondLink && (
                <CTAButton text={secondButton} link={secondLink} iconURL='/icons/pdf-download.svg' />
              )}
            </div>
          </div>
      </div>
    </div>
  )
}

export default CallToAction