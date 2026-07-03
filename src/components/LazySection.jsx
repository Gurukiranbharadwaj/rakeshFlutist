import { useState, useEffect, useRef } from 'react';

const LazySection = ({ children, minHeight = '300px', className = '' }) => {
    const [isIntersecting, setIsIntersecting] = useState(false);
    const [measuredHeight, setMeasuredHeight] = useState(null);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsIntersecting(entry.isIntersecting);
            },
            {
                root: null, // use viewport
                rootMargin: '250px', // start loading early for smooth scroll transitions
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

    useEffect(() => {
        if (isIntersecting && ref.current) {
            const handleResize = () => {
                const rect = ref.current.getBoundingClientRect();
                if (rect.height > 0) {
                    setMeasuredHeight(rect.height);
                }
            };
            
            // Measure height immediately once mounted
            handleResize();

            // Handle window resizing to keep heights responsive
            window.addEventListener('resize', handleResize);
            return () => window.removeEventListener('resize', handleResize);
        }
    }, [isIntersecting]);

    const currentMinHeight = measuredHeight ? `${measuredHeight}px` : minHeight;

    return (
        <div 
            ref={ref} 
            className={className} 
            style={{ 
                minHeight: currentMinHeight,
                width: '100%'
            }}
        >
            {isIntersecting ? children : null}
        </div>
    );
};

export default LazySection;
