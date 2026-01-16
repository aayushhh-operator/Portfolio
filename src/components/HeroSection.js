import React, { useState, useEffect } from 'react';
import './HeroSection.css';
import DecryptedText from './DecryptedText';

const HeroSection = () => {
    const [animationKey, setAnimationKey] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY === 0) {
                setAnimationKey(prev => prev + 1);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (e, sectionId) => {
        e.preventDefault();
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section className="hero">
            <div className="hero-content">
                <DecryptedText
                    key={`name-${animationKey}`}
                    text="Aayush Chaudhari"
                    className="name"
                    encryptedClassName="name encrypted"
                    speed={40}
                    maxIterations={20}
                    sequential={true}
                    revealDirection="center"
                    animateOn="view"
                />
                <br></br>
                <DecryptedText
                    key={`subtitle-${animationKey}`}
                    text="AI/ML Developer | Hackathon Enthusiast"
                    className="subtitle"
                    encryptedClassName="subtitle encrypted"
                    speed={10}
                    maxIterations={15}
                    sequential={true}
                    revealDirection="center"
                    animateOn="view"
                />
                <div>
                    <a href="#contact" className="contact-btn" onClick={(e) => scrollToSection(e, 'contact')}>Get in Touch</a>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
