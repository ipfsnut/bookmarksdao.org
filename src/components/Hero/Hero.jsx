import React from 'react';
import './Hero.css';

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };
  
  return (
    <div className="hero">
      <div className="container hero-content">
        <h1>BookmarksDAO</h1>
        <p className="subtitle">A Tokenized Book Discovery Protocol</p>
        <p>Reimagining book discovery through token incentives where people put their money where their mouth is.</p>
        <button 
          className="button" 
          onClick={() => scrollToSection('whitepaper')}
        >
          Read Whitepaper
        </button>
        <button 
          className="button secondary" 
          onClick={() => scrollToSection('cta')}
        >
          Join Waitlist
        </button>
      </div>
    </div>
  );
};

export default Hero;