import React from 'react';

const SoundwaveDivider = ({ className = '' }) => {
    return (
        <div className={`w-100 d-flex justify-content-center align-items-center opacity-50 overflow-hidden ${className}`} style={{ height: '40px', filter: 'drop-shadow(0 0 8px rgba(212, 175, 55, 0.6))' }}>
            <svg width="250" height="40" viewBox="0 0 200 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 20 Q 25 5, 40 20 T 70 20 T 100 20 T 130 20 T 160 20 T 190 20" stroke="url(#paint0_linear)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M10 25 Q 25 10, 40 25 T 70 25 T 100 25 T 130 25 T 160 25 T 190 25" stroke="url(#paint0_linear)" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round" opacity="0.6" />
                <path d="M10 15 Q 25 30, 40 15 T 70 15 T 100 15 T 130 15 T 160 15 T 190 15" stroke="url(#paint0_linear)" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round" opacity="0.3" />
                <defs>
                    <linearGradient id="paint0_linear" x1="10" y1="20" x2="190" y2="20" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#D4AF37" stopOpacity="0" />
                        <stop offset="0.5" stopColor="#D4AF37" />
                        <stop offset="1" stopColor="#D4AF37" stopOpacity="0" />
                    </linearGradient>
                </defs>
            </svg>
        </div>
    );
};

export default SoundwaveDivider;
