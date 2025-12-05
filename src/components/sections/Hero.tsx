import React from 'react';
import Image from 'next/image';
import { FiPhone, FiCheckCircle } from 'react-icons/fi';
import Button from '../ui/Button';
import Container from '../ui/Container';

const Hero = () => {
    return (
        <section className="relative h-[90vh] min-h-[600px] flex items-center justify-center pt-20">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/herosection.webp"
                    alt="Restoration Services"
                    fill
                    className="object-cover object-center brightness-[0.4]"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-gray-900/40" />
            </div>

            <Container className="relative z-10 text-center text-white pb-16">
                <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight drop-shadow-md">
                    Restoration Services in New York <br className="hidden md:block" />
                    <span className="text-secondary">24/7 Emergency Response</span>
                </h1>

                <p className="text-xl md:text-2xl text-gray-200 mb-10 max-w-3xl mx-auto drop-shadow-sm font-light">
                    We restore your property and peace of mind. Professional water, fire, and mold remediation services available when you need them most.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
                    <Button
                        variant="secondary"
                        icon={FiPhone}
                        href="tel:+15551234567"
                        className="w-full sm:w-auto text-lg px-8 py-4"
                    >
                        Call Now: (555) 123-4567
                    </Button>
                    <Button
                        variant="outline"
                        href="#contact"
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
