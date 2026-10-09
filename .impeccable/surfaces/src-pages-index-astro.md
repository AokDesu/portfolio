---
version: 1
slug: "src-pages-index-astro"
primary_target: "src/pages/index.astro"
related_targets: ["src/pages/projects/[slug].astro","src/layouts/Layout.astro"]
---

# Portfolio site — home and project pages

Scope: `src/pages/index.astro` (home), `src/pages/projects/[slug].astro` (project page), shared layout. Visitor mode: **Experience** — the work leads from the first viewport.

Audience and job: reviewers (recruiters, engineers) arriving from GitHub or a CV; sort the eight projects in seconds, open one, check the evidence, follow the source link.

Constraints: content frozen (8 projects, captions, credits, role line, GitHub link); no personal details; Astro static output; images through `astro:assets`; self-hosted fonts.

Process note: PRODUCT.md interview and the direction round ran unattended (the task launcher bars addressing the owner); build is code-led (no image generation on this machine).

## Grounded candidates (ordered by resonance)

1. Gallery exhibition wall labels (tombstone: title, medium, credit line)
2. Photo-lab contact sheet with grease-pencil selects
3. Engineering drawing sheet with title block
4. Bangkok BTS/MRT line map and wayfinding
5. **International Typographic Style exhibition poster series** ← assigned
6. Record-label catalogue with spine numbers
7. Archive accession card (literal provenance reading)

## Challenger verdicts

- Kiln-shelf glaze runs — declined. Kept: one shelf row, gravity sets the reading order.
- Sewing pattern envelope — declined. Kept: front indexes, back holds the exact table.
- ASCII live render — declined. Kept: one grid is the whole composition; captions live inside it.
- VU-meter bridge — declined. Kept: identical channels shoulder to shoulder, read by sweeping the row.
- Broadcast signal degradation — declined. Kept: tuning between channels; the unselected channel visibly drops out.
- Zoo guide map — declined. Kept: flat colour owns whole regions; photographs keep their own colour, never tinted.

## Direction contract

THESIS: The portfolio is a Swiss exhibition poster series: one strict modular grid, a neo-grotesk set large and flush-left, and four flat process colours that each mean one category. It refuses the dark card grid with tag chips and the cream-serif editorial page.

OWN-WORLD: Cool white paper ground, near-black ink, four flat fields — ultramarine (Mobile Apps), signal orange (AI & Data), deep green (Tools & Systems), process yellow (Open Source). No borders, no radii, no shadows; structure is alignment, colour fields and hairline rules from ink. Archivo throughout, weight and width doing hierarchy; tabular figures for counts.

STORY: The visitor sees the whole body of work as one coloured row, reads the name and role, sweeps or filters the row, opens a project, and finds a poster whose spec table and captioned captures prove the claim.

FIRST VIEWPORT: Name at display max, flush-left over two lines in the top-left six columns; role line, one-sentence intro and GitHub link in the right column on the same baseline grid. Lower 45% of the viewport: the Row — eight full-bleed colour columns, one per project, each carrying its cover capture and title; the category legend directly above it is the filter. Primary action: open a column.

FORM: International Typographic Style poster series — position 5 of 7 on the ordered list; seed key 54e5768d.

Raises:
- From kiln shelf: every plate in the Row and in project galleries stands on one shared baseline; the eye reads left to right along it.
- From sewing envelope: project metadata is an exact two-column spec table (Category, Credit, Stack, Source), never chips.
- From ASCII render: captions and spec text sit in the same column grid as the images, never in boxes under them.
- From VU bridge: all eight projects are visible at once in the Row; you read the portfolio by sweeping it.
- From broadcast signal: filtering keeps every column in place — unmatched columns drop to slim colour slivers, removed from tab order — so the lineup stays legible.
- From zoo map: colour commits at region scale (the Row, project page headers); captures are never tinted or overlaid.

Signature interaction: the Row. Hover or focus widens a column (flex-grow, exponential ease-out) to reveal more of its capture; the legend filter collapses unmatched columns to slivers. Motion grammar: on load the columns rise from the shared baseline in sequence (clip-path, settled within 900ms); cross-document view transitions carry a column's colour field into the project page header. All motion off under prefers-reduced-motion.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance
