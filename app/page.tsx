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
import Script from "next/script";
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
    title: "Great Haircuts Start with Listening",
    description: "We start by talking about your hair, how you like to wear it, and what works for your day-to-day routine. Your barber takes your face shape and hair growth into account, then helps you find a cut that feels like you.",
  },
  {
    number: "02",
    title: "Classic Skills, Current Styles",
    description: "From straight razor shaves to skin fades and textured cuts, we bring traditional barbering skills to the styles you want today. We pay attention to the blend, the shape, and the small details that make a haircut work.",
  },
  {
    number: "03",
    title: "Time to Settle In",
    description: "Make yourself comfortable. Your appointment is time for you, with a barber who listens and gives your cut the attention it deserves. Enjoy the hot towel, the finishing touches, and a chance to slow down for a while.",
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
        subheading="Professional Barber Services in Saskatoon, Saskatchewan"
        heading="Premium Barbershop in Saskatoon"
        supportingText="Come in for a fresh cut, a beard tidy-up, or a change of style. At House of Havana in Saskatoon, we take the time to listen, get the details right, and make you feel at home. Settle into the chair and let us take care of you."
            />
      {/* SEO Section */}
      <section className="py-16 bg-background">
        <div className="container max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-heading text-primary mb-4">
            Fades & Beard Grooming in Saskatoon
          </h2>

          <p className="text-foreground/60 mb-4">
            House of Havana Barbershop is a premium barbershop in Saskatoon specializing in men’s haircuts, skin fades, beard trims, and hot towel shaves. We work with your hair type, face shape, and daily routine to find a look that suits you.
          </p>

          <p className="text-foreground/60">
            Looking for a professional barber in Saskatoon? Our barbers focus on precision, detail, and premium products to deliver consistent results, every visit.
          </p>
        </div>
      </section>

      <section className="pb-12 bg-background">
        <div className="container max-w-4xl">
          <h2 className="text-2xl font-heading text-primary mb-4">
            Premium Barber Services in Saskatoon
          </h2>

          <p className="text-foreground/60">
            Our most requested services include
            <Link href="/services/fade-haircut-saskatoon" className="underline mx-1">
              skin fade haircuts
            </Link>
            and
            <Link href="/services/beard-grooming-saskatoon" className="underline mx-1">
              professional beard grooming
            </Link>
            , delivered with precision and attention to detail at our Saskatoon
            barbershop.
          </p>
        </div>
      </section>

      <section className="pb-12 bg-background">
        <div className="container max-w-4xl">
          <h2 className="text-2xl font-heading text-primary mb-4">
            Serving Professionals Across Saskatoon
          </h2>

          <p className="text-foreground/60">
            House of Havana Barbershop proudly serves clients from across
            Saskatoon, including Downtown, Stonebridge, Rosewood, Brighton, and
            Evergreen.
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
              A good haircut starts with a conversation. We listen to what
              you want, take care with the details, and make sure you feel
              comfortable from the moment you walk in.
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
        supportingText="Whether you want to keep your usual look or try something new, we can help. Explore our haircuts, fades, beard grooming, and treatments to find what you need."
        showCTA={true}
      />
      <TeamShowcase
        heading="Meet Your Barbers"
        supportingText="Get to know the people behind the chair. Each barber brings their own style and skills, with the same care for making you feel comfortable and look your best."
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
                Don't just take our word for it. Here's what our valued clients
                have to say about their House Of Havana experience.
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
      <Script
        id="homepage-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd(homepageGraphSchema) }}
      />
    </div>
  );
}
