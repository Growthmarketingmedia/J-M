import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Contact Us | Quick Response Restoration',
    description: '24/7 emergency restoration services. Contact Quick Response Restoration for immediate help with water, fire, or mold damage in Colorado Springs and Denver.',
};

export default function ContactUsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
