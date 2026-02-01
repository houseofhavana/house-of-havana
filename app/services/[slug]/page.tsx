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
