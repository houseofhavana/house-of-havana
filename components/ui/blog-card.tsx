"use client";

import ArrowRight from "@/components/icons/ArrowRight";
import { urlFor } from "@/sanity/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface BlogCardProps {
  slug: string;
  title: string;
  publishedAt: string;
  mainImage?: any;
  author?: {
    name: string;
    slug: {
      current: string;
    };
  };
  bgSurface?: boolean;
}

const BlogCard: React.FC<BlogCardProps> = ({
  slug,
  title,
  publishedAt,
  mainImage,
  author,
  bgSurface = true,
}) => {
  const router = useRouter();

  const formattedDate = new Date(publishedAt).toLocaleDateString(undefined, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <Link href={`/blogs/${slug}`} className="block group">
      <article className="flex flex-col h-full">
        {/* Image */}
        <div
          className={`${bgSurface ? "bg-surface" : "bg-background"} relative aspect-[4/3] overflow-hidden mb-6`}
        >
          {mainImage && (
            <Image
              src={urlFor(mainImage).width(800).height(600).url()}
              alt={mainImage.alt || title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          )}
          {!mainImage && (
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-foreground/20 text-sm uppercase tracking-wider">
                No Image
              </span>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="flex flex-col flex-1">
          {/* Date */}
          <span className="heading-6-italic text-foreground/50 mb-3">
            {formattedDate}
          </span>

          {/* Divider */}
          <hr className="border-foreground/10 mb-4" />

          {/* Title */}
          <h3 className="heading-4 !capitalize text-foreground mb-4 group-hover:text-secondary transition-colors">
            {title}
          </h3>

          {/* Author */}
          {author && (
            <p className="text-sm text-foreground/50 mb-2">
              by{" "}
              <span
                className="text-foreground hover:text-secondary transition-colors cursor-pointer"
                onClick={(e) => {
                  e.stopPropagation();
                  router.push(`/blogs/authors/${author.slug.current}`);
                }}
              >
                {author.name}
              </span>
            </p>
          )}

          {/* Spacer */}
          <div className="flex-1" />

          {/* Read More Link */}
          <div className="flex items-center justify-between border-t border-foreground/10 pt-4 mt-4">
            <span className="text-sm uppercase tracking-wider text-foreground/70 group-hover:text-foreground transition-colors">
              Read Article
            </span>
            <ArrowRight className="w-4 h-4 stroke-foreground/70 group-hover:stroke-foreground group-hover:translate-x-1 transition-all" />
          </div>
        </div>
      </article>
    </Link>
  );
};

export default BlogCard;
