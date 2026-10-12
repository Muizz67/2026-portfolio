<p align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&color=0:0a0e17,50:f0b429,100:101828&height=200&section=header&text=Muhammad%20Mu'izz%20bin%20Rusdi&fontSize=42&fontColor=f0b429&animation=fadeIn&fontAlignY=36&desc=AI%20Engineer%20%7C%20Full-Stack%20Developer%20%7C%20UiTM%20Shah%20Alam%20Graduate&descAlignY=58&descSize=16&descColor=e5e7eb" alt="header banner" />
</p>

<p align="center">
  <img src="https://media.giphy.com/media/qgQUggAC3Pfv687qPC/giphy.gif" width="420" alt="coding gif" />
</p>

<p align="center">
  <a href="https://github.com/Muizz67">
    <img src="https://komarev.com/ghpvc/?username=Muizz67&label=Profile%20views&color=f0b429&style=flat" alt="profile views" />
  </a>
</p>

# Hi 👋, I'm Muhammad Mu'izz

### Aspiring AI Engineer & Full-Stack Developer

<p align="center">
  <a href="https://linkedin.com/in/muizz-rusdi" target="_blank">
    <img src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/linked-in-alt.svg" height="30" width="40" alt="LinkedIn" />
  </a>
  <a href="https://github.com/Muizz67" target="_blank">
    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/github/github-original.svg" height="30" width="40" alt="GitHub" />
  </a>
</p>

- 🔭 I'm currently working on my **Final Year Project: Customer Emotion Recognition System** (CNN-based)
- 🌱 I'm currently learning **Web Development**, **Convolutional Neural Networks**, and **Agentic AI workflows**
- 👨‍💻 Browse my projects → [Muizz67 on GitHub](https://github.com/Muizz67?tab=repositories)
- 💼 Open to: AI Engineering, Data Annotation/QA, Full-Stack roles
- 📫 Reach me at **muizzrusdi@yahoo.com**
- ⚡ Fun fact: **I love turning messy data into clean, shippable models**

### Languages and Tools:

<p align="left">
  <a href="https://www.python.org/" target="_blank"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg" width="40" height="40" alt="Python" /></a>
  <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" width="40" height="40" alt="JavaScript" /></a>
  <a href="https://reactjs.org/" target="_blank"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg" width="40" height="40" alt="React" /></a>
  <a href="https://vitejs.dev/" target="_blank"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/vitejs/vitejs-original.svg" width="40" height="40" alt="Vite" /></a>
  <a href="https://nodejs.org/" target="_blank"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg" width="40" height="40" alt="Node.js" /></a>
  <a href="https://git-scm.com/" target="_blank"><img src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" width="40" height="40" alt="Git" /></a>
  <a href="https://www.tensorflow.org/" target="_blank"><img src="https://www.vectorlogo.zone/logos/tensorflow/tensorflow-icon.svg" width="40" height="40" alt="TensorFlow" /></a>
  <a href="https://www.mysql.com/" target="_blank"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original.svg" width="40" height="40" alt="MySQL" /></a>
</p>

### 📊 GitHub Stats:

<p align="center">
  <img src="https://github-readme-stats.vercel.app/api?username=Muizz67&show_icons=true&locale=en&theme=dark&title_color=f0b429&text_color=e5e7eb&icon_color=f0b429&border_color=f0b429&bg_color=0a0e17" alt="Muizz67 stats" />
</p>

<p align="center">
  <img src="https://github-readme-stats.vercel.app/api/top-langs?username=Muizz67&show_icons=true&locale=en&layout=compact&theme=dark&title_color=f0b429&text_color=e5e7eb&icon_color=f0b429&border_color=f0b429&bg_color=0a0e17" alt="Muizz67 top languages" />
</p>

<p align="center">
  <img src="https://github-readme-streak-stats.herokuapp.com/?user=Muizz67&theme=dark&background=0a0e17&ring=f0b429&fire=f0b429&currStreakLabel=e5e7eb&sideLabels=e5e7eb&dates=9ca3af&border=f0b429" alt="Muizz67 streak" />
</p>

---

## About this portfolio site

A six-route React single-page app showcasing my work:

| Route | Purpose |
| --- | --- |
| `/` | Hero with typed headline, focus areas, featured work, stats, closing CTA |
| `/about` | Identity card, bio, education, certifications, tech stack |
| `/experience` | Role-by-role work history as a single reading rail |
| `/projects` | Project case-study cards with modal details |
| `/gallery` | Photo timeline with lightbox (newest-first, filterable by activity) |
| `/contact` | Five real contact channels |
| `/resume` | Embedded PDF resume with download + open |

### Design system

Navy-slate surfaces (`#0a0e17` / `#101828` / `#1a2436`) with an amber accent (`#f0b429`), set through CSS custom properties in `src/index.css`. Amber is a light accent, so filled elements use near-black text (`#0a0e17`) for contrast (10.35:1).

### Project structure

```
src/
 ├── components/        # Navbar, Footer, PageVariants, CareerPhotos (lightbox)
 ├── pages/             # Home, About, Projects, Experience, Gallery, Contact, Resume
 ├── data/              # careerPhotos, projects, profile, techIcons (single source of truth)
 ├── index.css          # design tokens + buttons
 └── App.js             # routing + scroll-to-top on navigation
public/
 └── assets/            # photos and resume.pdf
```

All content lives in `src/data/` — edit there and every page that reads it updates (navigation, footer, stack counts, hero stats included). Nothing is duplicated between components.

### Running it locally

```bash
npm install
npm start      # http://localhost:3000
npm run build  # production bundle into build/
```

The `build` script runs `scripts/build.js`, a wrapper around `react-scripts build` that retries with `--openssl-legacy-provider` on Node 17+ OpenSSL 3 errors (safe on Vercel's Node 24 runtime).

To preview the production build with SPA fallback:

```bash
npx serve -s build
```

### Accessibility notes

- `prefers-reduced-motion` respected sitewide (typed hero renders finished, tech marquee hidden, transitions stop)
- Hero headline carries full text in `aria-label`, animating text is `aria-hidden`
- Filled amber elements use near-black text for contrast
- Project modal supports Escape-to-close and restores body scroll on exit
- Lightbox supports arrow keys and Escape

Made with care and caffeine ☕ — feel free to fork, but a star would make my day 🌟