import React from 'react';
import './ContactPage.css';

const ContactPage = () => {
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    alert('Copied to clipboard!');
  };

  return (
    <div className="contact-page">
      <div className="contact-header">
        <img src="/assets/images/profil.jpg" alt="Profile" className="profile-picture" />
        <div className="contact-info">
          <h1>Anthony Barbedet</h1>
          <p>Nationality: French</p>
          <p>Location: Montpellier, South of France</p>
        </div>
      </div>
      <div className="contact-details">
        <h2>Contact Information</h2>
        <ul>
         
          <li>
            <strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/brb-anthony" target="_blank" rel="noopener noreferrer">www.linkedin.com/in/brb-anthony</a>
            <button onClick={() => copyToClipboard('https://www.linkedin.com/in/brb-anthony')} className="copy-button">Copy</button>
          </li>
          <li>
            <strong>GitHub:</strong> <a href="https://github.com/antmanho" target="_blank" rel="noopener noreferrer">https://github.com/antmanho</a>
            <button onClick={() => copyToClipboard('https://github.com/antmanho')} className="copy-button">Copy</button>
          </li>
           <li>
            <strong>Email:</strong> <a href="mailto:barbedetanthony@gmail.com">barbedetanthony@gmail.com</a>
            <button onClick={() => copyToClipboard('barbedetanthony@gmail.com')} className="copy-button">Copy</button>
          </li>
          <li>
            <strong>Phone:</strong> +33(0)7 89 54 03 14
            <button onClick={() => copyToClipboard('+33(0)7 89 54 03 14')} className="copy-button">Copy</button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ContactPage;
