import Link from "next/link";
import parse from "html-react-parser";
import article from "@/data/haircut-cost-article.json";
import { getHaircutCostArticleHtml } from "@/lib/haircut-cost-article";
import { mergeSEO } from "@/lib/seo";

const url = `https://houseofhavana.ca/blogs/${article.slug}`;
export const metadata = mergeSEO({
  title: "Average Haircut Cost in Canada (2026) | House of Havana",
  description: article.description,
  canonical: `/blogs/${article.slug}`,
  openGraph: { type: "article", title: article.title, description: article.description, url, publishedTime: article.publishedAt },
});

export default function HaircutCostArticle() {
  const schema = {
    "@context": "https://schema.org", "@type": "BlogPosting",
    headline: article.title, description: article.description,
    datePublished: article.publishedAt,
    author: { "@type": "Organization", name: "House of Havana Barbershop", url: "https://houseofhavana.ca" },
    publisher: { "@type": "Organization", name: "House of Havana Barbershop", url: "https://houseofhavana.ca" },
    mainEntityOfPage: url,
  };
  return (
    <article className="min-h-screen bg-background">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />
      <header className="container pt-32 pb-12">
        <div className="max-w-4xl">
          <Link href="/blogs" className="text-secondary hover:underline">Grooming Journal</Link>
          <p className="mt-6 mb-4 text-foreground/60"><time dateTime={article.publishedAt}>October 25, 2026</time></p>
          <h1 className="heading-1 !capitalize">{article.title}</h1>
        </div>
      </header>
      <section className="container pb-20">
        <div className="blog-content prose prose-lg prose-invert max-w-3xl mx-auto prose-headings:font-heading prose-headings:text-foreground prose-headings:font-normal prose-h2:text-3xl prose-h2:mt-10 prose-h3:text-2xl prose-p:text-foreground/70 prose-p:leading-relaxed prose-a:text-secondary prose-strong:text-foreground prose-ul:text-foreground/70 prose-th:text-foreground prose-td:text-foreground/70">
          {parse(getHaircutCostArticleHtml())}
        </div>
        <div className="max-w-3xl mx-auto mt-12 border-t border-foreground/15 pt-8">
          <Link href="/blogs" className="text-secondary hover:underline">Explore more articles</Link>
        </div>
      </section>
    </article>
  );
}
