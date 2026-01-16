import React from 'react';
import { IconType } from 'react-icons';
import Link from 'next/link';

interface ButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
    variant?: 'primary' | 'secondary' | 'outline' | 'accent';
    className?: string;
    icon?: IconType;
    type?: 'button' | 'submit' | 'reset';
    href?: string;
}

const Button: React.FC<ButtonProps> = ({
    children,
    onClick,
    variant = 'primary',
    className = '',
    icon: Icon,
    type = 'button',
    href,
}) => {
    const baseStyles =
        'inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2';

    const variants = {
        primary: 'bg-primary text-white hover:bg-[#111827] focus:ring-primary',
        secondary: 'bg-secondary text-white hover:bg-[#111827] focus:ring-secondary',
        outline: 'bg-transparent border-2 border-white text-white hover:bg-white/10 focus:ring-white',
        accent: 'bg-accent text-white hover:bg-black focus:ring-accent',
    };

    const combinedClassName = `${baseStyles} ${variants[variant]} ${className}`;

    if (href) {
        return (
            <Link href={href} className={combinedClassName}>
                {Icon && <Icon className="mr-2 text-xl" />}
                {children}
            </Link>
        );
    }

    return (
        <button
            type={type}
            className={combinedClassName}
            onClick={onClick}
        >
            {Icon && <Icon className="mr-2 text-xl" />}
            {children}
        </button>
    );
};

export default Button;
