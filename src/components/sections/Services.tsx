import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FiArrowRight, FiDroplet, FiWind, FiTrash2, FiHome } from 'react-icons/fi';
import Container from '../ui/Container';

export interface ServiceItem {
    title: string;
    description: string;
    image: string;
    link?: string;
}

const defaultServices: ServiceItem[] = [
    {
        title: 'Water Extraction & Cleanup',
        description: 'Immediate removal of standing water using industrial-grade pumps and vacuums to prevent further damage to flooring and structural elements.',
        image: '/images/water/water-damage-restoration-1.png',
        link: '#services',
    },
    {
        title: 'Structural Drying',
        description: 'Advanced drying techniques using dehumidifiers and air movers to eliminate moisture from walls, floors, and hard-to-reach areas.',
        image: '/images/water/water-damage-restoration-2.png',
        link: '#services',
    },
    {
        title: 'Sewage Cleanup',
        description: 'Safe and sanitary removal of biohazardous sewage water, followed by thorough disinfection and deodorization of the affected area.',
        image: '/images/water/water-damage-restoration-3.png',
        link: '#services',
    },
    {
        title: 'Flood Damage Repair',
        description: 'Comprehensive restoration services for storm and flood damage, restoring your property from the ground up to its pre-loss condition.',
        image: '/images/water/water-damage-restoration-6.png',
        link: '#services',
    },
];

interface ServicesProps {
    title?: string;
    description?: string;
    services?: ServiceItem[];
}

const Services = ({
    title = "Our Water Damage Restoration Services",
    description = "As a premier Water Damage Restoration Specialist in Seattle & Tacoma, we provide a complete range of solutions to restore your property quickly and efficiently. From flooding due to a broken pipe to sewage backup, we have the experience and proper equipment to handle any water emergency.",
    services = defaultServices
}: ServicesProps) => {
    return (
        <section id="services" className="py-20 bg-gray-50">
            <Container>
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">{title}</h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        {description}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 flex flex-col h-full"
                        >
                            <div className="relative h-48 w-full overflow-hidden">
                                <Image
                                    src={service.image}
                                    alt={service.title}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-colors duration-300" />
                            </div>
                            <div className="p-8 flex flex-col flex-grow">
                                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">
                                    {service.title}
                                </h3>
                                <p className="text-gray-600 mb-6 flex-grow">
                                    {service.description}
                                </p>
                                <Link
                                    href={service.link || "#contact"}
                                    className="inline-flex items-center font-semibold text-secondary hover:text-orange-700 transition-colors"
                                >
                                    Learn More <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
};

export default Services;
