// Project data shared by the Home featured grid and the Projects page.
// `featured` controls which projects surface on the landing page.

export const projects = [
  {
    id: 1,
    featured: true,
    title: 'ManaMurah — Automated Daily Content Publishing',
    shortDescription:
      'A scheduled pipeline that scrapes live price data, transforms it into Markdown, and republishes it to cloud storage every day without manual work.',
    description:
      'Built an n8n-powered pipeline that fetches data from ManaMurah, transforms it into Markdown using Python, and automatically updates the content in Cloudflare R2 for daily price tracking.',
    tags: ['Automation', 'Web Scraping', 'Data Processing'],
    tech: ['Python', 'Selenium', 'n8n', 'Docker', 'Cloudflare R2', 'Google Cloud Platform'],
    icon: 'Workflow',
    category: 'Workflow Automation',
    status: 'Completed',
    image: '/assets/projects/n8n-automation.png',
    role:
      'Developed the Python data-processing script and the n8n automation workflow.',
    impact:
      'Automated repetitive daily content updates and removed manual data handling entirely.',
    context:
      'Designed a scheduled ETL pipeline to fetch, transform, and replace content in cloud storage.',
    github: null
  },
  {
    id: 2,
    featured: true,
    title: 'Media Creation from Research & Sentiment Analysis',
    shortDescription:
      'Collected and validated online sources across Twitter, Reddit and Lowyat Forum, ran sentiment analysis, and turned the findings into structured media content.',
    description:
      'Transformed research data and sentiment analysis into media content.',
    tags: ['AI Research', 'Data Collection', 'Social Media Analytics'],
    tech: ['Obsidian', 'Python', 'BeautifulSoup', 'Selenium', 'LLMs', 'Julius AI'],
    icon: 'Search',
    category: 'Data Collection',
    status: 'Completed',
    image: '/assets/projects/media-creation.png',
    role:
      'Collected, analyzed, and validated online information. Created sentiment analysis reports sourced from Twitter, Reddit and Lowyat Forum.',
    impact:
      'Provided reliable research insights for downstream AI media creation.',
    context:
      'Combined web scraping, LLM-assisted research, search, and source validation into a structured research workflow.',
    github: null
  },
  {
    id: 3,
    featured: true,
    title: 'Crop Yield Prediction Dashboard — Final Year Project',
    shortDescription:
      'Compared Random Forest, SVM and neural network models on historical Malaysian crop data, then exposed the best of them through an interactive dashboard.',
    description:
      'ML-powered dashboard for predicting crop yields in Malaysia using historical data, weather patterns, and soil conditions. Built with Python, scikit-learn, and interactive visualizations.',
    tags: ['Machine Learning', 'Data Science', 'Final Year Project'],
    tech: ['Python', 'Machine Learning', 'Pandas', 'Scikit-learn', 'Dashboard', 'Power BI'],
    icon: 'Database',
    category: 'Machine Learning',
    status: 'Completed',
    image: '/assets/projects/fyp.png',
    role: 'Data collection, model development, and dashboard implementation.',
    impact:
      'Helped forecast crop yields using weather and soil data to support planning decisions.',
    context:
      'Final Year Project pairing a trained scikit-learn Random Forest, Support Vector Machine and Artificial Neural Network model with an interactive dashboard.',
    github: null
  },
  {
    id: 4,
    featured: true,
    title: 'Adaptive Task Manager',
    shortDescription:
      'An AI productivity tool for IBM\'s BridgeHack-To-Industry that reprioritises your task list based on how you actually work.',
    description:
      'Intelligent task management system developed for IBM\'s BridgeHack-To-Industry. Features AI-powered task prioritization and adaptive scheduling based on user behavior patterns.',
    tags: ['Full-Stack', 'Hackathon'],
    tech: ['IBM Watson', 'HTML', 'CSS', 'Node.js'],
    icon: 'Bot',
    category: 'Full-Stack AI',
    status: 'Completed',
    image: '/assets/projects/task-manager.png',
    role:
      'Full-stack development across the HTML and CSS frontend and Node.js backend. Integrated IBM Watson Assistant for AI-driven task prioritization.',
    impact:
      'Adaptive scheduling that reprioritizes tasks based on how users actually work.',
    context:
      'Built under hackathon time constraints, with the IBM Watson Assistant as the orchestration layer.',
    github: null
  },
  {
    id: 5,
    featured: false,
    title: 'Phone Finder — Recommendation System',
    shortDescription:
      'A recommendation engine that takes your budget and must-haves and returns a short list of phones, with live pricing and spec comparison.',
    description:
      'Smart phone recommendation system that analyzes user preferences and budget to suggest optimal smartphone choices. Features comparison tools and price tracking.',
    tags: ['Web Application', 'Intelligent System', 'API Integration'],
    tech: ['JavaScript', 'HTML', 'CSS', 'REST API', 'JSON'],
    icon: 'Smartphone',
    category: 'Web Application',
    status: 'Completed',
    image: '/assets/projects/phone-finder.png',
    role:
      'Built the recommendation logic, full-stack application, and API integration.',
    impact:
      'Simplified smartphone selection by matching user requirements with suitable devices.',
    context:
      'Combined a rule-based recommendation engine, API-driven data retrieval, and an interactive web interface.',
    github: 'https://github.com/ihpwapp/phone_finder'
  }
];

export const featuredProjects = projects.filter((p) => p.featured);