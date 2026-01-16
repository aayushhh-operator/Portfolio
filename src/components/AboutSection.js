import React from 'react';
import './AboutSection.css';
import ShinyText from './ShinyText';

const AboutSection = () => {
    return (
        <section id="about" className="about">
            <ShinyText text="About Me" speed={4} />
            <div className="about-sections">
                <div className="about-section">
                    <div className="about-content">
                        <div className="about-text">
                            <p>Hey, I'm Aayush Chaudhari, currently decoding life (and data) at Dwarkadas J. Sanghvi College of Engineering, where I'm pursuing a BTech in Computer Science and Engineering (Data Science). I speak fluent Python, occasionally dream in SQL, and can summon AI/ML models like a tech wizard.</p>
                        </div>
                        <div className="about-image">
                            <img src={require('../assets/pic4.jpeg')} alt="para1" />
                        </div>
                    </div>
                </div>

                <div className="about-section">
                    <div className="about-content reverse">
                        <div className="about-image">
                            <img src={require('../assets/pic3.jpeg')} alt="para2" />
                        </div>
                        <div className="about-text">
                            <p>I'm big on hackathons, nothing beats the rush of building cool stuff in 24 hours with zero sleep and way too much coffee. Turns out, my habit of staying up late isn't just chaos, it's my edge. While the world crashes, I'm wide awake, debugging at 3 AM and vibing my way to working prototypes.</p>
                        </div>
                    </div>
                </div>

                <div className="about-section">
                    <div className="about-content">
                        <div className="about-text">
                            <p>When I'm not training algorithms or making sense of messy datasets, you'll find me deep in a movie marathon, passionately debating why Shutter Island is a cinematic masterpiece or rewatching scenes just to catch tiny details.</p>
                        </div>
                        <div className="about-image">
                            <img src={require('../assets/pic7.jpeg')} alt="para3" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
