import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, MapPin, Phone, Copy, Check, ArrowUpRight } from 'lucide-react';
import { BsGithub, BsLinkedin, BsWhatsapp } from 'react-icons/bs';
import { profile } from '../data/profile';
import { makePageVariants } from '../components/PageVariants';
import './Contact.css';

const { containerVariants, itemVariants } = makePageVariants(0.15, 0.08, 22);

const channels = [
  {
    id: 'email',
    label: 'Email',
    value: profile.email,
    href: `mailto:${profile.email}`,
    Icon: Mail,
    accent: '#EA4335',
    copyable: true
  },
  {
    id: 'phone',
    label: 'Phone',
    value: profile.phoneDisplay,
    href: `tel:${profile.phoneE164}`,
    Icon: Phone,
    accent: '#34A853',
  },
  {
    id: 'whatsapp',
    label: 'WhatsApp',
    value: profile.phoneDisplay,
    href: profile.links.whatsapp,
    Icon: BsWhatsapp,
    accent: '#25D366',
    external: true
  },
  {
    id: 'github',
    label: 'GitHub',
    value: 'github.com/Muizz67',
    href: profile.links.github,
    Icon: BsGithub,
    accent: '#E6EDF3',
    external: true
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    value: 'in/muizzrusdi',
    href: profile.links.linkedin,
    Icon: BsLinkedin,
    accent: '#0A66C2',
    external: true
  }
];

const Contact = () => {
  const [copied, setCopied] = useState(false);
  // The reset timer must be cleared on unmount: navigating away within the
  // 2s window would otherwise fire setState on an unmounted component.
  const copiedTimerRef = useRef(null);
  const [ref, inView] = useInView({ threshold: 0.05, triggerOnce: true });

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      clearTimeout(copiedTimerRef.current);
      copiedTimerRef.current = setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard blocked (insecure context or denied permission). The address
      // is still selectable next to the button.
    }
  };

  useEffect(() => () => clearTimeout(copiedTimerRef.current), []);

  return (
    <div className="contact-page">
      <section className="section" ref={ref}>
        <div className="container">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
          >
            <motion.div
              variants={itemVariants}
              className="section-header text-center mb-16"
            >
              <span className="section-eyebrow">Contact</span>
              <h1 className="text-title mb-4">Get in touch</h1>
              <p className="text-subtitle">
                Pick whichever channel suits you — I read all of them, and reply fastest
                on WhatsApp and LinkedIn.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="contact-channels">
              {channels.map((channel) => (
                <motion.a
                  key={channel.id}
                  className="channel-card"
                  href={channel.href}
                  target={channel.external ? '_blank' : undefined}
                  rel={channel.external ? 'noopener noreferrer' : undefined}
                  style={{ '--channel-accent': channel.accent }}
                  variants={itemVariants}
                >
                  <span className="channel-icon">
                    <channel.Icon size={22} />
                  </span>

                  <span className="channel-body">
                    <span className="channel-label">{channel.label}</span>
                    <span className="channel-value">{channel.value}</span>
                  </span>

                  <span className="channel-arrow">
                    <ArrowUpRight size={16} />
                  </span>
                </motion.a>
              ))}
            </motion.div>

            {/* Convenience actions + availability */}
            <motion.div className="contact-utility" variants={itemVariants}>
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

            <motion.div className="availability-panel" variants={itemVariants}>
              <span className="availability-dot" />
              <div>
                <h3 className="availability-title">Open to new work</h3>
                <p className="availability-text">
                  I'm currently looking for AI engineering, QA Automation, data or full-stack roles —
                  freelance, contract, or full-time. Based in Bandar Baru Bangi and
                  comfortable working across GMT+8 and beyond.
                </p>
              </div>
            </motion.div>

            <motion.p className="contact-footnote" variants={itemVariants}>
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