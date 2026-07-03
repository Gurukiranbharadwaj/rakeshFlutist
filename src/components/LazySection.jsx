import { useState, useEffect, useRef } from 'react';

const LazySection = ({ children, minHeight = '300px', className = '' }) => {
    const [isIntersecting, setIsIntersecting] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsIntersecting(entry.isIntersecting);
            },
            {
                root: null, // viewport
                rootMargin: '200px', // start loading just before entering screen
                threshold: 0.01 // trigger as soon as 1% is visible
            }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, []);

    return (
        <div ref={ref} className={className} style={{ minHeight: isIntersecting ? 'auto' : minHeight }}>
            {isIntersecting ? children : null}
        </div>
    );
};

export default LazySection;
