import Link from "next/link";

export const metadata = {
  title: "Men’s Haircuts in Saskatoon | House Of Havana Barbershop",
  description:
    "Looking for professional men’s haircuts in Saskatoon? House Of Havana Barbershop delivers precision cuts, clean finishes, and tailored styles for modern gentlemen.",
};

export default function MensHaircutPage() {
  return (
    <main className="container py-24">
      {/* H1 */}
      <h1 className="heading-1 mb-6">
        Men’s Haircuts in Saskatoon
      </h1>

      {/* Intro */}
      <p className="text-foreground/60 max-w-2xl mb-10">
        At House Of Havana Barbershop in Saskatoon, men’s haircuts are crafted
        with precision, intention, and attention to detail. Whether you’re after
        a sharp professional cut or a modern textured style, our barbers tailor
        every haircut to suit your face shape, hair type, and lifestyle.
      </p>

      {/* What we offer */}
      <h2 className="heading-3 mb-4">
        What’s Included in Our Men’s Haircuts
      </h2>

      <ul className="list-disc pl-6 text-foreground/60 max-w-2xl mb-10 space-y-2">
        <li>Personal consultation to understand your style and needs</li>
        <li>Precision cutting using classic and modern techniques</li>
        <li>Clean neckline and detailed finishing</li>
        <li>Styling advice and product recommendations</li>
      </ul>

      {/* Why choose */}
      <h2 className="heading-3 mb-4">
        Why Choose House Of Havana for Men’s Haircuts?
      </h2>

      <p className="text-foreground/60 max-w-2xl mb-8">
        We take the time others don’t. From the initial consultation to the final
        touch, your haircut is handled by skilled barbers who care about
        consistency, craftsmanship, and long-lasting results. The goal isn’t
        just a great cut today — it’s a style that grows out clean and stays
        sharp.
      </p>

      {/* FAQ */}
      <h2 className="heading-3 mb-4">
        Men’s Haircut FAQ
      </h2>

      <div className="space-y-6 max-w-2xl text-foreground/60">
        <div>
          <h3 className="heading-5 text-foreground mb-1">
            How often should I get a men’s haircut?
          </h3>
          <p>
            Most clients visit every 3–4 weeks. Shorter styles or fades may
            require more frequent maintenance.
          </p>
        </div>

        <div>
          <h3 className="heading-5 text-foreground mb-1">
            Can I get a consultation before cutting?
          </h3>
          <p>
            Absolutely. Every haircut begins with a consultation to ensure the
            style fits your look, profession, and daily routine.
          </p>
        </div>

        <div>
          <h3 className="heading-5 text-foreground mb-1">
            Do you recommend products for at-home styling?
          </h3>
          <p>
            Yes. We’ll recommend the right products to help you maintain your
            haircut and style between visits.
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
          Book a men’s haircut in Saskatoon
        </Link>
      </div>

      {/* Internal links */}
      <div className="mt-10 max-w-2xl text-foreground/60">
        <p className="mb-2">Related services:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>
            <Link className="underline" href="/services/fade-haircut-saskatoon">
              Fade haircuts in Saskatoon
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
