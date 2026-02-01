import { baseUrl } from "@/lib/api";
import { generateArticleSchema, jsonLd } from "@/lib/schema";
import { Metadata } from "next";
import Script from "next/script";
import { Suspense } from "react";
import Blog from "./Blog";

interface Media {
  url: string;
  publicId: string;
  type: "image" | "video";
}

interface BlogResponse {
  _id: string;
  title: string;
  excerpt?: string;
  content?: string;
  author?: string;
  createdAt?: string;
  updatedAt?: string;
  featuredMedia?: Media;
  video?: Media | null;
}

async function getBlog(id: string): Promise<BlogResponse | null> {
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
    title: `${blog.title} | Blog | House Of Havana`,
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

  const articleSchema = generateArticleSchema({
    id,
    title: data.title,
    excerpt: data.excerpt,
    content: data.content,
    author: data.author,
    createdAt: data.createdAt,
    updatedAt: data.updatedAt,
    featuredMedia: data.featuredMedia,
  });

  return (
    <>
      {/* Article Schema */}
      <Script
        id="article-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd(articleSchema) }}
      />

      <Suspense fallback={<div className="text-center py-10">Loading...</div>}>
        <Blog blogData={data} />
      </Suspense>
    </>
  );
};

export default Page;
