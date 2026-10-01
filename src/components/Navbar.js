import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, FileText } from 'lucide-react';
import './Navbar.css';

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/projects', label: 'Projects' },
  { to: '/contact', label: 'Contact' }
];

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

  // Navigating away should always dismiss the mobile menu, including
  // browser back/forward, which fires no click on the link itself.
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const isActive = (to) => location.pathname === to;

  return (
    <nav className={`navbar ${isScrolled ? 'navbar-scrolled' : ''}`}>
      <div className="container">
        <div className="navbar-content">
          <Link to="/" className="navbar-brand">
            <span className="brand-text">Muizz</span>
            <span className="brand-accent">Rusdi</span>
          </Link>

          <div className="navbar-menu">
            {links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`navbar-link ${isActive(link.to) ? 'active' : ''}`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/resume"
              className={`navbar-link navbar-resume ${isActive('/resume') ? 'active' : ''}`}
            >
              <FileText size={15} />
              <span>Resume</span>
            </Link>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="navbar-toggle"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <div className={`navbar-mobile ${isOpen ? 'open' : ''}`}>
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`navbar-mobile-link ${isActive(link.to) ? 'active' : ''}`}
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/resume"
            className="navbar-mobile-link"
            onClick={() => setIsOpen(false)}
          >
            Resume
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;