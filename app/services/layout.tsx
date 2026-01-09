import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Top Rated Barber Shop In Saskatoon Canada - House Of Havana",
  description: `House of Havana is Saskatoon’s top-rated barber shop, offering precision cuts, expert grooming, and a premium experience tailored to your style.`,
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
