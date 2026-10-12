import React, { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { careerPhotos } from '../data/careerPhotos';

/**
 * CareerPhotos — a responsive photo gallery with a lightbox.
 *
 * Props:
 *   photos          — array of { id, date, caption, image } (defaults to the full
 *                     careerPhotos data).
 *   lightbox        — whether clicking a thumbnail opens the lightbox (default true).
 *   gridOnly        — when true, renders a plain grid with no lightbox.
 *   title           — optional section title rendered above the grid.
 *   emptyTitle      — label used when `photos` is empty (default "No photos yet").
 *
 * Layout: the grid is chosen by the consuming page's CSS. On the /career page
 * the full grid is wrapped in a card; on the /experience page the same
 * component is reused for a compact strip (see Experience.js).
 */
const CAREER_PHOTO_DIR = 'assets/photos';

export default function CareerPhotos({
  photos = careerPhotos,
  lightbox = true,
  gridOnly = false,
  title = 'Career photos',
  emptyTitle = 'No photos yet',
}) {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);
  const overlayRef = useRef(null);

  const openPhoto = (i) => {
    setIndex(i);
    setOpen(true);
  };

  const close = () => setOpen(false);

  const goTo = (i) => setIndex(i);

  const prev = () => goTo((index - 1 + photos.length) % photos.length);
  const next = () => goTo((index + 1) % photos.length);

  // Close on Escape, and on any arrow key while the lightbox is open.
  React.useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, index]);

  // Keep body scroll locked while the lightbox is open (same pattern as the
  // project modal in Projects.js).
  React.useEffect(() => {
    if (open) {
      const previousOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => { document.body.style.overflow = previousOverflow; };
    }
  }, [open]);

  if (photos.length === 0) {
    return (
      <section className="career-photo-section">
        <div className="career-photo-wrap">
          <h2 className="career-photo-title">{emptyTitle}</h2>
          <p className="career-photo-empty">Add photos to {`${CAREER_PHOTO_DIR}/`}.</p>
        </div>
      </section>
    );
  }

  if (gridOnly) {
    return (
      <section className="career-photo-section">
        <div className="career-photo-wrap">
          <h2 className="career-photo-title">{title}</h2>
          <div className="career-photo-grid">
            {photos.map((photo, i) => (
              <figure key={photo.id} className="career-photo-card">
                <img
                  src={photo.image}
                  alt={photo.caption}
                  loading="lazy"
                  className="career-photo-img"
                />
                <figcaption className="career-photo-caption">
                  {photo.date ? <span className="career-photo-date">{photo.date}</span> : null}
                  <span className="career-photo-caption-text">{photo.caption}</span>
                </figcaption>
                {photo.date && (
                  <span className="career-photo-date-label">{photo.date}</span>
                )}
              </figure>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="career-photo-section">
      <div className="career-photo-wrap">
        <h2 className="career-photo-title">{title}</h2>

        <div className="career-photo-grid">
          {photos.map((photo, i) => (
            <figure
              key={photo.id}
              className="career-photo-card"
              onClick={() => openPhoto(i)}
              role="button"
              tabIndex={0}
              aria-label={`Open photo ${i + 1} of ${photos.length}: ${photo.caption}`}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') openPhoto(i);
              }}
            >
              <img
                src={photo.image}
                alt={photo.caption}
                loading="lazy"
                className="career-photo-img"
              />
              <figcaption className="career-photo-caption">
                {photo.date ? <span className="career-photo-date">{photo.date}</span> : null}
                <span className="career-photo-caption-text">{photo.caption}</span>
              </figcaption>
              {photo.date && (
                <span className="career-photo-date-label">{photo.date}</span>
              )}
            </figure>
          ))}
        </div>
      </div>

      {/* Lightbox overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            ref={overlayRef}
            className="career-photo-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={close}
            aria-hidden="true"
          >
            <motion.div
              className="career-photo-lightbox"
              initial={{ opacity: 0, scale: 0.96, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 12 }}
              transition={{ duration: 0.2 }}
              role="dialog"
              aria-modal="true"
              aria-label={`Photo ${index + 1} of ${photos.length}`}
            >
              <button
                type="button"
                className="career-photo-lightbox-close"
                onClick={close}
                aria-label="Close photo"
              >
                <X size={20} />
              </button>

              <div className="career-photo-lightbox-nav">
                <button
                  type="button"
                  className="career-photo-lightbox-nav-btn"
                  onClick={prev}
                  aria-label="Previous photo"
                  tabIndex={0}
                >
                  <ChevronLeft size={24} />
                </button>

                <div className="career-photo-lightbox-viewport">
                  <img
                    src={photos[index].image}
                    alt={photos[index].caption}
                    className="career-photo-lightbox-img"
                  />
                  <figcaption className="career-photo-lightbox-caption">
                    <span className="career-photo-lightbox-date">
                      {photos[index].date || 'No date set'}
                    </span>
                    <span className="career-photo-lightbox-caption-text">
                      {photos[index].caption}
                    </span>
                  </figcaption>
                </div>

                <button
                  type="button"
                  className="career-photo-lightbox-nav-btn"
                  onClick={next}
                  aria-label="Next photo"
                  tabIndex={0}
                >
                  <ChevronRight size={24} />
                </button>
              </div>

              <span className="career-photo-lightbox-counter">
                {index + 1} / {photos.length}
              </span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
