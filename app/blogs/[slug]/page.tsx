import ArrowRight from "@/components/icons/ArrowRight";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/utils";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import Link from "next/link";

interface Post {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
  mainImage?: any;
  publishedAt: string;
  body: any;
  author?: {
    name: string;
    slug: {
      current: string;
    };
    image?: any;
  };
  categories?: Array<{
    title: string;
    slug: {
      current: string;
    };
  }>;
}

async function getPost(slug: string): Promise<Post | null> {
  const post = await client.fetch(
    `*[_type == "post" && slug.current == $slug][0] {
      _id,
      title,
      slug,
      mainImage,
      publishedAt,
      body,
      author->{
        name,
        slug,
        image
      },
      categories[]->{
        title,
        slug
      }
    }`,
    { slug },
    {
      next: { revalidate: 60 },
    }
  );
  return post;
}

export async function generateStaticParams() {
  const posts = await client.fetch(
    `*[_type == "post"] {
      "slug": slug.current
    }`
  );

  return posts.map((post: { slug: string }) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  const categoryTitles = post.categories?.map((cat) => cat.title).join(", ") || "";
  const description = `Read ${post.title} by ${post.author?.name || "House of Havana"}${categoryTitles ? ` in ${categoryTitles}` : ""}`;

  return {
    title: post.title,
    description,
    keywords: categoryTitles
      ? post.categories?.map((cat) => cat.title)
      : undefined,
    openGraph: {
      title: post.title,
      description,
      images: post.mainImage
        ? [urlFor(post.mainImage).width(1200).height(630).url()]
        : [],
    },
  };
}

// Custom components for PortableText rendering
const portableTextComponents = {
  types: {
    image: ({ value }: any) => {
      return (
        <div className="my-8">
          <Image
            src={urlFor(value).width(1200).url()}
            alt={value.alt || "Blog image"}
            width={1200}
            height={800}
            className="w-full h-auto object-cover"
          />
        </div>
      );
    },
  },
  marks: {
    link: ({ children, value }: any) => {
      return (
        <a
          href={value.href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-secondary hover:underline"
        >
          {children}
        </a>
      );
    },
  },
};

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) {
    return (
      <div className="min-h-screen pt-32 pb-16">
        <div className="container">
          <h1 className="heading-1">Post not found</h1>
        </div>
      </div>
    );
  }

  const formattedDate = post.publishedAt
    ? new Date(post.publishedAt).toLocaleDateString(undefined, {
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

            <h1 className="heading-1 !capitalize mb-6">{post.title}</h1>

            <div className="w-20 h-px bg-foreground/20 mb-6"></div>

            <div className="flex flex-col gap-2">
              {post.author && (
                <p className="text-foreground/50 text-sm">
                  Written by{" "}
                  <Link
                    href={`/blogs/authors/${post.author.slug.current}`}
                    className="text-foreground hover:text-secondary transition-colors"
                  >
                    {post.author.name}
                  </Link>
                </p>
              )}
              {post.categories && post.categories.length > 0 && (
                <p className="text-foreground/50 text-sm">
                  Categories:{" "}
                  {post.categories.map((category, index) => (
                    <span key={category.slug.current}>
                      <Link
                        href={`/blogs/categories/${category.slug.current}`}
                        className="text-foreground hover:text-secondary transition-colors"
                      >
                        {category.title}
                      </Link>
                      {index < post.categories!.length - 1 && ", "}
                    </span>
                  ))}
                </p>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      {post.mainImage && (
        <section className="bg-surface">
          <div className="container py-12">
            <div className="relative aspect-[21/9] overflow-hidden">
              <Image
                src={urlFor(post.mainImage).width(2000).url()}
                alt={post.mainImage.alt || post.title}
                fill
                className="object-cover"
                sizes="100vw"
                priority
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
            >
              <PortableText
                value={post.body}
                components={portableTextComponents}
              />
            </div>
          </div>
        </div>
      </section>

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
}
