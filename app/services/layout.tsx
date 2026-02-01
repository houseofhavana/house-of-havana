import { servicesPageData } from "@/data/services";
import { barbershopSchema, jsonLd, servicesSchema } from "@/lib/schema";
import { mergeSEO } from "@/lib/seo";
import Script from "next/script";

export const metadata = mergeSEO({
  title: servicesPageData.meta.title,
  description: servicesPageData.meta.description,
  keywords: servicesPageData.meta.keywords,
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
    </>
  );
}
