# Aekarut Phetpradit — Portfolio

Personal portfolio profile and showcase website built with [Astro](https://astro.build), highlighting software engineering projects across mobile applications, AI & exploratory data analysis, systems performance benchmarks, and open-source contributions.

Hosted statically on [Vercel](https://vercel.com).

## 🚀 Projects Included

Software and applications first, then studies and open-source work (the same order as the site):

- **DroneAid**: Drone-based relief-supply delivery simulator for conflict zones (Flutter + Firebase).
- **ScamReport**: Mobile scam reporting and intelligence feed (Flutter + Elysia.js + TypeBox).
- **Poke Monopoly Rules Helper**: Rulebook chatbot that answers only from cited passages (Python BM25 + Claude Haiku); private repository.
- **NumMaiLai**: Real-time water outage monitor with Discord alerts and GIS dashboard (Python, MWA API).
- **dev-memory-ai**: Semantic codebase memory engine and Model Context Protocol (MCP) server (TypeScript, Tree-sitter, Prisma).
- **Spaceship Titanic EDA**: Kaggle exploratory data analysis with 12 empirical findings (Python, Pandas, Seaborn).
- **Neural Network From Scratch**: Deep learning engine written from first principles in C++ (C++20, Matrix math, MNIST).
- **Basic Memory Access Benchmark**: Cache line access and zero-cost abstraction latency study in C++ (C++20, GCC -O3).
- **Firstmate Contributions**: Open-source pull requests contributed to `kunchenguid/firstmate`.

---

## 🛠️ Local Development

### Prerequisites

- Node.js 20+
- npm (or pnpm / bun)

### Getting Started

```bash
# Clone the repository
git clone https://github.com/AokDesu/portfolio.git
cd portfolio

# Install dependencies
npm install

# Start local development server
npm run dev
```

Visit `http://localhost:4321` in your browser.

### Building for Production

```bash
# Generate static build into dist/
npm run build

# Preview production build locally
npm run preview
```

---

## ☁️ Deploying to Vercel

The portfolio is architected as a pure static site (`output: 'static'`) that builds and deploys to Vercel with **zero configuration**:

1. Log into your [Vercel Dashboard](https://vercel.com/dashboard).
2. Click **"Add New..."** → **"Project"**.
3. Import the `AokDesu/portfolio` repository.
4. Vercel automatically detects the **Astro** framework preset:
   - **Build Command**: `npm run build` (or `astro build`)
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`
5. Click **"Deploy"**. No environment variables or serverless adapters required.

---

## ➕ How to Add a Project

To add a new project to the portfolio:

### 1. Add Artifacts and Documentation
Create a new directory under `src/content/projects/<category>/<project-slug>/` (and mirror in `content/<category>/<project-slug>/`):

```bash
src/content/projects/<category>/<project-slug>/
├── 01-cover.png
├── 02-detail.png
└── about.md
```

Write an `about.md` containing:
- One-paragraph project description
- Technology stack
- Team or solo attribution (describing your specific contributions from evidence)
- Source repository links
- How each numbered screenshot was captured

### 2. Register the Project
Open `src/data/projects.ts` and add an entry to the `PROJECTS` array. Its position is its place in the collection (home page, project index and "next project"): software and applications before studies and contributions.

```typescript
{
  slug: 'my-project',
  title: 'My Project Title',
  category: 'mobile-apps', // 'mobile-apps' | 'ai-data' | 'tools-systems' | 'open-source'
  categoryLabel: 'Mobile Apps',
  summary: 'A 1-2 sentence summary for the home page.',
  lead: 'One line under the project title.',
  description: 'Full one-paragraph description from about.md.',
  stack: ['TypeScript', 'Astro'],
  teamType: 'solo', // 'team' | 'solo'
  teamLabel: 'Solo Project',
  roleNote: 'Individual project.',
  teamCredit: 'Project authored by Aekarut Phetpradit.',
  repoUrl: 'https://github.com/AokDesu/my-project', // null with privateRepo: true for a private repository
  evidence: 'What the images are, for the facts list.',
  cover: [0, 1], // images shown with the opening and on the home page
  stations: [
    { id: 'detail', title: 'A short heading.', copy: 'One or two sentences.', images: [2] },
  ],
  images: [
    {
      srcPath: '/src/content/projects/mobile-apps/my-project/01-cover.png',
      kind: 'phone', // 'phone' | 'browser' | 'paper' | 'window'
      caption: 'What this image shows and how it was produced.',
      alt: 'Short description of what the picture shows.',
    },
  ],
}
```

Layout notes:
- Every project page is generated from this entry by `src/pages/projects/[slug].astro`: an opening with the cover images, one station per entry in `stations`, then the facts and the next project.
- `GalleryLayout.astro` supplies the project index and the pinned-stage CSS. A page opts into the 3D gallery by wrapping its stations in `[data-track]` > `[data-stage]`, marking each station `[data-station]` (with `id` and `data-title`), and placing `<GalleryWorld />` inside the stage. `GalleryWorld.astro` decides whether the scene may run (viewport at least 900×560, no reduced motion, no data-saving, WebGL available, enough memory and cores, not switched to Still view) and only then imports `src/scripts/gallery-world.js` (Three.js). Otherwise, and until every texture and model has loaded, the stations stay in normal flow with their HTML images.
- In 3D, phone captures are shown on the phone model (`public/models/phone.glb`) and every other capture on the monitor model (`public/models/monitor.glb`); `src/scripts/gallery-models.js` fits each model's screen to the capture. Both models are CC0; their sources are in the site footer.
- `Exhibit.astro` owns the still-view frames: `kind` picks the frame, and `scene` makes it an object in the 3D gallery. Every phone on a page uses the same `--phone-w`, so screens shown together match. Phone images are app-only 344×660 captures, never stretched; terminal captures contain only their window, browser captures omit site chrome, and charts retain their own paper.
- Design decisions live in `PRODUCT.md`, `DESIGN.md`, and `.impeccable/`.

### 3. Verify Build
Run the build to ensure images are processed by Astro's optimization pipeline:

```bash
npm run build
```

---

## 🔒 Privacy & Personal Details

In accordance with portfolio policy, the site displays:
- Full Name: **Aekarut Phetpradit**
- Affiliation: **KMUTT student**
- GitHub Profile: [https://github.com/AokDesu](https://github.com/AokDesu)

No personal emails, phone numbers, student IDs, or sensitive tokens are published.
