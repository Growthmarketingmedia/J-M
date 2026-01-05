import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://quickresponserestoration.com'; // Replace with actual domain

    const routes = [
        '',
        '/albuquerque-santafe',
        '/colorado-springs',
        '/contact-us',
        '/denver',
        '/denver-co-area',
        '/denver-co-water-damage',
        '/fire-damage-restoration',
        '/mold-damage-restoration',
        '/our-blog',
        '/pueblo',
        '/reconstruction-services',
        '/water-damage-restoration',
        // Blog posts
        '/f/why-quick-response-matters-the-importance-of-247-water-damage-r',
    ];

    return routes.map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: route === '' ? 1 : 0.8,
    }));
}
