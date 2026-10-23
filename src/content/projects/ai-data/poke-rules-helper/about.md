# Poke Monopoly Rules Helper

A loopback-only rules chatbot for CSC493 preparation, styled as a handheld Pokédex. A Python standard-library BM25 retriever picks labelled passages from the Poke Monopoly rulebook; Claude Haiku 5.5 streams an answer that opens with a one-line direct answer and cites the passages it used, and the server checks every citation against the passages it actually sent. Local guardrails refuse instruction overrides and requests for opponents' hidden information, and show the registered Price Shield rules conflict without settling it, all without a paid request.

## Stack
- **Server**: Python 3.11+ standard library (no packages, no build step), loopback-only
- **Retrieval**: BM25 over labelled rulebook passages
- **Model**: Claude Haiku 5.5 through the streamed Messages API with native citations
- **Interface**: HTML, CSS and JavaScript, self-hosted fonts and icons

## Team
- **Type**: Individual project (CSC493 Intelligent Systems coursework)
- **Authorship**: All four commits in the repository are by a single author. Source: commit history and README of the private repository AokDesu/poke-rules-helper.

## Links
- **Source Code**: Private repository; no public link.

## Image Production
All three images were captured from a copy of the repository outside its clone, run with the earlier offline capture kit (`offline-server.py`): the server starts with a placeholder credential and its Claude call is replaced by an error, so no request can reach the provider and no key is read. The answer shown is a recorded genuine Claude answer replayed in the browser through an intercepted fetch (`capture.py`, `driver.js`, `replay-answer.json`); the conflict answer is the app's own local guardrail. No paid model request was made.

- `01-cited-answer.png`: Phone-width view of the replayed answer to "How much money does a player begin the game with?", captured in headless Chrome at a 344×660 viewport so it matches every other phone screen on the site.
- `02-rules-conflict.png`: The Price Shield conflict question answered by the local guardrail, captured the same way at 344×660.
- `03-rulebook-index.png`: Desktop view (1440×900) after clicking the `§4.1 L143` source tag of the replayed answer, which opens its Rulebook index entry. The app fills the page, so it is shown uncropped in the portfolio's shared browser frame.

Pokémon icons inside the captures: "Pokemon icons created by Darius Dan - Flaticon" (free licence with attribution, as credited in the app). Pokémon is a trademark of its owners; the coursework app has no official affiliation.
