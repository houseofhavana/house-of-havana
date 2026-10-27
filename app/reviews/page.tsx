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
  sourceUrl?: string
  sourceLabel?: string
}

const FEATURED_REVIEWS: Review[] = [
  {
    name: "Aaron Green",
    service: "Haircut & Beard",
    rating: 5,
    quote: "I booked with Cristian based on a friend’s recommendation. As a former barber, I’m picky. And this kid’s technical work is the best I’ve seen. His lines are crisp, fades are seamless, and the beard trim? Absolute masterclass. One bad beard trim can wreck your whole month, but this guy is in a league of his own. Balanced, proportional, and solid. If you care about precision and don’t want to gamble, book him.",
    date: "",
    sourceUrl: "https://www.google.com/maps/contrib/102471689243680363205/reviews?hl=en",
    sourceLabel: "View Aaron’s reviews on Google"
  },
  {
    name: "Coady Rex Bailey",
    service: "Haircut with James",
    rating: 5,
    quote: "Had a great experience! James gave me an awesome haircut and really took the time to make sure I was happy with it. He was friendly, asked the right questions, and genuinely cared about getting it right.\n\nThe whole staff was super welcoming as well. Everyone was friendly and even came over to check out the cut and offer their input. Definitely felt like they cared about the customer experience.\n\nI’ll definitely be back. Highly recommend James and the team!",
    date: "",
    sourceUrl: "https://www.google.com/maps/contrib/104548861411966020970/reviews?hl=en",
    sourceLabel: "View Coady’s reviews on Google"
  },
  {
    name: "Mably LLorente",
    service: "Google Review",
    rating: 5,
    quote: "Absolutely the best barbershop experience I've had! The team at House of Havana Barbershop is incredibly professional, welcoming, and talented. From the moment you walk in, you're treated like family. The attention to detail is second to none, and they take the time to make sure your haircut is exactly what you want.\n\nThe atmosphere is fantastic—great music, great conversations, and a true community vibe. The shop is clean, stylish, and has an authentic Cuban feel that makes every visit enjoyable.\n\nIf you're looking for a barber who takes pride in their work and consistently delivers amazing fades, beard trims, and classic cuts, this is the place to go. I highly recommend House of Havana Barbershop to anyone who wants top-quality service and an outstanding experience. I'll definitely be coming back!",
    date: "",
    sourceUrl: "https://www.google.com/maps/contrib/102329138213406641897/reviews?hl=en",
    sourceLabel: "View Mably’s reviews on Google"
  }
]

const ADDITIONAL_REVIEWS: Review[] = [
  {
    name: "john dunning",
    service: "Haircut with Emily",
    rating: 5,
    quote: "Have to say really enjoyed my first of many visits to HoH. It has a great atmosphere and really good chill vibes in the place, it's also decorated quite well in a manly chic kinda way. Had a great stylist called Emily. She honestly done the best trim I have had in years she was brilliant. Couldn't recommend the place any more if I could give it 6 stars I would",
    date: "",
    sourceUrl: "https://www.google.com/maps/contrib/109276243950569234949/reviews?hl=en",
    sourceLabel: "View John’s reviews on Google"
  },
  {
    name: "Marc Rudulier",
    service: "Appointment with Cristian",
    rating: 5,
    quote: "Cristian and his crew are top notch! I went there for the first time looking for an experience. Something that set them apart from the other shops I've been to lately. They nailed it on the head.\n\nI was immediately greeted when I walked in with a good energy from the staff... I wish I would've gotten his name... he signed me in and asked if I wanted a water or drink of sorts. I asked for a coffee and after taking my coat, he came back with a flavourful coffee.\n\nI didnt have to wait long before Cristian came out. He greeted me with a smile, a handshake and invited me in.\n\nI'm a big guy which means not all styles I like work on me. Cristian listened to my ideas, my wants and gave advice... just a nice over all consult before diving it.\n\nAs a client, he could've given me whatever I asked for but genuinely wanted me to leave looking my best!\n\nThere was easy conversation and a relaxed atmosphere. I would definitely go back and will go back. They have a repeat customer with me.\n\nAs a side mention... their website is user friendly.\n\nI'm looking forward to my next appointment.",
    date: "",
    sourceUrl: "https://www.google.com/maps/contrib/100651879651977911727/reviews?hl=en",
    sourceLabel: "View Marc’s reviews on Google"
  },
  {
    name: "Aaron Lysitza",
    service: "Haircut with Emily",
    rating: 5,
    quote: "Was my first time at this barbershop and I was very impressed! The interior has a cozy aesthetic and the staff emulate that vibe. Was greeted immediately and was offered water or coffee right when I got in. Emily did my haircut and was superb! She nailed the style I was going for, and was a huge help recommending products that would be suitable for my hairstyle/texture. I will definitely be back and would highly recommend checking it out!",
    date: "",
    sourceUrl: "https://www.google.com/maps/contrib/114594539402026574316/reviews?hl=en",
    sourceLabel: "View Aaron Lysitza’s reviews on Google"
  },
  {
    name: "jerry Patel",
    service: "Appointment with Cristian",
    rating: 5,
    quote: "100% recommended. I’m very particular about my hair and the style I maintain, and Cristian truly understands that level of care and attention.\n\nHe takes his time, focuses on the details, and makes sure the cut is exactly right. You can tell he takes real pride in his craft. The environment is amazing as well — very clean, professional, and with a luxurious vibe that makes the whole experience feel premium.\n\nI walked out feeling sharp, confident, and completely satisfied. If you care about your appearance and the way you present yourself, you must try this place at least once. After that, you won’t want to go anywhere else.",
    date: "",
    sourceUrl: "https://www.google.com/maps/contrib/103917579962522200794/reviews?hl=en",
    sourceLabel: "View Jerry’s reviews on Google"
  },
  {
    name: "Raymond Robertson",
    service: "Beard Grooming",
    rating: 5,
    quote: "Finally got the beard shape that I was looking for. First time growing a beard and at 5 months of growth. Little apprehensive and nervous but that all went away when Christian took the time to listen to what I was looking for and totally understood what I was trying to explaine. The cut and shape is top notch and the atmosphere is new age, comfortable and inviting. Definitely will be comming back and referring people to Christian. ✌️",
    date: "",
    sourceUrl: "https://www.google.com/maps/contrib/108036074041358387407/reviews?hl=en",
    sourceLabel: "View Raymond’s reviews on Google"
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
      supportingText="Read what clients have shared about their visits, from the haircut to the welcome they received."
    />

    {/* Rating Summary */}
    <section className="py-20 bg-surface">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-20 max-w-5xl mx-auto">
          <a href="https://share.google/sffdie67FCLj8pfgB" target="_blank" rel="noopener noreferrer" className="text-center rounded-sm transition-opacity hover:opacity-80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-8 focus-visible:outline-primary" aria-label="Rated 5 out of 5 on Google. Read our reviews">
            <p className="!text-7xl font-heading mb-4 leading-none">5.0</p>
            <p className="heading-6-italic text-foreground/50">Google Rating</p>
          </a>
          <a href="https://share.google/sffdie67FCLj8pfgB" target="_blank" rel="noopener noreferrer" className="text-center rounded-sm transition-opacity hover:opacity-80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-8 focus-visible:outline-primary" aria-label="Read over 300 reviews on our Google Business profile">
            <p className="!text-7xl font-heading mb-4 leading-none">300+</p>
            <p className="heading-6-italic text-foreground/50">Google Reviews</p>
          </a>
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
                  {review.sourceUrl && (
                    <a href={review.sourceUrl} target="_blank" rel="noopener noreferrer" className="inline-block mt-3 text-xs underline underline-offset-4 text-foreground/60 hover:text-foreground">{review.sourceLabel}</a>
                  )}
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
                <p className="text-xs text-foreground/40">{review.service}{review.date && ` • ${review.date}`}</p>
                {review.sourceUrl && (
                  <a href={review.sourceUrl} target="_blank" rel="noopener noreferrer" className="inline-block mt-3 text-xs underline underline-offset-4 text-foreground/60 hover:text-foreground">{review.sourceLabel}</a>
                )}
              </div>
              <div className="col-span-12 md:col-span-8">
                <p className="text-foreground/60 leading-relaxed">{review.quote}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA after Client Voices */}
        <div className="text-center mt-20">
          <Link href="https://www.fresha.com/book-now/house-of-havana-barbershop-xcwtdh26/all-offer?share=true&pId=3102757" target="_blank">
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
            Had a great experience? We&apos;d love to hear about it. Your feedback helps us continue to deliver excellence and helps other gentlemen discover our services.
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
