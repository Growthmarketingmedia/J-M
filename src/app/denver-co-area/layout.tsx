import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Denver Property Restoration Services | Quick Response Restoration',
    description: 'Quick Response Restoration offers 24/7 property restoration services in Denver, CO. Expert water, fire, and mold damage restoration with fast response times.',
};

export default function DenverLocationLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
