---
version: 1
slug: src-pages-index-astro
primary_target: src/pages/index.astro
related_targets: ["src/pages/projects/droneaid.astro", "src/layouts/GalleryLayout.astro", "src/components/GalleryWorld.astro", "src/components/Exhibit.astro", "src/scripts/gallery-world.js"]
---

# Night gallery — home and project evidence

Mode: Experience. Captain-approved direction: Full 3D world + Night gallery. Preview scope is home and DroneAid; stop for review before other detail pages and Rules Helper.

THESIS: Real software artifacts are lit exhibits in one continuous near-black space. Scroll moves the camera from station to station; text remains real HTML on a pinned stage. Direct project access takes precedence over spectacle.

FIRST VIEWPORT: Name and exact role at left, two equally sized DroneAid phones at right in a symmetric V on a lit plinth, the next station faint in the fog. Quiet transparent navigation at the top with the project index; a station rail at the bottom. On first load the camera dollies in once. No full-screen introduction or loading gate.

FORM: One sticky stage, eight stations on home and three on DroneAid, each one viewport of native scroll: rest, fly, rest. Graphite frames, plinths, a beam and a floor light pool per station, a 1px category line on each plinth. Warm-white Archivo at normal width. One phone width per page for every phone.

STORY: See real work immediately; scroll through the collection, jump with the rail, or open any project from the index. DroneAid opens on the same pair as its home station, then shows the two roles, the architecture, and the facts in normal flow.

CONSTRAINTS: All content static HTML before Three.js loads; the scene replaces images only after every texture has loaded. Narrow/short viewports, weak devices, reduced motion, no WebGL, context loss and the still-view choice keep the entire normal-flow content. No tag chips, card grid, colored plates, invented metrics or additional personal details.

Direction round: explicit board choices supersede concept seed 5bc64d38. Candidate worlds considered: night exhibition, photographic light table, projection room, architectural model gallery, archive reading room, record sleeve, engineering drawing. Comic/punk/brocade/skin/phosphor/risograph challengers declined: their expressive state vocabularies confuse a recruiter's evidence scan.

Verification: desktop and phone browser captures at several scroll positions, mid-flight frames, still view, reduced motion (forced flag) and WebGL-disabled runs, keyboard Tab through stations, rail and deep links. Task evidence lives outside the worktree under data/portfolio-refresh/preview/.
