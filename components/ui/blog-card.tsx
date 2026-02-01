"use client";

import ArrowRight from "@/components/icons/ArrowRight";
import Image from "next/image";
import Link from "next/link";

interface BlogCardProps {
  id: string;
  title: string;
  createdAt: string;
  featuredMedia?: {
    url: string;
    publicId: string;
    type: "image" | "video";
  };
  bgSurface?: boolean;
}

const BlogCard: React.FC<BlogCardProps> = ({
  id,
  title,
  createdAt,
  featuredMedia,
  bgSurface = true,
}) => {
  const formattedDate = new Date(createdAt).toLocaleDateString(undefined, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <Link href={`/blogs/${id}`} className="block group">
      <article className="flex flex-col h-full">
        {/* Image */}
        <div
          className={`${bgSurface ? "bg-surface" : "bg-background"} relative aspect-[4/3] overflow-hidden mb-6`}
        >
          {featuredMedia?.type === "image" && (
            <Image
              src={featuredMedia.url}
              alt={title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          )}
          {featuredMedia?.type === "video" && (
            <video
              src={featuredMedia.url}
              className="absolute inset-0 w-full h-full object-cover"
              muted
              loop
              autoPlay
              playsInline
            />
          )}
          {!featuredMedia && (
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
