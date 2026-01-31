import { mergeSEO } from "@/lib/seo";
import Link from "next/link";

export const metadata = mergeSEO({
  title: "Fade Haircuts in Saskatoon",
  description:
    "Looking for a clean fade haircut in Saskatoon? House Of Havana delivers precision fades, sharp blends, and tailored finishes for modern gentlemen.",
  keywords: [
    "fade haircut saskatoon",
    "skin fade",
    "low fade",
    "high fade",
    "taper fade",
  ],
  canonical: "/services/fade-haircut-saskatoon",
});

export default function FadeHaircutPage() {
  return (
    <main className="container py-24">
      {/* H1 */}
      <h1 className="heading-1 mb-6">
        Fade Haircuts in Saskatoon
      </h1>

      {/* Intro */}
      <p className="text-foreground/60 max-w-2xl mb-10">
        At House Of Havana Barbershop in Saskatoon, a fade haircut is more than a
        style — it’s precision work. Our barbers specialize in clean blends,
        sharp transitions, and tailored fades designed to suit your head shape,
        hair type, and lifestyle.
      </p>

      {/* Types of fades */}
      <h2 className="heading-3 mb-4">
        Types of Fade Haircuts We Offer
      </h2>

      <ul className="list-disc pl-6 text-foreground/60 max-w-2xl mb-10 space-y-2">
        <li><strong>Low Fade:</strong> Clean, subtle, and professional.</li>
        <li><strong>Mid Fade:</strong> Balanced and modern.</li>
        <li><strong>High Fade:</strong> Sharp contrast with bold definition.</li>
        <li><strong>Skin Fade:</strong> Ultra-clean finish down to the skin.</li>
        <li><strong>Taper Fade:</strong> Natural blend around the neckline and temples.</li>
      </ul>

      {/* Why choose */}
      <h2 className="heading-3 mb-4">
        Why Choose House Of Havana for a Fade Haircut?
      </h2>

      <p className="text-foreground/60 max-w-2xl mb-8">
        Our approach combines classic barbering fundamentals with modern
        technique. We take time to consult, map the blend, and finish with detail
        so your fade looks sharp today and grows out clean over time.
      </p>

      {/* FAQ */}
      <h2 className="heading-3 mb-4">
        Fade Haircut FAQ
      </h2>

      <div className="space-y-6 max-w-2xl text-foreground/60">
        <div>
          <h3 className="heading-5 text-foreground mb-1">
            How often should I get a fade haircut?
          </h3>
          <p>
            Most clients book every 2–3 weeks to keep their fade crisp. For a
            super sharp look, every 10–14 days works best.
          </p>
        </div>

        <div>
          <h3 className="heading-5 text-foreground mb-1">
            What should I ask for when booking?
          </h3>
          <p>
            Let us know if you want a low, mid, high, or taper fade. Reference
            photos help, but our barbers will guide the final details.
          </p>
        </div>

        <div>
          <h3 className="heading-5 text-foreground mb-1">
            Can I combine a fade with beard grooming?
          </h3>
          <p>
            Yes. We recommend booking a haircut & beard grooming service so the
            fade and beard blend seamlessly.
          </p>
        </div>
      </div>

      {/* CTA */}
      <div className="mt-12">
        <Link
          href="https://getsquire.com/booking/brands/house-of-havana-barbershop"
          target="_blank"
          className="underline"
        >
          Book a fade haircut in Saskatoon
        </Link>
      </div>

      {/* Internal links */}
      <div className="mt-10 max-w-2xl text-foreground/60">
        <p className="mb-2">Related services:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>
            <Link className="underline" href="/services/mens-haircut-saskatoon">
              Men’s haircuts in Saskatoon
            </Link>
          </li>
          <li>
            <Link className="underline" href="/services/beard-grooming-saskatoon">
              Beard grooming in Saskatoon
            </Link>
          </li>
        </ul>
      </div>
    </main>
  );
}
