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
  parentSlug?: string;
  page?: ServicePageData;
};

const legacyServicesList: ServiceCategory[] = [
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
    "Explore men's haircuts, fades, beard grooming, hot shaves, partial and full perms, color camouflage and nose wax at House of Havana in Saskatoon. Choose a service or explore the styles within each category.",
  faqs: [
    {
      question: "What services does House Of Havana offer in Saskatoon?",
      answer:
        "Our eight main services are men's haircuts, fade haircuts, beard grooming, hot shaves, partial perms, full perms, color camouflage and nose wax. Explore individual haircut, fade and beard styles within the first three categories.",
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
      "Explore haircuts, fades, beard grooming, hot shaves, perms, color camouflage and nose wax in Saskatoon. Compare services and book House of Havana.",
    keywords: [
      "barbershop services saskatoon",
      "mens haircuts saskatoon",
      "fade haircuts",
      "beard grooming",
    ],
  },
};


const newServicePages: ServiceCategory[] = [
  {
    "title": "Partial Perms",
    "description": "Add texture to selected sections with a partial perm, including a haircut and style at House of Havana in Saskatoon.",
    "items": [
      {
        "name": "Partial Perms with Haircut and Style",
        "duration": "2–2.5 hr",
        "price": "$180"
      }
    ],
    "page": {
      "slug": "partial-perm-saskatoon",
      "h1": "Partial Perms in Saskatoon",
      "cardTitle": "Partial Perms",
      "cardDescription": "Add texture to selected sections with a partial perm, including a haircut and style at House of Havana in Saskatoon.",
      "intro": "Add texture to selected sections with a partial perm, including a haircut and style at House of Havana in Saskatoon.",
      "sectionTitle": "Planning Your Partial Perms",
      "sectionItems": [
        "A partial perm focuses on selected areas rather than treating the whole head. Discuss the sections you want to change and the areas you want to keep natural.",
        "Bring photos showing the size and direction of the curls you like. Explain whether your goal is extra lift, loose movement or a more defined curl.",
        "Tell your barber about previous colour, lightening and chemical treatments. Suitability and the result depend on your existing hair condition and length.",
        "The listed appointment includes a haircut and styling. Discuss the finished length before treatment so the final shape fits the texture you want.",
        "Ask for the product-specific washing and styling instructions before leaving. Follow those directions rather than assuming every perm has the same aftercare."
      ],
      "whyChooseTitle": "Your Visit to House of Havana",
      "whyChooseText": "Find us at 3501 8 St E, Bay 110, Saskatoon. Bring a reference photo and discuss your preferred finish with your barber before the service begins. Choose your barber and confirm your appointment on Fresha.",
      "faqTitle": "Partial Perms Questions",
      "faqs": [
        {
          "question": "What is the difference between a partial and full perm?",
          "answer": "A partial perm treats selected sections. A full perm addresses the broader hairstyle. Your barber can discuss which coverage fits your goal."
        },
        {
          "question": "Does this appointment include a haircut?",
          "answer": "Yes. The listed service includes a haircut and style. Confirm the appointment length and suitability on Fresha."
        }
      ],
      "ctaText": "Book Your Experience",
      "meta": {
        "title": "Partial Perms in Saskatoon | House of Havana",
        "description": "Add texture to selected sections with a partial perm, including a haircut and style at House of Havana in Saskatoon.",
        "keywords": [
          "partial perms saskatoon"
        ]
      }
    }
  },
  {
    "title": "Full Perms",
    "description": "Explore a full perm with a haircut and style at House of Havana in Saskatoon. Discuss the overall curl pattern and shape before your appointment.",
    "items": [
      {
        "name": "Full Perm With Haircut and Style",
        "duration": "2.5–3 hr",
        "price": "$220"
      }
    ],
    "page": {
      "slug": "full-perm-saskatoon",
      "h1": "Full Perms in Saskatoon",
      "cardTitle": "Full Perms",
      "cardDescription": "Explore a full perm with a haircut and style at House of Havana in Saskatoon. Discuss the overall curl pattern and shape before your appointment.",
      "intro": "Explore a full perm with a haircut and style at House of Havana in Saskatoon. Discuss the overall curl pattern and shape before your appointment.",
      "sectionTitle": "Planning Your Full Perms",
      "sectionItems": [
        "A full perm treats the broader hairstyle rather than a few selected sections. Discuss how you want the sides, crown and top to work together.",
        "Bring photos showing the size and direction of the curls you like. Explain whether your goal is extra lift, loose movement or a more defined curl.",
        "Tell your barber about previous colour, lightening and chemical treatments. Suitability and the result depend on your existing hair condition and length.",
        "The listed appointment includes a haircut and styling. Discuss the finished length before treatment so the final shape fits the texture you want.",
        "Ask for the product-specific washing and styling instructions before leaving. Follow those directions rather than assuming every perm has the same aftercare."
      ],
      "whyChooseTitle": "Your Visit to House of Havana",
      "whyChooseText": "Find us at 3501 8 St E, Bay 110, Saskatoon. Bring a reference photo and discuss your preferred finish with your barber before the service begins. Choose your barber and confirm your appointment on Fresha.",
      "faqTitle": "Full Perms Questions",
      "faqs": [
        {
          "question": "What is the difference between a partial and full perm?",
          "answer": "A partial perm treats selected sections. A full perm addresses the broader hairstyle. Your barber can discuss which coverage fits your goal."
        },
        {
          "question": "Does this appointment include a haircut?",
          "answer": "Yes. The listed service includes a haircut and style. Confirm the appointment length and suitability on Fresha."
        }
      ],
      "ctaText": "Book Your Experience",
      "meta": {
        "title": "Full Perms in Saskatoon | House of Havana",
        "description": "Explore a full perm with a haircut and style at House of Havana in Saskatoon. Discuss the overall curl pattern and shape before your appointment.",
        "keywords": [
          "full perms saskatoon"
        ]
      }
    }
  },
  {
    "title": "Color Camouflage",
    "description": "Explore grey blending with color camouflage at House of Havana in Saskatoon. Discuss the amount of grey you want to soften and the finish you prefer.",
    "items": [
      {
        "name": "Color Camouflage",
        "duration": "30 min",
        "price": "$50"
      }
    ],
    "page": {
      "slug": "color-camouflage-saskatoon",
      "h1": "Color Camouflage in Saskatoon",
      "cardTitle": "Color Camouflage",
      "cardDescription": "Explore grey blending with color camouflage at House of Havana in Saskatoon. Discuss the amount of grey you want to soften and the finish you prefer.",
      "intro": "Explore grey blending with color camouflage at House of Havana in Saskatoon. Discuss the amount of grey you want to soften and the finish you prefer.",
      "sectionTitle": "Planning Your Color Camouflage",
      "sectionItems": [
        "Start by deciding how much grey you want to keep visible. Camouflage aims for a blended appearance rather than assuming everyone wants complete coverage.",
        "Bring a photo taken in natural light if you have a particular result in mind. Lighting can change how both grey hair and a colour result appear.",
        "Tell your barber about previous colour and any reactions you have had to products. Ask which preparation and suitability checks apply before booking.",
        "Discuss the hairline, temples and crown separately if those areas have different amounts of grey. Your preferred balance may differ across the head.",
        "Ask how the selected product is expected to fade and what maintenance would involve. Confirm whether you also need to book a haircut."
      ],
      "whyChooseTitle": "Your Visit to House of Havana",
      "whyChooseText": "Find us at 3501 8 St E, Bay 110, Saskatoon. Bring a reference photo and discuss your preferred finish with your barber before the service begins. Choose your barber and confirm your appointment on Fresha.",
      "faqTitle": "Color Camouflage Questions",
      "faqs": [
        {
          "question": "Is color camouflage the same as highlights?",
          "answer": "No. Camouflage focuses on blending grey, while highlights create lighter sections. Discuss the result you want before selecting a treatment."
        },
        {
          "question": "Is a haircut included?",
          "answer": "The listed color camouflage appointment is a separate service. Check Fresha for haircut combinations and available times."
        }
      ],
      "ctaText": "Book Your Experience",
      "meta": {
        "title": "Color Camouflage in Saskatoon | House of Havana",
        "description": "Explore grey blending with color camouflage at House of Havana in Saskatoon. Discuss the amount of grey you want to soften and the finish you prefer.",
        "keywords": [
          "color camouflage saskatoon"
        ]
      }
    }
  },
  {
    "title": "Nose Wax",
    "description": "Book nose waxing at House of Havana in Saskatoon. Confirm availability, pricing and whether to add it to your grooming appointment on Fresha.",
    "items": [],
    "page": {
      "slug": "nose-wax-saskatoon",
      "h1": "Nose Wax in Saskatoon",
      "cardTitle": "Nose Wax",
      "cardDescription": "Book nose waxing at House of Havana in Saskatoon. Confirm availability, pricing and whether to add it to your grooming appointment on Fresha.",
      "intro": "Book nose waxing at House of Havana in Saskatoon. Confirm availability, pricing and whether to add it to your grooming appointment on Fresha.",
      "sectionTitle": "Planning Your Nose Wax",
      "sectionItems": [
        "Explain the visible hair you would like tidied and ask your barber about the area covered by the service before it begins.",
        "Mention any discomfort, irritation or previous reactions before the appointment. Your barber can discuss whether the service is appropriate on the day.",
        "If you are booking a haircut or beard service as well, ask whether nose waxing can be added and whether extra appointment time is needed.",
        "Check the final price and timing in Fresha or call 306-952-2255. A price or fixed duration has not been published for this service here.",
        "Ask for aftercare guidance and raise any concerns during the consultation. Avoid attempting to reproduce a professional waxing service yourself."
      ],
      "whyChooseTitle": "Your Visit to House of Havana",
      "whyChooseText": "Find us at 3501 8 St E, Bay 110, Saskatoon. Bring a reference photo and discuss your preferred finish with your barber before the service begins. Choose your barber and confirm your appointment on Fresha.",
      "faqTitle": "Nose Wax Questions",
      "faqs": [
        {
          "question": "Can I add nose waxing to my haircut?",
          "answer": "Ask your barber or check Fresha for available appointment combinations. Confirm extra time and the price before the service."
        },
        {
          "question": "How much does nose waxing cost?",
          "answer": "Please confirm the current price on Fresha or call 306-952-2255. We have not published a price for this service on this page."
        }
      ],
      "ctaText": "Book Your Experience",
      "meta": {
        "title": "Nose Wax in Saskatoon | House of Havana",
        "description": "Book nose waxing at House of Havana in Saskatoon. Confirm availability, pricing and whether to add it to your grooming appointment on Fresha.",
        "keywords": [
          "nose wax saskatoon"
        ]
      }
    }
  },
  {
    "title": "Scissor Haircuts",
    "description": "Scissor cutting shapes longer sections with control over weight, length and movement. It can be used throughout a haircut or alongside clipper work. Explore the look with your barber at House of Havana in Saskatoon.",
    "items": [
      {
        "name": "Haircut + Wash and Style",
        "duration": "30 min–1 hr",
        "price": "$38–$50"
      }
    ],
    "page": {
      "slug": "mens-haircut-saskatoon/scissor-haircut-saskatoon",
      "h1": "Scissor Haircuts in Saskatoon",
      "cardTitle": "Scissor Haircuts",
      "cardDescription": "Scissor cutting shapes longer sections with control over weight, length and movement. It can be used throughout a haircut or alongside clipper work. Explore the look with your barber at House of Havana in Saskatoon.",
      "intro": "Scissor cutting shapes longer sections with control over weight, length and movement. It can be used throughout a haircut or alongside clipper work. Explore the look with your barber at House of Havana in Saskatoon.",
      "sectionTitle": "Planning Your Scissor Haircuts",
      "sectionItems": [
        "Scissor cutting shapes longer sections with control over weight, length and movement. It can be used throughout a haircut or alongside clipper work.",
        "Discuss how much length to keep around the ears, crown and neckline. Ask how the finished shape will sit naturally, rather than judging it only when styled.",
        "Ask your barber to show you how to dry the hair into its shape. Styling choices depend on the length, density and movement you want.",
        "Every haircut includes a consultation, hair wash, cut and styling. Prices are $38–$50 before tax and appointments run 30–60 minutes, depending on the barber.",
        "For a haircut and beard trim together, prices are $50–$80 before tax and appointments run 45–90 minutes. Choose the combined booking if you want both services."
      ],
      "whyChooseTitle": "Your Visit to House of Havana",
      "whyChooseText": "Find us at 3501 8 St E, Bay 110, Saskatoon. Bring a reference photo and discuss your preferred finish with your barber before the service begins. Choose your barber and confirm your appointment on Fresha.",
      "faqTitle": "Scissor Haircuts Questions",
      "faqs": [
        {
          "question": "Is a scissor haircut always done without clippers?",
          "answer": "Not necessarily. Discuss whether you want an all-scissor finish or a combination of techniques before the cut begins."
        },
        {
          "question": "How should I book this style?",
          "answer": "Choose a men’s haircut in Fresha, select your barber and bring a reference photo. The style name does not create a separate price tier."
        }
      ],
      "ctaText": "Book Your Experience",
      "meta": {
        "title": "Scissor Haircuts in Saskatoon | House of Havana",
        "description": "Scissor cutting shapes longer sections with control over weight, length and movement. It can be used throughout a haircut or alongside clipper work..",
        "keywords": [
          "scissor haircuts saskatoon"
        ]
      }
    },
    "parentSlug": "mens-haircut-saskatoon"
  },
  {
    "title": "Warrior Haircuts",
    "description": "Warrior haircut is a reference-led request rather than one fixed shape. Bring the exact image you mean so your barber can discuss its length, texture and outline. Explore the look with your barber at House of Havana in Saskatoon.",
    "items": [
      {
        "name": "Haircut + Wash and Style",
        "duration": "30 min–1 hr",
        "price": "$38–$50"
      }
    ],
    "page": {
      "slug": "mens-haircut-saskatoon/warrior-haircut",
      "h1": "Warrior Haircuts in Saskatoon",
      "cardTitle": "Warrior Haircuts",
      "cardDescription": "Warrior haircut is a reference-led request rather than one fixed shape. Bring the exact image you mean so your barber can discuss its length, texture and outline. Explore the look with your barber at House of Havana in Saskatoon.",
      "intro": "Warrior haircut is a reference-led request rather than one fixed shape. Bring the exact image you mean so your barber can discuss its length, texture and outline. Explore the look with your barber at House of Havana in Saskatoon.",
      "sectionTitle": "Planning Your Warrior Haircuts",
      "sectionItems": [
        "Warrior haircut is a reference-led request rather than one fixed shape. Bring the exact image you mean so your barber can discuss its length, texture and outline.",
        "Compare the front, side and back of your reference. Explain which features matter most, such as a longer top, a close outline or a more rugged texture, without assuming the name alone defines the cut.",
        "Discuss the styling effort required for the particular reference you choose. Ask what can be recreated with your current length and growth pattern.",
        "Every haircut includes a consultation, hair wash, cut and styling. Prices are $38–$50 before tax and appointments run 30–60 minutes, depending on the barber.",
        "For a haircut and beard trim together, prices are $50–$80 before tax and appointments run 45–90 minutes. Choose the combined booking if you want both services."
      ],
      "whyChooseTitle": "Your Visit to House of Havana",
      "whyChooseText": "Find us at 3501 8 St E, Bay 110, Saskatoon. Bring a reference photo and discuss your preferred finish with your barber before the service begins. Choose your barber and confirm your appointment on Fresha.",
      "faqTitle": "Warrior Haircuts Questions",
      "faqs": [
        {
          "question": "What should I ask for when booking a warrior haircut?",
          "answer": "Book a men's haircut and bring a clear reference photo. Describe the top length, sides and finish you mean; the name can refer to different looks."
        },
        {
          "question": "How should I book this style?",
          "answer": "Choose a men’s haircut in Fresha, select your barber and bring a reference photo. The style name does not create a separate price tier."
        }
      ],
      "ctaText": "Book Your Experience",
      "meta": {
        "title": "Warrior Haircuts in Saskatoon | House of Havana",
        "description": "Warrior haircut is a reference-led request rather than one fixed shape. Bring the exact image you mean so your barber can discuss its length, texture.",
        "keywords": [
          "warrior haircuts saskatoon"
        ]
      }
    },
    "parentSlug": "mens-haircut-saskatoon"
  },
  {
    "title": "Classic Haircuts",
    "description": "A classic haircut puts the focus on balanced proportions and a shape you can wear across work and everyday life. The exact length and outline remain your choice. Explore the look with your barber at House of Havana in Saskatoon.",
    "items": [
      {
        "name": "Haircut + Wash and Style",
        "duration": "30 min–1 hr",
        "price": "$38–$50"
      }
    ],
    "page": {
      "slug": "mens-haircut-saskatoon/classic-haircut",
      "h1": "Classic Haircuts in Saskatoon",
      "cardTitle": "Classic Haircuts",
      "cardDescription": "A classic haircut puts the focus on balanced proportions and a shape you can wear across work and everyday life. The exact length and outline remain your choice. Explore the look with your barber at House of Havana in Saskatoon.",
      "intro": "A classic haircut puts the focus on balanced proportions and a shape you can wear across work and everyday life. The exact length and outline remain your choice. Explore the look with your barber at House of Havana in Saskatoon.",
      "sectionTitle": "Planning Your Classic Haircuts",
      "sectionItems": [
        "A classic haircut puts the focus on balanced proportions and a shape you can wear across work and everyday life. The exact length and outline remain your choice.",
        "Tell your barber whether you prefer a natural neckline, a tapered outline or more length at the sides. Explain how you normally part your hair and whether you style it daily.",
        "Ask for a routine that fits the finish you prefer: neat and controlled, softer and natural, or something between the two.",
        "Every haircut includes a consultation, hair wash, cut and styling. Prices are $38–$50 before tax and appointments run 30–60 minutes, depending on the barber.",
        "For a haircut and beard trim together, prices are $50–$80 before tax and appointments run 45–90 minutes. Choose the combined booking if you want both services."
      ],
      "whyChooseTitle": "Your Visit to House of Havana",
      "whyChooseText": "Find us at 3501 8 St E, Bay 110, Saskatoon. Bring a reference photo and discuss your preferred finish with your barber before the service begins. Choose your barber and confirm your appointment on Fresha.",
      "faqTitle": "Classic Haircuts Questions",
      "faqs": [
        {
          "question": "Does a classic haircut have to be very short?",
          "answer": "No. Classic describes an approach to shape rather than one fixed length. Discuss your preferred length and outline with your barber."
        },
        {
          "question": "How should I book this style?",
          "answer": "Choose a men’s haircut in Fresha, select your barber and bring a reference photo. The style name does not create a separate price tier."
        }
      ],
      "ctaText": "Book Your Experience",
      "meta": {
        "title": "Classic Haircuts in Saskatoon | House of Havana",
        "description": "A classic haircut puts the focus on balanced proportions and a shape you can wear across work and everyday life. The exact length and outline remain.",
        "keywords": [
          "classic haircuts saskatoon"
        ]
      }
    },
    "parentSlug": "mens-haircut-saskatoon"
  },
  {
    "title": "Pompadour Haircuts",
    "description": "A pompadour uses lift at the front with the hair directed up and back. Its shape depends on the height, front length and balance with the sides. Explore the look with your barber at House of Havana in Saskatoon.",
    "items": [
      {
        "name": "Haircut + Wash and Style",
        "duration": "30 min–1 hr",
        "price": "$38–$50"
      }
    ],
    "page": {
      "slug": "mens-haircut-saskatoon/pompadour",
      "h1": "Pompadour Haircuts in Saskatoon",
      "cardTitle": "Pompadour Haircuts",
      "cardDescription": "A pompadour uses lift at the front with the hair directed up and back. Its shape depends on the height, front length and balance with the sides. Explore the look with your barber at House of Havana in Saskatoon.",
      "intro": "A pompadour uses lift at the front with the hair directed up and back. Its shape depends on the height, front length and balance with the sides. Explore the look with your barber at House of Havana in Saskatoon.",
      "sectionTitle": "Planning Your Pompadour Haircuts",
      "sectionItems": [
        "A pompadour uses lift at the front with the hair directed up and back. Its shape depends on the height, front length and balance with the sides.",
        "Discuss how much height you want and whether you prefer a softer silhouette or stronger contrast. Your front growth pattern and density affect the shape you can maintain.",
        "Ask your barber to demonstrate drying for lift at the roots. A pompadour generally needs more deliberate styling than a close, low-maintenance cut.",
        "Every haircut includes a consultation, hair wash, cut and styling. Prices are $38–$50 before tax and appointments run 30–60 minutes, depending on the barber.",
        "For a haircut and beard trim together, prices are $50–$80 before tax and appointments run 45–90 minutes. Choose the combined booking if you want both services."
      ],
      "whyChooseTitle": "Your Visit to House of Havana",
      "whyChooseText": "Find us at 3501 8 St E, Bay 110, Saskatoon. Bring a reference photo and discuss your preferred finish with your barber before the service begins. Choose your barber and confirm your appointment on Fresha.",
      "faqTitle": "Pompadour Haircuts Questions",
      "faqs": [
        {
          "question": "Can I combine a pompadour with a fade?",
          "answer": "Yes. Discuss the fade height separately from the volume on top so both parts fit your preferred profile."
        },
        {
          "question": "How should I book this style?",
          "answer": "Choose a men’s haircut in Fresha, select your barber and bring a reference photo. The style name does not create a separate price tier."
        }
      ],
      "ctaText": "Book Your Experience",
      "meta": {
        "title": "Pompadour Haircuts in Saskatoon | House of Havana",
        "description": "A pompadour uses lift at the front with the hair directed up and back. Its shape depends on the height, front length and balance with the sides..",
        "keywords": [
          "pompadour haircuts saskatoon"
        ]
      }
    },
    "parentSlug": "mens-haircut-saskatoon"
  },
  {
    "title": "Slick Back Haircuts",
    "description": "A slick back directs the hair away from the forehead. It can have a close, polished finish or a softer shape with natural movement. Explore the look with your barber at House of Havana in Saskatoon.",
    "items": [
      {
        "name": "Haircut + Wash and Style",
        "duration": "30 min–1 hr",
        "price": "$38–$50"
      }
    ],
    "page": {
      "slug": "mens-haircut-saskatoon/slick-back",
      "h1": "Slick Back Haircuts in Saskatoon",
      "cardTitle": "Slick Back Haircuts",
      "cardDescription": "A slick back directs the hair away from the forehead. It can have a close, polished finish or a softer shape with natural movement. Explore the look with your barber at House of Havana in Saskatoon.",
      "intro": "A slick back directs the hair away from the forehead. It can have a close, polished finish or a softer shape with natural movement. Explore the look with your barber at House of Havana in Saskatoon.",
      "sectionTitle": "Planning Your Slick Back Haircuts",
      "sectionItems": [
        "A slick back directs the hair away from the forehead. It can have a close, polished finish or a softer shape with natural movement.",
        "Tell your barber whether you want the sides connected to the top or a stronger separation. Discuss any cowlicks and the length needed to move the hair backwards.",
        "Choose a finish before choosing a product: wet-looking and controlled or lighter and more natural. Ask for advice suited to your hair rather than using extra product to force the direction.",
        "Every haircut includes a consultation, hair wash, cut and styling. Prices are $38–$50 before tax and appointments run 30–60 minutes, depending on the barber.",
        "For a haircut and beard trim together, prices are $50–$80 before tax and appointments run 45–90 minutes. Choose the combined booking if you want both services."
      ],
      "whyChooseTitle": "Your Visit to House of Havana",
      "whyChooseText": "Find us at 3501 8 St E, Bay 110, Saskatoon. Bring a reference photo and discuss your preferred finish with your barber before the service begins. Choose your barber and confirm your appointment on Fresha.",
      "faqTitle": "Slick Back Haircuts Questions",
      "faqs": [
        {
          "question": "Do I need long hair for a slick back?",
          "answer": "You need enough length for the hair to move back, but the amount depends on texture and growth direction. Bring a reference and discuss your current length."
        },
        {
          "question": "How should I book this style?",
          "answer": "Choose a men’s haircut in Fresha, select your barber and bring a reference photo. The style name does not create a separate price tier."
        }
      ],
      "ctaText": "Book Your Experience",
      "meta": {
        "title": "Slick Back Haircuts in Saskatoon | House of Havana",
        "description": "A slick back directs the hair away from the forehead. It can have a close, polished finish or a softer shape with natural movement. Explore the look.",
        "keywords": [
          "slick back haircuts saskatoon"
        ]
      }
    },
    "parentSlug": "mens-haircut-saskatoon"
  },
  {
    "title": "Comb Over Haircuts",
    "description": "A comb over directs the top across from one side to the other. The parting, side length and amount of lift determine how formal or relaxed it looks. Explore the look with your barber at House of Havana in Saskatoon.",
    "items": [
      {
        "name": "Haircut + Wash and Style",
        "duration": "30 min–1 hr",
        "price": "$38–$50"
      }
    ],
    "page": {
      "slug": "mens-haircut-saskatoon/comb-over",
      "h1": "Comb Over Haircuts in Saskatoon",
      "cardTitle": "Comb Over Haircuts",
      "cardDescription": "A comb over directs the top across from one side to the other. The parting, side length and amount of lift determine how formal or relaxed it looks. Explore the look with your barber at House of Havana in Saskatoon.",
      "intro": "A comb over directs the top across from one side to the other. The parting, side length and amount of lift determine how formal or relaxed it looks. Explore the look with your barber at House of Havana in Saskatoon.",
      "sectionTitle": "Planning Your Comb Over Haircuts",
      "sectionItems": [
        "A comb over directs the top across from one side to the other. The parting, side length and amount of lift determine how formal or relaxed it looks.",
        "Discuss whether you want a visible part or a loose direction through the top. Show how your hair falls naturally and explain whether you prefer volume or a flatter finish.",
        "Ask your barber how to establish the direction while drying. Decide whether you want a defined combed finish or a softer texture you can adjust by hand.",
        "Every haircut includes a consultation, hair wash, cut and styling. Prices are $38–$50 before tax and appointments run 30–60 minutes, depending on the barber.",
        "For a haircut and beard trim together, prices are $50–$80 before tax and appointments run 45–90 minutes. Choose the combined booking if you want both services."
      ],
      "whyChooseTitle": "Your Visit to House of Havana",
      "whyChooseText": "Find us at 3501 8 St E, Bay 110, Saskatoon. Bring a reference photo and discuss your preferred finish with your barber before the service begins. Choose your barber and confirm your appointment on Fresha.",
      "faqTitle": "Comb Over Haircuts Questions",
      "faqs": [
        {
          "question": "How does a comb over differ from a side part?",
          "answer": "The looks overlap. Comb over describes the direction across the top, while side part emphasizes the division. A photo helps define the exact version you want."
        },
        {
          "question": "How should I book this style?",
          "answer": "Choose a men’s haircut in Fresha, select your barber and bring a reference photo. The style name does not create a separate price tier."
        }
      ],
      "ctaText": "Book Your Experience",
      "meta": {
        "title": "Comb Over Haircuts in Saskatoon | House of Havana",
        "description": "A comb over directs the top across from one side to the other. The parting, side length and amount of lift determine how formal or relaxed it looks..",
        "keywords": [
          "comb over haircuts saskatoon"
        ]
      }
    },
    "parentSlug": "mens-haircut-saskatoon"
  },
  {
    "title": "Side Part Haircuts",
    "description": "A side part gives a haircut direction through a defined or natural separation. It can be worn with a tidy taper, longer sides or a fade. Explore the look with your barber at House of Havana in Saskatoon.",
    "items": [
      {
        "name": "Haircut + Wash and Style",
        "duration": "30 min–1 hr",
        "price": "$38–$50"
      }
    ],
    "page": {
      "slug": "mens-haircut-saskatoon/side-part",
      "h1": "Side Part Haircuts in Saskatoon",
      "cardTitle": "Side Part Haircuts",
      "cardDescription": "A side part gives a haircut direction through a defined or natural separation. It can be worn with a tidy taper, longer sides or a fade. Explore the look with your barber at House of Havana in Saskatoon.",
      "intro": "A side part gives a haircut direction through a defined or natural separation. It can be worn with a tidy taper, longer sides or a fade. Explore the look with your barber at House of Havana in Saskatoon.",
      "sectionTitle": "Planning Your Side Part Haircuts",
      "sectionItems": [
        "A side part gives a haircut direction through a defined or natural separation. It can be worn with a tidy taper, longer sides or a fade.",
        "Ask your barber to work with your natural part where practical. Discuss whether the line should remain soft or appear sharply defined; a shaved part is a separate detail to agree on.",
        "Use your barber's drying demonstration to find the part consistently. A softer part may be easier to restyle, while a stronger line creates a more structured finish.",
        "Every haircut includes a consultation, hair wash, cut and styling. Prices are $38–$50 before tax and appointments run 30–60 minutes, depending on the barber.",
        "For a haircut and beard trim together, prices are $50–$80 before tax and appointments run 45–90 minutes. Choose the combined booking if you want both services."
      ],
      "whyChooseTitle": "Your Visit to House of Havana",
      "whyChooseText": "Find us at 3501 8 St E, Bay 110, Saskatoon. Bring a reference photo and discuss your preferred finish with your barber before the service begins. Choose your barber and confirm your appointment on Fresha.",
      "faqTitle": "Side Part Haircuts Questions",
      "faqs": [
        {
          "question": "Does a side part need a shaved line?",
          "answer": "No. A part can follow the natural direction of the hair. Only request a shaved line if that is the detail you want."
        },
        {
          "question": "How should I book this style?",
          "answer": "Choose a men’s haircut in Fresha, select your barber and bring a reference photo. The style name does not create a separate price tier."
        }
      ],
      "ctaText": "Book Your Experience",
      "meta": {
        "title": "Side Part Haircuts in Saskatoon | House of Havana",
        "description": "A side part gives a haircut direction through a defined or natural separation. It can be worn with a tidy taper, longer sides or a fade. Explore the.",
        "keywords": [
          "side part haircuts saskatoon"
        ]
      }
    },
    "parentSlug": "mens-haircut-saskatoon"
  },
  {
    "title": "Buzz Cuts",
    "description": "A buzz cut keeps hair close with clippers. You can choose a uniform length or discuss a shorter outline with more contrast around the sides. Explore the look with your barber at House of Havana in Saskatoon.",
    "items": [
      {
        "name": "Haircut + Wash and Style",
        "duration": "30 min–1 hr",
        "price": "$38–$50"
      }
    ],
    "page": {
      "slug": "mens-haircut-saskatoon/buzz-cut",
      "h1": "Buzz Cuts in Saskatoon",
      "cardTitle": "Buzz Cuts",
      "cardDescription": "A buzz cut keeps hair close with clippers. You can choose a uniform length or discuss a shorter outline with more contrast around the sides. Explore the look with your barber at House of Havana in Saskatoon.",
      "intro": "A buzz cut keeps hair close with clippers. You can choose a uniform length or discuss a shorter outline with more contrast around the sides. Explore the look with your barber at House of Havana in Saskatoon.",
      "sectionTitle": "Planning Your Buzz Cuts",
      "sectionItems": [
        "A buzz cut keeps hair close with clippers. You can choose a uniform length or discuss a shorter outline with more contrast around the sides.",
        "Agree on the guard length before cutting. Ask how different lengths will show your hairline and growth pattern, and discuss whether you want the neckline natural or defined.",
        "Short hair still benefits from attention to the scalp and a maintenance plan. Ask when to return based on how close you want to keep the finish.",
        "Every haircut includes a consultation, hair wash, cut and styling. Prices are $38–$50 before tax and appointments run 30–60 minutes, depending on the barber.",
        "For a haircut and beard trim together, prices are $50–$80 before tax and appointments run 45–90 minutes. Choose the combined booking if you want both services."
      ],
      "whyChooseTitle": "Your Visit to House of Havana",
      "whyChooseText": "Find us at 3501 8 St E, Bay 110, Saskatoon. Bring a reference photo and discuss your preferred finish with your barber before the service begins. Choose your barber and confirm your appointment on Fresha.",
      "faqTitle": "Buzz Cuts Questions",
      "faqs": [
        {
          "question": "Is a buzz cut a separate discounted service?",
          "answer": "At House of Havana, buzz cuts are booked as men's haircuts. Haircut prices range from $38 to $50 before tax, depending on the barber."
        },
        {
          "question": "How should I book this style?",
          "answer": "Choose a men’s haircut in Fresha, select your barber and bring a reference photo. The style name does not create a separate price tier."
        }
      ],
      "ctaText": "Book Your Experience",
      "meta": {
        "title": "Buzz Cuts in Saskatoon | House of Havana",
        "description": "A buzz cut keeps hair close with clippers. You can choose a uniform length or discuss a shorter outline with more contrast around the sides. Explore.",
        "keywords": [
          "buzz cuts saskatoon"
        ]
      }
    },
    "parentSlug": "mens-haircut-saskatoon"
  },
  {
    "title": "Textured Crop Haircuts",
    "description": "A textured crop uses a shorter shape with visible separation through the top. Fringe length and direction can change how it frames the forehead. Explore the look with your barber at House of Havana in Saskatoon.",
    "items": [
      {
        "name": "Haircut + Wash and Style",
        "duration": "30 min–1 hr",
        "price": "$38–$50"
      }
    ],
    "page": {
      "slug": "mens-haircut-saskatoon/textured-crop",
      "h1": "Textured Crop Haircuts in Saskatoon",
      "cardTitle": "Textured Crop Haircuts",
      "cardDescription": "A textured crop uses a shorter shape with visible separation through the top. Fringe length and direction can change how it frames the forehead. Explore the look with your barber at House of Havana in Saskatoon.",
      "intro": "A textured crop uses a shorter shape with visible separation through the top. Fringe length and direction can change how it frames the forehead. Explore the look with your barber at House of Havana in Saskatoon.",
      "sectionTitle": "Planning Your Textured Crop Haircuts",
      "sectionItems": [
        "A textured crop uses a shorter shape with visible separation through the top. Fringe length and direction can change how it frames the forehead.",
        "Discuss whether you want the fringe broken up, swept slightly or kept more even. Ask how much texture works with your density without removing more weight than you want.",
        "Ask your barber to demonstrate a small amount of product worked through the hair. The aim is separation that suits your texture rather than a heavy, rigid finish.",
        "Every haircut includes a consultation, hair wash, cut and styling. Prices are $38–$50 before tax and appointments run 30–60 minutes, depending on the barber.",
        "For a haircut and beard trim together, prices are $50–$80 before tax and appointments run 45–90 minutes. Choose the combined booking if you want both services."
      ],
      "whyChooseTitle": "Your Visit to House of Havana",
      "whyChooseText": "Find us at 3501 8 St E, Bay 110, Saskatoon. Bring a reference photo and discuss your preferred finish with your barber before the service begins. Choose your barber and confirm your appointment on Fresha.",
      "faqTitle": "Textured Crop Haircuts Questions",
      "faqs": [
        {
          "question": "Can a textured crop work with a fade?",
          "answer": "Yes. Choose the fade height and the crop's fringe separately during the consultation so the outline and top work together."
        },
        {
          "question": "How should I book this style?",
          "answer": "Choose a men’s haircut in Fresha, select your barber and bring a reference photo. The style name does not create a separate price tier."
        }
      ],
      "ctaText": "Book Your Experience",
      "meta": {
        "title": "Textured Crop Haircuts in Saskatoon | House of Havana",
        "description": "A textured crop uses a shorter shape with visible separation through the top. Fringe length and direction can change how it frames the forehead..",
        "keywords": [
          "textured crop haircuts saskatoon"
        ]
      }
    },
    "parentSlug": "mens-haircut-saskatoon"
  },
  {
    "title": "French Crop Haircuts",
    "description": "A French crop brings the focus forward to the fringe with a shorter top and tidy sides. It can have a defined fringe or a softer, textured edge. Explore the look with your barber at House of Havana in Saskatoon.",
    "items": [
      {
        "name": "Haircut + Wash and Style",
        "duration": "30 min–1 hr",
        "price": "$38–$50"
      }
    ],
    "page": {
      "slug": "mens-haircut-saskatoon/french-crop",
      "h1": "French Crop Haircuts in Saskatoon",
      "cardTitle": "French Crop Haircuts",
      "cardDescription": "A French crop brings the focus forward to the fringe with a shorter top and tidy sides. It can have a defined fringe or a softer, textured edge. Explore the look with your barber at House of Havana in Saskatoon.",
      "intro": "A French crop brings the focus forward to the fringe with a shorter top and tidy sides. It can have a defined fringe or a softer, textured edge. Explore the look with your barber at House of Havana in Saskatoon.",
      "sectionTitle": "Planning Your French Crop Haircuts",
      "sectionItems": [
        "A French crop brings the focus forward to the fringe with a shorter top and tidy sides. It can have a defined fringe or a softer, textured edge.",
        "Bring a reference for the fringe in particular. Discuss how straight, short or broken up you want it and how the front growth pattern affects that finish.",
        "Ask how to direct the hair forward without flattening the texture. Decide whether you want a crisp outline or a softer result that changes as it grows.",
        "Every haircut includes a consultation, hair wash, cut and styling. Prices are $38–$50 before tax and appointments run 30–60 minutes, depending on the barber.",
        "For a haircut and beard trim together, prices are $50–$80 before tax and appointments run 45–90 minutes. Choose the combined booking if you want both services."
      ],
      "whyChooseTitle": "Your Visit to House of Havana",
      "whyChooseText": "Find us at 3501 8 St E, Bay 110, Saskatoon. Bring a reference photo and discuss your preferred finish with your barber before the service begins. Choose your barber and confirm your appointment on Fresha.",
      "faqTitle": "French Crop Haircuts Questions",
      "faqs": [
        {
          "question": "Is a French crop the same as every textured crop?",
          "answer": "The terms can overlap, but French crop usually emphasizes the forward fringe. A reference photo clarifies the exact edge and top length you want."
        },
        {
          "question": "How should I book this style?",
          "answer": "Choose a men’s haircut in Fresha, select your barber and bring a reference photo. The style name does not create a separate price tier."
        }
      ],
      "ctaText": "Book Your Experience",
      "meta": {
        "title": "French Crop Haircuts in Saskatoon | House of Havana",
        "description": "A French crop brings the focus forward to the fringe with a shorter top and tidy sides. It can have a defined fringe or a softer, textured edge..",
        "keywords": [
          "french crop haircuts saskatoon"
        ]
      }
    },
    "parentSlug": "mens-haircut-saskatoon"
  },
  {
    "title": "Curly Haircuts",
    "description": "A curly haircut works with natural curl pattern, density and shrinkage. The shape needs to make sense as the hair dries and moves, not only when stretched. Explore the look with your barber at House of Havana in Saskatoon.",
    "items": [
      {
        "name": "Haircut + Wash and Style",
        "duration": "30 min–1 hr",
        "price": "$38–$50"
      }
    ],
    "page": {
      "slug": "mens-haircut-saskatoon/curly-haircut-saskatoon",
      "h1": "Curly Haircuts in Saskatoon",
      "cardTitle": "Curly Haircuts",
      "cardDescription": "A curly haircut works with natural curl pattern, density and shrinkage. The shape needs to make sense as the hair dries and moves, not only when stretched. Explore the look with your barber at House of Havana in Saskatoon.",
      "intro": "A curly haircut works with natural curl pattern, density and shrinkage. The shape needs to make sense as the hair dries and moves, not only when stretched. Explore the look with your barber at House of Havana in Saskatoon.",
      "sectionTitle": "Planning Your Curly Haircuts",
      "sectionItems": [
        "A curly haircut works with natural curl pattern, density and shrinkage. The shape needs to make sense as the hair dries and moves, not only when stretched.",
        "Explain your normal wash and styling routine and how much length you want to keep. Discuss the crown, sides and fringe separately if your curl pattern varies across the head.",
        "Ask for guidance on drying and styling without disrupting your curl shape. Tell your barber which products you already use and what you find difficult at home.",
        "Every haircut includes a consultation, hair wash, cut and styling. Prices are $38–$50 before tax and appointments run 30–60 minutes, depending on the barber.",
        "For a haircut and beard trim together, prices are $50–$80 before tax and appointments run 45–90 minutes. Choose the combined booking if you want both services."
      ],
      "whyChooseTitle": "Your Visit to House of Havana",
      "whyChooseText": "Find us at 3501 8 St E, Bay 110, Saskatoon. Bring a reference photo and discuss your preferred finish with your barber before the service begins. Choose your barber and confirm your appointment on Fresha.",
      "faqTitle": "Curly Haircuts Questions",
      "faqs": [
        {
          "question": "Can I keep my curls on top and fade the sides?",
          "answer": "Yes. Discuss the fade height and the amount of curly length to preserve. Your barber can help balance the outline and curl shape."
        },
        {
          "question": "How should I book this style?",
          "answer": "Choose a men’s haircut in Fresha, select your barber and bring a reference photo. The style name does not create a separate price tier."
        }
      ],
      "ctaText": "Book Your Experience",
      "meta": {
        "title": "Curly Haircuts in Saskatoon | House of Havana",
        "description": "A curly haircut works with natural curl pattern, density and shrinkage. The shape needs to make sense as the hair dries and moves, not only when.",
        "keywords": [
          "curly haircuts saskatoon"
        ]
      }
    },
    "parentSlug": "mens-haircut-saskatoon"
  },
  {
    "title": "Low Fade",
    "description": "A low fade keeps the transition lower around the sides and back, leaving more visual weight above it. Explore this fade at House of Havana in Saskatoon.",
    "items": [
      {
        "name": "Haircut + Wash and Style",
        "duration": "30 min–1 hr",
        "price": "$38–$50"
      }
    ],
    "page": {
      "slug": "fade-haircut-saskatoon/low-fade",
      "h1": "Low Fade in Saskatoon",
      "cardTitle": "Low Fade",
      "cardDescription": "A low fade keeps the transition lower around the sides and back, leaving more visual weight above it. Explore this fade at House of Havana in Saskatoon.",
      "intro": "A low fade keeps the transition lower around the sides and back, leaving more visual weight above it. Explore this fade at House of Havana in Saskatoon.",
      "sectionTitle": "Planning Your Low Fade",
      "sectionItems": [
        "A low fade keeps the transition lower around the sides and back, leaving more visual weight above it.",
        "Discuss how low you want the blend around the temples and whether it should drop behind the ears.",
        "A low fade describes height, not the shortest length. Agree whether the base is skin-close or leaves visible hair.",
        "Agree on the shortest length separately from the fade height. Ask for skin only if you want the blend taken down to skin.",
        "Fade haircuts include consultation, wash, cut and styling. Prices are $38–$50 before tax, with 30–60 minutes depending on your barber. Discuss how often to return for the outline you prefer."
      ],
      "whyChooseTitle": "Your Visit to House of Havana",
      "whyChooseText": "Find us at 3501 8 St E, Bay 110, Saskatoon. Bring a reference photo and discuss your preferred finish with your barber before the service begins. Choose your barber and confirm your appointment on Fresha.",
      "faqTitle": "Low Fade Questions",
      "faqs": [
        {
          "question": "What should I ask for with a low fade?",
          "answer": "Bring a reference photo, describe the height and shape of the blend, and agree the shortest length and top length before cutting."
        },
        {
          "question": "Can I add a beard trim?",
          "answer": "Yes. Book a haircut and beard trim together: $50–$80 before tax and 45–90 minutes, depending on the barber."
        }
      ],
      "ctaText": "Book Your Experience",
      "meta": {
        "title": "Low Fade in Saskatoon | House of Havana",
        "description": "A low fade keeps the transition lower around the sides and back, leaving more visual weight above it. Explore this fade at House of Havana in Saskatoon.",
        "keywords": [
          "low fade saskatoon"
        ]
      }
    },
    "parentSlug": "fade-haircut-saskatoon"
  },
  {
    "title": "Mid Fade",
    "description": "A mid fade places the transition between a low and high fade, balancing contrast with some weight at the sides. Explore this fade at House of Havana in Saskatoon.",
    "items": [
      {
        "name": "Haircut + Wash and Style",
        "duration": "30 min–1 hr",
        "price": "$38–$50"
      }
    ],
    "page": {
      "slug": "fade-haircut-saskatoon/mid-fade",
      "h1": "Mid Fade in Saskatoon",
      "cardTitle": "Mid Fade",
      "cardDescription": "A mid fade places the transition between a low and high fade, balancing contrast with some weight at the sides. Explore this fade at House of Havana in Saskatoon.",
      "intro": "A mid fade places the transition between a low and high fade, balancing contrast with some weight at the sides. Explore this fade at House of Havana in Saskatoon.",
      "sectionTitle": "Planning Your Mid Fade",
      "sectionItems": [
        "A mid fade places the transition between a low and high fade, balancing contrast with some weight at the sides.",
        "Use a reference to agree where the blend starts and how it follows your head shape. Mid is a relative position, not one fixed measurement.",
        "Discuss how the medium-height blend connects to the top: a crop, curls and a longer swept style need different balance.",
        "Agree on the shortest length separately from the fade height. Ask for skin only if you want the blend taken down to skin.",
        "Fade haircuts include consultation, wash, cut and styling. Prices are $38–$50 before tax, with 30–60 minutes depending on your barber. Discuss how often to return for the outline you prefer."
      ],
      "whyChooseTitle": "Your Visit to House of Havana",
      "whyChooseText": "Find us at 3501 8 St E, Bay 110, Saskatoon. Bring a reference photo and discuss your preferred finish with your barber before the service begins. Choose your barber and confirm your appointment on Fresha.",
      "faqTitle": "Mid Fade Questions",
      "faqs": [
        {
          "question": "What should I ask for with a mid fade?",
          "answer": "Bring a reference photo, describe the height and shape of the blend, and agree the shortest length and top length before cutting."
        },
        {
          "question": "Can I add a beard trim?",
          "answer": "Yes. Book a haircut and beard trim together: $50–$80 before tax and 45–90 minutes, depending on the barber."
        }
      ],
      "ctaText": "Book Your Experience",
      "meta": {
        "title": "Mid Fade in Saskatoon | House of Havana",
        "description": "A mid fade places the transition between a low and high fade, balancing contrast with some weight at the sides. Explore this fade at House of Havana.",
        "keywords": [
          "mid fade saskatoon"
        ]
      }
    },
    "parentSlug": "fade-haircut-saskatoon"
  },
  {
    "title": "High Fade",
    "description": "A high fade brings the shorter area higher up the sides and back, giving stronger contrast with the top. Explore this fade at House of Havana in Saskatoon.",
    "items": [
      {
        "name": "Haircut + Wash and Style",
        "duration": "30 min–1 hr",
        "price": "$38–$50"
      }
    ],
    "page": {
      "slug": "fade-haircut-saskatoon/high-fade",
      "h1": "High Fade in Saskatoon",
      "cardTitle": "High Fade",
      "cardDescription": "A high fade brings the shorter area higher up the sides and back, giving stronger contrast with the top. Explore this fade at House of Havana in Saskatoon.",
      "intro": "A high fade brings the shorter area higher up the sides and back, giving stronger contrast with the top. Explore this fade at House of Havana in Saskatoon.",
      "sectionTitle": "Planning Your High Fade",
      "sectionItems": [
        "A high fade brings the shorter area higher up the sides and back, giving stronger contrast with the top.",
        "Talk through how much weight to remove at the upper sides before cutting. A higher blend can make the top appear more prominent.",
        "Consider the silhouette from the side as well as the front. Agree the length on top and whether the base should reach the skin.",
        "Agree on the shortest length separately from the fade height. Ask for skin only if you want the blend taken down to skin.",
        "Fade haircuts include consultation, wash, cut and styling. Prices are $38–$50 before tax, with 30–60 minutes depending on your barber. Discuss how often to return for the outline you prefer."
      ],
      "whyChooseTitle": "Your Visit to House of Havana",
      "whyChooseText": "Find us at 3501 8 St E, Bay 110, Saskatoon. Bring a reference photo and discuss your preferred finish with your barber before the service begins. Choose your barber and confirm your appointment on Fresha.",
      "faqTitle": "High Fade Questions",
      "faqs": [
        {
          "question": "What should I ask for with a high fade?",
          "answer": "Bring a reference photo, describe the height and shape of the blend, and agree the shortest length and top length before cutting."
        },
        {
          "question": "Can I add a beard trim?",
          "answer": "Yes. Book a haircut and beard trim together: $50–$80 before tax and 45–90 minutes, depending on the barber."
        }
      ],
      "ctaText": "Book Your Experience",
      "meta": {
        "title": "High Fade in Saskatoon | House of Havana",
        "description": "A high fade brings the shorter area higher up the sides and back, giving stronger contrast with the top. Explore this fade at House of Havana in.",
        "keywords": [
          "high fade saskatoon"
        ]
      }
    },
    "parentSlug": "fade-haircut-saskatoon"
  },
  {
    "title": "Taper Fade",
    "description": "A taper fade concentrates the shorter blend around the temples and neckline while retaining more of the surrounding hair. Explore this fade at House of Havana in Saskatoon.",
    "items": [
      {
        "name": "Haircut + Wash and Style",
        "duration": "30 min–1 hr",
        "price": "$38–$50"
      }
    ],
    "page": {
      "slug": "fade-haircut-saskatoon/taper-fade",
      "h1": "Taper Fade in Saskatoon",
      "cardTitle": "Taper Fade",
      "cardDescription": "A taper fade concentrates the shorter blend around the temples and neckline while retaining more of the surrounding hair. Explore this fade at House of Havana in Saskatoon.",
      "intro": "A taper fade concentrates the shorter blend around the temples and neckline while retaining more of the surrounding hair. Explore this fade at House of Havana in Saskatoon.",
      "sectionTitle": "Planning Your Taper Fade",
      "sectionItems": [
        "A taper fade concentrates the shorter blend around the temples and neckline while retaining more of the surrounding hair.",
        "Discuss both the temple taper and the nape. Show whether you prefer a subtle outline or a more noticeable close finish.",
        "A taper can preserve side volume and work with longer hair. Ask how the edge will connect with your natural hairline.",
        "Agree on the shortest length separately from the fade height. Ask for skin only if you want the blend taken down to skin.",
        "Fade haircuts include consultation, wash, cut and styling. Prices are $38–$50 before tax, with 30–60 minutes depending on your barber. Discuss how often to return for the outline you prefer."
      ],
      "whyChooseTitle": "Your Visit to House of Havana",
      "whyChooseText": "Find us at 3501 8 St E, Bay 110, Saskatoon. Bring a reference photo and discuss your preferred finish with your barber before the service begins. Choose your barber and confirm your appointment on Fresha.",
      "faqTitle": "Taper Fade Questions",
      "faqs": [
        {
          "question": "What should I ask for with a taper fade?",
          "answer": "Bring a reference photo, describe the height and shape of the blend, and agree the shortest length and top length before cutting."
        },
        {
          "question": "Can I add a beard trim?",
          "answer": "Yes. Book a haircut and beard trim together: $50–$80 before tax and 45–90 minutes, depending on the barber."
        }
      ],
      "ctaText": "Book Your Experience",
      "meta": {
        "title": "Taper Fade in Saskatoon | House of Havana",
        "description": "A taper fade concentrates the shorter blend around the temples and neckline while retaining more of the surrounding hair. Explore this fade at House.",
        "keywords": [
          "taper fade saskatoon"
        ]
      }
    },
    "parentSlug": "fade-haircut-saskatoon"
  },
  {
    "title": "Blowout Taper",
    "description": "A blowout taper combines a tapered outline with volume and texture through the top and sides. Explore this fade at House of Havana in Saskatoon.",
    "items": [
      {
        "name": "Haircut + Wash and Style",
        "duration": "30 min–1 hr",
        "price": "$38–$50"
      }
    ],
    "page": {
      "slug": "fade-haircut-saskatoon/blowout-taper",
      "h1": "Blowout Taper in Saskatoon",
      "cardTitle": "Blowout Taper",
      "cardDescription": "A blowout taper combines a tapered outline with volume and texture through the top and sides. Explore this fade at House of Havana in Saskatoon.",
      "intro": "A blowout taper combines a tapered outline with volume and texture through the top and sides. Explore this fade at House of Havana in Saskatoon.",
      "sectionTitle": "Planning Your Blowout Taper",
      "sectionItems": [
        "A blowout taper combines a tapered outline with volume and texture through the top and sides.",
        "Discuss the amount of fullness to keep near the temples and the height you want on top. Bring views of the side as well as the front.",
        "Ask for a drying demonstration that creates lift with your natural texture. The styling routine is part of choosing this look.",
        "Agree on the shortest length separately from the fade height. Ask for skin only if you want the blend taken down to skin.",
        "Fade haircuts include consultation, wash, cut and styling. Prices are $38–$50 before tax, with 30–60 minutes depending on your barber. Discuss how often to return for the outline you prefer."
      ],
      "whyChooseTitle": "Your Visit to House of Havana",
      "whyChooseText": "Find us at 3501 8 St E, Bay 110, Saskatoon. Bring a reference photo and discuss your preferred finish with your barber before the service begins. Choose your barber and confirm your appointment on Fresha.",
      "faqTitle": "Blowout Taper Questions",
      "faqs": [
        {
          "question": "What should I ask for with a blowout taper?",
          "answer": "Bring a reference photo, describe the height and shape of the blend, and agree the shortest length and top length before cutting."
        },
        {
          "question": "Can I add a beard trim?",
          "answer": "Yes. Book a haircut and beard trim together: $50–$80 before tax and 45–90 minutes, depending on the barber."
        }
      ],
      "ctaText": "Book Your Experience",
      "meta": {
        "title": "Blowout Taper in Saskatoon | House of Havana",
        "description": "A blowout taper combines a tapered outline with volume and texture through the top and sides. Explore this fade at House of Havana in Saskatoon.",
        "keywords": [
          "blowout taper saskatoon"
        ]
      }
    },
    "parentSlug": "fade-haircut-saskatoon"
  },
  {
    "title": "Burst Fade",
    "description": "A burst fade follows a curved shape around the ear, creating a focused blend rather than one even height around the head. Explore this fade at House of Havana in Saskatoon.",
    "items": [
      {
        "name": "Haircut + Wash and Style",
        "duration": "30 min–1 hr",
        "price": "$38–$50"
      }
    ],
    "page": {
      "slug": "fade-haircut-saskatoon/burst-fade",
      "h1": "Burst Fade in Saskatoon",
      "cardTitle": "Burst Fade",
      "cardDescription": "A burst fade follows a curved shape around the ear, creating a focused blend rather than one even height around the head. Explore this fade at House of Havana in Saskatoon.",
      "intro": "A burst fade follows a curved shape around the ear, creating a focused blend rather than one even height around the head. Explore this fade at House of Havana in Saskatoon.",
      "sectionTitle": "Planning Your Burst Fade",
      "sectionItems": [
        "A burst fade follows a curved shape around the ear, creating a focused blend rather than one even height around the head.",
        "Discuss how far the curved section should extend behind the ear and how much length to keep at the back.",
        "A burst can be combined with a longer back or a shorter overall style. Show the full outline you want, not only a close-up of the ear.",
        "Agree on the shortest length separately from the fade height. Ask for skin only if you want the blend taken down to skin.",
        "Fade haircuts include consultation, wash, cut and styling. Prices are $38–$50 before tax, with 30–60 minutes depending on your barber. Discuss how often to return for the outline you prefer."
      ],
      "whyChooseTitle": "Your Visit to House of Havana",
      "whyChooseText": "Find us at 3501 8 St E, Bay 110, Saskatoon. Bring a reference photo and discuss your preferred finish with your barber before the service begins. Choose your barber and confirm your appointment on Fresha.",
      "faqTitle": "Burst Fade Questions",
      "faqs": [
        {
          "question": "What should I ask for with a burst fade?",
          "answer": "Bring a reference photo, describe the height and shape of the blend, and agree the shortest length and top length before cutting."
        },
        {
          "question": "Can I add a beard trim?",
          "answer": "Yes. Book a haircut and beard trim together: $50–$80 before tax and 45–90 minutes, depending on the barber."
        }
      ],
      "ctaText": "Book Your Experience",
      "meta": {
        "title": "Burst Fade in Saskatoon | House of Havana",
        "description": "A burst fade follows a curved shape around the ear, creating a focused blend rather than one even height around the head. Explore this fade at House.",
        "keywords": [
          "burst fade saskatoon"
        ]
      }
    },
    "parentSlug": "fade-haircut-saskatoon"
  },
  {
    "title": "Beard Grooming & Maintenance",
    "description": "Regular beard grooming focuses on keeping the length you want while tidying uneven growth and the outline. Discuss your beard at House of Havana in Saskatoon.",
    "items": [
      {
        "name": "Beard Grooming",
        "duration": "30–40 min",
        "price": "From $25"
      }
    ],
    "page": {
      "slug": "beard-grooming-saskatoon/beard-maintenance",
      "h1": "Beard Grooming & Maintenance in Saskatoon",
      "cardTitle": "Beard Grooming & Maintenance",
      "cardDescription": "Regular beard grooming focuses on keeping the length you want while tidying uneven growth and the outline. Discuss your beard at House of Havana in Saskatoon.",
      "intro": "Regular beard grooming focuses on keeping the length you want while tidying uneven growth and the outline. Discuss your beard at House of Havana in Saskatoon.",
      "sectionTitle": "Planning Your Beard Grooming & Maintenance",
      "sectionItems": [
        "Regular beard grooming focuses on keeping the length you want while tidying uneven growth and the outline.",
        "Explain whether you are maintaining the current length or growing it out. Identify the areas that feel bulky without asking for an overall reduction by default.",
        "Ask for a practical brushing and product routine, and discuss when the edges are likely to need a tidy-up.",
        "Book beard grooming for a beard-only visit. The published service starts at $25, with 30–40 minutes; confirm your barber’s final price in Fresha.",
        "For a haircut and beard trim, book the combined appointment: $50–$80 before tax and 45–90 minutes depending on your barber."
      ],
      "whyChooseTitle": "Your Visit to House of Havana",
      "whyChooseText": "Find us at 3501 8 St E, Bay 110, Saskatoon. Bring a reference photo and discuss your preferred finish with your barber before the service begins. Choose your barber and confirm your appointment on Fresha.",
      "faqTitle": "Beard Grooming & Maintenance Questions",
      "faqs": [
        {
          "question": "How do I explain the beard shape I want?",
          "answer": "Bring front and side reference photos and discuss how much length to retain at the chin, jaw and moustache before trimming."
        },
        {
          "question": "Can this be part of a haircut appointment?",
          "answer": "Yes. Choose a haircut and beard trim booking so your barber has time for both services."
        }
      ],
      "ctaText": "Book Your Experience",
      "meta": {
        "title": "Beard Grooming & Maintenance in Saskatoon | House of Havana",
        "description": "Regular beard grooming focuses on keeping the length you want while tidying uneven growth and the outline. Discuss your beard at House of Havana in.",
        "keywords": [
          "beard grooming & maintenance saskatoon"
        ]
      }
    },
    "parentSlug": "beard-grooming-saskatoon"
  },
  {
    "title": "Beard Shaping",
    "description": "Beard shaping focuses on the outline: cheek lines, neckline and the balance around the jaw. Discuss your beard at House of Havana in Saskatoon.",
    "items": [
      {
        "name": "Beard Grooming",
        "duration": "30–40 min",
        "price": "From $25"
      }
    ],
    "page": {
      "slug": "beard-grooming-saskatoon/beard-shaping",
      "h1": "Beard Shaping in Saskatoon",
      "cardTitle": "Beard Shaping",
      "cardDescription": "Beard shaping focuses on the outline: cheek lines, neckline and the balance around the jaw. Discuss your beard at House of Havana in Saskatoon.",
      "intro": "Beard shaping focuses on the outline: cheek lines, neckline and the balance around the jaw. Discuss your beard at House of Havana in Saskatoon.",
      "sectionTitle": "Planning Your Beard Shaping",
      "sectionItems": [
        "Beard shaping focuses on the outline: cheek lines, neckline and the balance around the jaw.",
        "Discuss where you want the neckline to sit and how much of the natural cheek growth to preserve. A photo helps define how sharp or soft the edges should look.",
        "Ask how the sideburns should connect to your haircut and how to keep the outline tidy without moving it higher each time.",
        "Book beard grooming for a beard-only visit. The published service starts at $25, with 30–40 minutes; confirm your barber’s final price in Fresha.",
        "For a haircut and beard trim, book the combined appointment: $50–$80 before tax and 45–90 minutes depending on your barber."
      ],
      "whyChooseTitle": "Your Visit to House of Havana",
      "whyChooseText": "Find us at 3501 8 St E, Bay 110, Saskatoon. Bring a reference photo and discuss your preferred finish with your barber before the service begins. Choose your barber and confirm your appointment on Fresha.",
      "faqTitle": "Beard Shaping Questions",
      "faqs": [
        {
          "question": "How do I explain the beard shape I want?",
          "answer": "Bring front and side reference photos and discuss how much length to retain at the chin, jaw and moustache before trimming."
        },
        {
          "question": "Can this be part of a haircut appointment?",
          "answer": "Yes. Choose a haircut and beard trim booking so your barber has time for both services."
        }
      ],
      "ctaText": "Book Your Experience",
      "meta": {
        "title": "Beard Shaping in Saskatoon | House of Havana",
        "description": "Beard shaping focuses on the outline: cheek lines, neckline and the balance around the jaw. Discuss your beard at House of Havana in Saskatoon.",
        "keywords": [
          "beard shaping saskatoon"
        ]
      }
    },
    "parentSlug": "beard-grooming-saskatoon"
  },
  {
    "title": "Beard Sculpting",
    "description": "Beard sculpting focuses on the three-dimensional shape, adjusting bulk and length to build the profile you want. Discuss your beard at House of Havana in Saskatoon.",
    "items": [
      {
        "name": "Beard Grooming",
        "duration": "30–40 min",
        "price": "From $25"
      }
    ],
    "page": {
      "slug": "beard-grooming-saskatoon/beard-sculpting",
      "h1": "Beard Sculpting in Saskatoon",
      "cardTitle": "Beard Sculpting",
      "cardDescription": "Beard sculpting focuses on the three-dimensional shape, adjusting bulk and length to build the profile you want. Discuss your beard at House of Havana in Saskatoon.",
      "intro": "Beard sculpting focuses on the three-dimensional shape, adjusting bulk and length to build the profile you want. Discuss your beard at House of Havana in Saskatoon.",
      "sectionTitle": "Planning Your Beard Sculpting",
      "sectionItems": [
        "Beard sculpting focuses on the three-dimensional shape, adjusting bulk and length to build the profile you want.",
        "Discuss the chin, jaw and sides separately. Explain whether you want a rounded shape, more length through the chin or a squarer silhouette.",
        "Density and growth direction influence the result. Ask which areas need time to grow before a particular shape can be achieved.",
        "Book beard grooming for a beard-only visit. The published service starts at $25, with 30–40 minutes; confirm your barber’s final price in Fresha.",
        "For a haircut and beard trim, book the combined appointment: $50–$80 before tax and 45–90 minutes depending on your barber."
      ],
      "whyChooseTitle": "Your Visit to House of Havana",
      "whyChooseText": "Find us at 3501 8 St E, Bay 110, Saskatoon. Bring a reference photo and discuss your preferred finish with your barber before the service begins. Choose your barber and confirm your appointment on Fresha.",
      "faqTitle": "Beard Sculpting Questions",
      "faqs": [
        {
          "question": "How do I explain the beard shape I want?",
          "answer": "Bring front and side reference photos and discuss how much length to retain at the chin, jaw and moustache before trimming."
        },
        {
          "question": "Can this be part of a haircut appointment?",
          "answer": "Yes. Choose a haircut and beard trim booking so your barber has time for both services."
        }
      ],
      "ctaText": "Book Your Experience",
      "meta": {
        "title": "Beard Sculpting in Saskatoon | House of Havana",
        "description": "Beard sculpting focuses on the three-dimensional shape, adjusting bulk and length to build the profile you want. Discuss your beard at House of.",
        "keywords": [
          "beard sculpting saskatoon"
        ]
      }
    },
    "parentSlug": "beard-grooming-saskatoon"
  },
  {
    "title": "Italian Beard Style",
    "description": "Italian beard style can mean different lengths and outlines. Bring a reference photo so your barber can identify the proportions and finish you have in mind. Discuss your beard at House of Havana in Saskatoon.",
    "items": [
      {
        "name": "Beard Grooming",
        "duration": "30–40 min",
        "price": "From $25"
      }
    ],
    "page": {
      "slug": "beard-grooming-saskatoon/italian-beard-style",
      "h1": "Italian Beard Style in Saskatoon",
      "cardTitle": "Italian Beard Style",
      "cardDescription": "Italian beard style can mean different lengths and outlines. Bring a reference photo so your barber can identify the proportions and finish you have in mind. Discuss your beard at House of Havana in Saskatoon.",
      "intro": "Italian beard style can mean different lengths and outlines. Bring a reference photo so your barber can identify the proportions and finish you have in mind. Discuss your beard at House of Havana in Saskatoon.",
      "sectionTitle": "Planning Your Italian Beard Style",
      "sectionItems": [
        "Italian beard style can mean different lengths and outlines. Bring a reference photo so your barber can identify the proportions and finish you have in mind.",
        "Discuss the moustache, cheek line, chin and neckline separately. Explain whether you want the finish close and defined or fuller with a softer outline.",
        "Ask how your growth pattern and density affect the reference. Agree the details rather than treating the style name as one standardized shape.",
        "Book beard grooming for a beard-only visit. The published service starts at $25, with 30–40 minutes; confirm your barber’s final price in Fresha.",
        "For a haircut and beard trim, book the combined appointment: $50–$80 before tax and 45–90 minutes depending on your barber."
      ],
      "whyChooseTitle": "Your Visit to House of Havana",
      "whyChooseText": "Find us at 3501 8 St E, Bay 110, Saskatoon. Bring a reference photo and discuss your preferred finish with your barber before the service begins. Choose your barber and confirm your appointment on Fresha.",
      "faqTitle": "Italian Beard Style Questions",
      "faqs": [
        {
          "question": "How do I explain the beard shape I want?",
          "answer": "Bring front and side reference photos and discuss how much length to retain at the chin, jaw and moustache before trimming."
        },
        {
          "question": "Can this be part of a haircut appointment?",
          "answer": "Yes. Choose a haircut and beard trim booking so your barber has time for both services."
        }
      ],
      "ctaText": "Book Your Experience",
      "meta": {
        "title": "Italian Beard Style in Saskatoon | House of Havana",
        "description": "Italian beard style can mean different lengths and outlines. Bring a reference photo so your barber can identify the proportions and finish you have.",
        "keywords": [
          "italian beard style saskatoon"
        ]
      }
    },
    "parentSlug": "beard-grooming-saskatoon"
  }
];

const existing = (slug: string): ServiceCategory => {
  const service = legacyServicesList.find((entry) => entry.page?.slug === slug);
  if (!service) throw new Error(`Missing service: ${slug}`);
  return service;
};
const added = (slug: string): ServiceCategory => {
  const service = newServicePages.find((entry) => entry.page?.slug === slug);
  if (!service) throw new Error(`Missing service: ${slug}`);
  return service;
};

// Eight main services. Style pages belong to these categories, not extra main cards.
export const servicesList: ServiceCategory[] = [
  existing("mens-haircut-saskatoon"),
  existing("fade-haircut-saskatoon"),
  existing("beard-grooming-saskatoon"),
  { ...existing("hot-towel-shave-saskatoon"), title: "Hot Shaves" },
  added("partial-perm-saskatoon"),
  added("full-perm-saskatoon"),
  added("color-camouflage-saskatoon"),
  added("nose-wax-saskatoon"),
];

// Owner-confirmed haircut prices apply regardless of style.
servicesList[0].items = [
  { name: "Haircut + Wash and Style", duration: "30 min–1 hr", price: "$38–$50" },
  { name: "Haircut + Beard Grooming", duration: "45 min–1 hr 30 min", price: "$50–$80" },
  { name: "Kids’ Haircut", duration: "30–40 min", price: "$40" },
];
servicesList[1].items = [{ name: "Haircut + Wash and Style (ask your barber for a fade)", duration: "30 min–1 hr", price: "$38–$50" }];
servicesList[2].items = [
  { name: "Beard Grooming", duration: "30–40 min", price: "From $25" },
  { name: "Haircut + Beard Grooming", duration: "45 min–1 hr 30 min", price: "$50–$80" },
];

export const serviceRedirects: Record<string, string> = {
  "scissor-haircut-saskatoon": "mens-haircut-saskatoon/scissor-haircut-saskatoon",
  "curly-haircut-saskatoon": "mens-haircut-saskatoon/curly-haircut-saskatoon",
};
const allServicePages = [
  ...servicesList,
  ...newServicePages.filter((entry) => entry.parentSlug),
  // Keep the established treatment overview and its incoming links working.
  existing("premium-treatments-saskatoon"),
];
export function getServiceBySlug(slug: string): ServiceCategory | undefined {
  return allServicePages.find((entry) => entry.page?.slug === (serviceRedirects[slug] || slug));
}
export function getServicesWithPages(): ServiceCategory[] {
  return allServicePages;
}
export function getChildServices(parentSlug: string): ServiceCategory[] {
  return allServicePages.filter((entry) => entry.parentSlug === parentSlug);
}
export function getRelatedServices(currentSlug: string): ServiceCategory[] {
  const current = getServiceBySlug(currentSlug);
  if (current?.parentSlug) {
    return [getServiceBySlug(current.parentSlug)!, ...getChildServices(current.parentSlug).filter((entry) => entry !== current).slice(0, 3)];
  }
  if (currentSlug === "premium-treatments-saskatoon") {
    return [added("partial-perm-saskatoon"), added("full-perm-saskatoon"), added("color-camouflage-saskatoon")];
  }
  return servicesList.filter((entry) => entry !== current).slice(0, 4);
}
