# ScamReport

A community-driven incident reporting and scam intelligence mobile application designed to empower citizens to report fraudulent schemes, verify suspicious communications, search an aggregated database of verified incidents, and streamline moderation workflows.

## Stack
- **Mobile App**: Flutter (Dart)
- **Backend API**: Elysia.js (TypeScript, Bun runtime)
- **Contracts & Database**: TypeBox shared schema contracts, PostgreSQL
- **Media**: Object storage for evidence attachments

## Team
- **Type**: Team Project (CSC234 User-Centered Mobile Application, KMUTT)
- **Aekarut's Role**: Full-stack developer contributing to the mobile application architecture, state management, and TypeBox API contract integration.

## Links
- **Source Code**: [GitHub Repository (CSC234-UserCenteredMobileApp/ScamReport)](https://github.com/CSC234-UserCenteredMobileApp/ScamReport)

## Image Production
- `01-guest-feed.png`: Re-captured from a read-only source copied from `ScamReport-docs/ScamReport Prototype _standalone_guest.html` into task scratch. Chrome renders the actual `.sr-app` at 344×660, fixed to the capture viewport; surrounding prototype heading, chips and device chrome are excluded. Clipboard banner dismissed using its real control. App scrolling and navigation retained; content is not stretched. Uses the portfolio's shared phone frame.
- `02-user-report.png`: Re-captured from a copy of `ScamReport-docs/ScamReport Prototype _standalone_user.html` (the signed-in user build of the team's standalone interactive prototype) in headless Chrome. The prototype's own `.sr-app` element is fixed to a 344×660 viewport, so the prototype page heading, chips, status bar and device chrome are excluded; the Report tab was opened with the app's own bottom navigation. Uses the portfolio's shared phone frame.
- `03-moderation-queue.png`: Re-captured the same way from a copy of `ScamReport Prototype _standalone_admin.html` (admin build): `.sr-app` at 344×660, Moderate tab opened with the app's own navigation.
- `04-feed-search.png`: Re-captured the same way from a copy of the user build: `.sr-app` at 344×660, Feed tab opened with the app's own navigation, "All" scam-type filter selected.
