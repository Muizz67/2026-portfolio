import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  Globe2,
  MapPin,
  Calendar,
  CheckCircle2,
  ExternalLink,
  GraduationCap
} from 'lucide-react';
import {
  technicalStack,
  languages,
  experience,
  education,
  certifications
} from '../data/profile';
import { icon } from '../data/icon';
import './About.css';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: { y: 0, opacity: 1 }
};

// A bracketed slot means the detail still needs filling in. Render it as an
// obvious marker rather than shipping "[TODO] Your university" to production.
const isPlaceholder = (value) => typeof value === 'string' && value.startsWith('[TODO]');

function Detail({ label, value }) {
  return (
    <div>
      <span className="education-label">{label}</span>
      {isPlaceholder(value) ? (
        <p className="education-value education-value-todo" title="Fill this in src/data/profile.js">
          {value.replace('[TODO] ', 'Needs your detail')}
        </p>
      ) : (
        <p className="education-value">{value}</p>
      )}
    </div>
  );
}

const About = () => {
  const [ref, inView] = useInView({ threshold: 0.05, triggerOnce: true });
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', ...technicalStack.map((group) => group.category)];
  const visibleStack =
    activeCategory === 'All'
      ? technicalStack
      : technicalStack.filter((group) => group.category === activeCategory);

  return (
    <div className="about-page">
      <section className="section" ref={ref}>
        <div className="container">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
          >
            {/* Header */}
            <motion.div
              variants={itemVariants}
              className="section-header text-center mb-16"
            >
              <span className="section-eyebrow">About</span>
              <h1 className="text-title mb-4">The short version</h1>
              <p className="text-subtitle">
                Intelligence Systems Engineering graduate building AI and automation
                systems that hold up outside a demo.
              </p>
            </motion.div>

            {/* Background */}
            <motion.div variants={itemVariants} className="card background-card mb-16">
              <h2 className="section-subtitle mb-6">Background</h2>
              <p className="text-body mb-4">
                I work at the seam between machine learning and the unglamorous systems
                around it — the data collection, pipelines, and deployment work that
                decides whether a model is actually useful on a Tuesday afternoon. Most of
                my projects start the same way: someone has a process that runs on
                copy-paste and hope, and wants it to run itself.
              </p>
              <p className="text-body mb-4">
                That has meant a lot of Python. Scraping sources that have no usable API,
                cleaning the output until it's trustworthy, and only then building on top of
                it. On the modelling side, my final year project put three scikit-learn
                approaches head to head on real Malaysian crop data, which taught me more
                about honest evaluation than any tutorial did.
              </p>
              <p className="text-body mb-6">
                Alongside that I build the full stack — Laravel and Node.js backends,
                React front ends, and the dashboards that make results legible to people
                who aren't data scientists. I'm deliberately moving further into cloud and
                DevOps, because a project that can't be deployed is a project that stops
                working the moment I close my laptop.
              </p>

              <div className="languages-inline">
                <h3 className="languages-inline-title">
                  <Globe2 size={18} className="inline-icon" />
                  Languages
                </h3>
                <div className="language-list">
                  {languages.map((lang) => (
                    <div key={lang.name} className="language-item">
                      <span className="language-name">{lang.name}</span>
                      <span className="language-level">{lang.level}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Experience */}
            <motion.div variants={itemVariants} className="mb-16">
              <div className="section-header mb-10">
                <h2 className="section-subtitle mb-2">Experience</h2>
                <p className="text-body-muted">Roles and projects that shaped how I build</p>
              </div>

              <div className="timeline">
                <div className="timeline-line" />
                {experience.map((exp, index) => (
                  <div
                    key={exp.title}
                    className={`timeline-item ${index % 2 === 0 ? 'timeline-left' : 'timeline-right'}`}
                  >
                    <div className="timeline-card">
                      <div className="timeline-card-header">
                        <div className="timeline-icon">{icon(exp.icon, 20)}</div>
                        <div>
                          <h4 className="timeline-title">{exp.title}</h4>
                          <div className="timeline-meta">
                            <span>
                              <MapPin size={14} /> {exp.location}
                            </span>
                            <span>
                              <Calendar size={14} /> {exp.date}
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="timeline-tags">
                        {exp.tags.map((tag) => (
                          <span key={tag} className="timeline-tag">
                            {tag}
                          </span>
                        ))}
                      </div>

                      <p className="timeline-description">{exp.description}</p>

                      <div className="timeline-achievements">
                        <span className="timeline-achievements-label">Key achievements</span>
                        <ul>
                          {exp.achievements.map((achievement) => (
                            <li key={achievement}>
                              <CheckCircle2 size={14} />
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div className="timeline-node" />
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Education */}
            <motion.div variants={itemVariants} className="mb-16">
              <div className="section-header mb-10">
                <h2 className="section-subtitle mb-2">Education</h2>
                <p className="text-body-muted">
                  Fields marked "needs your detail" are waiting on you — see
                  <code> src/data/profile.js</code>
                </p>
              </div>
              <div className="education-grid">
                {education.map((edu) => (
                  <div key={edu.degree} className="card education-card">
                    <div className="education-icon">
                      <GraduationCap size={20} />
                    </div>
                    <div className="education-level">{edu.level}</div>
                    <div className="education-row">
                      <Detail label="Degree" value={edu.degree} />
                      <Detail label="Institution" value={edu.university} />
                    </div>
                    <div className="education-row">
                      <Detail label="Timeline" value={edu.timeline} />
                      <Detail label="CGPA" value={edu.cgpa} />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Certifications */}
            <motion.div variants={itemVariants} className="mb-16">
              <div className="card certifications-panel">
                <div className="section-header text-center mb-10">
                  <h2 className="section-subtitle">Certifications</h2>
                  <p className="text-body-muted">
                    Formal training across AI, ML, and network automation
                  </p>
                </div>
                <div className="cert-grid">
                  {certifications.map((cert) => (
                    <div key={cert.title} className="cert-card-new">
                      <div className="cert-icon">{icon(cert.icon, 20)}</div>
                      <h4 className="cert-title">{cert.title}</h4>
                      <p className="cert-meta">
                        {cert.issuer} • {cert.year}
                      </p>
                      {cert.link ? (
                        <a
                          className="cert-view-btn"
                          href={cert.link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          View <ExternalLink size={14} />
                        </a>
                      ) : (
                        <span className="cert-view-btn cert-view-btn-disabled">
                          Credential held
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Technical stack */}
            <motion.div variants={itemVariants}>
              <div className="section-header text-center mb-8">
                <h2 className="section-subtitle">Technical Stack</h2>
                <p className="text-body-muted">
                  Grouped by what I actually use them for
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
                  </button>
                ))}
              </div>

              <div className="stack-grid">
                {visibleStack.flatMap((group) =>
                  group.items.map((item) => (
                    <div key={item.name} className="stack-card">
                      <div className="stack-card-header">
                        <span className="stack-card-name">{item.name}</span>
                        <span className="stack-card-percent">{item.proficiency}%</span>
                      </div>
                      <div className="stack-bar-track">
                        <div
                          className="stack-bar-fill"
                          style={{ width: `${item.proficiency}%` }}
                        />
                      </div>
                      <p className="stack-card-description">{item.description}</p>
                    </div>
                  ))
                )}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;