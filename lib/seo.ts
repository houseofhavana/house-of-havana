/**
 * SEO Metadata Generator for Next.js
 *
 * Generates SEO metadata for Next.js pages:
 * - Basic: title, description, keywords
 * - Canonical URLs & Alternates
 * - Open Graph (Facebook, LinkedIn)
 * - Twitter Cards
 * - Robots & Google Bot directives
 *
 * @see https://nextjs.org/docs/app/api-reference/functions/generate-metadata
 */

import { Metadata } from 'next'

export interface SEOProps {
    // Basic metadata
    title: string
    description: string
    keywords?: string[]

    // Page specific
    canonical?: string
    alternates?: {
        canonical?: string
        languages?: Record<string, string>
        media?: Record<string, string>
        types?: Record<string, string>
    }

    // Open Graph
    openGraph?: {
        title?: string
        description?: string
        url?: string
        siteName?: string
        locale?: string
        type?: 'website' | 'article' | 'book' | 'profile' | 'music.song' | 'music.album' | 'music.playlist' | 'music.radio_station' | 'video.movie' | 'video.episode' | 'video.tv_show' | 'video.other'
        images?: Array<{
            url: string
            width?: number
            height?: number
            alt?: string
            type?: string
        }> | string
        publishedTime?: string
        modifiedTime?: string
        authors?: string[]
        section?: string
        tags?: string[]
    }

    // Twitter Card
    twitter?: {
        card?: 'summary' | 'summary_large_image' | 'app' | 'player'
        site?: string
        creator?: string
        title?: string
        description?: string
        images?: Array<{
            url: string
            alt?: string
        }> | string
    }

    // Robots
    robots?: {
        index?: boolean
        follow?: boolean
        nocache?: boolean
        googleBot?: {
            index?: boolean
            follow?: boolean
            noimageindex?: boolean
            'max-video-preview'?: number
            'max-image-preview'?: 'none' | 'standard' | 'large'
            'max-snippet'?: number
        }
    }
}

/**
 * Generate comprehensive SEO metadata for Next.js pages
 * @param props - SEO configuration options
 * @returns Metadata object for Next.js
 */
export function generateSEO(props: SEOProps): Metadata {
    const {
        title,
        description,
        keywords,
        canonical,
        alternates,
        openGraph,
        twitter,
        robots,
    } = props

    const metadata: Metadata = {
        title,
        description,
    }

    // Keywords
    if (keywords && keywords.length > 0) {
        metadata.keywords = keywords
    }

    // Alternates (canonical, languages, etc.)
    if (alternates) {
        metadata.alternates = alternates
    } else if (canonical) {
        metadata.alternates = {
            canonical,
        }
    }

    // Open Graph
    if (openGraph || canonical) {
        const ogUrl = openGraph?.url || (canonical ? `https://houseofhavana.ca${canonical}` : undefined)
        metadata.openGraph = {
            title: openGraph?.title || title,
            description: openGraph?.description || description,
            url: ogUrl,
            siteName: openGraph?.siteName || 'House Of Havana',
            locale: openGraph?.locale || 'en_CA',
            type: openGraph?.type || 'website',
            images: openGraph?.images,
            publishedTime: openGraph?.publishedTime,
            modifiedTime: openGraph?.modifiedTime,
            authors: openGraph?.authors,
            section: openGraph?.section,
            tags: openGraph?.tags,
        }
    }

    // Twitter
    if (twitter) {
        metadata.twitter = {
            card: twitter.card || 'summary_large_image',
            site: twitter.site,
            creator: twitter.creator,
            title: twitter.title || title,
            description: twitter.description || description,
            images: twitter.images,
        }
    }

    // Robots
    if (robots) {
        metadata.robots = robots
    }

    return metadata
}

/**
 * Default SEO configuration for House of Havana
 */
export const defaultSEO: Partial<SEOProps> = {
    openGraph: {
        siteName: 'House Of Havana',
        locale: 'en_CA',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
}

/**
 * Merge default SEO with page-specific SEO
 */
export function mergeSEO(pageSEO: SEOProps): Metadata {
    const mergedProps: SEOProps = {
        ...pageSEO,
        openGraph: {
            ...defaultSEO.openGraph,
            ...pageSEO.openGraph,
        },
        twitter: {
            ...defaultSEO.twitter,
            ...pageSEO.twitter,
        },
        robots: {
            ...defaultSEO.robots,
            ...pageSEO.robots,
        },
    }

    return generateSEO(mergedProps)
}
