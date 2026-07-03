import { useState, useEffect, useRef } from 'react';

const LazySection = ({ children, minHeight = '300px', className = '' }) => {
    const [isIntersecting, setIsIntersecting] = useState(false);
    const [measuredHeight, setMeasuredHeight] = useState(null);
    const ref = useRef(null);
    const contentRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsIntersecting(entry.isIntersecting);
            },
            {
                root: null,
                rootMargin: '300px', // start loading early for seamless rendering
                threshold: 0.001
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
        if (isIntersecting && contentRef.current) {
            const resizeObserver = new ResizeObserver((entries) => {
                for (let entry of entries) {
                    const height = entry.contentRect.height;
                    if (height > 0) {
                        setMeasuredHeight(height);
                    }
                }
            });

            resizeObserver.observe(contentRef.current);
            return () => {
                resizeObserver.disconnect();
            };
        }
    }, [isIntersecting]);

    const style = {
        minHeight: measuredHeight ? `${measuredHeight}px` : minHeight,
        width: '100%'
    };

    return (
        <div ref={ref} className={className} style={style}>
            {isIntersecting ? (
                <div ref={contentRef} style={{ width: '100%' }}>
                    {children}
                </div>
            ) : null}
        </div>
    );
};

export default LazySection;
