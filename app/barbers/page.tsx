import HeroInner from '@/components/sections/HeroInner'
import TeamCard from '@/components/ui/team-card'
import { BARBERS, type Barber } from '@/data/barbers'
import { jsonLd, teamSchema } from '@/lib/schema'
import { mergeSEO } from '@/lib/seo'

export const metadata = mergeSEO({
  title: "Meet Our Barbers",
  description:
    "Meet the skilled barbers at House Of Havana in Saskatoon. Our team blends traditional techniques with contemporary style for a personalized grooming experience.",
  keywords: [
    "saskatoon barbers",
    "house of havana team",
    "mens barbers saskatoon",
    "professional barbers",
  ],
  canonical: "/barbers",
})

const BarbersPage = () => (
  <>
    <HeroInner
      subheading="Meet Your"
      title="BARBERS"
      supportingText="Get to know the people behind the chair. Each barber brings their own style and skills, with the same care for making you feel comfortable and look your best."
    />

    <section className="py-26 bg-surface">
      <div className="container">
        <div className='grid grid-cols-1 md:grid-cols-3 gap-5 gap-y-10'>
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
        </div>
      </div>
    </section>

    {/* Team/Barbers Schema */}
    <script
      id="team-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: jsonLd(teamSchema) }}
    />
  </>
)

export default BarbersPage 