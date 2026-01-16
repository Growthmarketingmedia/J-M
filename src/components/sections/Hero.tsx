import React from 'react';
import Image from 'next/image';
import { FiPhone, FiCheckCircle, FiCalendar } from 'react-icons/fi';
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
    title = <>Specialized Water Damage <br className="hidden md:block" /> <span>& Restoration Services</span></>,
    subtitle,
    backgroundImage = "/images/herosection.webp",
    description = "Water damage can result from various sources such as floods, plumbing leaks, storms, and appliance malfunctions. J&M Restoration Services provides reliable 24/7 emergency response to restore your property in Seattle & Tacoma.",
    secondaryButtonHref = "#contact"
}: HeroProps) => {
    return (
        <section className="relative flex items-center justify-center pt-48 pb-24">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src={backgroundImage}
                    alt="J&M Restoration Services"
                    fill
                    className="object-cover object-center brightness-[0.4]"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#272725]/80 via-transparent to-[#272725]/40" />
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
                        icon={FiCalendar}
                        href="https://book.housecallpro.com/book/JM-Carpet-Renewal/0ff6fe1ee579499786882b3af2ef02d0?v2=true"
                        className="w-full sm:w-auto text-lg px-8 py-4"
                    >
                        Book Now
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
