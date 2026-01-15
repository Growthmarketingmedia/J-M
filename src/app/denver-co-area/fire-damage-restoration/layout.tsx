import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Fire Damage Restoration Denver CO | Quick Response Restoration',
    description: 'Quick Response Restoration offers expert fire damage restoration in Denver, CO, and Denver smoke damage cleanup. 24/7 emergency service restores homes and businesses efficiently.',
};

export default function FireDamageLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
