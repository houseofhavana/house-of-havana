export type FAQ = {
  question: string;
  answer: string;
};

export type ServicePageData = {
  slug: string;
  h1: string;
  cardTitle: string;
  cardDescription: string;
  intro: string;
  sectionTitle: string;
  sectionItems: string[];
  whyChooseTitle: string;
  whyChooseText: string;
  faqTitle: string;
  faqs: FAQ[];
  ctaText: string;
  meta: {
    title: string;
    description: string;
    keywords: string[];
  };
};

export type ServiceCategory = {
  title: string;
  description: string;
  items: {
    name: string;
    duration?: string;
    price?: string;
  }[];
  page?: ServicePageData;
};

export const servicesList: ServiceCategory[] = [
  {
    title: "Men's Haircuts",
    description: "Clean, tailored cuts built around your face shape, hair type, and lifestyle.",
    items: [
      { name: "Classic Haircut", duration: "40 min", price: "$45–55*" },
      { name: "Haircut & Beard", duration: "1 hour", price: "$65–80*" },
      { name: "Modern Haircut", duration: "40 min", price: "$45–55*" },
      { name: "Textured Crop", duration: "40 min", price: "$45–55*" },
      { name: "Pompadour Cut", duration: "40 min", price: "$45–55*" },
      { name: "Business Professional Cut", duration: "40 min", price: "$45–55*" },
    ],
    page: {
      slug: "mens-haircut-saskatoon",
      h1: "Men's Haircuts in Saskatoon",
      cardTitle: "Men's Haircuts",
      cardDescription:
        "A haircut that suits your hair, your face, and your routine, with care taken from the first cut to the finish.",
      intro:
        "Looking for a tidy professional cut, a textured style, or something new? Our Saskatoon barbers will talk through what you want and help you find a haircut that works with your hair and your daily routine.",
      sectionTitle: "What's Included in Our Men's Haircuts",
      sectionItems: [
        "Personal consultation to understand your style and needs",
        "Precision cutting using classic and modern techniques",
        "Clean neckline and detailed finishing",
        "Styling advice and product recommendations",
      ],
      whyChooseTitle: "Why Choose House Of Havana for Men's Haircuts?",
      whyChooseText:
        "We talk through your ideas before we start and check the details as we go. Your barber can also show you how to style your hair at home, so you feel comfortable with it between visits.",
      faqTitle: "Men's Haircut FAQ",
      faqs: [
        {
          question: "How often should I get a men's haircut?",
          answer:
            "Most clients visit every 3–4 weeks. Shorter styles or fades may require more frequent maintenance.",
        },
        {
          question: "Can I get a consultation before cutting?",
          answer:
            "Absolutely. Every haircut begins with a consultation to ensure the style fits your look, profession, and daily routine.",
        },
        {
          question: "Do you recommend products for at-home styling?",
          answer:
            "Yes. We'll recommend the right products to help you maintain your haircut and style between visits.",
        },
      ],
      ctaText: "Book a men's haircut in Saskatoon",
      meta: {
        title: "Men's Haircuts in Saskatoon",
        description:
          "Looking for professional men's haircuts in Saskatoon? House Of Havana delivers precision cuts, clean finishes, and tailored styles for modern gentlemen.",
        keywords: [
          "mens haircuts saskatoon",
          "barber saskatoon",
          "professional haircut",
          "mens hairstyles",
        ],
      },
    },
  },
  {
    title: "Fade Haircuts",
    description: "Low, mid, high, skin, and taper fades with smooth transitions and crisp finishing.",
    items: [
      { name: "Low Fade", duration: "40 min", price: "$45–55*" },
      { name: "Mid Fade", duration: "40 min", price: "$45–55*" },
      { name: "High Fade", duration: "40 min", price: "$45–55*" },
      { name: "Skin Fade", duration: "40 min", price: "$45–55*" },
      { name: "Taper Fade", duration: "40 min", price: "$45–55*" },
      { name: "Drop Fade", duration: "40 min", price: "$45–55*" },
      { name: "Burst Fade", duration: "40 min", price: "$45–55*" },
    ],
    page: {
      slug: "fade-haircut-saskatoon",
      h1: "Fade Haircuts in Saskatoon",
      cardTitle: "Fade Haircuts",
      cardDescription:
        "Low, mid, high, skin, and taper fades with smooth transitions, crisp finishing, and a blend that holds its shape beyond day one.",
      intro:
        "Whether you like a subtle taper or a close skin fade, we will help you choose the right height and shape. Our barbers take care with the blend and finish so it works with the rest of your haircut.",
      sectionTitle: "Types of Fade Haircuts We Offer",
      sectionItems: [
        "<strong>Low Fade:</strong> Clean, subtle, and professional.",
        "<strong>Mid Fade:</strong> Balanced and modern.",
        "<strong>High Fade:</strong> Sharp contrast with bold definition.",
        "<strong>Skin Fade:</strong> Ultra-clean finish down to the skin.",
        "<strong>Taper Fade:</strong> Natural blend around the neckline and temples.",
      ],
      whyChooseTitle: "Why Choose House Of Havana for a Fade Haircut?",
      whyChooseText:
        "Our approach combines classic barbering fundamentals with modern technique. We take time to consult, map the blend, and finish with detail so your fade looks sharp today and grows out clean over time.",
      faqTitle: "Fade Haircut FAQ",
      faqs: [
        {
          question: "How often should I get a fade haircut?",
          answer:
            "Most clients book every 2–3 weeks to keep their fade crisp. For a super sharp look, every 10–14 days works best.",
        },
        {
          question: "What should I ask for when booking?",
          answer:
            "Let us know if you want a low, mid, high, or taper fade. Reference photos help, but our barbers will guide the final details.",
        },
        {
          question: "Can I combine a fade with beard grooming?",
          answer:
            "Yes. We recommend booking a haircut & beard grooming service so the fade and beard blend seamlessly.",
        },
      ],
      ctaText: "Book a fade haircut in Saskatoon",
      meta: {
        title: "Fade Haircuts in Saskatoon",
        description:
          "Looking for a clean fade haircut in Saskatoon? House Of Havana delivers precision fades, sharp blends, and tailored finishes for modern gentlemen.",
        keywords: [
          "fade haircut saskatoon",
          "skin fade",
          "low fade",
          "high fade",
          "taper fade",
        ],
      },
    },
  },
  {
    title: "Beard Grooming",
    description: "Detailed trims, shaping, and line-ups with balanced symmetry.",
    items: [
      { name: "Beard Trim", duration: "30 min", price: "$35–45*" },
      { name: "Beard Shape & Lineup", duration: "30 min", price: "$35–45*" },
      { name: "Hot Towel Shave", duration: "30 min", price: "$35–45*" },
      { name: "Full Beard Sculpt", duration: "30 min", price: "$35–45*" },
    ],
    page: {
      slug: "beard-grooming-saskatoon",
      h1: "Beard Grooming in Saskatoon",
      cardTitle: "Beard Grooming",
      cardDescription:
        "Keep your beard tidy with a trim, shape, and clean edges. We can also blend it into your haircut.",
      intro:
        "Keep the length you love, tidy up the edges, or give your beard a new shape. We will talk about what you want and work with your growth pattern to find a shape that suits your face.",
      sectionTitle: "What's Included in Our Beard Grooming",
      sectionItems: [
        "Consultation on shape and length to suit your face",
        "Beard trim and sculpting for clean symmetry",
        "Line-up and edge detailing (cheeks + neckline)",
        "Optional blending with your haircut for a seamless finish",
        "Aftercare guidance to keep your beard healthy between visits",
      ],
      whyChooseTitle: "Why Choose House Of Havana for Beard Grooming?",
      whyChooseText:
        "Tell us what you like about your beard and what you want to change. We take care with the shape, cheek lines, and neckline, and can offer advice on looking after it at home.",
      faqTitle: "Beard Grooming FAQ",
      faqs: [
        {
          question: "How often should I get my beard groomed?",
          answer:
            "Most clients book every 2–3 weeks to keep their lines sharp and the shape consistent. If you're growing it out, we can maintain it without losing progress.",
        },
        {
          question: "Do you do beard line-ups only?",
          answer:
            "Yes. If you just need the edges and neckline tidied up, ask for a line-up. Choose beard grooming if you would also like the length and shape adjusted.",
        },
        {
          question: "Can you blend the beard into my haircut?",
          answer:
            "Absolutely. If you want your fade and beard to flow together, book a haircut & beard grooming service so we can blend it properly.",
        },
      ],
      ctaText: "Book beard grooming in Saskatoon",
      meta: {
        title: "Beard Grooming in Saskatoon",
        description:
          "Need professional beard grooming in Saskatoon? House Of Havana offers detailed trims, shaping, line-ups, and clean finishes tailored to your face.",
        keywords: [
          "beard grooming saskatoon",
          "beard trim",
          "beard shaping",
          "beard lineup",
        ],
      },
    },
  },
  {
    title: "Premium Treatments",
    description: "Perms, colour, and grey blending for a change that suits you.",
    items: [
      { name: "Partial Perm with Haircut", duration: "2 hours", price: "$160" },
      { name: "Full Perm with Haircut", duration: "2.5 hours", price: "$190" },
      { name: "Color Treatment", duration: "1.5 hours", price: "$120" },
      { name: "Gray Blending", duration: "20 min", price: "$40" },
    ],
    page: {
      slug: "premium-treatments-saskatoon",
      h1: "Premium Treatments in Saskatoon",
      cardTitle: "Premium Treatments",
      cardDescription:
        "Add texture or volume with a partial or full perm, or explore a change of colour with your barber.",
      intro:
        "Thinking about more texture, extra volume, or a change of colour? We will talk through your options, look at your hair, and help you choose a treatment that fits the look you want.",
      sectionTitle: "What's Included in Our Premium Treatments",
      sectionItems: [
        "In-depth consultation to assess your hair and desired outcome",
        "Partial Perm: Targeted texture and volume in key areas (2 hours)",
        "Full Perm: Complete transformation with lasting waves and body (2.5 hours)",
        "Professional styling and aftercare guidance",
        "Product recommendations to maintain your new look",
      ],
      whyChooseTitle: "Why Choose House Of Havana for Premium Treatments?",
      whyChooseText:
        "Before we begin, we will discuss the look you want, what works for your hair, and how to care for it afterwards. You can ask questions and get a clear idea of what to expect.",
      faqTitle: "Premium Treatments FAQ",
      faqs: [
        {
          question: "What's the difference between a partial and full perm?",
          answer:
            "A partial perm targets specific areas (crown, top, or sides) for added volume and texture. A full perm transforms your entire head for consistent waves and body throughout.",
        },
        {
          question: "How long do perm results last?",
          answer:
            "Perms typically last 3–6 months depending on your hair type and maintenance routine. We'll provide aftercare tips to help you get the most out of your treatment.",
        },
        {
          question: "Can I get a haircut with my perm service?",
          answer:
            "Yes. Both partial and full perm services include a haircut so your barber can shape and finish the style properly.",
        },
        {
          question: "Is a perm damaging to my hair?",
          answer:
            "When done properly with quality products and technique, perms can be safe. We assess your hair health during consultation and recommend what's best for your hair type.",
        },
      ],
      ctaText: "Book premium treatments in Saskatoon",
      meta: {
        title: "Premium Treatments in Saskatoon",
        description:
          "Explore premium barbershop treatments in Saskatoon at House Of Havana. From partial to full perms, we deliver transformative results with expert care.",
        keywords: [
          "premium treatments saskatoon",
          "perm saskatoon",
          "mens perm",
          "hair transformation",
        ],
      },
    },
  },
];

export const servicesPageData = {
  h1: "Barbershop Services in Saskatoon",
  intro:
    "Find your next haircut, fade, beard trim, or treatment at House of Havana in Saskatoon. Browse the services below, and get in touch if you are unsure what to book.",
  faqs: [
    {
      question: "What services does House Of Havana offer in Saskatoon?",
      answer:
        "We specialize in men's haircuts, fade haircuts, and beard grooming. Each service starts with a consultation and ends with detail-driven finishing for a clean, polished look.",
    },
    {
      question: "Do you recommend booking haircut + beard together?",
      answer:
        "Yes. Booking both gives your barber time to shape your haircut and beard together and blend them where they meet.",
    },
    {
      question: "How often should I book to maintain my look?",
      answer:
        "Most clients book every 2–4 weeks depending on style. Fades typically look sharpest with more frequent maintenance.",
    },
  ],
  meta: {
    title: "Barbershop Services",
    description:
      "Explore men's haircuts, fades, and beard grooming at House of Havana in Saskatoon. Find your service and book a time with your barber.",
    keywords: [
      "barbershop services saskatoon",
      "mens haircuts saskatoon",
      "fade haircuts",
      "beard grooming",
    ],
  },
};

export function getServiceBySlug(slug: string): ServiceCategory | undefined {
  return servicesList.find((s) => s.page?.slug === slug);
}

export function getServicesWithPages(): ServiceCategory[] {
  return servicesList.filter((s) => s.page !== undefined);
}

export function getRelatedServices(currentSlug: string): ServiceCategory[] {
  return servicesList.filter((s) => s.page && s.page.slug !== currentSlug);
}
