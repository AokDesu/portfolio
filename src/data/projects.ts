/** How a capture is shown: on a phone, in the shared browser frame, as a chart on its own paper, or as a window. */
export type ExhibitKind = 'phone' | 'browser' | 'paper' | 'window';

export interface ProjectImage {
  srcPath: string; // key for import.meta.glob
  kind: ExhibitKind;
  /** What the image shows and how it was produced. */
  caption: string;
  /** Short description of what the picture shows, for screen readers. */
  alt: string;
}

export interface PullRequestLink {
  title: string;
  url: string;
  status: 'merged' | 'open';
}

/** One stop of a project page after its opening: a short heading, its text and the images it shows. */
export interface ProjectStation {
  id: string;
  title: string;
  copy: string;
  /** Indices into `images`; two phones are shown as a matched pair. */
  images: number[];
}

export interface Project {
  slug: string;
  title: string;
  category: 'mobile-apps' | 'ai-data' | 'tools-systems' | 'open-source';
  categoryLabel: string;
  summary: string;
  /** One line under the project title. */
  lead: string;
  description: string;
  stack: string[];
  teamType: 'team' | 'solo';
  teamLabel: string;
  /** Short credit line for the opening. */
  roleNote: string;
  teamCredit: string;
  repoUrl: string | null;
  /** Private repository: no source link is shown. */
  privateRepo?: boolean;
  prLinks?: PullRequestLink[];
  /** What the captures are, for the facts list. */
  evidence: string;
  /** Attribution required by material that appears inside the captures. */
  imageCredits?: string;
  /** Indices into `images` shown with the project's opening and on the home page. */
  cover: number[];
  stations: ProjectStation[];
  images: ProjectImage[];
}

export const CATEGORIES = [
  { id: 'all', label: 'All Projects' },
  { id: 'mobile-apps', label: 'Mobile Apps' },
  { id: 'ai-data', label: 'AI & Data' },
  { id: 'tools-systems', label: 'Tools & Systems' },
  { id: 'open-source', label: 'Open Source' },
] as const;

// Order is the collection order everywhere (home, index, next project): software and
// applications first, then studies, experiments and open-source contributions.
export const PROJECTS: Project[] = [
  {
    slug: 'droneaid',
    title: 'DroneAid',
    category: 'mobile-apps',
    categoryLabel: 'Mobile Apps',
    summary: 'Drone relief-supply delivery simulator for conflict zones, combining a Flutter mobile client with a serverless Firebase event-driven backend.',
    lead: 'Relief supplies, from request to arrival.',
    description: 'DroneAid is a drone-based relief-supply delivery simulator designed for civilians impacted by armed conflict or natural disasters. The application pairs an intuitive mobile client with an event-driven serverless backend to orchestrate real-time emergency supply requests, autonomous drone dispatching, live telemetry simulation, and administrator inventory and fleet controls.',
    stack: ['Flutter', 'Dart', 'Firebase Firestore', 'Cloud Functions', 'TypeScript', 'Firebase Auth', 'FCM'],
    teamType: 'team',
    teamLabel: 'Group Project · KMUTT CSC291',
    roleNote: 'Five-person team. Aekarut: team lead, backend and integration.',
    teamCredit: '5-person team (CSC291 at KMUTT, 2026). Aekarut Phetpradit served as Team Lead and Backend Architect, authoring backend Cloud Functions (callables, triggers, scheduled ticks), Firestore security rules with comprehensive test suites, role-aware routing guards, and the emulator dev loop.',
    repoUrl: 'https://github.com/AokDesu/CSC291-DroneAid',
    evidence: 'Design-prototype captures from the project\'s UI design specification, cropped to the app; not a running-app demonstration.',
    cover: [1, 2],
    stations: [
      {
        id: 'two-roles',
        title: 'Two roles, one system.',
        copy: 'Civilians sign in to request supplies and follow their delivery. Relief coordinators approve requests and watch the fleet on a live map. Role-aware routing sends each account to its own side of the app.',
        images: [0, 3],
      },
      {
        id: 'architecture',
        title: 'Behind the interface.',
        copy: 'Firestore events and Cloud Functions coordinate requests, dispatch and simulated telemetry. Firebase Cloud Messaging carries notifications; map tiles come from OpenStreetMap.',
        images: [4],
      },
    ],
    images: [
      {
        srcPath: '/src/content/projects/mobile-apps/droneaid/01-login-screen.png',
        kind: 'phone',
        caption: 'Authentication and role selection — design prototype P-U-01, cropped to the complete 344×660 app bounds.',
        alt: 'DroneAid login screen with the drone logo, an ID field, a masked password field, a Log in button and a list of demo accounts.',
      },
      {
        srcPath: '/src/content/projects/mobile-apps/droneaid/02-request-screen.png',
        kind: 'phone',
        caption: 'Emergency supply request — design prototype P-U-03, cropped to the complete 344×660 app bounds.',
        alt: 'DroneAid request screen listing six supplies with add buttons, a delivery pin in Bangkok and Normal and Urgent priority choices.',
      },
      {
        srcPath: '/src/content/projects/mobile-apps/droneaid/03-tracking-screen.png',
        kind: 'phone',
        caption: 'Delivery tracking — design prototype P-U-05, cropped to the complete 344×660 app bounds.',
        alt: 'DroneAid tracking screen: a map with a dashed drone route, an In flight status with ETA, battery and speed, and the cargo list.',
      },
      {
        srcPath: '/src/content/projects/mobile-apps/droneaid/04-admin-map.png',
        kind: 'phone',
        caption: 'Coordinator map — design prototype P-A-05, cropped to the complete 344×660 app bounds.',
        alt: 'DroneAid coordinator live map with one active drone on a city map, tabs for requests, drones and control.',
      },
      {
        srcPath: '/src/content/projects/mobile-apps/droneaid/05-architecture.png',
        kind: 'paper',
        caption: 'C4 context diagram from technical documentation, tightly trimmed on its original white paper with an 8px margin.',
        alt: 'DroneAid C4 context: civilians submit requests and track drones; coordinators approve and dispatch; Firebase Cloud Messaging sends notifications and OpenStreetMap provides tiles.',
      },
    ],
  },
  {
    slug: 'scamreport',
    title: 'ScamReport',
    category: 'mobile-apps',
    categoryLabel: 'Mobile Apps',
    summary: 'Community-driven incident reporting and scam intelligence mobile application with shared TypeBox schemas and moderation workflows.',
    lead: 'Report a scam. Check what others have verified.',
    description: 'ScamReport is a mobile application empowering citizens to report fraudulent schemes, verify suspicious communications, search an aggregated database of verified scam incidents, and streamline administrative moderation workflows.',
    stack: ['Flutter', 'Dart', 'Elysia.js', 'TypeBox', 'TypeScript', 'Bun', 'PostgreSQL'],
    teamType: 'team',
    teamLabel: 'Team Project · KMUTT CSC234',
    roleNote: 'Team project. Aekarut: full-stack developer — mobile architecture, state and API contracts.',
    teamCredit: 'Team project (CSC234 User-Centered Mobile Application, KMUTT). Aekarut contributed as full-stack developer focusing on mobile application architecture, state management, and TypeBox API contract integration.',
    repoUrl: 'https://github.com/CSC234-UserCenteredMobileApp/ScamReport',
    evidence: 'Screens from the team\'s standalone interactive design prototype, rendered app-only at 344×660; not a running-app demonstration.',
    cover: [0, 1],
    stations: [
      {
        id: 'moderation',
        title: 'From report to verified feed.',
        copy: 'Admins work through a moderation queue — pending, flagged and oldest first — before a report reaches the verified feed, where anyone can filter incidents by scam type.',
        images: [2, 3],
      },
    ],
    images: [
      {
        srcPath: '/src/content/projects/mobile-apps/scamreport/01-guest-feed.png',
        kind: 'phone',
        caption: 'Guest dashboard re-captured from a copy of the standalone design prototype: app-only 344×660 viewport, clipboard banner dismissed; prototype page and device chrome removed.',
        alt: 'ScamReport home screen on a dark theme: a paste-a-message search box, weekly report counts and recent fraud alerts.',
      },
      {
        srcPath: '/src/content/projects/mobile-apps/scamreport/02-user-report.png',
        kind: 'phone',
        caption: 'Report a scam: title, description and scam type. Re-captured from a copy of the signed-in user prototype, app-only at 344×660.',
        alt: 'ScamReport report form with title and description fields, six scam type buttons and a target identifier field.',
      },
      {
        srcPath: '/src/content/projects/mobile-apps/scamreport/03-moderation-queue.png',
        kind: 'phone',
        caption: 'Moderation queue with pending, flagged and average-age counts. Re-captured from a copy of the admin prototype, app-only at 344×660.',
        alt: 'ScamReport moderation queue with pending, flagged and average-age counts and a list of reports to review.',
      },
      {
        srcPath: '/src/content/projects/mobile-apps/scamreport/04-feed-search.png',
        kind: 'phone',
        caption: 'Verified feed filtered by scam type. Re-captured from a copy of the signed-in user prototype, app-only at 344×660.',
        alt: 'ScamReport verified feed with weekly totals, scam type filter chips and cards for reported scams.',
      },
    ],
  },
  {
    slug: 'poke-rules-helper',
    title: 'Poke Monopoly Rules Helper',
    category: 'ai-data',
    categoryLabel: 'AI & Data',
    summary: 'Rules chatbot for the Poke Monopoly board game: Claude Haiku answers only from retrieved rulebook passages, cites each one, and local guardrails handle what the rulebook cannot settle.',
    lead: 'Ask the rulebook. See where every answer comes from.',
    description: 'A loopback-only rules chatbot styled as a handheld Pokédex. A Python standard-library BM25 retriever picks rulebook passages; Claude Haiku 5.5 streams an answer that opens with a one-line direct answer and cites the passages it used, and the server checks every citation against the passages it actually sent before the answer stands. Local guardrails refuse instruction overrides and requests for opponents\' hidden information, and show the Price Shield rules conflict without settling it, all without a paid request.',
    stack: ['Python (standard library)', 'BM25 retrieval', 'Claude Haiku 5.5 Messages API', 'HTML', 'CSS', 'JavaScript'],
    teamType: 'solo',
    teamLabel: 'Individual Project · CSC493 coursework',
    roleNote: 'Individual project. Every commit in the repository is by one author.',
    teamCredit: 'Built as preparation for the CSC493 Intelligent Systems exam. All four commits in the private repository are by a single author.',
    repoUrl: null,
    privateRepo: true,
    evidence: 'Captured from a copy of the app run offline with no provider access; the answer shown is a recorded Claude answer replayed in the browser, so no model request was made.',
    imageCredits: 'Pokémon icons inside the captures created by Darius Dan – Flaticon. Pokémon is a trademark of its owners; the coursework app has no official affiliation.',
    cover: [0, 1],
    stations: [
      {
        id: 'sources',
        title: 'Every source opens in the rulebook.',
        copy: 'A source tag such as §4.1 L143 opens that exact entry in the Rulebook index. Text without a citation is marked as unverified, and an answer whose citations fail the check is withdrawn.',
        images: [2],
      },
    ],
    images: [
      {
        srcPath: '/src/content/projects/ai-data/poke-rules-helper/01-cited-answer.png',
        kind: 'phone',
        caption: 'A cited answer: a one-line direct answer, source tags and the rulebook passages. Captured offline at 344×660 from a replayed recorded answer; no model request.',
        alt: 'Rules Helper chat on a phone: the question about starting money is answered with 20 coins, with rulebook source tags.',
      },
      {
        srcPath: '/src/content/projects/ai-data/poke-rules-helper/02-rules-conflict.png',
        kind: 'phone',
        caption: 'The Price Shield conflict answered locally: both passages, no house rule chosen. Captured offline at 344×660.',
        alt: 'Rules Helper chat on a phone: a question about Price Shield is answered with two conflicting rulebook passages and no chosen rule.',
      },
      {
        srcPath: '/src/content/projects/ai-data/poke-rules-helper/03-rulebook-index.png',
        kind: 'browser',
        caption: 'Desktop view: the source tag §4.1 L143 opened its Rulebook index entry. Captured offline at 1440×900 from a replayed recorded answer; shown in the shared browser frame.',
        alt: 'Rules Helper on desktop: a cited answer beside the opened rulebook index with the Starting kit entry highlighted.',
      },
    ],
  },
  {
    slug: 'nummailai',
    title: 'NumMaiLai',
    category: 'tools-systems',
    categoryLabel: 'Tools & Systems',
    summary: 'Automated monitoring system for Metropolitan Waterworks Authority (MWA) pipe repairs with rich Discord alerts and interactive GIS dashboard.',
    lead: 'Water-outage alerts for Bangkok, filtered to where you are.',
    description: 'An automated monitoring and notification service for Metropolitan Waterworks Authority (MWA) pipe repair operations and unplanned water outages across Bangkok and adjacent provinces. The tool delivers formatted Discord Webhook alerts and hosts an interactive GIS web management dashboard allowing users to define radius circles, keyword filters, and responsible branch criteria.',
    stack: ['Python 3', 'MWA Open Data API', 'Discord Webhook API', 'Leaflet.js', 'OpenStreetMap'],
    teamType: 'solo',
    teamLabel: 'Solo Project',
    roleNote: 'Individual project.',
    teamCredit: 'Solo utility project conceived and implemented by Aekarut Phetpradit.',
    repoUrl: 'https://github.com/AokDesu/NumMaiLai',
    evidence: 'An alert rendered from the project\'s test fixture without live credentials, and the local dashboard.',
    cover: [0],
    stations: [
      {
        id: 'dashboard',
        title: 'Choose what triggers an alert.',
        copy: 'A local GIS dashboard sets the radius circle, keywords and responsible MWA branches that decide which repairs and outages are sent to Discord.',
        images: [1],
      },
    ],
    images: [
      {
        srcPath: '/src/content/projects/tools-systems/nummailai/01-discord-alert.png',
        kind: 'window',
        caption: 'Discord-style alert rendered from the official test fixture without live credentials; cropped to the 820×584 client window, removing surrounding padding.',
        alt: 'Discord channel with an MWA outage alert in Thai: a burst pipe notice with time window, distance, location, branch and map link.',
      },
      {
        srcPath: '/src/content/projects/tools-systems/nummailai/02-web-dashboard.png',
        kind: 'browser',
        caption: 'Recorded capture of the local GIS dashboard (localhost:8085): outage map and filter controls. The app fills the 1440×900 page, so it is shown uncropped in the shared browser frame.',
        alt: 'NumMailAI dashboard: a Bangkok map with outage markers and a radius circle, beside alert settings for location, keywords and branches.',
      },
    ],
  },
  {
    slug: 'dev-memory-ai',
    title: 'dev-memory-ai',
    category: 'tools-systems',
    categoryLabel: 'Tools & Systems',
    summary: 'Semantic codebase memory engine and Model Context Protocol (MCP) server with Tree-sitter AST chunking and SQLite vector persistence.',
    lead: 'Semantic memory for a codebase, served to AI coding tools.',
    description: 'An AI-powered semantic codebase memory engine and Model Context Protocol (MCP) server that empowers AI development tools to deeply understand codebases. The tool parses git repositories using Tree-sitter for AST-level chunking, generates vector embeddings, stores semantic indices in a local SQLite database via Prisma, and serves natural language code query tools directly to Claude Code and Cursor.',
    stack: ['TypeScript', 'Node.js', 'Model Context Protocol (MCP)', 'Tree-sitter', 'Prisma', 'SQLite', 'Ink TUI'],
    teamType: 'team',
    teamLabel: 'Collaborative Open Source',
    roleNote: 'Collaborative project. Aekarut: lead refactorer — CLI v1.0, MCP server, AST indexing, terminal UI.',
    teamCredit: 'Collaborative project. Aekarut served as the lead refactorer who restructured the architecture into production CLI v1.0 and MCP server, authoring the AST indexing pipeline, React/Ink terminal interface, and MCP tool endpoints.',
    repoUrl: 'https://github.com/AokDesu/dev-memory-ai',
    evidence: 'A recorded terminal session and the project\'s architecture card.',
    cover: [0],
    stations: [
      {
        id: 'architecture',
        title: 'From AST chunks to MCP tools.',
        copy: 'Tree-sitter splits code into AST chunks, embeddings go to a local SQLite store through Prisma, and an MCP server exposes code queries to Claude Code and Cursor.',
        images: [1],
      },
    ],
    images: [
      {
        srcPath: '/src/content/projects/tools-systems/dev-memory-ai/01-cli-help.png',
        kind: 'window',
        caption: 'Recorded memory-dev help and query workflow; cropped to the 880×534 terminal window without surrounding dark padding.',
        alt: 'Terminal window showing memory-dev help with its six commands, then an answer to a question with cited source files.',
      },
      {
        srcPath: '/src/content/projects/tools-systems/dev-memory-ai/02-architecture-and-mcp.png',
        kind: 'window',
        caption: 'Architecture card: ingestion, semantic vectoring, vector storage and MCP delivery. Cropped to the 900×440 card without surrounding dark padding.',
        alt: 'Architecture card: code ingestion, semantic vectoring, vector storage and agent delivery, plus the MCP server and terminal UI.',
      },
    ],
  },
  {
    slug: 'spaceship-titanic',
    title: 'Spaceship Titanic EDA',
    category: 'ai-data',
    categoryLabel: 'AI & Data',
    summary: 'Kaggle exploratory data analysis uncovering 12 empirical passenger transport findings with reproducible scripts and statistical charts.',
    lead: 'Twelve findings from a Kaggle passenger dataset.',
    description: 'An in-depth exploratory data analysis of Kaggle\'s Spaceship Titanic dataset, uncovering 12 key empirical findings on passenger survival factors during spacetime anomaly transport. The analysis features reproducible Python scripts, detailed statistical visualisations, and a structured walkthrough notebook examining confounding demographic and behavioral features.',
    stack: ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Jupyter Notebook'],
    teamType: 'solo',
    teamLabel: 'Solo Project · KMUTT CSC345',
    roleNote: 'Individual project.',
    teamCredit: 'Solo coursework project for CSC345 Data Science at KMUTT, authored entirely by Aekarut Phetpradit.',
    repoUrl: 'https://github.com/AokDesu/csc345-spaceship-titanic',
    evidence: 'Charts rendered by the analysis notebook, tightly trimmed on their own paper.',
    cover: [0],
    stations: [
      {
        id: 'cryosleep',
        title: 'CryoSleep decides spending.',
        copy: 'Frozen passengers never spend a credit, and they are transported 2.5 times as often as awake passengers.',
        images: [1],
      },
      {
        id: 'confounding',
        title: 'Control for the confounder.',
        copy: 'Holding CryoSleep fixed flips FoodCourt spending from a negative to a positive association with being transported.',
        images: [2],
      },
      {
        id: 'deck',
        title: 'Deck by deck.',
        copy: 'Deck moves the transport rate from 36% to 73%, with 95% Wilson intervals; deck T has only five rows.',
        images: [3],
      },
      {
        id: 'spending',
        title: 'Spending, log-scaled.',
        copy: 'Spend is zero-inflated: 42% of passengers spend nothing at all, and among spenders the two outcome classes overlap.',
        images: [4],
      },
    ],
    images: [
      {
        srcPath: '/src/content/projects/ai-data/spaceship-titanic/01-companion-fate.png',
        kind: 'paper',
        caption: 'Passenger survival correlation by group and companion outcome; original chart tightly trimmed with an 8px matching-paper margin.',
        alt: 'Chart of transport odds by whether a companion was transported, for exact cabin, travel group and surname links, with confidence bars.',
      },
      {
        srcPath: '/src/content/projects/ai-data/spaceship-titanic/02-cryosleep-rule.png',
        kind: 'paper',
        caption: 'CryoSleep rule and why it matters; original chart trimmed to its content with an 8px margin of its own paper.',
        alt: 'Two charts: frozen passengers spend nothing on every service, and are transported 81.8% of the time against 32.9% for awake passengers.',
      },
      {
        srcPath: '/src/content/projects/ai-data/spaceship-titanic/03-confounding-dumbbell.png',
        kind: 'paper',
        caption: 'Naive versus within-awake effect of each service on transport rate; trimmed with an 8px margin of its own paper.',
        alt: 'Dumbbell chart of each service spend effect on transport rate, naive against awake passengers only; FoodCourt flips from negative to positive.',
      },
      {
        srcPath: '/src/content/projects/ai-data/spaceship-titanic/04-rate-by-deck.png',
        kind: 'paper',
        caption: 'Transport rate by deck with 95% Wilson intervals; trimmed with an 8px margin of its own paper.',
        alt: 'Bar chart of transport rate by deck A to T with confidence intervals; deck B is highest and deck T has only five rows.',
      },
      {
        srcPath: '/src/content/projects/ai-data/spaceship-titanic/05-spend-distributions.png',
        kind: 'paper',
        caption: 'Per-service spend distributions on a log scale, and total spend by outcome; trimmed with an 8px margin of its own paper.',
        alt: 'Six histograms of service spend on a log scale, five per service and one of total spend by outcome.',
      },
    ],
  },
  {
    slug: 'neural-network-from-scratch',
    title: 'Neural Network From Scratch',
    category: 'ai-data',
    categoryLabel: 'AI & Data',
    summary: 'Deep neural network written from scratch in modern C++ with custom Matrix algebra, backpropagation, and 92.2% MNIST accuracy.',
    lead: '92.23% on MNIST, from a hand-written matrix class.',
    description: 'A deep learning neural network built entirely from scratch in modern C++ with zero external machine learning libraries, designed to demonstrate the direct connection between linear algebra fundamentals and backpropagation. The system includes a custom matrix mathematics engine, activation functions (Leaky ReLU, Softmax), cross-entropy loss calculation, and trains on the MNIST dataset of 70,000 handwritten digits.',
    stack: ['C++20', 'CMake', 'Linear Algebra', 'Backpropagation', 'MNIST'],
    teamType: 'solo',
    teamLabel: 'Solo Project · Linear Algebra Course',
    roleNote: 'Individual project.',
    teamCredit: 'Solo academic project for Linear Algebra course at KMUTT, implemented from first principles by Aekarut Phetpradit.',
    repoUrl: 'https://github.com/AokDesu/Neural-Network-From-Scratch',
    evidence: 'A recorded Release-build training run and the project\'s results card.',
    cover: [0],
    stations: [
      {
        id: 'architecture',
        title: '784 → 256 → 128 → 10.',
        copy: 'Two Leaky ReLU hidden layers, a softmax output and cross-entropy loss, trained by backpropagation on a custom Matrix class with no machine-learning libraries.',
        images: [1],
      },
    ],
    images: [
      {
        srcPath: '/src/content/projects/ai-data/neural-network-from-scratch/01-training-output.png',
        kind: 'window',
        caption: 'Recorded Release-build training output showing 92.23% test accuracy; cropped to the 860×402 terminal window, with surrounding dark padding removed.',
        alt: 'Terminal window building the C++ neural network, loading MNIST, training one epoch and reporting 92.23% test accuracy.',
      },
      {
        srcPath: '/src/content/projects/ai-data/neural-network-from-scratch/02-architecture-and-accuracy.png',
        kind: 'window',
        caption: 'Architecture and results card (layer sizes, 92.23% accuracy, 0.3840 loss); cropped to the 900×474 card without surrounding dark padding.',
        alt: 'Card showing four network layers (784, 256, 128, 10) and results: 92.23% accuracy, 0.3840 loss, 70,000 samples.',
      },
    ],
  },
  {
    slug: 'basic-memory-access-benchmark',
    title: 'Basic Memory Access Benchmark',
    category: 'tools-systems',
    categoryLabel: 'Tools & Systems',
    summary: 'Low-level C++ systems benchmark evaluating CPU cache-line traversal latency and validating zero-cost abstractions across 128 MB heap buffers.',
    lead: 'Raw pointer or unique_ptr: what does the abstraction cost?',
    description: 'A low-level systems benchmark in modern C++ evaluating memory access latency and cache efficiency when traversing a 128 MB heap buffer. The study compares raw pointer (char*) traversal against C++ smart pointer (std::unique_ptr<char[]>) using a 64-byte stride to match CPU L1/L2 cache line boundaries, quantitatively verifying C++\'s zero-cost abstraction principle.',
    stack: ['C++20', 'GCC -O3', 'Memory Architecture', 'Benchmarking', 'Bash'],
    teamType: 'solo',
    teamLabel: 'Solo Project',
    roleNote: 'Individual project.',
    teamCredit: 'Solo systems research project authored by Aekarut Phetpradit.',
    repoUrl: 'https://github.com/AokDesu/Basic-memory-access-benchmark',
    evidence: 'A recorded benchmark run and the project\'s results card.',
    cover: [0],
    stations: [
      {
        id: 'results',
        title: '23.0 ms against 32.7 ms.',
        copy: 'Averaged over 10 runs on a 128 MB buffer with a 64-byte stride, the std::unique_ptr traversal measured 23.0 ms (5,576 MB/s) and the raw pointer 32.7 ms (3,911 MB/s).',
        images: [1],
      },
    ],
    images: [
      {
        srcPath: '/src/content/projects/tools-systems/basic-memory-access-benchmark/01-benchmark-run.png',
        kind: 'window',
        caption: 'Recorded benchmark compilation and execution output; cropped to the 860×484 terminal window without surrounding dark padding.',
        alt: 'Terminal window compiling and running the raw pointer and smart pointer benchmarks, with elapsed times and throughput.',
      },
      {
        srcPath: '/src/content/projects/tools-systems/basic-memory-access-benchmark/02-performance-chart.png',
        kind: 'window',
        caption: 'Results card: average time and throughput for both pointer types over 10 runs; cropped to the 900×516 card without surrounding dark padding.',
        alt: 'Results card comparing raw pointer at 32.7 ms with smart pointer at 23.0 ms, with throughput bars.',
      },
    ],
  },
  {
    slug: 'firstmate',
    title: 'Firstmate Contributions',
    category: 'open-source',
    categoryLabel: 'Open Source',
    summary: 'Upstream open-source pull requests contributed to firstmate autonomous agent fleet orchestration engine.',
    lead: 'Pull requests to an autonomous agent-fleet orchestrator.',
    description: 'Open-source contributions to firstmate, an autonomous agent fleet orchestration engine. Contributions include bug fixes, reliability enhancements, and protocol improvements delivered through upstream pull requests.',
    stack: ['Python', 'Bash', 'Git', 'GitHub Actions', 'Linux Systems'],
    teamType: 'solo',
    teamLabel: 'Open Source Contributions',
    roleNote: 'Individual contributions to an upstream project.',
    teamCredit: 'Open-source contributions authored by Aekarut Phetpradit (@AokDesu) to the kunchenguid/firstmate upstream repository.',
    repoUrl: 'https://github.com/kunchenguid/firstmate',
    prLinks: [
      { title: 'PR #6699', url: 'https://github.com/kunchenguid/firstmate/pull/6699', status: 'merged' },
      { title: 'PR #6695', url: 'https://github.com/kunchenguid/firstmate/pull/6695', status: 'open' },
    ],
    evidence: 'Recorded pull-request pages, cropped to the pull-request content without GitHub\'s site bars; statuses are as recorded, not live.',
    cover: [0],
    stations: [
      {
        id: 'pr-6695',
        title: '#6695: read slash commands above the popup.',
        copy: 'Open pull request: reads typed slash commands above Claude Code 2.1.291\'s marked popup row.',
        images: [1],
      },
      {
        id: 'pr-6699-diff',
        title: '#6699: one subshell.',
        copy: 'Merged: the documented project-management init command now runs in a subshell, so it leaves the caller\'s working directory unchanged.',
        images: [2],
      },
    ],
    images: [
      {
        srcPath: '/src/content/projects/open-source/firstmate/01-pr-6699-merged.png',
        kind: 'browser',
        caption: 'Recorded merged pull-request content, cropped to 1216×708 without GitHub site or repository navigation; shown in a shared browser frame.',
        alt: 'GitHub pull request #6699, merged, with its Intent and What Changed description.',
      },
      {
        srcPath: '/src/content/projects/open-source/firstmate/02-pr-6695-open.png',
        kind: 'browser',
        caption: 'Recorded open pull request #6695, cropped to 1232×720 without GitHub site or repository navigation; shown in the shared browser frame.',
        alt: 'GitHub pull request #6695, open, with its Intent and What Changed description.',
      },
      {
        srcPath: '/src/content/projects/open-source/firstmate/03-pr-6699-diff.png',
        kind: 'browser',
        caption: 'Recorded files-changed view of #6699, cropped to the 1392×480 pull-request header and diff without GitHub site bars or footer.',
        alt: 'Files-changed view of pull request #6699: one line in SKILL.md wrapped in a subshell.',
      },
    ],
  },
];
