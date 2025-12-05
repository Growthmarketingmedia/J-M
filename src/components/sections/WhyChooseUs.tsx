import React from 'react';
import { FiClock, FiAward, FiShield, FiTool } from 'react-icons/fi';
import Container from '../ui/Container';

const features = [
    {
        icon: FiClock,
        title: '24/7 Emergency Response',
        description: 'Disasters dont wait for business hours. Neither do we. Our team is ready to respond day or night, arriving within 60 minutes.',
    },
    {
        icon: FiAward,
        title: 'IICRC Certified Technicians',
        description: 'Our team is highly trained and certified by the Institute of Inspection, Cleaning and Restoration Certification.',
    },
    {
        icon: FiShield,
        title: 'Insurance Claims Assistance',
        description: 'We work directly with all major insurance companies to streamline the claims process and ensure you get the coverage you deserve.',
    },
    {
        icon: FiTool,
        title: 'Advanced Equipment',
        description: 'We use industrial-grade water extractors, dehumidifiers, and thermal imaging technology for superior restoration results.',
    },
];

const WhyChooseUs = () => {
    return (
        <section id="why-us" className="py-20 bg-gray-900 text-white">
            <Container>
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Restoration Pro?</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        When disaster strikes, you need a partner you can trust. Here is what sets us apart from the competition.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                    {features.map((feature, index) => (
                        <div key={index} className="flex items-start p-6 rounded-xl hover:bg-gray-800 transition-colors duration-300">
                            <div className="flex-shrink-0 mr-6">
                                <div className="w-14 h-14 rounded-full bg-secondary/20 flex items-center justify-center text-secondary">
                                    <feature.icon size={28} />
                                </div>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                                <p className="text-gray-400 leading-relaxed">
                                    {feature.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
};

export default WhyChooseUs;
