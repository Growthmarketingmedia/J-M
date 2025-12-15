import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Professional Fire Damage Restoration in Colorado Springs | Quick Response Restoration',
    description: 'Expert fire damage restoration in Colorado Springs. Quick Response Restoration offers emergency board up, smoke cleanup, repairs, and insurance assistance for homes and businesses.',
};

export default function FireDamageLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
