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
- `01-login-screen.png`: Authentication and role selection view captured from UI design specifications (`docs/prototype-screens/user/P-U-01_login.png`).
- `02-request-screen.png`: Civilian emergency relief supply request interface captured from UI design specifications (`docs/prototype-screens/user/P-U-03_request.png`).
- `03-tracking-screen.png`: Real-time relief flight and delivery tracking view captured from UI design specifications (`docs/prototype-screens/user/P-U-05_tracking.png`).
- `04-admin-map.png`: Operational command center map with drone telemetry and relief hubs captured from UI design specifications (`docs/prototype-screens/admin/P-A-05_control_map.png`).
- `05-architecture.png`: C4 software architecture diagram rendered from technical documentation (`docs/diagrams/07-architecture-1.png`).
