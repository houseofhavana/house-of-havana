import React from 'react'
import Button from '@/components/ui/button'
import { ChevronRight } from 'lucide-react'
import Link from 'next/link'

interface BookingCTAProps {
  variant?: 'default' | 'compact'
  bgSurface?: boolean
}

const BookingCTA = ({ variant = 'default', bgSurface = true }: BookingCTAProps) => {
  const bgClass = bgSurface ? 'bg-surface' : 'bg-background'
  
  if (variant === 'compact') {
    return (
      <section className={`py-16 ${bgClass}`}>
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="md:col-span-8 md:col-start-3 text-center">
              <h2 className="heading-4-italic mb-2">Ready to</h2>
              <h2 className="heading-2 mb-6">BOOK YOUR EXPERIENCE?</h2>
              <p className="text-foreground/60 leading-relaxed mb-8 max-w-xl mx-auto">
                Experience the House of Havana difference. Reserve your appointment today.
              </p>
              <Link href="https://getsquire.com/booking/brands/house-of-havana-barbershop" target="_blank">
                <Button variant="primary">
                  Book Your Experience
                  <ChevronRight className="stroke-background" height={16} width={16} />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className={`py-20 ${bgClass}`}>
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-6 md:col-start-4 text-center">
            <h2 className="heading-5-italic mb-2">Ready to Experience</h2>
            <h2 className="heading-1 mb-8">THE RITUAL?</h2>
            <p className="text-foreground/50 leading-relaxed mb-10 max-w-lg mx-auto">
              Join the growing community of satisfied clients. Book your appointment today and discover why House of Havana is Saskatoon's premier grooming destination.
            </p>
            <Link href="https://getsquire.com/booking/brands/house-of-havana-barbershop" target="_blank">
              <Button variant="primary" size="default">
                Book Your Experience
                <ChevronRight className="stroke-background" height={16} width={16} />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BookingCTA

