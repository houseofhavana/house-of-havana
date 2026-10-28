import { servicesPageData } from "@/data/services";
import { barbershopSchema, jsonLd } from "@/lib/schema";
import { mergeSEO } from "@/lib/seo";

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

      {/* Barbershop Schema */}
      <script
        id="barbershop-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd(barbershopSchema) }}
      />

    </>
  );
}
