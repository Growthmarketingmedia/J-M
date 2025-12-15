'use client';

import React, { useState } from 'react';
import Hero from '@/components/sections/Hero';
import WhyChooseUs from '@/components/sections/WhyChooseUs';
import ServiceProcess from '@/components/sections/ServiceProcess';
import Contact from '@/components/sections/Contact';
import MapSection from '@/components/sections/MapSection';
import Container from '@/components/ui/Container';
import { FiCheckCircle, FiShield, FiClock, FiChevronDown, FiHome, FiTool, FiClipboard } from 'react-icons/fi';
import { BsHouseDoor, BsLightning } from 'react-icons/bs';
import { TbFlame, TbBuildingWarehouse } from 'react-icons/tb';
import { MdConstruction, MdOutlineRoofing, MdOutlineCleaningServices } from 'react-icons/md';
import { GiWaterDrop, GiVacuumCleaner } from 'react-icons/gi';
import { RiPaintBrushLine } from 'react-icons/ri';

export default function ReconstructionPage() {
    const [openFaq, setOpenFaq] = useState<number | null>(0);

    const services = [
        {
            icon: MdConstruction,
            title: 'Structural Repairs & Rebuilding',
            description: 'We repair foundations, framing, and support systems that form the backbone of any building. Rebuilding these elements ensures safety and reliability for the long term.',
        },
        {
            icon: RiPaintBrushLine,
            title: 'Interior & Exterior Renovations',
            description: 'From updated kitchens and bathrooms to new siding and roofing, renovations allow property owners to refresh and improve spaces during reconstruction.',
        },
        {
            icon: MdOutlineRoofing,
            title: 'Roofing, Flooring & Drywall Replacement',
            description: 'Critical features such as roofs and floors are replaced with durable materials. Drywall installation brings clean, strong walls back to the property.',
        },
        {
            icon: FiHome,
            title: 'Full Property Remodeling & Upgrades',
            description: 'Reconstruction can be an opportunity to improve layouts, energy efficiency, or design. We offer complete remodeling services to enhance both function and appearance.',
        },
        {
            icon: FiTool,
            title: 'Project Management from Start to Finish',
            description: 'Our dedicated managers oversee timelines, budgets, and quality control. This comprehensive approach allows property owners to remain informed while we handle the details.',
        },
    ];

    const whyChooseUsFeatures = [
        {
            icon: FiCheckCircle,
            title: 'Licensed, Insured, and Certified Reconstruction Experts',
            description: 'We bring full credentials, giving you confidence that your project meets professional and safety standards.',
        },
        {
            icon: TbBuildingWarehouse,
            title: 'Residential and Commercial Experience',
            description: 'From single-family homes to office buildings, our team has handled projects of all sizes with equal commitment to quality.',
        },
        {
            icon: FiShield,
            title: 'High-Quality Materials and Modern Building Techniques',
            description: 'We use materials that stand the test of time and apply construction methods that improve durability and efficiency.',
        },
        {
            icon: FiClipboard,
            title: 'Seamless Insurance Claim Assistance',
            description: 'Our team works directly with insurers to make the process smoother, reducing stress for property owners.',
        },
        {
            icon: FiClock,
            title: '24/7 Emergency Response',
            description: 'Disasters do not follow schedules. Having a contractor available at any time ensures reconstruction starts without delay.',
        },
    ];

    const whenNeeded = [
        {
            icon: TbFlame,
            title: 'After Fire or Smoke Damage',
            description: 'Fire does more than just cause surface damage. The heat from a fire weakens the framing, and smoke gets into walls, ceilings, and HVAC systems. A professional reconstruction service will assess the damage from the fire you can see, and what has been destroyed that you can\'t see.',
        },
        {
            icon: GiWaterDrop,
            title: 'After Water or Sewage Damage',
            description: 'In the case of severe flooding, or a sewage backup, the flooring, drywall, and or support structures have become severely compromised. A section or sections of the property will likely need to be replaced due to the safety of drying it or cleaning it being exhausted.',
        },
        {
            icon: GiVacuumCleaner,
            title: 'After Mold or Asbestos Removal',
            description: 'Removing hazardous materials often leaves open deviations in the walls, flooring, or insulation. A reconstruction service will close those gaps in addition to restoring your property so you can safely return to using it. This step also strengthens the structure and prevents future vulnerabilities from developing.',
        },
        {
            icon: BsLightning,
            title: 'Storm/Disaster Damage',
            description: 'High winds, hail, and falling trees can cause serious structural and surface damage. A reconstruction service will provide you with a new roof, siding, and structural elements to help your property better withstand the next event. Skilled reconstruction also restores curb appeal, keeping your home or business looking strong and welcoming.',
        },
    ];

    const faqs = [
        {
            question: 'How long does reconstruction take after damage?',
            answer: 'The duration depends on the scale of damage and the complexity of repairs. Small projects may take a few weeks, while full property reconstruction can span several months. Our team provides accurate timelines after inspection, ensuring you know exactly what to expect at each stage of the rebuild.',
        },
        {
            question: 'Can you handle both small and large projects?',
            answer: 'Yes. Quick Response Restoration manages everything from replacing damaged drywall to rebuilding entire homes or commercial spaces. Our licensed contractors bring the same level of care to small repairs as they do to large, multi-phase reconstruction projects, ensuring consistent quality regardless of scale.',
        },
        {
            question: 'Do I need to move out during reconstruction?',
            answer: 'In many cases, it is safer and more practical to relocate temporarily, especially when major structural work is involved. Our team advises each client on the best course of action based on project scope. We aim to minimize disruption while maintaining safety and efficiency throughout the process.',
        },
        {
            question: 'Does insurance cover reconstruction?',
            answer: 'Coverage depends on your policy and the cause of damage. Most standard homeowner and business insurance plans cover reconstruction following fire, water, or storm damage. We assist clients with documentation, estimates, and direct communication with insurers, helping maximize eligible coverage and reduce financial strain during the rebuilding process.',
        },
    ];

    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero Section */}
            <Hero
                title={<>From Ruins to Remarkable Spaces: <br className="hidden md:block" /> <span className="text-secondary">Colorado Springs Reconstruction Company You Can Truly Trust</span></>}
                backgroundImage="/images/reconstruction/reconstruction-service-1.png"
                description="When disaster strikes, restoring your property requires more than a quick repair. At Quick Response Restoration, we offer professional reconstruction services in Colorado Springs that rehabilitate homes and businesses needing work after an extensive loss. Whether it's a result of fire, water intrusion, storm damage, or mold issues, our talented team stands poised for the restoration of your property with care and precision. Each project will be supervised by a licensed contractor who understands both structural integrity and quality craftsmanship. We recognize that when property is damaged, families and businesses are often left reeling with the effects. That's why we not only provide 24-hour, 7-day-a-week service and expedient responses to emergencies, but we also customize the restoration solution to suit the needs of your project. Restoration is our mission."
            />

            {/* Why Choose Us */}
            <WhyChooseUs
                title="Why Choose Us for Property Reconstruction"
                description="Choosing the right contractor is critical for a successful rebuild. At Quick Response Restoration, we set ourselves apart as the leading reconstruction company Colorado Springs trusts. Our work combines technical expertise with customer-focused service."
                features={whyChooseUsFeatures}
                gridCols={3}
            />

            {/* Why Reconstruction Services Are Important - Dark Section */}
            <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white relative overflow-hidden">
                <div className="absolute inset-0 opacity-10" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                }}></div>

                <Container className="relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl md:text-5xl font-bold mb-6">Why Reconstruction Services Are Important</h2>
                            <p className="text-xl text-gray-300 mb-6">
                                Damage to your property affects more than just aesthetics; it impacts safety and future value as well. When it comes to reconstruction services in Colorado Springs, enlist the help of professionals who pay careful attention to codes and materials when reconstructing, while ensuring the overall stability of the restoration is prepared for the long term.
                            </p>

                            <div className="space-y-6">
                                <div>
                                    <h3 className="text-2xl font-bold mb-3 text-secondary">Safety and Structural Integrity</h3>
                                    <p className="text-gray-300">
                                        After a fire, clean up from a flood, or a severe storm, many of the structural components may be compromised. Reconstruction mitigates the potential hazard of risks associated with walls, roofing, or foundations being compromised by safely rebuilding the aforementioned structures and fully meeting regulatory standards.
                                    </p>
                                </div>

                                <div>
                                    <h3 className="text-2xl font-bold mb-3 text-secondary">Property Value</h3>
                                    <p className="text-gray-300">
                                        As time goes on, unresolved damage shows itself to be much more costly than was previously expected. Reconstruction will protect your time and investment by thoroughly repairing both damage and other potential problems to preserve resale value.
                                    </p>
                                </div>

                                <div>
                                    <h3 className="text-2xl font-bold mb-3 text-secondary">Complete Service</h3>
                                    <p className="text-gray-300">
                                        From demolition to a finished rebuild, you will no longer need to balance multiple contractors, and your reconstruction is left to a reliable reconstruction company near me. Your property will be looked after by trusted professionals who have experience in the industry and put quality above all else.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="relative h-[600px] rounded-2xl overflow-hidden shadow-2xl">
                            <img
                                src="/images/reconstruction/reconstruction-service-2.png"
                                alt="Reconstruction services"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </Container>
            </section>

            {/* When Do You Need Reconstruction Services */}
            <section className="py-20 bg-white">
                <Container>
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">When Do You Need Reconstruction Services?</h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            Property owners frequently have a challenge determining when repair ends and reconstruction begins. Quick Response Restoration provides you with guidance through assessment reports that explain whether your property needs to be repaired or if reconstruction is called for. Generally speaking, the need for reconstruction usually comes following a major event where safety and structural integrity have been compromised.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {whenNeeded.map((item, index) => (
                            <div key={index} className="group bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-2xl p-8 hover:shadow-2xl hover:border-secondary/30 transition-all duration-300 hover:-translate-y-1">
                                <div className="mb-6">
                                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-secondary to-red-700 flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                                        <item.icon size={32} />
                                    </div>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-secondary transition-colors">
                                    {item.title}
                                </h3>
                                <p className="text-gray-600 leading-relaxed text-sm">
                                    {item.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </Container>
            </section>

            {/* Comprehensive Solutions - Process Component */}
            <ServiceProcess
                title="Comprehensive Property Reconstruction Tailored to Your Needs"
                description="Every reconstruction project is different, which is why Quick Response Restoration creates customized plans for each property. We focus on both structural integrity and appearance, ensuring your home or business is not only rebuilt but also upgraded where possible. Our team combines advanced construction methods with practical project management to deliver results that last."
                steps={services}
                gridCols={3}
            />

            {/* Service Areas */}
            <section className="py-20 bg-white">
                <Container>
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">Service Areas</h2>
                        <p className="text-lg text-gray-600 mb-8">
                            Quick Response Restoration proudly serves communities throughout Colorado Springs and surrounding regions. We believe professional reconstruction should be accessible to every property owner in need, which is why we extend our services across the region. Whether the damage is minor or catastrophic, our team is ready to respond quickly with tailored solutions.
                        </p>
                        <p className="text-lg text-gray-600 mb-8">
                            Our coverage includes neighborhoods throughout Colorado Springs, as well as nearby areas such as Monument, Fountain, Manitou Springs, and Woodland Park. We also assist property owners in Peyton, Falcon, and other El Paso County locations. Each project, regardless of size, receives the same attention to detail and commitment to quality.
                        </p>
                        <p className="text-lg text-gray-600">
                            By choosing Quick Response Restoration, homeowners and businesses gain access to a local contractor with proven expertise and trusted service. No matter where you are located, our goal remains the same: to restore safety, functionality, and comfort through professional reconstruction.
                        </p>
                    </div>
                </Container>
            </section>

            <Contact
                title="Restore & Rebuild with Professional Reconstruction Services"
                description="Rebuilding after major property damage requires more than skill; it demands dedication, quality, and a team you can trust. Quick Response Restoration delivers all of this and more. As the leading reconstruction company near me, we are ready to help homes and businesses in Colorado Springs recover and thrive. Contact us today to schedule an inspection and discover how our reconstruction services can restore strength and value to your property."
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
