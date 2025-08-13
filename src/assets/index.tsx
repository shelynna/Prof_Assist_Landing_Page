import React from 'react';
import lightLogo from './logo-light.svg';
import darkLogo from './logo-dark.svg';
import logoIcon from './logo-icon.svg';
import textLogo from './logo-text.svg';

const LogoMinimal: React.FC<{ className?: string }> = ({ className }) => (
    <img 
        src={lightLogo} // Update with your actual logo filename
        alt="Prof Assistance" 
        className={`w-35 h-8 ${className || ''}`}
    />
);

const LogoClassic: React.FC<{ className?: string }> = ({ className }) => (
    <img 
        src={darkLogo} 
        alt="Prof Assistance" 
        className={`w-35 h-8 ${className || ''}`}
    />
);
const LogoGeometric: React.FC<{ className?: string }> = ({ className }) => (
    <img 
        src={logoIcon} // Update with your actual logo filename
        alt="Prof Assistance" 
        className={`w-35 h-8 ${className || ''}`}
    />
);

const LogoTextual: React.FC<{ className?: string }> = ({ className }) => (
    <img 
        src={textLogo} // Update with your actual logo filename
        alt="Prof Assistance" 
        className={`w-30 h-8 ${className || ''}`}
    />
);

type LogoVariant = 'minimal' | 'classic' | 'geometric' | 'textual';

export const ProfAssistLogo: React.FC<{ className?: string, variant?: LogoVariant }> = ({ className, variant }) => {
    const commonClasses = "hover:animate-subtle-glow";
    const combinedClassName = `${className} ${commonClasses}`;

    switch (variant) {
        case 'minimal':
            return <LogoMinimal className={combinedClassName} />;
        case 'geometric':
            return <LogoGeometric className={combinedClassName} />;
        case 'textual':
            return <LogoTextual className={combinedClassName} />;
        case 'classic':
        default:
            return <LogoClassic className={combinedClassName} />;
    }
};

export const authPageImageUrl = "https://images.unsplash.com/photo-1582139882414-ac63a621374a?q=80&w=2574&auto=format&fit=crop";