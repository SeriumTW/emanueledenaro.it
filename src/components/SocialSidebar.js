import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faDiscord, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faChevronCircleRight, faArrowUp } from '@fortawesome/free-solid-svg-icons';

const SocialSidebar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        if (window.pageYOffset > 500) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        document.body.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);

        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    return (
        <div className="fixed bottom-1 right-0 flex flex-col-reverse items-end pb-4 pr-2">
            {isVisible && (
                <button onClick={scrollToTop} className="bg-blue-500 text-white w-10 h-10 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 hover:ring-blue-500">
                    <FontAwesomeIcon icon={faArrowUp} />
                </button>
            )}
            <button onClick={() => setIsOpen(!isOpen)} className="bg-indigo-500 text-white w-10 h-10 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 hover:ring-blue-500 mb-2">
                <FontAwesomeIcon icon={faChevronCircleRight} />
            </button>
            {isOpen && (
                <ul className="space-y-3 pb-3">
                    <li>
                        <a href="https://www.linkedin.com/in/emanuele-denaro/" target="_blank" rel="noreferrer">
                            <button className="bg-blue-500 text-white w-10 h-10 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 hover:ring-blue-500">
                                <FontAwesomeIcon icon={faLinkedin} />
                            </button>
                        </a>
                    </li>
                    <li>
                        <a href="https://discord.gg/EYKek4DpFD" target="_blank" rel="noreferrer">
                            <button className="bg-blue-500 text-white w-10 h-10 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 hover:ring-blue-500">
                                <FontAwesomeIcon icon={faDiscord} />
                            </button>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com/ema_denaro/" target="_blank" rel="noreferrer">
                            <button className="bg-blue-500 text-white w-10 h-10 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 hover:ring-blue-500">
                                <FontAwesomeIcon icon={faInstagram} />
                            </button>
                        </a>
                    </li>
                </ul>
            )}
        </div>
    );
}

export default SocialSidebar;
