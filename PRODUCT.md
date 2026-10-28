# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Recruiters and engineers reviewing a student developer's work on desktop or phone (audience inferred from the portfolio purpose). They must find any project quickly and inspect real evidence without traversing a long animation.

## Product Purpose

Aekarut Phetpradit's portfolio. Personal details are limited to the name, **KMUTT student · Software Developer**, and https://github.com/AokDesu. Present real software work with its provenance and honest contribution credit.

## Positioning

Colour Chapters: a colourful, modern portfolio with smooth motion, not a dark card grid and not a 3D gallery. Each project fills the screen in its own app's colour, and the colours slide over each other as you scroll. Real captures sit large and untouched beside real HTML text that carries every title, summary, caption and fact. Motion is optional; access to the work is not.

## Operating Context

Static Astro build hosted on Vercel; no new service. Project records (including each project's field colour) in src/data/projects.ts; images/provenance in src/content/projects/, mirrored under content/. Astro optimizes images. Self-hosted Archivo. No client-side framework or animation library: CSS, one small motion script and the browser's own cross-document view transitions. `npm test` builds the site and checks it with Node's built-in test runner.

## Capabilities and Constraints

- Home: the nine projects as coloured folder tabs on the first screen, then one full-screen chapter per project; the same list is in the top bar's Projects menu on every page.
- Collection order, set by the owner on 2026-10-28: ScamReport v2, Poke Monopoly Rules Helper, DroneAid, NumMaiLai, dev-memory-ai, Neural Network From Scratch, Basic Memory Access Benchmark, Firstmate Contributions, Spaceship Titanic EDA. The same order drives the home page, the Projects menu and next-project links.
- Each project's colour is sampled from its own interface and reads at 4.5:1 or more with its text colour.
- ScamReport is the solo ScamReport v2 rebuild (citizen phone web app and organisation console; source AokDesu/scamreport-v2), credited "Solo rebuild of the 5-person CSC234 team project, built with AI coding agents I directed." Its captures are app-only screens of the local build with fictional seed data; no client or marketplace is named anywhere.
- Poke Monopoly Rules Helper (AI & Data) is the CSC493 open-exam project. Private repository: labelled, source not linked and not named; captured offline with no paid model request.
- Full, readable experience for reduced motion, browsers without view transitions, and no JavaScript.
- Capture the real app, not the surrounding prototype page. Phones on a page share one width and one frame and keep their capture's own ratio; terminal windows lose padding; browser captures lose GitHub site chrome; charts retain matching paper.
- Team work stays labelled. Credits from README and commit authorship; no invented impact metrics or claims.
- No personal contact details, analytics, contact form, CMS or paid model requests.

## Brand Commitments

On the 2026-10-28 direction board the owner chose Colour Chapters (over Sticker Lid), "Lively" motion, no new library, and the removal of the 3D gallery; the preview of the home page and the ScamReport v2 page was approved as built ("go full build"). The earlier 3D night gallery and Swiss Poster Series are replaced; the dark card grid/tag-chip design remains rejected. DroneAid's captures are design-prototype evidence, not running production-app captures.

## Build Order

Direction board → preview (home and ScamReport v2) → full build of every project page, DESIGN.md v2 (v1 kept as DESIGN.v1.md) and the 3D removal.

## Product Principles

1. Real work is the visual lead.
2. Motion never gates reading or navigation.
3. Matching frames and honest crops; never stretch or invent evidence.
4. Motion is an enhancement, not a dependency.
5. Keep team credit and capture provenance close to the work.
