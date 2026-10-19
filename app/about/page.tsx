import HeroInner from '@/components/sections/HeroInner'
import TeamShowcase from '@/components/sections/TeamShowcase'
import Button from '@/components/ui/button'
import TeamCard from '@/components/ui/team-card'
import { BARBERS, type Barber } from '@/data/barbers'
import { mergeSEO } from '@/lib/seo'
import { ChevronRight } from 'lucide-react'
import Link from 'next/link'

export const metadata = mergeSEO({
  title: "About Us | Men's Grooming In Saskatoon",
  description:
    "House Of Havana provides professional men's haircuts and grooming in Saskatoon, combining expert barbering with a luxury, tailored experience.",
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
      <HeroInner subheading="The" title="HAVANA <br/> SPIRIT" supportingText="From Havana to Saskatoon, get to know our story and the people who make this place feel like home." />
      <section className='py-26 bg-surface'>
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 gap-y-20" >
            <div className='md:col-span-2'>
              <h3 className='heading-5-italic'>Our</h3>
              <h2 className='heading-3'>STORY</h2>
              <p className='text-foreground/50 mb-4'>
                Cristian Perdomo started cutting hair at 13 in Havana, Cuba. That early interest took him to barbershops in Saskatoon and Vancouver, where he developed his skills and built lasting relationships with his clients.
              </p>
              <p className='text-foreground/50'>
                After working in Vancouver with clients from all walks of life, including entrepreneurs, artists, and entertainers, Cristian returned to Saskatoon with his family. He opened House of Havana to bring together the things he values most: good barbering, a welcoming space, and people who care about their community.
              </p>
            </div>
            <div className='md:col-span-3 md:col-start-2 grid grid-cols-1 md:grid-cols-2 gap-8'>
              <div>
                <h3 className='heading-3-italic'>
                  Mission
                </h3>
                <hr className='border-foreground/10 my-4' />
                <p className='text-foreground/50'>
                  To give you a haircut you feel good about, in a place where you feel welcome. We listen, take our time, and help you find a style that works for you.
                </p>
              </div>
              <div>
                <h3 className='heading-3-italic'>
                  Vision
                </h3>
                <hr className='border-foreground/10 my-4' />
                <p className='text-foreground/50'>
                  To be the barbershop you look forward to visiting. A familiar place in Saskatoon where you know your barber, feel at home, and can count on a great cut.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='py-26 bg-background'>
        <div className="container">
          {/* Header */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-24">
            <div className='md:col-span-5'>
              <h2 className='heading-5-italic mb-2'>What We</h2>
              <h2 className='heading-1'>BELIEVE</h2>
            </div>
            <div className='md:col-span-6 md:col-start-7 flex items-end'>
              <p className='text-foreground/40 leading-relaxed'>
                These principles guide everything we do. From the moment you walk in to the moment you walk out, our beliefs shape your experience.
              </p>
            </div>
          </div>

          {/* Beliefs Grid - Editorial Layout */}
          <div className='grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-20'>
            <div className='border-t border-foreground/10 pt-10'>
              <h3 className='heading-5-italic mb-3'>Craft Over</h3>
              <h3 className='heading-3 mb-6'>SPEED</h3>
              <p className='text-foreground/50 leading-relaxed'>
                We give each appointment the time it needs, from the first conversation to the final check in the mirror.
              </p>
            </div>

            <div className='border-t border-foreground/10 pt-10'>
              <h3 className='heading-5-italic mb-3'>Community</h3>
              <h3 className='heading-3 mb-6'>CONNECTION</h3>
              <p className='text-foreground/50 leading-relaxed'>
                From Wildwood to Willowgrove, we're proud to serve Saskatoon and surrounding neighborhoods with genuine care and dedication.
              </p>
            </div>

            <div className='border-t border-foreground/10 pt-10'>
              <h3 className='heading-5-italic mb-3'>Heritage &</h3>
              <h3 className='heading-3 mb-6'>INNOVATION</h3>
              <p className='text-foreground/50 leading-relaxed'>
                We honor classic barbering traditions while staying current with modern techniques and styles.
              </p>
            </div>

            <div className='border-t border-foreground/10 pt-10'>
              <h3 className='heading-5-italic mb-3'>Personal</h3>
              <h3 className='heading-3 mb-6'>GROWTH</h3>
              <p className='text-foreground/50 leading-relaxed'>
                We keep learning, sharing techniques, and helping each other become better barbers.
              </p>
            </div>
          </div>
        </div>

        {/* CTA after What We Believe */}
        <div className="text-center mt-20">
          <Link href="https://www.fresha.com/book-now/house-of-havana-barbershop-xcwtdh26/all-offer?share=true&pId=3102757" target="_blank">
            <Button variant="primary" size="default">
              Book Your Experience
              <ChevronRight className="stroke-background" height={16} width={16} />
            </Button>
          </Link>
        </div>
      </section>
      <TeamShowcase
        title="Meet Your"
        heading="BARBERS"
        supportingText="Get to know the people behind the chair. Each barber brings their own style and skills, with the same care for making you feel comfortable and look your best."
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
      <section className='py-26 bg-background'>
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="md:col-span-8 md:col-start-3">
              <h2 className='heading-5-italic mb-2 text-center'>Our</h2>
              <h2 className='heading-1 mb-12 text-center'>MANIFESTO</h2>
              <div className='relative'>
                <div className='heading-1-italic !text-[120px] absolute -left-8 -top-8 w-10 h-10 text-foreground/5 flex items-center justify-center -z-10'>
                  "
                </div>
                <p className='text-foreground/50 heading-3-italic leading-relaxed text-center'>
                  We believe a visit to the barber should be something you look forward to.
                  A good conversation, a cut that suits you, and a place where you feel welcome.
                  That is what we want you to find here.
                </p>
              </div>
            </div>
          </div>

          {/* CTA after Manifesto */}
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
    </>
  )
}

export default About
