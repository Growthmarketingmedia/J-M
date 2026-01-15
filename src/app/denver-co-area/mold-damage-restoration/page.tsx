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
            title: 'Mold Inspection and Testing',
            description: 'An assessment of your property is necessary to find where mold is growing and how much has spread. We do advanced testing to help determine what type of mold is there and how much mold is present. The inspection and testing data will allow Mold Removal Specialists Denver to develop an effective and customized remediation plan for your property.',
        },
        {
            icon: FiShield,
            title: 'Safe Mold Containment and Removal',
            description: 'Mold containment is a service that allows a client to treat contaminated areas without being concerned about cross-contamination. We safely and effectively remove mold with specialized equipment and techniques. Our team takes great care to minimize disruption to your daily activities while ensuring that all mold is removed completely.',
        },
        {
            icon: FiWind,
            title: 'Air Filtration and Odor Removal',
            description: 'Even after the completion of mold removal, airborne mold spores and musty odors can still be present in the air. Specially designed High-Efficiency Air Filtration Systems are used to eliminate excess spores, and the process of deodorization returns the indoor environment to its clean and fresh Condition. Our Mold Remediation Denver services ensure that you inhale clean air.',
        },
        {
            icon: BsMoisture,
            title: 'Prevention and Moisture Control',
            description: 'Preventing mold from returning is as important as mold removal. We educate clients about how to control moisture, perform necessary repairs, and improve ventilation. Our proactive measures are included in all of our Mold Removal Denver, CO services and enable a client to maintain a safe and dry environment for years to come.',
        },
    ];

    const whyChooseUsFeatures = [
        {
            icon: FiCheckCircle,
            title: 'Mold Remediation Specialists',
            description: 'We have certified mold remediators who have gone through extensive training and only utilize proven methods established in the industry to completely remove mold from properties.',
        },
        {
            icon: MdOutlineCleaningServices,
            title: 'Environmentally Safe and Eco-Friendly Mold Removal',
            description: 'Our main goal is to use environmentally conscious methods of remediation so as not to damage the environment and maintain a safe and protected environment for our clients and their property while providing them with exceptional service and results.',
        },
        {
            icon: FiClock,
            title: '24-7 Emergency Response',
            description: 'Mold can spread and multiply very quickly, creating an increased risk of exposure to occupants and further damage to the structure of the building. Our team is ready to assist 24/7 in emergencies.',
        },
        {
            icon: FiShield,
            title: 'Insurance Assistance',
            description: 'Filing insurance claims can be a difficult process to navigate. We assist our clients by providing them with complete documentation, making Mold Removal Denver CO an easy and hassle-free process.',
        },
    ];

    const signs = [
        {
            icon: FiEye,
            title: 'Visible Mold Growth',
            description: 'Any visible green, black, or white mold growth is a warning sign. Even the smallest amount can lead to bigger problems if left untreated. Our Mold Removal Services Denver team will assess the affected areas and remove the source of the mold.',
        },
        {
            icon: TbMoodSad,
            title: 'Musty Odors',
            description: 'Musty or earthy smells coming from areas such as closets, basements, and behind walls are evidence of underground mold growth. By contacting us for Mold Remediation Denver, you will be able to eliminate both the smell and the mold.',
        },
        {
            icon: BsDropletFill,
            title: 'Water Damage / Leaks',
            description: 'Water from the roof and plumbing leaks creates an ideal environment for mold growth. Any visible water intrusion, spots on the floor, or water stains should be addressed immediately. Our Mold Removal Denver, CO technicians will locate the source of moisture and eliminate the risk of mold growth.',
        },
        {
            icon: GiHealthNormal,
            title: 'Health Symptoms',
            description: 'Sneezing, coughing, headaches, and skin irritation are common symptoms of mold exposure. If your symptoms worsen when you are indoors, it is imperative to have a professional assess the situation. A Mold Removal Company, Denver CO protects your health and provides a clean living environment.',
        },
    ];

    const faqs = [
        {
            question: 'How much does mold removal cost?',
            answer: 'Costs depend on how large the infected area is, what types of mold there are, and how badly the area has been damaged by mold. For example, small mold infestations can cost hundreds, while more serious, large-scale cases of mold that require structural repairs can cost thousands. All Mold Removal Services Denver provides will give you a clear price and a written estimate of your Mold Removal Service costs after inspection.',
        },
        {
            question: 'How long does it take to remove the mold?',
            answer: 'Small, localized areas can usually be cleaned in one day, whereas larger or heavily infested areas can take several days or longer, depending on the size of the area, how many contaminated items need to be removed, etc. Quick, professional work from a Mold Removal Company in Denver, CO, will surround your home or building with the safety of being done correctly.',
        },
        {
            question: 'Can I remove the mold myself?',
            answer: 'While small isolated patches may seem easy to clean, attempting DIY mold remediation can lead to further spreading the spores around the home or inadvertently missing hidden growth. Therefore, you have a much better chance of eliminating your mold problem and preventing the return of your mold problem if you hire Mold Remediation Near Me professionals.',
        },
        {
            question: 'Will mold come back after it has been removed?',
            answer: 'If the source of moisture is not resolved, the mold can return. We will not only remove any visible mold in your house but also create a system that keeps your house dry and reduces the unnecessary repeats of your mold problems. Using a professional Mold Removal in Denver, CO will significantly lessen your chances of the recurrence of a mold infestation.',
        },
    ];

    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero Section */}
            <Hero
                title="Fast, Expert Mold Removal in Denver, CO: Protect Your Health and Property Today"
                backgroundImage="/images/mold/mold-remediation-1.png"
                description="Besides being an unpleasant sight, mold is responsible for several severe health problems, such as asthma, allergies, and respiratory illnesses. Whether you're dealing with mold in your home or workplace, a quick response is critical to ensure the safe removal of any mold contamination. Our Mold Removal Specialists in Denver offer rapid and professional Mold Removal Services in Denver and ensure that you and your family stay safe and protected with expert mold removal services."
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
                                The presence of mold can negatively impact the health of individuals and the integrity of the property, with individuals experiencing allergy symptoms triggered by mold spores or having worsening asthmatic conditions that can lead to more serious respiratory illnesses. Mold has a stronger impact on children, the elderly, and individuals with weakened immune systems.
                            </p>
                            <p className="text-lg text-gray-300">
                                Mold will also create damage to your residence by causing your wooden framing to rot, deteriorating your drywall, damaging the paint and/or wallpaper, and also creating a mold issue in your heating/cooling systems that will affect indoor air quality and produce an odor. Professional mold damage restoration services Denver will mitigate the damage of mold; combat sources of mold, protect your investment, and prevent future deterioration. Acting quickly on the issue of mold and utilizing a reputable mold removal company in Denver, CO, will eliminate existing mold and prevent future development, saving you money for repairs and providing a safe and healthy residence for everyone living there.
                            </p>
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
                            You may not realize that mold is growing until it has taken over. Early detection helps our team address your mold issue before any major health concerns or structural damage occur. Below are the signs that require professional Mold Remediation Near Me services.
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

            {/* Our Mold Removal Services - Process Component */}
            <ServiceProcess
                title="Our Mold Removal Services"
                description="Quick Response Restoration gives full service to locating, eliminating, and preventing molds. We have high-tech equipment and use the techniques approved by the industry to restore safety and comfort. Every project is handled with precision so that every last spore is eradicated. Here's what we offer."
                steps={services}
                gridCols={4}
            />

            {/* Why Choose Us */}
            <WhyChooseUs
                title="Why Choose Us for Mold Removal"
                description="Choosing a team for mold remediation is crucial for both safety and effectiveness. At Quick Response Restoration, our commitment to help property owners breathe clean air stands out; that’s why we are the trusted mold removal specialists in Denver."
                features={whyChooseUsFeatures}
                gridCols={2}
            />

            <Contact
                title="Protect Your Property & Health with Professional Mold Removal"
                description="Mold exposure can put both your health and your belongings at risk. Our team of expert Mold Removal Specialists Denver provides a complete solution for any mold issue, including an inspection and removal/remediate/preventative recommendations. Quick Response Restoration’s goal is to get your property back to its original condition following a mold incident while maintaining a healthy and safe environment. Fast, reliable, and thorough service will keep your home or business free from mold threats! We are the experts in Mold Damage Restoration Denver, and we want to help you protect what's most important."
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
