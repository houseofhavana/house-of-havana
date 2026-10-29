import HeroInner from "@/components/sections/HeroInner";
import Button from "@/components/ui/button";
import {
  getRelatedServices,
  getChildServices,
  getServiceBySlug,
  getServicesWithPages,
} from "@/data/services";
import { generateFAQSchema, generateServiceSchema, jsonLd } from "@/lib/schema";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import RelatedServices from "../../../components/sections/ServiceIndividual/RelatedServices";
import ServiceContent from "../../../components/sections/ServiceIndividual/ServiceContent";
import ServiceFAQ from "../../../components/sections/ServiceIndividual/ServiceFAQ";

type Props = {
  params: Promise<{ slug: string[] }>;
};

export async function generateStaticParams() {
  return getServicesWithPages().map((service) => ({
    slug: service.page!.slug.split("/"),
  }));
}

export default async function ServicePage({ params }: Props) {
  const { slug: segments } = await params;
  const slug = segments.join("/");
  const service = getServiceBySlug(slug);

  if (!service?.page) {
    notFound();
  }

  const { page } = service;
  const parent = service.parentSlug ? getServiceBySlug(service.parentSlug) : undefined;
  const children = getChildServices(page.slug);
  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "Services", url: "/services" },
    ...(parent?.page ? [{ name: parent.title, url: `/services/${parent.page.slug}` }] : []),
    { name: page.cardTitle, url: `/services/${page.slug}` },
  ];
  const relatedServices = getRelatedServices(slug);
  const faqSchema = generateFAQSchema(page.faqs, `/services/${page.slug}`);
  const serviceSchema = generateServiceSchema({
    slug: page.slug,
    name: page.cardTitle,
    description: page.meta.description,
    category: service.title,
  });

  return (
    <>
      <script id="service-breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd({
        "@context": "https://schema.org", "@type": "BreadcrumbList",
        itemListElement: breadcrumbs.map((entry, index) => ({
          "@type": "ListItem", position: index + 1, name: entry.name,
          item: `https://houseofhavana.ca${entry.url}`,
        })),
      }) }} />
      {/* FAQ Schema */}
      <script
        id="service-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd(faqSchema) }}
      />

      {/* Service Schema */}
      <script
        id="service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd(serviceSchema) }}
      />

      <nav aria-label="Breadcrumb" className="bg-background">
        <div className="container py-3 text-sm text-foreground/60">
          <Link href="/" className="hover:underline">Home</Link>
          <span aria-hidden="true" className="mx-2">/</span>
          <Link href="/services" className="hover:underline">Services</Link>
          <span aria-hidden="true" className="mx-2">/</span>
          {parent?.page && <><Link href={`/services/${parent.page.slug}`} className="hover:underline">{parent.title}</Link><span aria-hidden="true" className="mx-2">/</span></>}
          <span aria-current="page">{page.cardTitle}</span>
        </div>
      </nav>

      {/* Hero Section */}
      <HeroInner
        subheading="Our Services"
        title={page.h1}
        supportingText={page.intro}
      />

      {children.length > 0 && (
        <section className="bg-surface py-16" aria-labelledby="service-options-title">
          <div className="container">
            <h2 id="service-options-title" className="heading-3 mb-4">Explore {service.title}</h2>
            <p className="text-foreground/60 mb-8 max-w-3xl">Compare the shapes and finishes below. Choose a style to learn what to discuss with your barber, then book your appointment on Fresha.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {children.map((child) => <Link key={child.page!.slug} href={`/services/${child.page!.slug}`} className="block border border-foreground/15 p-6 hover:border-foreground/40 focus-visible:outline focus-visible:outline-2">
                <h3 className="heading-5 mb-3">{child.title}</h3>
                <p className="text-sm text-foreground/60">{child.page!.cardDescription}</p>
                <span className="inline-block underline mt-4 text-sm">Explore this style</span>
              </Link>)}
            </div>
          </div>
        </section>
      )}
      {/* Service Items & Pricing Section */}
      <section className="bg-background py-20">
        <div className="container pt-5">
          <div className="max-w-3xl mx-auto">
            <h2 className="heading-4-italic mb-2 text-center">Appointments &amp; Pricing</h2>
            <h2 className="heading-3 mb-12 text-center">{service.title}</h2>

            {service.items.length === 0 && <p className="text-foreground/70 text-center">Confirm the current price and appointment length on Fresha or call <a href="tel:+13069522255" className="underline">306-952-2255</a>.</p>}
            <div className="space-y-4">
              {service.items.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-6 bg-surface  border border-foreground/10 hover:border-foreground/20 transition-colors"
                >
                  <div className="flex-1">
                    <h3 className="heading-3-italic text-foreground mb-1">
                      {item.name}
                    </h3>
                    {item.duration && (
                      <p className="text-sm text-foreground/60">{item.duration}</p>
                    )}
                  </div>
                  {item.price && (
                    <div className="text-right ml-4">
                      <span className="text-xl font-bold text-foreground">
                        {item.price}
                      </span>
                    </div>
                  )}
                </div>
              ))}
            </div>
            <p className="text-sm text-foreground/50 mt-6 text-center">Prices are in Canadian dollars before tax. Prices and appointment lengths may vary by barber. Confirm the final price when booking on Fresha.</p>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="bg-surface py-20">
        <div className="container pt-5">
          <ServiceContent
            sectionTitle={page.sectionTitle}
            sectionItems={page.sectionItems}
            whyChooseTitle={page.whyChooseTitle}
            whyChooseText={page.whyChooseText}
          />
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-background py-20">
        <div className="container pt-5">
          <ServiceFAQ faqTitle={page.faqTitle} faqs={page.faqs} />
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-surface py-20">
        <div className="container text-center">
          <Link
            href="https://www.fresha.com/book-now/house-of-havana-barbershop-xcwtdh26/all-offer?share=true&pId=3102757"
            target="_blank"
          >
            <Button variant="primary" size="default">
              {page.ctaText}
              <ChevronRight className="stroke-background" height={16} width={16} />
            </Button>
          </Link>
        </div>
      </section>

      {/* Related Services Section */}
      <section className="bg-background py-20">
        <div className="container pt-5">
          <RelatedServices services={relatedServices} />
        </div>
      </section>
    </>
  );
}
