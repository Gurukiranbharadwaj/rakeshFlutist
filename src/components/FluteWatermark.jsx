import React from 'react';
import './FluteWatermark.css';

const FluteWatermark = () => {
    return (
        <div className="position-fixed w-100 h-100" style={{ top: 0, left: 0, zIndex: 0, pointerEvents: 'none', overflow: 'hidden', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div
                className="watermark-static"
                style={{
                    opacity: 0.08,
                    transform: 'rotate(-25deg) scale(1.6)',
                    filter: 'drop-shadow(0 0 50px rgba(45, 212, 191, 0.25))'
                }}
            >
                <svg width="600" height="600" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {/* Flute */}
                    <path d="M20,180 L180,20" stroke="url(#flute_gradient)" strokeWidth="6" strokeLinecap="round" />

                    {/* Flute Tassels/Threads */}
                    <path d="M125,55 Q 140,80 145,100" stroke="#D4AF37" strokeWidth="1.5" fill="none" strokeLinecap="round" />
                    <path d="M135,45 Q 155,70 160,90" stroke="#F59E0B" strokeWidth="1" fill="none" strokeLinecap="round" />

                    {/* Flute Holes */}
                    <circle cx="50" cy="150" r="2.5" fill="#0B1220" />
                    <circle cx="70" cy="130" r="2.5" fill="#0B1220" />
                    <circle cx="90" cy="110" r="2.5" fill="#0B1220" />
                    <circle cx="110" cy="90" r="2.5" fill="#0B1220" />
                    <circle cx="130" cy="70" r="2.5" fill="#0B1220" />
                    <circle cx="150" cy="50" r="2.5" fill="#0B1220" />

                    {/* Peacock Feather Stem */}
                    <path d="M140,60 Q 80,-10 30,30" stroke="#2DD4BF" strokeWidth="2" fill="none" strokeLinecap="round" />

                    {/* Peacock Feather Barbs (Stylized sweeps) */}
                    <path d="M110,35 Q 60,-15 15,20" stroke="#10B981" strokeWidth="1.5" fill="none" strokeLinecap="round" opacity="0.85" />
                    <path d="M120,45 Q 70,-5 20,40" stroke="#059669" strokeWidth="1.5" fill="none" strokeLinecap="round" opacity="0.85" />
                    <path d="M90,15 Q 40,-10 10,30" stroke="#3B82F6" strokeWidth="1" fill="none" opacity="0.6" />
                    <path d="M100,55 Q 60,10 10,50" stroke="#3B82F6" strokeWidth="1" fill="none" opacity="0.7" />

                    {/* Peacock Feather Eye (Ocellus) */}
                    <g transform="translate(40, 25) rotate(-35)">
                        {/* Outer Glow/Green */}
                        <ellipse cx="0" cy="0" rx="22" ry="14" fill="#10B981" opacity="0.85" />
                        {/* Inner Gold/Copper */}
                        <ellipse cx="-2" cy="0" rx="15" ry="9" fill="#F59E0B" />
                        {/* Inner Blue */}
                        <ellipse cx="-4" cy="0" rx="10" ry="6" fill="#1D4ED8" />
                        {/* Dark Center */}
                        <ellipse cx="-6" cy="0" rx="5" ry="3" fill="#1E3A8A" />
                    </g>

                    <defs>
                        <linearGradient id="flute_gradient" x1="20" y1="180" x2="180" y2="20" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#F59E0B" />
                            <stop offset="0.5" stopColor="#D4AF37" />
                            <stop offset="1" stopColor="#FFF" />
                        </linearGradient>
                    </defs>
                </svg>
            </div>
        </div>
    );
};

export default FluteWatermark;
