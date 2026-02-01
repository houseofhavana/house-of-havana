import { baseUrl } from "@/lib/api";
import { Metadata } from "next";
import { Suspense } from "react";
import Blog from "./Blog";

async function getBlog(id: string) {
  const res = await fetch(`${baseUrl}/api/blogs/${id}`, { cache: "no-store" });
  if (!res.ok) return null;
  return res.json();
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const blog = await getBlog(id);

  if (!blog) {
    return {
      title: "Blog Not Found",
    };
  }


  return {
    title: `${blog.title} | Blog`,
    description: blog.excerpt || `Read ${blog.title} on the House Of Havana blog.`,
    alternates: {
      canonical: `/blogs/${id}`,
    },
    openGraph: {
      title: blog.title,
      description: blog.excerpt || `Read ${blog.title} on the House Of Havana blog.`,
      url: `${baseUrl}/blogs/${id}`,
      type: "article",
      images: blog.featuredMedia?.url
        ? [{ url: blog.featuredMedia.url, alt: blog.title }]
        : undefined,
    },
  };
}

const Page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  const data = await getBlog(id);

  if (!data) {
    throw new Error("Blog not found");
  }

  return (
    <Suspense fallback={<div className="text-center py-10">Loading...</div>}>
      <Blog blogData={data} />
    </Suspense>
  );
};

export default Page;
