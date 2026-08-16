# Work Showcase — Thewni Mahathanthri

[![Live Site](https://img.shields.io/badge/live-work--showcase--thewni.vercel.app-FFC700?style=flat-square&labelColor=111111)](https://work-showcase-thewni.vercel.app/)
[![Built with React](https://img.shields.io/badge/built%20with-React%20%2B%20Vite-5B7CFA?style=flat-square&labelColor=111111)](https://vitejs.dev)

My personal portfolio, built as part of the WIF Development Team onboarding project.

**Live site:** [work-showcase-thewni.vercel.app](https://work-showcase-thewni.vercel.app/)

**Repo:** [Thewni03/Work_Showcase_Thewni](https://github.com/Thewni03/Work_Showcase_Thewni)

## The idea

I wanted my portfolio to feel a little less like a portfolio.

So I made it look like a desktop.

Instead of the usual cards, gradients, and rounded corners, projects appear as **folders scattered across the screen**. Click a folder and it opens into its own little window with the project details inside.

The whole thing follows a **neobrutalist** style — thick black borders, flat colours, hard shadows, slightly tilted elements, and interactions that actually feel clickable.

Basically, **a desktop full of my work.**

## Built with

React + Vite, Tailwind CSS, Framer Motion, and EmailJS.

Deployed on Vercel.

## A few details

* **Content is data-driven** — my bio, skills, and projects live in `src/data/portfolio.json`, so updating the portfolio doesn't mean digging through components.
* **Projects are interactive** — each project is a clickable folder that opens into its own window.
* **The contact form works** — messages are sent through EmailJS without needing a backend.
* **Responsive** — the desktop idea still works on smaller screens.

There are also a few little interactions throughout the site, so don't just scroll past everything. **Click around. **

## Run it locally

```bash
git clone https://github.com/Thewni03/Work_Showcase_Thewni.git
cd Work_Showcase_Thewni
npm install
cp .env.example .env   # add your own EmailJS keys here
npm run dev
```

## Deployment

The portfolio is connected to Vercel, so every push to `main` triggers a new deployment.

EmailJS environment variables are configured separately in Vercel and aren't committed to the repository.

## What's next? -(Future Enhancement)

A few things I'd like to add:

* Real screenshots inside each project folder
* A downloadable resume
* A dark mode version of the desktop

**Built by Thewni Mahathanthri**

*Thanks for visiting my desktop.*
