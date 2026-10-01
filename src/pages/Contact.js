import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Copy, Check, ArrowUpRight } from 'lucide-react';
import { BsGithub, BsLinkedin, BsWhatsapp } from 'react-icons/bs';
import { profile } from '../data/profile';
import './Contact.css';

// Every channel is a real link — email opens the mail client, WhatsApp opens a
// chat with the message pre-typed, phone dials. No form, no backend, nothing
// that can silently fail.
const channels = [
  {
    id: 'email',
    label: 'Email',
    value: profile.email,
    href: `mailto:${profile.email}`,
    Icon: Mail,
    accent: '#EA4335',
    note: 'Best for anything detailed',
    copyable: true
  },
  {
    id: 'phone',
    label: 'Phone',
    value: profile.phoneDisplay,
    href: `tel:${profile.phoneE164}`,
    Icon: Phone,
    accent: '#34A853',
    note: 'Weekdays, 9am — 6pm MYT'
  },
  {
    id: 'whatsapp',
    label: 'WhatsApp',
    value: profile.phoneDisplay,
    href: profile.links.whatsapp,
    Icon: BsWhatsapp,
    accent: '#25D366',
    note: 'Quickest for a short message',
    external: true
  },
  {
    id: 'github',
    label: 'GitHub',
    value: 'github.com/Muizz67',
    href: profile.links.github,
    Icon: BsGithub,
    accent: '#E6EDF3',
    note: 'Open source and experiments',
    external: true
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    value: 'in/muizzrusdi',
    href: profile.links.linkedin,
    Icon: BsLinkedin,
    accent: '#0A66C2',
    note: 'Professional enquiries',
    external: true
  }
];

const Contact = () => {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard blocked (insecure context or denied permission). The address
      // is still selectable next to the button.
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
              <h1 className="text-title mb-4">Get in touch</h1>
              <p className="text-subtitle">
                Pick whichever channel suits you — I read all of them, and reply fastest
                on WhatsApp and LinkedIn.
              </p>
            </div>

            <div className="contact-channels">
              {channels.map((channel, index) => (
                <motion.a
                  key={channel.id}
                  className="channel-card"
                  href={channel.href}
                  target={channel.external ? '_blank' : undefined}
                  rel={channel.external ? 'noopener noreferrer' : undefined}
                  style={{ '--channel-accent': channel.accent }}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + index * 0.07, duration: 0.45 }}
                >
                  <span className="channel-icon">
                    <channel.Icon size={22} />
                  </span>

                  <span className="channel-body">
                    <span className="channel-label">{channel.label}</span>
                    <span className="channel-value">{channel.value}</span>
                    <span className="channel-note">{channel.note}</span>
                  </span>

                  <span className="channel-arrow">
                    <ArrowUpRight size={16} />
                  </span>
                </motion.a>
              ))}
            </div>

            {/* Convenience actions + availability */}
            <motion.div
              className="contact-utility"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <button
                type="button"
                className="copy-btn"
                onClick={copyEmail}
                aria-label="Copy email address"
              >
                {copied ? <Check size={15} /> : <Copy size={15} />}
                <span>{copied ? 'Email copied' : 'Copy email address'}</span>
              </button>

              <span className="utility-divider" aria-hidden="true" />

              <span className="location-note">
                <MapPin size={15} />
                <span>{profile.location}</span>
              </span>
            </motion.div>

            <motion.div
              className="availability-panel"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <span className="availability-dot" />
              <div>
                <h3 className="availability-title">Open to new work</h3>
                <p className="availability-text">
                  I'm currently looking for AI engineering, data, or full-stack roles —
                  freelance, contract, or full-time. Based in Bandar Baru Bangi and
                  comfortable working remotely across GMT+8 and beyond.
                </p>
              </div>
            </motion.div>

            <motion.p
              className="contact-footnote"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              Prefer a traditional email with your CV attached? The same address works —
              mention the role and I'll come back to you within a day or two.
            </motion.p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;