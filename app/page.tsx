import Hero from "@/components/sections/Hero";
import OurValuesSlider, { Value } from "@/components/sections/OurValuesSlider";
import Ritual from "@/components/sections/Ritual";
import ServicesSection from "@/components/sections/ServicesSection";
import TeamShowcase from "@/components/sections/TeamShowcase";
import Button from "@/components/ui/button";
import TeamCard from "@/components/ui/team-card";
import { BARBERS } from "@/data/barbers";
import { servicesList } from "@/data/services";
import { homepageGraphSchema, jsonLd } from "@/lib/schema";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
export const metadata = {
  title: "House of Havana Barbershop | Men’s Haircuts, Skin Fades & Beard Grooming Saskatoon",
  description:
    "House of Havana Barbershop is a premium barbershop in Saskatoon offering men’s haircuts, skin fades, and beard grooming. Book your appointment today.",
  alternates: {
    canonical: "https://houseofhavana.ca",
  },
};

const WHY_CHOOSE_VALUES = [
  {
    number: "01",
    title: "A Consultation with Purpose",
    description: "Bring a reference photo or an idea. We consider your face shape, growth patterns and styling routine, then agree on the direction before we begin.",
  },
  {
    number: "02",
    title: "Precision in the Finish",
    description: "Balanced proportions, seamless blends and a clean neckline. We refine the details that give a cut its shape and help it grow out well.",
  },
  {
    number: "03",
    title: "Style You Can Maintain",
    description: "Leave knowing how to wear your cut. Ask your barber about products, a practical styling routine and when to return to keep the shape you like.",
  },
];


const REVIEWS: Value[] = [
  {
    title: "Aaron Green",
    description: "I booked with Cristian based on a friend’s recommendation. As a former barber, I’m picky. And this kid’s technical work is the best I’ve seen. His lines are crisp, fades are seamless, and the beard trim? Absolute masterclass. One bad beard trim can wreck your whole month, but this guy is in a league of his own. Balanced, proportional, and solid. If you care about precision and don’t want to gamble, book him.",
    sourceUrl: "https://www.google.com/maps/contrib/102471689243680363205/reviews?hl=en",
    sourceLabel: "View Aaron’s reviews on Google",
  },
  {
    title: "Coady Rex Bailey",
    description: "Had a great experience! James gave me an awesome haircut and really took the time to make sure I was happy with it. He was friendly, asked the right questions, and genuinely cared about getting it right.\n\nThe whole staff was super welcoming as well. Everyone was friendly and even came over to check out the cut and offer their input. Definitely felt like they cared about the customer experience.\n\nI’ll definitely be back. Highly recommend James and the team!",
    sourceUrl: "https://www.google.com/maps/contrib/104548861411966020970/reviews?hl=en",
    sourceLabel: "View Coady’s reviews on Google",
  },
  {
    title: "Mably LLorente",
    description: "Absolutely the best barbershop experience I've had! The team at House of Havana Barbershop is incredibly professional, welcoming, and talented. From the moment you walk in, you're treated like family. The attention to detail is second to none, and they take the time to make sure your haircut is exactly what you want.\n\nThe atmosphere is fantastic—great music, great conversations, and a true community vibe. The shop is clean, stylish, and has an authentic Cuban feel that makes every visit enjoyable.\n\nIf you're looking for a barber who takes pride in their work and consistently delivers amazing fades, beard trims, and classic cuts, this is the place to go. I highly recommend House of Havana Barbershop to anyone who wants top-quality service and an outstanding experience. I'll definitely be coming back!",
    sourceUrl: "https://www.google.com/maps/contrib/102329138213406641897/reviews?hl=en",
    sourceLabel: "View Mably’s reviews on Google",
  },
  {
    title: "john dunning",
    description: "Have to say really enjoyed my first of many visits to HoH. It has a great atmosphere and really good chill vibes in the place, it's also decorated quite well in a manly chic kinda way. Had a great stylist called Emily. She honestly done the best trim I have had in years she was brilliant. Couldn't recommend the place any more if I could give it 6 stars I would",
    sourceUrl: "https://www.google.com/maps/contrib/109276243950569234949/reviews?hl=en",
    sourceLabel: "View John’s reviews on Google",
  },
  {
    title: "Marc Rudulier",
    description: "Cristian and his crew are top notch! I went there for the first time looking for an experience. Something that set them apart from the other shops I've been to lately. They nailed it on the head.\n\nI was immediately greeted when I walked in with a good energy from the staff... I wish I would've gotten his name... he signed me in and asked if I wanted a water or drink of sorts. I asked for a coffee and after taking my coat, he came back with a flavourful coffee.\n\nI didnt have to wait long before Cristian came out. He greeted me with a smile, a handshake and invited me in.\n\nI'm a big guy which means not all styles I like work on me. Cristian listened to my ideas, my wants and gave advice... just a nice over all consult before diving it.\n\nAs a client, he could've given me whatever I asked for but genuinely wanted me to leave looking my best!\n\nThere was easy conversation and a relaxed atmosphere. I would definitely go back and will go back. They have a repeat customer with me.\n\nAs a side mention... their website is user friendly.\n\nI'm looking forward to my next appointment.",
    sourceUrl: "https://www.google.com/maps/contrib/100651879651977911727/reviews?hl=en",
    sourceLabel: "View Marc’s reviews on Google",
  },
  {
    title: "Aaron Lysitza",
    description: "Was my first time at this barbershop and I was very impressed! The interior has a cozy aesthetic and the staff emulate that vibe. Was greeted immediately and was offered water or coffee right when I got in. Emily did my haircut and was superb! She nailed the style I was going for, and was a huge help recommending products that would be suitable for my hairstyle/texture. I will definitely be back and would highly recommend checking it out!",
    sourceUrl: "https://www.google.com/maps/contrib/114594539402026574316/reviews?hl=en",
    sourceLabel: "View Aaron Lysitza’s reviews on Google",
  },
  {
    title: "jerry Patel",
    description: "100% recommended. I’m very particular about my hair and the style I maintain, and Cristian truly understands that level of care and attention.\n\nHe takes his time, focuses on the details, and makes sure the cut is exactly right. You can tell he takes real pride in his craft. The environment is amazing as well — very clean, professional, and with a luxurious vibe that makes the whole experience feel premium.\n\nI walked out feeling sharp, confident, and completely satisfied. If you care about your appearance and the way you present yourself, you must try this place at least once. After that, you won’t want to go anywhere else.",
    sourceUrl: "https://www.google.com/maps/contrib/103917579962522200794/reviews?hl=en",
    sourceLabel: "View Jerry’s reviews on Google",
  },
  {
    title: "Raymond Robertson",
    description: "Finally got the beard shape that I was looking for. First time growing a beard and at 5 months of growth. Little apprehensive and nervous but that all went away when Christian took the time to listen to what I was looking for and totally understood what I was trying to explaine. The cut and shape is top notch and the atmosphere is new age, comfortable and inviting. Definitely will be comming back and referring people to Christian. ✌️",
    sourceUrl: "https://www.google.com/maps/contrib/108036074041358387407/reviews?hl=en",
    sourceLabel: "View Raymond’s reviews on Google",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Hero
        backgroundImages={{
          mobile: "/hero-mobile.png",
          tablet: "/hero-tablet.png",
          desktop: "/hero-desktop.png",
          ultrawide: "/hero-ultrawide.png",
        }}
        subheading="House of Havana · Men’s Grooming"
        heading="Premium Barbershop in Saskatoon"
        supportingText="A considered cut. A confident finish. Discover personal grooming shaped around your style, with the care and craftsmanship every visit deserves."
            />
      <section className="py-16 bg-background">
        <div className="container max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-heading text-primary mb-4">
            Your Style, Refined.
          </h2>
          <p className="text-foreground/60 mb-4">
            At House of Havana, men’s haircuts,{' '}
            <Link href="/services/fade-haircut-saskatoon" className="underline">
              skin fades
            </Link>{' '}
            and{' '}
            <Link href="/services/beard-grooming-saskatoon" className="underline">
              beard grooming
            </Link>{' '}
            begin with an understanding of the person in the chair. Choose a
            familiar look or a new direction; we’ll shape the details around you.
          </p>
          <p className="text-foreground/60">
            Find us at 3501 8 St E, Bay 110, in Saskatoon.{' '}
            <Link href="/contact" className="underline">
              View our location and opening hours
            </Link>
            , or{' '}
            <Link href="/services" className="underline">
              explore services and pricing
            </Link>
            .
          </p>
        </div>
      </section>

      <Ritual /> {/* bg-surface */}


      {/* Why Choose Section - Luxury Editorial Design */}
      <section className="py-26 bg-background">
        <div className="container">
          {/* Header */}
          <div className="mb-24">
            <h2 className="heading-2 text-center mb-6 text-primary">Why Choose House of Havana</h2>
            <div className="w-20 h-px bg-foreground/20 mx-auto mb-12"></div>
            <p className="text-foreground/40 leading-relaxed text-center max-w-2xl mx-auto">
              From the first conversation to your daily routine, our approach
              brings together personal attention, technical skill and practical advice.
            </p>
          </div>

          {/* Values - Luxury List Layout */}
          <div className="max-w-5xl mx-auto">
            {WHY_CHOOSE_VALUES.map((value, index) => (
              <div
                key={index}
                className="border-t border-foreground/10 py-12 grid grid-cols-12 gap-4 lg:gap-8 items-start group hover:border-foreground/20 transition-colors"
              >
                {/* Number */}
                <div className="col-span-2 md:col-span-1">
                  <span className="text-4xl lg:text-6xl font-heading text-foreground/10 group-hover:text-foreground/20 transition-colors leading-none">
                    {value.number}
                  </span>
                </div>

                {/* Content */}
                <div className="col-span-10 md:col-span-11 pt-2">
                  <h3 className="heading-4-italic mb-4 text-foreground">
                    {value.title}
                  </h3>
                  <p className="text-foreground/50 leading-relaxed max-w-2xl">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA after Why Choose */}
          <div className="text-center mt-20">
            <Link
              href="https://www.fresha.com/book-now/house-of-havana-barbershop-xcwtdh26/all-offer?share=true&pId=3102757"
              target="_blank"
            >
              <Button variant="primary" size="default">
                Book Your Experience
                <ChevronRight
                  className="stroke-background"
                  height={16}
                  width={16}
                />
              </Button>
            </Link>
          </div>
        </div>
      </section>
      <ServicesSection
        services={servicesList}
        bgSurface={true}
        heading="Our Grooming Services"
        supportingText="Explore the menu, compare appointment options and choose the service that fits your next visit."
        showCTA={true}
      />
      <TeamShowcase
        heading="Meet Your Barbers"
        supportingText="Find your barber. Explore the team’s experience and approach before choosing who you’d like to book."
        bgSurface={false}
        showCTA={true}
      >
        {BARBERS.map((barber, index) => (
          <TeamCard
            key={index}
            image={barber.image}
            name={barber.name}
            text1={barber.text1}
            text2={barber.text2}
            bio={barber.bio}
            bioLink={true}
            bgSurface={true}
          />
        ))}
      </TeamShowcase>
      {/* Reviews Preview Section */}
      <section className="py-26 bg-surface">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-16">
            <div className="md:col-span-4">
              <h2 className="heading-2 text-primary uppercase">What Our Clients Say</h2>
            </div>
            <div className="md:col-span-6 md:col-start-7 flex items-end">
              <p className="text-foreground/50 leading-relaxed">
                In our clients’ words: the cuts, the conversations and the
                experience that brings them back.
              </p>
            </div>
          </div>
          <OurValuesSlider values={REVIEWS} bgSurface={true} />
          <div className="mt-16">
            <Link href="/reviews">
              <Button variant="primary">
                Read all reviews
                <ChevronRight
                  className="stroke-background"
                  height={16}
                  width={16}
                />
              </Button>
            </Link>
          </div>
        </div>
      </section>
      {/* Consolidated Schema — single @graph with consistent internal references */}
      <script
        id="homepage-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd(homepageGraphSchema) }}
      />
    </div>
  );
}
