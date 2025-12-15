'use client';

import React, { useState } from 'react';
import Hero from '@/components/sections/Hero';
import WhyChooseUs from '@/components/sections/WhyChooseUs';
import ServiceProcess from '@/components/sections/ServiceProcess';
import Contact from '@/components/sections/Contact';
import MapSection from '@/components/sections/MapSection';
import Container from '@/components/ui/Container';
import { FiCheckCircle, FiShield, FiClock, FiAlertTriangle, FiChevronDown, FiEye, FiWind } from 'react-icons/fi';
import { BsDropletFill, BsMoisture, BsLightning } from 'react-icons/bs';
import { TbMoodSad, TbBuildingWarehouse } from 'react-icons/tb';
import { MdOutlineHealthAndSafety, MdOutlineCleaningServices, MdScience } from 'react-icons/md';
import { GiHealthNormal } from 'react-icons/gi';
import { RiMicroscopeLine } from 'react-icons/ri';

export default function MoldRemediationPage() {
    const [openFaq, setOpenFaq] = useState<number | null>(0);

    const services = [
        {
            icon: RiMicroscopeLine,
            title: 'Mold Inspection & Testing',
            description: 'Our specialists conduct detailed inspections using advanced tools to detect hidden colonies. Air and surface samples identify mold type and severity, allowing us to create a targeted removal strategy. This ensures every source is properly addressed from the start.',
        },
        {
            icon: FiShield,
            title: 'Safe Mold Containment & Removal',
            description: 'Containing mold is essential to prevent spores from spreading. We install protective barriers, use HEPA filtration, and follow safe removal methods. By isolating the affected areas, our team prevents further contamination while efficiently removing existing mold colonies.',
        },
        {
            icon: FiWind,
            title: 'Air Filtration & Odor Removal',
            description: 'Lingering spores and odors compromise indoor air quality. We utilize high-efficiency filtration systems to capture airborne particles and advanced treatments to neutralize unpleasant smells. The result is fresher, healthier air for everyone inside the property.',
        },
        {
            icon: BsMoisture,
            title: 'Prevention & Moisture Control',
            description: 'Long-term protection requires addressing moisture issues. We identify leaks, reduce humidity, and provide solutions that limit conditions for future mold growth. This proactive approach ensures mold removal is not just temporary but a lasting safeguard for your investment.',
        },
    ];

    const whyChooseUsFeatures = [
        {
            icon: FiCheckCircle,
            title: 'Certified and Licensed Remediation Specialists',
            description: 'Our technicians are fully certified, licensed, and experienced, ensuring that every project meets the highest industry standards.',
        },
        {
            icon: MdOutlineCleaningServices,
            title: 'Eco-Friendly, Safe, and Proven Removal Methods',
            description: 'We use safe products and advanced techniques designed to protect families, pets, and the environment while achieving complete removal.',
        },
        {
            icon: FiClock,
            title: '24/7 Emergency Response Team',
            description: 'Mold can worsen quickly, which is why we offer round-the-clock emergency services. Whenever you need us, we respond immediately to begin restoration.',
        },
        {
            icon: FiShield,
            title: 'Insurance Claim Support and Stress-Free Process',
            description: 'We assist with claim documentation, working directly with insurance providers to simplify the process and help you receive the benefits you deserve.',
        },
    ];

    const signs = [
        {
            icon: FiEye,
            title: 'Visible Mold Growth',
            description: 'If you can see black, green, or white patches starting to appear on your walls, ceilings, or flooring, this is a sign that mold is growing. Even small patches could indicate widespread hidden mold growth that requires investigation from a Specialist.',
        },
        {
            icon: TbMoodSad,
            title: 'Musty Odors',
            description: 'A lingering musty or earthy odor, especially in basements, bathrooms, or other enclosed areas, may indicate hidden mold. With odors caused by mold, there will be any odor whatsoever, and with lingering mold, removing the source of the odor will not resolve the issue.',
        },
        {
            icon: BsDropletFill,
            title: 'Water Damage or Leaks',
            description: 'Leaks or other water damage from roofs, plumbing, or appliances provide an opportunity for mold to flourish. Staining, peeling paint, or bubbling of walls are common indicators that mold may be growing somewhere water was allowed to intrude.',
        },
        {
            icon: GiHealthNormal,
            title: 'Health Symptoms',
            description: 'Unexplained coughing, nasal congestion, headaches, or increased allergies while indoors typically indicate the presence of hidden mold. If symptoms improve while away from a property, professional testing and subsequent removal should be scheduled immediately.',
        },
    ];

    const faqs = [
        {
            question: 'How much does mold removal cost?',
            answer: 'The cost of professional mold removal varies depending on the size of the affected area, the type of mold, and the location within the property. Minor cases may be addressed affordably, while extensive contamination requires more intensive remediation. At Quick Response Restoration, we provide upfront estimates after inspection so you understand the investment clearly.',
        },
        {
            question: 'How long does mold removal take?',
            answer: 'Mold removal timelines range from a few hours to several days, depending on severity and damage. Small surface growth can be managed quickly, while hidden mold within walls or large structures takes longer to remove and restore. Our team communicates every step, keeping the process efficient and transparent.',
        },
        {
            question: 'Can I remove mold myself?',
            answer: 'Attempting to clean mold without training may spread spores and worsen the problem. Household cleaners rarely address colonies growing beneath surfaces. Professional specialists use protective equipment, advanced tools, and tested methods to ensure complete removal. Choosing experts prevents regrowth, protects health, and eliminates mold more effectively than do-it-yourself attempts.',
        },
        {
            question: 'Will mold come back after removal?',
            answer: 'Mold can return if moisture issues remain unresolved. Proper prevention, including fixing leaks, improving ventilation, and controlling humidity, is essential. With professional Mold Damage Restoration Colorado Springs, our team removes mold at its source and implements strategies to reduce conditions for recurrence. This combination ensures long-lasting protection and safety.',
        },
    ];

    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero Section */}
            <Hero
                title={<>From Hidden Mold to Healthy Homes, <br className="hidden md:block" /> <span>Expert Mold Removal Company Colorado Springs Residents Depend On</span></>}
                backgroundImage="/images/mold/mold-remediation-1.png"
                description="When mold takes hold in your property, the damage often runs deeper than what is visible. At Quick Response Restoration, our expertise lies in identifying and removing the mold itself and addressing the conditions that created the mold to grow in the first place. Our trained professionals use technology and techniques that are proven to find hidden colonies and to remove them at the source. No matter if the problem was due to humidity, plumbing leaks, or a lack of ventilation, our solutions are based on your individual needs. As one of the leading Colorado Springs Mold Removal Companies, we restore your property and protect your health, using precision, care, and long-term prevention. When searching for 'Mold Remediation Near Me,' trust the local experts who are committed to ensuring that the highest level of professionalism and care are provided for a lasting result."
            />

            {/* Why Choose Us */}
            <WhyChooseUs
                title="Why Choose Us for Mold Removal"
                description="Choosing the right company for Colorado Springs Mold Removal determines whether the problem is solved permanently or returns later. At Quick Response Restoration, our reputation is built on thorough service, customer trust, and proven results."
                features={whyChooseUsFeatures}
                gridCols={2}
            />

            {/* Why Mold Removal Is Important - Dark Section */}
            <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white relative overflow-hidden">
                <div className="absolute inset-0 opacity-10" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                }}></div>

                <Container className="relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl md:text-5xl font-bold mb-6">Why Mold Removal Is Important</h2>
                            <p className="text-xl text-gray-300 mb-6">
                                Mold should certainly never be taken lightly. It represents more than an unwanted blemish on your walls or ceilings; it is a living organism that can negatively impact both health and property when it is allowed to fester. At Quick Response Restoration, we take the issue of mold seriously because we want our local community to have safe homes and workplaces.
                            </p>

                            <div className="space-y-6">
                                <div>
                                    <h3 className="text-2xl font-bold mb-3 text-secondary">Health Risks</h3>
                                    <p className="text-gray-300">
                                        Mold can cause allergy symptoms, such as sneezing, watery eyes, or skin irritation. Mold can be extremely dangerous for those with severe asthma or weakened immune systems, resulting in difficulty breathing or major infections. Children and seniors are especially vulnerable, further emphasizing the importance of Colorado Springs Mold Removal by professionals when mold is present.
                                    </p>
                                </div>

                                <div>
                                    <h3 className="text-2xl font-bold mb-3 text-secondary">Long-term Exposure Risks</h3>
                                    <p className="text-gray-300">
                                        Continued exposure to mold can induce chronic respiratory problems and fatigue. Long-term mold exposure also allows for bacteria and other harmful contaminants to flourish. Mold is not a material that sits dormant; it spreads quietly and generally goes unnoticed until it affects your air quality more noticeably.
                                    </p>
                                </div>

                                <div>
                                    <h3 className="text-2xl font-bold mb-3 text-secondary">Structural Risks</h3>
                                    <p className="text-gray-300">
                                        Over time, mold will be actively breaking down the materials that create the structure of your property. Wood rot will weaken framing. Drywall will become soft and eventually give way, and insulation will lose insulating value. All these issues lead to costly repairs and reduced property value. With professional Mold Damage Restoration Colorado Springs, our team will extract the mold and make the repairs and reinforcements in the affected structures to enable safe, long-term durability.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="relative h-[600px] rounded-2xl overflow-hidden shadow-2xl">
                            <img
                                src="/images/mold/mold-remediation-2.png"
                                alt="Mold removal"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </Container>
            </section>

            {/* Signs You Need Mold Removal */}
            <section className="py-20 bg-white">
                <Container>
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">Signs You Need Mold Removal</h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            Mold frequently remains undiscovered until it has caused significant damage; however, there are warning signs to be aware of. By recognizing the signs early enough to take action, conditions can be prevented from worsening. Quick Response Restoration encourages property owners to be on the lookout for the following signs.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {signs.map((sign, index) => (
                            <div key={index} className="group bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-2xl p-8 hover:shadow-2xl hover:border-secondary/30 transition-all duration-300 hover:-translate-y-1">
                                <div className="mb-6">
                                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-secondary to-red-700 flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                                        <sign.icon size={32} />
                                    </div>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-secondary transition-colors">
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

            {/* Comprehensive Solutions - Process Component */}
            <ServiceProcess
                title="Comprehensive Mold Remediation Solutions Customized for Your Property"
                description="Every property is unique, which means mold problems demand customized solutions. At Quick Response Restoration, we offer comprehensive Mold Remediation Colorado Springs designed to eliminate growth, restore safety, and prevent recurrence. Our process addresses both visible damage and hidden risks."
                steps={services}
                gridCols={4}
            />

            {/* Service Areas */}
            <section className="py-20 bg-white">
                <Container>
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">Service Areas</h2>
                        <p className="text-lg text-gray-600 mb-8">
                            Quick Response Restoration proudly serves Colorado Springs and the surrounding communities with dependable and thorough mold remediation services. We understand that mold issues can affect properties across neighborhoods, from historic homes to modern offices, which is why our team is ready to assist wherever help is needed.
                        </p>
                        <p className="text-lg text-gray-600 mb-8">
                            Our service area extends throughout El Paso County, including Monument, Fountain, Manitou Springs, Security, Widefield, Peyton, and nearby communities. As trusted Mold Removal Specialists Colorado Springs, we bring local knowledge and commitment to every project. Each property receives tailored solutions designed to meet the specific needs of its structure and environment.
                        </p>
                        <p className="text-lg text-gray-600">
                            Whether you need immediate Mold Remediation Near Me after water damage or preventative inspection for ongoing concerns, our experts provide solutions that restore safety and improve indoor air quality. With fast response times and lasting results, we remain the company that residents and businesses count on when it matters most.
                        </p>
                    </div>
                </Container>
            </section>

            <Contact
                title="Protect Your Property & Health with Professional Mold Removal"
                description="Mold threatens more than your property; it impacts your health and comfort every day it remains untreated. Quick Response Restoration delivers reliable Colorado Springs Mold Removal that eliminates colonies, restores safety, and prevents future growth. Do not wait until minor problems become major expenses. Call our certified team today for professional Mold Remediation Colorado Springs and let us help you reclaim a clean, healthy living space built to last."
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
