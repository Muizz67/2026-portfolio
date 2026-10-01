import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import {
  GraduationCap,
  ArrowRight,
  CheckCircle2,
  Calendar,
  Award,
  Sparkles,
  Layers,
  ExternalLink
} from 'lucide-react';
import { BsGithub, BsLinkedin } from 'react-icons/bs';
import {
  technicalStack,
  experience,
  education,
  certifications,
  profile
} from '../data/profile';
import { techIcon } from '../data/techIcons';
import { icon } from '../data/icon';
import './About.css';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { delayChildren: 0.15, staggerChildren: 0.08 }
  }
};

const itemVariants = {
  hidden: { y: 22, opacity: 0 },
  visible: { y: 0, opacity: 1 }
};

// Hardcoded rather than derived from the name, which contains an apostrophe.
const initials = 'MR';

// What he's drawn to, in his own framing rather than as a capability list.
const passions = [
  {
    title: 'AI, especially automation',
    note: 'Building a process once so it never has to be run by hand again',
    icon: 'Workflow'
  },
  {
    title: 'Programming',
    note: 'The feeling of working something out, and watching it work',
    icon: 'Code'
  },
  {
    title: 'AI agents',
    note: 'Building them for myself — automating my own day-to-day',
    icon: 'Bot'
  },
  {
    title: 'Gaming',
    note: 'Mainly competitive FPS, MOBA and rhythm games',
    icon: 'FaGamepad'
  }
];

// What each stack category is actually for. Keeps the grouped list readable
// without reintroducing self-assessed percentage bars.
const stackNotes = {
  'AI & ML': 'Model development and evaluation in Python',
  'Data & Annotation': 'Labelling and collecting the data models learn from',
  'Full-Stack': 'Backends, frontends, and the APIs between them',
  'Automation & Workflow': 'Pipelines that run without supervision',
  'Tools & Languages': 'The supporting toolkit'
};

const About = () => {
  const [ref, inView] = useInView({ threshold: 0.03, triggerOnce: true });
  const [activeCategory, setActiveCategory] = useState('All');
  const [showAllCerts, setShowAllCerts] = useState(false);

  const categories = ['All', ...technicalStack.map((g) => g.category)];
  const visibleStack =
    activeCategory === 'All'
      ? technicalStack
      : technicalStack.filter((g) => g.category === activeCategory);

  const visibleCerts = showAllCerts ? certifications : certifications.slice(0, 6);
  const totalTech = technicalStack.reduce((n, g) => n + g.items.length, 0);

  return (
    <div className="about-page">
      <section className="section" ref={ref}>
        <div className="container">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
          >
            {/* Page header */}
            <motion.div
              variants={itemVariants}
              className="section-header text-center mb-16"
            >
              <span className="section-eyebrow">About</span>
              <h1 className="text-title mb-4">AI engineer, end to end</h1>
              <p className="text-subtitle">
                Data annotation, machine learning, and full-stack development — the
                whole arc from getting data in to shipping systems that hold up.
              </p>
            </motion.div>

            {/* Identity card */}
            <motion.div variants={itemVariants} className="card identity-card mb-16">
              <div className="identity-top">
                <span className="identity-avatar" aria-hidden="true">
                  {initials}
                </span>
                <div className="identity-text">
                  <h2 className="identity-name">{profile.fullName}</h2>
                  <p className="identity-role">{profile.role}</p>
                  <span className="identity-status">
                    <span className="identity-dot" />
                    Available for new work
                  </span>
                </div>
              </div>

              <div className="identity-pills">
                {['AI', 'Automation', 'Programming', 'AI Agents', 'Gaming'].map((pill) => (
                  <span key={pill} className="identity-pill">
                    {pill}
                  </span>
                ))}
              </div>

              <div className="identity-links">
                <a href={profile.links.github} target="_blank" rel="noopener noreferrer">
                  <BsGithub size={16} />
                  <span>GitHub</span>
                </a>
                <a href={profile.links.linkedin} target="_blank" rel="noopener noreferrer">
                  <BsLinkedin size={16} />
                  <span>LinkedIn</span>
                </a>
              </div>
            </motion.div>

            {/* Bio + automation flow, side by side */}
            <motion.div variants={itemVariants} className="mb-16">
              <div className="about-split">
                <div className="bio-col">
                  <span className="section-eyebrow">A little about me</span>
                  <div className="identity-bio">
                    {profile.bio.map((para) => (
                      <p key={para.slice(0, 32)}>{para}</p>
                    ))}
                  </div>
                </div>

                <div className="passion-card">
                  <span className="passion-label">I'm passionate about</span>

                  <div className="passion-list">
                    {passions.map((item) => (
                      <div key={item.title} className="passion-item">
                        <span className="passion-icon">{icon(item.icon, 17)}</span>
                        <div className="passion-text">
                          <h3 className="passion-title">{item.title}</h3>
                          <p className="passion-note">{item.note}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Experience bridge */}
            <motion.div variants={itemVariants} className="mb-16">
              <Link className="bridge-card" to="/experience">
                <span className="bridge-icon">
                  <Sparkles size={20} />
                </span>
                <div className="bridge-text">
                  <h2 className="bridge-title">Experience</h2>
                  <p className="bridge-sub">
                    {experience.length} roles — data annotation, AI engineering, and
                    full-stack work.
                  </p>
                </div>
                <span className="bridge-arrow">
                  <ArrowRight size={18} />
                </span>
              </Link>
            </motion.div>

            {/* Education — degree and diploma side by side */}
            <motion.div variants={itemVariants} className="mb-16">
              <div className="block">
                <div className="block-head">
                  <h2 className="block-title block-title-center">
                    <GraduationCap size={19} />
                    Education
                  </h2>
                  <p className="block-sub block-sub-center">
                    Where I Studied — and what I learned along the way
                  </p>
                </div>
                <div className="block-body">
                  <div className="edu-grid">
                    {education.map((edu) => (
                      <div key={edu.degree} className="edu-item">
                        <span className="edu-level">{edu.level}</span>
                        <h3 className="edu-degree">{edu.degree}</h3>
                        <dl className="field-list">
                          <div className="field">
                            <dt>Institution</dt>
                            <dd>{edu.university}</dd>
                          </div>
                          <div className="field">
                            <dt>Timeline</dt>
                            <dd>
                              <span className="field-icon">
                                <Calendar size={12} />
                              </span>
                              {edu.timeline}
                            </dd>
                          </div>
                          <div className="field">
                            <dt>CGPA</dt>
                            <dd className="field-strong">{edu.cgpa}</dd>
                          </div>
                        </dl>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Certifications */}
            <motion.div variants={itemVariants} className="mb-16">
              <div className="block">
                <div className="block-head">
                  <h2 className="block-title block-title-center">
                    <Award size={19} />
                    Certifications &amp; Courses
                  </h2>
                  <p className="block-sub block-sub-center">
                    Continuous learning across AI platforms, design thinking, and 5G
                  </p>
                </div>
                <div className="block-body">
                  <div className="cert-grid">
                    {visibleCerts.map((cert) => {
                      const inner = (
                        <>
                          <div className="cert-top">
                            <span className="cert-issuer">{cert.issuer}</span>
                            <span className="cert-verified">
                              <CheckCircle2 size={12} />
                              Held
                            </span>
                          </div>
                          <h3 className="cert-title">{cert.title}</h3>
                          {cert.link && (
                            <span className="cert-cta">
                              View credential
                              <ExternalLink size={13} />
                            </span>
                          )}
                        </>
                      );

                      return cert.link ? (
                        <a
                          key={cert.title}
                          className="cert-card"
                          href={cert.link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {inner}
                        </a>
                      ) : (
                        <div key={cert.title} className="cert-card">
                          {inner}
                        </div>
                      );
                    })}
                  </div>

                  {certifications.length > 6 && (
                    <button
                      type="button"
                      className="show-more"
                      onClick={() => setShowAllCerts((v) => !v)}
                    >
                      {showAllCerts ? 'Show fewer' : 'Show all'}
                      <ArrowRight
                        size={15}
                        style={{
                          transform: showAllCerts ? 'rotate(-90deg)' : 'none',
                          transition: 'transform 0.2s ease'
                        }}
                      />
                    </button>
                  )}
                </div>
              </div>
            </motion.div>

            {/* Technical stack */}
            <motion.div variants={itemVariants}>
              <div className="block">
                <div className="block-head">
                  <h2 className="block-title block-title-center">
                    <Layers size={19} />
                    Technical Stack
                  </h2>
                  <p className="block-sub block-sub-center">
                    {totalTech} technologies, grouped by what I use them for
                  </p>
                </div>

                <div className="stack-tabs">
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      type="button"
                      className={`stack-tab ${activeCategory === cat ? 'stack-tab-active' : ''}`}
                      onClick={() => setActiveCategory(cat)}
                    >
                      {cat}
                      <span className="stack-tab-count">
                        {cat === 'All'
                          ? totalTech
                          : technicalStack.find((g) => g.category === cat).items.length}
                      </span>
                    </button>
                  ))}
                </div>

                <div className="block-body">
                  <div
                    className={`stack-groups ${
                      visibleStack.length === 1 ? 'stack-groups-single' : ''
                    }`}
                  >
                    {visibleStack.map((group) => (
                      <div key={group.category} className="stack-group">
                        <div className="stack-group-head">
                          <h3 className="stack-group-title">{group.category}</h3>
                          <span className="stack-group-count">
                            {group.items.length}
                          </span>
                        </div>
                        <p className="stack-group-note">{stackNotes[group.category]}</p>

                        <div className="stack-items">
                          {group.items.map((item) => (
                            <div key={item.name} className="stack-item">
                              <span className="stack-item-logo">
                                {techIcon(item.icon, 22)}
                              </span>
                              <div className="stack-item-text">
                                <h4 className="stack-item-name">{item.name}</h4>
                                <p className="stack-item-desc">
                                  {item.description}
                                </p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div variants={itemVariants} className="exp-footer">
              <Link className="btn-secondary" to="/experience">
                <span>View Experience</span>
                <ArrowRight size={18} />
              </Link>
              <Link className="exp-footer-link" to="/contact">
                Get in touch
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;