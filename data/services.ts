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
      { name: "Haircut + Wash and Style", duration: "30 min–1 hr", price: "From $38" },
      { name: "Haircut + Beard Grooming", duration: "45 min–1 hr 30 min", price: "From $55" },
      { name: "Long Hair - Precision Cut with Scissors + Style", duration: "40 min–1 hr", price: "From $50" },
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
      { name: "Haircut + Wash and Style (ask your barber for a fade)", duration: "30 min–1 hr", price: "From $38" },
    ],
    page: {
      slug: "fade-haircut-saskatoon",
      h1: "Skin Fades & Fade Haircuts in Saskatoon",
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
        title: "Skin Fades & Fade Haircuts Saskatoon",
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
      { name: "Beard Grooming", duration: "30–40 min", price: "From $25" },
      { name: "Hot Towel Shave", duration: "30–40 min", price: "From $45" },
      { name: "Haircut + Beard Grooming", duration: "45 min–1 hr 30 min", price: "From $55" },
    ],
    page: {
      slug: "beard-grooming-saskatoon",
      h1: "Beard Grooming & Beard Trims in Saskatoon",
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
        title: "Beard Grooming & Beard Trims Saskatoon",
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
      { name: "Partial Perms with Haircut and Style", duration: "2–2.5 hr", price: "$180" },
      { name: "Full Perm With Haircut and Style", duration: "2.5–3 hr", price: "$220" },
      { name: "Color Camouflage", duration: "30 min", price: "$50" },
      { name: "Blonde Highlights", duration: "2 hr", price: "$150" },
    ],
    page: {
      slug: "premium-treatments-saskatoon",
      h1: "Men\'s Hair Treatments & Specialty Services in Saskatoon",
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
        title: "Men\'s Hair Treatments & Styling Saskatoon",
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
  {
    title: "Hot Towel Shaves",
    description: "A traditional hot towel shave with careful preparation, razor technique and a comfortable finish.",
    items: [{ name: "Hot Towel Shaves", duration: "30–40 min", price: "From $45" }],
    page: {
      slug: "hot-towel-shave-saskatoon",
      h1: "Hot Towel Shaves in Saskatoon",
      cardTitle: "Hot Towel Shaves",
      cardDescription: "A traditional hot towel shave with careful preparation, razor technique and a comfortable finish.",
      intro: "A hot towel shave gives you time to settle in while your barber prepares the beard area, works carefully around the contours of your face and finishes with practical aftercare advice.",
      sectionTitle: "What to Know About This Service",
      sectionItems: [
        "<strong>The Traditional Hot Towel Shave Experience:</strong> Warm towels help prepare the beard area before shaving. Tell your barber about sensitivity, irritation or recent skin treatments before the service begins.",
        "<strong>What Happens During a Hot Towel Shave?:</strong> Your barber discusses your preferred finish, prepares the skin, shaves carefully and checks the result. Ask about the precise steps during your consultation.",
        "<strong>Straight Razor Technique and Professional Care:</strong> Professional razor work requires attention to growth direction, pressure and the contours of the jaw and neck.",
        "<strong>Hot Towel Shave vs. Regular Shaving:</strong> Unlike a quick shave at home, a booked hot towel shave allows time for preparation and a detailed finish.",
        "<strong>Preparing for Your Appointment:</strong> Arrive with clean skin where possible, and tell your barber about any cuts, irritation or products that cause discomfort.",
        "<strong>Aftercare and Skin Comfort:</strong> After shaving, avoid aggressive exfoliation and follow the product and skin-care guidance your barber provides.",
      ],
      whyChooseTitle: "A Service Built Around Your Preferences",
      whyChooseText: "Talk with your barber about your hair, grooming routine and the finish you want. We will discuss the options before getting started and offer guidance for looking after the result.",
      faqTitle: "Hot Towel Shaves FAQs",
      faqs: [{"question":"Is a hot towel shave different from a beard trim?","answer":"Yes. A shave removes facial hair from the selected area, while beard grooming focuses on keeping and shaping existing growth."},{"question":"Can I book a shave with a haircut?","answer":"Check Fresha for available combinations and appointment times."}],
      ctaText: "Book Your Experience",
      meta: {
        title: "Hot Towel Shaves in Saskatoon | House of Havana",
        description: "A traditional hot towel shave with careful preparation, razor technique and a comfortable finish. Visit House of Havana in Saskatoon and book online.",
        keywords: ["hot towel shaves saskatoon", "house of havana barbershop"],
      },
    },
  },
  {
    title: "Curly Haircuts",
    description: "Men's curly haircuts shaped around curl pattern, density, length and everyday styling.",
    items: [{ name: "Curly Haircuts", duration: "30 min–1 hr", price: "From $38" }],
    page: {
      slug: "curly-haircut-saskatoon",
      h1: "Curly Haircuts for Men in Saskatoon",
      cardTitle: "Curly Haircuts",
      cardDescription: "Men's curly haircuts shaped around curl pattern, density, length and everyday styling.",
      intro: "Curls have their own shape and movement. A good consultation considers how your hair sits naturally, how much length you want to keep and the time you spend styling it.",
      sectionTitle: "What to Know About This Service",
      sectionItems: [
        "<strong>Haircuts Designed for Curly Hair:</strong> The goal is a shape that works with your natural texture rather than fighting it.",
        "<strong>Understanding Curl Patterns and Hair Density:</strong> Curl pattern, density and shrinkage influence how the finished length looks when your hair dries.",
        "<strong>Curly Fades and Short Curly Styles:</strong> A fade can create a clean outline while leaving curl texture and movement on top.",
        "<strong>Medium-Length and Longer Curly Hairstyles:</strong> Longer styles need attention to weight, balance and how the curls fall around the face.",
        "<strong>How We Approach Curly Hair Consultations:</strong> Bring a reference photo and explain what you like and dislike about your current cut. Your barber can discuss a realistic plan.",
        "<strong>Styling and Maintaining Curly Hair:</strong> Ask your barber about gentle drying, conditioning and products suited to your hair.",
      ],
      whyChooseTitle: "A Service Built Around Your Preferences",
      whyChooseText: "Talk with your barber about your hair, grooming routine and the finish you want. We will discuss the options before getting started and offer guidance for looking after the result.",
      faqTitle: "Curly Haircuts FAQs",
      faqs: [{"question":"Should I arrive with my curls styled?","answer":"Come with your hair in a condition that helps your barber understand its natural shape, and mention your usual styling routine."},{"question":"Can I combine curly hair with a fade?","answer":"Yes, discuss the desired fade height and how much curly length you want to keep on top."}],
      ctaText: "Book Your Experience",
      meta: {
        title: "Curly Haircuts for Men in Saskatoon | House of Havana",
        description: "Men's curly haircuts shaped around curl pattern, density, length and everyday styling. Visit House of Havana in Saskatoon and book online.",
        keywords: ["curly haircuts saskatoon", "house of havana barbershop"],
      },
    },
  },
  {
    title: "Scissor Haircuts",
    description: "Precision scissor haircuts for longer men's styles, shape, texture and natural movement.",
    items: [{ name: "Scissor Haircuts", duration: "40 min–1 hr", price: "From $50" }],
    page: {
      slug: "scissor-haircut-saskatoon",
      h1: "Scissor Haircuts for Men in Saskatoon",
      cardTitle: "Scissor Haircuts",
      cardDescription: "Precision scissor haircuts for longer men's styles, shape, texture and natural movement.",
      intro: "Scissor cutting offers flexibility when you want to keep length, soften a silhouette or build a style with movement. Your barber can discuss how the cut will sit as it grows.",
      sectionTitle: "What to Know About This Service",
      sectionItems: [
        "<strong>Precision Scissor Cutting:</strong> Scissors help refine length and balance through the top and sides of a haircut.",
        "<strong>Scissor Cuts vs. Clipper Cuts:</strong> Clippers are useful for shorter uniform lengths and fades; scissors allow more control over longer sections and the way hair falls.",
        "<strong>Longer Men's Hairstyles:</strong> Longer cuts depend on the shape around the ears, neckline and crown as well as the overall length.",
        "<strong>Texture, Movement and Shape:</strong> Weight distribution and texture influence how hair moves, especially as it grows between visits.",
        "<strong>Choosing a Style That Suits Your Hair:</strong> Consider your hair density, growth pattern, face shape and how much styling time you prefer.",
        "<strong>Styling and Maintenance Advice:</strong> Ask your barber to demonstrate a simple daily styling routine and discuss when to return for a tidy-up.",
      ],
      whyChooseTitle: "A Service Built Around Your Preferences",
      whyChooseText: "Talk with your barber about your hair, grooming routine and the finish you want. We will discuss the options before getting started and offer guidance for looking after the result.",
      faqTitle: "Scissor Haircuts FAQs",
      faqs: [{"question":"Do I need a scissor cut for longer hair?","answer":"Scissor techniques are often useful for longer styles, but your barber may combine scissors and clippers depending on the result."},{"question":"Can I bring a photo of a longer hairstyle?","answer":"Yes. A reference photo helps explain your preferred length, shape and finish."}],
      ctaText: "Book Your Experience",
      meta: {
        title: "Scissor Haircuts for Men in Saskatoon | House of Havana",
        description: "Precision scissor haircuts for longer men's styles, shape, texture and natural movement. Visit House of Havana in Saskatoon and book online.",
        keywords: ["scissor haircuts saskatoon", "house of havana barbershop"],
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
