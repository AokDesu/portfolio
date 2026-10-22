# NumMaiLai

An automated monitoring and notification service for Metropolitan Waterworks Authority (MWA) pipe repair operations and unplanned water outages across Bangkok and adjacent provinces. The tool delivers formatted Discord Webhook alerts and hosts an interactive GIS web management dashboard allowing users to define radius circles, keyword filters, and responsible branch criteria.

## Stack
- **Backend**: Python 3, Standard Library HTTP Server
- **Integration**: MWA Open Data GIS API, Discord Webhook API
- **Web Frontend**: HTML5, Vanilla JavaScript, Leaflet.js, OpenStreetMap

## Team
- **Type**: Solo Project
- **Author**: Aekarut Phetpradit

## Links
- **Source Code**: [GitHub Repository (AokDesu/NumMaiLai)](https://github.com/AokDesu/NumMaiLai)

## Image Production
- `01-discord-alert.png`: Discord-style Rich Embed rendered from official test-fixture event data without live credentials. ImageMagick crop of the existing capture: 820×584 at x=70, y=68, retaining the client window and removing surrounding dark padding.
- `02-web-dashboard.png`: Recorded capture of the local NumMaiLai GIS web dashboard (`http://localhost:8085`) with the outage map and filter controls. The app fills the whole 1440×900 page with no browser or site chrome, so it is kept uncropped and shown in the portfolio's shared browser frame.
