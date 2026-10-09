# Product

<!-- impeccable:product-schema 1 -->

> Facts below come from the owner's written brief relayed through the task launcher; no live interview ran. Lines marked *(inferred)* are reasoned from that brief and the repository, not confirmed by the owner.

## Platform

web

## Users

- Recruiters, internship coordinators, and engineers reviewing a student developer's work, usually arriving from a GitHub profile, a CV link, or a message. *(inferred)*
- They skim on a laptop or a phone, want to know within seconds what kind of developer this is, then open one or two projects to check depth and evidence. *(inferred)*

## Product Purpose

A personal portfolio for Aekarut Phetpradit, a KMUTT student and software developer. It shows eight real projects with screenshots and notes on how each image was produced, so a reviewer can judge real work rather than claims. Success: a visitor reaches a project page, sees the evidence, and follows the source link or the GitHub profile.

## Positioning

Every image is a capture of the real thing (running builds, terminal output, rendered charts, live PR pages) or an explicitly labelled design-prototype screen; each project page records how its images were produced. Breadth is real: Flutter mobile apps, data analysis, C++ from first principles, systems benchmarking, Python tooling, and upstream open source.

## Operating Context

- Static Astro site, hosted on Vercel by importing the GitHub repo `AokDesu/portfolio`; zero-config build, no adapter.
- Content source is `src/data/projects.ts` plus the categorised image folders under `src/content/projects/<category>/<project>/`, mirrored in `content/`.

## Capabilities and Constraints

- Home page: name, "KMUTT student · Software Developer", link to https://github.com/AokDesu, short intro, project grid filterable by category (Mobile Apps, AI & Data, Tools & Systems, Open Source).
- One page per project: screenshots, description, stack, team credit, source link when the repo is public, PR links for open-source work.
- Images go through Astro's image pipeline.
- No email, student ID, phone, or other personal detail. No contact form, analytics, CMS, or custom domain.

## Brand Commitments

- Name: Aekarut Phetpradit. Role line: "KMUTT student · Software Developer". GitHub: https://github.com/AokDesu.
- DroneAid and ScamReport show their design-prototype screens, not running-app captures; captions say so.
- The owner rejected the previous dark, blue-accent card-grid look; a redesign with a distinct point of view was requested.

## Evidence on Hand

- 25 project images across 8 projects (`src/content/projects/**`): phone-portrait prototype screens (DroneAid 520×1126, ScamReport 390×844), terminal captures, rendered charts, an architecture diagram, GitHub PR pages, a Discord-style alert, a GIS dashboard.
- Team credits come from commit authorship and README credits only. No testimonials, employers, awards, or metrics beyond those in the project notes; none may be invented.

## Product Principles

1. Evidence over adjectives: the screenshots carry the argument.
2. Honest credit: team work is labelled as team work.
3. Fast to scan, deep on demand: the home page sorts, the project page proves.
4. Nothing personal beyond name, school, role, and GitHub.
