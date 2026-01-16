'use client';

import React, { useState, useCallback } from 'react';
import { FiMapPin, FiPhone, FiMail, FiClock, FiSend, FiCalendar } from 'react-icons/fi';
import Button from '../ui/Button';
import Container from '../ui/Container';
import { GoogleReCaptchaProvider, useGoogleReCaptcha } from 'react-google-recaptcha-v3';

interface ContactProps {
    title?: string;
    description?: string;
}

const ContactFormContent = ({ title, description }: ContactProps) => {
    return (
        <section id="contact" className="py-20 bg-gray-50">
            <Container>
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{title}</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        {description}
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-white rounded-2xl shadow-xl overflow-hidden">
                    {/* Contact Info */}
                    <div className="bg-[#272725] text-white p-10 md:p-14 flex flex-col justify-between">
                        <div>
                            <h3 className="text-2xl font-bold mb-8">Contact Information</h3>
                            <ul className="space-y-6">
                                <li className="flex items-start">
                                    <FiMapPin className="text-secondary mt-1.5 mr-4 text-xl flex-shrink-0" />
                                    <div>
                                        <span className="block font-semibold text-lg">Headquarters</span>
                                        <span className="text-gray-400">Seattle & Tacoma, WA</span>
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <FiPhone className="text-secondary mt-1.5 mr-4 text-xl flex-shrink-0" />
                                    <div>
                                        <span className="block font-semibold text-lg">Phone</span>
                                        <a href="tel:+12065027712" className="text-gray-400 hover:text-white transition-colors">206-502-7712</a>
                                    </div>
                                </li>

                                <li className="flex items-start">
                                    <FiClock className="text-secondary mt-1.5 mr-4 text-xl flex-shrink-0" />
                                    <div>
                                        <span className="block font-semibold text-lg">Hours</span>
                                        <span className="text-gray-400">24 Hours / 7 Days A Week</span>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        <div className="mt-12">
                            <div className="p-6 bg-gray-800 rounded-xl">
                                <p className="text-sm text-gray-300 italic">
                                    "Fastest response time in the industry. We are here when you need us most."
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* CTA Section */}
                    <div className="p-10 md:p-14 flex flex-col items-center justify-center text-center">
                        <div className="mb-8">
                            <FiCalendar className="text-6xl text-primary mx-auto mb-4" />
                            <h3 className="text-2xl font-bold text-gray-900 mb-2">Ready to Book?</h3>
                            <p className="text-gray-600">
                                Schedule your water damage inspection or service instantly using our online booking system.
                            </p>
                        </div>
                        <Button
                            href="https://book.housecallpro.com/book/JM-Carpet-Renewal/0ff6fe1ee579499786882b3af2ef02d0?v2=true"
                            variant="primary"
                            className="w-full sm:w-auto text-xl px-12 py-5"
                            icon={FiCalendar}
                        >
                            Book Now
                        </Button>
                        <p className="mt-4 text-sm text-gray-500">
                            Available 24/7 for emergency water restoration.
                        </p>
                    </div>
                </div>
            </Container>
        </section>
    );
};

const Contact = ({
    title = "Get Fast, Reliable Restoration Services Today!",
    description = "If your home or business has suffered water damage, don't wait to act. J&M Restoration Services is the trusted name for Emergency Water Restoration in Seattle & Tacoma and is ready to help you recover quickly. Call us today and let our experienced team restore your property with skill and care."
}: ContactProps) => {
    return (
        <GoogleReCaptchaProvider reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ""}>
            <ContactFormContent title={title} description={description} />
        </GoogleReCaptchaProvider>
    );
};

export default Contact;
