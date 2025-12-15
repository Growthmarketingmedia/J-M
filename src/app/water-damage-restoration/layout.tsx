import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Professional Water Damage Restoration In Colorado Springs | Quick Response Restoration',
    description: 'Expert water damage restoration in Colorado Springs. Quick Response Restoration offers emergency cleanup, drying, repairs, and insurance support for homes and businesses.',
};

export default function WaterDamageLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
