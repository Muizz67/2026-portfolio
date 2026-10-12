import React, { useMemo, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { careerPhotos } from '../data/careerPhotos';

/**
 * Gallery — a full-page, Google Images–style photo gallery.
 *
 * Props:
 *   photos       — array of { id, date, caption, image } (defaults to all 16).
 *   lightbox     — whether clicking a thumbnail opens the lightbox (default true).
 *   title        — section heading (default "Gallery").
 *   showFilters  — show the date-filter pills (default true). Turn off for a
 *                  compact recap strip on the Experience page.
 *
 * Layout:
 *   - A sticky date filter bar ("All" + one pill per distinct month+year).
 *   - A large uniform grid; each card shows the photo and reveals the caption
 *     on hover (dates are no longer printed on the cards).
 *   - Clicking a card opens a larger lightbox with prev/next.
 */
const CAREER_PHOTO_DIR = 'assets/photos';

export default function CareerPhotos({
  photos = careerPhotos,
  lightbox = true,
  title = 'Gallery',
  showFilters = true,
}) {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);
  const overlayRef = useRef(null);

  // Distinct month+year values, in the order they appear in `photos`.
  const dates = useMemo(() => {
    const seen = new Set();
    const list = [];
    photos.forEach((p) => {
      if (p.date && !seen.has(p.date)) {
        seen.add(p.date);
        list.push(p.date);
      }
    });
    return list;
  }, [photos]);

  const [activeDate, setActiveDate] = useState('All');

  const filtered = useMemo(() => {
    if (activeDate === 'All') return photos;
    return photos.filter((p) => p.date === activeDate);
  }, [photos, activeDate]);

  const openPhoto = (id) => {
    const list = activeDate === 'All' ? photos : photos.filter((p) => p.date === activeDate);
    const idx = list.findIndex((p) => p.id === id);
    if (idx >= 0) {
      setIndex(idx);
      setOpen(true);
    }
  };

  const close = () => setOpen(false);
  const goTo = (i) => setIndex(i);
  const prev = () => goTo((index - 1 + filtered.length) % filtered.length);
  const next = () => goTo((index + 1) % filtered.length);

  // Close on Escape, and navigate with arrow keys while the lightbox is open.
  React.useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, index, filtered.length]);

  // Lock body scroll while the lightbox is open (same pattern as the project modal).
  React.useEffect(() => {
    if (open) {
      const previousOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => { document.body.style.overflow = previousOverflow; };
    }
  }, [open]);

  if (photos.length === 0) {
    return (
      <section className="gallery-section">
        <div className="container">
          <h2 className="gallery-title">{title}</h2>
          <p className="gallery-empty">No photos yet.</p>
        </div>
      </section>
    );
  }

  return (
    <section className="gallery-section">
      <div className="container">
        <h2 className="gallery-title">{title}</h2>

        {showFilters && lightbox && (
          <div className="gallery-filter-bar" role="tablist" aria-label="Filter by date">
            <button
              type="button"
              className={`gallery-filter${activeDate === 'All' ? ' active' : ''}`}
              onClick={() => setActiveDate('All')}
              aria-pressed={activeDate === 'All'}
            >
              All
            </button>
            {dates.map((date) => (
              <button
                key={date}
                type="button"
                className={`gallery-filter${activeDate === date ? ' active' : ''}`}
                onClick={() => setActiveDate(date)}
                aria-pressed={activeDate === date}
              >
                {date}
              </button>
            ))}
          </div>
        )}

        <div className="gallery-grid">
          {filtered.map((photo, i) => (
            <figure
              key={photo.id}
              className="gallery-card"
              onClick={() => openPhoto(photo.id)}
              role="button"
              tabIndex={0}
              aria-label={`Open photo ${i + 1} of ${filtered.length}: ${photo.caption}`}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') openPhoto(photo.id);
              }}
            >
              <img
                src={photo.image}
                alt={photo.caption}
                loading="lazy"
                className="gallery-img"
              />
              <figcaption className="gallery-caption">{photo.caption}</figcaption>
            </figure>
          ))}
        </div>
      </div>

      {/* Lightbox overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            ref={overlayRef}
            className="gallery-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={close}
            aria-hidden="true"
          >
            <motion.div
              className="gallery-lightbox"
              initial={{ opacity: 0, scale: 0.96, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 12 }}
              transition={{ duration: 0.2 }}
              role="dialog"
              aria-modal="true"
              aria-label={`Photo ${index + 1} of ${filtered.length}`}
            >
              <button
                type="button"
                className="gallery-lightbox-close"
                onClick={close}
                aria-label="Close photo"
              >
                <X size={20} />
              </button>

              <div className="gallery-lightbox-nav">
                <button
                  type="button"
                  className="gallery-lightbox-nav-btn"
                  onClick={prev}
                  aria-label="Previous photo"
                  tabIndex={0}
                >
                  <ChevronLeft size={24} />
                </button>

                <div className="gallery-lightbox-viewport">
                  <img
                    src={filtered[index].image}
                    alt={filtered[index].caption}
                    className="gallery-lightbox-img"
                  />
                  <figcaption className="gallery-lightbox-caption">
                    <span className="gallery-lightbox-caption-text">
                      {filtered[index].caption}
                    </span>
                  </figcaption>
                </div>

                <button
                  type="button"
                  className="gallery-lightbox-nav-btn"
                  onClick={next}
                  aria-label="Next photo"
                  tabIndex={0}
                >
                  <ChevronRight size={24} />
                </button>
              </div>

              <span className="gallery-lightbox-counter">
                {index + 1} / {filtered.length}
              </span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
