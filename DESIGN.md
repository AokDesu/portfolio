---
name: Aekarut Phetpradit — Portfolio
description: A Swiss exhibition poster series for eight real projects; four flat category fields on cool paper, Archivo set large and flush-left.
colors:
  paper: "#f2f3f4"
  ink: "#141414"
  ink-soft: "#4a4a46"
  rule: "#141414"
  mobile: "#1f3fd1"
  mobile-on: "#ffffff"
  data: "#ff5a1f"
  data-on: "#141414"
  tools: "#0a7148"
  tools-on: "#ffffff"
  oss: "#ffd21a"
  oss-on: "#141414"
typography:
  display:
    fontFamily: "'Archivo Variable', 'Helvetica Neue', Arial, sans-serif"
    fontSize: "clamp(2.75rem, 7.4vw, 6rem)"
    fontWeight: 820
    lineHeight: 0.9
    letterSpacing: "-0.035em"
    fontVariation: "'wdth' 86"
  headline:
    fontFamily: "'Archivo Variable', 'Helvetica Neue', Arial, sans-serif"
    fontSize: "clamp(2rem, 3.6vw, 3.25rem)"
    fontWeight: 780
    lineHeight: 0.98
    letterSpacing: "-0.03em"
    fontVariation: "'wdth' 86"
  title:
    fontFamily: "'Archivo Variable', 'Helvetica Neue', Arial, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 720
    lineHeight: 1.5
    letterSpacing: "-0.01em"
  column-title:
    fontFamily: "'Archivo Variable', 'Helvetica Neue', Arial, sans-serif"
    fontSize: "clamp(1rem, 1.25vw, 1.1875rem)"
    fontWeight: 720
    lineHeight: 1.08
    letterSpacing: "-0.015em"
    fontVariation: "'wdth' 90"
  body:
    fontFamily: "'Archivo Variable', 'Helvetica Neue', Arial, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.55
    fontFeature: "'tnum'"
  body-small:
    fontFamily: "'Archivo Variable', 'Helvetica Neue', Arial, sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 400
    lineHeight: 1.5
    fontFeature: "'tnum'"
  label:
    fontFamily: "'Archivo Variable', 'Helvetica Neue', Arial, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 600
    lineHeight: 1.45
  label-small:
    fontFamily: "'Archivo Variable', 'Helvetica Neue', Arial, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 520
    lineHeight: 1.3
  mono:
    fontFamily: "ui-monospace, 'SF Mono', Menlo, Consolas, monospace"
    fontSize: "0.75rem"
    fontWeight: 400
spacing:
  margin: "clamp(16px, 3.4vw, 48px)"
  gutter: "clamp(12px, 1.7vw, 24px)"
  field-gap: "6px"
components:
  filter:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    padding: "7px 12px"
  filter-pressed-all:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
  filter-pressed-mobile:
    backgroundColor: "{colors.mobile}"
    textColor: "{colors.mobile-on}"
  row-column-mobile:
    backgroundColor: "{colors.mobile}"
    textColor: "{colors.mobile-on}"
    typography: "{typography.column-title}"
    height: "clamp(340px, 46svh, 480px)"
  row-column-phone:
    height: "50px"
  poster-header-tools:
    backgroundColor: "{colors.tools}"
    textColor: "{colors.tools-on}"
    typography: "{typography.display}"
  pager-tile-oss:
    backgroundColor: "{colors.oss}"
    textColor: "{colors.oss-on}"
    padding: "18px clamp(16px, 3.4vw, 48px) 22px"
  colophon:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    padding: "clamp(40px, 5vw, 72px) clamp(16px, 3.4vw, 48px)"
  skip-link:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    padding: "10px 14px"
---

# Design System: Aekarut Phetpradit — Portfolio

## Overview

**Creative North Star: "The Swiss Poster Series"**

The site reads as a series of International Typographic Style exhibition posters hung in one strict modular grid. Cool white paper carries near-black ink. Four flat process colours each stand for exactly one project category, and colour is applied to whole regions: the Row, the plates behind the captures, the project page header, and the pager tiles. There is no ornament. Hierarchy comes from Archivo's weight and width axes, from position on the 12-column grid, and from ink rules that divide the sheet.

Density is poster-like. A few very large elements sit over a lot of quiet paper, and the small text is set tight and exact. The home page shows the whole body of work at once as one row of colour columns, then repeats each project as a band with a spec table and a plate. Each project page is a poster: a full-width colour header, a spec table beside the prose, and captured evidence standing on colour plates.

The world rejects two things, as stated in the direction contract: the dark card grid with tag chips (the look it replaced), and the cream-serif editorial page.

This North Star comes from the direction contract's THESIS and FORM. No live naming interview took place.

**Key Characteristics:**
- One 12-column grid (`.grid`) with fluid outer margin and gutter, shared by every section.
- Four flat category fields, applied at region scale, each with a paired text colour that clears 4.5:1.
- Archivo Variable sets all interface text (a system mono is used only for image filenames); weight 450–820 and width 86–100% carry the hierarchy.
- Square corners everywhere, no shadows, no gradient surfaces. Structure comes from 2px and 1px ink rules.
- Captures sit on the bottom edge of their colour plate, all standing on one shared baseline, and are never tinted.
- A single exponential ease-out curve drives all motion. Reduced motion turns everything off.

## Colors

The palette is cool paper and near-black ink plus four saturated process colours. Each process colour means exactly one category.

### Category fields (coequal; one per category, never ranked)
- **Ultramarine** (`mobile`): Mobile Apps. Uses white text (`mobile-on`).
- **Signal Orange** (`data`): AI & Data. Uses ink text (`data-on`).
- **Deep Green** (`tools`): Tools & Systems. Uses white text (`tools-on`).
- **Process Yellow** (`oss`): Open Source. Uses ink text (`oss-on`). (The build also uses it for the global `::selection` highlight. That is a known deviation from the One Field, One Meaning Rule, not a pattern to extend.)

Category colour is bound through the cascade. An element with `data-category="mobile-apps" | "ai-data" | "tools-systems" | "open-source"` receives `--c` (field) and `--on` (text on field). Components read only `--c` and `--on`, never a category hex directly.

### Neutral
- **Cool Paper** (`paper`): page ground, `theme-color`, and text on the ink colophon.
- **Press Ink** (`ink`): all primary text, the "All" filter when pressed, the colophon field, and the skip link.
- **Soft Ink** (`ink-soft`): secondary text, meaning the home intro, spec values (`dd`), and filename captions.
- **Rule** (`rule`, same value as ink): section rules and spec-table hairlines.

### Named Rules
**The One Field, One Meaning Rule.** Each process colour stands for exactly one category. Bind it through `data-category` and read it as `--c` / `--on`. Never use a category colour as decoration on something that does not belong to that category.

**The Region-Scale Rule.** Colour commits to whole regions: a Row column, a plate, a poster header, a pager tile, or a filled filter. Inside text, category colour appears only as a solid square swatch (0.7–0.75em) or a title underline bar.

**The Paired Text Rule.** Text on a field always uses that field's `-on` colour (white on ultramarine and green, ink on orange and yellow). Never put white on orange or yellow.

## Typography

**Display Font:** Archivo Variable with the width axis (with 'Helvetica Neue', Arial, sans-serif)
**Body Font:** Archivo Variable (same stack)
**Label/Mono Font:** ui-monospace, 'SF Mono', Menlo, Consolas, monospace. Used only for image filenames in figure captions.

**Character:** A single neo-grotesk does all the work. The heavy, slightly condensed cuts (wdth 86–90) make the display and headline levels, and normal-width 400–650 weights make the reading text. Tabular figures are on globally (`font-variant-numeric: tabular-nums` on `html`), so counts and numbers align. In code, width is set with `font-stretch` (86%, 88%, 90%).

### Hierarchy
- **Display** (820, wdth 86, `clamp(2.75rem, 7.4vw, 6rem)`, line-height 0.9, -0.035em): the home name, set over two lines. The project-page title uses the same treatment at `clamp(2.75rem, 7vw, 6rem)` with line-height 0.92 and `text-wrap: balance`.
- **Headline** (780, wdth 86, `clamp(2rem, 3.6vw, 3.25rem)`, 0.98, -0.03em): home band titles. Two siblings share the treatment: the pager title (780, wdth 86, `clamp(1.5rem, 3vw, 2.75rem)`, line-height 1) and the colophon name (750, wdth 88, `clamp(1.5rem, 2.6vw, 2.25rem)`, line-height 1, -0.025em).
- **Title** (720, 1.0625rem, -0.01em): section heads such as "Selected Projects", "Visual Evidence & Artifacts" and the prose h2s. The role line uses 680 at the same size.
- **Column title** (720, wdth 90, `clamp(1rem, 1.25vw, 1.1875rem)`, 1.08, -0.015em, balanced): project names inside Row columns.
- **Body** (400, 1.0625rem, 1.55 for band summaries and 1.62 for project prose; measure 62–68ch): reading text. The project lead is `clamp(1.0625rem, 1.4vw, 1.25rem)` at 480 weight, 60ch.
- **Body small** (0.9375rem, 1.5): the home intro (40ch, Soft Ink), topbar, colophon, links, and project-page spec rows.
- **Label** (600–650, 0.875rem): filter buttons, home spec rows, figure captions. Spec `dt` uses 650. Filter counts drop to 450.
- **Label small** (520, 0.75rem, 1.3): Row column meta (category, Solo/Team work).
- **Mono** (0.75rem, Soft Ink): image filenames under each caption, e.g. `01-login-screen.png`.

### Named Rules
**The Weight-and-Width Rule.** Hierarchy comes from Archivo's weight and width axes plus size. There are no uppercase labels, letter-spaced eyebrows, or second display face. Every large heading is heavy (750–820), condensed (wdth 86–88), tightly tracked (-0.025 to -0.035em), and set solid (line-height 0.9–1).

**The Flush-Left Rule.** Text is set ragged-right and flush-left on grid columns. Right-justification is reserved for a few elements: the topbar nav, the legend filters, the colophon GitHub link, and the "next" pager tile on wide screens.

## Layout

**Grid.** Every section uses a 12-column grid (`repeat(12, minmax(0, 1fr))`) with `column-gap: var(--gutter)` and `padding-inline: var(--margin)`. The Row and the pager are the exceptions: they run full-bleed (edge to edge) on desktop.

**Home masthead.** The name occupies columns 1–8, bottom-aligned. The role line, intro and GitHub link fill columns 9–12. Below 760px both span the full width.

**Legend and Row.** A 2px ink rule opens the legend: "Selected Projects" sits in columns 1–3 and the filter buttons are right-aligned across columns 4–12. Directly beneath, the Row places eight columns side by side, 6px apart, at `clamp(340px, 46svh, 480px)` tall. Below 760px the Row becomes a vertical stack of 50px horizontal bars (4px gap, inset by the page margin), and the filters become one horizontally scrolling line that bleeds to the screen edges.

**Bands.** Each project band opens with a 2px ink rule. Text sits in columns 1–5 (max 34rem) and the colour plate in columns 7–12. Below 960px both span the full width.

**Project page.** The poster header runs full-bleed in the category colour, with the title on columns 1–10 and the lead on 1–7. The facts section puts the spec table on columns 1–4 and the prose on 6–12. In the gallery, phone captures share a "shelf": an equal-column grid using subgrid rows so captions align. Wide captures each get a plate on columns 4–12, with the caption bottom-aligned in columns 1–3. Below 960px everything stacks, and the caption moves under the plate.

**Rhythm.** Large section spacing is always fluid: `clamp(48px, 6vw, 96px)` between figures, `clamp(56px, 6vw, 96px)` under bands, and `clamp(80px, 10vw, 160px)` above the colophon. Small gaps repeat at 6, 10, 12, 14, 18, 22 and 28px. There is no named step scale beyond `margin`, `gutter` and the 6px gap between Row columns and pager tiles (`field-gap`).

**Breakpoints.** 960px: the band and project-page columns stack. 760px: the Row turns into horizontal bars, the masthead stacks, the shelf becomes two-up, and the pager becomes a single column.

### Named Rules
**The Shared Baseline Rule.** Every plate is bottom-aligned with zero bottom padding (`align-items: flex-end`, padding `… 0`), so each capture stands on the plate's lower edge. In the Row and on shelves, all plates read left to right along one line.

**The Everything-Visible Rule.** The Row always shows all eight projects. Filtering never removes or reorders a column: unmatched columns shrink to a colour sliver (`flex-grow: 0.12`, or 8px tall on phones) and become `inert`.

## Elevation & Depth

The system is completely flat. There is no `box-shadow`, no gradient surface, no blur, and no layering. Depth comes only from colour regions laid against paper and from the ink colophon at the foot of every page. Hover states change flex size, underline, or position, and never add lift.

### Named Rules
**The Flat Sheet Rule.** Nothing casts a shadow or floats. If something needs separating, use a 2px ink rule, a colour field, or space.

## Shapes

Every corner is square. The codebase contains no `border-radius` anywhere: not on buttons, plates, swatches, focus outlines or the favicon. Structure comes from ink rules rather than boxes. A **2px** rule opens each major section (legend, band, project spec table, gallery title), and **1px** hairlines divide spec-table rows. No element is enclosed by a full border. Category swatches are solid squares (0.7–0.75em). Arrows are open strokes of 1.6–1.8px; the external-link marker has square caps, and the other arrows use default caps. The favicon is a 2×2 grid of the four category squares on paper.

## Components

### Filter toggle (legend)
Flat, rectangular, toggle-pressed.
- **Shape:** square, no border, transparent fill. Padding 7px 12px, or 6px 9px on phones.
- **Content:** a category swatch (0.75rem square of `--c`), the label, and a count at 450 weight.
- **Hover:** a 7% ink wash (`rgb(20 20 20 / 0.07)`).
- **Pressed (`aria-pressed="true"`):** filled with the category field and its `-on` text. The swatch switches to `currentColor`. "All" fills with ink on paper.
- Transition: background and colour at 200ms on the house ease. A polite live region announces "Label: n of 8 projects".

### Row column (signature)
One full-height colour field per project, linking to its page.
- Field `--c`, text `--on`. Title block at the top (padding 14px 14px 16px, min-height 8.25rem), then the cover capture cropped `object-fit: cover` from the top, inset 10px from the sides.
- **Hover / focus-within:** the column widens (`flex-grow: 2.3`, 560ms ease). Focus outline is inset (`outline-offset: -6px`).
- **Filtered out (`.off`):** text and capture fade to 0 (240ms) and the column shrinks to a sliver while keeping its position.
- **Load:** columns are revealed upward from the baseline with `clip-path: inset(100% 0 0 0)`, 600ms each, staggered 30ms starting at 60ms. On phones they are revealed left to right instead.
- Phone (≤760px): a 50px horizontal bar with the title and meta on one line ("Category · Solo") and the capture in the right 30%.
- Carries `view-transition-name: field-<slug>` into the project page's poster header.

### Project band
- 2px rule on top. Headline title whose link draws a category-coloured underline bar (0.14em, sweeping 0→100% over 420ms) on hover.
- Summary in body text, then the spec table, then a "View details →" link whose arrow nudges 5px right on hover.
- **Plate:** a category field padded `clamp(20px, 3.2vw, 44px)` on top and sides with 0 at the bottom. A phone capture appears as a pair (each up to 230px wide); a wide capture appears alone at full width.

### Spec table
A two-column definition list with ink rules. It replaces chips for all project metadata.
- **Home band variant:** 1px top rule, 6.5rem term column, 0.875rem, 9px row padding.
- **Project page variant:** 2px top rule, 7.5rem term column (6.25rem on phones), 0.9375rem, 11px row padding. It adds Source and Pull requests rows, with links in ink at 560 weight that underline at 1px and thicken to 2px on hover.
- `dt` 650 in ink; `dd` in Soft Ink. The Category row leads with a category swatch.

### Poster header (project page)
Full-bleed category field with `-on` text. It holds the back link (arrow nudges 5px left on hover), a large gap of `clamp(48px, 9vw, 140px)`, the display title, and the lead.

### Figure plates and captions (project page)
Captures sit on a category-field plate, bottom-aligned, never tinted or overlaid. Captions are in the grid beside or beneath the plate, not in a box: a label-size sentence, then the filename in mono Soft Ink. Wide captures link to the full-size source (`cursor: zoom-in`).

### Pager tiles
Two full-bleed category tiles (previous and next project), 6px apart, `min-height: clamp(140px, 16vw, 220px)`, each in that project's category colour. Large arrow plus headline title. On hover the title slides 6px toward its direction (420ms). An empty slot is transparent on desktop and hidden on phones.

### Navigation and links
- **Topbar:** sits on the grid, name in columns 1–6 and nav right-aligned in 7–12. 0.9375rem/600. Links show a 1px underline that fades in on hover (160ms). On the home page the name is plain text, not a link.
- **Primary text link ("View on GitHub"):** a permanent 2px underline whose offset grows from 0.3em to 0.45em on hover (220ms).
- **External marker:** a 0.7em open-stroke diagonal arrow SVG after external links.
- **Focus:** `3px solid currentColor`, offset 3px, on every focusable element.
- **Colophon:** an ink field holding the name (headline treatment), role, GitHub link and a build note.

## Do's and Don'ts

### Do:
- **Do** bind category colour through `data-category` and read only `--c` / `--on` in components.
- **Do** keep every plate's bottom padding at 0 so captures stand on one shared baseline.
- **Do** separate sections with a 2px ink rule and spec rows with 1px ink hairlines.
- **Do** set every large heading in Archivo at 750–820 weight, width 86–88%, tracking -0.025 to -0.035em, line-height 0.9–1.
- **Do** keep all eight projects visible in the Row. Filtering shrinks unmatched columns to slivers and marks them `inert`.
- **Do** drive every transition with `cubic-bezier(0.16, 1, 0.3, 1)` and turn motion and view transitions off under `prefers-reduced-motion`.
- **Do** put project metadata (Category, Credit, Stack, Source) in the two-column spec table.

### Don't:
- **Don't** round any corner, add a shadow, or use a gradient surface.
- **Don't** tint, overlay, or recolour a capture; the colour goes on the plate behind it.
- **Don't** use a category colour for something outside that category, or put white text on orange or yellow.
- **Don't** show project metadata as tags or chips; it belongs in the spec table.
- **Don't** wrap content in fully bordered boxes or cards; use rules, fields and space.
- **Don't** introduce a second display face, uppercase eyebrow labels, or a dark page ground.
