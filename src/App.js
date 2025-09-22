import React, { useState, useEffect } from 'react';
import './App.css';
import DecryptedText from './components/DecryptedText';
import CustomCursor from './components/CustomCursor';
import ShinyText from './components/ShinyText';
import SplashScreen from './components/SplashScreen';
import emailjs from '@emailjs/browser';

function App() {
  const [animationKey, setAnimationKey] = useState(0);
  const [showSplash, setShowSplash] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [sending, setSending] = useState(false);
  const [buttonText, setButtonText] = useState('Send Message');

  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0 && !showSplash) {
        setAnimationKey(prev => prev + 1);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [showSplash]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleEmailJSSubmit = (e) => {
    e.preventDefault();
    setSending(true);
    setButtonText('Sending...');
    const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
    const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;

    // Map to common EmailJS template variable names; adjust to match your template
    const templateParams = {
      name: formData.name,
      email: (formData.email || '').toLowerCase(),
      phone: formData.phone,
      message: formData.message,
    };

    emailjs.send(serviceId, templateId, templateParams)
      .then((result) => {
        setButtonText('Message sent successfully!');
        setFormData({ name: '', email: '', phone: '', message: '' });
        setTimeout(() => setButtonText('Send Message'), 5000);
      }, (error) => {
        console.error('EmailJS error:', error);
        setButtonText('Failed to send. Try again.');
        setTimeout(() => setButtonText('Send Message'), 5000);
      })
      .finally(() => setSending(false));
  };

  const handleSplashFinish = () => {
    setShowSplash(false);
    // Trigger the decrypted text animations after splash screen finishes
    setAnimationKey(prev => prev + 1);
  };

  return (
    <div className="app">
      {showSplash && <SplashScreen onFinish={handleSplashFinish} />}
      <CustomCursor />
      <header className="header">
        <nav className="nav">
          <ul className="nav-links">
            <li>
              <a href="#"
                onClick={(e) => {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}>
                Home
              </a>
            </li>
            <li><a href="#about" onClick={(e) => scrollToSection(e, 'about')}>About Me</a></li>
            <li><a href="#experience" onClick={(e) => scrollToSection(e, 'experience')}>Experience</a></li>
            <li><a href="#skills" onClick={(e) => scrollToSection(e, 'skills')}>Skills</a></li>
            <li><a href="#achievements" onClick={(e) => scrollToSection(e, 'achievements')}>Achievements</a></li>
            <li><a href="#projects" onClick={(e) => scrollToSection(e, 'projects')}>Projects</a></li>
            <li><a href="https://drive.google.com/file/d/1T4tKKTA4FhzKv2WLEtF30TkhGvsg4gFn/view?usp=drive_link" target="_blank" rel="noopener noreferrer">Resume</a></li>
          </ul>
        </nav>
      </header>

      <main className="main-content">
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

        <section id="about" className="about">
          <ShinyText text="About Me" speed={4} />
          <div className="about-sections">
            <div className="about-section">
              <div className="about-content">
                <div className="about-text">
                  <p>Hey, I'm Aayush Chaudhari, currently decoding life (and data) at Dwarkadas J. Sanghvi College of Engineering, where I'm pursuing a BTech in Computer Science and Engineering (Data Science). I speak fluent Python, occasionally dream in SQL, and can summon AI/ML models like a tech wizard.</p>
                </div>
                <div className="about-image">
                  <img src={require('./assets/pic4.jpeg')} alt="para1" />
                </div>
              </div>
            </div>

            <div className="about-section">
              <div className="about-content reverse">
                <div className="about-image">
                  <img src={require('./assets/pic3.jpeg')} alt="para2" />
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
                  <img src={require('./assets/pic7.jpeg')} alt="para3" />
                </div>
              </div>
            </div>
          </div>
        </section>

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
                  <img src={require('./assets/data_analysis.png')} alt="Data Analysis" />
                  <span>Data Analytics</span>
                </div>
                <div className="skill-item">
                  <img src={require('./assets/deep_learning.png')} alt="Deep Learning" />
                  <span>Deep Learning</span>
                </div>
                <div className="skill-item">
                  <img src={require('./assets/time_series.png')} alt="Time Series Analysis" />
                  <span>Time Series Analysis</span>
                </div>
                <div className="skill-item">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg" alt="Computer Vision" />
                  <span>Computer Vision</span>
                </div>
                <div className="skill-item">
                  <img src={require('./assets/transfer_learning.jpg')} alt="Transfer Learning" />
                  <span>Transfer Learning</span>
                </div>
              </div>
            </div>

            <div className="skill-category">
              <h3>Frameworks</h3>
              <div className="skill-items">
                <div className="skill-item">
                  <img src={require('./assets/scikit_learn.png')} alt="Scikit-Learn" />
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
                  <img src={require('./assets/flask.png')} alt="Flask" />
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
                  <img src={require('./assets/tableau.png')} alt="Tableau" />
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
                  <img src={require('./assets/hugging_face.png')} alt="HuggingFace" />
                  <span>HuggingFace</span>
                </div>
                <div className="skill-item">
                  <img src={require('./assets/roboflow.png')} alt="Roboflow" />
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
                  <img src={require('./assets/autocad.png')} alt="AutoCAD" />
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
                  <img src={require('./assets/pic8.jpg')} alt="Art India Hackathon" />
                </div>
              </div>
            </div>
          </div>
        </section>

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
          </div>
        </section>

        <section id="contact" className="contact">
          <ShinyText text="Get in Touch" speed={4} />
          <div className="contact-container">
            <div className="contact-info">
              <div className="contact-details">
                <div className="profile-image">
                  <img src={require('./assets/pic1.jpeg')} alt="Profile" />
                </div>
                <p>
                  <i className="fas fa-envelope"></i>
                  <a className="links" href="mailto:aayush.chaudhari1607@gmail.com">aayush.chaudhari1607@gmail.com</a>
                </p>
                <p>
                  <i className="fab fa-github"></i>
                  <a className="links" href="https://github.com/aayushhh-operator" target="_blank" rel="noopener noreferrer">
                    github.com/aayushhh-operator
                  </a>
                </p>
                <p>
                  <i className="fab fa-linkedin"></i>
                  <a className="links" href="https://www.linkedin.com/in/aayush-chaudhari/" target="_blank" rel="noopener noreferrer">
                    www.linkedin.com/in/aayush-chaudhari/
                  </a>
                </p>
                <p><i className="fas fa-phone"></i> +91 8830466403</p>
              </div>
            </div>
            
            <div className="contact-form-container">
              <form className="contact-form" onSubmit={handleEmailJSSubmit}>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Your Phone Number"
                  value={formData.phone}
                  onChange={handleInputChange}
                  pattern="[0-9]{10,15}"
                  required
                />
                <textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                />
                <button type="submit" className="contact-btn" disabled={sending}>
                  {sending && <span className="spinner"></span>}
                  {buttonText}
                </button>
              </form>
            </div>
          </div>
        </section>
        <p className="made-by">Made By Aayush🤖</p>
      </main>
    </div>
  );
}

export default App;
