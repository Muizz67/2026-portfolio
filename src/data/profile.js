// Single source of truth for personal details.
// Edit this file to change how you appear across the whole site.

export const profile = {
  name: 'Muizz Rusdi',
  fullName: 'Muhammad Muizz bin Rusdi',
  role: 'AI Automation • Software Developer',
  headline: 'Building Intelligent AI Solutions',
  tagline:
    'AI engineer working across Python, machine learning, and full-stack development — turning research and manual processes into systems that run themselves.',
  location: 'Bandar Baru Bangi, Selangor, Malaysia',
  email: 'muizzrusdi@yahoo.com',
  resumeUrl: '/assets/resume.pdf',
  links: {
    github: 'https://github.com/Muizz67',
    linkedin: 'https://www.linkedin.com/in/muizzrusdi/'
  }
};

// What I actually do, grouped. Powers the Home "what I do" summary.
export const focusAreas = [
  {
    title: 'AI & Machine Learning',
    description:
      'Model development and evaluation in Python — from data collection and feature prep through to trained models and interpretable results.',
    items: ['Python', 'scikit-learn', 'Pandas', 'NumPy', 'LLM workflows']
  },
  {
    title: 'Automation & Pipelines',
    description:
      'Scheduled ETL pipelines and scraping systems that replace manual data collection with something reliable that runs daily without supervision.',
    items: ['Python', 'Selenium', 'BeautifulSoup', 'n8n', 'Docker']
  },
  {
    title: 'Full-Stack Web',
    description:
      'Interfaces and backends for data-heavy products — recommendation engines, dashboards, and the APIs that feed them.',
    items: ['React', 'JavaScript', 'Node.js', 'Laravel', 'REST APIs']
  },
  {
    title: 'Cloud & Infrastructure',
    description:
      'Deploying and running what gets built, with object storage, containerised services, and reproducible environments.',
    items: ['Cloudflare R2', 'Google Cloud', 'Docker', 'Git', 'Linux']
  }
];

// Full stack detail — About page only. `proficiency` is a rough self-assessment,
// so keep these honest rather than flattering.
export const technicalStack = [
  {
    category: 'AI & ML',
    icon: 'Cpu',
    items: [
      { name: 'Python', proficiency: 90, description: 'Primary language for ML pipelines, scripting, and data work' },
      { name: 'Machine Learning', proficiency: 75, description: 'Model design, training, evaluation, and comparison' },
      { name: 'Data Analysis', proficiency: 85, description: 'Cleaning, exploring, and drawing conclusions from datasets' }
    ]
  },
  {
    category: 'Backend & API',
    icon: 'Server',
    items: [
      { name: 'Laravel', proficiency: 80, description: 'PHP backend framework for web applications' },
      { name: 'Node.js', proficiency: 72, description: 'Backend services and API endpoints' },
      { name: 'REST API Integration', proficiency: 78, description: 'Consuming and exposing third-party and internal APIs' }
    ]
  },
  {
    category: 'Frontend & UI',
    icon: 'Layers',
    items: [
      { name: 'React', proficiency: 80, description: 'Component-based interfaces, including this site' },
      { name: 'JavaScript', proficiency: 85, description: 'Core language across frontend and scripting' },
      { name: 'CSS', proficiency: 78, description: 'Responsive, dark-theme interface work' }
    ]
  },
  {
    category: 'Automation & Scraping',
    icon: 'Workflow',
    items: [
      { name: 'Selenium', proficiency: 82, description: 'Browser automation for sites without usable APIs' },
      { name: 'BeautifulSoup', proficiency: 80, description: 'HTML parsing and structured extraction' },
      { name: 'n8n', proficiency: 75, description: 'Scheduled workflow orchestration' }
    ]
  },
  {
    category: 'Cloud & DevOps',
    icon: 'Cloud',
    items: [
      { name: 'Docker', proficiency: 70, description: 'Containerising services for consistent environments' },
      { name: 'Cloudflare R2', proficiency: 72, description: 'Object storage for scraped and generated content' },
      { name: 'Google Cloud Platform', proficiency: 65, description: 'Managed compute and storage for scheduled jobs' },
      { name: 'Git', proficiency: 85, description: 'Version control across every project' }
    ]
  }
];

export const languages = [
  { name: 'Malay', level: 'Native' },
  { name: 'English', level: 'Professional working proficiency' }
];

export const experience = [
  {
    title: 'Freelance Developer',
    location: 'Remote',
    date: '2023 — 2024',
    tags: ['Python', 'Web Scraping', 'Automation'],
    description:
      'Built custom data collection and automation tooling for clients and internal processes.',
    achievements: [
      'Delivered scraping pipelines that replaced manual data collection for multiple clients',
      'Automated recurring internal processes, removing hours of hands-on work each week',
      'Structured and validated extracted data so downstream consumers could rely on it'
    ],
    icon: 'Briefcase'
  },
  {
    title: 'Adaptive Task Manager — IBM BridgeHack-To-Industry',
    location: 'Malaysia',
    date: '2024',
    tags: ['Node.js', 'IBM Watson', 'Hackathon'],
    description:
      'Full-stack AI productivity tool with task prioritisation driven by IBM Watson Assistant.',
    achievements: [
      'Shipped a working AI prototype end-to-end within the hackathon timeframe',
      'Built the task-prioritisation logic as the core feature',
      'Developed both the HTML/CSS frontend and the Node.js backend'
    ],
    icon: 'Code'
  }
];

// TODO: replace the bracketed slots with your real details.
// They are marked so they're easy to find — search this file for `TODO`.
export const education = [
  {
    level: "Bachelor's Degree",
    degree: 'Intelligence System Engineering',
    university: '[TODO] Your university',
    timeline: '[TODO] e.g. 2021 — 2025',
    cgpa: '[TODO] e.g. 3.50 / 4.00'
  },
  {
    level: 'Diploma',
    degree: '[TODO] Your diploma name',
    university: '[TODO] Your college',
    timeline: '[TODO] e.g. 2019 — 2021',
    cgpa: '[TODO] e.g. 3.20 / 4.00'
  }
];

export const certifications = [
  {
    title: 'IBM AI Engineering Professional Certificate',
    issuer: 'IBM',
    year: '2024',
    link: null,
    icon: 'Award'
  },
  {
    title: 'Ericsson Network Automation Certification',
    issuer: 'Ericsson',
    year: '2024',
    link: null,
    icon: 'Award'
  },
  {
    title: 'Machine Learning Specialization',
    issuer: 'Simplilearn',
    year: '2023',
    link: null,
    icon: 'Award'
  }
];

export const stats = [
  { value: '5', label: 'Projects Shipped' },
  { value: '3', label: 'Certificates' },
  { value: '2', label: 'Years Building' },
  { value: '20+', label: 'Technologies' }
];