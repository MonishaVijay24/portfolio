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

## 🖥️ Running from VS Code

The repository includes a ready-made VS Code workspace configuration in the `.vscode/` folder.

### One-time setup

1. **Install recommended extensions** — when you open the folder VS Code will prompt you to install them. Accept, or go to the Extensions sidebar, search `@recommended`, and install them all.

2. **Install Node.js dependencies** (if you haven't already):

   ```bash
   npm install
   ```

### Start the dev server + open browser in one click

Press **`F5`** (or go to **Run → Start Debugging**).  
If a picker appears, choose **"Launch Chrome (Dev Server)"** or **"Launch Edge (Dev Server)"**.  
VS Code will:
1. Run `npm run dev` in a new terminal panel automatically.
2. Wait for Vite to be ready.
3. Open `http://localhost:5173/portfolio/` in a browser with the debugger attached.

You can set breakpoints in any `.jsx` file and they will be hit in the VS Code debugger.

### Start the dev server without the debugger

Press **`Ctrl+Shift+B`** (macOS: **`⇧⌘B`**) to run the **"Start Dev Server"** build task.  
Then open `http://localhost:5173/portfolio/` in your browser manually.

### Stop the server

Click the **Stop** button (⏹) in the debug toolbar, or close the terminal panel that was opened for the task.

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
