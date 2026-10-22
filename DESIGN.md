---
version: alpha
name: Aekarut Phetpradit — Work After Dark
description: A continuous night gallery of real software artifacts, with quiet HTML labels and a scroll-driven spatial camera.
colors:
  primary: "#eeeae2"
  secondary: "#aaa9a4"
  tertiary: "#b9d9cd"
  neutral: "#101211"
  surface: "#191d1b"
  line: "#3c423e"
  mobile: "#9bd4c5"
  data: "#dcb997"
  tools: "#afc2db"
  oss: "#d6ce9a"
  graphite: "#272d2a"
  browser-paper: "#e9ecef"
  browser-dot: "#858b8e"
  chart-paper: "#fafafa"
  gallery-light: "#f3e6d0"
typography:
  display: { fontFamily: Archivo Variable, fontSize: 88px, fontWeight: 450, lineHeight: 1, letterSpacing: -0.035em }
  headline-lg: { fontFamily: Archivo Variable, fontSize: 64px, fontWeight: 450, lineHeight: 1.05, letterSpacing: -0.03em }
  headline-md: { fontFamily: Archivo Variable, fontSize: 36px, fontWeight: 450, lineHeight: 1.15 }
  title: { fontFamily: Archivo Variable, fontSize: 24px, fontWeight: 500, lineHeight: 1.3 }
  body-lg: { fontFamily: Archivo Variable, fontSize: 18px, fontWeight: 400, lineHeight: 1.65 }
  body-md: { fontFamily: Archivo Variable, fontSize: 16px, fontWeight: 400, lineHeight: 1.65 }
  label-md: { fontFamily: Archivo Variable, fontSize: 14px, fontWeight: 500, lineHeight: 1.5 }
  label-sm: { fontFamily: Archivo Variable, fontSize: 12px, fontWeight: 400, lineHeight: 1.5 }
rounded:
  none: 0px
  browser: 8px
  phone: 30px
  phone-screen: 22px
  phone-screen-small: 13px
spacing:
  unit: 8px
  small: 16px
  medium: 24px
  large: 48px
  section: 100px
  margin: 72px
components:
  page: { backgroundColor: "{colors.neutral}", textColor: "{colors.primary}", typography: "{typography.body-md}" }
  caption: { backgroundColor: "{colors.neutral}", textColor: "{colors.secondary}", typography: "{typography.label-md}" }
  index: { backgroundColor: "{colors.surface}", textColor: "{colors.primary}", typography: "{typography.label-md}" }
  action: { backgroundColor: "{colors.neutral}", textColor: "{colors.primary}", rounded: "{rounded.none}", padding: 8px }
  rule: { backgroundColor: "{colors.line}", height: 1px }
  mobile-marker: { backgroundColor: "{colors.mobile}", width: 6px, height: 6px }
  data-marker: { backgroundColor: "{colors.data}", width: 6px, height: 6px }
  tools-marker: { backgroundColor: "{colors.tools}", width: 6px, height: 6px }
  oss-marker: { backgroundColor: "{colors.oss}", width: 6px, height: 6px }
  phone-frame: { backgroundColor: "{colors.graphite}", rounded: "{rounded.phone}", padding: 8px }
  browser-bar: { backgroundColor: "{colors.browser-paper}", height: 24px }
  browser-dot: { backgroundColor: "{colors.browser-dot}", size: 6px }
  chart: { backgroundColor: "{colors.chart-paper}", rounded: "{rounded.none}" }
---

# Work After Dark

## Overview

**Concept: Work After Dark.** Aekarut's real software is the light source in a quiet exhibition space. Visitors move through projects, not a grid of decorated cards. The first viewport pairs the name and role with two precisely aligned DroneAid screens; the gallery continues in depth behind them.

Redesign decision: **Replace direction.** The Swiss Poster Series is superseded, including its flat-sheet, square-corner and category-plate rules. The earlier rejected dark card grid remains rejected. Dark is explicitly requested here; cards, chips and ornamental glows are not.

Fixed: static Astro/Vercel, real captured evidence, honest team credit, HTML text, direct project access, the approved personal details, complete non-3D access. Flexible: composition, light, framing, typography weights. Assumption: retain the already self-hosted Archivo rather than add a font download.

Primary aesthetic: restrained dark gallery. Layout: continuous spatial exhibition plus a compact index. Material: real device models in graphite (one phone, one monitor), dark stone-like plinths, untinted screens. Motion: camera translation with restrained pointer parallax, not perpetual spinning. Runner-up: glass-led full-canvas controls; declined because reflective chrome would compete with the work.

## Colors

Primary is warm white ink; secondary is muted ink; tertiary is the focus/action accent; neutral is the near-black stage. Category colors mark small dots and exhibit lines only, never image backgrounds. Text sits on a solid or nearly opaque dark reading plane, not over uncontrolled bright screenshots. Charts retain their own paper color.

## Typography

Archivo Variable throughout; normal width, 400–500 for text, 450 for large titles. No condensed poster weights. Home display is fluid from 48px to 88px; DroneAid display from 64px to 96px; section titles 36px to 64px. Body 16–18px at 1.6–1.65, max 65ch. Captions 14px desktop, 13px phone. No eyebrow headings, artificial uppercase, metadata chips or decorative monospace. English interface; Thai inside captures is left untouched.

## Layout

Desktop: fluid outer margins clamp(20px, 4.5vw, 72px), a 5:6 text/art split with 6vw gap, left-side wall labels and right-side exhibits. A fixed top navigation exposes the project index without a flight. Every station has a real HTML title, summary, credit and direct detail link.

**Pinned stage (3D running).** The collection becomes one sticky 100vh stage; all stations share it and the scene's camera decides which one is in front. Each station owns one viewport of native scroll: it rests for the first 30% and last 15%, and the camera flies to the next station in between. Labels cross-fade with a 48px drift that follows the camera; captions appear only once their exhibit has settled. A bottom rail names the current station and links to every station; in-page links, the rail and keyboard focus move the camera to the station instead of relying on anchor scroll. When the stage ends, the page continues in normal flow (DroneAid facts, footer) and the navigation regains its solid bar. No wheel interception or scroll-jacking: native scroll is authoritative, the camera follows it with damping.

**Normal flow (no 3D).** Below 900px wide or 720px tall, and whenever the scene is not running, every station is a normal-flow section: text, then artifact on desktop's 5:6 grid or stacked on phones, equal-width phones sharing one baseline. No horizontal pan or tiny 3D text. At 390px, 20px gutters; at 320px, 16px. Long project names wrap. Facts become single-column rows when necessary.

## Elevation & Depth

One Three.js scene per page, one perspective camera (36° vertical FOV) and one continuous floor. Stations stand 17 units apart in depth; each next station sits 2.2 units further left, so the camera always passes beside the exhibit it leaves, never through it. At rest the camera is exactly 9 units in front of a station, and every mesh is built from its HTML placeholder's rectangle, so the 3D exhibit occupies the same place and size as the still image and its caption. Paired phones turn 8.6° toward each other in a symmetric V; single exhibits turn 5° toward their wall label.

Light falls on the work: each station has a plinth reaching to the floor, a faint additive light beam from above, a warm light pool on the floor and a 1px category-colour line on the plinth's front edge (the only category colour in the scene). The exhibits are real 3D models, both CC0 from Poly Pizza and free of brand marks: "Smartphone" by smallbigsquare (19 KB) for every phone capture, "Monitor" by CreativeTrio (15 KB) for every terminal, browser, chart and diagram capture. Only their geometry is used, in the gallery's graphite; the capture is an unlit texture on the device's screen, so screens read as glowing. The phone is scaled so its display is exactly the capture's 344:660 rectangle. The monitor is fitted with a nine-slice: its screen stretches to the capture's aspect while bezel, neck and base keep the model's proportions, and it stands on the plinth; in 3D the HTML caption moves down by the stand's height so it still sits on the plinth. A warm key light and a cool rim light model the devices. Fog fades the next station into darkness. No particles, bloom passes, orbit toys or fake KPI sculptures.

HTML images exist and are visible before the library loads; the 3D layer replaces them only after every texture has loaded, in the same frame the stage pins. Captions and accessible image descriptions stay in the DOM. WebGL unavailable or lost, reduced motion, small viewports, data-saving, low memory/cores and sustained slow frames keep the normal-flow version; Three.js is not even downloaded when the check fails up front. Visitors can choose still view at any time; the choice persists across pages.

The canvas has a dark reading mask behind the label column (0–46% width) and soft top and bottom fades. In the still view, a warm radial light pool sits behind each exhibit so the gallery lighting survives without WebGL. Artifact shadow: 0 30px 60px -20px rgb(0 0 0 / .55). Index shadow: 0 24px 72px rgb(0 0 0 / .4). These are separation shadows, not colored halos.

## Shapes

Phone viewport: **344×660**, every screen at this aspect ratio, and **one phone width per page** (`--phone-w`: up to 56vh of height (54vh in 3D), half the art column, 280px cap (270px in 3D); on phones half the content width, 210px cap). Every phone exhibit, single or paired, uses it, so any two screens shown together match. Shared graphite frame proportional to that width: 3% inset, 8.5% inner and 11.5% outer radius (about 8px / 22px / 30px at desktop size), matching the phone model's bezel in 3D. No stretching or cropping app content to fill it. Pairs share size, orientation and baseline. Browser viewport: 8px corners, small shared neutral header; no GitHub global navigation in the capture. Terminal: captured window only, no added second titlebar. Charts and architecture: square paper, tightly cropped with readable labels. Wide exhibits are capped at 52vh tall (40vh in 3D, leaving room for the monitor's stand) and 90% of the art column; their caption carries an "Open full size" link.

## Components

Foundation: semantic Astro/HTML and CSS, no UI framework. Native details/summary is the always-available project index. Native links remain functional without JavaScript. Buttons use 44px minimum targets, 2px accent focus outlines and visible text states.

GalleryWorld: one progressive Three.js enhancement, dynamically imported two frames after content paints, and only when the capability check passes. Exhibit: real optimized Astro images with one figcaption per figure, reused as textures on the phone or monitor model; `kind` is phone, browser, paper or window. Stage: the `[data-track]` collection with a `[data-stage]` that pins only while the scene runs. Rail: current station name plus one link per station, shown only on the pinned stage. ProjectLabel: selectable HTML heading, summary, category, credit, detail link. Facts: definition list, not chips. Footer: name, role, GitHub only.

## Do's and Don'ts

- Do show the artifact in the first viewport, keep exact screen aspect ratios and symmetric pairs.
- Do keep a direct route to every project and all facts in HTML.
- Do preserve natural scrolling, keyboard navigation, image zoom and source links.
- Do use category color sparingly and lighting only to explain physical depth.
- Don't revive colored plates, the expanding column accordion, heavy condensed poster type or a dark card grid.
- Don't hide content for an entrance animation, draw text in WebGL, require a GPU, distort screenshots, or imply a prototype is a running production app.
- Don't use device models with brand marks or licences that need more than a credit; every model is credited in the footer.

## Motion

Camera follows the scroll position with time-based exponential damping (rate 7/s); the flight between stations uses a quintic smootherstep, a 0.8-unit lift at mid-flight and a look target that turns toward the next station slightly ahead of the body. Pointer parallax is bounded to ±0.25 × ±0.14 units and damped at 4/s. On first load at the top, the camera dollies in from 6.5 units back (decay 2.4/s). Cross-page navigation uses a 420ms cross-document view transition. UI transitions 240–400ms with cubic-bezier(0.16, 1, 0.3, 1). Render only while something is moving; stop in background tabs and dispose on page exit. Still view and reduced motion never start the scene and retain complete content; reduced motion also disables view transitions. No auto-rotation, scroll-jacking or continuous idle animation.

## Signature Details

- Two matching screen frames, equal size and baseline, turned toward each other in a symmetric V: software shown as a coherent system rather than mismatched mockups.
- One continuous floor with a plinth, beam and light pool per station, and real phone and monitor models on the plinths: the camera travels through one collection rather than separate isolated effects.
- The still image and the lit 3D exhibit occupy the same rectangle, so switching views or losing WebGL never moves the work.
- Quiet wall-label facts: the work is spectacular; the evidence stays matter-of-fact.

## References

- Primary: the captain's approved Night gallery / Full 3D world board, supplied in the brief; binding direction, not an externally viewed image.
- Incumbent: live portfolio viewed in Chrome on 2026-10-22; before capture in task preview evidence. Preserve facts, not plates.
- Secondary: Dark Luxury and Glass direction registries, read 2026-10-22. Adopt spatial pacing and a separate control layer; do not copy luxury branding, serif defaults or glass cards. External reference sites remain unverified.
- Component foundation: native HTML/Astro already in this repo. Three.js 0.186.1 selected for actual shared perspective geometry without a React runtime.

## Screens

Home problem: eight colored strips crop evidence and repeat into colored bands. Replacement: one pinned stage the camera flies through, opening on the name, role and the DroneAid pair, then one station per project in collection order (applications first: DroneAid, ScamReport, Poke Monopoly Rules Helper, NumMaiLai, dev-memory-ai; then Spaceship Titanic EDA, Neural Network From Scratch, Basic Memory Access Benchmark, Firstmate Contributions), each with an HTML wall label and its cover exhibit on a lit plinth; a rail and the project index reach any project without flying through the rest. Default/loading/error state is the complete static gallery, never a loading screen.

Project pages problem: 520×1126 images contained a 344×660 phone surrounded by prototype-page padding; other captures carried dark padding, GitHub's site bars and colour plates. Replacement: one template for every project. An opening station (title, lead, summary, credit, the cover exhibit), one station per authored stop in the project's data (a short heading, one or two sentences, a matched phone pair or one capture), then a normal-flow facts section (context, stack, contribution, what the images are, image credits, pull requests, source or "Private repository") and the next project. Every image appears once. DroneAid: request/tracking pair, then the two roles, then the architecture. The rail reads the project name at the opening and "Project · Station" after it.

## Accessibility

Text contrast ≥4.5:1; large type ≥3:1. Visible focus, skip link, semantic landmarks, native keyboard controls, ≥44px targets. No information encoded only by color or motion. Image alt text describes evidence. No canvas text; canvas aria-hidden. All images and links remain present with JavaScript disabled. Static mode is not a reduced-content page.

## Migration Decisions

- Preserve project data, routing, captions' provenance, team credit, source links, image optimization and native scrolling.
- Replace ProjectRow and ProjectBand on the home page with the continuous gallery; remove obsolete unused components.
- Recompose the shared shell for the night gallery; every project page uses the new gallery template and the old Swiss detail layout is removed.
- Replace paper #f2f3f4 / ink #141414 with stage #101211 / ink #eeeae2; soft ink #4a4a46 becomes #aaa9a4.
- Replace region-scale #1f3fd1/#ff5a1f/#0a7148/#ffd21a with small #9bd4c5/#dcb997/#afc2db/#d6ce9a accents.
- Keep Archivo and exponential easing; replace 750–820 condensed headings with 450 normal-width headings.
- Replace square flat plates with artifact-specific frames and real scene depth. High risk: GPU failure and motion sensitivity; mitigate with visible-by-default HTML and explicit still mode.

## Removed

Colored capture plates (compete with artifacts); sliver-filter navigation (hides project names); filename-as-primary-caption (obscures meaning); artificial loading/reveal states (delay evidence). Category filtering remains in the direct project index, with all projects recoverable through All Projects.
