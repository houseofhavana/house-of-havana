import HeroInner from "@/components/sections/HeroInner";
import Button from "@/components/ui/button";
import Link from "next/link";

export const metadata = {
  title:
    "Preferred Partners | Local Business Discounts & Referrals in Saskatoon | House of Havana",
  description:
    "Explore House of Havana’s Preferred Partners in Saskatoon—trusted local businesses offering exclusive client benefits and referral perks. Apply to become a partner.",
  alternates: {
    canonical: "https://houseofhavana.ca/partners",
  },
};

type Partner = {
  name: string;
  category: string;
  location: string;
  offer: string;
  url: string;
  blurb: string;
};

const PARTNERS: Partner[] = [
  // Example partner — replace with real partners
  {
    name: "Partner Business Name",
    category: "Fitness / Wellness",
    location: "Saskatoon, SK",
    offer: "Exclusive client benefit (e.g., 10% off or priority booking).",
    url: "https://example.com",
    blurb:
      "Short, premium description of why you trust them and who they’re ideal for.",
  },
];

export default function PartnersPage() {
  return (
    <>
      <HeroInner
        subheading="House of Havana"
        title="PREFERRED PARTNERS"
        supportingText="We collaborate with a curated network of Saskatoon businesses that match our standards of service, professionalism, and quality. Clients may receive exclusive benefits through referrals and partner offers."
      />

      <section className="py-20 bg-surface">
        <div className="container">
          {/* SEO intro block */}
          <div className="max-w-3xl mb-14">
            <h1 className="heading-2 text-primary mb-6">Preferred Partners in Saskatoon</h1>
            <p className="text-foreground/60 leading-relaxed mb-4">
              House of Havana Barbershop partners with select local businesses in Saskatoon to
              create a referral-based benefits network. If you’re looking for trusted professionals
              in fitness, wellness, menswear, or lifestyle services, our Preferred Partners list is a
              curated place to start.
            </p>
            <p className="text-foreground/60 leading-relaxed">
              If you’re a local business interested in a partnership, we offer a simple referral
              program that rewards clients while strengthening local community ties.
            </p>
          </div>

          {/* Partner grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {PARTNERS.map((p) => (
              <div
                key={p.name}
                className="border border-foreground/10 bg-background p-8 hover:border-foreground/20 transition-colors"
              >
                <div className="flex items-start justify-between gap-6 mb-4">
                  <div>
                    <h2 className="heading-6 uppercase tracking-wider text-foreground">
                      {p.name}
                    </h2>
                    <p className="text-foreground/50 text-sm mt-2">
                      {p.category} • {p.location}
                    </p>
                  </div>
                </div>

                <p className="text-foreground/60 leading-relaxed mb-5">{p.blurb}</p>

                <div className="border-t border-foreground/10 pt-5">
                  <p className="text-foreground/50 text-xs uppercase tracking-widest mb-2">
                    Client Benefit
                  </p>
                  <p className="text-foreground/70 leading-relaxed mb-6">{p.offer}</p>

                  <Link href={p.url} target="_blank" rel="noopener noreferrer">
                    <Button variant="primary">Visit Partner</Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Become a partner CTA */}
          <div className="mt-16 border-t border-foreground/10 pt-14">
            <div className="max-w-3xl">
              <h2 className="heading-4-italic mb-4 text-foreground">Become a Preferred Partner</h2>
              <p className="text-foreground/60 leading-relaxed mb-8">
                We partner with businesses that share our standards: quality, professionalism, and
                consistency. If you’d like to explore a referral partnership, contact us and include
                your business name, website, and proposed client benefit.
              </p>

              <Link href="/contact">
                <Button variant="primary">Apply via Contact</Button>
              </Link>
            </div>
          </div>

          {/* Internal link SEO booster (subtle) */}
          <div className="mt-14 max-w-3xl">
            <p className="text-foreground/50 leading-relaxed">
              Looking for grooming services? Explore our{" "}
              <Link href="/services" className="underline">
                grooming services
              </Link>{" "}
              or{" "}
              <Link
                href="https://getsquire.com/booking/brands/house-of-havana-barbershop"
                target="_blank"
                className="underline"
              >
                book an appointment
              </Link>{" "}
              with House of Havana Barbershop in Saskatoon.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
