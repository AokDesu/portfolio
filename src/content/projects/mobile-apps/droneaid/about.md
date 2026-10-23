# DroneAid

Drone-based relief-supply delivery simulator designed for civilians impacted by armed conflict or natural disasters. The application pairs an intuitive mobile client with an event-driven serverless backend to orchestrate real-time supply requests, autonomous drone dispatching, live telemetry simulation, and administrator inventory and fleet controls.

## Stack
- **Mobile Frontend**: Flutter (Dart), Flutter Map, Provider / State Management
- **Cloud Backend**: Firebase Cloud Functions (TypeScript, Node.js), Firebase Firestore, Firebase Authentication
- **Services**: Firebase Cloud Messaging (FCM), Firebase Crashlytics, Firebase Local Emulator Suite

## Team
- **Type**: Group Project (CSC291 at KMUTT, 2026)
- **Team Members**:
  - Aekarut Phetpradit ([@AokDesu](https://github.com/AokDesu)) — Lead · Backend + Integration
  - Belle ([@BBelleysp](https://github.com/BBelleysp)) — Identity + Shared UI
  - Bew ([@SNOWxSAUSAGES](https://github.com/SNOWxSAUSAGES)) — Request Domain
  - Poom ([@Mrmo0p](https://github.com/Mrmo0p)) — Tracking + Maps
  - Tawan ([@Tantawan7](https://github.com/Tantawan7)) — Fleet Domain
- **Aekarut's Role**: Team lead and backend architect; authored backend Cloud Functions (callables, triggers, scheduled ticks), Firestore security rules and test suites, role-aware routing guards, and emulator dev loop.

## Links
- **Source Code**: [GitHub Repository (AokDesu/CSC291-DroneAid)](https://github.com/AokDesu/CSC291-DroneAid)

## Image Production
- `01-login-screen.png`: Authentication and role selection from the public UI design specification `docs/prototype-screens/user/P-U-01_login.png`; cropped the existing source capture at x=23, y=93 to the complete 344×660 app bounds. Prototype-page background removed; no content stretched.
- `02-request-screen.png`: Civilian supply request from `docs/prototype-screens/user/P-U-03_request.png`; same app-only 344×660 crop at x=23, y=93.
- `03-tracking-screen.png`: Delivery tracking from `docs/prototype-screens/user/P-U-05_tracking.png`; same app-only 344×660 crop at x=23, y=93.
- `04-admin-map.png`: Coordinator map from `docs/prototype-screens/admin/P-A-05_control_map.png`; same app-only 344×660 crop at x=23, y=93.
- `05-architecture.png`: C4 context diagram from `docs/diagrams/07-architecture-1.png`; existing rendered diagram trimmed to non-white bounds with an 8px white-paper margin.

The four mobile images remain design-prototype captures, not running-app evidence. All use one shared phone frame on the portfolio; framing is separate from the image. Crops produced with ImageMagick 7.1.2-34. Original copies and remade images are retained under the portfolio-refresh task data directory; content/ mirrors these files.
