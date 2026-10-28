# ScamReport v2

A scam-reporting phone web app for citizens and a desktop console for the organisations that review the reports, built as one React application. Citizens search a feed of verified scams, file a two-step report (scam type, channel, amount, story and evidence, then destination and contact consent) and follow numbered tickets from received to reviewing to result. In the console, moderators call the next report and verify, reject or flag it, organisation admins manage members and read the activity log, and executives see aggregates only. Thai is the default language, with an English switch on every screen.

## Stack
- **Web**: React, TypeScript, Vite, Tailwind CSS v4, shadcn/ui on Radix primitives, self-hosted Noto fonts
- **API**: Bun and Elysia, shared request and response schemas, OpenAPI documentation, request IDs
- **Data**: Supabase PostgreSQL, Auth and private Storage; every table under row-level security, organisations as tenants, the caller's own token on every request
- **Tests**: pgTAP access tests, Bun API tests, Vitest component tests, Playwright browser tests
- **Packaging**: Docker images for the API and web app

## Team
- **Type**: Solo rebuild of the 5-person CSC234 team project, built with AI coding agents I directed.
- **Original**: KMUTT CSC234 User-Centered Mobile Application team project (Flutter and Elysia.js). The team repository is not used by v2.

## Links
- **Source Code**: [GitHub Repository (AokDesu/scamreport-v2)](https://github.com/AokDesu/scamreport-v2)

## Image Production
All five images are existing app-only captures of the local v2 build running its fictional seed data (fictional organisations, accounts and reports). No real person's data appears.

- `01-citizen-feed.png`: Verified-scam feed, English, 390×844 viewport at 2×.
- `02-report-step-1.png`: Report a scam, step 1 of 2, English; the top 390×844 (2×) of a full-page capture of the same screen.
- `03-my-reports.png`: My reports with numbered tickets, English, 390×844 at 2×.
- `04-console-review.png`: Console report review, Thai, 1440×900; the bottom 32 px are trimmed so no partial contact row shows.
- `05-executive-overview.png`: Console executive overview (aggregates only), Thai, 1440×900.
