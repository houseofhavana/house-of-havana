import HeroInner from "@/components/sections/HeroInner";
import BlogCard from "@/components/ui/blog-card";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/utils";

interface Author {
  _id: string;
  name: string;
  slug: {
    current: string;
  };
  image?: any;
  bio?: any;
}

interface Post {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
  mainImage?: any;
  publishedAt: string;
  author?: {
    name: string;
    slug: {
      current: string;
    };
  };
}

const POSTS_PER_PAGE = 9;

async function getAuthor(slug: string): Promise<Author | null> {
  const author = await client.fetch(
    `*[_type == "author" && slug.current == $slug][0] {
      _id,
      name,
      slug,
      image,
      bio
    }`,
    { slug },
    {
      next: { revalidate: 60 },
    }
  );
  return author;
}

async function getAuthorPosts(
  authorId: string,
  page: number = 1
): Promise<{ posts: Post[]; total: number }> {
  const start = (page - 1) * POSTS_PER_PAGE;
  const end = start + POSTS_PER_PAGE;

  const [posts, total] = await Promise.all([
    client.fetch(
      `*[_type == "post" && author._ref == $authorId] | order(publishedAt desc) [$start...$end] {
        _id,
        title,
        slug,
        mainImage,
        publishedAt,
        author->{
          name,
          slug
        }
      }`,
      { authorId, start, end },
      {
        next: { revalidate: 60 },
      }
    ),
    client.fetch(
      `count(*[_type == "post" && author._ref == $authorId])`,
      { authorId },
      {
        next: { revalidate: 60 },
      }
    ),
  ]);

  return { posts, total };
}

export async function generateStaticParams() {
  const authors = await client.fetch(
    `*[_type == "author"] {
      "slug": slug.current
    }`
  );

  return authors.map((author: { slug: string }) => ({
    slug: author.slug,
  }));
}

export async function generateMetadata({
  params,
  searchParams,
}: {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ page?: string }>;
}) {
  const { slug } = await params;
  const { page } = await searchParams;
  const author = await getAuthor(slug);

  if (!author) {
    return {
      title: "Author Not Found",
    };
  }

  const pageNum = page ? parseInt(page) : 1;
  const pageSuffix = pageNum > 1 ? ` - Page ${pageNum}` : "";
  const canonical = pageNum > 1
    ? `/blogs/authors/${slug}?page=${pageNum}`
    : `/blogs/authors/${slug}`;
  const title = `${author.name}${pageSuffix} - Author`;
  const description = `Read articles by ${author.name} at House of Havana${pageSuffix}`;
  const authorImageUrl = author.image
    ? urlFor(author.image).width(1200).height(630).url()
    : undefined;

  return {
    title,
    description,
    alternates: {
      canonical,
    },
    openGraph: {
      title,
      description,
      url: `https://houseofhavana.ca${canonical}`,
      images: authorImageUrl ? [authorImageUrl] : [],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: authorImageUrl ? [authorImageUrl] : undefined,
    },
  };
}

export default async function AuthorPage({
  params,
  searchParams,
}: {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ page?: string }>;
}) {
  const { slug } = await params;
  const { page } = await searchParams;
  const author = await getAuthor(slug);

  if (!author) {
    return (
      <div className="min-h-screen pt-32 pb-16">
        <div className="container">
          <h1 className="heading-1">Author not found</h1>
        </div>
      </div>
    );
  }

  const currentPage = page ? parseInt(page) : 1;
  const { posts, total } = await getAuthorPosts(author._id, currentPage);
  const totalPages = Math.ceil(total / POSTS_PER_PAGE);

  return (
    <>
      <HeroInner
        subheading="Author"
        title={author.name.toUpperCase()}
        supportingText={`Explore articles and insights from ${author.name}. Discover their expertise in grooming, style, and barbering.`}
      />

      {/* Author's Posts */}
      <section className="bg-surface py-20">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <BlogCard
                key={post._id}
                slug={post.slug.current}
                title={post.title}
                publishedAt={post.publishedAt}
                mainImage={post.mainImage}
                author={post.author}
                bgSurface={false}
              />
            ))}
          </div>

          {posts.length === 0 && (
            <div className="text-center py-20">
              <p className="text-foreground/50">
                No articles published yet by {author.name}.
              </p>
            </div>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="mt-12 flex items-center justify-center gap-4">
              {currentPage > 1 && (
                <a
                  href={`/blogs/authors/${slug}${currentPage - 1 > 1 ? `?page=${currentPage - 1}` : ""}`}
                  className="px-4 py-2 border border-foreground/20 hover:border-foreground/40 transition-colors text-foreground/70 hover:text-foreground"
                >
                  Previous
                </a>
              )}

              <div className="flex items-center gap-2">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                  (pageNum) => {
                    if (
                      pageNum === 1 ||
                      pageNum === totalPages ||
                      (pageNum >= currentPage - 1 && pageNum <= currentPage + 1)
                    ) {
                      return (
                        <a
                          key={pageNum}
                          href={`/blogs/authors/${slug}${pageNum > 1 ? `?page=${pageNum}` : ""}`}
                          className={`px-4 py-2 border transition-colors ${pageNum === currentPage
                            ? "border-foreground text-foreground bg-surface"
                            : "border-foreground/20 text-foreground/70 hover:border-foreground/40 hover:text-foreground"
                            }`}
                        >
                          {pageNum}
                        </a>
                      );
                    } else if (
                      pageNum === currentPage - 2 ||
                      pageNum === currentPage + 2
                    ) {
                      return (
                        <span
                          key={pageNum}
                          className="px-2 text-foreground/50"
                        >
                          ...
                        </span>
                      );
                    }
                    return null;
                  }
                )}
              </div>

              {currentPage < totalPages && (
                <a
                  href={`/blogs/authors/${slug}?page=${currentPage + 1}`}
                  className="px-4 py-2 border border-foreground/20 hover:border-foreground/40 transition-colors text-foreground/70 hover:text-foreground"
                >
                  Next
                </a>
              )}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
