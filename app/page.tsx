import Hero from "@/components/sections/Hero";
import Ritual from "@/components/sections/Ritual";
import OurValuesSlider, { Value } from "@/components/sections/OurValuesSlider";
import ServicesSection from "@/components/sections/ServicesSection";
import TeamCard from "@/components/ui/team-card";
import Button from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import TeamShowcase from "@/components/sections/TeamShowcase";
import { BARBERS } from "@/data/barbers";
import { groomingServices, type ServiceCategory } from "@/data/services";
import Link from "next/link";

const WHY_CHOOSE_VALUES = [
  {
    number: "01",
    title: "Barbers Who Get You",
    description:
      "Our barbers aren't just skilled — they're trained under a mentorship-driven program that sharpens both technique and mindset. We study more than just your hair — we read your style, your rhythm, your presence. The result? Precision cuts, tailored to you, delivered by professionals dedicated to mastering their craft.",
  },
  {
    number: "02",
    title: "Rooted in Tradition",
    description:
      "We honor the legacy of classic barbering with every blade and brushstroke. From traditional straight-razor shaves to clean fades, our work is steeped in old-school techniques while staying sharp on the trends that matter today. It's heritage, with a modern edge.",
  },
  {
    number: "03",
    title: "Premium Grooming Experience",
    description:
      "More than a cut — this is your time. From hot towel rituals and personal consultations to top-shelf grooming products and uninterrupted service, everything is designed for your comfort. Settle into your chair — it's yours until you say otherwise.",
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
      "House of Havana has become my go-to spot. The combination of traditional techniques with modern style is exactly what I was looking for.",
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
          mobile: "/webp/hero-mobile.webp",
          tablet: "/webp/hero-tablet.webp",
          desktop: "/webp/hero-desktop.webp",
          ultrawide: "/webp/hero-ultrawide.webp",
        }}
        subheading="The"
        heading="House of Havana Barbershop in <br /> Saskatoon"
        supportingText="At House of Havana Barbershop in Saskatoon, grooming is more than maintenance — it’s a moment of focus, intention, and precision. We blend classic barbering tradition with modern design to create an experience tailored for discerning professionals. From custom cabinetry and rich leather seating to precision cuts, well-groomed beards, and premium aftercare, every detail is considered. This isn’t just another barbershop in Saskatoon — it’s where grooming becomes personal and confidence is elevated."
      />
      <Ritual /> {/* bg-surface */}
      {/* Why Choose Section - Luxury Editorial Design */}
      <section className="py-26 bg-background">
        <div className="container">
          {/* Header */}
          <div className="mb-24">
            <h2 className="heading-5-italic mb-2 text-center">Why Choose</h2>
            <h1 className="heading-1 text-center mb-6">HOUSE OF HAVANA</h1>
            <div className="w-20 h-px bg-foreground/20 mx-auto mb-12"></div>
            <p className="text-foreground/40 leading-relaxed text-center max-w-2xl mx-auto">
              We're not your average barbershop. At House of Havana, every
              detail matters — from the moment you walk in to the moment you
              walk out feeling like the best version of yourself.
            </p>
          </div>

          {/* Values - Luxury List Layout */}
          <div className="max-w-5xl mx-auto">
            {WHY_CHOOSE_VALUES.map((value, index) => (
              <div
                key={index}
                className="border-t border-foreground/10 py-12 grid grid-cols-12 gap-8 items-start group hover:border-foreground/20 transition-colors"
              >
                {/* Number */}
                <div className="col-span-2 md:col-span-1">
                  <span className="text-6xl font-heading text-foreground/10 group-hover:text-foreground/20 transition-colors leading-none">
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
              href="https://getsquire.com/booking/brands/house-of-havana-barbershop"
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
        services={groomingServices}
        bgSurface={true}
        subheading="Our Rituals"
        heading="Grooming<br />Services"
        supportingText="At House of Havana, grooming isn't just about looking good — it's about feeling powerful, confident, and ready for anything. We've created a refined experience where every service is performed with precision, passion, and Havana-inspired style. Whether it's a clean fade, a detailed beard sculpt, or a full transformation, our barbers take the time to craft your look with intention and care. Sit back, relax, and let us turn your visit into a ritual you'll look forward to every time."
        showCTA={true}
      />
      <TeamShowcase
        title="Meet Your"
        heading="BARBERS"
        supportingText="Our skilled barbers blend traditional techniques with contemporary style, ensuring every client receives a personalized experience that reflects their unique personality and lifestyle."
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
              <h2 className="heading-5-italic mb-2">What Our</h2>
              <h2 className="heading-1">CLIENTS SAY</h2>
            </div>
            <div className="md:col-span-6 md:col-start-7 flex items-end">
              <p className="text-foreground/50 leading-relaxed">
                Don't just take our word for it. Here's what our valued clients
                have to say about their House of Havana experience.
              </p>
            </div>
          </div>
          <OurValuesSlider values={REVIEWS} bgSurface={true} />
          <div className="mt-16">
            <Link href="/reviews">
              <Button variant="secondary">
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
    </div>
  );
}
