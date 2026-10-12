import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Grid, LayoutGrid, Image } from 'lucide-react';
import CareerPhotos from '../components/CareerPhotos';
import { careerPhotos, careerPhotoCount } from '../data/careerPhotos';
import { makePageVariants } from '../components/PageVariants';
import '../pages/Career.css';

const { containerVariants, itemVariants } = makePageVariants(0.15, 0.08, 22);

const Career = () => {
  const [gridOnly, setGridOnly] = useState(false);

  return (
    <div className="career-page">
      <section className="section career-section">
        <div className="container">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="career-hero"
          >
            <Link className="career-back" to="/">
              <ArrowLeft size={15} />
              <span>Back to home</span>
            </Link>

            <motion.div variants={itemVariants} className="career-hero-title">
              <Image size={22} />
              <span>Career photos</span>
            </motion.div>

            <p className="career-hero-sub">
              A visual timeline of where I've been — my degree years, internships,
              and the work I've touched along the way. Click any photo to view
              it larger.
            </p>

            <div className="career-hero-meta">
              <span className="career-hero-count">{careerPhotoCount} photos</span>
              <button
                type="button"
                className={`career-grid-toggle ${gridOnly ? 'on' : ''}`}
                onClick={() => setGridOnly((v) => !v)}
                aria-pressed={gridOnly}
              >
                {gridOnly ? (
                  <>
                    <LayoutGrid size={15} />
                    <span>Back to lightbox</span>
                  </>
                ) : (
                  <>
                    <Grid size={15} />
                    <span>Grid view only</span>
                  </>
                )}
              </button>
            </div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="career-photo-wrap"
          >
            <CareerPhotos
              photos={careerPhotos}
              lightbox={!gridOnly}
              gridOnly={gridOnly}
              title="My career, through pictures"
            />
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Career;
