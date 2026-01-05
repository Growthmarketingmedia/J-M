import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Why Quick Response Matters: The Importance of 24/7 Water Damage Restoration',
    description: 'The importance of taking action quickly after a flooding event can mean the difference between saving your home from significant damage and providing for its total loss.',
};

export default function BlogPostLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
