import React, { useState } from 'react';
import ShinyText from './ShinyText';
import './ContactSection.css';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const response = await fetch('http://localhost:5000/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', phone: '', message: '' });
        setTimeout(() => setStatus(''), 5000);
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error('Error:', error);
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="contact">
      <ShinyText text="Get in Touch" />
      <div className="contact-container">
        <div className="contact-info">
          <div className="contact-details">
            <div className="profile-image">
              <img src={require('../assets/pic1.jpeg')} alt="Profile" />
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
          <form className="contact-form" onSubmit={handleSubmit}>
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
            <button type="submit" className="contact-btn" disabled={status === 'sending'}>
              {status === 'sending' && <span className="spinner"></span>}
              {status === 'sending' ? 'Sending...' : status === 'success' ? 'Message Sent!' : status === 'error' ? 'Failed' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
