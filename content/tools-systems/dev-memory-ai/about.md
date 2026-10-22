# dev-memory-ai

An AI-powered semantic codebase memory engine and Model Context Protocol (MCP) server that empowers AI development tools to deeply understand codebases. The tool parses git repositories using Tree-sitter for AST-level chunking, generates vector embeddings, stores semantic indices in a local SQLite database via Prisma, and serves natural language code query tools directly to Claude Code and Cursor.

## Stack
- **Core**: TypeScript, Node.js
- **Protocol**: Model Context Protocol (MCP) SDK
- **Code Analysis**: Web Tree-sitter (AST chunking)
- **Database & Vectors**: Prisma ORM, SQLite, Xenova Transformers / Gemini Embeddings
- **Interface**: React / Ink Terminal UI (TUI), Commander CLI

## Team
- **Type**: Collaborative Project
- **Aekarut's Role**: Lead refactorer who pivoted the project into its production CLI v1.0 and MCP server architecture, implementing the interactive Ink terminal dashboard, AST indexing pipeline, and MCP tool handlers.

## Links
- **Source Code**: [GitHub Repository (AokDesu/dev-memory-ai)](https://github.com/AokDesu/dev-memory-ai)

## Image Production
- `01-cli-help.png`: Recorded `memory-dev --help` and natural-language query workflow. ImageMagick crop of the existing capture: 880×534 at x=60, y=58, retaining the terminal window only and removing surrounding dark padding.
- `02-architecture-and-mcp.png`: Architecture card: AST chunking, local vector storage and Model Context Protocol delivery to AI coding agents. ImageMagick crop of the existing image: 900×440 at x=50, y=105, the card's own bounds, removing the surrounding dark padding.
