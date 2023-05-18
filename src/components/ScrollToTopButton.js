import React, { useState, useEffect } from 'react';

const ScrollToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        if (window.pageYOffset > 500) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);

        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    return (
        isVisible && (
            <div style={{
                position: 'fixed',
                bottom: '20px',
                right: '20px'
            }}>
                <button onClick={scrollToTop} style={{
                    borderRadius: '50%',
                    width: '40px',
                    height: '40px',
                    textAlign: 'center',
                    verticalAlign: 'middle',
                    lineHeight: '40px',
                    fontSize: '24px',
                    border: 'none',
                    backgroundColor: 'rgb(79, 69, 228)',
                    color: 'white',
                    cursor: 'pointer'
                }}>
                    ↑
                </button>
            </div>
        )
    );
}

export default ScrollToTopButton;
