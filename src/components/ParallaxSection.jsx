import { motion } from 'framer-motion';
import { useRef } from 'react';
import './ParallaxSection.css';

const ParallaxSection = ({ children, desktopImage, mobileImage, className = "", bgClassName = "", style = {} }) => {
    const ref = useRef(null);

    return (
        <section ref={ref} className={`parallax-container ${className}`} style={{ ...style }}>
            <div
                className={`parallax-bg hero-bg ${bgClassName}`}
                style={{
                    '--desktop-bg': `url(${desktopImage})`,
                    '--mobile-bg': `url(${mobileImage})`,
                    height: '100%',
                    top: '0'
                }}
            />
            <div className="container py-5" style={{ position: 'relative', zIndex: 2 }}>
                {children}
            </div>
        </section>
    );
};

export const breathIn = {
    hidden: { opacity: 0, scale: 0.98, y: 30 },
    visible: {
        opacity: 1,
        scale: 1,
        y: 0,
        transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] }
    }
};

export default ParallaxSection;
