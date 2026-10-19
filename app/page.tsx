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
    title: "Exceptional Service",
    description:
      "The best barbershop experience I've ever had. The attention to detail and the atmosphere is incredible. Highly recommend!",
  },
  {
    title: "Professional & Welcoming",
    description:
      "From the moment I walked in, I felt like family. The quality of work is outstanding. Will definitely be back.",
  },
  {
    title: "True Craftsmanship",
    description:
      "These guys are true artists. My beard has never looked better, and the hot towel treatment was the perfect finishing touch.",
  },
  {
    title: "Consistent Quality",
    description:
      "Been coming here for months and every visit is consistently excellent. The team really knows their craft and takes pride in their work.",
  },
  {
    title: "Modern Gentleman's Choice",
    description:
      "House Of Havana has become my go-to spot. The combination of traditional techniques with modern style is exactly what I was looking for.",
  },
  {
    title: "Outstanding Experience",
    description:
      "It's not just a haircut, it's a complete grooming experience that leaves you feeling confident and refreshed.",
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
