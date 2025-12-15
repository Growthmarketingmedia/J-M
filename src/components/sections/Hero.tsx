import React from 'react';
import Image from 'next/image';
import { FiPhone, FiCheckCircle } from 'react-icons/fi';
import Button from '../ui/Button';
import Container from '../ui/Container';

interface HeroProps {
    title?: React.ReactNode;
    subtitle?: string;
    backgroundImage?: string;
    description?: string;
    secondaryButtonHref?: string;
}

const Hero = ({
    title = <>From Ruin to Restoration: <br className="hidden md:block" /> <span className="text-secondary">Professional Restoration Colorado Springs Services That Bring Properties Back to Life</span></>,
    subtitle,
    backgroundImage = "/images/herosection.webp",
    description = "In a disaster, every moment counts. Quick Response Restoration provides reliable 24-hour-a-day service to restore your property as fast as possible. As a premier Property Restoration Company in Colorado Springs, we deploy our expertise, state-of-the-art technology, and skilled professionals to manage any emergency with efficiency and compassion.",
    secondaryButtonHref = "#contact"
}: HeroProps) => {
    return (
        <section className="relative flex items-center justify-center pt-32 pb-20">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src={backgroundImage}
                    alt="Restoration Services"
                    fill
                    className="object-cover object-center brightness-[0.4]"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-gray-900/40" />
            </div>

            <Container className="relative z-10 text-center text-white">
                <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-[1.1] drop-shadow-md">
                    {title}
                </h1>

                <p className="text-xl md:text-2xl text-gray-200 mb-10 max-w-5xl mx-auto drop-shadow-sm font-light">
                    {description}
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
                    <Button
                        variant="secondary"
                        icon={FiPhone}
                        href="tel:+19152683375"
                        className="w-full sm:w-auto text-lg px-8 py-4"
                    >
                        Call Now: (915) 268-3375
                    </Button>
                    <Button
                        variant="outline"
                        href={secondaryButtonHref}
                        className="w-full sm:w-auto text-lg px-8 py-4"
                    >
                        Get Free Quote
                    </Button>
                </div>

                <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8 text-sm md:text-base font-medium text-gray-100">
                    <div className="flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full">
                        <FiCheckCircle className="text-success mr-2 text-xl" />
                        <span>24/7 Availability</span>
                    </div>
                    <div className="flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full">
                        <FiCheckCircle className="text-success mr-2 text-xl" />
                        <span>&lt;60 Min Response</span>
                    </div>
                    <div className="flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full">
                        <FiCheckCircle className="text-success mr-2 text-xl" />
                        <span>Certified Techs</span>
                    </div>
                    <div className="hidden md:flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full">
                        <FiCheckCircle className="text-success mr-2 text-xl" />
                        <span>Insurance Approved</span>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default Hero;
