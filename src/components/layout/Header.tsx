'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FiMenu, FiX, FiPhone, FiChevronDown } from 'react-icons/fi';
import Button from '../ui/Button';
import Container from '../ui/Container';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isServicesOpen, setIsServicesOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        {
            name: 'Services',
            href: '#services',
            submenu: [
                { name: 'Water Damage Restoration', href: '/services/water-damage' },
                // Add other services here if pages exist, for now just the one requested
            ]
        },
        { name: 'Why Us', href: '#why-us' },
        { name: 'Locations', href: '#locations' },
        { name: 'Testimonials', href: '#testimonials' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
                }`}
        >
            <Container>
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="flex items-center">
                        {/* Placeholder for logo - using text if image fails or for SEO */}
                        <div className="relative h-10 w-40">
                            <Image
                                src="/images/logo.webp"
                                alt="Restoration Pro"
                                fill
                                className="object-contain object-left"
                                priority
                            />
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <div key={link.name} className="relative group">
                                {link.submenu ? (
                                    <div
                                        className="flex items-center cursor-pointer"
                                        onMouseEnter={() => setIsServicesOpen(true)}
                                        onMouseLeave={() => setIsServicesOpen(false)}
                                    >
                                        <Link
                                            href={link.href}
                                            className={`text-sm font-medium transition-colors hover:text-secondary ${isScrolled ? 'text-gray-700' : 'text-gray-900 md:text-white'
                                                } flex items-center`}
                                        >
                                            {link.name} <FiChevronDown className="ml-1" />
                                        </Link>

                                        {/* Dropdown */}
                                        <div className={`absolute top-full left-0 mt-2 w-56 bg-white rounded-md shadow-xl py-2 transition-all duration-200 z-50 ${isServicesOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'}`}>
                                            {link.submenu.map((subItem) => (
                                                <Link
                                                    key={subItem.name}
                                                    href={subItem.href}
                                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-secondary"
                                                >
                                                    {subItem.name}
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                ) : (
                                    <Link
                                        href={link.href}
                                        className={`text-sm font-medium transition-colors hover:text-secondary ${isScrolled ? 'text-gray-700' : 'text-gray-900 md:text-white'
                                            }`}
                                    >
                                        {link.name}
                                    </Link>
                                )}
                            </div>
                        ))}
                    </nav>

                    {/* CTA Button */}
                    <div className="hidden md:block">
                        <Button variant="secondary" icon={FiPhone} href="tel:+1234567890">
                            Emergency: (555) 123-4567
                        </Button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-2xl focus:outline-none"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? (
                            <FiX className={isScrolled ? 'text-gray-900' : 'text-white'} />
                        ) : (
                            <FiMenu className={isScrolled ? 'text-gray-900' : 'text-white'} />
                        )}
                    </button>
                </div>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg p-4 flex flex-col space-y-4 max-h-[80vh] overflow-y-auto">
                        {navLinks.map((link) => (
                            <div key={link.name}>
                                {link.submenu ? (
                                    <>
                                        <div className="flex items-center justify-between text-gray-900 font-medium pb-2 border-b border-gray-100">
                                            {link.name}
                                        </div>
                                        <div className="pl-4 mt-2 mb-2 flex flex-col space-y-2">
                                            {link.submenu.map((subItem) => (
                                                <Link
                                                    key={subItem.name}
                                                    href={subItem.href}
                                                    className="text-gray-600 hover:text-secondary text-sm"
                                                    onClick={() => setIsMobileMenuOpen(false)}
                                                >
                                                    {subItem.name}
                                                </Link>
                                            ))}
                                        </div>
                                    </>
                                ) : (
                                    <Link
                                        href={link.href}
                                        className="block text-gray-900 hover:text-secondary font-medium pb-2 border-b border-gray-100 last:border-0"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        {link.name}
                                    </Link>
                                )}
                            </div>
                        ))}
                        <Button variant="secondary" icon={FiPhone} className="w-full mt-4">
                            (555) 123-4567
                        </Button>
                    </div>
                )}
            </Container>
        </header>
    );
};

export default Header;
