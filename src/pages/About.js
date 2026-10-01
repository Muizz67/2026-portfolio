import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import {
  Globe2,
  GraduationCap,
  ArrowRight,
  CheckCircle2,
  MapPin,
  Calendar,
  Award,
  Sparkles,
  ExternalLink
} from 'lucide-react';
import { BsGithub, BsLinkedin } from 'react-icons/bs';
import {
  technicalStack,
  languages,
  experience,
  education,
  certifications,
  profile
} from '../data/profile';
import { techIcon } from '../data/techIcons';
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
  const [showAllCerts, setShowAllCerts] = useState(false);

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

              <p className="identity-bio">{profile.tagline}</p>

              <div className="identity-pills">
                {['Vision', 'Execution', 'Iteration'].map((pill) => (
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
                  <h2 className="block-title">
                    <GraduationCap size={18} />
                    Education
                  </h2>
                  <p className="block-sub">
                    Universiti Teknologi MARA (UiTM)
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
                  <h2 className="block-title">
                    <Award size={18} />
                    Certifications &amp; Courses
                  </h2>
                  <p className="block-sub">
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
                  <h2 className="block-title">Technical Stack</h2>
                  <p className="block-sub">
                    {totalTech} technologies, grouped by what I use them for
                  </p>
                </div>

                <div className="block-body">
                  <div className="stack-groups">
                    {technicalStack.map((group) => (
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

            {/* Languages */}
            <motion.div variants={itemVariants} className="mb-16">
              <div className="block">
                <div className="block-head">
                  <h2 className="block-title">
                    <Globe2 size={18} />
                    Languages
                  </h2>
                  <p className="block-sub">Working proficiency</p>
                </div>
                <div className="block-body">
                  <div className="lang-row">
                    {languages.map((lang) => (
                      <div key={lang.name} className="lang-item">
                        <span className="lang-name">{lang.name}</span>
                        <span className="lang-level">{lang.level}</span>
                      </div>
                    ))}
                  </div>

                  <div className="loc-note">
                    <MapPin size={14} />
                    <span>{profile.location}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;