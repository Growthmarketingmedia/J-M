import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Expert Mold Removal in Colorado Springs | Quick Response Restoration',
    description: 'Quick Response Restoration offers expert Mold Removal Colorado Springs services. Certified specialists provide inspection, safe removal, air purification, and prevention for lasting protection.',
};

export default function MoldRemediationLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
