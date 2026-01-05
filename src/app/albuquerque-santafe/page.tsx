'use client';

import React from 'react';
import Image from 'next/image';
import Container from '@/components/ui/Container';
import Testimonials from '@/components/sections/Testimonials';
import Contact from '@/components/sections/Contact';
import MapSection from '@/components/sections/MapSection';

export default function AlbuquerqueSantaFePage() {
    return (
        <div className="flex flex-col min-h-screen pt-32">
            <Container className="space-y-20 pb-20">
                {/* Section 1 */}
                <div className="flex flex-col items-center text-center">
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-8">We are here to help!</h2>
                    <div className="relative">
                        <Image
                            src="/images/albuquerque-santafe/1.webp"
                            alt="Quick Response Restoration Team"
                            width={1200}
                            height={800}
                            className="w-auto h-auto max-w-full rounded-xl shadow-lg"
                            priority
                        />
                    </div>
                </div>

                {/* Section 2 */}
                <div className="flex flex-col items-center text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 max-w-4xl">
                        Serving Customers in Albuquerque | Santa fe | Belen | Socorro | Bernalillo
                    </h2>
                    <div className="relative">
                        <Image
                            src="/images/albuquerque-santafe/2.webp"
                            alt="Service Areas Map"
                            width={1200}
                            height={800}
                            className="w-auto h-auto max-w-full rounded-xl shadow-lg"
                        />
                    </div>
                </div>

                {/* Section 3 */}
                <div className="flex flex-col items-center text-center">
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-8">
                        Before and After: Our Restoration Projects
                    </h2>
                    <div className="relative">
                        <Image
                            src="/images/albuquerque-santafe/3.webp"
                            alt="Restoration Before and After"
                            width={1200}
                            height={800}
                            className="w-auto h-auto max-w-full rounded-xl shadow-lg"
                        />
                    </div>
                </div>
            </Container>

            {/* Testimonials */}
            <Testimonials />

            {/* Contact Form */}
            <Contact
                title="Ready to Restore Your Property?"
                description="Our team in Albuquerque and Santa Fe is ready to respond. Contact us today for immediate assistance."
            />

            {/* Map Section */}
            <MapSection />
        </div>
    );
}
