import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award, BookOpen, Code, Briefcase } from 'lucide-react';
import './About.css';

const About = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  const certifications = [
    {
      title: "IBM AI Engineering Professional Certificate",
      issuer: "IBM",
      year: "2024",
      icon: <Award size={20} />
    },
    {
      title: "Ericsson Network Automation Certification",
      issuer: "Ericsson",
      year: "2024",
      icon: <Award size={20} />
    },
    {
      title: "Machine Learning Specialization",
      issuer: "Simplilearn",
      year: "2023",
      icon: <Award size={20} />
    }
  ];

  const experience = [
    {
      title: "Intelligence System Engineering Graduate",
      description: "Fresh graduate with strong foundation in AI, machine learning, and system engineering principles.",
      year: "2024",
      icon: <BookOpen size={20} />
    },
    {
      title: "Hackathon Participant",
      description: "Developed Adaptive Task Manager - an AI-powered productivity tool with intelligent task prioritization.",
      year: "2024",
      icon: <Code size={20} />
    },
    {
      title: "Freelance Developer",
      description: "Built custom web scraping solutions and automation tools for various clients and internal processes.",
      year: "2023-2024",
      icon: <Briefcase size={20} />
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
    <div className="about-page">
      <section className="section" ref={ref}>
        <div className="container">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <motion.div variants={itemVariants} className="section-header text-center mb-16">
              <h1 className="text-title mb-4">About Me</h1>
              <p className="text-subtitle">
                Fresh graduate passionate about AI engineering and building innovative solutions
              </p>
            </motion.div>

            <div className="about-grid">
              <motion.div variants={itemVariants} className="about-content">
                <div className="about-text card">
                  <h2 className="section-subtitle mb-6">Background & Vision</h2>
                  <p className="text-body mb-4">
                    As a fresh graduate in Intelligence System Engineering, I'm passionate about creating 
                    intelligent solutions using Python, machine learning, and modern web technologies. 
                    My journey combines academic excellence with hands-on experience in real-world projects.
                  </p>
                  <p className="text-body mb-4">
                    With expertise spanning both backend scripting and full-stack development using Laravel, 
                    Vue.js, and React, I bridge the gap between AI research and practical applications. 
                    Currently expanding my knowledge in cloud technologies and DevOps practices.
                  </p>
                  <p className="text-body">
                    My goal is to become a leading AI Engineer in Malaysia's tech industry, contributing 
                    to innovative solutions that make a real impact on businesses and society.
                  </p>
                </div>
              </motion.div>

              <motion.div variants={itemVariants} className="about-sidebar">
                <div className="certifications card mb-8">
                  <h3 className="section-subtitle mb-6">Certifications</h3>
                  <div className="cert-list">
                    {certifications.map((cert, index) => (
                      <div key={index} className="cert-item">
                        <div className="cert-icon">{cert.icon}</div>
                        <div className="cert-content">
                          <h4 className="cert-title">{cert.title}</h4>
                          <p className="cert-meta">{cert.issuer} • {cert.year}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="experience card">
                  <h3 className="section-subtitle mb-6">Experience</h3>
                  <div className="exp-list">
                    {experience.map((exp, index) => (
                      <div key={index} className="exp-item">
                        <div className="exp-icon">{exp.icon}</div>
                        <div className="exp-content">
                          <div className="exp-header">
                            <h4 className="exp-title">{exp.title}</h4>
                            <span className="exp-year">{exp.year}</span>
                          </div>
                          <p className="exp-description">{exp.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;