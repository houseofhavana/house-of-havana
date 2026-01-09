import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Best Barbers In Saskatoon | Contact With House Of Havana",
  description: `Connect with House of Havana, leading barber shop in Saskatoon, offering masterful haircuts, modern grooming, and a distinguished luxury experience.`,
};

export default function ReviewsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
