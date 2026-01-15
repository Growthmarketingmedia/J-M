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
            title: 'Emergency Response',
            description: 'Our Fire Professionals respond to emergencies at any time of the day. When they arrive on scene, their focus is on minimizing additional damage to property while they secure the site and start the mitigation process.',
        },
        {
            icon: FiClipboard,
            title: 'Damage Assessment',
            description: 'Our Fire Professionals will provide a complete and thorough assessment of damage caused by fire, smoke, and water. We will collect the information and create documentation as we conduct the assessment, which will help expedite the insurance claims process.',
        },
        {
            icon: FiWind,
            title: 'Removing Water From Firefighting Activities',
            description: 'Firefighting efforts use water to put out fires, and the water causes additional damage. The Fire Professionals will remove the water used in extinguishing the fire and dry affected areas. They will also use professional equipment to stop the growth of mold in any wet area.',
        },
        {
            icon: TbSmokingNo,
            title: 'Removing Smoke/Soot/Odor',
            description: 'Every affected area will be cleaned and sanitized by the Fire Professionals. They will use specialized techniques to eliminate all smoke residue, soot particles, and odors from the air and from all surfaces of the property. The methods used by our Fire Professionals will improve the way the property appears and the air quality throughout the property.',
        },
        {
            icon: MdConstruction,
            title: 'Repairs/Renovations/Final Restoration',
            description: 'Including board-up and growing, we are capable of doing any, if not all, of the restoration work to your home or business. Our Fire Professionals can assist you in restoring a home or business to its original condition and will create either smaller renovations for a single-family residence or create bigger renovations for larger businesses.',
        },
    ];

    const services = [
        {
            icon: FiShield,
            title: 'Emergency Board-up and Structural Safety',
            description: 'To protect your structure from further damage, we immediately establish a board-up program and secure your structure with an appropriate cover (tarps), until permanent repairs can be completed. We evaluate the affected areas of your property for structural stability and take additional measures to minimise risk to your family, employees, and first responders.',
        },
        {
            icon: TbSmokingNo,
            title: 'Smoke and Soot Removal',
            description: 'The residue from smoke and soot is everywhere inside your home or business, as these particles travel through the air and become lodged in every surface. We will remove smoke and soot using advanced cleaning methods from all surfaces, including walls, ceilings, and contents. By removing smoke and soot, we will eliminate long-term staining, corrosion, and damage and restore everything to a clean, safe state.',
        },
        {
            icon: FiWind,
            title: 'Odour Elimination and Air Purification',
            description: 'Smoke odours can be extremely unpleasant and harmful to your health. We will remove smoke odours at their source, using industrial-strength air scrubbers, ozone treatments, and deodorising agents. This process will also leave the air purified, creating a healthy environment in your home or business.',
        },
        {
            icon: MdConstruction,
            title: 'Structural Repairs and Reconstruction',
            description: 'We will repair and reconstruct the damaged areas of your property by repairing and replacing all damaged materials in an effective manner. From repairing walls and floors to rebuilding your kitchens and offices, our objective is to return your property to its original condition or better. Each project will be designed to fit your specific needs and time frame while maintaining the structural integrity and aesthetic appeal of your property.',
        },
    ];

    const whyChooseUsFeatures = [
        {
            icon: FiCheckCircle,
            title: 'Qualified, Certified, and Insured Restoration Experts',
            description: 'Our certified restoration experts are well-trained in all areas of fire restoration and will safely perform their jobs, assuring quality results for our clients.',
        },
        {
            icon: FiClock,
            title: 'Available 24Hours 7 Days a Week',
            description: 'Fire is an unexpected occurrence; thus, we provide 24/7 emergency response to prevent any additional damage to the property.',
        },
        {
            icon: FiClipboard,
            title: 'Assist With Insurance Claims',
            description: 'We coordinate everything with your insurance company; therefore, we provide all required documentation and an extensive knowledge of the claims process.',
        },
        {
            icon: FiHome,
            title: 'Trustworthy Record of Restoring Local Homes and Businesses',
            description: 'In Denver, we have provided a high-quality restoration service to many homes and businesses, earning the trust of our clients due to the highest quality of work, professionalism, detail-oriented work ethic, and on-time performance.',
        },
    ];

    const faqs = [
        {
            question: 'When should fire damage restoration start?',
            answer: 'Restoration should occur as soon as possible, and ideally within hours of suppression. Taking immediate action will help avoid further damage due to structural deterioration caused by smoke and soot, and having documentation in place for any future insurance claims will also help reduce long-term costs.',
        },
        {
            question: 'How long does the fire damage restoration take?',
            answer: 'Timeframes for restoration will be determined by the size of the property and the severity of the damage and may range from a few days for small repairs to several weeks for larger reconstruction projects. We will communicate with you along the way and do our best to restore your property in the shortest amount of time.',
        },
        {
            question: 'Will my insurance pay for fire damage restoration?',
            answer: 'Most homeowner and commercial insurance will cover fire damage, so we must assist you with the proper documentation, obtain an estimate for restoration, and communicate with your insurance company properly to ensure that your claims are handled as quickly and accurately as possible.',
        },
        {
            question: 'Can all smoke odors be removed from my home?',
            answer: 'Yes, smoke odor can be removed completely by a professional restoration company. Our team will utilize specialized cleaning products, air scrubbers, and deodorization treatments to eliminate visible residue as well as hidden sources of odor in your walls and ceilings, as well as in your HVAC system.',
        },
    ];

    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero Section */}
            <Hero
                title="Rapid Fire Damage Restoration in Denver: Protect, Clean, and Rebuild Your Property Fast"
                backgroundImage="/images/Fire/fire-damage-restoration-1.png"
                description="Quick Response Restoration provides a fast, dependable service for any fire damage restoration in Denver, Colorado. We help you protect your home or business by cleaning up hazardous materials, securing the site, and restoring your property to its pre-fire condition. We respond quickly, prioritize safety and containment of the affected area, and provide comprehensive recovery to minimize future damage and make your property safe and usable again."
            />

            {/* Why Immediate Fire Damage Restoration Matters - Custom Section */}
            <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white relative overflow-hidden">
                <div className="absolute inset-0 opacity-10" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                }}></div>

                <Container className="relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl md:text-5xl font-bold mb-6">Why Immediate Fire Damage Restoration Matters</h2>
                            <p className="text-xl text-gray-300 mb-6">
                                When tragedy strikes and your home is damaged by fire, every minute counts. If you wait to have the restoration done on your property, the longer you wait, the greater the chance that your structure will collapse, that there will be residual smoke damage, and that permanent damage to your possessions will occur. Quick Response Restoration is here to provide prompt action to stabilize your building and keep its occupants safe while minimizing the cost of mitigation in the long run. Once an experienced technician assesses the damage to your property, they will remove hazardous debris and put into place actions to help prevent continued deterioration.
                            </p>
                            <p className="text-lg text-gray-300">
                                Immediate restoration is important to avoid the smoke and soot pressing into walls, carpet, and heating, ventilation, and air conditioning (HVAC) systems, which are both costly and time-consuming to clean later. By acting quickly, we protect your investment and your possessions. Timely action also makes it easier for you to deal with your insurance company; it helps us document the claims accurately and easily. Homeowners and business owners can rest assured that once we have a professional restoration team on-site, they will be able to handle the fire damage with confidence and clarity.
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
                            Quick Response Restoration offers complete Fire damage restoration services in Denver, including fire damage, smoke damage, and all aspects of firefighting. Our team does a thorough job cleaning up the visible destruction, as well as addressing any hidden damages to your property, so that it can be restored safely and properly.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {services.map((service, index) => (
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
                </Container>
            </section>

            {/* Our Fire Restoration Process */}
            <ServiceProcess
                title="Our Fire Restoration Process"
                description="Our process for repairing homes and businesses is straightforward and organized, with an assurance of complete restoration and rehabilitation of property. We manage every part of the restoration process in order to restore the property to its original state, prevent recurring damage, and be as efficient as possible."
                steps={fireDamageSteps}
            />

            {/* Why Choose Us */}
            <WhyChooseUs
                title="Why Choose Us"
                description="Quick Response Restoration has put together the knowledge and experience needed, plus the customer service that only a locally operated company can provide, to ensure an exceptional job when rebuilding homes or businesses that have experienced fire damage in Denver, CO."
                features={whyChooseUsFeatures}
                gridCols={2}
            />

            <Contact
                title="Restore Your Property After Fire Damage Today"
                description="Don't delay; protect yourself and start your recovery immediately. Quick Response Restoration is your number one resource for timely fire damage restoration in Denver, CO, for residential and commercial properties. We are available anytime, day or night, to offer you our professional fire damage repair services and complete smoke and fire restoration in Denver to make your space secure again. Please, contact us now!"
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
