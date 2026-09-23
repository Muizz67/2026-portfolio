import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-page">
      <section className="section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="section-header text-center mb-16">
              <h1 className="text-title mb-4">Let's Connect</h1>
              <p className="text-subtitle">
                Ready to discuss AI opportunities or collaborate on innovative projects
              </p>
            </div>

            <div className="contact-grid">
              <div className="contact-info">
                <div className="contact-item card">
                  <div className="contact-icon">
                    <Mail size={24} />
                  </div>
                  <div className="contact-content">
                    <h3 className="contact-title">Email</h3>
                    <p className="contact-text">muizzrusdi@yahoo.com</p>
                  </div>
                </div>

                <div className="contact-item card">
                  <div className="contact-icon">
                    <MapPin size={24} />
                  </div>
                  <div className="contact-content">
                    <h3 className="contact-title">Location</h3>
                    <p className="contact-text">Bandar Baru Bangi, Selangor, Malaysia</p>
                  </div>
                </div>

              </div>

              <div className="contact-form card">
                <h3 className="form-title">Send a Message</h3>
                <form className="form">
                  <div className="form-group">
                    <input type="text" placeholder="Your Name" className="form-input" required />
                  </div>
                  <div className="form-group">
                    <input type="email" placeholder="Your Email" className="form-input" required />
                  </div>
                  <div className="form-group">
                    <input type="text" placeholder="Subject" className="form-input" required />
                  </div>
                  <div className="form-group">
                    <textarea placeholder="Your Message" className="form-textarea" rows="6" required></textarea>
                  </div>
                  <button type="submit" className="btn-primary">
                    <Mail size={20} />
                    <span>Send Message</span>
                  </button>
                </form>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;