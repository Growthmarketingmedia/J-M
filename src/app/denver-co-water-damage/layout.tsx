import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Water Damage Restoration Denver CO | Quick Response Restoration',
    description: 'Expert water damage restoration in Denver, CO. 24/7 emergency response, certified technicians, and comprehensive restoration services. Call now for immediate help!',
};

export default function DenverWaterDamageLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
