'use client';

import React, { useState } from 'react';
import Hero from '@/components/sections/Hero';
import WhyChooseUs from '@/components/sections/WhyChooseUs';
import ServiceProcess from '@/components/sections/ServiceProcess';
import Contact from '@/components/sections/Contact';
import MapSection from '@/components/sections/MapSection';
import Container from '@/components/ui/Container';
import { FiClock, FiClipboard, FiTool, FiCheckCircle, FiDroplet, FiHome, FiAlertTriangle, FiChevronDown, FiWind, FiPackage } from 'react-icons/fi';
import { BsDropletFill, BsExclamationTriangle, BsMoisture, BsLightning, BsHouseDoor } from 'react-icons/bs';
import { TbMoodSad, TbPaint, TbToolsKitchen2 } from 'react-icons/tb';
import { MdOutlineWaves, MdPlumbing, MdRoofing } from 'react-icons/md';
import { GiSnowflake1 } from 'react-icons/gi';
import { RiWaterFlashFill } from 'react-icons/ri';

export default function WaterDamagePage() {
    const [openFaq, setOpenFaq] = useState<number | null>(0);

    const waterDamageSteps = [
        {
            icon: FiClipboard,
            title: 'Emergency Response & Inspection',
            description: 'We arrive quickly to assess the situation and identify the source of water damage. A full inspection is conducted to determine the extent of the damage and develop a clear plan of action.',
        },
        {
            icon: FiDroplet,
            title: 'Water Removal & Extraction',
            description: 'Using industrial-grade pumps and extraction equipment, we eliminate standing water immediately. Removing excess water reduces structural damage and prevents harmful microbial growth from spreading.',
        },
        {
            icon: FiWind,
            title: 'Drying & Dehumidification',
            description: 'High-powered fans and dehumidifiers are placed strategically to remove hidden moisture. This step ensures walls, floors, and cavities are fully dried, protecting against mold development.',
        },
        {
            icon: FiCheckCircle,
            title: 'Cleaning & Sanitization',
            description: 'Surfaces, furniture, and materials are cleaned using specialized solutions. This includes odor treatment and sanitization to restore safe living and working conditions.',
        },
        {
            icon: FiTool,
            title: 'Structural Repairs & Restoration',
            description: 'Once the property is dry, we repair damaged drywall, flooring, and other affected areas. This phase focuses on returning your space to its original strength and appearance.',
        },
        {
            icon: FiPackage,
            title: 'Content Restoration & Pack Out Services',
            description: 'Personal belongings and valuables are carefully packed, cleaned, and restored off-site if necessary. Our content specialists salvage items whenever possible, preserving what matters most.',
        },
    ];

    const causes = [
        'Burst or leaking pipes often create sudden flooding inside walls or floors.',
        'Roof leaks allow rainwater to seep into ceilings and insulation.',
        'Faulty appliances, such as dishwashers or water heaters, release unexpected water.',
        'Sewer backups introduce contaminated water into basements and living areas.',
        'Storms and heavy rainfall overwhelm drainage systems, leading to indoor flooding.',
    ];

    const scenarios = [
        {
            icon: BsHouseDoor,
            description: 'Basement flooding often occurs after storms or sump pump failures.',
        },
        {
            icon: MdPlumbing,
            description: 'Plumbing failures cause interior flooding, especially with older systems.',
        },
        {
            icon: RiWaterFlashFill,
            description: 'Overflowing sinks, bathtubs, or toilets damage floors and surrounding areas.',
        },
        {
            icon: MdRoofing,
            description: 'Roof leaks allow water to seep unnoticed, damaging ceilings.',
        },
        {
            icon: GiSnowflake1,
            description: 'Frozen pipes burst during cold Colorado weather, releasing large amounts of water.',
        },
    ];

    const signs = [
        {
            icon: MdOutlineWaves,
            title: 'Standing or pooling water in your home',
            description: 'Lingering water that does not drain away signals urgent problems. Standing water quickly damages flooring and creates hazardous conditions.',
        },
        {
            icon: BsDropletFill,
            title: 'Water stains or discoloration on walls and ceilings',
            description: 'Brown or yellow spots often indicate hidden leaks. These marks are visual evidence of ongoing water intrusion inside the walls.',
        },
        {
            icon: TbMoodSad,
            title: 'Musty odors or mold growth',
            description: 'A persistent damp smell suggests hidden moisture. Mold growth thrives in humid environments, threatening both property and health.',
        },
        {
            icon: FiHome,
            title: 'Warped or damaged flooring',
            description: 'Buckling, sagging, or lifted boards show that water has penetrated subflooring. Immediate action prevents permanent structural failure.',
        },
        {
            icon: BsMoisture,
            title: 'Sudden increase in humidity levels',
            description: 'A clammy atmosphere indoors may point to concealed moisture. Prolonged humidity encourages mold and material breakdown.',
        },
        {
            icon: TbPaint,
            title: 'Peeling paint or wallpaper',
            description: 'Paint or wallpaper that bubbles or peels often hides water seepage. This usually indicates slow leaks behind walls.',
        },
        {
            icon: BsLightning,
            title: 'Electrical issues due to water exposure',
            description: 'Flickering lights, tripped breakers, or sparking outlets are dangerous signs. Electrical systems compromised by water require immediate attention.',
        },
    ];

    const faqs = [
        {
            question: 'How much does water damage restoration cost?',
            answer: 'The total cost for restoration varies depending on several different factors, including the size of the damage area, the source of the water, and how many repairs are needed. At Quick Response Restoration, we conduct a thorough inspection and follow up with a transparent estimate so you can see up front what the cost will be before the work commences.',
        },
        {
            question: 'How long will the restoration process take?',
            answer: 'The time it takes to repair part of your property depends on the severity of damage, how much water was involved, and what repairs will be considered. Some jobs we can complete in a matter of days, while other, more complex jobs may take a few weeks. We will communicate frequently with you throughout the process so you can stay organized when repairs impact your personal living space, as well as keep you updated until completion.',
        },
        {
            question: 'Will I need to leave my home during the restoration process?',
            answer: 'In some circumstances, it is recommended to temporarily leave a home. This is particularly true in situations where water damage may affect areas of a home that are necessary living spaces or in the event of heightened concerns for safety reasons. Our team carefully examines the circumstances and safety recommendations closely and provides you with options.',
        },
        {
            question: 'Will I be covered through insurance for the damage?',
            answer: 'Most homeowner and commercial insurance policies for water damage, particularly sudden or accidental damage in Colorado Springs, will have varying coverage specifics. Coverage will depend on how your specific policy is constructed and what the issue is causing damage. Our specialist will communicate with you and your insurance company, as well as assist in communication and paperwork with necessary processes to help you maximize the benefits of your coverage and expedite the claims process.',
        },
    ];

    const whyChooseUsFeatures = [
        {
            icon: FiClock,
            title: '24/7 Emergency Response',
            description: 'Our trained technicians are on standby to serve you day or night. With emergency water damage response in Colorado Springs, we can respond quickly to minimize damage and start immediate stabilization of your property.',
        },
        {
            icon: FiClipboard,
            title: 'Customized Plan',
            description: 'Every home or business needs a unique solution to their water damage. That is why we develop restoration plans around your unique property to recover the most efficiently while maintaining long-term structural integrity.',
        },
        {
            icon: FiTool,
            title: 'Trained and Experienced Staff',
            description: 'Our technicians receive ongoing training to remain ahead of industry standards. Their knowledge and attention to detail provide reassurance during stressful events for effective, safe, and sustainable results.',
        },
        {
            icon: FiCheckCircle,
            title: 'Insurance Accepted',
            description: 'We simplify the restoration process by working directly with your insurance carrier, and our staff assists with the claims and documentation required - easing any unnecessary stress during tough times.',
        },
    ];

    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero Section */}
            <Hero
                title={<>From Sudden Leaks to Lasting Repairs, <br className="hidden md:block" /> <span className="text-secondary">Complete Water Damage Restoration in Colorado Springs</span></>}
                backgroundImage="/images/water/water-damage-restoration-1.png"
                description="When facing flooding, pipe bursting, and leaks, every minute matters! Quick Response Restoration provides trustworthy water damage restoration in Colorado Springs, and we can take pride in restoring homes and businesses with our passionate care, accuracy, and knowledge. Our years of local experience and top-of-the-line equipment are essential to protecting property from more damage."
            />

            {/* Why Choose Us */}
            <WhyChooseUs
                title="What Makes Us Different?"
                description="Having the right partner for Water Damage Restoration in Colorado Springs can make all the difference. At Quick Response Restoration, our workmanship is done with urgency and compassion to address your water damage. We take care to ensure your property receives proper restoration at every step of the process."
                features={whyChooseUsFeatures}
                gridCols={2}
            />

            {/* Process Section */}
            <ServiceProcess
                title="Our Water Damage Restoration Process"
                description="Restoration is not just about removing water; it is about rebuilding stability, comfort, and security in your space. Our detailed process ensures every stage is handled with precision, protecting both property and belongings. Each step is guided by our skilled experts using advanced technology and proven methods."
                steps={waterDamageSteps}
            />

            {/* What Causes Water Damage - With Image */}
            <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white relative overflow-hidden">
                <div className="absolute inset-0 opacity-10" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                }}></div>

                <Container className="relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl md:text-5xl font-bold mb-6">What Causes Water Damage?</h2>
                            <p className="text-xl text-gray-300 mb-8">
                                Water damage can strike unexpectedly, often from sources homeowners overlook. Understanding the most common causes helps you respond quickly and protect your property from extensive harm.
                            </p>
                            <ul className="space-y-4">
                                {causes.map((cause, index) => (
                                    <li key={index} className="flex items-start">
                                        <FiDroplet className="text-secondary mt-1 mr-4 flex-shrink-0" size={24} />
                                        <span className="text-gray-200 text-lg">{cause}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                            <img
                                src="/images/water/water-damage-restoration-2.png"
                                alt="Water damage on walls"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </Container>
            </section>

            {/* Common Scenarios - With Image (Reversed) */}
            <section className="py-20 bg-white">
                <Container>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl order-2 lg:order-1">
                            <img
                                src="/images/water/water-damage-restoration-3.png"
                                alt="Water damage restoration"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="order-1 lg:order-2">
                            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">Common Water Damage Scenarios</h2>
                            <p className="text-xl text-gray-600 mb-8">
                                Whether gradual or sudden, water damage can appear in many forms. Recognizing these scenarios allows faster action and reduces costly repairs.
                            </p>
                            <ul className="space-y-4">
                                {scenarios.map((scenario, index) => (
                                    <li key={index} className="flex items-start">
                                        <scenario.icon className="text-secondary mt-1 mr-4 flex-shrink-0" size={24} />
                                        <span className="text-gray-700 text-lg">{scenario.description}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </Container>
            </section>

            {/* Signs You Need Restoration */}
            <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-100 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl -z-10"></div>
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10"></div>

                <Container className="relative z-10">
                    <div className="mb-16 text-center">
                        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">Signs You Need Water Damage Restoration</h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            Water damage is not always obvious, but certain warning signs should never be ignored. Recognizing them early allows homeowners to protect their property from deeper structural or health concerns. At Quick Response Restoration, we help identify these problems and provide effective solutions.
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
                                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-secondary transition-colors">{sign.title}</h3>
                                </div>
                                <p className="text-gray-600 leading-relaxed ml-16">{sign.description}</p>
                            </div>
                        ))}
                    </div>

                    {/* Remaining Rows - 2 Columns */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {signs.slice(3).map((sign, index) => (
                            <div key={index + 3} className="group bg-white rounded-xl p-8 border border-gray-200 hover:shadow-2xl hover:border-secondary/30 transition-all duration-300 hover:-translate-y-1">
                                <div className="flex items-start mb-4">
                                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-secondary to-red-700 flex items-center justify-center text-white flex-shrink-0 mr-4 group-hover:scale-110 transition-transform">
                                        <sign.icon size={24} />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-secondary transition-colors">{sign.title}</h3>
                                </div>
                                <p className="text-gray-600 leading-relaxed ml-16">{sign.description}</p>
                            </div>
                        ))}
                    </div>
                </Container>
            </section>

            {/* Commercial & Residential - With Side Image */}
            <section className="py-20 bg-white">
                <Container>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-8">Commercial & Residential Water Damage Restoration</h2>
                            <div className="text-lg text-gray-600 space-y-6 leading-relaxed">
                                <p>
                                    Water damage impacts families and businesses alike and can stop daily life or operations completely. Quick Response Restoration is here to provide trustworthy services to residential and commercial properties throughout Colorado Springs. Homeowners count on us to preserve their most valuable possessions, return their homes to a comfortable state, and protect their integrity over the long term. Businesses rely on our team to stop interruptions, reduce downtime, and restore a safe work environment as quickly as possible.
                                </p>
                                <p>
                                    No job is too small or too big, as our water damage restoration company in Colorado Springs can handle everything from a small interior repair to full-scale restoration projects. All the restoration from Quick Response Restoration is done with efficacy and care, as we approach every project with an inspection, utilize wood-drying technology, and complete repairs with precision.
                                </p>
                            </div>
                        </div>
                        <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                            <img
                                src="/images/water/water-damage-restoration-4.png"
                                alt="Professional restoration workers"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </Container>
            </section>

            <Contact
                title="Get Immediate Help – Contact Us Today!"
                description="When you need water damage restoration near me, trust Quick Response Restoration to deliver fast and dependable service. Our Colorado Springs team specializes in emergency water removal, advanced drying, and complete repairs for both homes and businesses. Call today for immediate assistance and let our experts restore your property with care."
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
