import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: 'J&M Restoration Services',
        short_name: 'J&M Restoration',
        description: 'J&M Restoration Services offers expert property restoration services in Seattle & Tacoma, including water, fire, and mold damage recovery.',
        start_url: '/',
        display: 'standalone',
        background_color: '#ffffff',
        theme_color: '#D4AF37',
        icons: [
            {
                src: '/icon.png',
                sizes: 'any',
                type: 'image/png',
            },
        ],
    };
}
