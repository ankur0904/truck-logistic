import { ReactNode } from 'react';

interface SectionHeaderProps {
    title: string;
    subtitle?: string;
    centered?: boolean;
    className?: string;
}

export default function SectionHeader({
    title,
    subtitle,
    centered = true,
    className = ''
}: SectionHeaderProps) {
    const alignClass = centered ? 'text-center' : '';
    const maxWidthClass = centered ? 'mx-auto' : '';

    return (
        <div className={`mb-12 md:mb-16 ${alignClass} ${className}`}>
            <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 ${maxWidthClass} max-w-4xl`}>
                {title}
            </h2>
            {subtitle && (
                <p className={`text-lg md:text-xl text-gray-600 ${maxWidthClass} max-w-3xl leading-relaxed`}>
                    {subtitle}
                </p>
            )}
        </div>
    );
}
