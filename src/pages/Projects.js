import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Eye, X } from 'lucide-react';
import { GithubIcon } from '../components/BrandIcons';
import { techIcon } from '../data/techIcons';
import { projects } from '../data/projects';
import { icon } from '../data/icon';
import { makePageVariants } from '../components/PageVariants';
import './Projects.css';

// Project tech labels are display names, not the icon registry keys used by
// src/data/techIcons. Normalize to a registry key; the small override table
// below covers labels that don't map cleanly (e.g. 'Machine Learning' to
// 'sklearn', 'Node.js' to 'node', 'REST API' to 'rest').
const techKeyOverrides = {
  'LLMs': 'llm',
  'Machine Learning': 'sklearn',
  'Scikit-learn': 'sklearn',
  'Node.js': 'node',
  'Cloudflare R2': 'cloudflare',
  'IBM Watson': 'ibmwatson',
  'Julius AI': 'julius',
  'Dashboard': 'dashboard',
  'Power BI': 'powerbi',
  'Google Cloud Platform': 'gcp',
  'REST API': 'rest',
  'BeautifulSoup': 'selenium'
};

function techKey(label) {
  return techKeyOverrides[label] ?? label.toLowerCase().replace(/\s+/g, '');
}

const { containerVariants, itemVariants } = makePageVariants(0.2, 0.1, 30);

const Projects = () => {
  const [ref, inView] = useInView({ threshold: 0.05, triggerOnce: true });
  const [selectedProject, setSelectedProject] = useState(null);

  // Lock body scroll and support Escape-to-close while the modal is open
  useEffect(() => {
    if (!selectedProject) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setSelectedProject(null);
    };

    document.addEventListener('keydown', handleKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [selectedProject]);

  return (
    <div className="projects-page">
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
              <span className="section-eyebrow">Projects</span>
              <h1 className="text-title mb-4">Case studies</h1>
              <p className="text-subtitle">
                {projects.length} projects across AI, ML, automation, and full-stack work.
                Open any one for the reasoning behind it.
              </p>
            </motion.div>

            <div className="projects-grid">
              {projects.map((project) => (
                <motion.div
                  key={project.id}
                  variants={itemVariants}
                  className="project-card card"
                  whileHover={{ y: -8 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <div className="project-header">
                    <div className="project-icon">{icon(project.icon, 24)}</div>
                    <div className="project-meta">
                      <span className="project-category">{project.category}</span>
                      <span
                        className={`project-status ${project.status
                          .toLowerCase()
                          .replace(' ', '-')}`}
                      >
                        {project.status}
                      </span>
                    </div>
                  </div>

                  <div className="project-image">
                    <img
                      src={project.image}
                      alt={`${project.title} screenshot`}
                      loading="lazy"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                        e.currentTarget.parentElement.classList.add('no-image');
                      }}
                    />
                  </div>

                  <div className="project-content">
                    <h3 className="project-title">{project.title}</h3>
                    <p className="project-description">{project.shortDescription}</p>

                    <div className="project-tech">
                      {project.tech.map((tech) => (
                        <span key={tech} className="tech-tag">
                          {techIcon(techKey(tech), 14)}
                          <span>{tech}</span>
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="project-actions">
                    <button
                      className="btn-project view-details"
                      onClick={() => setSelectedProject(project)}
                    >
                      <Eye size={16} />
                      <span>View Details</span>
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="project-modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={(e) => {
              if (e.target === e.currentTarget) setSelectedProject(null);
            }}
          >
            <motion.div
              className="project-modal"
              initial={{ opacity: 0, y: 20, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.98 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
              role="dialog"
              aria-modal="true"
              aria-label={selectedProject.title}
            >
              <div className="modal-tags-row">
                <div className="modal-tags">
                  {selectedProject.tags.map((tag) => (
                    <span key={tag} className="modal-tag">
                      {tag}
                    </span>
                  ))}
                </div>
                <button
                  className="modal-close"
                  onClick={() => setSelectedProject(null)}
                  aria-label="Close project details"
                >
                  <X size={18} />
                </button>
              </div>

              <h2 className="modal-title">{selectedProject.title}</h2>
              <p className="modal-description">{selectedProject.description}</p>

              <div className="modal-info-box">
                <h4>My role</h4>
                <p>{selectedProject.role}</p>
              </div>

              <div className="modal-info-box highlight">
                <h4>Impact</h4>
                <p>{selectedProject.impact}</p>
              </div>

              <div className="modal-info-box">
                <h4>Architecture &amp; engineering context</h4>
                <p>{selectedProject.context}</p>
              </div>

              <div className="modal-tech-section">
                <h4>Tech stack</h4>
                <div className="modal-tech-list">
                  {selectedProject.tech.map((tech) => (
                    <span key={tech} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {selectedProject.github ? (
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="modal-source-btn"
                >
                  <GithubIcon size={16} />
                  <span>View source code</span>
                </a>
              ) : (
                <button
                  className="modal-source-btn disabled"
                  disabled
                  title="Source code not public"
                >
                  <GithubIcon size={16} />
                  <span>Source code private</span>
                </button>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Projects;