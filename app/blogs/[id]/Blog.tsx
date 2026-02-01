"use client";

import ArrowRight from "@/components/icons/ArrowRight";
import Image from "next/image";
import Link from "next/link";

interface Media {
  url: string;
  publicId: string;
  type: "image" | "video";
}

interface BlogData {
  featuredMedia?: Media;
  video?: Media | null;
  title?: string;
  createdAt?: string;
  content?: string;
  author?: string;
}

const Blog = ({ blogData }: { blogData: BlogData }) => {
  if (!blogData) return null;

  const formattedDate = blogData.createdAt
    ? new Date(blogData.createdAt).toLocaleDateString(undefined, {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
    : null;

  return (
    <article className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-background">
        <div className="container">

          {/* Header */}
          <div className="max-w-4xl">
            {formattedDate && (
              <span className="heading-6-italic text-foreground/50 block mb-4">
                {formattedDate}
              </span>
            )}

            <h1 className="heading-1 !capitalize mb-6">{blogData.title}</h1>

            <div className="w-20 h-px bg-foreground/20 mb-6"></div>

            {blogData.author && (
              <p className="text-foreground/50 text-sm uppercase tracking-wider">
                Written by{" "}
                <span className="text-foreground">{blogData.author}</span>
              </p>
            )}
          </div>
        </div>
      </section>

      {/* Featured Image */}
      {blogData.featuredMedia?.type === "image" && (
        <section className="bg-surface">
          <div className="container py-12">
            <div className="relative aspect-[21/9] overflow-hidden">
              <Image
                src={blogData.featuredMedia.url}
                alt={blogData.title || "Blog featured image"}
                fill
                className="object-cover"
                sizes="100vw"
                priority
              />
            </div>
          </div>
        </section>
      )}

      {/* Featured Video (if video is the featured media) */}
      {blogData.featuredMedia?.type === "video" && (
        <section className="bg-surface">
          <div className="container py-12">
            <div className="relative aspect-video overflow-hidden">
              <video
                src={blogData.featuredMedia.url}
                autoPlay
                muted
                loop
                playsInline
                controls
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>
      )}

      {/* Content */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div
              className="blog-content prose prose-lg prose-invert
                prose-headings:font-heading prose-headings:text-foreground prose-headings:font-normal
                prose-h1:text-4xl prose-h1:mb-8 prose-h1:mt-12
                prose-h2:text-3xl prose-h2:mb-6 prose-h2:mt-10
                prose-h3:text-2xl prose-h3:mb-4 prose-h3:mt-8
                prose-h4:text-xl prose-h4:mb-4 prose-h4:mt-6
                prose-p:text-foreground/70 prose-p:leading-relaxed prose-p:mb-6
                prose-a:text-secondary prose-a:no-underline hover:prose-a:underline
                prose-strong:text-foreground prose-strong:font-medium
                prose-blockquote:border-l-2 prose-blockquote:border-secondary prose-blockquote:pl-6 prose-blockquote:italic prose-blockquote:text-foreground/60
                prose-ul:text-foreground/70 prose-ol:text-foreground/70
                prose-li:mb-2
                prose-img:my-8
                max-w-none"
              dangerouslySetInnerHTML={{ __html: blogData.content as string }}
            />
          </div>
        </div>
      </section>

      {/* Additional Video */}
      {blogData.video?.type === "video" && (
        <section className="py-16 bg-surface">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h3 className="heading-5-italic text-foreground/50 mb-4">
                Watch
              </h3>
              <h2 className="heading-3 mb-8">VIDEO</h2>
              <div className="relative aspect-video overflow-hidden">
                <video
                  src={blogData.video.url}
                  autoPlay
                  muted
                  loop
                  controls
                  playsInline
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Footer CTA */}
      <section className="py-20 bg-surface border-t border-foreground/10">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="heading-5-italic text-foreground/50 mb-2">
              Explore More
            </h3>
            <h2 className="heading-2 mb-8">ARTICLES</h2>
            <Link
              href="/blogs"
              className="inline-flex items-center gap-3 text-foreground hover:text-secondary transition-colors group"
            >
              <span className="text-sm uppercase tracking-wider">
                View All Articles
              </span>
              <ArrowRight className="w-4 h-4 stroke-foreground group-hover:stroke-secondary group-hover:translate-x-1 transition-all" />
            </Link>
          </div>
        </div>
      </section>
    </article>
  );
};

export default Blog;
