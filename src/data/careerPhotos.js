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
    date: 'March 2026',
    label: 'TDCX',
    caption: 'Group photo with Whisper team before transitioning into WFH.',
    image: '/assets/photos/tdcx-01.jpg',
    location: 'TDCX, Kuala Lumpur',
  },

{
    id: 11,
    date: 'December 2025',
    label: 'TDCX',
    caption: 'Christmas activity - playing card games.',
    image: '/assets/photos/tdcx-02.jpg',
    location: 'TDCX, Kuala Lumpur',
  },

{
    id: 12,
    date: 'December 2025',
    label: 'TDCX',
    caption: 'Team building activity.',
    image: '/assets/photos/tdcx-03.jpg',
    location: 'TDCX, Kuala Lumpur',
  },

{
    id: 13,
    date: 'October 2025',
    label: 'TDCX',
    caption: 'Pot luck with Whisper Team.',
    image: '/assets/photos/tdcx-04.jpg',
    location: 'TDCX, Kuala Lumpur',
  },

{
    id: 14,
    date: 'October 2025',
    label: 'TDCX',
    caption: 'First dinner with Whisper Team in TDCX.',
    image: '/assets/photos/tdcx-05.jpg',
    location: "Chilli's, Mid Valley City",
  },

{
    id: 15,
    date: 'September 2025',
    label: 'TDCX',
    caption: 'Bootcamp session with client.',
    image: '/assets/photos/tdcx-06.jpg',
    location: 'TDCX, Kuala Lumpur',
  },

{
    id: 5,
    date: 'June 2025',
    label: 'AGA Touch',
    caption: 'Internship report presentation.',
    image: '/assets/photos/aga-02.jpg',
    location: 'AGA Touch, Shah Alam',
  },

{
    id: 8,
    date: 'June 2025',
    label: 'AGA Touch',
    caption: 'Last day picture with internship colleagues.',
    image: '/assets/photos/aga-04.jpg',
    location: 'AGA Touch, Shah Alam',
  },

{
    id: 7,
    date: 'May 2025',
    label: 'AGA Touch',
    caption: 'Aman Rimba visit for digital transformation project.',
    image: '/assets/photos/aga-03.jpg',
    location: 'Aman Rimba, Janda Baik',
  },

{
    id: 4,
    date: 'April 2025',
    label: 'AGA Touch',
    caption: 'Project presentation at AGA Touch.',
    image: '/assets/photos/aga-01.jpg',
    location: 'AGA Touch, Shah Alam',
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
    id: 99,
    date: 'December 2024',
    label: 'UiTM Shah Alam',
    caption: 'Pitch during BridgeHack-To-Industry - Top 10 Finalist.',
    image: '/assets/photos/uitm-extra-01.jpg',
    location: 'IBM, Petaling Jaya',
  },

{
    id: 1,
    date: 'February 2023',
    label: 'Bluevy PLT',
    caption: 'HR and IT Team in Bluevy PLT.',
    image: '/assets/photos/bluevy-01.jpg',
    location: 'Bluevy PLT',
  }
];

export const careerPhotoCount = careerPhotos.length;
