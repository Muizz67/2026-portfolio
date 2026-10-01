import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FileText, ChevronDown, ArrowRight, Eye } from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import { profile, focusAreas, stats } from '../data/profile';
import { featuredProjects } from '../data/projects';
import './Home.css';

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

const Home = () => {
  const [heroRef, heroInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [focusRef, focusInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [workRef, workInView] = useInView({ threshold: 0.05, triggerOnce: true });
  const [statsRef, statsInView] = useInView({ threshold: 0.3, triggerOnce: true });

  return (
    <div className="home">
      {/* Hero */}
      <section className="hero-section" ref={heroRef}>
        <div className="hero-background">
          <div className="hero-gradient" />
          <div className="floating-particles" />
        </div>

        <div className="container">
          <motion.div
            className="hero-content"
            variants={containerVariants}
            initial="hidden"
            animate={heroInView ? 'visible' : 'hidden'}
          >
            <motion.div variants={itemVariants} className="hero-badge">
              <span className="badge-dot" />
              <span className="badge-text">{profile.role}</span>
            </motion.div>

            <motion.h1 variants={itemVariants} className="hero-title">
              <span className="title-line">Building Intelligent</span>
              <span className="title-line gradient-text">AI Solutions</span>
            </motion.h1>

            <motion.p variants={itemVariants} className="hero-subtitle">
              {profile.tagline}
            </motion.p>

            <motion.div variants={itemVariants} className="hero-actions">
              <Link className="btn-primary" to="/resume">
                <FileText size={20} />
                <span>View Resume</span>
              </Link>
              <Link className="btn-secondary" to="/projects">
                <span>View Projects</span>
                <ArrowRight size={18} />
              </Link>
            </motion.div>

            <motion.div variants={itemVariants} className="hero-social">
              <a
                className="social-circle"
                href={profile.links.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile"
                title="GitHub"
              >
                <svg className="social-logo" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fill="currentColor"
                    d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577l-.015-2.03c-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.084-.73.084-.73 1.205.084 1.84 1.237 1.84 1.237 1.07 1.835 2.809 1.305 3.495.998.108-.776.418-1.305.762-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.292-1.552 3.296-1.23 3.296-1.23.647 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.804 5.625-5.475 5.92.43.372.823 1.102.823 2.222l-.012 3.293c0 .322.216.694.825.576C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
                  />
                </svg>
              </a>
              <a
                className="social-circle"
                href={profile.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
                title="LinkedIn"
              >
                <svg className="social-logo" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fill="currentColor"
                    d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
                  />
                </svg>
              </a>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          className="scroll-indicator"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <ChevronDown size={24} />
        </motion.div>
      </section>

      {/* What I do — replaces the duplicate skill bars */}
      <section className="focus-section section" ref={focusRef}>
        <div className="container">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={focusInView ? 'visible' : 'hidden'}
          >
            <motion.div
              variants={itemVariants}
              className="section-header text-center mb-16"
            >
              <span className="section-eyebrow">What I do</span>
              <h2 className="text-title mb-4">Four things I build with</h2>
              <p className="text-subtitle">
                From trained models to the pipelines and interfaces that make them useful.
              </p>
            </motion.div>

            <div className="focus-grid">
              {focusAreas.map((area) => (
                <motion.div
                  key={area.title}
                  variants={itemVariants}
                  className="focus-card card"
                  whileHover={{ y: -6 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <h3 className="focus-title">{area.title}</h3>
                  <p className="focus-description">{area.description}</p>
                  <div className="focus-items">
                    {area.items.map((item) => (
                      <span key={item} className="focus-item">
                        {item}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div variants={itemVariants} className="focus-cta">
              <Link className="focus-cta-link" to="/about">
                See the full technical stack and background
                <ArrowRight size={16} />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Featured work */}
      <section className="work-section section" ref={workRef}>
        <div className="container">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={workInView ? 'visible' : 'hidden'}
          >
            <motion.div
              variants={itemVariants}
              className="section-header text-center mb-16"
            >
              <span className="section-eyebrow">Selected work</span>
              <h2 className="text-title mb-4">Projects I'm proud of</h2>
              <p className="text-subtitle">
                A few things I've built end to end — the reasoning behind each is in the
                case study.
              </p>
            </motion.div>

            <div className="work-grid">
              {featuredProjects.map((project) => (
                <motion.article
                  key={project.id}
                  variants={itemVariants}
                  className="work-card card"
                  whileHover={{ y: -6 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <Link to="/projects" className="work-card-link">
                    <div className="work-image">
                      <img src={project.image} alt="" loading="lazy" />
                    </div>
                    <div className="work-body">
                      <span className="work-category">{project.category}</span>
                      <h3 className="work-title">{project.title}</h3>
                      <p className="work-description">{project.shortDescription}</p>
                      <span className="work-cta">
                        <Eye size={15} />
                        Read the case study
                      </span>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </div>

            <motion.div variants={itemVariants} className="work-cta-row">
              <Link className="btn-secondary" to="/projects">
                <span>See all projects</span>
                <ArrowRight size={18} />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats strip */}
      <section className="stats-section section-sm" ref={statsRef}>
        <div className="container">
          <motion.div
            className="stats-row"
            variants={containerVariants}
            initial="hidden"
            animate={statsInView ? 'visible' : 'hidden'}
          >
            {stats.map((stat) => (
              <motion.div key={stat.label} variants={itemVariants} className="stat">
                <span className="stat-value">{stat.value}</span>
                <span className="stat-label">{stat.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="cta-section section">
        <div className="container">
          <motion.div
            className="cta-panel"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="cta-title">Got something that needs building?</h2>
            <p className="cta-subtitle">
              I'm open to AI engineering and automation work — and happy to talk through
              anything that fits.
            </p>
            <div className="cta-actions">
              <Link className="btn-primary" to="/contact">
                <span>Get in touch</span>
                <ArrowRight size={18} />
              </Link>
              <a
                className="btn-secondary"
                href={profile.links.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>GitHub</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;