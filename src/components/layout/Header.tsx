'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { FiMenu, FiX, FiPhone, FiChevronDown } from 'react-icons/fi';
import Button from '../ui/Button';
import Container from '../ui/Container';

import TopBar from './TopBar';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [openDropdown, setOpenDropdown] = useState<string | null>(null);
    const pathname = usePathname();

    // Check if we are on a single blog post page (starts with /our-blog/ but is not the main blog page) OR the new /f/ path
    const isBlogPost = (pathname?.startsWith('/our-blog/') && pathname !== '/our-blog') || pathname?.startsWith('/f/');

    // Force solid header style if scrolled OR if on a blog post page OR on Albuquerque page
    const shouldShowSolidHeader = isScrolled || isBlogPost;

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    interface NavItem {
        name: string;
        href: string;
        submenu?: NavItem[];
    }

    const navLinks: NavItem[] = [
        { name: 'Home', href: '/' },
        { name: 'Services', href: '#services' },
        { name: 'Why Choose Us', href: '#why-choose-us' },
        { name: 'Process', href: '#process' },
        { name: 'Testimonials', href: '#testimonials' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <header className="fixed top-0 left-0 right-0 z-50 flex flex-col">
            <TopBar />
            <div className={`transition-all duration-300 w-full ${shouldShowSolidHeader ? 'bg-[#272725] shadow-md py-2' : 'bg-white/30 backdrop-blur-md border-b border-white/30 py-4'
                }`}>
                <Container>
                    <div className="flex items-center justify-between">
                        {/* Logo */}
                        <Link href="/" className="flex items-center">
                            {/* Placeholder for logo - using text if image fails or for SEO */}
                            <div className="relative h-16 w-64">
                                <Image
                                    src="/images/j-m-logo.png"
                                    alt="J&M Restoration"
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
                                    <Link
                                        href={link.href}
                                        className={`text-base font-medium transition-colors hover:text-secondary ${shouldShowSolidHeader ? 'text-white' : 'text-gray-900 md:text-white'
                                            }`}
                                    >
                                        {link.name}
                                    </Link>
                                </div>
                            ))}
                        </nav>

                        {/* CTA Button */}
                        <div className="hidden md:block">
                            <Button variant="secondary" icon={FiPhone} href="tel:+12065027712">
                                Call Now: 206-502-7712
                            </Button>
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            className="md:hidden text-2xl focus:outline-none"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        >
                            {isMobileMenuOpen ? (
                                <FiX className={shouldShowSolidHeader ? 'text-white' : 'text-white'} />
                            ) : (
                                <FiMenu className={shouldShowSolidHeader ? 'text-white' : 'text-white'} />
                            )}
                        </button>
                    </div>

                    {/* Mobile Menu */}
                    {isMobileMenuOpen && (
                        <div className="md:hidden absolute top-full left-0 right-0 bg-[#272725] shadow-lg p-4 flex flex-col space-y-4 max-h-[80vh] overflow-y-auto">
                            {navLinks.map((link) => (
                                <div key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="block text-white hover:text-secondary font-medium pb-2 border-b border-gray-700 last:border-0"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        {link.name}
                                    </Link>
                                </div>
                            ))}
                            <Button variant="secondary" icon={FiPhone} href="tel:+12065027712" className="w-full mt-4">
                                206-502-7712
                            </Button>
                        </div>
                    )}
                </Container>
            </div>
        </header>
    );
};

export default Header;
