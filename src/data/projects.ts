export interface ProjectImage {
  srcPath: string; // key for import.meta.glob
  caption: string;
}

export interface PullRequestLink {
  title: string;
  url: string;
  status: 'merged' | 'open';
}

export interface Project {
  slug: string;
  title: string;
  category: 'mobile-apps' | 'ai-data' | 'tools-systems' | 'open-source';
  categoryLabel: string;
  summary: string;
  description: string;
  stack: string[];
  teamType: 'team' | 'solo';
  teamLabel: string;
  teamCredit: string;
  repoUrl: string | null;
  prLinks?: PullRequestLink[];
  coverImage: string;
  images: ProjectImage[];
}

export const CATEGORIES = [
  { id: 'all', label: 'All Projects' },
  { id: 'mobile-apps', label: 'Mobile Apps' },
  { id: 'ai-data', label: 'AI & Data' },
  { id: 'tools-systems', label: 'Tools & Systems' },
  { id: 'open-source', label: 'Open Source' },
] as const;

export const PROJECTS: Project[] = [
  {
    slug: 'droneaid',
    title: 'DroneAid',
    category: 'mobile-apps',
    categoryLabel: 'Mobile Apps',
    summary: 'Drone relief-supply delivery simulator for conflict zones, combining a Flutter mobile client with a serverless Firebase event-driven backend.',
    description: 'DroneAid is a drone-based relief-supply delivery simulator designed for civilians impacted by armed conflict or natural disasters. The application pairs an intuitive mobile client with an event-driven serverless backend to orchestrate real-time emergency supply requests, autonomous drone dispatching, live telemetry simulation, and administrator inventory and fleet controls.',
    stack: ['Flutter', 'Dart', 'Firebase Firestore', 'Cloud Functions', 'TypeScript', 'Firebase Auth', 'FCM'],
    teamType: 'team',
    teamLabel: 'Group Project · KMUTT CSC291',
    teamCredit: '5-person team (CSC291 at KMUTT, 2026). Aekarut Phetpradit served as Team Lead and Backend Architect, authoring backend Cloud Functions (callables, triggers, scheduled ticks), Firestore security rules with comprehensive test suites, role-aware routing guards, and the emulator dev loop.',
    repoUrl: 'https://github.com/AokDesu/CSC291-DroneAid',
    coverImage: '/src/content/projects/mobile-apps/droneaid/01-login-screen.png',
    images: [
      {
        srcPath: '/src/content/projects/mobile-apps/droneaid/01-login-screen.png',
        caption: 'Authentication and role selection view captured from UI design specifications (P-U-01).',
      },
      {
        srcPath: '/src/content/projects/mobile-apps/droneaid/02-request-screen.png',
        caption: 'Civilian emergency relief supply request interface captured from UI design specifications (P-U-03).',
      },
      {
        srcPath: '/src/content/projects/mobile-apps/droneaid/03-tracking-screen.png',
        caption: 'Real-time relief flight and delivery tracking view captured from UI design specifications (P-U-05).',
      },
      {
        srcPath: '/src/content/projects/mobile-apps/droneaid/04-admin-map.png',
        caption: 'Operational command center map with drone telemetry and relief hubs captured from UI specifications (P-A-05).',
      },
      {
        srcPath: '/src/content/projects/mobile-apps/droneaid/05-architecture.png',
        caption: 'C4 software architecture diagram rendered from technical documentation.',
      },
    ],
  },
  {
    slug: 'scamreport',
    title: 'ScamReport',
    category: 'mobile-apps',
    categoryLabel: 'Mobile Apps',
    summary: 'Community-driven incident reporting and scam intelligence mobile application with shared TypeBox schemas and moderation workflows.',
    description: 'ScamReport is a mobile application empowering citizens to report fraudulent schemes, verify suspicious communications, search an aggregated database of verified scam incidents, and streamline administrative moderation workflows.',
    stack: ['Flutter', 'Dart', 'Elysia.js', 'TypeBox', 'TypeScript', 'Bun', 'PostgreSQL'],
    teamType: 'team',
    teamLabel: 'Team Project · KMUTT CSC234',
    teamCredit: 'Team project (CSC234 User-Centered Mobile Application, KMUTT). Aekarut contributed as full-stack developer focusing on mobile application architecture, state management, and TypeBox API contract integration.',
    repoUrl: 'https://github.com/CSC234-UserCenteredMobileApp/ScamReport',
    coverImage: '/src/content/projects/mobile-apps/scamreport/01-guest-feed.png',
    images: [
      {
        srcPath: '/src/content/projects/mobile-apps/scamreport/01-guest-feed.png',
        caption: 'Public scam incident discovery feed captured from standalone interactive prototype at mobile viewport (390×844).',
      },
      {
        srcPath: '/src/content/projects/mobile-apps/scamreport/02-user-report.png',
        caption: 'Multi-step incident reporting form with evidence attachment captured from standalone interactive prototype (390×844).',
      },
      {
        srcPath: '/src/content/projects/mobile-apps/scamreport/03-admin-dashboard.png',
        caption: 'Moderation administrative overview with real-time statistics captured from standalone interactive prototype (390×844).',
      },
      {
        srcPath: '/src/content/projects/mobile-apps/scamreport/04-moderation-queue.png',
        caption: 'Content review, evidence inspection, and report approval queue captured from standalone interactive prototype (390×844).',
      },
      {
        srcPath: '/src/content/projects/mobile-apps/scamreport/05-feed-search.png',
        caption: 'Incident search by category, phone number, and account number captured from standalone interactive prototype (390×844).',
      },
    ],
  },
  {
    slug: 'spaceship-titanic',
    title: 'Spaceship Titanic EDA',
    category: 'ai-data',
    categoryLabel: 'AI & Data',
    summary: 'Kaggle exploratory data analysis uncovering 12 empirical passenger transport findings with reproducible scripts and statistical charts.',
    description: 'An in-depth exploratory data analysis of Kaggle\'s Spaceship Titanic dataset, uncovering 12 key empirical findings on passenger survival factors during spacetime anomaly transport. The analysis features reproducible Python scripts, detailed statistical visualisations, and a structured walkthrough notebook examining confounding demographic and behavioral features.',
    stack: ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Jupyter Notebook'],
    teamType: 'solo',
    teamLabel: 'Solo Project · KMUTT CSC345',
    teamCredit: 'Solo coursework project for CSC345 Data Science at KMUTT, authored entirely by Aekarut Phetpradit.',
    repoUrl: 'https://github.com/AokDesu/csc345-spaceship-titanic',
    coverImage: '/src/content/projects/ai-data/spaceship-titanic/01-companion-fate.png',
    images: [
      {
        srcPath: '/src/content/projects/ai-data/spaceship-titanic/01-companion-fate.png',
        caption: 'Passenger survival correlation segmented by traveling group size and companion outcome.',
      },
      {
        srcPath: '/src/content/projects/ai-data/spaceship-titanic/02-cryosleep-rule.png',
        caption: 'CryoSleep state vs transported outcome decision rule chart.',
      },
      {
        srcPath: '/src/content/projects/ai-data/spaceship-titanic/03-confounding-dumbbell.png',
        caption: 'Dumbbell plot analyzing confounding factors across amenity spending and cabin tiers.',
      },
      {
        srcPath: '/src/content/projects/ai-data/spaceship-titanic/04-rate-by-deck.png',
        caption: 'Transported probability breakdown across spaceship decks and cryosleep status.',
      },
      {
        srcPath: '/src/content/projects/ai-data/spaceship-titanic/05-spend-distributions.png',
        caption: 'Bimodal luxury expenditure distributions (RoomService, FoodCourt, Spa, VRDeck).',
      },
    ],
  },
  {
    slug: 'neural-network-from-scratch',
    title: 'Neural Network From Scratch',
    category: 'ai-data',
    categoryLabel: 'AI & Data',
    summary: 'Deep neural network written from scratch in modern C++ with custom Matrix algebra, backpropagation, and 92.2% MNIST accuracy.',
    description: 'A deep learning neural network built entirely from scratch in modern C++ with zero external machine learning libraries, designed to demonstrate the direct connection between linear algebra fundamentals and backpropagation. The system includes a custom matrix mathematics engine, activation functions (Leaky ReLU, Softmax), cross-entropy loss calculation, and trains on the MNIST dataset of 70,000 handwritten digits.',
    stack: ['C++20', 'CMake', 'Linear Algebra', 'Backpropagation', 'MNIST'],
    teamType: 'solo',
    teamLabel: 'Solo Project · Linear Algebra Course',
    teamCredit: 'Solo academic project for Linear Algebra course at KMUTT, implemented from first principles by Aekarut Phetpradit.',
    repoUrl: 'https://github.com/AokDesu/Neural-Network-From-Scratch',
    coverImage: '/src/content/projects/ai-data/neural-network-from-scratch/01-training-output.png',
    images: [
      {
        srcPath: '/src/content/projects/ai-data/neural-network-from-scratch/01-training-output.png',
        caption: 'Live terminal output capture of the Release build compiling and running the training loop, successfully achieving 92.23% accuracy on 10,000 test images.',
      },
      {
        srcPath: '/src/content/projects/ai-data/neural-network-from-scratch/02-architecture-and-accuracy.png',
        caption: 'Network topology diagram (784 → 256 → 128 → 10) and performance benchmark card rendered from verified execution metrics.',
      },
    ],
  },
  {
    slug: 'basic-memory-access-benchmark',
    title: 'Basic Memory Access Benchmark',
    category: 'tools-systems',
    categoryLabel: 'Tools & Systems',
    summary: 'Low-level C++ systems benchmark evaluating CPU cache-line traversal latency and validating zero-cost abstractions across 128 MB heap buffers.',
    description: 'A low-level systems benchmark in modern C++ evaluating memory access latency and cache efficiency when traversing a 128 MB heap buffer. The study compares raw pointer (char*) traversal against C++ smart pointer (std::unique_ptr<char[]>) using a 64-byte stride to match CPU L1/L2 cache line boundaries, quantitatively verifying C++\'s zero-cost abstraction principle.',
    stack: ['C++20', 'GCC -O3', 'Memory Architecture', 'Benchmarking', 'Bash'],
    teamType: 'solo',
    teamLabel: 'Solo Project',
    teamCredit: 'Solo systems research project authored by Aekarut Phetpradit.',
    repoUrl: 'https://github.com/AokDesu/Basic-memory-access-benchmark',
    coverImage: '/src/content/projects/tools-systems/basic-memory-access-benchmark/01-benchmark-run.png',
    images: [
      {
        srcPath: '/src/content/projects/tools-systems/basic-memory-access-benchmark/01-benchmark-run.png',
        caption: 'Live terminal capture of the compilation and execution of bechmark.sh with millisecond timings and throughputs.',
      },
      {
        srcPath: '/src/content/projects/tools-systems/basic-memory-access-benchmark/02-performance-chart.png',
        caption: 'Comparative analysis chart illustrating average execution times (23.0ms vs 32.7ms) and memory throughput (5,576 MB/s vs 3,911 MB/s) over 10 consecutive benchmark runs.',
      },
    ],
  },
  {
    slug: 'nummailai',
    title: 'NumMaiLai',
    category: 'tools-systems',
    categoryLabel: 'Tools & Systems',
    summary: 'Automated monitoring system for Metropolitan Waterworks Authority (MWA) pipe repairs with rich Discord alerts and interactive GIS dashboard.',
    description: 'An automated monitoring and notification service for Metropolitan Waterworks Authority (MWA) pipe repair operations and unplanned water outages across Bangkok and adjacent provinces. The tool delivers formatted Discord Webhook alerts and hosts an interactive GIS web management dashboard allowing users to define radius circles, keyword filters, and responsible branch criteria.',
    stack: ['Python 3', 'MWA Open Data API', 'Discord Webhook API', 'Leaflet.js', 'OpenStreetMap'],
    teamType: 'solo',
    teamLabel: 'Solo Project',
    teamCredit: 'Solo utility project conceived and implemented by Aekarut Phetpradit.',
    repoUrl: 'https://github.com/AokDesu/NumMaiLai',
    coverImage: '/src/content/projects/tools-systems/nummailai/01-discord-alert.png',
    images: [
      {
        srcPath: '/src/content/projects/tools-systems/nummailai/01-discord-alert.png',
        caption: 'Discord Rich Embed notification rendered in Discord dark-theme client using official test fixture event data without requiring live credentials.',
      },
      {
        srcPath: '/src/content/projects/tools-systems/nummailai/02-web-dashboard.png',
        caption: 'Live capture of the local NumMaiLai GIS web dashboard (http://localhost:8085) displaying interactive outage map and filter controls.',
      },
    ],
  },
  {
    slug: 'dev-memory-ai',
    title: 'dev-memory-ai',
    category: 'tools-systems',
    categoryLabel: 'Tools & Systems',
    summary: 'Semantic codebase memory engine and Model Context Protocol (MCP) server with Tree-sitter AST chunking and SQLite vector persistence.',
    description: 'An AI-powered semantic codebase memory engine and Model Context Protocol (MCP) server that empowers AI development tools to deeply understand codebases. The tool parses git repositories using Tree-sitter for AST-level chunking, generates vector embeddings, stores semantic indices in a local SQLite database via Prisma, and serves natural language code query tools directly to Claude Code and Cursor.',
    stack: ['TypeScript', 'Node.js', 'Model Context Protocol (MCP)', 'Tree-sitter', 'Prisma', 'SQLite', 'Ink TUI'],
    teamType: 'team',
    teamLabel: 'Collaborative Open Source',
    teamCredit: 'Collaborative project. Aekarut served as the lead refactorer who restructured the architecture into production CLI v1.0 and MCP server, authoring the AST indexing pipeline, React/Ink terminal interface, and MCP tool endpoints.',
    repoUrl: 'https://github.com/AokDesu/dev-memory-ai',
    coverImage: '/src/content/projects/tools-systems/dev-memory-ai/01-cli-help.png',
    images: [
      {
        srcPath: '/src/content/projects/tools-systems/dev-memory-ai/01-cli-help.png',
        caption: 'Live terminal execution of memory-dev --help and natural language query workflow.',
      },
      {
        srcPath: '/src/content/projects/tools-systems/dev-memory-ai/02-architecture-and-mcp.png',
        caption: 'Architecture diagram showing AST chunking, local vector storage, and Model Context Protocol delivery to AI coding agents.',
      },
    ],
  },
  {
    slug: 'firstmate',
    title: 'Firstmate Contributions',
    category: 'open-source',
    categoryLabel: 'Open Source',
    summary: 'Upstream open-source pull requests contributed to firstmate autonomous agent fleet orchestration engine.',
    description: 'Open-source contributions to firstmate, an autonomous agent fleet orchestration engine. Contributions include bug fixes, reliability enhancements, and protocol improvements delivered through upstream pull requests.',
    stack: ['Python', 'Bash', 'Git', 'GitHub Actions', 'Linux Systems'],
    teamType: 'solo',
    teamLabel: 'Open Source Contributions',
    teamCredit: 'Open-source contributions authored by Aekarut Phetpradit (@AokDesu) to the kunchenguid/firstmate upstream repository.',
    repoUrl: 'https://github.com/kunchenguid/firstmate',
    prLinks: [
      {
        title: 'PR #6699 (Merged)',
        url: 'https://github.com/kunchenguid/firstmate/pull/6699',
        status: 'merged',
      },
      {
        title: 'PR #6695 (Open)',
        url: 'https://github.com/kunchenguid/firstmate/pull/6695',
        status: 'open',
      },
    ],
    coverImage: '/src/content/projects/open-source/firstmate/01-pr-6699-merged.png',
    images: [
      {
        srcPath: '/src/content/projects/open-source/firstmate/01-pr-6699-merged.png',
        caption: 'Live browser capture of merged Pull Request #6699 on GitHub.',
      },
      {
        srcPath: '/src/content/projects/open-source/firstmate/02-pr-6695-open.png',
        caption: 'Live browser capture of open Pull Request #6695 on GitHub.',
      },
      {
        srcPath: '/src/content/projects/open-source/firstmate/03-pr-6699-diff.png',
        caption: 'Live browser capture of the code review diff for PR #6699.',
      },
    ],
  },
];
