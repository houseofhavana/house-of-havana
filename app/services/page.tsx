import { mergeSEO } from "@/lib/seo";
import Link from "next/link";

export const metadata = mergeSEO({
  title: "Barbershop Services",
  description:
    "Explore premium barbershop services in Saskatoon at House Of Havana: men's haircuts, fade haircuts, and beard grooming—crafted with precision and Havana-inspired style.",
  keywords: [
    "barbershop services saskatoon",
    "mens haircuts saskatoon",
    "fade haircuts",
    "beard grooming",
  ],
  canonical: "/services",
  openGraph: {
    images: [
      {
        url: "https://houseofhavana.ca/og-services.jpg",
        width: 1200,
        height: 630,
        alt: "House Of Havana - Barbershop Services",
      },
    ],
  },
});

const SERVICES = [
  {
    title: "Men’s Haircuts",
    description:
      "Clean, tailored cuts built around your face shape, hair type, and lifestyle—finished with detail and designed to grow out sharp.",
    href: "/services/mens-haircut-saskatoon",
    label: "Men’s haircuts in Saskatoon",
  },
  {
    title: "Fade Haircuts",
    description:
      "Low, mid, high, skin, and taper fades with smooth transitions, crisp finishing, and a blend that holds its shape beyond day one.",
    href: "/services/fade-haircut-saskatoon",
    label: "Fade haircuts in Saskatoon",
  },
  {
    title: "Beard Grooming",
    description:
      "Detailed trims, shaping, and line-ups with balanced symmetry—optionally blended into your haircut for a seamless finish.",
    href: "/services/beard-grooming-saskatoon",
    label: "Beard grooming in Saskatoon",
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="container py-24">
        {/* H1 */}
        <h1 className="heading-1 mb-6 text-center">
          Barbershop Services in Saskatoon
        </h1>

        {/* Supporting copy */}
        <p className="text-foreground/60 leading-relaxed max-w-3xl mx-auto text-center">
          At House Of Havana Barbershop, every service is performed with
          intention—precision haircuts, refined fades, and well-groomed beards in
          a premium, Havana-inspired environment. Choose your service below and
          book your time with a barber who takes the details seriously.
        </p>

        {/* Divider */}
        <div className="w-20 h-px bg-foreground/20 mx-auto my-12" />

        {/* Service cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {SERVICES.map((s) => (
            <Link
              key={s.href}
              href={s.href}
              className="group rounded-2xl border border-foreground/10 bg-surface/40 hover:bg-surface/60 transition-colors p-6"
              aria-label={s.label}
            >
              <h2 className="heading-4-italic mb-3 text-foreground">
                {s.title}
              </h2>
              <p className="text-foreground/60 leading-relaxed mb-6">
                {s.description}
              </p>
              <span className="underline text-foreground/80 group-hover:text-foreground transition-colors">
                View details →
              </span>
            </Link>
          ))}
        </div>

        {/* Booking CTA */}
        <div className="text-center mt-14">
          <Link
            href="https://getsquire.com/booking/brands/house-of-havana-barbershop"
            target="_blank"
            className="underline text-foreground"
          >
            Book your appointment
          </Link>
        </div>

        {/* Local SEO FAQ section */}
        <section className="max-w-3xl mx-auto mt-20">
          <h2 className="heading-3 mb-6 text-center">
            Services FAQ
          </h2>

          <div className="space-y-8 text-foreground/60 leading-relaxed">
            <div>
              <h3 className="heading-5 text-foreground mb-1">
                What services does House Of Havana offer in Saskatoon?
              </h3>
              <p>
                We specialize in men’s haircuts, fade haircuts, and beard
                grooming. Each service starts with a consultation and ends with
                detail-driven finishing for a clean, polished look.
              </p>
            </div>

            <div>
              <h3 className="heading-5 text-foreground mb-1">
                Do you recommend booking haircut + beard together?
              </h3>
              <p>
                Yes—if you want a cohesive look, booking both allows your barber
                to blend your fade and beard cleanly for a seamless transition.
              </p>
            </div>

            <div>
              <h3 className="heading-5 text-foreground mb-1">
                How often should I book to maintain my look?
              </h3>
              <p>
                Most clients book every 2–4 weeks depending on style. Fades
                typically look sharpest with more frequent maintenance.
              </p>
            </div>
          </div>
        </section>
      </section>
    </main>
  );
}
