import Link from "next/link";

export const metadata = {
  title: "Beard Grooming in Saskatoon | House Of Havana Barbershop",
  description:
    "Need professional beard grooming in Saskatoon? House Of Havana Barbershop offers detailed trims, shaping, line-ups, and clean finishes tailored to your face.",
};

export default function BeardGroomingPage() {
  return (
    <main className="container py-24">
      {/* H1 */}
      <h1 className="heading-1 mb-6">
        Beard Grooming in Saskatoon
      </h1>

      {/* Intro */}
      <p className="text-foreground/60 max-w-2xl mb-10">
        At House Of Havana Barbershop in Saskatoon, beard grooming is precision
        work — shaping, balance, and clean lines that fit your face and your
        style. Whether you want a subtle clean-up or a full beard reshape, our
        barbers focus on detail so your beard looks sharp and intentional.
      </p>

      {/* What we do */}
      <h2 className="heading-3 mb-4">
        What’s Included in Our Beard Grooming
      </h2>

      <ul className="list-disc pl-6 text-foreground/60 max-w-2xl mb-10 space-y-2">
        <li>Consultation on shape and length to suit your face</li>
        <li>Beard trim and sculpting for clean symmetry</li>
        <li>Line-up and edge detailing (cheeks + neckline)</li>
        <li>Optional blending with your haircut for a seamless finish</li>
        <li>Aftercare guidance to keep your beard healthy between visits</li>
      </ul>

      {/* Why choose */}
      <h2 className="heading-3 mb-4">
        Why Choose House Of Havana for Beard Grooming?
      </h2>

      <p className="text-foreground/60 max-w-2xl mb-8">
        Most beard trims are rushed — we don’t do that. We take the time to map
        the shape, define the lines, and create a finish that looks clean in
        person and on camera. If you want your beard to elevate your whole look,
        this is the service.
      </p>

      {/* FAQ */}
      <h2 className="heading-3 mb-4">
        Beard Grooming FAQ
      </h2>

      <div className="space-y-6 max-w-2xl text-foreground/60">
        <div>
          <h3 className="heading-5 text-foreground mb-1">
            How often should I get my beard groomed?
          </h3>
          <p>
            Most clients book every 2–3 weeks to keep their lines sharp and the
            shape consistent. If you’re growing it out, we can maintain it
            without losing progress.
          </p>
        </div>

        <div>
          <h3 className="heading-5 text-foreground mb-1">
            Do you do beard line-ups only?
          </h3>
          <p>
            Yes — if you just need a clean edge and neckline, we can do a quick
            line-up. For best results, book beard grooming so everything is
            balanced.
          </p>
        </div>

        <div>
          <h3 className="heading-5 text-foreground mb-1">
            Can you blend the beard into my haircut?
          </h3>
          <p>
            Absolutely. If you want your fade and beard to flow together, book a
            haircut & beard grooming service so we can blend it properly.
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
          Book beard grooming in Saskatoon
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
            <Link className="underline" href="/services/fade-haircut-saskatoon">
              Fade haircuts in Saskatoon
            </Link>
          </li>
        </ul>
      </div>
    </main>
  );
}
