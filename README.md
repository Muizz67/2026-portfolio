# Portfolio — Muhammad Mu'izz bin Rusdi

Personal portfolio and case-study site for an AI engineer working across data
annotation, machine learning, automation, and full-stack development.

Built as a static React single-page app, deployed to Cloudflare Pages.

---

## What it is

Six routes, each doing one job:

| Route | Purpose |
| --- | --- |
| `/` | Hero with a typed headline, focus areas, featured work, headline stats, closing CTA |
| `/about` | Identity card, first-person bio, passions, education, certifications, filterable tech stack |
| `/experience` | Role-by-role work history as a single reading rail |
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

## Structure

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

## Running it

```bash
npm install
npm start      # http://localhost:3000
npm run build  # production bundle into build/
```

To preview the production build, serve it with SPA fallback:

```bash
npx serve -s build
```

## Deployment

Cloudflare Pages, configured for a static CRA build:

- **Build command:** `npm run build`
- **Build output directory:** `build`

`public/_redirects` holds `/* /index.html 200`, a rewrite fallback that is
required for client-side routing. Without it, refreshing `/projects` or
`/resume` returns a 404, since no matching file exists in the build output.

## Accessibility notes

- `prefers-reduced-motion` is respected sitewide: the typed hero renders
  finished, the tech marquee is hidden, and all pulses and transitions stop
- The hero headline carries its full text in `aria-label` with the animating
  text `aria-hidden`, so screen readers announce a complete heading rather than
  a half-typed fragment
- Filled amber elements use near-black text for contrast
- The project modal supports Escape to close and restores body scroll on exit