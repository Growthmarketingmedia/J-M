import React from 'react';
import { FiPhoneCall, FiClipboard, FiRefreshCw, FiCheckSquare } from 'react-icons/fi';
import Container from '../ui/Container';

const steps = [
    {
        icon: FiPhoneCall,
        title: '1. Emergency Response',
        description: 'Call us 24/7 at 206-502-7712. Our team responds immediately to assess the situation and contain water damage preventing further spread.',
    },
    {
        icon: FiClipboard,
        title: '2. Assessment & Extraction',
        description: 'We identify the source of the leak, assess the extent of damage, and immediately begin extracting standing water using commercial pumps.',
    },
    {
        icon: FiRefreshCw,
        title: '3. Drying & Dehumidification',
        description: 'We deploy industrial-grade air movers and dehumidifiers to thoroughly dry walls, carpets, and subfloors, monitoring moisture levels daily.',
    },
    {
        icon: FiCheckSquare,
        title: '4. Restoration',
        description: 'Once dry, we repair any structural damage, ensuring your property is fully restored to its pre-loss condition, clean and safe.',
    },
];

const Process = () => {
    return (
        <section className="py-20 bg-white">
            <Container>
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">How Our Process Works</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        At J&M Restoration Services, our approach is designed to make recovery as efficient and stress-free as possible. We follow a structured process that ensures every detail is addressed and your property is restored thoroughly from start to finish.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
                    {/* Connector Line (Desktop) */}
                    <div className="hidden lg:block absolute top-[60px] left-0 w-full h-0.5 bg-gray-200 -z-10" />

                    {steps.map((step, index) => (
                        <div key={index} className="flex flex-col items-center text-center group">
                            <div className="w-32 h-32 rounded-full bg-white border-4 border-gray-100 flex items-center justify-center mb-6 shadow-sm group-hover:border-primary transition-colors duration-300 relative z-10">
                                <div className="w-24 h-24 rounded-full bg-primary/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                                    <step.icon size={40} />
                                </div>
                                <div className="absolute top-0 right-0 w-8 h-8 bg-secondary rounded-full flex items-center justify-center text-white font-bold text-sm shadow-md">
                                    {index + 1}
                                </div>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                            <p className="text-gray-600 text-sm leading-relaxed px-4">
                                {step.description}
                            </p>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
};

export default Process;
