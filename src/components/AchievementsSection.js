import React from 'react';
import './AchievementsSection.css';
import ShinyText from './ShinyText';

const AchievementsSection = () => {
    return (
        <section id="achievements" className="achievements">
            <ShinyText text="Achievements" speed={4} />
            <div className="achievements-container">
                <div className="achievement-card">
                    <div className="achievement-content">
                        <div className="achievement-text">
                            <h3>Smart India Hackathon 2024 – Grand Finale</h3>
                            <p><strong>Indian Institute of Technology, Hyderabad</strong></p>
                            <p><strong>Role:</strong> AI/ML Developer – Crop Disease Detection and Prediction (PS 1638)</p>
                            <ol>
                                <li>Designed and deployed machine learning models for crop disease detection using image classification and environmental data.</li>
                                <li>Handled API requests for seamless communication between the frontend and backend, enabling real time and fast disease prediction and cures.</li>
                                <li>Managed the evaluation metrics by fine tuning models and achieving an accuracy of 94% for disease detection.</li>
                                <li>Built a crop recommender system which works on environmental data which is directly taken by WeatherAPI after taking location of the user.</li>
                            </ol>
                        </div>
                        <div className="achievement-image">
                            <img src={require('../assets/pic8.jpg')} alt="Art India Hackathon" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AchievementsSection;
