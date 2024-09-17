import type { Metadata } from 'next'

type PageMetadataProps = {
    title?: string;
    description?: string;
    pagePath?: string;
}

export function getPageMetadata({
    title = 'Vanderpump Tech',
    description = 'Bespoke Web & App Development Solutions',
    pagePath = ''
}: PageMetadataProps = {}): Metadata {
    const fullTitle = `${title} | Vanderpump Tech`;
    const fullDescription = description || 'Vanderpump Tech offers personal, fast, and cost-effective web and app development services. Get tailored solutions that bring your vision to life and meet your business objectives.';
    const url = `https://vanderpump.tech${pagePath}`;

    return {
        title: fullTitle,
        description: fullDescription,
        keywords: ['web development', 'app development', 'bespoke solutions', 'fast delivery', 'cost-effective', 'personal service'],
        openGraph: {
            title: fullTitle,
            description: fullDescription,
            url,
            siteName: 'Vanderpump Tech',
            // images: [
            //     {
            //         url: 'https://vanderpump.tech/og-image.jpg',
            //         width: 1200,
            //         height: 630,
            //         alt: 'Vanderpump Tech - Bespoke Web & App Development',
            //     },
            // ],
            locale: 'en_US',
            type: 'website',
        },
        twitter: {
            card: 'summary_large_image',
            title: fullTitle,
            description: fullDescription,
            creator: '@jackvanderpump',
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
        viewport: {
            width: 'device-width',
            initialScale: 1,
            maximumScale: 1,
        },
        icons: {
            icon: '/favicon.ico',
            // apple: '/apple-icon.png',
        },
    }
}