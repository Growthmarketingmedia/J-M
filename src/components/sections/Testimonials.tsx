'use client';

import React, { useState, useEffect } from 'react';
import { FiChevronLeft, FiChevronRight, FiStar } from 'react-icons/fi';
import { FaQuoteLeft } from 'react-icons/fa';
import Container from '../ui/Container';

const testimonials = [
    {
        text: "Restoration Pro saved our home after a pipe burst flooded our basement. They arrived within 45 minutes and had the water out before we knew it. Highly recommend!",
        name: "Sarah Johnson",
        location: "Brooklyn, NY",
        rating: 5,
        service: "Water Damage",
    },
    {
        text: "Professional, courteous, and incredibly fast. The fire damage in our kitchen was extensive, but they made it look like nothing ever happened.",
        name: "Michael Chen",
        location: "Queens, NY",
        rating: 5,
        service: "Fire Restoration",
    },
    {
        text: "We discovered mold in our attic and were panicking. The team explained the process clearly and removed everything safely. Great peace of mind.",
        name: "Emily Rodriguez",
        location: "Staten Island, NY",
        rating: 5,
        service: "Mold Remediation",
    },
];

const Testimonials = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    useEffect(() => {
        if (isPaused) return;
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % testimonials.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [isPaused]);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    return (
        <section id="testimonials" className="py-20 bg-gray-50">
            <Container>
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Our Customers Say</h2>
                    <div className="flex justify-center mb-4">
                        <div className="flex text-accent">
                            {[...Array(5)].map((_, i) => (
                                <FiStar key={i} className="fill-current text-xl" />
                            ))}
                        </div>
                        <span className="ml-2 text-gray-600 font-medium">4.9/5 Average Rating</span>
                    </div>
                </div>

                <div
                    className="max-w-4xl mx-auto relative px-12"
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                >
                    {/* Navigation Buttons */}
                    <button
                        onClick={prevSlide}
                        className="absolute left-0 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white shadow-md hover:bg-gray-100 text-gray-600 hover:text-primary transition-all focus:outline-none hidden md:block"
                    >
                        <FiChevronLeft size={24} />
                    </button>

                    <button
                        onClick={nextSlide}
                        className="absolute right-0 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white shadow-md hover:bg-gray-100 text-gray-600 hover:text-primary transition-all focus:outline-none hidden md:block"
                    >
                        <FiChevronRight size={24} />
                    </button>

                    {/* Testimonial Card */}
                    <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 text-center relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-2 bg-primary" />

                        <FaQuoteLeft className="text-gray-200 text-5xl absolute top-8 left-8" />

                        <div className="relative z-10 pt-6">
                            <p className="text-xl md:text-2xl text-gray-700 font-medium italic mb-8 leading-relaxed">
                                "{testimonials[currentIndex].text}"
                            </p>

                            <div className="flex flex-col items-center">
                                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold text-lg mb-3">
                                    {testimonials[currentIndex].name.charAt(0)}
                                </div>
                                <h4 className="font-bold text-gray-900 text-lg">{testimonials[currentIndex].name}</h4>
                                <p className="text-gray-500 text-sm mb-2">{testimonials[currentIndex].location}</p>
                                <span className="inline-block px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-full font-medium">
                                    {testimonials[currentIndex].service}
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Dots */}
                    <div className="flex justify-center space-x-2 mt-8">
                        {testimonials.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentIndex(index)}
                                className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentIndex ? 'bg-primary w-8' : 'bg-gray-300 hover:bg-gray-400'
                                    }`}
                            />
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default Testimonials;
