import { BARBERS } from "@/data/barbers";
import { servicesList } from "@/data/services";
import type {
  Article,
  BreadcrumbList,
  ContactPage,
  FAQPage,
  ImageGallery,
  ItemList,
  LocalBusiness,
  Organization,
  Place,
  ProfessionalService,
  WebSite,
  WithContext,
} from "schema-dts";

// Base URL for the site
const BASE_URL = "https://houseofhavana.ca";

// Helper to create JSON-LD script content
export function jsonLd(schema: object): string {
  return JSON.stringify(schema);
}

// Helper to create slug from name
function toSlug(name: string): string {
  return name.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "");
}

// Helper to parse price string (e.g., "$46" -> "46.00")
function parsePrice(price?: string): string {
  if (!price) return "0.00";
  return parseFloat(price.replace("$", "")).toFixed(2);
}

// Generate employees from BARBERS data
const employees = BARBERS.map((barber) => ({
  "@type": "Person" as const,
  name: barber.name,
  jobTitle: barber.text1,
  image: `${BASE_URL}${barber.image.src}`,
}));

// Generate offer catalog from servicesList data
const offerCatalog = {
  "@type": "OfferCatalog" as const,
  name: "Grooming Services",
  itemListElement: servicesList.map((category) => ({
    "@type": "OfferCatalog" as const,
    name: category.title,
    description: category.description,
    itemListElement: category.items.map((item) => ({
      "@type": "Offer" as const,
      itemOffered: {
        "@type": "Service" as const,
        name: item.name,
        description: `${item.name}${item.duration ? ` (${item.duration})` : ""}`,
        provider: { "@id": `${BASE_URL}/#barbershop` },
      },
      price: parsePrice(item.price),
      priceCurrency: "CAD",
    })),
  })),
};

// WebSite Schema
export const websiteSchema: WithContext<WebSite> = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${BASE_URL}/#website`,
  name: "House Of Havana",
  alternateName: "House Of Havana Barbershop",
  url: `${BASE_URL}/`,
  description:
    "Premium barber shop in Saskatoon offering precision cuts, fades, and luxury grooming services.",
  inLanguage: "en-CA",
  publisher: {
    "@id": `${BASE_URL}/#organization`,
  },
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${BASE_URL}/?s={search_term_string}`,
    },
    "query-input": "required name=search_term_string",
  } as WebSite["potentialAction"],
};

// Organization Schema
export const organizationSchema: WithContext<Organization> = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${BASE_URL}/#organization`,
  name: "House Of Havana Barbershop",
  url: BASE_URL,
  logo: {
    "@type": "ImageObject",
    "@id": `${BASE_URL}/#logo`,
    url: `${BASE_URL}/logo.png`,
    contentUrl: `${BASE_URL}/logo.png`,
    caption: "House Of Havana Barbershop Logo",
  },
  image: {
    "@id": `${BASE_URL}/#logo`,
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+1-306-952-2255",
    contactType: "customer service",
    availableLanguage: ["English"],
    areaServed: "CA",
  },
  sameAs: [
    "https://www.instagram.com/houseofhavanabarbershop_yxe/",
    "https://www.facebook.com/HouseOfHavanaBarbershop/",
    "https://www.tiktok.com/@houseofhavana.yxe",
    "https://www.youtube.com/@houseofhavanamensgrooming",
    "https://www.yelp.ca/biz/house-of-havana-saskatoon",
    "https://getsquire.com/booking/brands/house-of-havana-barbershop"
  ],
};

// BreadcrumbList Schema
export const breadcrumbSchema: WithContext<BreadcrumbList> = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "@id": `${BASE_URL}/#breadcrumb`,
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: BASE_URL,
    },
  ],
};

// BarberShop/LocalBusiness Schema
export const barbershopSchema: WithContext<LocalBusiness> = {
  "@context": "https://schema.org",
  "@type": ["BarberShop", "LocalBusiness", "HealthAndBeautyBusiness"] as unknown as "LocalBusiness",
  "@id": `${BASE_URL}/#barbershop`,
  name: "House Of Havana Barbershop",
  alternateName: "House Of Havana",
  description:
    "Experience premium grooming at House Of Havana, Saskatoon's top barber shop for precision cuts, fades, and luxury style crafted by expert barbers.",
  url: BASE_URL,
  telephone: "+1-306-952-2255",
  priceRange: "$$",
  image: [
    `${BASE_URL}/hero-desktop.png`,
    `${BASE_URL}/hero-mobile.png`,
    `${BASE_URL}/hero-tablet.png`,
  ],
  logo: {
    "@type": "ImageObject",
    "@id": `${BASE_URL}/#logo`,
    url: `${BASE_URL}/logo.png`,
    contentUrl: `${BASE_URL}/logo.png`,
    caption: "House Of Havana Barbershop Logo",
  },
  currenciesAccepted: "CAD",
  paymentAccepted: "Cash, Credit Card, Debit Card",
  areaServed: [
    {
      "@type": "City",
      name: "Saskatoon",
      "@id": "https://www.wikidata.org/wiki/Q2101",
    },
    {
      "@type": "State",
      name: "Saskatchewan",
    },
  ],
  address: {
    "@type": "PostalAddress",
    streetAddress: "3501 8 St E, Bay 110",
    addressLocality: "Saskatoon",
    addressRegion: "SK",
    postalCode: "S7H 0W5",
    addressCountry: "CA",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 52.1099,
    longitude: -106.5959,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "19:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "09:00",
      closes: "17:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Sunday",
      opens: "00:00",
      closes: "00:00",
    },
  ],
  hasOfferCatalog: offerCatalog,
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5.0",
    bestRating: "5",
    worstRating: "1",
    ratingCount: "150",
    reviewCount: "150",
  },
  review: [
    {
      "@type": "Review",
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5",
      },
      author: {
        "@type": "Person",
        name: "Client",
      },
      reviewBody:
        "The best barbershop experience I've ever had. The attention to detail and the atmosphere is incredible. Highly recommend!",
    },
    {
      "@type": "Review",
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5",
      },
      author: {
        "@type": "Person",
        name: "Client",
      },
      reviewBody:
        "These guys are true artists. My beard has never looked better, and the hot towel treatment was the perfect finishing touch.",
    },
  ],
  founder: {
    "@type": "Person",
    name: BARBERS[0].name,
    jobTitle: `${BARBERS[0].text1} & ${BARBERS[0].text2}`,
    image: `${BASE_URL}${BARBERS[0].image.src}`,
  },
  employee: employees,
  potentialAction: [
    {
      "@type": "ReserveAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://getsquire.com/booking/brands/house-of-havana-barbershop",
        actionPlatform: [
          "http://schema.org/DesktopWebPlatform",
          "http://schema.org/MobileWebPlatform",
        ],
      },
      result: {
        "@type": "Reservation",
        name: "Book an Appointment",
      },
    },
    {
      "@type": "OrderAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://getsquire.com/booking/brands/house-of-havana-barbershop",
        actionPlatform: [
          "http://schema.org/DesktopWebPlatform",
          "http://schema.org/MobileWebPlatform",
        ],
      },
    },
  ],
  amenityFeature: [
    {
      "@type": "LocationFeatureSpecification",
      name: "Wheelchair Accessible",
      value: true,
    },
    {
      "@type": "LocationFeatureSpecification",
      name: "Free Parking",
      value: true,
    },
    {
      "@type": "LocationFeatureSpecification",
      name: "Wi-Fi",
      value: true,
    },
    {
      "@type": "LocationFeatureSpecification",
      name: "Air Conditioning",
      value: true,
    },
  ],
  hasMap: "https://maps.app.goo.gl/MUwvjnhQNHpKnq167",
  isAccessibleForFree: false,
  sameAs: [
    "https://www.instagram.com/houseofhavanabarbershop_yxe/",
    "https://www.facebook.com/HouseOfHavanaBarbershop/",
    "https://www.tiktok.com/@houseofhavana.yxe",
    "https://www.youtube.com/@houseofhavanamensgrooming",
    "https://www.yelp.ca/biz/house-of-havana-saskatoon",
    "https://getsquire.com/booking/brands/house-of-havana-barbershop"
  ],
  slogan: "Where grooming becomes personal and confidence is elevated",
  knowsAbout: [
    "Haircuts",
    "Beard Grooming",
    "Hot Shave",
    "Fades",
    "Perms",
    "Men's Grooming",
    "Barbering",
  ],
  keywords:
    "barber shop saskatoon, haircut saskatoon, beard trim saskatoon, hot shave saskatoon, fade haircut, men's grooming saskatoon, best barber saskatoon",
};

// Get all service names for knowsAbout
const allServiceNames = servicesList.flatMap((cat) => cat.items.map((item) => item.name));

// ProfessionalService Schema
export const professionalServiceSchema: WithContext<ProfessionalService> = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${BASE_URL}/#professionalservice`,
  name: "House Of Havana Barbershop",
  description: "Professional barbering and men's grooming services in Saskatoon",
  url: BASE_URL,
  telephone: "+1-306-952-2255",
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: "3501 8 St E, Bay 110",
    addressLocality: "Saskatoon",
    addressRegion: "SK",
    postalCode: "S7H 0W5",
    addressCountry: "CA",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 52.1099,
    longitude: -106.5959,
  },
  areaServed: {
    "@type": "City",
    name: "Saskatoon",
  },
  knowsAbout: allServiceNames,
  sameAs: [
    "https://www.instagram.com/houseofhavanabarbershop_yxe/",
    "https://www.facebook.com/HouseOfHavanaBarbershop/",
    "https://www.tiktok.com/@houseofhavana.yxe",
    "https://www.youtube.com/@houseofhavanamensgrooming",
    "https://www.yelp.ca/biz/house-of-havana-saskatoon",
    "https://getsquire.com/booking/brands/house-of-havana-barbershop"
  ],
};

// Flatten all services for the ItemList
const allServices = servicesList.flatMap((cat) => cat.items);

// Services ItemList Schema
export const servicesSchema: WithContext<ItemList> = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "@id": `${BASE_URL}/#services`,
  name: "House Of Havana Barbershop Services",
  description: "Premium grooming services offered at House Of Havana Barbershop in Saskatoon",
  numberOfItems: allServices.length,
  itemListElement: allServices.map((service, index) => ({
    "@type": "ListItem" as const,
    position: index + 1,
    item: {
      "@type": "Service" as const,
      "@id": `${BASE_URL}/#${toSlug(service.name)}`,
      name: service.name,
      description: `${service.name}${service.duration ? ` (${service.duration})` : ""}`,
      provider: { "@id": `${BASE_URL}/#barbershop` },
      areaServed: { "@type": "City" as const, name: "Saskatoon" },
      serviceType: service.name,
      offers: {
        "@type": "Offer" as const,
        price: parsePrice(service.price),
        priceCurrency: "CAD",
        availability: "https://schema.org/InStock",
      },
    },
  })),
};

// ImageGallery Schema
export const imageGallerySchema: WithContext<ImageGallery> = {
  "@context": "https://schema.org",
  "@type": "ImageGallery",
  "@id": `${BASE_URL}/#gallery`,
  name: "House Of Havana Barbershop Gallery",
  description: "Photos of House Of Havana Barbershop in Saskatoon",
  about: { "@id": `${BASE_URL}/#barbershop` },
  image: [
    {
      "@type": "ImageObject",
      url: `${BASE_URL}/hero-desktop.png`,
      name: "House Of Havana Barbershop Interior",
      description: "Interior view of House Of Havana Barbershop in Saskatoon",
    },
    {
      "@type": "ImageObject",
      url: `${BASE_URL}/hero-mobile.png`,
      name: "House Of Havana Barbershop",
      description: "House Of Havana Barbershop Saskatoon",
    },
  ],
};

// Team ItemList Schema - generated from BARBERS data
export const teamSchema: WithContext<ItemList> = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "@id": `${BASE_URL}/#team`,
  name: "House Of Havana Barbers",
  description: "Meet the skilled barbers at House Of Havana Barbershop in Saskatoon",
  numberOfItems: BARBERS.length,
  itemListElement: BARBERS.map((barber, index) => ({
    "@type": "ListItem" as const,
    position: index + 1,
    item: {
      "@type": "Person" as const,
      "@id": `${BASE_URL}/#${toSlug(barber.name)}`,
      name: barber.name,
      jobTitle: barber.text1,
      description: barber.text2,
      image: `${BASE_URL}${barber.image.src}`,
      worksFor: { "@id": `${BASE_URL}/#barbershop` },
    },
  })),
};

// Place Schema
export const placeSchema: WithContext<Place> = {
  "@context": "https://schema.org",
  "@type": "Place",
  "@id": `${BASE_URL}/#place`,
  name: "House Of Havana Barbershop",
  description: "Premium barber shop located in Saskatoon, Saskatchewan",
  address: {
    "@type": "PostalAddress",
    streetAddress: "3501 8 St E, Bay 110",
    addressLocality: "Saskatoon",
    addressRegion: "SK",
    postalCode: "S7H 0W5",
    addressCountry: "CA",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 52.1099,
    longitude: -106.5959,
  },
  hasMap: "https://www.google.com/maps?q=3501+8+St+E,+Bay+110,+Saskatoon,+SK+S7H+0W5",
  telephone: "+1-306-952-2255",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "19:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "09:00",
      closes: "17:00",
    },
  ],
  publicAccess: true,
  isAccessibleForFree: false,
};

// ContactPage Schema
export const contactPageSchema: WithContext<ContactPage> = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "@id": `${BASE_URL}/#contact`,
  name: "Contact House Of Havana Barbershop",
  description: "Get in touch with House Of Havana Barbershop in Saskatoon",
  mainEntity: {
    "@type": "ContactPoint",
    telephone: "+1-306-952-2255",
    contactType: "customer service",
    availableLanguage: ["English"],
    areaServed: {
      "@type": "City",
      name: "Saskatoon",
    },
    hoursAvailable: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "19:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "09:00",
        closes: "17:00",
      },
    ],
  },
};

// FAQ Schema Generator
export interface FAQItem {
  question: string;
  answer: string;
}

export function generateFAQSchema(
  faqs: FAQItem[],
  pageUrl?: string
): WithContext<FAQPage> {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    ...(pageUrl && { "@id": `${BASE_URL}${pageUrl}/#faq` }),
    mainEntity: faqs.map((faq) => ({
      "@type": "Question" as const,
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer" as const,
        text: faq.answer,
      },
    })),
  };
}

// Article Schema Generator
export interface ArticleData {
  id: string;
  title: string;
  excerpt?: string;
  content?: string;
  author?: string;
  createdAt?: string;
  updatedAt?: string;
  featuredMedia?: {
    url: string;
    type: "image" | "video";
  };
}

export function generateArticleSchema(article: ArticleData): WithContext<Article> {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${BASE_URL}/blogs/${article.id}/#article`,
    headline: article.title,
    description: article.excerpt,
    ...(article.featuredMedia?.type === "image" && {
      image: {
        "@type": "ImageObject",
        url: article.featuredMedia.url,
      },
    }),
    datePublished: article.createdAt,
    ...(article.updatedAt && { dateModified: article.updatedAt }),
    author: {
      "@type": "Person",
      name: article.author || "House Of Havana",
    },
    publisher: {
      "@type": "Organization",
      "@id": `${BASE_URL}/#organization`,
      name: "House Of Havana Barbershop",
      logo: {
        "@type": "ImageObject",
        url: `${BASE_URL}/logo.png`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${BASE_URL}/blogs/${article.id}`,
    },
    isPartOf: {
      "@id": `${BASE_URL}/#website`,
    },
  };
}
