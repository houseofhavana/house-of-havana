import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "House Of Havana Men's Grooming And Hair Cuts In Saskatoon",
  description:
    "House of Havana provides professional men’s haircuts and grooming in Saskatoon, combining expert barbering with a luxury, tailored experience.",
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
