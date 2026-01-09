import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Professional Barbers House Of Havana Barber Shop Near Me",
  description: `Looking for a barber shop near me? House of Havana offers professional barbers, precision styling, and an elevated grooming experience.`,
};

export default function BarbersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
