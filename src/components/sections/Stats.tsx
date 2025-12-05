import React from 'react';
import { FiHome, FiClock, FiStar, FiUsers } from 'react-icons/fi';
import Container from '../ui/Container';

const stats = [
    {
        icon: FiHome,
        value: '10,000+',
        label: 'Properties Restored',
    },
    {
        icon: FiClock,
        value: '24/7',
        label: 'Emergency Availability',
    },
    {
        icon: FiStar,
        value: '4.9/5',
        label: 'Customer Rating',
    },
    {
        icon: FiUsers,
        value: '50+',
        label: 'Certified Experts',
    },
];

const Stats = () => {
    return (
        <section className="py-12 bg-primary/5 border-b border-gray-100">
            <Container>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        <div key={index} className="text-center group">
                            <div className="flex justify-center mb-4 text-primary opacity-80 group-hover:scale-110 transition-transform duration-300">
                                <stat.icon size={32} />
                            </div>
                            <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                                {stat.value}
                            </div>
                            <div className="text-sm md:text-base text-gray-600 font-medium uppercase tracking-wide">
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
};

export default Stats;
