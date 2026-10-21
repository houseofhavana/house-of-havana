import HeroInner from '@/components/sections/HeroInner';
import { getServicesWithPages } from '@/data/services';
import { mergeSEO } from '@/lib/seo';
import { client } from '@/sanity/lib/client';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

export const revalidate = 300;

export const metadata = mergeSEO({
  title: 'Sitemap | House of Havana Barbershop',
  description: 'Find your way around House of Havana. Explore our Saskatoon barbershop, grooming services, team, and articles, or book your next visit.',
  canonical: '/sitemap',
});

type SitemapLink = { label: string; href: string };
type Document = { _type: 'post' | 'author' | 'category'; label: string; slug: string };

export default async function SitemapPage() {
  const documents = await client.fetch<Document[]>(
    `*[_type in ["post", "author", "category"] && defined(slug.current)]
      | order(title asc, name asc) {
        _type, "label": coalesce(title, name), "slug": slug.current
      }`,
    {},
    { perspective: 'published', next: { revalidate: 300 } },
  );

  const sections: { title: string; links: SitemapLink[] }[] = [
    {
      title: 'Explore the House',
      links: [
        { label: 'Home', href: '/' },
        { label: 'Our Story', href: '/about' },
        { label: 'Meet Our Barbers', href: '/barbers' },
        { label: 'Gallery', href: '/gallery' },
        { label: 'Client Reviews', href: '/reviews' },
        { label: 'Contact & Location', href: '/contact' },
        { label: 'Book Your Experience', href: '/book' },
        { label: 'Cocktail Bar', href: '/drinks' },
      ],
    },
    {
      title: 'Grooming Services',
      links: [
        { label: 'All Services & Prices', href: '/services' },
        ...getServicesWithPages().map(({ page }) => ({
          label: page!.cardTitle,
          href: `/services/${page!.slug}`,
        })),
      ],
    },
    {
      title: 'Grooming Journal',
      links: [
        { label: 'All Articles', href: '/blogs' },
        ...documents.filter((doc) => doc._type === 'post').map((doc) => ({
          label: doc.label,
          href: `/blogs/${encodeURIComponent(doc.slug)}`,
        })),
      ],
    },
    ...([
      ['category', 'Article Categories', '/blogs/categories/'],
      ['author', 'Our Authors', '/blogs/authors/'],
    ] as const).map(([type, title, prefix]) => ({
      title,
      links: documents.filter((doc) => doc._type === type).map((doc) => ({
        label: doc.label,
        href: `${prefix}${encodeURIComponent(doc.slug)}`,
      })),
    })),
    {
      title: 'Helpful Information',
      links: [
        { label: 'Privacy Policy', href: '/privacy-policy' },
        { label: 'Terms of Use', href: '/terms-of-use' },
      ],
    },
  ];

  return (
    <>
      <HeroInner
        subheading="Find your way"
        title="THE HOUSE MAP"
        supportingText="Looking for a service, your next barber, or a little inspiration? Everything is right here."
      />
      <nav aria-label="Website sitemap" className="bg-surface py-16 md:py-24">
        <div className="container grid grid-cols-1 gap-x-12 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
          {sections.filter((section) => section.links.length > 0).map((section) => (
            <section key={section.title}>
              <h2 className="heading-5 mb-5 border-b border-foreground/15 pb-5">{section.title}</h2>
              <ul className="space-y-1">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="group flex items-start justify-between gap-4 py-3 text-foreground/70 transition-colors hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
                    >
                      <span>{link.label}</span>
                      <ArrowUpRight aria-hidden="true" className="mt-1 h-4 w-4 shrink-0 opacity-50 transition-opacity group-hover:opacity-100" />
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </nav>
    </>
  );
}
