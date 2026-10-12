import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
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
                A visual timeline of my degree years, internships, and the work I've
                touched along the way. Select a period below to filter.
              </p>
            </motion.div>

            <motion.div variants={itemVariants}>
              <CareerPhotos photos={careerPhotos} />
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
