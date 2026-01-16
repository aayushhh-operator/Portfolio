import React from 'react';
import './ExperienceSection.css';
import ShinyText from './ShinyText';

const ExperienceSection = () => {
    return (
        <section id="experience" className="experience">
            <ShinyText text="Experience" speed={4} />
            <div className="experience-container">
                <div className="experience-card">
                    <h3>Applied Python Developer Intern, Utkarsh Minds Institute</h3>
                    <p><strong>June 2024 – August 2024</strong></p>
                    <ol>
                        <li>Analyzed datasets with over 50,000 rows across 5 Data Science capstone projects using Python, NumPy, and Pandas.</li>
                        <li>Delivered data-driven solutions for 3 real-world case studies in collaboration with Utkarsh Minds under the mentorship of Dr. Pranav Nerurkar.</li>
                    </ol>
                </div>
            </div>
        </section>
    );
};

export default ExperienceSection;
