import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://jmrestorationservices.com'; // Replace with actual domain when available

    const routes = [
        '',
        '/contact-us',
        '/water-damage-restoration',
        '/fire-damage-restoration',
        '/mold-damage-restoration',
        '/reconstruction-services',
    ];

    return routes.map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: route === '' ? 1 : 0.8,
    }));
}
