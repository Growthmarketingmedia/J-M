import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Expert Mold Removal Denver, CO | Quick Response Restoration',
    description: 'Quick Response Restoration offers expert Mold Removal Services Denver. Trust our certified team for fast, safe, and thorough Mold Remediation Denver solutions.',
};

export default function MoldRemediationLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
