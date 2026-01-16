import React from 'react';
import { FiClock, FiAward, FiShield, FiZap, FiCheckCircle } from 'react-icons/fi';
import { IconType } from 'react-icons';
import Container from '../ui/Container';

export interface FeatureItem {
    icon: IconType;
    title: string;
    description: string;
}

const defaultFeatures: FeatureItem[] = [
    {
        icon: FiClock,
        title: '24/7 Emergency Response',
        description: 'Disasters never come when they are supposed to. And our team is always ready 24/7, day or night, to respond to your water emergency in Seattle & Tacoma. Our technicians\' preparedness, quick dispatch system, and availability reduce damage and begin recovery at the time of most need.',
    },
    {
        icon: FiAward,
        title: 'Certified & Experienced Team',
        description: 'Our specialists are professionally certified and bring years of experience practicing methods to ensure accuracy and quality during your restoration project. Our technicians are prepared for anything, whatever aspect of damage restoration, our specialists ensure to restore your property to pre-loss condition.',
    },
    {
        icon: FiZap,
        title: 'Fast & Reliable Restoration',
        description: 'We know property damage often comes unexpectedly, and we always operate quickly without compromising quality. Our proven process allows our management team to comfortably and efficiently restore your home and/or business without sacrificing quality, both visible and invisible.',
    },
    {
        icon: FiShield,
        title: 'Insurance Claim Assistance',
        description: 'Working through insurance paperwork after or during an emergency restoration can feel overwhelming. Our team works with you every step of the way, from clearly documenting all damage for your future insurance restoration claim to communicating directly with your insurance issuer.',
    },
    {
        icon: FiCheckCircle,
        title: 'Safe & Eco-Friendly Solutions',
        description: 'We are committed to restoring property using safe methods for your family, employees, and the environment. All cleaning agents and equipment are selected based on their effectiveness and low environmental impact. Using such methods guarantees and delivers powerful results while ensuring your indoor space is healthier.',
    },
];

interface WhyChooseUsProps {
    title?: string;
    description?: string;
    features?: FeatureItem[];
    gridCols?: 2 | 3;
}

const WhyChooseUs = ({
    title = "What Makes Us Different?",
    description = "Choosing the right Restoration Company in Seattle & Tacoma can be the difference between a quick recovery and more extensive damage. At J&M Restoration Services, we are proud to be the team that homeowners and businesses rely on when a disaster strikes. Our skilled technicians' expertise in the process allows for the best results every time.",
    features = defaultFeatures,
    gridCols = 3
}: WhyChooseUsProps) => {
    return (
        <section id="why-us" className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-100 relative overflow-hidden">
            {/* Decorative Background Elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl -z-10"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10"></div>

            {/* Subtle Pattern Overlay */}
            <div className="absolute inset-0 opacity-[0.02]" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}></div>

            <Container className="relative z-10">
                {/* Header Section */}
                <div className="max-w-3xl mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">{title}</h2>
                    <p className="text-lg text-gray-600 leading-relaxed">
                        {description}
                    </p>
                </div>

                {/* Features Grid */}
                <div className={`grid grid-cols-1 md:grid-cols-2 ${gridCols === 3 ? 'lg:grid-cols-3' : 'lg:grid-cols-2'} gap-6`}>
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="group relative bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-2xl p-8 hover:shadow-2xl hover:border-secondary/30 transition-all duration-300 hover:-translate-y-1"
                        >
                            {/* Icon */}
                            <div className="mb-6">
                                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-secondary to-red-700 flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                                    <feature.icon size={32} />
                                </div>
                            </div>

                            {/* Content */}
                            <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-secondary transition-colors">
                                {feature.title}
                            </h3>
                            <p className="text-gray-600 leading-relaxed text-sm">
                                {feature.description}
                            </p>

                            {/* Decorative element */}
                            <div className="absolute top-0 right-0 w-20 h-20 bg-secondary/5 rounded-bl-full -z-10 group-hover:bg-secondary/10 transition-colors duration-300"></div>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
};

export default WhyChooseUs;
