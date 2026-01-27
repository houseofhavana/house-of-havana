import { LocalBusinessJsonLd } from "@/components/LocalBusinessJsonLd";
import HeroInner from "@/components/sections/HeroInner";
import ServicesSection from "@/components/sections/ServicesSection";
import FAQSection, { FAQItem } from "@/components/sections/FAQSection";
import { groomingServices } from "@/data/services";
import React from "react";

const FAQS: FAQItem[] = [
  {
    question: "What services do you offer?",
    answer:
      "We offer a range of professional grooming services including haircuts, haircut and beard combinations, hot shaves, and premium perm treatments. Each service is tailored to your individual needs and delivered with precision and care.",
  },
  {
    question: "How do I book an appointment?",
    answer:
      'You can book your appointment online through our booking system. Simply click the "Book Your Experience" button on our website, select your preferred barber, service, and time slot. We recommend booking in advance to secure your preferred time.',
  },
  {
    question: "What is your cancellation policy?",
    answer:
      "We understand that plans change. Please provide at least 24 hours notice if you need to cancel or reschedule your appointment. This allows us to offer the slot to other clients. Cancellation policies are managed through our booking system.",
  },
  {
    question: "Do you accept walk-ins?",
    answer:
      "While we welcome walk-ins based on availability, we highly recommend booking an appointment to ensure you get your preferred time slot and barber. Appointments guarantee you receive the full attention and time your grooming ritual deserves.",
  },
  {
    question: "What are your hours of operation?",
    answer:
      "We are open Monday to Friday from 10:00 AM to 7:00 PM, and Saturday from 9:00 AM to 6:00 PM. We are closed on Sundays. Holiday hours may vary, so please check our booking system or contact us for specific dates.",
  },
  {
    question: "Where are you located?",
    answer:
      "House of Havana is located at 3501 8 St, Unit #110, Saskatoon, SK S7H0W5. We're conveniently situated to serve clients from Wildwood, Lakeview, Rosewood, Stonebridge, Brighton, Willowgrove, and surrounding Saskatoon neighborhoods.",
  },
  {
    question: "Do you offer gift cards?",
    answer:
      "Yes! Gift cards are available through our booking system. They make the perfect gift for the modern gentleman in your life and can be used toward any of our grooming services.",
  },
  {
    question: "How long do appointments typically take?",
    answer:
      "Appointment duration varies by service: Haircuts take approximately 40 minutes, Haircut and Beard combinations take about 1 hour, Hot Shaves take 30 minutes, Partial Perms take 2 hours, and Full Perms take 2.5 hours. We never rush — every service receives the time and attention it deserves.",
  },
];

const TreatmentsPage = () => (
  <>
    <LocalBusinessJsonLd />

    <HeroInner
      subheading="Our"
      title="SERVICES"
      supportingText="Explore our curated menu of grooming services designed for the modern gentleman. Every service is delivered with precision and care."
    />
    <ServicesSection
      services={groomingServices}
      bgSurface={true}
      subheading="Our Rituals"
      heading="Grooming<br />Services"
      supportingText="At House of Havana, grooming is a ritual — not a routine. Each service is carefully crafted to deliver exceptional results and an unforgettable experience."
    />

    <FAQSection faqs={FAQS} bgSurface={false} />
  </>
);

export default TreatmentsPage;
