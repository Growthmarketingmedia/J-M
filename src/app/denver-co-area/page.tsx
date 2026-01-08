'use client';

import React from 'react';
import Hero from '@/components/sections/Hero';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import MapSection from '@/components/sections/MapSection';
import { FiPhone, FiMail, FiMapPin, FiCheckCircle, FiDroplet, FiWind, FiClock, FiAward, FiShield, FiUsers } from 'react-icons/fi';
import { TbFlame } from 'react-icons/tb';
import { GiVacuumCleaner } from 'react-icons/gi';
import { MdConstruction } from 'react-icons/md';

export default function DenverLocationPage() {
    const services = [
        {
            icon: FiDroplet,
            title: 'Water Damage Restoration',
            link: '/water-damage-restoration',
        },
        {
            icon: TbFlame,
            title: 'Fire & Smoke Damage',
            link: '/fire-damage-restoration',
        },
        {
            icon: GiVacuumCleaner,
            title: 'Mold Remediation',
            link: '/mold-damage-restoration',
        },
        {
            icon: MdConstruction,
            title: 'Reconstruction Services',
            link: '/reconstruction-services',
        },
    ];

    const features = [
        {
            icon: FiClock,
            title: '24/7 Emergency Response',
            description: 'Emergencies never follow a schedule, and neither do we. Our team is on call 24 hours a day, seven days a week, ready to respond to your urgent restoration needs anywhere in Denver. From the moment you call, our dispatch system ensures immediate action to limit damage and begin recovery at the most critical stage.',
        },
        {
            icon: FiAward,
            title: 'Certified & Experienced Team',
            description: 'Our specialists are fully certified and bring years of real-world experience to every restoration project. Whether addressing fire, water, or mold damage, our experts follow proven practices that ensure accuracy, safety, and excellence. We restore your property to its pre-loss condition, paying close attention to both visible and hidden damage.',
        },
        {
            icon: FiCheckCircle,
            title: 'Fast & Reliable Restoration',
            description: 'We know disasters strike without warning, and delays can make damage worse. That\'s why we act swiftly, without ever compromising quality. Our organized, step-by-step process allows us to complete restoration efficiently, maintaining a balance of speed, precision, and lasting workmanship that makes your property whole again.',
        },
        {
            icon: FiShield,
            title: 'Insurance Claim Assistance',
            description: 'Dealing with insurance paperwork after an emergency can feel overwhelming. Our team assists you every step of the way, from documenting all losses and damages to working directly with your insurance provider. We simplify the process so you can focus on recovery while we handle the details that ensure a smoother, faster claim resolution.',
        },
        {
            icon: FiUsers,
            title: 'Safe & Eco-Friendly Solutions',
            description: 'We believe in restoring properties responsibly. Every cleaning solution and piece of equipment we use is chosen for both performance and environmental safety. Our methods are powerful yet gentle, ensuring the protection of your family, employees, and indoor environment while delivering outstanding restoration results.',
        },
    ];

    const processSteps = [
        {
            icon: FiCheckCircle,
            title: 'Water Damage Restoration',
            description: 'We arrive promptly to assess the situation and secure your property. After inspection, we identify all affected areas and create a detailed restoration plan customized to your needs.',
        },
        {
            icon: FiDroplet,
            title: 'Water Extraction & Drying (if applicable)',
            description: 'If water damage is present, we remove all standing water using industrial-grade pumps and apply drying equipment to eliminate hidden moisture. This prevents further structural damage and mold growth.',
        },
        {
            icon: GiVacuumCleaner,
            title: 'Cleaning & Sanitization',
            description: 'Our team thoroughly cleans, disinfects, and deodorizes all impacted areas. Every surface, belonging, and corner is treated to eliminate contaminants, allergens, and odors for a safe, healthy interior environment.',
        },
        {
            icon: MdConstruction,
            title: 'Restoration & Repairs',
            description: 'The final step restores both comfort and functionality. From rebuilding and refinishing to detailed final touches, we return your property to its original state, or better, so you can move forward with confidence.',
        },
    ];

    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero Section - Same as Service Pages */}
            <Hero
                title={<>Turning Devastation into Renewal, <br className="hidden md:block" /> <span>Denver's Trusted Property Restoration Company</span></>}
                backgroundImage="/images/herosection.webp"
                description="When disaster happens, time is everything. Quick Response Restoration offers reliable 24-hour service to get your property back to its original condition in no time. As an industry leader in Property Restoration in Denver we combine experience, technology and caring people who are ready to handle any emergency with precision and care."
            />

            {/* Main Content with Sidebar */}
            <section className="py-20 bg-white">
                <Container>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Main Content - 2/3 width */}
                        <div className="lg:col-span-2 space-y-16">
                            {/* What Makes Us Different */}
                            <div>
                                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">What Makes Us Different?</h2>
                                <p className="text-lg text-gray-600 mb-10">
                                    The Restoration Company in Denver you choose can greatly impact how quickly and effectively your property's recovery is. Quick Response Restoration has established a name for trustworthy, meticulous, and responsive service, and homeowners and business owners rely on its teams to restore expediently and thoroughly with lasting results.
                                </p>

                                <div className="space-y-6">
                                    {features.map((feature, index) => (
                                        <div
                                            key={index}
                                            className="flex items-start gap-4 p-6 bg-gradient-to-br from-gray-50 to-white rounded-xl border border-gray-200 hover:border-primary/30 hover:shadow-lg transition-all duration-300"
                                        >
                                            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center text-white flex-shrink-0">
                                                <feature.icon size={24} />
                                            </div>
                                            <div>
                                                <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
                                                <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* How Our Process Works */}
                            <div>
                                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">How Our Process Works</h2>
                                <p className="text-lg text-gray-600 mb-10">
                                    At Quick Response Restoration, our process is designed to make recovery seamless and stress-free from beginning to end. Every stage is carefully managed to ensure your property is fully restored with precision and care.
                                </p>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {processSteps.map((step, index) => (
                                        <div
                                            key={index}
                                            className="relative p-6 bg-white rounded-xl border-2 border-gray-200 hover:border-primary transition-all duration-300 hover:shadow-lg"
                                        >
                                            <div className="absolute -top-4 -left-4 w-10 h-10 bg-secondary rounded-full flex items-center justify-center text-white font-bold shadow-lg">
                                                {index + 1}
                                            </div>
                                            <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center text-primary mb-4 mt-2">
                                                <step.icon size={28} />
                                            </div>
                                            <h3 className="text-lg font-bold text-gray-900 mb-3">{step.title}</h3>
                                            <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Our Restoration Services */}
                            <div>
                                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Our Restoration Services</h2>
                                <p className="text-lg text-gray-600 mb-10">
                                    As a leading Property Restoration Specialist in Denver, we deliver complete restoration solutions designed to repair, clean, and protect your property from further harm. Whether it's flooding from a burst pipe, mold from hidden moisture, or smoke damage after a fire, we have the training and equipment to restore your property with precision and care.
                                </p>

                                <div className="space-y-8">
                                    {/* Water Damage Restoration */}
                                    <div className="bg-white rounded-xl border-2 border-gray-200 p-8 hover:border-primary/30 hover:shadow-lg transition-all duration-300">
                                        <div className="flex items-start gap-4 mb-4">
                                            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center text-white flex-shrink-0">
                                                <FiDroplet size={28} />
                                            </div>
                                            <div>
                                                <h3 className="text-2xl font-bold text-gray-900 mb-3">Water Damage Restoration</h3>
                                                <p className="text-gray-600 leading-relaxed">
                                                    Water can cause severe damage within minutes. Our experts quickly identify the source, remove standing water, and use advanced drying equipment to eliminate moisture. We address secondary issues such as odor, structural weakening, and mold development to ensure your property remains stable, safe, and healthy long after restoration.
                                                </p>
                                                <a href="/water-damage-restoration" className="inline-flex items-center text-primary font-semibold mt-4 hover:gap-2 transition-all group">
                                                    Learn More
                                                    <svg className="w-5 h-5 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                    </svg>
                                                </a>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Mold Removal & Remediation */}
                                    <div className="bg-white rounded-xl border-2 border-gray-200 p-8 hover:border-primary/30 hover:shadow-lg transition-all duration-300">
                                        <div className="flex items-start gap-4 mb-4">
                                            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center text-white flex-shrink-0">
                                                <GiVacuumCleaner size={28} />
                                            </div>
                                            <div>
                                                <h3 className="text-2xl font-bold text-gray-900 mb-3">Mold Removal & Remediation</h3>
                                                <p className="text-gray-600 leading-relaxed">
                                                    Unchecked mold growth threatens both your property and health. Our certified technicians contain and remove all traces of mold using advanced remediation methods that prevent regrowth. Through effective moisture control, cleaning, and air purification, we restore a fresh, safe, and healthier indoor environment for your home or business.
                                                </p>
                                                <a href="/mold-damage-restoration" className="inline-flex items-center text-primary font-semibold mt-4 hover:gap-2 transition-all group">
                                                    Learn More
                                                    <svg className="w-5 h-5 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                    </svg>
                                                </a>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Fire & Smoke Damage Restoration */}
                                    <div className="bg-white rounded-xl border-2 border-gray-200 p-8 hover:border-primary/30 hover:shadow-lg transition-all duration-300">
                                        <div className="flex items-start gap-4 mb-4">
                                            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center text-white flex-shrink-0">
                                                <TbFlame size={28} />
                                            </div>
                                            <div>
                                                <h3 className="text-2xl font-bold text-gray-900 mb-3">Fire & Smoke Damage Restoration</h3>
                                                <p className="text-gray-600 leading-relaxed">
                                                    The aftermath of a fire extends far beyond what's visible. Smoke and soot can infiltrate materials, causing lasting damage and contamination. Our restoration team manages debris removal, deep cleaning, odor elimination, and surface treatment to neutralize toxins and restore your space to a clean, livable condition once again.
                                                </p>
                                                <a href="/fire-damage-restoration" className="inline-flex items-center text-primary font-semibold mt-4 hover:gap-2 transition-all group">
                                                    Learn More
                                                    <svg className="w-5 h-5 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                    </svg>
                                                </a>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Reconstruction & Structural Repairs */}
                                    <div className="bg-white rounded-xl border-2 border-gray-200 p-8 hover:border-primary/30 hover:shadow-lg transition-all duration-300">
                                        <div className="flex items-start gap-4 mb-4">
                                            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center text-white flex-shrink-0">
                                                <MdConstruction size={28} />
                                            </div>
                                            <div>
                                                <h3 className="text-2xl font-bold text-gray-900 mb-3">Reconstruction & Structural Repairs</h3>
                                                <p className="text-gray-600 leading-relaxed">
                                                    True restoration often requires rebuilding. Our skilled construction team repairs and reconstructs damaged areas, restoring structural strength and visual appeal. From drywall and flooring to full structural renewal, we manage every detail to bring your property back to its full beauty and integrity.
                                                </p>
                                                <a href="/reconstruction-services" className="inline-flex items-center text-primary font-semibold mt-4 hover:gap-2 transition-all group">
                                                    Learn More
                                                    <svg className="w-5 h-5 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                    </svg>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Service Areas */}
                            <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-8 border border-primary/10">
                                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Serving Denver Metro | Colorado Springs</h2>
                                <p className="text-gray-600 leading-relaxed">
                                    Quick Response Restoration proudly serves communities throughout Colorado Springs and surrounding regions. We believe professional reconstruction should be accessible to every property owner in need. Our coverage includes neighborhoods throughout Denver, as well as nearby areas such as Monument, Fountain, Manitou Springs, and Woodland Park.
                                </p>
                            </div>

                            {/* Final CTA */}
                            <div className="bg-gradient-to-br from-gray-900 to-gray-800 text-white rounded-2xl p-10">
                                <h2 className="text-3xl font-bold mb-4">Get Fast, Reliable Restoration Services in Denver Today</h2>
                                <p className="text-gray-300 mb-6 leading-relaxed">
                                    If your home or business has suffered water, fire, or mold damage, don't wait to take action. Quick Response Restoration is your trusted partner for Professional Restoration Services in Denver, ready to help you recover fast with skill, empathy, and precision. Call our team today and let us bring your property and peace of mind back to life.
                                </p>
                                <Button
                                    variant="secondary"
                                    icon={FiPhone}
                                    href="tel:+17207306440"
                                    className="text-lg px-8 py-4"
                                >
                                    Call Now: 720-730-6440
                                </Button>
                            </div>
                        </div>

                        {/* Sticky Sidebar - 1/3 width */}
                        <div className="lg:col-span-1">
                            <div className="sticky top-24 space-y-6">
                                {/* Contact Form */}
                                <div className="bg-gradient-to-br from-primary to-primary/90 rounded-2xl p-8 shadow-2xl">
                                    <h3 className="text-2xl font-bold text-white mb-4">Get Free Estimate</h3>
                                    <p className="text-white/90 mb-6">Ready to restore your property? Contact us today for a free estimate.</p>
                                    <a
                                        href="/contact-us"
                                        className="block w-full bg-secondary hover:bg-secondary/90 text-white font-bold py-4 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl text-center"
                                    >
                                        Get Free Quote
                                    </a>
                                </div>

                                {/* Services Menu */}
                                <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
                                    <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                                        <div className="w-1 h-6 bg-primary rounded-full"></div>
                                        Our Services
                                    </h3>
                                    <div className="space-y-2">
                                        {services.map((service, index) => (
                                            <a
                                                key={index}
                                                href={service.link}
                                                className="flex items-center gap-3 p-4 rounded-lg hover:bg-primary/5 transition-all duration-300 group"
                                            >
                                                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                                                    <service.icon size={20} />
                                                </div>
                                                <span className="text-gray-700 font-medium group-hover:text-primary transition-colors">
                                                    {service.title}
                                                </span>
                                            </a>
                                        ))}
                                    </div>
                                </div>

                                {/* Contact Info */}
                                <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 border border-gray-200">
                                    <h3 className="text-lg font-bold text-gray-900 mb-4">Contact Information</h3>
                                    <div className="space-y-4">
                                        <a href="tel:+17207306440" className="flex items-center gap-3 text-gray-600 hover:text-primary transition-colors">
                                            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                                                <FiPhone size={18} />
                                            </div>
                                            <div>
                                                <div className="text-xs text-gray-500">Call Us</div>
                                                <div className="font-semibold">720-730-6440</div>
                                            </div>
                                        </a>
                                        <a href="mailto:info@quick2restore.com" className="flex items-center gap-3 text-gray-600 hover:text-primary transition-colors">
                                            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                                                <FiMail size={18} />
                                            </div>
                                            <div>
                                                <div className="text-xs text-gray-500">Email Us</div>
                                                <div className="font-semibold text-sm">info@quick2restore.com</div>
                                            </div>
                                        </a>
                                        <div className="flex items-center gap-3 text-gray-600">
                                            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                                                <FiMapPin size={18} />
                                            </div>
                                            <div>
                                                <div className="text-xs text-gray-500">Location</div>
                                                <div className="font-semibold text-sm">Denver, CO Area</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>

            <MapSection />
        </div>
    );
}
