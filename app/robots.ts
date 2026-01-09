import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/private/",
    },
    sitemap: [
      "https://www.houseofhavana.ca/sitemap_index.xml",
      "https://www.houseofhavana.ca/sitemap.xml",
    ],
  };
}
