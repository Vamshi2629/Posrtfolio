import { useEffect, useRef, useState } from 'react';

const AnimatedSection = ({ children, className = '' }) => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            {
                threshold: 0.1,
                rootMargin: '0px 0px -100px 0px'
            }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    return (
        <div
            ref={sectionRef}
            className={`transition-all duration-700 ${isVisible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-10'
                } ${className}`}
        >
            {children}
        </div>
    );
};

export default AnimatedSection;
