/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: 'https://houseofhavana.ca',
    generateRobotsTxt: true,
    exclude: ['/studio', '/studio/*', '/api/*'],
    // Only CMS documents have reliable modification dates.
    autoLastmod: false,
    robotsTxtOptions: {
        policies: [{ userAgent: '*', allow: '/', disallow: ['/studio', '/api/'] }],
    },
    // Author and category pages are rendered on demand, so they are not
    // necessarily present in Next.js's build manifest.
    additionalPaths: async () => {
        const { createClient } = require('@sanity/client');
        const client = createClient({
            projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'n6x2l43n',
            dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
            apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2026-02-03',
            useCdn: false,
            perspective: 'published',
        });
        const documents = await client.fetch(`
            *[_type in ["post", "author", "category"] && defined(slug.current)] {
                _type, "slug": slug.current, _updatedAt
            }
        `);
        const prefixes = {
            post: '/blogs/',
            author: '/blogs/authors/',
            category: '/blogs/categories/',
        };
        return documents.map((document) => ({
            loc: prefixes[document._type] + encodeURIComponent(document.slug),
            lastmod: document._updatedAt,
            changefreq: 'weekly',
            priority: 0.7,
        }));
    },
}
