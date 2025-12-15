import React from 'react';
import { FiPhone, FiClock, FiMapPin } from 'react-icons/fi';

const TopBar = () => {
    return (
        <div className="bg-gray-900 text-white py-2 text-sm">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap items-center justify-between gap-4">
                    {/* Left side - Location */}
                    <div className="flex items-center gap-2">
                        <FiMapPin className="text-secondary" />
                        <span>Colorado Springs, CO</span>
                    </div>

                    {/* Right side - Phone and Hours */}
                    <div className="flex flex-wrap items-center gap-6">
                        <div className="flex items-center gap-2">
                            <FiClock className="text-secondary" />
                            <span>24/7 Emergency Service</span>
                        </div>
                        <a
                            href="tel:+19152683375"
                            className="flex items-center gap-2 hover:text-secondary transition-colors"
                        >
                            <FiPhone className="text-secondary" />
                            <span className="font-semibold">(915) 268-3375</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopBar;
