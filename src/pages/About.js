import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Globe2, GraduationCap, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import {
  technicalStack,
  languages,
  experience,
  education,
  certifications
} from '../data/profile';
import { icon } from '../data/icon';
import { techIcon } from '../data/techIcons';
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

const About = () => {
  const [ref, inView] = useInView({ threshold: 0.03, triggerOnce: true });
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
              <h1 className="text-title mb-4">Background &amp; stack</h1>
              <p className="text-subtitle">
                Intelligence Systems Engineering graduate working across AI pipelines,
                data annotation, and full-stack development.
              </p>
            </motion.div>

            {/* Background */}
            <motion.div variants={itemVariants} className="about-section">
              <div className="about-section-head">
                <h2>Background</h2>
                <span>What I work on and how I got here</span>
              </div>

              <div className="about-prose">
              <p className="text-body mb-4">
                I work across the full arc of an AI system: getting the data in,
                labelling it correctly, training something on it, and building the
                automation around it. My data annotation role at TDCX made me the
                least glamorous part of that arc fluent — knowing that a dataset is
                only as good as the labels in it is a lesson you only learn by
                producing thousands of them yourself.
              </p>
              <p className="text-body mb-4">
                At Aga Touch I applied that to the other end, designing n8n pipelines
                that cut manual data handling by around 70%, running prompt engineering
                across five different models, and annotating video datasets in Label
                Studio for YOLOv8 training. Before that, at Bluevy, I maintained live
                Laravel and Vue.js applications and wrote the unit tests that kept them
                from regressing — which is where I learned that shipping without tests
                just moves the cost, it doesn't remove it.
              </p>
              <p className="text-body mb-6">
                My final year project compared Random Forest, SVM and neural network
                models on Malaysian crop data behind an interactive Power BI dashboard.
                What I took from it was less about crops and more about the value of
                putting competing approaches side by side instead of trusting the first
                one that ran.
              </p>

              </div>

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

            {/* Experience moved to its own page — a full view of it is at /experience. */}
            <motion.div variants={itemVariants} className="about-bridge">
              <Link className="about-bridge-card" to="/experience">
                <div className="about-bridge-text">
                  <h2 className="section-subtitle">Experience</h2>
                  <p className="text-body-muted">
                    {experience.length} roles — data annotation, AI engineering, and
                    full-stack work.
                  </p>
                </div>
                <span className="about-bridge-arrow">
                  <ArrowRight size={18} />
                </span>
              </Link>
            </motion.div>

            {/* Education */}
            <motion.div variants={itemVariants} className="about-section">
              <div className="about-section-head">
                <h2>Education</h2>
                <span>Universiti Teknologi MARA (UiTM)</span>
              </div>
              <div className="education-grid">
                {education.map((edu) => (
                  <div key={edu.degree} className="card education-card">
                    <div className="education-icon">
                      <GraduationCap size={20} />
                    </div>
                    <div className="education-level">{edu.level}</div>
                    <h4 className="education-degree">{edu.degree}</h4>

                    <div className="education-row">
                      <div>
                        <span className="education-label">Institution</span>
                        <p className="education-value">{edu.university}</p>
                      </div>
                      <div>
                        <span className="education-label">Timeline</span>
                        <p className="education-value">{edu.timeline}</p>
                      </div>
                    </div>

                    <div className="education-gpa">
                      <span className="education-label">CGPA</span>
                      <span className="education-gpa-value">{edu.cgpa}</span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Certifications */}
            <motion.div variants={itemVariants} className="about-section">
              <div className="about-section-head">
                <h2>Certifications</h2>
                <span>
                  {certifications.length} credentials across AI platforms, design
                  thinking, and 5G
                </span>
              </div>
              <div className="cert-grid">
                {certifications.map((cert) => (
                  <div key={cert.title} className="cert-card-new">
                    <div className="cert-icon">{icon(cert.icon, 20)}</div>
                    <h4 className="cert-title">{cert.title}</h4>
                    <p className="cert-meta">{cert.issuer}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Technical stack — brand logos */}
            <motion.div variants={itemVariants} className="about-section">
              <div className="about-section-head">
                <h2>Technical stack</h2>
                <span>
                  {technicalStack.reduce((n, g) => n + g.items.length, 0)} technologies,
                  grouped by what I use them for
                </span>
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
                        ? technicalStack.reduce((n, g) => n + g.items.length, 0)
                        : technicalStack.find((g) => g.category === cat).items.length}
                    </span>
                  </button>
                ))}
              </div>

              <div className="stack-grid">
                {visibleStack.flatMap((group) =>
                  group.items.map((item) => (
                    <div key={item.name} className="stack-card">
                      <div className="stack-card-top">
                        <span className="stack-logo">{techIcon(item.icon, 26)}</span>
                        <div className="stack-card-heading">
                          <span className="stack-card-name">{item.name}</span>
                          <span className="stack-card-group">{group.category}</span>
                        </div>
                        <span className="stack-card-percent">{item.level}%</span>
                      </div>

                      <div className="stack-bar-track">
                        <div
                          className="stack-bar-fill"
                          style={{ width: `${item.level}%` }}
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