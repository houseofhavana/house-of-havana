import HeroInner from "@/components/sections/HeroInner";
import BlogCard from "@/components/ui/blog-card";
import { client } from "@/sanity/lib/client";

interface Category {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
  description?: string;
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

async function getCategory(slug: string): Promise<Category | null> {
  const category = await client.fetch(
    `*[_type == "category" && slug.current == $slug][0] {
      _id,
      title,
      slug,
      description
    }`,
    { slug },
    {
      next: { revalidate: 60 },
    }
  );
  return category;
}

async function getCategoryPosts(
  categoryId: string,
  page: number = 1
): Promise<{ posts: Post[]; total: number }> {
  const start = (page - 1) * POSTS_PER_PAGE;
  const end = start + POSTS_PER_PAGE;

  const [posts, total] = await Promise.all([
    client.fetch(
      `*[_type == "post" && $categoryId in categories[]._ref] | order(publishedAt desc) [$start...$end] {
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
      { categoryId, start, end },
      {
        next: { revalidate: 60 },
      }
    ),
    client.fetch(
      `count(*[_type == "post" && $categoryId in categories[]._ref])`,
      { categoryId },
      {
        next: { revalidate: 60 },
      }
    ),
  ]);

  return { posts, total };
}

export async function generateStaticParams() {
  const categories = await client.fetch(
    `*[_type == "category"] {
      "slug": slug.current
    }`
  );

  return categories.map((category: { slug: string }) => ({
    slug: category.slug,
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
  const category = await getCategory(slug);

  if (!category) {
    return {
      title: "Category Not Found",
    };
  }

  const pageNum = page ? parseInt(page) : 1;
  const pageSuffix = pageNum > 1 ? ` - Page ${pageNum}` : "";

  return {
    title: `${category.title}${pageSuffix} - Category`,
    description: category.description
      ? `${category.description}${pageSuffix}`
      : `Explore articles in ${category.title} category at House of Havana${pageSuffix}`,
    openGraph: {
      title: `${category.title}${pageSuffix} - Category`,
      description: category.description
        ? `${category.description}${pageSuffix}`
        : `Explore articles in ${category.title} category at House of Havana${pageSuffix}`,
    },
  };
}

export default async function CategoryPage({
  params,
  searchParams,
}: {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ page?: string }>;
}) {
  const { slug } = await params;
  const { page } = await searchParams;
  const category = await getCategory(slug);

  if (!category) {
    return (
      <div className="min-h-screen pt-32 pb-16">
        <div className="container">
          <h1 className="heading-1">Category not found</h1>
        </div>
      </div>
    );
  }

  const currentPage = page ? parseInt(page) : 1;
  const { posts, total } = await getCategoryPosts(category._id, currentPage);
  const totalPages = Math.ceil(total / POSTS_PER_PAGE);

  return (
    <>
      <HeroInner
        subheading="Category"
        title={category.title.toUpperCase()}
        supportingText={
          category.description ||
          `Explore articles and insights in ${category.title}. Discover expert content on grooming, style, and barbering.`
        }
      />

      {/* Category's Posts */}
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
                No articles published yet in {category.title}.
              </p>
            </div>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="mt-12 flex items-center justify-center gap-4">
              {currentPage > 1 && (
                <a
                  href={`/blogs/categories/${slug}${currentPage - 1 > 1 ? `?page=${currentPage - 1}` : ""}`}
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
                          href={`/blogs/categories/${slug}${pageNum > 1 ? `?page=${pageNum}` : ""}`}
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
                  href={`/blogs/categories/${slug}?page=${currentPage + 1}`}
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
