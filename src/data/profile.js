// Single source of truth for personal details.
// Source of truth for resume facts: public/assets/resume/resume.pdf
// Edit this file to change how you appear across the whole site.

export const profile = {
  name: 'Muizz Rusdi',
  fullName: "Muizz Rusdi",
  role: 'AI Automation • Software Developer',
  headline: 'Building Intelligent AI Solutions',
  tagline:
    'AI engineer across data annotation, machine learning, and full-stack development — turning research and manual processes into systems that run themselves.',
  location: 'Bandar Baru Bangi, Selangor, Malaysia',
  email: 'muizzrusdi@yahoo.com',
  // Digits only, international format, for the wa.me deep link.
  phoneDisplay: '+60 11-1185 0771',
  phoneE164: '601111850771',
  // Personal biography. Longer and first-person, so it belongs on About rather
  // than in `tagline` (which is the short positioning line used on Home and in
  // the footer).
  bio: [
    "I'm passionate about AI, and the part I'm most drawn to is automation — the idea that something tedious only ever has to be built once. I worked that out during my AI engineering internship, where I built n8n workflows and the web scraping and automation scripts underneath them. Seeing a process that had been running on manual effort suddenly run by itself was the moment it clicked.",
    'Beyond that I just genuinely like programming. The feeling of working something out and watching it work is its own reward, and I keep coming back to it.',
    "Lately I've been digging into AI agents and building them for myself — automating my own day-to-day rather than someone else's. Gaming is what I do to switch off."
  ],
  resumeUrl: '/assets/resume/resume.pdf',
  links: {
    github: 'https://github.com/Muizz67',
    linkedin: 'https://www.linkedin.com/in/muizzrusdi/',
    whatsapp: 'https://wa.me/601111850771'
  }
};

// What I actually do, grouped. Powers the Home "what I do" summary.
export const focusAreas = [
  {
    title: 'AI & Machine Learning',
    description:
      'Model development and evaluation in Python — from dataset assembly and feature prep through to trained models and interpretable results.',
    items: ['Python', 'TensorFlow', 'Scikit-learn', 'Pandas']
  },
  {
    title: 'Data Annotation & Collection',
    description:
      'Specialist annotation at scale for language and vision datasets, plus the scraping pipelines that feed them.',
    items: ['Label Studio', 'YOLOv8', 'Selenium', 'Python']
  },
  {
    title: 'Automation & Pipelines',
    description:
      'Scheduled ETL pipelines and scraping systems that replace manual data handling with something reliable that runs without supervision.',
    items: ['n8n', 'Python', 'Docker', 'Cloudflare R2']
  },
  {
    title: 'Full-Stack & Quality',
    description:
      'Laravel, Vue, and Node backends and frontends — defended by unit tests, because production bugs are expensive.',
    items: ['Laravel', 'Vue.js', 'Node.js', 'PHP']
  }
];

// Full stack detail with brand logos — About page only.
// `icon` keys map to entries in src/data/techIcons.js.
export const technicalStack = [
  {
    category: 'AI & ML',
    items: [
      { name: 'Python', icon: 'python', level: 92, description: 'Primary language across ML, scraping, and automation' },
      { name: 'TensorFlow', icon: 'tensorflow', level: 75, description: 'Model building and training for ML pipelines' },
      { name: 'Scikit-learn', icon: 'sklearn', level: 82, description: 'Random Forest, SVM and ANN model comparison' },
      { name: 'Pandas', icon: 'pandas', level: 88, description: 'Dataset assembly, cleaning, and analysis' }
    ]
  },
  {
    category: 'Data & Annotation',
    items: [
      { name: 'Label Studio', icon: 'labelstudio', level: 85, description: 'Video object detection datasets for YOLOv8' },
      { name: 'YOLOv8', icon: 'yolo', level: 78, description: 'Object detection training on annotated video data' },
      { name: 'Selenium', icon: 'selenium', level: 85, description: 'Browser automation where no usable API exists' },
      { name: 'Hugging Face', icon: 'huggingface', level: 72, description: 'Transformers for language-based tasks' }
    ]
  },
  {
    category: 'Full-Stack',
    items: [
      { name: 'Laravel', icon: 'laravel', level: 82, description: 'PHP backend framework used in production internship' },
      { name: 'Vue.js', icon: 'vue', level: 80, description: 'Frontend work on live client applications' },
      { name: 'Node.js', icon: 'node', level: 78, description: 'Backend services and API endpoints' },
      { name: 'JavaScript', icon: 'javascript', level: 85, description: 'Core language across frontend and scripting' },
      { name: 'PHP', icon: 'php', level: 80, description: 'Server-side language behind the Laravel work' }
    ]
  },
  {
    category: 'Automation & Workflow',
    items: [
      { name: 'n8n', icon: 'n8n', level: 85, description: 'AI pipeline orchestration, ~70% less manual handling' },
      { name: 'Prompt Engineering', icon: 'openai', level: 82, description: 'ChatGPT, DeepSeek, Gemini, Mistral, Ollama' },
      { name: 'Cloudflare R2', icon: 'cloudflare', level: 75, description: 'Object storage for scraped and generated content' },
      { name: 'Google Sheets API', icon: 'googlesheets', level: 70, description: 'Data in and out of spreadsheets programmatically' }
    ]
  },
  {
    category: 'Tools & Languages',
    items: [
      { name: 'Docker', icon: 'docker', level: 72, description: 'Containerised services for consistent environments' },
      { name: 'Git', icon: 'git', level: 85, description: 'Version control across every project' },
      { name: 'Obsidian', icon: 'obsidian', level: 78, description: 'Research notes and structured source validation' },
      { name: 'SQL', icon: 'sql', level: 75, description: 'Querying and shaping relational data' },
      { name: 'Java', icon: 'java', level: 65, description: 'Studied formally in the Computer Science diploma' },
      { name: 'C++', icon: 'cpp', level: 62, description: 'Studied formally, algorithm and data structure focus' }
    ]
  }
];

export const languages = [
  { name: 'Malay', level: 'Native' },
  { name: 'English', level: 'Professional working proficiency' }
];

export const experience = [
  {
    title: 'Data Annotator Specialist',
    company: 'TDCX',
    location: 'Remote',
    date: 'September 2025 — July 2026',
    tags: ['Data Annotation', 'Audio', 'Quality'],
    description:
      'Full-time specialist role annotating English audio content for language-based datasets.',
    achievements: [
      'Achieved ~97% annotation accuracy against a 95% KPI benchmark',
      'Transcribed audio and labelled speaker roles and emotional tone at volume',
      'Promoted onto specialised projects on the strength of consistency'
    ],
    icon: 'AudioLines'
  },
  {
    title: 'Artificial Intelligence Engineering Intern',
    company: 'Aga Touch M. Sdn Bhd',
    location: 'Malaysia',
    date: 'March 2025 — June 2025',
    tags: ['n8n', 'LLMs', 'Computer Vision'],
    description:
      'Built AI automation and data collection pipelines for internal product applications.',
    achievements: [
      'Designed n8n AI pipelines that cut manual data handling by ~70%',
      'Ran prompt engineering across ChatGPT, DeepSeek, Gemini, Mistral and Ollama to improve internal outputs',
      'Built social media collection pipelines (Twitter, Reddit, forums) feeding sentiment analysis',
      'Annotated video object detection datasets in Label Studio for YOLOv8 training',
      'Delivered text-to-speech and AI video generation for internal products'
    ],
    icon: 'SiN8N'
  },
  {
    title: 'Full Stack Developer & Unit Testing Intern',
    company: 'Bluevy PLT Sdn Bhd',
    location: 'Malaysia',
    date: 'September 2022 — March 2023',
    tags: ['Laravel', 'Vue.js', 'Node.js', 'Testing'],
    description:
      'Maintained live client web applications and hardened the backend test suite.',
    achievements: [
      'Resolved live production bugs and troubleshot for application stability',
      'Created and maintained 20+ unit tests covering backend service functionality',
      'Cut regression issues by validating changes against that suite',
      'Maintained application features across Laravel, Vue.js and Node.js'
    ],
    icon: 'Code'
  }
];

// Facts taken directly from the resume — no placeholders remain.
export const education = [
  {
    level: "Bachelor of Science (Hons.)",
    degree: 'Intelligent System Engineering',
    university: 'Universiti Teknologi MARA (UiTM), Shah Alam',
    timeline: 'March 2023 — June 2025',
    cgpa: '3.51'
  },
  {
    level: 'Diploma',
    degree: 'Computer Science',
    university: 'Universiti Teknologi MARA (UiTM), Raub',
    timeline: 'October 2020 — March 2023',
    cgpa: '3.49'
  }
];

export const certifications = [
  // TODO: replace `link` with the specific badge/credential URL for each
  // cert once you have them. All six currently point at the same Credly
  // profile badge you supplied as a placeholder.
  {
    title: 'Introduction to Intelligent Virtual Agents with IBM watsonx Assistant',
    issuer: 'IBM',
    link: 'https://www.credly.com/earner/earned/badge/7c09b9a6-1e41-4584-89ff-9b37717e852b',
    icon: 'Brain'
  },
  {
    title: 'IBM Watsonx Orchestrate: Build an AI Assistant',
    issuer: 'IBM',
    link: 'https://www.credly.com/earner/earned/badge/7c09b9a6-1e41-4584-89ff-9b37717e852b',
    icon: 'Robot'
  },
  {
    title: 'IBM Watsonx.ai Technical Essentials',
    issuer: 'IBM',
    link: 'https://www.credly.com/earner/earned/badge/7c09b9a6-1e41-4584-89ff-9b37717e852b',
    icon: 'Microchip'
  },
  {
    title: 'Enterprise Design Thinking Practitioner',
    issuer: 'IBM',
    link: 'https://www.credly.com/earner/earned/badge/7c09b9a6-1e41-4584-89ff-9b37717e852b',
    icon: 'Lightbulb'
  },
  {
    title: '5G Pioneers Program',
    issuer: 'Ericsson',
    link: 'https://www.credly.com/earner/earned/badge/7c09b9a6-1e41-4584-89ff-9b37717e852b',
    icon: 'TowerBroadcast'
  },
  {
    title: 'n8n: No-Code AI Agent Builder',
    issuer: 'Simplilearn',
    link: 'https://www.credly.com/earner/earned/badge/7c09b9a6-1e41-4584-89ff-9b37717e852b',
    icon: 'SiN8N'
  }
];

// Expertise blocks. `technologies` renders as a chip cluster and
// `highlights` as a checked list — the layout borrowed from the reference.
export const expertise = [
  {
    title: 'AI & Machine Learning',
    summary:
      'Model development and evaluation in Python — dataset assembly, feature prep, trained models, interpretable results.',
    technologies: ['Python', 'TensorFlow', 'Scikit-learn', 'Pandas', 'Random Forest', 'SVM', 'ANN'],
    highlights: [
      'Compared three model families (Random Forest, SVM, ANN) on Malaysian crop data behind a Power BI dashboard',
      'Built ETL pipelines that cut manual data handling by around 70%',
      'Ran prompt engineering across ChatGPT, DeepSeek, Gemini, Mistral and Ollama'
    ]
  },
  {
    title: 'Data Annotation & Collection',
    summary:
      'Specialist annotation for language and vision datasets, plus the scraping pipelines that feed them.',
    technologies: ['Label Studio', 'YOLOv8', 'Selenium', 'BeautifulSoup', 'Julius AI'],
    highlights: [
      'Held ~97% annotation accuracy against a 95% KPI benchmark at volume',
      'Annotated video object detection datasets in Label Studio for YOLOv8 training',
      'Built collection pipelines from Twitter, Reddit and forum sources for sentiment analysis'
    ]
  },
  {
    title: 'Automation & Workflow',
    summary:
      'Scheduled pipelines that replace manual data handling with something reliable that runs without supervision.',
    technologies: ['n8n', 'Python', 'Docker', 'Cloudflare R2', 'Google Sheets API'],
    highlights: [
      'Designed n8n AI pipelines removing roughly 70% of manual data handling',
      'Delivered text-to-speech and AI video generation for internal products',
      'Automated a daily publish cycle from scrape to Cloudflare R2'
    ]
  },
  {
    title: 'Full-Stack & Quality',
    summary:
      'Laravel, Vue and Node backends and frontends — defended by unit tests, because production bugs are expensive.',
    technologies: ['Laravel', 'Vue.js', 'Node.js', 'PHP', 'REST API'],
    highlights: [
      'Maintained live client web applications and resolved production incidents',
      'Wrote and maintained 20+ unit tests covering backend service functionality',
      'Shipped an AI task planner to the IBM BridgeHack-To-Industry Top 10'
    ]
  }
];

export const stats = [
  { value: '6', label: 'Certifications' },
  { value: '5', label: 'Projects' },
  { value: '97%', label: 'Annotation Accuracy' },
  { value: '20+', label: 'Unit Tests Written' }
];