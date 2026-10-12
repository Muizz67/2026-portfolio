import React, { useCallback, useMemo, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { careerPhotos } from '../data/careerPhotos';

/**
 * Gallery content — photo grid filtered by activity label ("TDCX", "AGA",
 * "Degree", "Graduation"). Mounted inside the page's section; the page owns
 * the header and the page-level transitions.
 *
 * Props:
 *   photos       — array of { id, label, caption, image } (defaults to all).
 *   lightbox     — whether clicking a thumbnail opens the lightbox.
 *   showFilters  — show the label-filter pills.
 *
 * Layout:
 *   - A label filter bar ("All" + one pill per distinct label).
 *   - A large uniform grid; each card shows the photo and reveals the caption
 *     on hover.
 *   - Clicking a card opens a larger lightbox with prev/next.
 */
export default function CareerPhotos({
  photos = careerPhotos,
  lightbox = true,
  showFilters = true,
}) {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);
  const overlayRef = useRef(null);

  // Distinct labels, in the order they first appear in `photos`.
  const labels = useMemo(() => {
    const seen = new Set();
    const list = [];
    photos.forEach((p) => {
      if (p.label && !seen.has(p.label)) {
        seen.add(p.label);
        list.push(p.label);
      }
    });
    return list;
  }, [photos]);

  const [activeLabel, setActiveLabel] = useState('All');

  const filtered = useMemo(() => {
    if (activeLabel === 'All') return photos;
    return photos.filter((p) => p.label === activeLabel);
  }, [photos, activeLabel]);

  const openPhoto = (id) => {
    const list = activeLabel === 'All' ? photos : photos.filter((p) => p.label === activeLabel);
    const idx = list.findIndex((p) => p.id === id);
    if (idx >= 0) {
      setIndex(idx);
      setOpen(true);
    }
  };

  const close = () => setOpen(false);
  const goTo = useCallback((i) => setIndex(i), []);
  const prev = useCallback(() => {
    goTo((index - 1 + filtered.length) % filtered.length);
  }, [goTo, index, filtered.length]);
  const next = useCallback(() => {
    goTo((index + 1) % filtered.length);
  }, [goTo, index, filtered.length]);

  React.useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, index, filtered.length, prev, next]);

  React.useEffect(() => {
    if (open) {
      const previousOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => { document.body.style.overflow = previousOverflow; };
    }
  }, [open]);

  if (photos.length === 0) return null;

  return (
    <>
      {showFilters && (
        <div className="gallery-filter-bar" role="tablist" aria-label="Filter by activity">
          <button
            type="button"
            className={`gallery-filter${activeLabel === 'All' ? ' active' : ''}`}
            onClick={() => setActiveLabel('All')}
            aria-pressed={activeLabel === 'All'}
          >
            All
          </button>
          {labels.map((label) => (
            <button
              key={label}
              type="button"
              className={`gallery-filter${activeLabel === label ? ' active' : ''}`}
              onClick={() => setActiveLabel(label)}
              aria-pressed={activeLabel === label}
            >
              {label}
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
    </>
  );
}
