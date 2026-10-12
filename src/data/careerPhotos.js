// Career photos data — the single source of truth for the /gallery page.
//
// Metadata per photo:
//   label   — what the photo is about (e.g. "TDCX", "AGA Touch", "UiTM Shah Alam").
//             Used as the filter pill; photos with the same label group together.
//   caption — short descriptor shown under the thumbnail and in the lightbox.
//   image   — public path, resolved against public/ (e.g. /assets/photos/...).
//   location — where it happened (optional; defaults to "—" in the lightbox).
//
// Sorted chronologically by date.
export const careerPhotos = [
  {
    id: 1,
    date: 'February 2023',
    label: 'Bluevy PLT',
    caption: 'HR and IT Team in Bluevy PLT.',
    image: '/assets/photos/bluevy-01.jpg',
  },
  {
    id: 6,
    date: 'February 2025',
    label: 'UiTM Shah Alam',
    caption: 'FYP Booth Exhibition - with my supervisor.',
    image: '/assets/photos/degree-03.jpg',
    location: 'UiTM Shah Alam',
  },
  {
    id: 4,
    date: 'April 2025',
    label: 'AGA Touch',
    caption: 'Project presentation at AGA Touch.',
    image: '/assets/photos/aga-01.jpg',
  },
  {
    id: 7,
    date: 'May 2025',
    label: 'AGA Touch',
    caption: 'Aman Rimba visit for digital transformation project.',
    image: '/assets/photos/aga-03.jpg',
  },
  {
    id: 5,
    date: 'June 2025',
    label: 'AGA Touch',
    caption: 'Internship report presentation.',
    image: '/assets/photos/aga-02.jpg',
  },
  {
    id: 8,
    date: 'June 2025',
    label: 'AGA Touch',
    caption: 'Last day picture with internship colleagues.',
    image: '/assets/photos/aga-04.jpg',
  },
  {
    id: 16,
    date: 'May 2026',
    label: 'UiTM Shah Alam',
    caption: "Graduated from UiTM Shah Alam (Bachelor's Degree).",
    image: '/assets/photos/graduate-02.png',
    location: 'UiTM Shah Alam',
  },
  {
    id: 9,
    date: 'May 2026',
    label: 'UiTM Shah Alam',
    caption: 'Graduation picture with my parents.',
    image: '/assets/photos/graduate-01.png',
    location: 'UiTM Shah Alam',
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
];

export const careerPhotoCount = careerPhotos.length;
