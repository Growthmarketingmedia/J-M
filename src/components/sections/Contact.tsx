'use client';

import React, { useState } from 'react';
import { FiMapPin, FiPhone, FiMail, FiClock, FiSend } from 'react-icons/fi';
import Button from '../ui/Button';
import Container from '../ui/Container';

interface ContactProps {
    title?: string;
    description?: string;
}

const Contact = ({
    title = "Get Fast, Reliable Restoration Services Today!",
    description = "If your home or business has suffered damage, don't wait to act. Quick Response Restoration is the trusted name for Professional Restoration Services in Colorado Springs and is ready to help you recover quickly. Call us today and let our experienced team restore your property with skill and care."
}: ContactProps) => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        service: 'Water Damage',
        message: '',
    });

    const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('submitting');

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setStatus('success');
                setFormData({ name: '', phone: '', service: 'Water Damage', message: '' });
                setTimeout(() => setStatus('idle'), 5000);
            } else {
                setStatus('error');
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            setStatus('error');
        }
    };

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
                    <div className="bg-gray-900 text-white p-10 md:p-14 flex flex-col justify-between">
                        <div>
                            <h3 className="text-2xl font-bold mb-8">Contact Information</h3>
                            <ul className="space-y-6">
                                <li className="flex items-start">
                                    <FiMapPin className="text-secondary mt-1.5 mr-4 text-xl flex-shrink-0" />
                                    <div>
                                        <span className="block font-semibold text-lg">Headquarters</span>
                                        <span className="text-gray-400">Colorado Springs, CO</span>
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <FiPhone className="text-secondary mt-1.5 mr-4 text-xl flex-shrink-0" />
                                    <div>
                                        <span className="block font-semibold text-lg">Phone</span>
                                        <a href="tel:+19152683375" className="text-gray-400 hover:text-white transition-colors">(915) 268-3375</a>
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
                            {/* Embed map or extra info could go here */}
                            <div className="p-6 bg-gray-800 rounded-xl">
                                <p className="text-sm text-gray-300 italic">
                                    "Fastest response time in the industry. We are here when you need us most."
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="p-10 md:p-14">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        required
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                                        placeholder="John Doe"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        required
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                                        placeholder="(915) 268-3375"
                                    />
                                </div>
                            </div>



                            <div>
                                <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">Service Needed</label>
                                <select
                                    id="service"
                                    name="service"
                                    value={formData.service}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all bg-white"
                                >
                                    <option>Water Damage Restoration</option>
                                    <option>Fire Damage Repair</option>
                                    <option>Mold Remediation</option>
                                    <option>Flood Restoration</option>
                                    <option>Storm Damage</option>
                                    <option>Other / General Inquiry</option>
                                </select>
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={4}
                                    required
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all resize-none"
                                    placeholder="Tell us about the damage..."
                                ></textarea>
                            </div>

                            <div className="pt-2">
                                <Button
                                    type="submit"
                                    className={`w-full text-lg ${status === 'success' ? 'bg-success hover:bg-green-600' : ''}`}
                                    icon={status === 'success' ? undefined : FiSend}
                                    variant={status === 'success' ? 'primary' : 'primary'} // Visual feedback handled by className
                                // disabled={status === 'submitting' || status === 'success'}
                                >
                                    {status === 'submitting' ? 'Sending...' : status === 'success' ? 'Message Sent!' : 'Send Message'}
                                </Button>
                                {status === 'success' && (
                                    <p className="text-center text-success mt-3 font-medium animate-pulse">
                                        Thank you! We'll be in touch shortly.
                                    </p>
                                )}
                            </div>
                        </form>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default Contact;
