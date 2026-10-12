import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowRight } from 'lucide-react';
import CareerPhotos from '../components/CareerPhotos';
import { careerPhotos } from '../data/careerPhotos';
import { makePageVariants } from '../components/PageVariants';
import './Gallery.css';

// Same page-reveal transition used by the About / Experience / Projects pages.
const { containerVariants, itemVariants } = makePageVariants(0.15, 0.08, 22);

const Gallery = () => {
  const [ref, inView] = useInView({ threshold: 0.03, triggerOnce: true });

  return (
    <div className="gallery-page">
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
              <span className="section-eyebrow">Gallery</span>
              <h1 className="text-title mb-4">Photos from my career</h1>
              <p className="text-subtitle">
                A visual timeline — from early studies at UiTM Shah Alam through AI
                engineering internships and graduation.
              </p>
            </motion.div>

            <motion.div variants={itemVariants}>
              <CareerPhotos photos={careerPhotos} />
            </motion.div>
<motion.div variants={itemVariants} className="flow-footer">
              <Link className="btn-secondary" to="/contact">
                <span>Get in touch</span>
                <ArrowRight size={18} />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
