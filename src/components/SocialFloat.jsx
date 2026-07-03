import React from 'react';
import './SocialFloat.css';

const SocialFloat = () => {
    return (
        <div className="social-float-container">
            <a
                href="https://wa.me/917406026336"
                target="_blank"
                rel="noopener noreferrer"
                className="whatsapp-float"
                title="Chat on WhatsApp"
            >
                <i className="bi bi-whatsapp"></i>
            </a>
            <a
                href="https://www.instagram.com/mr_pillangovi?igsh=MXhheDhhcWY4MjF1cQ%3D%3D&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                className="insta-float"
                title="Follow on Instagram"
            >
                <i className="bi bi-instagram"></i>
            </a>
        </div>
    );
};

export default SocialFloat;
