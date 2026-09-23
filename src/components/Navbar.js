import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? 'navbar-scrolled' : ''}`}>
      <div className="container">
        <div className="navbar-content">
          <Link to="/" className="navbar-brand">
            <span className="brand-text">Muizz</span>
            <span className="brand-accent">Rusdi</span>
          </Link>
          
          <div className="navbar-menu">
            <Link 
              to="/" 
              className={`navbar-link ${location.pathname === '/' ? 'active' : ''}`}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className={`navbar-link ${location.pathname === '/about' ? 'active' : ''}`}
            >
              About
            </Link>
            <Link 
              to="/projects" 
              className={`navbar-link ${location.pathname === '/projects' ? 'active' : ''}`}
            >
              Projects
            </Link>
            <Link 
              to="/contact" 
              className={`navbar-link ${location.pathname === '/contact' ? 'active' : ''}`}
            >
              Contact
            </Link>
          </div>

          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="navbar-toggle"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <div className={`navbar-mobile ${isOpen ? 'open' : ''}`}>
          <Link to="/" className="navbar-mobile-link" onClick={() => setIsOpen(false)}>
            Home
          </Link>
          <Link to="/about" className="navbar-mobile-link" onClick={() => setIsOpen(false)}>
            About
          </Link>
          <Link to="/projects" className="navbar-mobile-link" onClick={() => setIsOpen(false)}>
            Projects
          </Link>
          <Link to="/contact" className="navbar-mobile-link" onClick={() => setIsOpen(false)}>
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;