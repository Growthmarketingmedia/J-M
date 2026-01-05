import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Professional Reconstruction Services in Colorado Springs | Quick Response Restoration',
    description: 'Quick Response Restoration offers expert reconstruction services in Colorado Springs. Licensed contractors rebuild homes and businesses with safety, quality, and lasting results.',
};

export default function ReconstructionLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
