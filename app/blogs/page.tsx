import HeroInner from "@/components/sections/HeroInner";
import BlogCard from "@/components/ui/blog-card";
import { client } from "@/sanity/lib/client";

import { mergeSEO } from "@/lib/seo";

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
  categories?: Array<{
    title: string;
    slug: {
      current: string;
    };
  }>;
}

const POSTS_PER_PAGE = 9;

async function getPosts(page: number = 1): Promise<{ posts: Post[]; total: number }> {
  const start = (page - 1) * POSTS_PER_PAGE;
  const end = start + POSTS_PER_PAGE;

  const [posts, total] = await Promise.all([
    client.fetch(
      `*[_type == "post"] | order(publishedAt desc) [$start...$end] {
        _id,
        title,
        slug,
        mainImage,
        publishedAt,
        author->{
          name,
          slug
        },
        categories[]->{
          title,
          slug
        }
      }`,
      { start, end },
      {
        next: { revalidate: 60 },
      }
    ),
    client.fetch(
      `count(*[_type == "post"])`,
      {},
      {
        next: { revalidate: 60 },
      }
    ),
  ]);

  return { posts, total };
}

export async function generateMetadata({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>;
}) {
  const { page } = await searchParams;
  const pageNum = page ? parseInt(page) : 1;
  const pageSuffix = pageNum > 1 ? ` - Page ${pageNum}` : "";

  const canonical = pageNum > 1 ? `/blogs?page=${pageNum}` : "/blogs";

  return mergeSEO({
    title: `Blog${pageSuffix}`,
    description: `Read grooming tips, style advice, and updates from House Of Havana barbershop in Saskatoon.${pageSuffix}`,
    keywords: [
      "barber blog saskatoon",
      "mens grooming tips",
      "haircut advice",
    ],
    canonical,
    twitter: {
      card: "summary_large_image",
      title: `Blog${pageSuffix}`,
      description: `Read grooming tips, style advice, and updates from House Of Havana barbershop in Saskatoon.${pageSuffix}`,
    },
  });
}

export default async function BlogsPage({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>;
}) {
  const { page } = await searchParams;
  const currentPage = page ? parseInt(page) : 1;
  const { posts, total } = await getPosts(currentPage);
  const totalPages = Math.ceil(total / POSTS_PER_PAGE);

  return (
    <>
      <HeroInner
        subheading="Latest"
        title="ARTICLES"
        supportingText="Stay sharp with grooming tips, style advice, and updates from House of Havana. Your guide to looking and feeling your best."
      />

      <section className="bg-surface py-20">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.length > 0 &&
              posts.map((post) => (
                <BlogCard
                  key={post._id}
                  slug={post.slug.current}
                  title={post.title}
                  publishedAt={post.publishedAt}
                  mainImage={post.mainImage}
                  author={post.author}
                  categories={post.categories}
                  bgSurface={false}
                />
              ))}
          </div>

          {posts.length === 0 && (
            <div className="text-center py-20">
              <p className="text-foreground/50">No blog posts yet.</p>
            </div>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="mt-12 flex items-center justify-center gap-4">
              {currentPage > 1 && (
                <a
                  href={`/blogs${currentPage - 1 > 1 ? `?page=${currentPage - 1}` : ""}`}
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
                          href={`/blogs${pageNum > 1 ? `?page=${pageNum}` : ""}`}
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
                  href={`/blogs?page=${currentPage + 1}`}
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
