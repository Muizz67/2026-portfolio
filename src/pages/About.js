import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  Globe2,
  MapPin,
  Calendar,
  CheckCircle2,
  GraduationCap,
  Building2
} from 'lucide-react';
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
              <h1 className="text-title mb-4">The short version</h1>
              <p className="text-subtitle">
                Intelligence Systems Engineering graduate working across AI pipelines,
                data annotation, and full-stack development.
              </p>
            </motion.div>

            {/* Background */}
            <motion.div variants={itemVariants} className="card background-card mb-16">
              <h2 className="section-subtitle mb-6">Background</h2>
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
                <p className="text-body-muted">
                  Roles and projects that shaped how I build
                </p>
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
                          <div className="timeline-company">
                            <Building2 size={13} />
                            <span>{exp.company}</span>
                          </div>
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
                        <span className="timeline-achievements-label">
                          Key achievements
                        </span>
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
                  Universiti Teknologi MARA (UiTM)
                </p>
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
            <motion.div variants={itemVariants} className="mb-16">
              <div className="section-header text-center mb-10">
                <h2 className="section-subtitle">
                  Certifications &amp; Training
                </h2>
                <p className="text-body-muted">
                  {certifications.length} credentials across AI platforms, design
                  thinking, and 5G
                </p>
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
            <motion.div variants={itemVariants}>
              <div className="section-header text-center mb-8">
                <span className="section-eyebrow">Technical stack</span>
                <h2 className="section-subtitle">Tools I build with</h2>
                <p className="text-body-muted">
                  {technicalStack.reduce((n, g) => n + g.items.length, 0)} technologies,
                  grouped by what I actually use them for
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