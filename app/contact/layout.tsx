import { jsonLd, placeSchema, contactPageSchema } from "@/lib/schema";
import { mergeSEO } from "@/lib/seo";
import Script from "next/script";

export const metadata = mergeSEO({
  title: "Contact Us",
  description:
    "Contact House Of Havana barbershop in Saskatoon. Visit us at 3501 8 St, call 306-952-2255, or send us a message.",
  keywords: [
    "contact barber saskatoon",
    "house of havana location",
    "saskatoon barbershop hours",
  ],
  canonical: "/contact",
});

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}

      {/* Place Schema */}
      <Script
        id="place-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd(placeSchema) }}
      />

      {/* ContactPage Schema */}
      <Script
        id="contact-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd(contactPageSchema) }}
      />
    </>
  );
}
