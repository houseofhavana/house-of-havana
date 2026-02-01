import HeroInner from "@/components/sections/HeroInner";
import Button from "@/components/ui/button";
import {
  getRelatedServices,
  getServiceBySlug,
  getServicesWithPages,
} from "@/data/services";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import RelatedServices from "../../../components/sections/ServiceIndividual/RelatedServices";
import ServiceContent from "../../../components/sections/ServiceIndividual/ServiceContent";
import ServiceFAQ from "../../../components/sections/ServiceIndividual/ServiceFAQ";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getServicesWithPages().map((service) => ({
    slug: service.page!.slug,
  }));
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service?.page) {
    notFound();
  }

  const { page } = service;
  const relatedServices = getRelatedServices(slug);

  return (
    <>
      {/* Hero Section */}
      <HeroInner
        subheading="Our Services"
        title={page.h1}
        supportingText={page.intro}
      />

      {/* Service Items & Pricing Section */}
      <section className="bg-background py-20">
        <div className="container pt-5">
          <div className="max-w-3xl mx-auto">
            <h2 className="heading-4-italic mb-2 text-center">Available Services</h2>
            <h2 className="heading-3 mb-12 text-center">{service.title}</h2>
            
            <div className="space-y-4">
              {service.items.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-6 bg-surface rounded-lg border border-foreground/10 hover:border-foreground/20 transition-colors"
                >
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-foreground mb-1">
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
            href="https://getsquire.com/booking/brands/house-of-havana-barbershop"
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
