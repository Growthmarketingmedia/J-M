'use client';

import React from 'react';
import Hero from '@/components/sections/Hero';
import Container from '@/components/ui/Container';
import Link from 'next/link';
import Image from 'next/image';
import { FiCalendar, FiClock, FiArrowRight } from 'react-icons/fi';

const blogPosts = [
    {
        title: 'Why Quick Response Matters: The Importance of 24/7 Water Damage Restoration',
        excerpt: 'Water damage is something that occurs every day, and the majority of the time, it will happen unexpectedly. Whether it occurs due to the unexpected failure of an appliance...',
        slug: '/our-blog/why-quick-response-matters',
        image: '/images/24-7-water-damage-restoration.webp',
        date: 'December 15, 2025',
        readTime: '5 min read',
        category: 'Water Damage'
    },
];

export default function BlogPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <Hero
                title="Our Blog"
                backgroundImage="/images/herosection.webp"
                description="Expert advice, restoration tips, and industry insights to help you protect your property."
                secondaryButtonHref="/contact-us"
            />

            <section className="py-20 bg-gray-50">
                <Container>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {blogPosts.map((post) => (
                            <Link href={post.slug} key={post.slug} className="group flex flex-col bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                                <div className="relative h-64 overflow-hidden">
                                    <Image
                                        src={post.image}
                                        alt={post.title}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                    <div className="absolute top-4 left-4 bg-secondary text-white text-xs font-bold px-3 py-1 rounded-full">
                                        {post.category}
                                    </div>
                                </div>
                                <div className="p-6 flex-1 flex flex-col">
                                    <div className="flex items-center text-sm text-gray-500 mb-4 space-x-4">
                                        <div className="flex items-center">
                                            <FiCalendar className="mr-1.5 text-secondary" />
                                            {post.date}
                                        </div>
                                        <div className="flex items-center">
                                            <FiClock className="mr-1.5 text-secondary" />
                                            {post.readTime}
                                        </div>
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-secondary transition-colors line-clamp-2">
                                        {post.title}
                                    </h3>
                                    <p className="text-gray-600 mb-6 line-clamp-3 text-sm flex-1">
                                        {post.excerpt}
                                    </p>
                                    <div className="flex items-center text-secondary font-semibold text-sm group-hover:underline mt-auto">
                                        Read Article <FiArrowRight className="ml-2" />
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </Container>
            </section>
        </div>
    );
}
