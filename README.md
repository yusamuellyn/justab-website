# Justab — Landing Page

A pixel-faithful recreation of the Justab landing page, built with **React + Vite**.

## Develop

```bash
npm install
npm run dev
```

Open the printed local URL (default http://localhost:5173).

## Build

```bash
npm run build      # outputs to /dist
npm run preview    # preview the production build
```

## Deploy to Vercel

This project is zero-config on Vercel.

1. Push this folder to a Git repository (GitHub/GitLab/Bitbucket).
2. In Vercel, **Add New → Project** and import the repo.
3. Vercel auto-detects Vite: Build Command `npm run build`, Output Directory `dist`.
4. Click **Deploy**.

Or from the CLI:

```bash
npm i -g vercel
vercel
```

## Tech

- React 18
- Vite 6
- Plus Jakarta Sans (Google Fonts)
- Inline SVG icons, no external UI libraries
