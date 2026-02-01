import { Metadata } from "next";
import { notFound } from "next/navigation";
import { mergeSEO } from "@/lib/seo";
import { getServiceBySlug } from "@/data/services";

type Props = {
  params: Promise<{ slug: string }>;
  children: React.ReactNode;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service?.page) {
    return {};
  }

  return mergeSEO({
    title: service.page.meta.title,
    description: service.page.meta.description,
    keywords: service.page.meta.keywords,
    canonical: `/services/${service.page.slug}`,
  });
}

export default function ServiceLayout({ children }: Props) {
  return <>{children}</>;
}
