import React from 'react';
import { FiPhone, FiAlertTriangle, FiCalendar } from 'react-icons/fi';
import Button from '../ui/Button';
import Container from '../ui/Container';

const EmergencyBanner = () => {
    return (
        <section className="py-16 bg-gradient-to-r from-secondary to-primary text-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10 flex items-center justify-center pointer-events-none">
                <FiAlertTriangle className="text-[30rem]" />
            </div>

            <Container className="relative z-10">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
                    <div className="flex-1">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 uppercase tracking-wider">
                            Emergency? We're Available 24/7!
                        </h2>
                        <p className="text-xl md:text-2xl font-light text-orange-100 mb-2">
                            Water Damage • Flood Cleanup • Sewage Removal
                        </p>
                        <p className="font-semibold bg-white/20 inline-block px-4 py-1 rounded-full">
                            Average Response Time: Under 60 Minutes
                        </p>
                    </div>

                    <div className="flex-shrink-0">
                        <Button
                            href="https://book.housecallpro.com/book/JM-Carpet-Renewal/0ff6fe1ee579499786882b3af2ef02d0?v2=true"
                            className="!bg-white !text-orange-600 hover:!bg-gray-100 hover:!text-orange-700 text-xl px-10 py-5 shadow-lg border-2 border-transparent hover:border-orange-200"
                            icon={FiCalendar}
                        >
                            Book Now
                        </Button>
                        <p className="mt-3 text-sm text-center md:text-right opacity-80">
                            Book online for immediate response
                        </p>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default EmergencyBanner;
