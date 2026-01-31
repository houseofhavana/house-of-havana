import { mergeSEO } from "@/lib/seo";

export const metadata = mergeSEO({
  title: "Contact Us",
  description:
    "Contact House Of Havana barbershop in Saskatoon. Visit us at 3501 8 St, call 306-952-2255, or send us a message.",
  keywords: [
    "contact barber saskatoon",
    "house of havana location",
    "saskatoon barbershop hours",
  ],
  canonical: "/contact",
});

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
