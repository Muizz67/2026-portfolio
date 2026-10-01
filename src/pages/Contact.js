import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Send, ArrowUpRight, Copy, Check } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../components/BrandIcons';
import { profile } from '../data/profile';
import './Contact.css';

const subjects = [
  'Project enquiry',
  'AI / ML work',
  'Automation or scraping',
  'Full-time role',
  'Something else'
];

// No backend here by design: the form composes a mailto: link, so "Send" opens
// the visitor's own mail client with the message already filled in. That works
// on Cloudflare Pages with no server and can't silently drop a message.
function buildMailto({ name, email, subject, message }) {
  const body = `${message}\n\n—\n${name}\n${email}`;
  return `mailto:${profile.email}?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(body)}`;
}

const Contact = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: subjects[0],
    message: ''
  });
  const [copied, setCopied] = useState(false);

  const update = (field) => (event) => {
    setForm((prev) => ({ ...prev, [field]: event.target.value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    window.location.href = buildMailto(form);
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard blocked (insecure context / permissions) — the address is
      // still visible and selectable next to the button.
    }
  };

  return (
    <div className="contact-page">
      <section className="section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="section-header text-center mb-16">
              <span className="section-eyebrow">Contact</span>
              <h1 className="text-title mb-4">Let's talk</h1>
              <p className="text-subtitle">
                Open to AI engineering, automation, and full-stack work — freelance,
                contract, or full-time.
              </p>
            </div>

            <div className="contact-grid">
              {/* Left: details + socials */}
              <div className="contact-info">
                <div className="contact-item card">
                  <div className="contact-icon">
                    <Mail size={24} />
                  </div>
                  <div className="contact-content">
                    <h3 className="contact-title">Email</h3>
                    <a href={`mailto:${profile.email}`} className="contact-text contact-link">
                      {profile.email}
                    </a>
                    <button type="button" className="copy-btn" onClick={copyEmail}>
                      {copied ? <Check size={13} /> : <Copy size={13} />}
                      <span>{copied ? 'Copied' : 'Copy'}</span>
                    </button>
                  </div>
                </div>

                <div className="contact-item card">
                  <div className="contact-icon">
                    <MapPin size={24} />
                  </div>
                  <div className="contact-content">
                    <h3 className="contact-title">Location</h3>
                    <p className="contact-text">{profile.location}</p>
                    <span className="contact-note">Open to remote and hybrid roles</span>
                  </div>
                </div>

                <div className="contact-socials">
                  <a
                    className="social-btn"
                    href={profile.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <GithubIcon size={18} />
                    <span>GitHub</span>
                    <ArrowUpRight size={14} className="social-btn-arrow" />
                  </a>
                  <a
                    className="social-btn"
                    href={profile.links.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <LinkedinIcon size={18} />
                    <span>LinkedIn</span>
                    <ArrowUpRight size={14} className="social-btn-arrow" />
                  </a>
                </div>

                <div className="response-note">
                  <strong>Typical reply time:</strong> within a day or two. For anything
                  urgent, LinkedIn is the fastest way to reach me.
                </div>
              </div>

              {/* Right: form */}
              <div className="contact-form card">
                <h3 className="form-title">Send a message</h3>
                <p className="form-note">
                  Fill this in and I'll get an email in your own mail app — nothing is
                  stored on this site.
                </p>

                <form className="form" onSubmit={handleSubmit}>
                  <div className="form-row">
                    <div className="form-group">
                      <label className="form-label" htmlFor="contact-name">
                        Your name
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        placeholder="Jane Doe"
                        className="form-input"
                        value={form.name}
                        onChange={update('name')}
                        required
                      />
                    </div>

                    <div className="form-group">
                      <label className="form-label" htmlFor="contact-email">
                        Your email
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        placeholder="jane@company.com"
                        className="form-input"
                        value={form.email}
                        onChange={update('email')}
                        required
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="contact-subject">
                      What's this about?
                    </label>
                    <select
                      id="contact-subject"
                      className="form-input form-select"
                      value={form.subject}
                      onChange={update('subject')}
                    >
                      {subjects.map((subject) => (
                        <option key={subject} value={subject}>
                          {subject}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="contact-message">
                      Message
                    </label>
                    <textarea
                      id="contact-message"
                      placeholder="What are you working on, and where could I help?"
                      className="form-textarea"
                      rows="6"
                      value={form.message}
                      onChange={update('message')}
                      required
                    />
                  </div>

                  <button type="submit" className="btn-primary form-submit">
                    <Send size={18} />
                    <span>Send message</span>
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