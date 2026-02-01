"use client";

import { useEffect, useState } from "react";
// import { format } from "date-fns";

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
  const [blog, setBlog] = useState<BlogData | null>(null);

  useEffect(() => {
    setBlog(blogData);
  }, [blogData]);

  if (!blog) return null;

  return (
    <section className="relative w-full">
      {blog.featuredMedia?.type === "image" && (
        <div className="relative w-full h-[60vh] md:h-[80vh] overflow-hidden rounded-b-3xl shadow-lg">
          <img
            src={blog.featuredMedia.url}
            alt={blog.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
          <div className="absolute bottom-10 left-6 md:left-16 text-white">
            <h1 className="text-4xl md:text-6xl font-bold drop-shadow-lg">
              {blog.title}
            </h1>
            {blog.createdAt && (
              <p className="mt-2 text-sm md:text-base text-gray-200 drop-shadow">
                {new Date(blog.createdAt).toLocaleString()}
              </p>
            )}
            {blog.author && (
              <p className="mt-1 text-gray-300 text-sm">by {blog.author}</p>
            )}
          </div>
        </div>
      )}

      <div className="max-w-4xl mx-auto py-16 px-6 md:px-0 prose prose-lg md:prose-xl prose-invert prose-gray">
        <div dangerouslySetInnerHTML={{ __html: blog.content as string }} />
      </div>

      {blog.video?.type === "video" && (
        <div className="max-w-4xl mx-auto px-6 md:px-0 py-12">
          <video
            src={blog.video.url}
            autoPlay
            muted
            loop
            controls
            className="w-full rounded-xl shadow-lg"
          />
        </div>
      )}
    </section>
  );
};

export default Blog;
