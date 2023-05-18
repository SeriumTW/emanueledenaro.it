import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faDiscord, faInstagram } from '@fortawesome/free-brands-svg-icons';

const SocialSidebar = () => {
    return (
        <div className="fixed inset-y-0 right-5 flex items-center pl-2">
            <ul className="space-y-6">
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
        </div>
    );
}

export default SocialSidebar;
