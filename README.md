# Monisha Vijay — Portfolio

A single-page portfolio website built with **Vite + React**.

## ✨ Features

- **Hero / Header** — Animated navigation & hero section
- **About** — Personal introduction
- **Skills** — Technology tags grouped by category
- **Projects** — Live-fetched public GitHub repositories (filtered, sorted, with loading & error states)
- **Contact** — Simple contact form (opens your email client)
- Responsive design, dark theme, no heavy UI frameworks

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) ≥ 18
- npm ≥ 9 (comes with Node.js)

### Clone

```bash
git clone https://github.com/MonishaVijay24/portfolio.git
cd portfolio
```

### Install dependencies

```bash
npm install
```

### Run locally

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for production

```bash
npm run build
```

The output is in the `dist/` directory.

### Preview production build

```bash
npm run preview
```

---

## 🌐 Deploy to GitHub Pages (optional)

1. Install the deploy helper:

   ```bash
   npm install --save-dev gh-pages
   ```

2. Add to `package.json` scripts:

   ```json
   "deploy": "gh-pages -d dist"
   ```

3. Build and deploy:

   ```bash
   npm run build && npm run deploy
   ```

4. In your GitHub repository → **Settings → Pages**, set the source branch to `gh-pages`.

> **Note:** `vite.config.js` already sets `base: '/portfolio/'` for GitHub Pages compatibility.

---

## 🗂 Project Structure

```
portfolio/
├── index.html
├── vite.config.js
├── package.json
├── .gitignore
├── README.md
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── App.css
    ├── index.css
    └── components/
        ├── Header.jsx / Header.css   — Nav + Hero
        ├── About.jsx  / About.css    — About section
        ├── Skills.jsx / Skills.css   — Skills section
        ├── Projects.jsx / Projects.css — GitHub repos
        └── Contact.jsx / Contact.css  — Contact form
```

---

## 📜 License

MIT
