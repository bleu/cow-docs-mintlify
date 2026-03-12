# CoW DAO Documentation

Documentation for [CoW Protocol](https://cow.fi), CoW AMM, and the broader CoW DAO ecosystem — built with [Mintlify](https://mintlify.com/) and structured using the [Diataxis framework](https://diataxis.fr/).

**Live site:** [docs.cow.bleu.builders](https://docs.cow.bleu.builders)

## What's in this repo

~370 pages covering the full CoW ecosystem:

| Section | Content |
|---------|---------|
| **CoW Protocol** | Architecture, order types, intents, batch auctions, flash loans, hooks, integration guides |
| **Contracts** | Core settlement contracts, ComposableCoW, Hooks Trampoline, Flash Loan Router |
| **TypeScript SDK** | Guides, tutorials, and API reference for `@cowprotocol/cow-sdk` |
| **Python SDK** | Guides and API reference for `cow-py` |
| **Backend** | Services, BFF, Watch Tower |
| **Governance** | Mission, token, grants, fee structure |

Every page belongs to exactly one [Diataxis](https://diataxis.fr/) quadrant (tutorial, how-to, explanation, or reference), and the homepage includes a ["Find Your Path" table](https://docs.cow.bleu.builders) routing different audiences to their starting points.

## Getting started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18+)
- [Mintlify CLI](https://mintlify.com/docs/development)

### Local development

```bash
# Install the Mintlify CLI
npm i -g mintlify

# Start the dev server
mintlify dev
```

The site will be available at `http://localhost:3000`.

## Project structure

```
├── docs.json                  # Mintlify configuration (navigation, theme, settings)
├── index.mdx                  # Homepage
├── cow-protocol/              # Core protocol docs
├── cow-sdk/                   # TypeScript SDK docs
├── cow-py/                    # Python SDK docs
├── cow-contracts/             # Contract reference docs
├── composable-cow/            # Programmatic orders (TWAP, stop-loss, etc.)
├── watch-tower/               # Watch Tower service docs
├── services/                  # Backend services docs
├── bff/                       # Backend for Frontend docs
├── governance/                # DAO governance docs
├── snippets/                  # Reusable MDX snippets (addresses, networks, etc.)
├── images/                    # Static assets
├── fonts/                     # Custom fonts (Studio Feixen Sans)
└── .mintlify/
    ├── AGENTS.md              # AI agent instructions for doc maintenance
    ├── Assistant.md            # AI chat assistant system prompt
    └── workflows/             # Automated maintenance workflows
        ├── draft-feature-docs.md      # Triggered on core repo pushes
        ├── draft-sdk-docs.md          # Triggered on SDK/frontend pushes
        ├── draft-periphery-docs.md    # Triggered on periphery repo pushes
        ├── seo-audit.md               # Weekly quality & SEO check (Mondays)
        └── stale-content-check.md     # Weekly staleness check (Wednesdays)
```

## Automated workflows

Five [Mintlify Workflows](https://mintlify.com/docs/agent/workflows) keep the docs current:

- **3 push-triggered workflows** watch 12 repos across `cowprotocol` and `cowdao-grants` — when code merges, the agent reviews the diff and opens a PR with documentation updates
- **SEO audit** (weekly, Mondays) — checks Diataxis compliance, frontmatter, broken links
- **Stale content check** (weekly, Wednesdays) — compares docs against source repos to flag outdated addresses, endpoints, and code examples

All workflows open PRs for human review (`automerge: false`).

## AI features

The site includes Mintlify's built-in AI capabilities:

- **AI chat** in search — powered by a [custom system prompt](.mintlify/Assistant.md) with CoW-specific context
- **Contextual AI options** on every page — Claude, ChatGPT, Perplexity, Cursor, MCP
- **`skill.md`** auto-generated following the [agentskills.io](https://agentskills.io/specification) spec — lets AI agents discover CoW Protocol capabilities

## Contributing

PRs are welcome. When adding or editing content:

1. Follow the [Diataxis framework](https://diataxis.fr/) — don't mix quadrants in a single page
2. Use consistent [terminology](.mintlify/AGENTS.md) (e.g., "programmatic order" not "conditional order")
3. Include working code examples with real addresses, not placeholders
4. Add frontmatter with `title` and `description` (50–160 chars) to every page
5. Update `docs.json` navigation when adding new pages

See [`.mintlify/AGENTS.md`](.mintlify/AGENTS.md) for the full writing guide.

## License

Content is open source. All documentation is stored as Markdown/MDX in this Git repo with no vendor lock-in.

---

Built by [Bleu](https://bleu.builders) — [@bleu](https://github.com/bleu)
