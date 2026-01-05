import { ImageResponse } from 'next/og';

export const runtime = 'edge';

// Image metadata
export const alt = 'Quick Response Restoration';
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
                    fontSize: 60,
                    background: 'linear-gradient(to bottom right, #1e40af, #d60909)',
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    flexDirection: 'column',
                    fontWeight: 800,
                    textAlign: 'center',
                    padding: '40px',
                }}
            >
                <div style={{ marginBottom: 20 }}>Quick Response Restoration</div>
                <div style={{ fontSize: 30, opacity: 0.8, fontWeight: 400 }}>Water • Fire • Mold</div>
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
