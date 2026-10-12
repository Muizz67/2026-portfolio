# 👋 Hi, welcome to my digital home

Pleased to meet you — I'm Mu'izz. This repository is the source behind my
personal portfolio: the projects I've shipped, the things I learned along the way,
and a little bit of the photo journey behind all of it.

Feel free to explore, poke around the components, and borrow anything that's
useful. If something here catches your eye or sparks a question, I'd love to
hear from you — the **Contact** page has all the ways to reach me.

Below is the hands-on readme for anyone who wants to build, run, or extend it.

---

# Portfolio — Muhammad Mu'izz bin Rusdi

Personal portfolio and case-study site for an AI engineer working across data
annotation, machine learning, automation, and full-stack development.

Built as a static React single-page app, deployed to **Vercel**.

---

## What it is

Six routes, each doing one job:

| Route | Purpose |
| --- | --- |
| `/` | Hero with a typed headline, focus areas, featured work, headline stats, closing CTA |
| `/about` | Identity card, first-person bio, passions, education, certifications, filterable tech stack |
| `/experience` | Role-by-role work history as a single reading rail |
| `/gallery` | Full photo gallery of degree years, internships, and work snapshots (lightbox on tap) |
| `/projects` | Five projects as cards; each opens a case-study modal covering role, impact, and engineering context |
| `/contact` | Five real contact channels — email, phone, WhatsApp, GitHub, LinkedIn |
| `/resume` | Embedded PDF resume with download and open-in-new-tab |

A site-wide footer carries navigation, contact details, and back-to-top.

Content is real throughout: quantified results (97% annotation accuracy against
a 95% KPI, roughly 70% less manual data handling, 20+ unit tests), full UiTM
education with CGPA, and six verified certifications.

## Design

Navy-slate surfaces (`#0a0e17` / `#101828` / `#1a2436`) with an amber accent
(`#f0b429`), applied sitewide through CSS custom properties in
`src/index.css`. Cards are translucent, so stacked panels read as layers
rather than opaque blocks.

Because amber is a light accent, any filled element using it takes near-black
text: white on `#f0b429` measures 1.86:1 and fails contrast, while `#0a0e17`
gives 10.35:1. This applies to primary buttons, the active stack tab, and the
availability dot. Adding a new filled accent surface means re-checking this.

Tech logos render in their official brand colours through `react-icons`, lifted
where a brand's own colour is too dark to read against the card background.

## Tech stack

- **React 19** with **React Router 7**
- **react-scripts** (Create React App)
- **Framer Motion** — page reveals, the typed hero headline, stack-filter transitions
- **lucide-react** — interface icons
- **react-icons** — brand marks for the tech stack and social links

### Project structure

```
src/
  components/
    BrandIcons.js   GitHub and LinkedIn marks (lucide v1 dropped brand icons)
    Footer.js/.css  Site-wide footer
    Navbar.js/.css  Navigation with mobile menu
  data/
    profile.js      Personal details, bio, experience, education, certs, stack
    projects.js     Project records shared by Home and Projects
    techIcons.js    Brand logo registry with official brand colours
    icon.js         String-to-icon mapping for the data files
  hooks/
    useTypewriter.js  Typed hero headline; respects reduced-motion
  pages/
    About, Contact, Experience, Home, Projects, Resume
```

**All content lives in `src/data/`.** Editing `profile.js` or `projects.js`
updates every page that reads from it — navigation, footer, stack counts, and
hero stats included. Nothing is duplicated between components.

## Running it locally

```bash
npm install
npm start      # http://localhost:3000
npm run build  # production bundle into build/
```

The `build` script runs `scripts/build.js`, a wrapper around `react-scripts
build`. Create React App (webpack 4) hashes with md4, which breaks under
OpenSSL 3 (Node 17+) with `error:0308010C:digital envelope routines::unsupported`.
The wrapper retries the first build with `--openssl-legacy-provider` when it
sees that exact error — safely on Node 24+ (Vercel's current runtime), where
the flag is supported.

To preview the production build with SPA fallback:

```bash
npx serve -s build
```

## Accessibility notes

- `prefers-reduced-motion` is respected sitewide: the typed hero renders
  finished, the tech marquee is hidden, and all pulses and transitions stop
- The hero headline carries its full text in `aria-label` with the animating
  text `aria-hidden`, so screen readers announce a complete heading rather than
  a half-typed fragment
- Filled amber elements use near-black text for contrast
- The project modal supports Escape to close and restores body scroll on exit