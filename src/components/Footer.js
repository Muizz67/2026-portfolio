import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUp } from 'lucide-react';
import { BsGithub, BsLinkedin, BsWhatsapp } from 'react-icons/bs';
import { profile } from '../data/profile';
import './Footer.css';

const nav = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/experience', label: 'Experience' },
  { to: '/projects', label: 'Projects' },
  { to: '/contact', label: 'Contact' },
  { to: '/resume', label: 'Resume' }
];

const socials = [
  { href: profile.links.github, Icon: BsGithub, label: 'GitHub' },
  { href: profile.links.linkedin, Icon: BsLinkedin, label: 'LinkedIn' },
  { href: profile.links.whatsapp, Icon: BsWhatsapp, label: 'WhatsApp' }
];

const Footer = () => {
  const year = new Date().getFullYear();

  // "Back to top" only makes sense once the visitor has actually scrolled.
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Identity */}
          <div className="footer-brand">
            <Link to="/" className="footer-logo">
              <span>Muizz</span>
              <span className="footer-logo-accent">Rusdi</span>
            </Link>
            <p className="footer-blurb">{profile.tagline}</p>
            <div className="footer-socials">
              {socials.map(({ href, Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-social"
                  aria-label={label}
                  title={label}
                >
                  <Icon size={17} />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <nav className="footer-col" aria-label="Footer navigation">
            <h3 className="footer-heading">Pages</h3>
            <ul className="footer-links">
              {nav.map((link) => (
                <li key={link.to}>
                  <Link to={link.to}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div className="footer-col">
            <h3 className="footer-heading">Get in touch</h3>
            <ul className="footer-links">
              <li>
                <a href={`mailto:${profile.email}`}>{profile.email}</a>
              </li>
              <li>
                <a href={`tel:${profile.phoneE164}`}>{profile.phoneDisplay}</a>
              </li>
              <li className="footer-muted">{profile.location}</li>
            </ul>
            <button type="button" className="footer-top" onClick={scrollTop}>
              <ArrowUp size={15} />
              <span>Back to top</span>
            </button>
          </div>
        </div>

        <div className="footer-base">
          <span>
            © {year} {profile.fullName}. All rights reserved.
          </span>
          <span className="footer-built">
            Built with React — {profile.location}
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;