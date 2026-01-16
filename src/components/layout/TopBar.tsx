import React from 'react';
import { FiPhone } from 'react-icons/fi';
import Container from '../ui/Container';

const TopBar = () => {
    return (
        <div className="bg-gray-950 text-white py-2 text-sm font-medium relative z-50">
            <Container>
                <div className="flex items-center justify-center gap-2">
                    <a
                        href="tel:+12065027712"
                        className="flex items-center gap-2 group hover:text-primary transition-colors animate-pulse"
                    >
                        <FiPhone className="text-primary" />
                        <span className="font-bold text-sm sm:text-base">24/7 Emergency Service: 206-502-7712</span>
                    </a>
                </div>
            </Container>
        </div>
    );
};

export default TopBar;
