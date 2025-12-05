import React from 'react';
import Hero from '@/components/sections/Hero';
import Services from '@/components/sections/Services';
import WhyChooseUs from '@/components/sections/WhyChooseUs';
import Stats from '@/components/sections/Stats';
import ServiceAreas from '@/components/sections/ServiceAreas';
import Testimonials from '@/components/sections/Testimonials';
import Process from '@/components/sections/Process';
import EmergencyBanner from '@/components/sections/EmergencyBanner';
import Contact from '@/components/sections/Contact';
import { FiDroplet, FiWind, FiSun, FiActivity } from 'react-icons/fi';

export default function WaterDamagePage() {
    const waterServices = [
        {
            title: 'Emergency Water Extraction',
            description: 'Immediate removal of standing water using industrial-grade pumps and vacuums to prevent secondary damage.',
            image: '/images/waterdamagerestoration.webp',
        },
        {
            title: 'Structural Drying',
            description: 'Advanced drying techniques for walls, floors, and ceilings using air movers and dehumidifiers.',
            image: '/images/waterdamagerestorationonwalls.webp',
        },
        {
            title: 'Dehumidification',
            description: 'Precise humidity control to remove moisture from the air and materials, preventing mold growth.',
            image: '/images/mold.webp',
        },
        {
            title: 'Sewage Cleanup',
            description: 'Safe and sanitary removal of biohazardous sewage backups and thorough disinfection.',
            image: '/images/molddamageworkers.webp',
        },
        {
            title: 'Burst Pipe Repair',
            description: 'Cleanup and restoration services for damage caused by frozen or burst plumbing pipes.',
            image: '/images/stormdamage.webp',
        },
        {
            title: 'Sanitization & Deodorization',
            description: 'Comprehensive cleaning and odor removal to restore your property to a safe, fresh condition.',
            image: '/images/firedamagerestoration.webp',
        },
    ];

    const waterFeatures = [
        {
            icon: FiDroplet,
            title: 'Rapid Water Removal',
            description: 'Our truck-mounted extraction units remove thousands of gallons of water quickly to dry your property fast.',
        },
        {
            icon: FiWind,
            title: 'Industrial Drying',
            description: 'We use high-speed air movers and commercial dehumidifiers to dry carpets, pads, and subfloors.',
        },
        {
            icon: FiSun,
            title: 'Thermal Imaging',
            description: 'We use advanced infrared cameras to detect hidden moisture behind walls and under floors.',
        },
        {
            icon: FiActivity,
            title: 'Moisture Monitoring',
            description: 'We monitor moisture levels daily to ensure your property is drying properly and efficiently.',
        },
    ];

    return (
        <div className="flex flex-col min-h-screen">
            <Hero
                title={<>Water Damage Restoration <br className="hidden md:block" /> <span className="text-secondary">Emergency Cleanup</span></>}
                subtitle="24/7 Rapid Response"
                backgroundImage="/images/waterdamagerestoration.webp"
                description="Fast, professional water extraction and drying services. We prevent mold and structural damage to get your life back to normal."
            />
            <Stats />
            <Services
                title="Our Water Restoration Process"
                description="Comprehensive solutions for every type of water damage emergency."
                services={waterServices}
            />
            <EmergencyBanner />
            <WhyChooseUs
                title="Why Choose Us for Water Damage?"
                description="Expertise, equipment, and speed when it counts the most."
                features={waterFeatures}
            />
            <Process />
            <Testimonials />
            <ServiceAreas />
            <Contact />
        </div>
    );
}
