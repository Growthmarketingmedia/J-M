import React from 'react';
import { FiMapPin, FiArrowRight } from 'react-icons/fi';
import Container from '../ui/Container';

const locations = [
    'Seattle', 'Tacoma', 'Bellevue', 'Kent',
    'Renton', 'Federal Way', 'Auburn', 'Lakewood',
    'Kirkland', 'Redmond', 'Sammamish', 'Shoreline'
];

const ServiceAreas = () => {
    return (
        <section id="locations" className="py-20 bg-white">
            <Container>
                <div className="text-center mb-12">
                    <span className="text-primary font-semibold tracking-wider uppercase text-sm">Where We Work</span>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">
                        Serving Greater Seattle & Tacoma
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Our certified restoration teams are stationed throughout the region to ensure rapid response times, no matter where you are located.
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-10">
                    {locations.map((location, index) => (
                        <div
                            key={index}
                            className="group flex items-center justify-center p-4 bg-gray-50 rounded-lg border border-gray-100 hover:border-primary/30 hover:bg-primary/5 hover:shadow-sm transition-all duration-300 cursor-pointer"
                        >
                            <FiMapPin className="text-gray-400 group-hover:text-primary mr-2 transition-colors" />
                            <span className="font-medium text-gray-700 group-hover:text-primary transition-colors">{location}</span>
                        </div>
                    ))}
                </div>

                <div className="text-center">
                    <a
                        href="#contact"
                        className="inline-flex items-center text-primary font-semibold hover:text-blue-700 transition-colors"
                    >
                        Check if we serve your area <FiArrowRight className="ml-2" />
                    </a>
                </div>
            </Container>
        </section>
    );
};

export default ServiceAreas;
