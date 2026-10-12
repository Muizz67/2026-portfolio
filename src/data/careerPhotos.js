// Career photos data — the single source of truth for the /career gallery.
//
// Metadata per photo:
//   date    — month and year only (e.g. "October 2026"). Leave blank when the
//             exact month/year isn't known.
//   caption — short descriptor shown under the thumbnail and in the lightbox.
//   image   — public path, resolved against public/ (e.g. /assets/photos/....)
//
// Photos sorted chronologically by date. All assets live in
// public/assets/photos/ (copied from the source device folder).

export const careerPhotos = [
  {
    id: 1,
    date: 'February 2023',
    caption: 'Early computer science studies.',
    image: '/assets/photos/bluevy-01.jpg',
  },
  {
    id: 2,
    date: 'October 2024',
    caption: 'Second-year degree snapshot.',
    image: '/assets/photos/degree-01.jpg',
  },
  {
    id: 3,
    date: 'February 2025',
    caption: 'Third-year degree snapshot.',
    image: '/assets/photos/degree-02.jpg',
  },
  {
    id: 4,
    date: 'April 2025',
    caption: 'AI engineering internship snapshot.',
    image: '/assets/photos/aga-01.jpg',
  },
  {
    id: 5,
    date: 'June 2025',
    caption: 'AI engineering internship snapshot.',
    image: '/assets/photos/aga-02.jpg',
  },
  {
    id: 6,
    date: 'October 2026',
    caption: 'Final year of my degree.',
    image: '/assets/photos/degree-03.jpg',
  },
  {
    id: 7,
    date: 'October 2026',
    caption: 'AI engineering internship wrap-up.',
    image: '/assets/photos/aga-03.jpg',
  },
  {
    id: 8,
    date: 'October 2026',
    caption: 'AI engineering internship wrap-up.',
    image: '/assets/photos/aga-04.jpg',
  },
  {
    id: 9,
    date: 'October 2026',
    caption: 'Graduation ceremony.',
    image: '/assets/photos/graduate-01.png',
  },
  {
    id: 10,
    date: 'October 2026',
    caption: 'Data annotation and QA review.',
    image: '/assets/photos/tdcx-01.jpg',
  },
  {
    id: 11,
    date: 'October 2026',
    caption: 'Data annotation and QA review.',
    image: '/assets/photos/tdcx-02.jpg',
  },
  {
    id: 12,
    date: 'October 2026',
    caption: 'Data annotation and QA review.',
    image: '/assets/photos/tdcx-03.jpg',
  },
  {
    id: 13,
    date: 'October 2026',
    caption: 'Data annotation and QA review.',
    image: '/assets/photos/tdcx-04.jpg',
  },
  {
    id: 14,
    date: 'October 2026',
    caption: 'Data annotation and QA review.',
    image: '/assets/photos/tdcx-05.jpg',
  },
  {
    id: 15,
    date: 'October 2026',
    caption: 'Data annotation and QA review.',
    image: '/assets/photos/tdcx-06.jpg',
  },
  {
    id: 16,
    date: '',
    caption: 'Graduation project presentation (sidang).',
    image: '/assets/photos/graduate-02.png',
  },
];

export const careerPhotoCount = careerPhotos.length;
