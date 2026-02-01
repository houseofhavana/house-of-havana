import HeroInner from "@/components/sections/HeroInner";
import TeamShowcase from "@/components/sections/TeamShowcase";
import ParallaxImage from "@/components/ui/ParallaxImage";
import TeamCard from "@/components/ui/team-card";
import React from "react";
import { BARBERS, type Barber } from "@/data/barbers";
import { Quote, ChevronRight } from "lucide-react";
import Button from "@/components/ui/button";
import Link from "next/link";

export const metadata = mergeSEO({
  title: "About Us | Men's Grooming In Saskatoon",
  description:
    "House of Havana provides professional men's haircuts and grooming in Saskatoon, combining expert barbering with a luxury, tailored experience.",
  keywords: [
    'about house of havana',
    'saskatoon barber shop',
    "men's grooming saskatoon",
    'professional haircuts',
    'luxury grooming',
  ],
  canonical: '/about',
});


const About = () => {
  return (
    <>
      <HeroInner
        subheading="The"
        title="HAVANA <br/> SPIRIT"
        supportingText="Rooted in tradition. Styled for today. Discover the story behind Saskatoon's premier vintage grooming destination."
      />
      <section className="py-26 bg-surface">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 gap-y-20">
            <div className="md:col-span-2">
              <h3 className="heading-5-italic">Our</h3>
              <h2 className="heading-3">STORY</h2>
              <p className="text-foreground/50 mb-4">
                House of Havana was founded by Cristian Perdomo, a master barber
                originally from Havana, Cuba. What began as a childhood passion
                at age 13 evolved into a distinguished career across Canada —
                from Saskatoon to Vancouver and back again.
              </p>
              <p className="text-foreground/50">
                After building a high-profile clientele in Vancouver that
                included entrepreneurs, artists, and entertainers, Cristian
                chose to return to Saskatoon with his family. His vision was
                clear: create a barbershop that honors traditional craftsmanship
                while serving the modern gentleman — a space where grooming
                becomes ritual, not routine.
              </p>
            </div>
            <div className="md:col-span-3 md:col-start-2 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="heading-3-italic">Mission</h3>
                <hr className="border-foreground/10 my-4" />
                <p className="text-foreground/50">
                  To deliver exceptional grooming experiences rooted in
                  traditional barbering techniques, elevated by contemporary
                  style. We're committed to creating a welcoming environment
                  where every client receives personalized attention and leaves
                  feeling confident.
                </p>
              </div>
              <div>
                <h3 className="heading-3-italic">Vision</h3>
                <hr className="border-foreground/10 my-4" />
                <p className="text-foreground/50">
                  To be Saskatoon's premier destination for men's grooming — a
                  place where vintage charm meets modern excellence, and where
                  every visit is more than an appointment, it's an experience
                  worth repeating.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-26 bg-background">
        <div className="container">
          {/* Header */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-24">
            <div className="md:col-span-5">
              <h2 className="heading-5-italic mb-2">What We</h2>
              <h2 className="heading-1">BELIEVE</h2>
            </div>
            <div className="md:col-span-6 md:col-start-7 flex items-end">
              <p className="text-foreground/40 leading-relaxed">
                These principles guide everything we do. From the moment you
                walk in to the moment you walk out, our beliefs shape your
                experience.
              </p>
            </div>
          </div>

          {/* Beliefs Grid - Editorial Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-20">
            <div className="border-t border-foreground/10 pt-10">
              <h3 className="heading-5-italic mb-3">Craft Over</h3>
              <h3 className="heading-3 mb-6">SPEED</h3>
              <p className="text-foreground/50 leading-relaxed">
                We never rush. Every service receives the time and attention it
                deserves, because quality cannot be compromised.
              </p>
            </div>

            <div className="border-t border-foreground/10 pt-10">
              <h3 className="heading-5-italic mb-3">Community</h3>
              <h3 className="heading-3 mb-6">CONNECTION</h3>
              <p className="text-foreground/50 leading-relaxed">
                From Wildwood to Willowgrove, we're proud to serve Saskatoon and
                surrounding neighborhoods with genuine care and dedication.
              </p>
            </div>

            <div className="border-t border-foreground/10 pt-10">
              <h3 className="heading-5-italic mb-3">Heritage &</h3>
              <h3 className="heading-3 mb-6">INNOVATION</h3>
              <p className="text-foreground/50 leading-relaxed">
                We honor classic barbering traditions while staying current with
                modern techniques and styles.
              </p>
            </div>

            <div className="border-t border-foreground/10 pt-10">
              <h3 className="heading-5-italic mb-3">Personal</h3>
              <h3 className="heading-3 mb-6">GROWTH</h3>
              <p className="text-foreground/50 leading-relaxed">
                Our team is committed to continuous learning and excellence,
                both professionally and personally.
              </p>
            </div>
          </div>
        </div>

        {/* CTA after What We Believe */}
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
      </section>
      <TeamShowcase
        title="Meet Your"
        heading="BARBERS"
        supportingText="Our skilled barbers blend traditional techniques with contemporary style, ensuring every client receives a personalized experience that reflects their unique personality and lifestyle."
        bgSurface={true}
        showCTA={true}
      >
        {BARBERS.map((barber: Barber, index: number) => (
          <TeamCard
            key={index}
            image={barber.image}
            name={barber.name}
            text1={barber.text1}
            text2={barber.text2}
            bio={barber.bio}
            bioLink={true}
            bgSurface={false}
          />
        ))}
      </TeamShowcase>
      <section className="py-26 bg-background">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="md:col-span-8 md:col-start-3">
              <h2 className="heading-5-italic mb-2 text-center">Our</h2>
              <h2 className="heading-1 mb-12 text-center">MANIFESTO</h2>
              <div className="relative">
                <div className="heading-1-italic !text-[120px] absolute -left-8 -top-8 w-10 h-10 text-foreground/5 flex items-center justify-center -z-10">
                  "
                </div>
                <p className="text-foreground/50 heading-3-italic leading-relaxed text-center">
                  We believe grooming is more than routine—it's ritual. A
                  sharpened blade. A clean part. A scent that lingers. These are
                  the marks of intention, of respect, of pride.
                </p>
              </div>
            </div>
          </div>

          {/* CTA after Manifesto */}
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
    </>
  );
};

export default About;
