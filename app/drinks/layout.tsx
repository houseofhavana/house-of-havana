import { mergeSEO } from "@/lib/seo";

export const metadata = mergeSEO({
  title: "Drinks Menu | House of Havana",
  description: "Explore the drinks menu at House of Havana Barbershop in Saskatoon.",
  canonical: "/drinks",
});

export default function DrinksLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
