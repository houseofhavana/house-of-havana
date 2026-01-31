import HeroInner from '@/components/sections/HeroInner'
import TeamCard from '@/components/ui/team-card'
import { BARBERS, type Barber } from '@/data/barbers'
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
  openGraph: {
    images: [
      {
        url: "https://houseofhavana.ca/og-barbers.jpg",
        width: 1200,
        height: 630,
        alt: "House Of Havana - Our Barbers",
      },
    ],
  },
})

const BarbersPage = () => (
  <>
    <HeroInner
      subheading="Meet Your"
      title="BARBERS"
      supportingText="Our skilled barbers blend traditional techniques with contemporary style, ensuring every client receives a personalized experience that reflects their unique personality and lifestyle."
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
  </>
)

export default BarbersPage 