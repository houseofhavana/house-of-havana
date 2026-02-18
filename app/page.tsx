import Hero from "@/components/sections/Hero";
import OurValuesSlider, { Value } from "@/components/sections/OurValuesSlider";
import Ritual from "@/components/sections/Ritual";
import ServicesSection from "@/components/sections/ServicesSection";
import TeamShowcase from "@/components/sections/TeamShowcase";
import Button from "@/components/ui/button";
import TeamCard from "@/components/ui/team-card";
import { BARBERS } from "@/data/barbers";
import { servicesList } from "@/data/services";
import { imageGallerySchema, jsonLd, servicesSchema, localBusinessSchema } from "@/lib/schema";
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
    title: "Disciplined Craftsmanship",
    description: `Our barbers are developed through structured mentorship and technical calibration. We train beyond basic cutting — focusing on proportion, symmetry, density control, and silhouette balance.

Each service begins with assessment, not assumption.
Face shape. Growth patterns. Lifestyle demands.

The outcome is not just a haircut.
It is controlled execution.`,
  },
  {
    number: "02",
    title: "Heritage Technique, Modern Precision",
    description: `We operate from the foundation of traditional barbering — straight-razor discipline, structured fades, meticulous beard sculpting — while refining it through contemporary standards of presentation.

Old-school methods.
Modern refinement.

Technique is respected. Detail is non-negotiable.`,
  },
  {
    number: "03",
    title: "Elevated Client Experience",
    description: `Professionalism defines the environment. Consultations are deliberate. Service is uninterrupted. Time in the chair is focused entirely on you.

From hot towel protocols to premium finishing products, every touchpoint is designed to reinforce presence and confidence.

This is not a transactional haircut.
It is a premium grooming appointment executed without compromise.`,
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
        supportingText="At House Of Havana Barbershop in Saskatoon, grooming is more than maintenance — it’s a moment of focus, intention, and precision. We blend classic barbering tradition with modern design to create an experience tailored for discerning professionals. From custom cabinetry and rich leather seating to precision cuts, well-groomed beards, and premium aftercare, every detail is considered. This isn’t just another barbershop in Saskatoon — it’s where grooming becomes personal and confidence is elevated."
            />
      {/* SEO Section */}
      <section className="py-16 bg-background">
        <div className="container max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-heading text-primary mb-4">
            Men’s Haircuts, Skin Fades & Beard Grooming in Saskatoon
          </h2>

          <p className="text-foreground/60 mb-4">
            House of Havana Barbershop is a premium barbershop in Saskatoon specializing in men’s haircuts, skin fades, beard trims, and hot towel shaves. Every service is tailored to your hair type, face shape, and lifestyle—built for a clean, confident finish.
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
      </Link>,
      delivered with precision and attention to detail at our Saskatoon barbershop.
    </p>

  </div>
</section>

      <Ritual /> {/* bg-surface */}

      {/* Why Choose Section - Luxury Editorial Design */}
      <section className="py-26 bg-background">
        <div className="container">
          {/* Header */}
          <div className="mb-24">
            <h2 className="heading-5-italic mb-2 text-center">Why Choose</h2>
            <h2 className="heading-2 text-center mb-6 text-primary">HOUSE OF HAVANA</h2>
            <div className="w-20 h-px bg-foreground/20 mx-auto mb-12"></div>
            <p className="text-foreground/40 leading-relaxed text-center max-w-2xl mx-auto">
              We're not your average barbershop. At House Of Havana, every
              detail matters — from the moment you walk in to the moment you
              walk out feeling like the best version of yourself.
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
        services={servicesList}
        bgSurface={true}
        subheading="Our Rituals"
        heading="Grooming<br />Services"
        supportingText="At House Of Havana, grooming isn't just about looking good — it's about feeling powerful, confident, and ready for anything. We've created a refined experience where every service is performed with precision, passion, and Havana-inspired style. Whether it's a clean fade, a detailed beard sculpt, or a full transformation, our barbers take the time to craft your look with intention and care. Sit back, relax, and let us turn your visit into a ritual you'll look forward to every time."
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
              <h2 className="heading-2 text-primary uppercase">Clients Say</h2>
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
{/* Services Schema */}
<Script
  id="services-schema"
  type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: jsonLd(servicesSchema) }}
/>

{/* LocalBusiness Schema */}
<Script
  id="local-business-schema"
  type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: jsonLd(localBusinessSchema) }}
/>

{/* ImageGallery Schema */}
<Script
  id="image-gallery-schema"
  type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: jsonLd(imageGallerySchema) }}
/>

    
