import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Restoration Blog | Quick Response Restoration Tips & Advice',
    description: 'Expert advice on water damage restoration, mold remediation, and fire damage repair. Learn how to protect your home and business in Colorado Springs.',
};

export default function BlogLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
