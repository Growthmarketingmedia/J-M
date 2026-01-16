import { ImageResponse } from 'next/og';

export const runtime = 'edge';

// Image metadata
export const alt = 'J&M Restoration Services';
export const size = {
    width: 1200,
    height: 630,
};

export const contentType = 'image/png';

// Image generation
export default async function Image() {
    return new ImageResponse(
        (
            // ImageResponse JSX element
            <div
                style={{
                    fontSize: 70,
                    background: '#111827',
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#D4AF37',
                    flexDirection: 'column',
                    fontWeight: 800,
                    textAlign: 'center',
                    padding: '40px',
                    border: '10px solid #D4AF37',
                }}
            >
                <div style={{ marginBottom: 20 }}>J&M Restoration Services</div>
                <div style={{ fontSize: 35, opacity: 0.9, fontWeight: 400, color: 'white' }}>Seattle & Tacoma's Water Damage Experts</div>
            </div>
        ),
        // ImageResponse options
        {
            // For convenience, we can re-use the exported opengraph-image
            // size config to also set the ImageResponse's width and height.
            ...size,
        }
    );
}
