
# Work_Showcase_Thewni
Portfolio | Thewni Mahathanthri

# WorkShowcase — Thewni Mahathanthri's Portfolio

A personal developer portfolio built as part of the WIF Development Team onboarding
project. Design direction: **neobrutalist "desktop"** — bold black borders, flat
colors, offset shadows, and projects presented as folder icons scattered like a
desktop, click to open.

**Live site:** _add your deployed Vercel URL here_
**Repo:** https://github.com/Thewni03/Work_Showcase_Thewni

---

## Overview

This site pulls together my work as an IT undergraduate at SLIIT — full-stack and
microservices projects, internship experience, and skills — into a single portfolio
site designed to stand out from typical AI-generated templates.

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | React + Vite |
| Styling | Tailwind CSS v4 (CSS-first config) |
| Animation | Framer Motion |
| Contact form | EmailJS (no backend required) |
| Deployment | Vercel |
| Version control | Git + GitHub |

## Features

- **Data-driven content** — all text, skills, and project details live in
  `src/data/portfolio.json`, not hardcoded into components
- **Folder-style project cards** — each project renders as a bordered, slightly
  rotated "folder" that opens into a detail window on click, styled like a flat,
  neobrutalist take on an OS window
- **Animated skill bars** and scroll-triggered motion via Framer Motion
- **Working contact form** wired to EmailJS, reading credentials from environment
  variables (never committed to the repo)
- Fully responsive layout

## Running Locally

```bash
git clone https://github.com/Thewni03/Work_Showcase_Thewni.git
cd Work_Showcase_Thewni
npm install
cp .env.example .env    # then fill in your EmailJS keys, see below
npm run dev
```

Open `http://localhost:5173`.

## Contact Form Setup (EmailJS)

1. Create a free account at [emailjs.com](https://emailjs.com)
2. Add an Email Service and a Template with `name`, `email`, `message` fields
3. Copy your Service ID, Template ID, and Public Key into `.env`:
   ```
   VITE_EMAILJS_SERVICE_ID=your_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_template_id
   VITE_EMAILJS_PUBLIC_KEY=your_public_key
   ```
4. `.env` is git-ignored — never commit real keys

## Build for Production

```bash
npm run build
```

Output goes to `dist/`.

## Deployment

Deployed on Vercel, connected directly to this GitHub repo. Every push to `main`
triggers an automatic redeploy. Environment variables are set in the Vercel project
dashboard under **Settings → Environment Variables**, matching the keys in `.env`.

## Roadmap / Possible Improvements

- Add real project screenshots to each folder window
- Add a downloadable resume link in the hero
- Dark mode toggle (flat neobrutalist dark palette)

---

Built by **Thewni Mahathanthri** — [LinkedIn](https://www.linkedin.com/in/thewni) ·
[GitHub](https://github.com/Thewni03)

git checkout content/portfolio-data
git push origin -u content/portfolio-data
git checkout main
git pull origin main
git merge content/portfolio-data
git push origin main

GIT_AUTHOR_DATE="2026-07-09 10:00:00"  GIT_COMMITTER_DATE="2026-07-09 11:00:00" git commit -m "edited folder file"


GIT_AUTHOR_DATE="2026-08-14 10:00:00" GIT_COMMITTER_DATE="2026-08-14 11:00:00" git commit -m "read me file "
 

 https://www.linkedin.com/in/thewni
