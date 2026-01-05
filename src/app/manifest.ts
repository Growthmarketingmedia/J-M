import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: 'Quick Response Restoration',
        short_name: 'Quick Response',
        description: 'Quick Response Restoration offers expert property restoration services in Colorado Springs, including water, fire, and mold damage recovery.',
        start_url: '/',
        display: 'standalone',
        background_color: '#ffffff',
        theme_color: '#1e40af',
        icons: [
            {
                src: '/icon.png',
                sizes: 'any',
                type: 'image/png',
            },
        ],
    };
}
