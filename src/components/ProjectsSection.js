import React from 'react';
import './ProjectsSection.css';
import ShinyText from './ShinyText';

const ProjectsSection = () => {
    return (
        <section id="projects" className="projects">
            <ShinyText text="Projects" speed={4} />
            <div className="projects-container">
                <div className="project-card">
                    <div className="card-inner">
                        <div className="card-front">
                            <h3>Shetkari</h3>
                        </div>
                        <div className="card-back">
                            <p>AI Driven Crop Disease Detector and Predictor</p>
                            <a className="links" href='https://github.com/aayushhh-operator/Crop-Disease-Detector' target="_blank" rel="noopener noreferrer">GitHub</a>
                        </div>
                    </div>
                </div>

                <div className="project-card">
                    <div className="card-inner">
                        <div className="card-front">
                            <h3>ArtiFACTS</h3>
                        </div>
                        <div className="card-back">
                            <p>AI Driven Counterfeit Artifact Detection and 3D Reconstruction of Broken Artifacts
                                Application</p>
                            <a className="links" href='https://github.com/aayushhh-operator/Artifact-Detector' target="_blank" rel="noopener noreferrer">GitHub</a>
                        </div>
                    </div>
                </div>

                <div className="project-card">
                    <div className="card-inner">
                        <div className="card-front">
                            <h3>InnoGuard</h3>
                        </div>
                        <div className="card-back">
                            <p>Early Identification of Financial Fraud in Small Businesses</p>
                            <a className="links" href='https://github.com/chaahatsingh/Innovathon_Beaches' target="_blank" rel="noopener noreferrer">GitHub</a>
                        </div>
                    </div>
                </div>

                <div className="project-card">
                    <div className="card-inner">
                        <div className="card-front">
                            <h3>WardrobeMirror</h3>
                        </div>
                        <div className="card-back">
                            <p>AI Driven Similar Clothing Detection Application</p>
                            <a className="links" href='https://github.com/aayushhh-operator/WardrobeMirror' target="_blank" rel="noopener noreferrer">GitHub</a>
                        </div>
                    </div>
                </div>

                <div className="project-card">
                    <div className="card-inner">
                        <div className="card-front">
                            <h3>Attendance Management System</h3>
                        </div>
                        <div className="card-back">
                            <p>Java and Springboot Based Attendance Management System</p>
                            <a className="links" href='https://github.com/aayushhh-operator/Attendance-Management' target="_blank" rel="noopener noreferrer">GitHub</a>
                        </div>
                    </div>
                </div>

                <div className="project-card">
                    <div className="card-inner">
                        <div className="card-front">
                            <h3>F1 Data Analysis</h3>
                        </div>
                        <div className="card-back">
                            <p>Used Readily available F1 data and analzed the data using PySpark and PowerBI</p>
                            <a className="links" href='https://github.com/aayushhh-operator/F1-Data-Analysis' target="_blank" rel="noopener noreferrer">GitHub</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProjectsSection;
