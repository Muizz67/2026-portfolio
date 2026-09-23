import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Code, Database, Bot, Search, Smartphone, Workflow } from 'lucide-react';
import './Projects.css';

const Projects = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  const projects = [
    {
      id: 1,
      title: "n8n Internal Automation",
      description: "Custom workflow automation system using n8n for internal processes. Streamlines repetitive tasks, data synchronization, and notification systems across multiple platforms.",
      tech: ["n8n", "Docker", "CloudFlare R2", "Google Cloud Platform"],
      icon: <Workflow size={24} />,
      category: "Workflow Automation",
      status: "Completed",
      image: "/assets/projects/n8n-automation.png",
      github: null,
      demo: null
    },
    {
      id: 2,
      title: "Media Creation - Data Collection and Research",
      description: "Comprehensive data collection and research suite for media creation projects. Automates the process of gathering, organizing, and analyzing data from various sources.",
      tech: ["Obsidian", "Python", "BeautifulSoup", "Selenium", "Prompt Engineering", "Web Scraping"],
      icon: <Search size={24} />,
      category: "Data Collection",
      status: "Completed",
      image: "/assets/projects/media-creation.png",
      github: null,
      demo: null
    },
    {
      id: 3,
      title: "Extracting and Modelling Geographic Information of Agriculture",
      description: "ML-powered dashboard for predicting crop yields in Malaysia using historical data, weather patterns, and soil conditions. Built with Python, scikit-learn, and interactive visualizations.",
      tech: ["Python", "Machine Learning", "Pandas", "Scikit-learn", "Dashboard", "Power BI"],
      icon: <Database size={24} />,
      category: "Machine Learning",
      status: "Completed",
      image: "/assets/projects/fyp.png",
      github: null,
      demo: null
    },
    {
      id: 4,
      title: "Adaptive Task Manager",
      description: "Intelligent task management system developed for hackathon. Features AI-powered task prioritization and adaptive scheduling based on user behavior patterns.",
      tech: ["IBM Watson", "HTML", "CSS", "JavaScript"],
      icon: <Bot size={24} />,
      category: "Full-Stack AI",
      status: "Completed",
      image: "/assets/projects/task-manager.png",
      github: null,
      demo: null
    },
    {
      id: 5,
      title: "Web Scraping Suite",
      description: "Comprehensive web scraping solution for multiple websites with automated data extraction, cleaning, and storage. Features anti-detection mechanisms and scheduled scraping.",
      tech: ["Python", "Beautiful Soup", "Selenium", "Pandas", "SQL"],
      icon: <Search size={24} />,
      category: "Data Engineering",
      status: "Completed",
      image: "/assets/projects/web-scraping.png",
      github: "https://github.com/yourname/web-scraping-suite",
      demo: null
    },
    {
      id: 6,
      title: "Phone Finder Application",
      description: "Smart phone recommendation system that analyzes user preferences and budget to suggest optimal smartphone choices. Features comparison tools and price tracking.",
      tech: ["React", "API Integration", "Data Analysis"],
      icon: <Smartphone size={24} />,
      category: "Web Application",
      status: "Completed",
      image: "/assets/projects/phone-finder.png",
      github: null,
      demo: "https://phone-finder-demo.vercel.app"
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
                    {project.github ? (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-project"
                      >
                        <Code size={16} />
                        <span>View Code</span>
                      </a>
                    ) : (
                      <button className="btn-project disabled" disabled title="Source code not public">
                        <Code size={16} />
                        <span>Code Private</span>
                      </button>
                    )}

                    {project.demo ? (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-project"
                      >
                        <ExternalLink size={16} />
                        <span>Live Demo</span>
                      </a>
                    ) : (
                      <button className="btn-project disabled" disabled title="No live demo available">
                        <ExternalLink size={16} />
                        <span>Demo Unavailable</span>
                      </button>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Projects;