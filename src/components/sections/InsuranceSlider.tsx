'use client';

import React from 'react';
import Image from 'next/image';
import Container from '../ui/Container';
import Button from '../ui/Button';
import { FiPhone, FiCalendar } from 'react-icons/fi';

const insuranceLogos = [
    { name: 'Liberty Mutual', src: '/images/insurance/190926-libertymutuallogo-submitted-1__1_-removebg-preview.png' },
    { name: 'Allstate', src: '/images/insurance/Allstate-1.webp' },
    { name: 'Nationwide', src: '/images/insurance/Nationwide-1.webp' },
    { name: 'State Farm', src: '/images/insurance/Statefarm-2.webp' },
    { name: 'American Family', src: '/images/insurance/american-family-2.webp' },
    { name: 'Bear River', src: '/images/insurance/bearriver.webp' },
    { name: 'Chubb', src: '/images/insurance/chubb-2.webp' },
    { name: 'Farmers', src: '/images/insurance/farmers__1_-removebg-preview.png' },
    { name: 'Progressive', src: '/images/insurance/progressive-2.webp' },
];

const InsuranceSlider = () => {
    return (
        <section className="py-16 bg-gray-100 overflow-hidden">
            <Container>
                <div className="text-center mb-12">
                    <span className="text-secondary font-bold tracking-wider uppercase text-sm mb-2 block">
                        We Work With Your Insurance
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">
                        We Work Directly With Your Insurance Company
                    </h2>
                    <div className="flex justify-center">
                        <Button
                            href="https://book.housecallpro.com/book/JM-Carpet-Renewal/0ff6fe1ee579499786882b3af2ef02d0?v2=true"
                            variant="secondary"
                            icon={FiCalendar}
                            className="text-lg px-8 py-3 uppercase font-bold"
                        >
                            Book Now
                        </Button>
                    </div>
                </div>

                <div className="relative w-full max-w-7xl mx-auto overflow-hidden">
                    {/* Gradient Masks */}
                    <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-gray-100 to-transparent z-10"></div>
                    <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-gray-100 to-transparent z-10"></div>

                    {/* Logo Track - duplicated 2 times for seamless loop */}
                    <div className="flex w-[200%] animate-scroll hover:[animation-play-state:paused]">
                        {/* First Set */}
                        <div className="flex w-1/2 justify-around items-center">
                            {insuranceLogos.map((logo, index) => (
                                <div key={`logo-1-${index}`} className="relative h-16 w-32 md:w-48 mx-4 opacity-70 hover:opacity-100 transition-opacity grayscale hover:grayscale-0">
                                    <Image
                                        src={logo.src}
                                        alt={logo.name}
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                            ))}
                        </div>
                        {/* Second Set (Duplicate) */}
                        <div className="flex w-1/2 justify-around items-center">
                            {insuranceLogos.map((logo, index) => (
                                <div key={`logo-2-${index}`} className="relative h-16 w-32 md:w-48 mx-4 opacity-70 hover:opacity-100 transition-opacity grayscale hover:grayscale-0">
                                    <Image
                                        src={logo.src}
                                        alt={logo.name}
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default InsuranceSlider;
