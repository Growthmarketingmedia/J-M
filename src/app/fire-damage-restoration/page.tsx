'use client';

import React, { useState } from 'react';
import Hero from '@/components/sections/Hero';
import WhyChooseUs from '@/components/sections/WhyChooseUs';
import ServiceProcess from '@/components/sections/ServiceProcess';
import Contact from '@/components/sections/Contact';
import MapSection from '@/components/sections/MapSection';
import Container from '@/components/ui/Container';
import { FiClock, FiClipboard, FiTool, FiCheckCircle, FiShield, FiAlertTriangle, FiChevronDown, FiWind, FiHome } from 'react-icons/fi';
import { BsHouseDoor, BsExclamationTriangle } from 'react-icons/bs';
import { TbFlame, TbSmokingNo } from 'react-icons/tb';
import { MdOutlineCleaningServices, MdConstruction } from 'react-icons/md';
import { GiVacuumCleaner } from 'react-icons/gi';

export default function FireDamagePage() {
    const [openFaq, setOpenFaq] = useState<number | null>(0);

    const fireDamageSteps = [
        {
            icon: FiClock,
            title: '24/7 Emergency Response',
            description: 'Our team arrives promptly, ready to secure your property and prevent further damage. Immediate response helps stabilize unsafe conditions and prepares the site for cleanup.',
        },
        {
            icon: FiClipboard,
            title: 'Inspection & Damage Assessment',
            description: 'We conduct a thorough inspection to identify the full extent of fire, smoke, and water damage. This assessment allows us to create a detailed restoration plan.',
        },
        {
            icon: FiWind,
            title: 'Water Removal (from firefighting efforts)',
            description: 'Firefighting efforts often leave behind standing water. We use powerful pumps and extraction tools to remove it quickly, preventing mold growth and secondary structural issues.',
        },
        {
            icon: TbSmokingNo,
            title: 'Smoke, Soot & Odor Cleanup',
            description: 'Specialized equipment removes soot from walls, ceilings, and belongings, while air purifiers eliminate smoke odor. This ensures safe living conditions and prevents long-term damage.',
        },
        {
            icon: MdConstruction,
            title: 'Repairs, Renovation & Final Restoration',
            description: 'Once cleanup is complete, we repair and rebuild damaged structures. Whether replacing drywall or conducting full-scale renovations, our goal is to restore durability and comfort.',
        },
    ];

    const services = [
        {
            icon: TbFlame,
            title: 'Complete Fire Damage Repair & Restoration Services',
            description: 'We manage every aspect of restoration, from stabilizing the property to rebuilding damaged rooms. Our process is comprehensive, ensuring structural safety while restoring the appearance and integrity of your home or business.',
        },
        {
            icon: FiShield,
            title: 'Emergency Board-Up & Structural Safety',
            description: 'Fires often leave openings in windows, roofs, or walls. We secure these areas with professional board-up services to protect your property from further damage and ensure it remains structurally safe.',
        },
        {
            icon: GiVacuumCleaner,
            title: 'Smoke & Soot Removal',
            description: 'Lingering smoke and soot penetrate surfaces, leaving stains and odors. Our team uses advanced cleaning methods to remove these contaminants, restoring surfaces and preventing permanent damage to your property.',
        },
        {
            icon: FiWind,
            title: 'Odor Elimination & Air Purification',
            description: 'Even after visible cleanup, smoke odors can remain. We use industrial air scrubbers and specialized treatments to cleanse the air, removing harmful particles and restoring indoor air quality.',
        },
        {
            icon: MdConstruction,
            title: 'Structural Repairs & Reconstruction',
            description: 'When repairs are required, we handle everything from minor fixes to major reconstruction. Our team rebuilds with precision, ensuring your property regains strength and functionality while looking renewed.',
        },
    ];

    const whyChooseUsFeatures = [
        {
            icon: FiCheckCircle,
            title: 'Licensed, certified, and insured restoration experts',
            description: 'Our technicians meet the highest industry standards and carry the credentials needed to perform safe, effective restoration.',
        },
        {
            icon: FiClock,
            title: '24/7 emergency service',
            description: 'Disasters strike without warning. Our team is always ready to respond at any hour, ensuring help arrives when you need it most.',
        },
        {
            icon: FiClipboard,
            title: 'Insurance assistance',
            description: 'Navigating insurance claims can feel overwhelming. We coordinate directly with your provider, handling paperwork and communication to make the process smoother.',
        },
        {
            icon: FiHome,
            title: 'Proven track record with local homes & businesses',
            description: 'We have restored countless properties across Colorado Springs, earning trust through reliable service, strong results, and lasting relationships with our community.',
        },
    ];

    const faqs = [
        {
            question: 'How soon should fire damage restoration begin?',
            answer: 'Restoration should begin as soon as the property is safe to enter. Smoke and soot continue damaging surfaces long after flames are extinguished. Starting Colorado Springs fire damage restoration quickly reduces long-term repairs and prevents odors and contaminants from spreading further into walls, ceilings, and personal belongings.',
        },
        {
            question: 'How long does the restoration process take?',
            answer: 'The duration depends on the severity of the fire, the size of the property, and the level of repairs required. Small-scale projects may take days, while large restorations can take weeks. At Quick Response Restoration, we provide timelines upfront and keep you updated throughout the process.',
        },
        {
            question: 'Will my insurance cover fire damage repairs?',
            answer: 'Most insurance policies cover sudden fire incidents, including structural repairs and smoke cleanup. Coverage details vary by policy, so our team works directly with your insurer to clarify benefits, assist with paperwork, and ensure eligible costs are properly addressed. We simplify claims so you can focus on recovery.',
        },
        {
            question: 'Can the smoke odor be completely removed?',
            answer: 'Yes, when addressed by professionals. Smoke particles cling deeply to materials and air ducts, but our smoke damage restoration Colorado Springs methods use advanced equipment to eliminate odors. Through air purification, deep cleaning, and deodorization, we restore fresh indoor air and prevent lingering smells from affecting your property.',
        },
    ];

    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero Section */}
            <Hero
                title={<>From Fire Damage to Lasting Strength, <br className="hidden md:block" /> <span className="text-secondary">Expert Fire & Smoke Damage Restoration Colorado Springs Residents Trust</span></>}
                backgroundImage="/images/Fire/fire-damage-restoration-1.png"
                description="Fire can change everything in seconds, creating a catastrophic loss that is hard to recover from. Quick Response Restoration provides professional fire damage restoration in Colorado Springs. Our experts know that fire damage goes beyond burns; it also involves smoke, water from fighting the fire, and structural safety concerns. That is why we focus on safety first, then complete restoration of the property. From securing your home to removing residual smoke to reconstructing the structure, it is our goal to restore strength and comfort to your environment. We use state-of-the-art equipment, extensive investigations, and proven techniques to ensure there is no oversight as we work. With our local team ready when you need a fire damage restoration company near me, residents and businesses in Colorado Springs can rely on professional fire recovery services that emphasize effective and long-lasting improvement."
            />

            {/* Why Choose Us */}
            <WhyChooseUs
                title="What Makes Us Different"
                description="Restoring fire-damaged property requires skill, dedication, and a reliable partner. At Quick Response Restoration, we have built our reputation on delivering consistent results for residents and businesses across Colorado Springs. Our approach combines professionalism with genuine care for the communities we serve."
                features={whyChooseUsFeatures}
                gridCols={2}
            />

            {/* Process Section */}
            <ServiceProcess
                title="How We Restore Fire-Damaged Properties"
                description="Fire restoration is a step-by-step process designed to bring order to chaos. At Quick Response Restoration, we follow a proven method to ensure your home or business is restored with care and efficiency."
                steps={fireDamageSteps}
            />

            {/* Why Fast Cleanup Is Critical - With Image */}
            <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white relative overflow-hidden">
                <div className="absolute inset-0 opacity-10" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                }}></div>

                <Container className="relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl md:text-5xl font-bold mb-6">Why Fast Fire Damage Cleanup Is Critical</h2>
                            <p className="text-xl text-gray-300 mb-6">
                                Fire damage is about more than charred walls and burned furniture. Smoke, soot, and water from firefighting activities create continuing danger. For these reasons, fire damage restoration in Colorado Springs needs to begin immediately to protect your property and health.
                            </p>
                            <p className="text-lg text-gray-300 mb-6">
                                Soot particles can penetrate walls, ceilings, and furniture and will leave behind permanent stains and odors if untreated. Moisture in materials can lead to mold growth, which means further damage beyond that which the fire has done. There may also be unknown structural damage, which could make parts of your residence or business unsafe for occupancy until a professional has inspected it.
                            </p>
                            <p className="text-lg text-gray-300">
                                Timeliness allows professionals like Quick Response Restoration to limit your losses and start the recovery process immediately. We will make the building safe, stop the deteriorative process, and start the critical cleanup process right away. Timely service minimizes smoke and water from penetrating deeper into surfaces, saving you time and ultimately money in your restoration. When you call for fire damage repair in Colorado Springs, you are taking the first step in recovery and rebuilding with confidence, and help protect the long-term value of your property.
                            </p>
                        </div>
                        <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                            <img
                                src="/images/Fire/fire-damage-restoration-2.png"
                                alt="Fire damage"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </Container>
            </section>

            {/* Our Services - Grid */}
            <section className="py-20 bg-white">
                <Container>
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">Our Fire Damage Restoration Services</h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            Recovering from fire requires more than surface cleanup. It takes a detailed plan, professional equipment, and a team committed to restoring both safety and structure. At Quick Response Restoration, we provide a wide range of fire damage restoration services near me designed to address every stage of recovery.
                        </p>
                    </div>

                    {/* First Row - 3 Columns */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
                        {services.slice(0, 3).map((service, index) => (
                            <div key={index} className="group bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-2xl p-8 hover:shadow-2xl hover:border-secondary/30 transition-all duration-300 hover:-translate-y-1">
                                <div className="mb-6">
                                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-secondary to-red-700 flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                                        <service.icon size={32} />
                                    </div>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-secondary transition-colors">
                                    {service.title}
                                </h3>
                                <p className="text-gray-600 leading-relaxed text-sm">
                                    {service.description}
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* Remaining Rows - 2 Columns */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {services.slice(3).map((service, index) => (
                            <div key={index + 3} className="group bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-2xl p-8 hover:shadow-2xl hover:border-secondary/30 transition-all duration-300 hover:-translate-y-1">
                                <div className="mb-6">
                                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-secondary to-red-700 flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                                        <service.icon size={32} />
                                    </div>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-secondary transition-colors">
                                    {service.title}
                                </h3>
                                <p className="text-gray-600 leading-relaxed text-sm">
                                    {service.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </Container>
            </section>

            <Contact
                title="Restore Your Property After Fire Damage Today"
                description="When fire strikes, quick action is critical for recovery. At Quick Response Restoration, we deliver complete fire damage restoration services that Colorado Springs residents and businesses can rely on. From emergency board-ups to smoke cleanup and full structural repairs, our team handles every stage with expertise. Whether your property needs minor repairs or extensive rebuilding, we are committed to restoring safety and stability. Call today for immediate assistance and let our specialists bring your property back to life with dependable fire damage repair Colorado Springs solutions."
            />

            {/* FAQ Section */}
            <section className="py-20 bg-gray-50">
                <Container>
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-12 text-center">Frequently Asked Questions</h2>
                        <div className="space-y-4">
                            {faqs.map((faq, index) => (
                                <div key={index} className="bg-white rounded-xl border border-gray-200 overflow-hidden">
                                    <button
                                        onClick={() => setOpenFaq(openFaq === index ? null : index)}
                                        className={`w-full px-8 py-6 text-left flex items-center justify-between transition-colors ${openFaq === index
                                            ? 'bg-white text-gray-900'
                                            : 'hover:bg-gray-50'
                                            }`}
                                    >
                                        <span className="text-lg font-bold pr-8">{faq.question}</span>
                                        <FiChevronDown
                                            className={`text-secondary flex-shrink-0 transition-transform duration-300 ${openFaq === index ? 'rotate-180' : ''}`}
                                            size={24}
                                        />
                                    </button>
                                    <div className={`px-8 overflow-hidden transition-all duration-300 ${openFaq === index ? 'py-6 border-t border-gray-200' : 'max-h-0'}`}>
                                        <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </Container>
            </section>

            <MapSection />
        </div>
    );
}
