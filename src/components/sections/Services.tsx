import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FiArrowRight } from 'react-icons/fi';
import Container from '../ui/Container';

export interface ServiceItem {
    title: string;
    description: string;
    image: string;
    link?: string;
}

const defaultServices: ServiceItem[] = [
    {
        title: 'Water Damage Restoration',
        description: 'Rapid water extraction, drying, and dehumidification to prevent structural damage and mold growth.',
        image: '/images/waterdamagerestoration.webp',
        link: '/services/water-damage',
    },
    {
        title: 'Fire Damage Repair',
        description: 'Comprehensive fire and smoke damage restoration, including soot removal and structural repairs.',
        image: '/images/firedamagerestoration.webp',
    },
    {
        title: 'Mold Remediation',
        description: 'Safe and effective mold inspection, testing, and removal to ensure healthy indoor air quality.',
        image: '/images/mold.webp',
    },
    {
        title: 'Flood Restoration',
        description: 'Emergency flood cleanup for basements and properties affected by storms or burst pipes.',
        image: '/images/waterdamagerestorationonwalls.webp',
    },
    {
        title: 'Storm Damage',
        description: 'Fast response for roof leaks, wind damage, and debris cleanup after severe weather.',
        image: '/images/stormdamage.webp',
    },
    {
        title: 'Emergency Services',
        description: '24/7 board-up, tarping, and stabilization services to secure your property immediately.',
        image: '/images/molddamageworkers.webp',
    },
];

interface ServicesProps {
    title?: string;
    description?: string;
    services?: ServiceItem[];
}

const Services = ({
    title = "Our Services",
    description = "We offer a full range of restoration services to help you recover from any disaster.",
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

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
