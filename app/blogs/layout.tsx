import { mergeSEO } from "@/lib/seo";

export const metadata = mergeSEO({
  title: "Blog",
  description:
    "Read grooming tips, style advice, and updates from House Of Havana barbershop in Saskatoon.",
  keywords: [
    "barber blog saskatoon",
    "mens grooming tips",
    "haircut advice",
  ],
  canonical: "/blogs",
});

export default function BlogsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
