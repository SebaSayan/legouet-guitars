import React, { useState, useEffect } from 'react';
import { animateScroll as scroll } from 'react-scroll';

const ScrollToTopButton = () => {
    const [visible, setVisible] = useState(false);

    const toggleVisibility = () => {
        if (window.pageYOffset > 100) {
            setVisible(true);
        } else {
            setVisible(false);
        }
    };

    const scrollToTop = () => {
        scroll.scrollToTop();
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    return (
        <div className="scroll-to-top">
            {visible && (
                <div onClick={scrollToTop} style={styles}>
                    <p>➜</p>
                </div>
            )}
        </div>
    );
};

const styles = {
    position: 'fixed',
    bottom: '20px',
    right: '20px',
    cursor: 'pointer',
    fontSize: '2rem',
    transform: 'rotate(-90deg)',
    backgroundColor: '#000',
    color: 'white',
    border: "2px solid grey",
    borderRadius: '50%',
    height: '50px',
    width: '50px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
};

export default ScrollToTopButton;