# Aekarut Phetpradit — Portfolio

Personal portfolio profile and showcase website built with [Astro](https://astro.build), highlighting software engineering projects across mobile applications, AI & exploratory data analysis, systems performance benchmarks, and open-source contributions.

Hosted statically on [Vercel](https://vercel.com).

## 🚀 Projects Included

- **DroneAid**: Drone-based relief-supply delivery simulator for conflict zones (Flutter + Firebase).
- **ScamReport**: Mobile scam reporting and intelligence feed (Flutter + Elysia.js + TypeBox).
- **Spaceship Titanic EDA**: Kaggle exploratory data analysis with 12 empirical findings (Python, Pandas, Seaborn).
- **Neural Network From Scratch**: Deep learning engine written from first principles in C++ (C++20, Matrix math, MNIST).
- **Basic Memory Access Benchmark**: Cache line access and zero-cost abstraction latency study in C++ (C++20, GCC -O3).
- **NumMaiLai**: Real-time water outage monitor with Discord alerts and GIS dashboard (Python, MWA API).
- **dev-memory-ai**: Semantic codebase memory engine and Model Context Protocol (MCP) server (TypeScript, Tree-sitter, Prisma).
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
Open `src/data/projects.ts` and append a new entry to the `PROJECTS` array:

```typescript
{
  slug: 'my-project',
  title: 'My Project Title',
  category: 'mobile-apps', // 'mobile-apps' | 'ai-data' | 'tools-systems' | 'open-source'
  categoryLabel: 'Mobile Apps',
  summary: 'A short 1-2 sentence card summary.',
  description: 'Full one-paragraph description from about.md.',
  stack: ['TypeScript', 'Astro', 'TailwindCSS'],
  teamType: 'solo', // 'team' | 'solo'
  teamLabel: 'Solo Project',
  teamCredit: 'Project authored by Aekarut Phetpradit.',
  repoUrl: 'https://github.com/AokDesu/my-project',
  coverImage: '/src/content/projects/mobile-apps/my-project/01-cover.png',
  images: [
    {
      srcPath: '/src/content/projects/mobile-apps/my-project/01-cover.png',
      caption: 'Detailed explanation of what this image shows and how it was produced.',
    },
  ],
}
```

Layout notes:
- Each category has one flat colour, defined as `--mobile`, `--data`, `--tools`, `--oss` in `src/layouts/Layout.astro`. A new category needs a colour and an `--on` text colour that reaches 4.5:1 contrast on it.
- Images taller than 1.6× their width are treated as phone screens: they sit side by side on a coloured shelf. Every other image gets its own wide plate. Images are never upscaled past their source width.
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
