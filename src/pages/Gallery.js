import React from 'react';
import { Link } from 'react-router-dom';
import CareerPhotos from '../components/CareerPhotos';
import '../pages/Gallery.css';

/**
 * Gallery page — a full-page, Google Images–style photo gallery.
 *
 * The component owns the filter bar, the image grid, the hover captions, and
 * the lightbox. This page simply mounts it and lets the gallery fill the
 * viewport.
 */
const Gallery = () => {
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

export default Gallery;
