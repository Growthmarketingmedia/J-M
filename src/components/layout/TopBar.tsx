import React from 'react';
import { FiPhone } from 'react-icons/fi';
import Container from '../ui/Container';

const TopBar = () => {
    return (
        <div className="bg-[#DC2626] text-white py-2 text-sm font-medium relative z-50">
            <Container>
                <div className="flex items-center justify-center gap-2">
                    <a
                        href="tel:+17207306440"
                        className="flex items-center gap-2 group hover:text-gray-100 transition-colors animate-pulse"
                    >
                        <FiPhone className="text-white" />
                        <span className="font-bold text-sm sm:text-base">24/7 Emergency Service: 720-730-6440</span>
                    </a>
                </div>
            </Container>
        </div>
    );
};

export default TopBar;
