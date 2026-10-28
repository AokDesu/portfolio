---
version: alpha
name: Aekarut Phetpradit — Colour Chapters
description: Each project's own interface colour becomes the field the visitor scrolls through; real captures sit large and untouched beside plain, large type.
colors:
  neutral: "#F6F6F3"
  paper-2: "#EBEBE5"
  primary: "#111311"
  ink-2: "#464A45"
  on-dark: "#FFFFFF"
  scamreport: "#006B6B"
  scamreport-action: "#F4B740"
  rules-helper: "#C80E2C"
  droneaid: "#6DF5F4"
  droneaid-ink: "#052726"
  nummailai: "#2F6690"
  dev-memory: "#6AC173"
  dev-memory-ink: "#0B1F0E"
  neural-network: "#9DBF45"
  neural-network-ink: "#10170A"
  memory-benchmark: "#5AA7F7"
  memory-benchmark-ink: "#06192B"
  firstmate: "#8152DB"
  spaceship: "#2570CF"
  phone-bezel: "#0D0F0D"
  browser-chrome: "#E6E8E5"
  chart-paper: "#FAFAFA"
typography:
  display: { fontFamily: "Archivo Variable", fontSize: 188px, fontWeight: 800, lineHeight: 0.86, letterSpacing: "-0.02em" }
  headline: { fontFamily: "Archivo Variable", fontSize: 92px, fontWeight: 800, lineHeight: 0.9, letterSpacing: "-0.015em" }
  lead: { fontFamily: "Archivo Variable", fontSize: 25px, fontWeight: 500, lineHeight: 1.32 }
  body: { fontFamily: "Archivo Variable", fontSize: 18px, fontWeight: 400, lineHeight: 1.55 }
  small: { fontFamily: "Archivo Variable", fontSize: 15px, fontWeight: 500, lineHeight: 1.45 }
rounded:
  tab: 14px
  window: 12px
  panel: 16px
  paper: 4px
  pill: 999px
spacing:
  margin: 56px
  gap: 72px
  pair-gap: 28px
  phone-width: 250px
components:
  page: { backgroundColor: "{colors.neutral}", textColor: "{colors.primary}", typography: "{typography.body}" }
  folder-tab: { backgroundColor: "{colors.scamreport}", textColor: "{colors.on-dark}", rounded: "{rounded.tab}", padding: "10px 22px", height: 58px }
  chapter: { backgroundColor: "{colors.scamreport}", textColor: "{colors.on-dark}", padding: "112px 56px" }
  button-primary: { backgroundColor: "{colors.on-dark}", textColor: "{colors.scamreport}", rounded: "{rounded.pill}", padding: "0 26px", height: 56px }
  button-source: { backgroundColor: "{colors.scamreport-action}", textColor: "{colors.primary}", rounded: "{rounded.pill}", padding: "0 26px", height: 56px }
  menu-panel: { backgroundColor: "{colors.primary}", textColor: "{colors.neutral}", rounded: "{rounded.panel}", padding: 10px }
  phone-frame: { backgroundColor: "{colors.phone-bezel}", rounded: "{rounded.window}", width: "{spacing.phone-width}" }
  browser-frame: { backgroundColor: "{colors.browser-chrome}", rounded: "{rounded.window}" }
  footer: { backgroundColor: "{colors.primary}", textColor: "{colors.neutral}" }
---

# Design System: Aekarut Phetpradit — Colour Chapters

## Overview

**Creative North Star: "Colour Chapters"**

Each project's own interface colour becomes the field the visitor scrolls through, so the portfolio is as colourful as the work and the colour is never decoration. The nine field colours were sampled from the projects' own captures (ScamReport v2's teal, the Rules Helper's Pokédex red, DroneAid's aqua, NumMaiLai's water blue, dev-memory-ai's terminal green, the network's results lime, the benchmark's throughput blue, GitHub's merged purple, the Titanic charts' blue) and adjusted only where text needed 4.5:1.

Redesign decision (2026-10-28, owner's direction board): **replace direction.** "Work After Dark", the Three.js night gallery (DESIGN.v1.md), is retired with its models, stage and camera. Kept from v1: real captures as the visual lead, honest captions and credits, one phone width per page, a full reading experience without script or motion. Runner-up on the board: Sticker Lid (projects as die-cut stickers on a yellow laptop lid).

**Key Characteristics:**
- Paper ground and near-black ink; nine flat fields in the projects' own colours.
- One family, Archivo Variable, condensed and heavy for titles, normal width for reading.
- Full-screen chapters that pin and slide over each other on large screens.
- Captures untinted, uncropped, in matched frames; no lines, rest shadows, gradients or glass.

## Colors

Strategy: full palette at page scale. Colour owns whole sections; it never decorates a neutral template.

### Neutral
- **Paper** (`neutral`, #F6F6F3): page ground, paper stations, facts. **Paper 2** (#EBEBE5) is reserved for a tone step.
- **Ink** (`primary`, #111311): running text on paper (17.2:1), the footer ground, the Projects menu panel. **Ink 2** (#464A45) is the scrollbar thumb only.
- White (`on-dark`) is text on fields and deep stations only, never on paper (the contrast checker's three white-on-paper "fails" are pairs the site never uses).

### Project fields
Each project record carries `color` and `ink` in `src/data/projects.ts`; every pair is at least 4.5:1 (lowest: Spaceship #2570CF with white, 4.89). The field colours the project's home chapter, its folder tab, its page opening and top bar, and the next-project band that points to it. Deep stations use `color-mix(in oklab, field 34%, #0B0C0B)` with white text.

### Named Rules
**The Own Colour Rule.** A project's colour comes from its own interface. A new project gets a colour sampled from its captures, checked to 4.5:1 with its text colour, before it gets a chapter.

**The Name Beside Colour Rule.** Colour never identifies a project alone: every field carries the project's name.

## Typography

**Font:** Archivo Variable (self-hosted, `@fontsource-variable/archivo/wdth.css`, width 62–125%). Site copy is English; Thai appears only inside captures, so no Thai web font is loaded.

Sizes and spacing in the frontmatter are the desktop maxima; the shipped CSS (`src/layouts/SiteLayout.astro`) scales them fluidly with the `clamp()` values given below.

### Hierarchy
- **Display** (800, width 66–68%, clamp(64px, 11.6vw, 188px), leading 0.86, tracking -0.02em): the name on the home page and footer, a project's title on its page.
- **Headline** (800, width 70–72%, clamp(44px, 5.8vw, 92px), leading 0.9): chapter titles, station titles, "About the project", the next project. Project titles over 18 characters, or with a word of 12+ characters, take the smaller step (clamp(40px, 4.4vw, 68px) on home, clamp(52px, 6.6vw, 112px) on a project page). Station titles step down at 25+ characters (clamp(32px, 3.4vw, 56px)) and 37+ characters (clamp(28px, 2.7vw, 44px)) so none passes two lines.
- **Lead** (500, clamp(20px, 1.6vw, 25px), leading 1.32): the line under a title, the role line, folder tab names.
- **Body** (400, 18px, leading 1.55, max 46ch in chapters, 60ch in facts): all running text, in the full ink of its ground.
- **Small** (500, 15px): captions, category labels on tabs, fact labels (700).

### Named Rules
**The Two Lines Rule.** No title wraps past two lines at any width.

## Layout

- One pair of outer margins, clamp(20px, 3.4vw, 56px), everywhere.
- Home: first screen = the name, role and intro line beside the nine folder tabs (the project list, the owner's order). Then one chapter per project: text (0.9fr) beside its cover captures (1.1fr).
- Project page: field-coloured opening (title, lead, category and credit, source or "Private repository", PR links, "All projects"; captures on the right), then one station per stop, alternating column order and ending on a deep tone, then facts on paper, the next-project band, the footer.
- Below 900px wide every two-column block stacks text first; phones pair at half the content width (max 220px).
- Wide captures are capped in height by `--art-max-h` (68svh on home, 66svh in the opening, 70svh in stations) so a chapter fits one screen.

## Elevation & Depth

Flat. Surfaces separate by a change of field or a tone step, never by a line or a rest shadow. The one depth cue is the order of the sliding chapters: the later chapter lies over the earlier one. The Projects menu panel floats and is told apart by its ink ground, not a shadow.

## Shapes

- Folder tabs: 14px top corners, 4px bottom (10px/3px in the menu).
- Windows and the shared browser frame: 12px. Chart paper: 4px. Phone bezel: 13% of the phone width, screen 10%.
- Buttons are full pills. No other radii.

## Components

### Buttons
- **Primary** (`.btn`): pill, 56px tall, the field's ink as fill and the field colour as text ("Open project", "Source on GitHub", "Repository").
- **Ghost** (`.btn.ghost`): transparent with a 2px border in the field's ink (pull-request links).
- Motion: hover lifts 3px and the arrow moves 4px; press scales to 0.97 in 90ms. Focus: 3px outline in the current text colour, 4px offset.

### Folder tabs (signature)
`Folders.astro`: an ordered list of the nine projects, each a full-width link in its field with the name (left) and category (right). Hover and focus slide the tab 10px right. The same list sits in the top bar's Projects menu, compact.

### Chapters and stations (signature)
`.chapter` sections are full-viewport fields. On screens at least 900×640 with motion allowed they are `position: sticky; top: 0`, so each slides over the last; `src/scripts/motion.ts` releases any chapter taller than the window (`.loose`). Every chapter has an in-flow anchor (`span.anchor`) before it, so `/#slug` links land correctly.

### Captures
`Exhibit.astro` frames each capture by kind: phone (bezel, one width per page, the capture's own ratio), browser (shared light bar), window, paper. Captions state what the picture is and how it was made, with "Open full size" for wide captures. A missing image fails the build.

### Navigation
Top bar: wordmark (home), Projects menu (details/summary; Escape and an outside click close it), GitHub. On a project page the bar takes the project's field.

### Footer
Ink ground, the name at display size, the role line, the GitHub link, then the image credit line.

## Motion

- **Entrances:** `[data-rise]` groups (title, text, pictures) rise 28px with opacity, 760ms `cubic-bezier(0.16, 1, 0.3, 1)`, 85ms apart, once, when the group enters. Content is hidden only while the `js` class is present and motion is allowed; a 2.5s fallback removes the class if the script never runs.
- **Sliding chapters:** described above.
- **Page morph:** native cross-document view transitions (`@view-transition { navigation: auto }`, no router). The clicked folder tab, chapter or next-project band is named `field`/`title` on `pageswap` and morphs into the next page's opening (520ms); going back names the project's chapter on `pagereveal` (render-blocking head script).
- **Reduced motion:** no entrances, no pinning, no smooth scroll, no view transitions. Browsers without cross-document view transitions navigate normally.

## Do's and Don'ts

### Do:
- **Do** take a new project's colour from its own captures and check it to 4.5:1 with its text colour.
- **Do** show captures at their own ratio, untinted, with a caption that says how they were made.
- **Do** keep every phone on a page the same width.
- **Do** keep each chapter within one screen on desktop, or let it release (`.loose`).
- **Do** keep content visible without script and with reduced motion.

### Don't:
- **Don't** put a label above a heading; fold the category and credit into the line under it.
- **Don't** add lines, rest shadows, gradients, glass or icon cards.
- **Don't** set running text in a soft grey; use the full ink of its ground.
- **Don't** name a client or marketplace, or add personal details beyond the name, "KMUTT student · Software Developer" and github.com/AokDesu.
- **Don't** bring back 3D models, WebGL or a camera ride.

## Migration from v1 (Work After Dark)

| v1 | v2 |
|---|---|
| Near-black stage #101211, warm ink #EEEAE2 | Paper #F6F6F3, ink #111311, nine project fields |
| Category colour as 6px dots | Each project's own colour as whole fields |
| Archivo 450 at normal width, body 13–16px | Archivo 800 condensed titles, body 18px |
| Three.js scene, GLB phone and monitor models, Poly Pizza credit, Still view switch, station rail | Removed; sticky chapters and cross-document view transitions |
| 30px rest shadows, 1px rules | None |
| GalleryLayout, GalleryWorld, gallery-world.js, gallery-models.js | SiteLayout, Folders, motion.ts |
