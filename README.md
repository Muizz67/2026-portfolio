<p align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&color=0:0a0e17,50:f0b429,100:101828&height=200&section=header&text=Muizz%20Rusdi&fontSize=40&fontColor=f0b429&animation=fadeIn&fontAlignY=36&desc=AI%20Engineer%20%7C%20Full-Stack%20Developer%20%7C%20UiTM%20Shah%20Alam%20Graduate&descAlignY=58&descSize=15&descColor=e5e7eb" alt="header banner" width="100%" />
</p>

# Hi 👋, I'm Muhammad Mu'izz

**Aspiring AI Engineer & Full-Stack Developer** — turning messy, real-world
data into clean, shippable models and polished web products.

- 🌱 Currently learning Web Development, and Agentic AI workflows
- 💼 Open to: AI Engineering, QA Automation, Full-Stack roles
- 📫 Reach me: **muizzrusdi@yahoo.com** · [LinkedIn](https://linkedin.com/in/muizz-rusdi)
- ⚡ Fun fact: I love connecting AI agents and to solve repeating task on my daily life

### 🛠️ Languages & Tools

<p align="center">
  <a href="https://www.python.org/"><img src="https://img.shields.io/badge/Python-0a0e17?style=for-the-badge&logo=python&logoColor=f0b429" alt="Python" /></a>
  <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"><img src="https://img.shields.io/badge/JavaScript-0a0e17?style=for-the-badge&logo=javascript&logoColor=f0b429" alt="JavaScript" /></a>
  <a href="https://reactjs.org/"><img src="https://img.shields.io/badge/React-0a0e17?style=for-the-badge&logo=react&logoColor=f0b429" alt="React" /></a>
  <a href="https://vitejs.dev/"><img src="https://img.shields.io/badge/Vite-0a0e17?style=for-the-badge&logo=vite&logoColor=f0b429" alt="Vite" /></a>
  <a href="https://nodejs.org/"><img src="https://img.shields.io/badge/Node.js-0a0e17?style=for-the-badge&logo=node.js&logoColor=f0b429" alt="Node.js" /></a>
  <a href="https://git-scm.com/"><img src="https://img.shields.io/badge/Git-0a0e17?style=for-the-badge&logo=git&logoColor=f0b429" alt="Git" /></a>
  <a href="https://www.tensorflow.org/"><img src="https://img.shields.io/badge/TensorFlow-0a0e17?style=for-the-badge&logo=tensorflow&logoColor=f0b429" alt="TensorFlow" /></a>
  <a href="https://www.mysql.com/"><img src="https://img.shields.io/badge/MySQL-0a0e17?style=for-the-badge&logo=mysql&logoColor=f0b429" alt="MySQL" /></a>
</p>

<p align="center">
  <img src="https://github-readme-stats.vercel.app/api/top-langs?username=Muizz67&show_icons=true&locale=en&layout=compact&theme=dark&title_color=f0b429&text_color=e5e7eb&icon_color=f0b429&border_color=f0b429&bg_color=0a0e17" alt="Muizz67 top languages" height="160" />
</p>

---

## About this portfolio

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

### Tech stack

- **React 19** with **React Router 7** (`react-router-dom`)
- **react-scripts** (Create React App) + `scripts/build.js` (npm's OpenSSL legacy-provider retry)
- **Framer Motion** — page reveals, typed hero headline, stack-filter transitions, lightbox
- **lucide-react** — interface icons
- **react-icons** — brand marks for tech stack and social links
- **Plain CSS** with CSS custom properties (`src/index.css`) for theming

### Design system

Navy-slate surfaces (`#0a0e17` / `#101828` / `#1a2436`) with an amber accent (`#f0b429`).


### Project structure

```
src/
 ├── components/        # Navbar, Footer, PageVariants, CareerPhotos (lightbox)
 ├── pages/             # Home, About, Projects, Experience, Gallery, Contact, Resume
 ├── data/              # careerPhotos, projects, profile, techIcons — single source of truth
 ├── hooks/             # useTypewriter (respects reduced-motion)
 ├── index.css          # design tokens + buttons
 └── App.js             # routing + scroll-to-top on navigation
public/
 └── assets/            # photos + resume.pdf
```

Content lives **only** in `src/data/`. Editing `profile.js` or `projects.js` updates
every page that reads from it (navigation, footer, stack counts, hero stats). Nothing
is duplicated between components.

### Running it locally

```bash
npm install
npm start      # http://localhost:3000
npm run build  # production bundle into build/
npx serve -s build   # preview production with SPA fallback
```

The `build` script (via `scripts/build.js`) retries with `--openssl-legacy-provider`
when webpack's `error:0308010C:digital envelope routines::unsupported` shows up on
Node 17+ — safely on Vercel's Node 24 runtime.