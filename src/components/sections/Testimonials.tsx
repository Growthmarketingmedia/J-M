'use client';

import React, { useState, useEffect } from 'react';
import { FiChevronLeft, FiChevronRight, FiStar } from 'react-icons/fi';
import { FaQuoteLeft } from 'react-icons/fa';
import Container from '../ui/Container';

const testimonials = [
    {
        text: "Thank you Ed and Joel and Quick Response Restoration crew. We couldn't be happier with their technical skills and the quality of their workmanship, as well as their communication throughout the project, such as updates and questions. They clearly provided a VERY AFFORDABLE detailed estimate for the restoration/repair. They kept us informed every step of the way and promptly addressed our questions or concerns, as well as the completed the job within the estimated timeframe. Again, thank you for your professional, Reliable, Efficient and outstanding work.",
        name: "Fred & Louise Deherrera",
        location: "Colorado Springs, CO",
        rating: 5,
        service: "Restoration/Repair",
    },
    {
        text: "Ed Osborne was able to come out and give me an estimate in a timely fashion. Once I decided to have his business do my job, he was able to schedule it within 2 working days. The job was needed for sale of a home and he took before and after photos as well as some of the actual residence proving the work was done. The mitigation report and photos that I was able to provide to the buyer has kept the closing date for the home on track. An otherwise stressful stressful situation has been eased by getting this job done without any problems. Thanks to Quick Response Restoration",
        name: "Gwendolyn Stokes",
        location: "Colorado Springs, CO",
        rating: 5,
        service: "Mitigation Services",
    },
    {
        text: "Great work repairing mold and leaks on my family room. Asbestos found were removed too! Work was finished ahead of schedule and within budget. Thanks guys!",
        name: "Juan Alvarez",
        location: "Colorado Springs, CO",
        rating: 5,
        service: "Mold & Leak Repair",
    },
    {
        text: "Great company. I will definitely use them again. Ed comes knowledgeable and promptly addressed our concerns.",
        name: "Geno Golynko",
        location: "Colorado Springs, CO",
        rating: 5,
        service: "Restoration Services",
    },
    {
        text: "Joel and his team were fantastic to work with. They greatly helped my family and I thoroughly in resolving the water damage that occurred in our home. We are grateful for their professionalism and service. I highly recommend Joel and his team.",
        name: "Kamen Powell",
        location: "Colorado Springs, CO",
        rating: 5,
        service: "Water Damage Restoration",
    },
    {
        text: "Started 2025 with an overflowed upstairs toilet tank flooding my floors and ceiling and it was devastating to say the least and googled them. Joel was awesome and understanding. He was straight up honest, explained, and guided me through everything and explained why and taught me some home improvement tricks. He gave me and my fiancé peace of mind throughout the process. Even after the mitigation and restoration process and having issues with insurance, they helped me out and explaining the appraisal process and eventually only paying my deductible for the work they did. House is back to normal and highly recommend this company if you ever are in a situation with water damage to your house",
        name: "Juan Martinez",
        location: "Colorado Springs, CO",
        rating: 5,
        service: "Water Damage Mitigation",
    },
];

const Testimonials = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const [isExpanded, setIsExpanded] = useState(false);

    useEffect(() => {
        if (isPaused || isExpanded) return;
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % testimonials.length);
        }, 8000); // Increased time for reading
        return () => clearInterval(interval);
    }, [isPaused, isExpanded]);

    // Reset expansion state when slide changes
    useEffect(() => {
        setIsExpanded(false);
    }, [currentIndex]);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    const currentText = testimonials[currentIndex].text;
    const shouldTruncate = currentText.length > 250;
    const displayText = isExpanded ? currentText : (shouldTruncate ? currentText.slice(0, 250) + "..." : currentText);

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
                        <span className="ml-2 text-gray-600 font-medium">5.0/5 Average Rating</span>
                    </div>
                </div>

                <div
                    className="max-w-4xl mx-auto relative px-4 md:px-12"
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                >
                    {/* Navigation Buttons */}
                    <button
                        onClick={prevSlide}
                        className="absolute left-0 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white shadow-md hover:bg-gray-100 text-gray-600 hover:text-primary transition-all focus:outline-none hidden md:block z-20"
                    >
                        <FiChevronLeft size={24} />
                    </button>

                    <button
                        onClick={nextSlide}
                        className="absolute right-0 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white shadow-md hover:bg-gray-100 text-gray-600 hover:text-primary transition-all focus:outline-none hidden md:block z-20"
                    >
                        <FiChevronRight size={24} />
                    </button>

                    {/* Testimonial Card */}
                    <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 text-center relative overflow-hidden flex flex-col items-center">
                        <div className="absolute top-0 left-0 w-full h-2 bg-primary" />

                        <FaQuoteLeft className="text-gray-200 text-5xl absolute top-8 left-8" />

                        <div className="relative z-10 pt-6 w-full">
                            <div className="text-xl md:text-2xl text-gray-700 font-medium italic mb-6 leading-relaxed min-h-[120px] md:min-h-[160px] flex items-center justify-center">
                                <p>"{displayText}"</p>
                            </div>

                            {shouldTruncate && (
                                <button
                                    onClick={() => setIsExpanded(!isExpanded)}
                                    className="text-primary font-bold hover:underline mb-8 focus:outline-none"
                                >
                                    {isExpanded ? "Read Less" : "Read More"}
                                </button>
                            )}

                            {!shouldTruncate && <div className="mb-8"></div>}

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
