"use client";

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
  categories?: Array<{
    title: string;
    slug: {
      current: string;
    };
  }>;
  bgSurface?: boolean;
}

const BlogCard: React.FC<BlogCardProps> = ({
  slug,
  title,
  publishedAt,
  mainImage,
  author,
  categories,
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

          {/* Category */}
          {categories && categories.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-3">
              {categories.map((category) => (
                <span
                  key={category.slug.current}
                  className="text-xs uppercase tracking-wider text-secondary border border-secondary/30 px-2 py-1"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    router.push(`/blogs/categories/${category.slug.current}`);
                  }}
                >
                  {category.title}
                </span>
              ))}
            </div>
          )}

          {/* Author */}
          {author && (
            <p className="text-sm text-foreground/50">
              by{" "}
              <span
                className="text-foreground hover:text-secondary transition-colors cursor-pointer"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  router.push(`/blogs/authors/${author.slug.current}`);
                }}
              >
                {author.name}
              </span>
            </p>
          )}
        </div>
      </article>
    </Link>
  );
};

export default BlogCard;
