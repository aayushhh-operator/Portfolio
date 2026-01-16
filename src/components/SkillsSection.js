import React from 'react';
import './SkillsSection.css';
import ShinyText from './ShinyText';

const SkillsSection = () => {
    return (
        <section id="skills" className="skills">
            <ShinyText text="Skills" speed={4} />
            <div className="skills-container">
                <div className="skill-category">
                    <h3>Programming Languages</h3>
                    <div className="skill-items">
                        <div className="skill-item">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" alt="C" />
                            <span>C</span>
                        </div>
                        <div className="skill-item">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" alt="C++" />
                            <span>C++</span>
                        </div>
                        <div className="skill-item">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python" />
                            <span>Python</span>
                        </div>
                        <div className="skill-item">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg" alt="Dart" />
                            <span>Dart</span>
                        </div>
                        <div className="skill-item">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" alt="Java" />
                            <span>Java</span>
                        </div>
                    </div>
                </div>

                <div className="skill-category">
                    <h3>Machine Learning</h3>
                    <div className="skill-items">
                        <div className="skill-item">
                            <img src={require('../assets/data_analysis.png')} alt="Data Analysis" />
                            <span>Data Analytics</span>
                        </div>
                        <div className="skill-item">
                            <img src={require('../assets/deep_learning.png')} alt="Deep Learning" />
                            <span>Deep Learning</span>
                        </div>
                        <div className="skill-item">
                            <img src={require('../assets/time_series.png')} alt="Time Series Analysis" />
                            <span>Time Series Analysis</span>
                        </div>
                        <div className="skill-item">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg" alt="Computer Vision" />
                            <span>Computer Vision</span>
                        </div>
                        <div className="skill-item">
                            <img src={require('../assets/transfer_learning.jpg')} alt="Transfer Learning" />
                            <span>Transfer Learning</span>
                        </div>
                    </div>
                </div>

                <div className="skill-category">
                    <h3>Frameworks</h3>
                    <div className="skill-items">
                        <div className="skill-item">
                            <img src={require('../assets/scikit_learn.png')} alt="Scikit-Learn" />
                            <span>Scikit-learn</span>
                        </div>
                        <div className="skill-item">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" alt="TensorFlow" />
                            <span>TensorFlow</span>
                        </div>
                        <div className="skill-item">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg" alt="PyTorch" />
                            <span>PyTorch</span>
                        </div>
                        <div className="skill-item">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/keras/keras-original.svg" alt="Keras" />
                            <span>Keras</span>
                        </div>
                        <div className="skill-item">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg" alt="OpenCV" />
                            <span>OpenCV</span>
                        </div>
                        <div className="skill-item">
                            <img src={require('../assets/flask.png')} alt="Flask" />
                            <span>Flask</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="skills-container">
                <div className="skill-category">
                    <h3>Data Tools</h3>
                    <div className="skill-items">
                        <div className="skill-item">
                            <img src={require('../assets/tableau.png')} alt="Tableau" />
                            <span>Tableau</span>
                        </div>
                        <div className="skill-item">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg" alt="PowerBI" />
                            <span>PowerBI</span>
                        </div>
                        <div className="skill-item">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" alt="SQL" />
                            <span>SQL</span>
                        </div>
                        <div className="skill-item">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt="Git" />
                            <span>Git</span>
                        </div>
                        <div className="skill-item">
                            <img src={require('../assets/hugging_face.png')} alt="HuggingFace" />
                            <span>HuggingFace</span>
                        </div>
                        <div className="skill-item">
                            <img src={require('../assets/roboflow.png')} alt="Roboflow" />
                            <span>Roboflow</span>
                        </div>
                    </div>
                </div>

                <div className="skill-category">
                    <h3>Others</h3>
                    <div className="skill-items">
                        <div className="skill-item">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" alt="Figma" />
                            <span>Figma</span>
                        </div>
                        <div className="skill-item">
                            <img src={require('../assets/autocad.png')} alt="AutoCAD" />
                            <span>AutoCAD</span>
                        </div>
                        <div className="skill-item">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg" alt="Canva" />
                            <span>Canva</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SkillsSection;
