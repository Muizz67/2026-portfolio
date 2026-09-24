import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Eye, X, Database, Bot, Search, Smartphone, Workflow } from 'lucide-react';
import './Projects.css';

const Projects = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "ManaMurah — Automated Daily Content Publishing",
      description: "Built an n8n-powered pipeline that fetches data from ManaMurah, transforms it into Markdown using Python, and automatically updates the content in Cloudflare R2 for daily price tracking.",
      tags: ["Automation", "Web Scraping", "Data Processing"],
      tech: ["Python", "Selenium", "n8n", "Docker", "CloudFlare R2", "Google Cloud Platform"],
      icon: <Workflow size={24} />,
      category: "Workflow Automation",
      status: "Completed",
      image: "/assets/projects/n8n-automation.png",
      role: "Developed the Python data-processing script, developed the n8n automation workflow.",
      impact: "Automated repetitive daily content updates and reduced manual data handling.",
      context: "Designed a scheduled ETL pipeline to fetch, transform, and replace content in cloud storage.",
      github: null
    },
    {
      id: 2,
      title: "Media Creation from Research & Sentiment Analysis",
      description: "Transformed research data and sentiment analysis into media content.",
      tags: ["AI Research", "Data Collection", "Social Media Analytics"],
      tech: ["Obsidian", "Python", "BeautifulSoup", "Selenium", "LLMs", "Julius AI"],
      icon: <Search size={24} />,
      category: "Data Collection",
      status: "Completed",
      image: "/assets/projects/media-creation.png",
      role: "Collected, analyzed, and validated online information. Created sentiment analysis reports sourced from Twitter, Reddit and Lowyat Forum.",
      impact: "Provided reliable research insights for downstream AI media creation.",
      context: "Combined web scraping, LLM-assisted research, search, and source validation into a structured research workflow.",
      github: null
    },
    {
      id: 3,
      title: "Extracting and Modelling Geographic Information of Agriculture",
      description: "ML-powered dashboard for predicting crop yields in Malaysia using historical data, weather patterns, and soil conditions. Built with Python, scikit-learn, and interactive visualizations.",
      tags: ["Machine Learning", "Data Science", "Final Year Project"],
      tech: ["Python", "Machine Learning", "Pandas", "Scikit-learn", "Dashboard", "Power BI"],
      icon: <Database size={24} />,
      category: "Machine Learning",
      status: "Completed",
      image: "/assets/projects/fyp.png",
      role: "Data collection, model development, and dashboard implementation.",
      impact: "Helped forecast crop yields using weather and soil data to support planning decisions.",
      context: "Final Year Project pairing a trained scikit-learn Random Forest, Support Vector Machine and Artificial Neural Network model with an interactive dashboard.",
      github: null
    },
    {
      id: 4,
      title: "Adaptive Task Manager",
      description: "Intelligent task management system developed for IBM's BridgeHack-To-Industry. Features AI-powered task prioritization and adaptive scheduling based on user behavior patterns.",
      tags: ["Full-Stack", "Hackathon"],
      tech: ["IBM Watson", "HTML", "CSS", "Node.js"],
      icon: <Bot size={24} />,
      category: "Full-Stack AI",
      status: "Completed",
      image: "/assets/projects/task-manager.png",
      role: "Full-stack development across the HTML and CSS frontend and Node.js backend. Integrated IBM Watson Assistant for AI-driven task prioritization.",
      impact: "Adaptive scheduling that reprioritizes tasks based on how users actually work.",
      context: "Built under hackathon time constraints, with the IBM Watson Assistant as the orchestration layer.",
      github: null
    },
    {
      id: 5,
      title: "Phone Finder - Smart Phone Recommendation System",
      description: "Smart phone recommendation system that analyzes user preferences and budget to suggest optimal smartphone choices. Features comparison tools and price tracking.",
      tags: ["Web Application", "Intelligent System", "API Integration"],
      tech: ["JavaScript", "HTML", "CSS", "REST API", "JSON"],
      icon: <Smartphone size={24} />,
      category: "Web Application",
      status: "Completed",
      image: "/assets/projects/phone-finder.png",
      role: "Built the recommendation logic and API integration.",
      impact: "Simplified smartphone selection by matching user requirements with suitable devices.",
      context: "Combined a rule-based recommendation engine, API-driven data retrieval, and an interactive web interface.",
      github: "https://github.com/ihpwapp/phone_finder"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

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
            animate={inView ? "visible" : "hidden"}
          >
            <motion.div variants={itemVariants} className="section-header text-center mb-16">
              <h1 className="text-title mb-4">Featured Projects</h1>
              <p className="text-subtitle">
                A collection of AI, ML, and full-stack projects showcasing technical expertise and problem-solving skills
              </p>
            </motion.div>

            <div className="projects-grid">
              {projects.map((project) => (
                <motion.div
                  key={project.id}
                  variants={itemVariants}
                  className="project-card card"
                  whileHover={{ y: -8 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="project-header">
                    <div className="project-icon">
                      {project.icon}
                    </div>
                    <div className="project-meta">
                      <span className="project-category">{project.category}</span>
                      <span className={`project-status ${project.status.toLowerCase().replace(' ', '-')}`}>
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
                    <p className="project-description">{project.description}</p>

                    <div className="project-tech">
                      {project.tech.map((tech, techIndex) => (
                        <span key={techIndex} className="tech-tag">
                          {tech}
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
              transition={{ duration: 0.2, ease: "easeOut" }}
            >
              <div className="modal-tags-row">
                <div className="modal-tags">
                  {selectedProject.tags.map((tag) => (
                    <span key={tag} className="modal-tag">{tag}</span>
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
                <h4>My Role</h4>
                <p>{selectedProject.role}</p>
              </div>

              <div className="modal-info-box highlight">
                <h4>Impact</h4>
                <p>{selectedProject.impact}</p>
              </div>

              <div className="modal-info-box">
                <h4>Architecture &amp; Engineering Context</h4>
                <p>{selectedProject.context}</p>
              </div>

              <div className="modal-tech-section">
                <h4>Tech Stack</h4>
                <div className="modal-tech-list">
                  {selectedProject.tech.map((tech, i) => (
                    <span key={i} className="tech-tag">{tech}</span>
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
                  {/* <Github size={16} /> */}
                  <span>View Source Code</span>
                </a>
              ) : (
                <button className="modal-source-btn disabled" disabled title="Source code not public">
                  {/* <Github size={16} /> */}
                  <span>Source Code Private</span>
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