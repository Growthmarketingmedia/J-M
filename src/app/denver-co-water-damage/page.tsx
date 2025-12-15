'use client';

import React, { useState } from 'react';
import Hero from '@/components/sections/Hero';
import WhyChooseUs from '@/components/sections/WhyChooseUs';
import ServiceProcess from '@/components/sections/ServiceProcess';
import Contact from '@/components/sections/Contact';
import MapSection from '@/components/sections/MapSection';
import Container from '@/components/ui/Container';
import { FiCheckCircle, FiShield, FiClock, FiChevronDown, FiDroplet, FiTool, FiPackage } from 'react-icons/fi';
import { BsDropletFill, BsMoisture, BsLightning, BsHouseDoor } from 'react-icons/bs';
import { TbMoodSad, TbPaint } from 'react-icons/tb';
import { MdOutlineHealthAndSafety, MdOutlineCleaningServices } from 'react-icons/md';
import { GiWaterDrop } from 'react-icons/gi';

export default function DenverWaterDamagePage() {
    const [openFaq, setOpenFaq] = useState<number | null>(0);

    const whyChooseUsFeatures = [
        {
            icon: FiClock,
            title: '24/7 Emergency Response',
            description: 'Water damage does not wait for a convenient time. Our trained technicians are available day and night, 24/7, ready to respond immediately when you call. With rapid emergency water damage response in Denver, we work to reduce destruction, prevent contamination, and start stabilizing your property the moment we arrive.',
        },
        {
            icon: FiCheckCircle,
            title: 'Trained and Experienced Staff',
            description: 'Our restoration experts are continually trained to exceed the highest industry standards. Their precision, experience, and steady professionalism bring reassurance during one of life\'s most stressful situations. We combine technical skill with human understanding to deliver results that are not only effective but sustainable.',
        },
        {
            icon: FiTool,
            title: 'Customized Plan',
            description: 'Every property tells a different story, and so does every restoration. We design personalized plans based on your structure\'s needs to ensure the most efficient recovery while preserving the long-term integrity of your space. Each step is carefully aligned to your home or business to achieve complete and lasting results.',
        },
        {
            icon: FiShield,
            title: 'Insurance Accepted',
            description: 'We simplify what can otherwise be a frustrating experience. Our team works directly with your insurance carrier, handling documentation, photographs, and claim support from start to finish. We remove the burden of paperwork so you can focus on recovery while we handle the administrative side with care and transparency.',
        },
    ];

    const processSteps = [
        {
            icon: FiCheckCircle,
            title: 'Emergency Response & Inspection',
            description: 'We respond quickly to evaluate your situation, locate the source of water damage, and identify all affected areas. A thorough inspection allows us to design a customized plan of action for efficient and effective restoration.',
        },
        {
            icon: FiDroplet,
            title: 'Water Removal & Extraction',
            description: 'Using industrial-grade pumps and advanced extraction tools, we remove all standing water immediately. This crucial step limits structural weakening, prevents contamination, and stops further damage from spreading.',
        },
        {
            icon: BsMoisture,
            title: 'Drying & Dehumidification',
            description: 'We strategically position high-powered fans and dehumidifiers to remove deep-set moisture hidden behind walls, flooring, and insulation. This stage prevents future mold growth and preserves the integrity of materials throughout your property.',
        },
        {
            icon: MdOutlineCleaningServices,
            title: 'Cleaning & Sanitization',
            description: 'Every surface, furnishing, and material is cleaned and disinfected with specialized solutions. We remove odors, neutralize contaminants, and restore a safe, healthy environment for your family or employees.',
        },
        {
            icon: FiTool,
            title: 'Structural Repairs & Restoration',
            description: 'Once your property is fully dry, we repair and restore affected materials including drywall, flooring, and structural elements. Every repair is made to match your property\'s strength, appearance, and design, returning it to a state of comfort and stability.',
        },
        {
            icon: FiPackage,
            title: 'Content Restoration & Pack Out Services',
            description: 'We treat personal belongings with the same care as the structure itself. Items are carefully packed, cleaned, and restored off-site if necessary. Our specialists make every effort to recover what matters most to you.',
        },
    ];

    const causes = [
        'Burst or leaking pipes can create hidden flooding within walls or floors.',
        'Roof leaks let rainwater seep through ceilings and insulation.',
        'Faulty appliances such as dishwashers or water heaters release unexpected water.',
        'Sewer backups introduce contaminated water into basements and lower levels.',
        'Heavy rainfall and storms can overwhelm drainage systems, leading to indoor flooding.',
    ];

    const scenarios = [
        {
            icon: GiWaterDrop,
            description: 'Basement flooding after heavy rain or sump pump failure.',
        },
        {
            icon: BsDropletFill,
            description: 'Plumbing issues or pipe breaks causing widespread interior water damage.',
        },
        {
            icon: BsHouseDoor,
            description: 'Overflowing sinks, toilets, or bathtubs damaging flooring and nearby walls.',
        },
        {
            icon: TbPaint,
            description: 'Leaks in the roof or attic allowing unnoticed water intrusion.',
        },
        {
            icon: BsLightning,
            description: 'Frozen or burst pipes during cold Denver winters releasing excessive water.',
        },
    ];

    const signs = [
        {
            icon: BsDropletFill,
            title: 'Standing or pooling water in your home',
            description: 'Standing or pooling water that does not drain away, damaging floors and furniture.',
        },
        {
            icon: TbPaint,
            title: 'Water stains or discoloration on walls and ceilings',
            description: 'Water stains or discoloration on ceilings and walls, often indicating hidden leaks.',
        },
        {
            icon: TbMoodSad,
            title: 'Musty odors or mold growth',
            description: 'Musty odors or mold growth suggesting trapped moisture and poor ventilation.',
        },
        {
            icon: BsMoisture,
            title: 'Warped or damaged flooring',
            description: 'Warped or damaged flooring signaling water intrusion beneath the surface.',
        },
        {
            icon: MdOutlineHealthAndSafety,
            title: 'Sudden increase in humidity levels',
            description: 'Increased indoor humidity creating discomfort and encouraging mold.',
        },
        {
            icon: TbPaint,
            title: 'Peeling paint or wallpaper',
            description: 'Peeling paint or wallpaper revealing slow leaks behind walls.',
        },
        {
            icon: BsLightning,
            title: 'Electrical issues due to water exposure',
            description: 'Electrical malfunctions like flickering lights or tripped breakers caused by moisture exposure.',
        },
    ];

    const faqs = [
        {
            question: 'How much does water damage restoration cost?',
            answer: 'Costs depend on factors such as the affected area size, the water source, and the extent of repairs needed. We provide transparent estimates after a complete inspection so you know exactly what to expect before work begins.',
        },
        {
            question: 'How long will the restoration process take?',
            answer: 'The timeline varies depending on damage severity and required repairs. Smaller jobs may take a few days, while larger or more complex restorations could take several weeks. We communicate clearly throughout every phase so you remain informed and prepared.',
        },
        {
            question: 'Will I need to leave my home during restoration?',
            answer: 'In certain cases, temporary relocation may be recommended, particularly if water damage affects essential living spaces or creates unsafe conditions. We assess each situation carefully and help you plan the best and safest approach.',
        },
        {
            question: 'Will my insurance cover the damage?',
            answer: 'Most homeowner and commercial insurance policies in Denver cover sudden or accidental water damage. Coverage details depend on your specific policy. Our specialists assist with documentation, communication, and claims processing to help you maximize your coverage and receive faster claim approval.',
        },
    ];

    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero Section */}
            <Hero
                title={<>Turn the Tide on Water Damage with <br className="hidden md:block" /> <span>Denver's Fastest and Most Trusted Restoration Team</span></>}
                backgroundImage="/images/waterdamagerestoration.webp"
                description="Time is your greatest ally when your property is affected by unforeseen flooding, burst pipes, or hidden leaks. Quick Response Restoration provides you with reliable water damage restoration in Denver, performing our work with haste, accuracy, and the utmost concern for what matters. Our team possesses years of real-life experience locally, along with the latest technology in restoration, to protect homes and businesses against additional damage and reconstruction with durability and care."
            />

            {/* Why Choose Us */}
            <WhyChooseUs
                title="What Makes Us Different?"
                description="Selecting a reliable partner for Water Damage Restoration in Denver can determine whether you will achieve total restoration, or whether your damage will persist. At Quick Response Restoration, our team approaches each job as if it was our own home or business, showing urgency, attention to detail, and compassion."
                features={whyChooseUsFeatures}
                gridCols={2}
            />

            {/* Our Water Damage Restoration Process */}
            <ServiceProcess
                title="Our Water Damage Restoration Process"
                description="True restoration is more than removing water. It means rebuilding comfort, security, and peace of mind. Our detailed process ensures precision at every stage, from initial assessment to the final repair, protecting both property and possessions through expert planning and execution."
                steps={processSteps}
                gridCols={3}
            />

            {/* Commercial & Residential Section */}
            <section className="py-20 bg-white">
                <Container>
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">Commercial & Residential Water Damage Restoration</h2>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            Water damage can halt life at home or interrupt business operations without warning. Quick Response Restoration provides reliable restoration services for both residential and commercial properties across Denver. Homeowners trust us to restore comfort, safety, and stability, while business owners depend on us to minimize downtime and protect their investments.
                        </p>
                        <p className="text-lg text-gray-600 leading-relaxed mt-6">
                            No project is too small or too complex. Our water damage restoration company in Denver handles everything from small water leaks to large-scale restoration projects. Every service is completed with precision, care, and attention to detail using moisture detection tools, specialized drying equipment, and expert craftsmanship.
                        </p>
                    </div>
                </Container>
            </section>

            {/* What Causes Water Damage */}
            <section className="py-20 bg-gray-50">
                <Container>
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">What Causes Water Damage?</h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            Water damage often begins silently and spreads quickly. Understanding common causes allows you to take immediate action and protect your property before problems worsen.
                        </p>
                    </div>

                    <div className="max-w-3xl mx-auto space-y-4">
                        {causes.map((cause, index) => (
                            <div key={index} className="flex items-start gap-4 p-6 bg-white rounded-xl border border-gray-200 hover:shadow-lg transition-all duration-300">
                                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0 mt-1">
                                    <FiCheckCircle size={18} />
                                </div>
                                <p className="text-gray-700 leading-relaxed">{cause}</p>
                            </div>
                        ))}
                    </div>
                </Container>
            </section>

            {/* Common Water Damage Scenarios */}
            <section className="py-20 bg-white">
                <Container>
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">Common Water Damage Scenarios</h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            Water damage comes in many forms, whether sudden or gradual. Recognizing these scenarios helps you act fast to prevent long-term repairs and loss.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {scenarios.map((scenario, index) => (
                            <div key={index} className="group bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-2xl p-6 hover:shadow-2xl hover:border-primary/30 transition-all duration-300 hover:-translate-y-1">
                                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                                    <scenario.icon size={28} />
                                </div>
                                <p className="text-gray-700 leading-relaxed">{scenario.description}</p>
                            </div>
                        ))}
                    </div>
                </Container>
            </section>

            {/* Signs You Need Water Damage Restoration */}
            <section className="py-20 bg-gray-50">
                <Container>
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">Signs You Need Water Damage Restoration</h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            Not all water damage is visible, but the warning signs are often right in front of you. Recognizing them early can protect your home from greater structural or health risks. At Quick Response Restoration, we identify these problems and provide precise, lasting solutions.
                        </p>
                    </div>

                    {/* First Row - 3 Columns */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
                        {signs.slice(0, 3).map((sign, index) => (
                            <div key={index} className="group bg-white rounded-xl p-8 border border-gray-200 hover:shadow-2xl hover:border-secondary/30 transition-all duration-300 hover:-translate-y-1">
                                <div className="flex items-start mb-4">
                                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-secondary to-red-700 flex items-center justify-center text-white flex-shrink-0 mr-4 group-hover:scale-110 transition-transform">
                                        <sign.icon size={24} />
                                    </div>
                                </div>
                                <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-secondary transition-colors">
                                    {sign.title}
                                </h3>
                                <p className="text-gray-600 leading-relaxed text-sm">
                                    {sign.description}
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* Second Row - 2 Columns for remaining items */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {signs.slice(3).map((sign, index) => (
                            <div key={index} className="group bg-white rounded-xl p-8 border border-gray-200 hover:shadow-2xl hover:border-secondary/30 transition-all duration-300 hover:-translate-y-1">
                                <div className="flex items-start mb-4">
                                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-secondary to-red-700 flex items-center justify-center text-white flex-shrink-0 mr-4 group-hover:scale-110 transition-transform">
                                        <sign.icon size={24} />
                                    </div>
                                </div>
                                <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-secondary transition-colors">
                                    {sign.title}
                                </h3>
                                <p className="text-gray-600 leading-relaxed text-sm">
                                    {sign.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </Container>
            </section>

            <Contact
                title="Get Immediate Help – Contact Us Today!"
                description="When you search for water damage restoration near me, trust Quick Response Restoration to provide dependable, prompt, and professional service. Our Denver team specializes in emergency water removal, advanced drying, and comprehensive property restoration. Call us now for immediate help and let our experts restore your property with dedication and care."
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
