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
- `01-discord-alert.png`: Discord Rich Embed notification rendered in Discord dark-theme client using official test fixture event data without requiring live credentials.
- `02-web-dashboard.png`: Live capture of the local NumMaiLai GIS web dashboard (`http://localhost:8085`) displaying interactive outage map and filter controls.
