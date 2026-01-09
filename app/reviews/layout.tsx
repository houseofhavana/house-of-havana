import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "House Of Havana Clients Reviews Of Barber Shop In Saskatoon",
  description: `See why clients love House of Havana Saskatoon premier barber shop for expert cuts, refined grooming, and an exceptional luxury experience.`,
};

export default function ReviewsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
