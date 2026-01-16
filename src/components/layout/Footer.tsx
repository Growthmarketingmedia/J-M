import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FiFacebook, FiTwitter, FiInstagram, FiLinkedin, FiMapPin, FiPhone, FiMail } from 'react-icons/fi';
import Container from '../ui/Container';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white pt-16 pb-8">
            <Container>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                    {/* Column 1: Info */}
                    <div>
                        <div className="relative h-20 w-64 mb-6">
                            <Image
                                src="/images/transparentlogo.png"
                                alt="J&M Restoration"
                                fill
                                className="object-contain object-left brightness-0 invert"
                            />
                        </div>
                        <p className="text-gray-400 mb-6">
                            Leading restoration experts in Seattle & Tacoma available 24/7 for water, fire, and mold emergencies. We restore your property and peace of mind.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-400 hover:text-secondary transition-colors"><FiFacebook size={20} /></a>
                            <a href="#" className="text-gray-400 hover:text-secondary transition-colors"><FiTwitter size={20} /></a>
                            <a href="#" className="text-gray-400 hover:text-secondary transition-colors"><FiInstagram size={20} /></a>
                            <a href="#" className="text-gray-400 hover:text-secondary transition-colors"><FiLinkedin size={20} /></a>
                        </div>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div>
                        <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
                        <ul className="space-y-3">
                            <li><Link href="/" className="text-gray-400 hover:text-secondary">Home</Link></li>
                            <li><Link href="#services" className="text-gray-400 hover:text-secondary">Our Services</Link></li>
                            <li><Link href="#why-choose-us" className="text-gray-400 hover:text-secondary">Why Choose Us</Link></li>
                            <li><Link href="#process" className="text-gray-400 hover:text-secondary">Our Process</Link></li>
                            <li><Link href="#contact" className="text-gray-400 hover:text-secondary">Contact Us</Link></li>
                        </ul>
                    </div>

                    {/* Column 3: Services */}
                    <div>
                        <h3 className="text-lg font-semibold mb-6">Our Services</h3>
                        <ul className="space-y-3">
                            <li><Link href="#services" className="text-gray-400 hover:text-secondary">Water Extraction & Drying</Link></li>
                            <li><Link href="#services" className="text-gray-400 hover:text-secondary">Sewage Cleanup</Link></li>
                            <li><Link href="#services" className="text-gray-400 hover:text-secondary">Roof Leaks & Failures</Link></li>
                            <li><Link href="#services" className="text-gray-400 hover:text-secondary">Structural Repair</Link></li>
                            <li><Link href="#services" className="text-gray-400 hover:text-secondary">Appliance Leaks</Link></li>
                        </ul>
                    </div>

                    {/* Column 4: Contact */}
                    <div>
                        <h3 className="text-lg font-semibold mb-6">Contact Info</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start">
                                <FiMapPin className="text-secondary mt-1 mr-3 flex-shrink-0" />
                                <span className="text-gray-400">Seattle, WA</span>
                            </li>
                            <li className="flex items-center">
                                <FiPhone className="text-secondary mr-3 flex-shrink-0" />
                                <a href="tel:+12065027712" className="text-gray-400 hover:text-secondary">206-502-7712</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
                    <p>&copy; {new Date().getFullYear()} Quick Response Restoration. All rights reserved.</p>
                </div>
            </Container>
        </footer>
    );
};

export default Footer;
