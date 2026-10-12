// Career photos data — the single source of truth for the /gallery page.
//
// Metadata per photo:
//   label   — what the photo is about (e.g. "TDCX", "AGA", "Degree").
//             Used as the filter pill; photos with the same label group together.
//   caption — short descriptor shown under the thumbnail and in the lightbox.
//   image   — public path, resolved against public/ (e.g. /assets/photos/...).
//
// Photos sorted chronologically by date. All assets live in
// public/assets/photos/ (copied from the source device folder).
export const careerPhotos = [
  {
    id: 1,
    date: 'February 2023',
    label: 'Degree',
    caption: 'Early computer science studies.',
    image: '/assets/photos/bluevy-01.jpg',
  },
  {
    id: 2,
    date: 'October 2024',
    label: 'Degree',
    caption: 'Second-year degree snapshot.',
    image: '/assets/photos/degree-01.jpg',
  },
  {
    id: 4,
    date: 'April 2025',
    label: 'AGA',
    caption: 'AI engineering internship snapshot.',
    image: '/assets/photos/aga-01.jpg',
  },
  {
    id: 5,
    date: 'June 2025',
    label: 'AGA',
    caption: 'AI engineering internship snapshot.',
    image: '/assets/photos/aga-02.jpg',
  },
  {
    id: 6,
    date: 'October 2026',
    label: 'Degree',
    caption: 'Final year of my degree.',
    image: '/assets/photos/degree-03.jpg',
  },
  {
    id: 7,
    date: 'October 2026',
    label: 'AGA',
    caption: 'AI engineering internship wrap-up.',
    image: '/assets/photos/aga-03.jpg',
  },
  {
    id: 8,
    date: 'October 2026',
    label: 'AGA',
    caption: 'AI engineering internship wrap-up.',
    image: '/assets/photos/aga-04.jpg',
  },
  {
    id: 9,
    date: 'October 2026',
    label: 'Graduation',
    caption: 'Graduation ceremony.',
    image: '/assets/photos/graduate-01.png',
  },
  {
    id: 10,
    date: 'October 2026',
    label: 'TDCX',
    caption: 'Data annotation and QA review.',
    image: '/assets/photos/tdcx-01.jpg',
  },
  {
    id: 11,
    date: 'October 2026',
    label: 'TDCX',
    caption: 'Data annotation and QA review.',
    image: '/assets/photos/tdcx-02.jpg',
  },
  {
    id: 12,
    date: 'October 2026',
    label: 'TDCX',
    caption: 'Data annotation and QA review.',
    image: '/assets/photos/tdcx-03.jpg',
  },
  {
    id: 13,
    date: 'October 2026',
    label: 'TDCX',
    caption: 'Data annotation and QA review.',
    image: '/assets/photos/tdcx-04.jpg',
  },
  {
    id: 14,
    date: 'October 2026',
    label: 'TDCX',
    caption: 'Data annotation and QA review.',
    image: '/assets/photos/tdcx-05.jpg',
  },
  {
    id: 15,
    date: 'October 2026',
    label: 'TDCX',
    caption: 'Data annotation and QA review.',
    image: '/assets/photos/tdcx-06.jpg',
  },
  {
    id: 16,
    date: '',
    label: 'Graduation',
    caption: 'Graduation project presentation (sidang).',
    image: '/assets/photos/graduate-02.png',
  },
];

export const careerPhotoCount = careerPhotos.length;
