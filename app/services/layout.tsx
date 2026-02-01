import { servicesPageData } from "@/data/services";
import { barbershopSchema, generateFAQSchema, jsonLd, servicesSchema } from "@/lib/schema";
import { mergeSEO } from "@/lib/seo";
import Script from "next/script";

const faqSchema = generateFAQSchema(servicesPageData.faqs, "/services");

export const metadata = mergeSEO({
  title: servicesPageData.meta.title,
  description: servicesPageData.meta.description,
  keywords: servicesPageData.meta.keywords,
  canonical: "/services",
});

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}

      {/* Services Schema */}
      <Script
        id="services-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd(servicesSchema) }}
      />

      {/* Barbershop Schema */}
      <Script
        id="barbershop-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd(barbershopSchema) }}
      />

      {/* FAQ Schema */}
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd(faqSchema) }}
      />
    </>
  );
}
