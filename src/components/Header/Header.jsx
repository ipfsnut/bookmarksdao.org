import React, { useState, useEffect } from 'react';
import './Header.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
      setIsMobileMenuOpen(false);
    }
  };
  
  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`} id="header">
      <div className="container nav-container">
        <a href="#" className="logo">
          <i className="fas fa-bookmark"></i> BookmarksDAO
        </a>
        <button className="mobile-menu-btn" onClick={toggleMobileMenu}>
          <i className="fas fa-bars"></i>
        </button>
        <nav>
          <ul className={isMobileMenuOpen ? 'active' : ''} id="nav-menu">
            <li><a href="#features" onClick={() => scrollToSection('features')}>Features</a></li>
            <li><a href="#whitepaper" onClick={() => scrollToSection('whitepaper')}>Whitepaper</a></li>
            <li><a href="#cta" onClick={() => scrollToSection('cta')}>Join Us</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;