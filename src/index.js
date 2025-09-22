import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import emailjs from '@emailjs/browser';

// Initialize EmailJS with public key from environment
if (process.env.REACT_APP_EMAILJS_PUBLIC_KEY) {
  emailjs.init({ publicKey: process.env.REACT_APP_EMAILJS_PUBLIC_KEY });
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
); 