import FAQSection from "@/components/sections/FAQSection";
import HeroInner from "@/components/sections/HeroInner";
import ServicesSection from "@/components/sections/ServicesSection";
import { groomingServices, servicesPageData } from "@/data/services";

const ServicesPage = () => (
  <>
    <HeroInner
      subheading="Our"
      title="SERVICES"
      supportingText={servicesPageData.intro}
    />
    <ServicesSection
      services={groomingServices}
      bgSurface={true}
      subheading="Our Rituals"
      heading="Grooming<br />Services"
      supportingText="At House of Havana, grooming is a ritual — not a routine. Each service is carefully crafted to deliver exceptional results and an unforgettable experience."
    />

    <FAQSection faqs={servicesPageData.faqs} bgSurface={false} />
  </>
);

export default ServicesPage;
