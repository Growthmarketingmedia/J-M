'use client';

import React from 'react';
import Hero from '@/components/sections/Hero';
import Contact from '@/components/sections/Contact';
import MapSection from '@/components/sections/MapSection';

export default function ContactUsPage() {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero Section */}
            <Hero
                title={<>Get in Touch with <span className="text-secondary">Quick Response Restoration</span></>}
                backgroundImage="/images/herosection.webp"
                description="We're here to help 24/7. Whether you're facing an emergency or need to schedule a consultation, our team is ready to respond. Contact us today and let us restore your property with speed, skill, and care."
            />

            {/* Contact Section */}
            <Contact />

            {/* Map Section */}
            <MapSection />
        </div>
    );
}
