import HeroInner from '@/components/sections/HeroInner'
import Button from '@/components/ui/button'
import { mergeSEO } from '@/lib/seo'
import { ChevronRight, Quote, Star } from 'lucide-react'
import Link from 'next/link'

export const metadata = mergeSEO({
  title: "Client Reviews",
  description:
    "See why clients love House Of Havana. Read reviews from gentlemen who have experienced Saskatoon's premier barbershop.",
  keywords: [
    "barber reviews saskatoon",
    "house of havana reviews",
    "best barber saskatoon",
  ],
  canonical: "/reviews",
});


interface Review {
  name: string
  service: string
  rating: number
  quote: string
  date: string
}

const FEATURED_REVIEWS: Review[] = [
  {
    name: "Marcus D.",
    service: "Haircut & Beard",
    rating: 5,
    quote: "The attention to detail here is unmatched. My barber took the time to understand exactly what I wanted and delivered beyond expectations. The hot towel treatment was the perfect finishing touch.",
    date: "2 weeks ago"
  },
  {
    name: "James T.",
    service: "Haircut",
    rating: 5,
    quote: "I've tried several barbershops in Saskatoon and House of Havana is by far the best. The atmosphere, the skill level, the attention to detail — everything is top tier.",
    date: "1 month ago"
  },
  {
    name: "David K.",
    service: "Hot Shave",
    rating: 5,
    quote: "The hot shave here is incredible. They take their time, use premium products, and the result is the smoothest shave I've ever had. Worth every penny.",
    date: "3 weeks ago"
  }
]

const ADDITIONAL_REVIEWS: Review[] = [
  {
    name: "Robert M.",
    service: "Full Perm",
    rating: 5,
    quote: "Was nervous about getting a perm but my barber walked me through everything. The result is amazing and exactly what I was hoping for.",
    date: "1 month ago"
  },
  {
    name: "Alex P.",
    service: "Haircut & Beard",
    rating: 5,
    quote: "From the moment I walked in, I felt welcome. The team is professional, skilled, and genuinely cares about their craft.",
    date: "2 weeks ago"
  },
  {
    name: "Christopher L.",
    service: "Haircut",
    rating: 5,
    quote: "I've been coming here for months and every single visit is consistently excellent. This is my permanent barbershop.",
    date: "1 week ago"
  },
  {
    name: "Michael S.",
    service: "Haircut & Beard",
    rating: 5,
    quote: "Yes, it's more expensive than a quick chain shop. But you absolutely get what you pay for. The skill, the atmosphere, the service — all premium.",
    date: "3 weeks ago"
  },
  {
    name: "Ryan H.",
    service: "Haircut",
    rating: 5,
    quote: "This is what a barbershop should be. No gimmicks, no rushing, just quality work from talented barbers who take pride in what they do.",
    date: "2 weeks ago"
  },
  {
    name: "Jason B.",
    service: "Haircut & Beard",
    rating: 5,
    quote: "The vibe here is perfect. It feels like you're stepping into something special. And the work backs it up — always leave looking sharp.",
    date: "1 month ago"
  }
]

const ReviewsPage = () => (
  <>
    <HeroInner
      subheading="What Our"
      title="CLIENTS SAY"
      supportingText="Real testimonials from gentlemen who have experienced the House of Havana difference. Every review represents our commitment to excellence, craft, and authentic client relationships."
    />

    {/* Rating Summary */}
    <section className="py-20 bg-surface">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-20 max-w-5xl mx-auto">
          <div className="text-center">
            <p className="!text-7xl font-heading mb-4 leading-none">4.9</p>
            <p className="heading-6-italic text-foreground/50">Customer Rating</p>
          </div>
          <div className="text-center">
            <p className="!text-7xl font-heading mb-4 leading-none">150+</p>
            <p className="heading-6-italic text-foreground/50">Happy Clients</p>
          </div>
          <div className="text-center">
            <p className="!text-7xl font-heading mb-4 leading-none">100%</p>
            <p className="heading-6-italic text-foreground/50">Recommended</p>
          </div>
        </div>
      </div>
    </section>

    {/* Featured Reviews - Large Format */}
    <section className="py-26 bg-background">
      <div className="container">
        <div className="mb-16 text-center">
          <h2 className="heading-5-italic mb-2">Featured</h2>
          <h2 className="heading-2">TESTIMONIALS</h2>
        </div>

        <div className="max-w-4xl mx-auto space-y-16">
          {FEATURED_REVIEWS.map((review, index) => (
            <div key={index} className="border-t border-foreground/10 pt-12">
              <div className="mb-8">
                <Quote className="w-12 h-12 text-foreground/10 mb-6" />
                <p className="text-2xl md:text-3xl font-heading-italic leading-relaxed text-foreground/90 mb-8">
                  {review.quote}
                </p>
              </div>

              <div className="flex items-center justify-between flex-wrap gap-4">
                <div>
                  <p className="text-sm uppercase tracking-[0.2em] text-foreground mb-1">{review.name}</p>
                  <p className="text-xs text-foreground/50">{review.service}</p>
                </div>
                <div className="flex items-center gap-2">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-foreground text-foreground" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* More Reviews - Compact List */}
    <section className="py-26 bg-surface">
      <div className="container">
        <div className="mb-16 text-center">
          <h2 className="heading-5-italic mb-2">More</h2>
          <h2 className="heading-2">CLIENT VOICES</h2>
        </div>

        <div className="max-w-5xl mx-auto">
          {ADDITIONAL_REVIEWS.map((review, index) => (
            <div key={index} className="border-t border-foreground/10 py-8 grid grid-cols-12 gap-6 items-start">
              <div className="col-span-12 md:col-span-4">
                <div className="flex items-center gap-1 mb-2">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-foreground text-foreground" />
                  ))}
                </div>
                <p className="text-xs uppercase tracking-[0.2em] text-foreground mb-1">{review.name}</p>
                <p className="text-xs text-foreground/40">{review.service} • {review.date}</p>
              </div>
              <div className="col-span-12 md:col-span-8">
                <p className="text-foreground/60 leading-relaxed">{review.quote}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA after Client Voices */}
        <div className="text-center mt-20">
          <Link href="https://getsquire.com/booking/brands/house-of-havana-barbershop" target="_blank">
            <Button variant="primary" size="default">
              Book Your Experience
              <ChevronRight className="stroke-background" height={16} width={16} />
            </Button>
          </Link>
        </div>
      </div>
    </section>

    {/* Share Your Experience */}
    <section className="py-20 bg-background">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="heading-5-italic mb-2">Share Your</h2>
          <h2 className="heading-2 mb-6">EXPERIENCE</h2>
          <div className="w-20 h-px bg-foreground/20 mx-auto mb-8"></div>
          <p className="text-foreground/50 leading-relaxed mb-10 max-w-xl mx-auto">
            Had a great experience? We'd love to hear about it. Your feedback helps us continue to deliver excellence and helps other gentlemen discover our services.
          </p>
          <a
            href="https://share.google/sffdie67FCLj8pfgB"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-10 py-4 bg-surface border border-foreground/20 hover:border-foreground transition-colors text-xs uppercase tracking-[0.15em]"
          >
            Leave a Review on Google
          </a>
        </div>
      </div>
    </section>
  </>
)

export default ReviewsPage
