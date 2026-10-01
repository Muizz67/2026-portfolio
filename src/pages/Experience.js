import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { MapPin, Calendar, CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { experience, stats } from '../data/profile';
import { icon } from '../data/icon';
import './Experience.css';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { delayChildren: 0.15, staggerChildren: 0.09 }
  }
};

const itemVariants = {
  hidden: { y: 24, opacity: 0 },
  visible: { y: 0, opacity: 1 }
};

// Roles are listed newest first. This is a single reading column with a rail
// on the left rather than an alternating two-column timeline: alternating
// layouts force the eye back and forth across the viewport and collapse badly
// on narrow screens.
const Experience = () => {
  const [ref, inView] = useInView({ threshold: 0.05, triggerOnce: true });

  return (
    <div className="experience-page">
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
              <span className="section-eyebrow">Experience</span>
              <h1 className="text-title mb-4">Where I've worked</h1>
              <p className="text-subtitle">
                Three roles across data annotation, AI engineering, and full-stack
                development — plus a hackathon placement.
              </p>
            </motion.div>

            {/* Headline numbers, drawn from the same data as the roles */}
            <motion.div variants={itemVariants} className="exp-summary">
              {stats.map((stat) => (
                <div key={stat.label} className="exp-summary-item">
                  <span className="exp-summary-value">{stat.value}</span>
                  <span className="exp-summary-label">{stat.label}</span>
                </div>
              ))}
            </motion.div>

            {/* Single-column rail */}
            <div className="rail">
              {experience.map((exp) => (
                <motion.article key={exp.title} variants={itemVariants} className="role">
                  <div className="role-marker" aria-hidden="true">
                    <span className="role-dot">{icon(exp.icon, 18)}</span>
                  </div>

                  <div className="role-body">
                    <div className="role-head">
                      <div className="role-heading">
                        <h2 className="role-title">{exp.title}</h2>
                        <p className="role-company">{exp.company}</p>
                      </div>
                      <span className="role-date">{exp.date}</span>
                    </div>

                    <div className="role-meta">
                      <span>
                        <MapPin size={13} />
                        {exp.location}
                      </span>
                      <span>
                        <Calendar size={13} />
                        {exp.date}
                      </span>
                    </div>

                    <p className="role-description">{exp.description}</p>

                    <div className="role-tags">
                      {exp.tags.map((tag) => (
                        <span key={tag} className="role-tag">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <ul className="role-achievements">
                      {exp.achievements.map((achievement) => (
                        <li key={achievement}>
                          <CheckCircle2 size={15} />
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.article>
              ))}
            </div>

            <motion.div variants={itemVariants} className="exp-footer">
              <Link className="btn-secondary" to="/about">
                <span>Background, education &amp; stack</span>
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

export default Experience;