import React from 'react';
import { FiPhoneCall, FiClipboard, FiRefreshCw, FiCheckSquare } from 'react-icons/fi';
import Container from '../ui/Container';

const steps = [
    {
        icon: FiPhoneCall,
        title: '1. Contact Us',
        description: 'Call our 24/7 hotline. We will gather initial details and dispatch a team immediately.',
    },
    {
        icon: FiClipboard,
        title: '2. Assessment',
        description: 'We inspect the damage, provide a free estimate, and outline the restoration plan.',
    },
    {
        icon: FiRefreshCw,
        title: '3. Restoration',
        description: 'Our certified techs work quickly to extract, dry, clean, and repair your property.',
    },
    {
        icon: FiCheckSquare,
        title: '4. Completion',
        description: 'We conduct a final walkthrough with you to ensure your complete satisfaction.',
    },
];

const Process = () => {
    return (
        <section className="py-20 bg-white">
            <Container>
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Simple 4-Step Process</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        We handle everything from the initial call to the final cleanup, making the restoration process as stress-free as possible.
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
