import React from 'react';
import { Link } from 'react-router-dom';
import CareerPhotos from '../components/CareerPhotos';
import '../pages/Career.css';

/**
 * Gallery page — a full-page, Google Images–style photo gallery.
 *
 * The component owns the filter bar, the image grid, the hover captions, and
 * the lightbox. This page simply mounts it and lets the gallery fill the
 * viewport.
 */
const Career = () => {
  return (
    <div className="gallery-page">
      <section className="gallery-section">
        <div className="container">
          <CareerPhotos title="Gallery" />
        </div>
      </section>
    </div>
  );
};

export default Career;
