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
        description: 'Water damage occurs quickly, leading to structural damage and health risks. Our team will determine where the water is coming from, extract the standing water, and deploy the latest drying technology to remove the moisture. We follow this process with all secondary issues associated with water damage, such as odor and mold.',
        image: '/images/waterdamagerestoration.webp',
        link: '/water-damage-restoration',
    },
    {
        title: 'Fire & Smoke Damage Restoration',
        description: 'Fire damage is a long-lasting outcome; in addition to property damage, there are fire losses represented, such as smoke and residue. Our specialists will handle debris removal, extensive cleaning, odor neutralization, etc. We highlight hidden damage that soot and corrosion cause to a safe, clean, and structurally sound environment for habitation.',
        image: '/images/firedamagerestoration.webp',
        link: '/fire-damage-restoration',
    },
    {
        title: 'Mold Removal & Remediation',
        description: 'Unchecked mold can spread rapidly and cause long-term issues to your property and your health. Our certified specialists use best practice containment, removal, and remediation methods to effectively eliminate mold from its source. We will implement moisture control strategies to limit the likelihood of the mold returning.',
        image: '/images/mold.webp',
        link: '/mold-damage-restoration',
    },
    {
        title: 'Reconstruction & Structural Repairs',
        description: 'Structural repair often includes more than just cleanup. Our experienced construction team will repair or replace damaged areas to restore strength, safety, and aesthetic appeal to your property. From drywall, flooring to reconstruction, we will manage all areas of structural repair of the property.',
        image: '/images/waterdamagerestorationonwalls.webp',
        link: '/reconstruction-services',
    },
];

interface ServicesProps {
    title?: string;
    description?: string;
    services?: ServiceItem[];
}

const Services = ({
    title = "Our Restoration Services",
    description = "As a premier Property Restoration Specialist in Colorado Springs, we provide a complete range of solutions to restore your property quickly and efficiently. From flooding due to a broken pipe, mold after long-term moisture, and fire and smoke damage, we have the experience and proper equipment to provide the restoration needed.",
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
