# CoW DAO Documentation Agent

You are maintaining documentation for CoW Protocol, CoW Swap, CoW AMM, and the broader CoW DAO ecosystem. When making changes, follow these instructions.

## Documentation framework

All content follows the [Diataxis framework](https://diataxis.fr). Every page belongs to exactly one quadrant:

- **Tutorials** (`tutorials/`) — Step-by-step lessons with a learning outcome. "By the end, you'll have..."
- **How-to guides** (`howto/`) — Task-oriented instructions for a specific goal. "How to..."
- **Explanation** (`explanation/`) — Conceptual content about why something works. "Why CoW Protocol uses..."
- **Reference** (`reference/`) — Technical specifications, complete and precise. "The /quote endpoint accepts..."

When creating or moving content, use this decision tree:
1. Does it teach by doing? → Tutorial
2. Does it solve a specific task? → How-to guide
3. Does it explain why or how? → Explanation
4. Otherwise → Reference

Never mix quadrants in a single page. A tutorial should not include reference tables. A reference page should not include step-by-step walkthroughs.

## Site structure

| Tab | Content |
|-----|---------|
| **CoW Protocol** | Overview, explanation (how it works, benefits, order types, flash loans, architecture), CoW Swap (trading tutorials, widget, hook dApps), CoW Explorer, integration (API, quickstarts, testing), reference (APIs, core, auctions) |
| **Contracts** | Core contracts, Hooks Trampoline, ComposableCoW, Contracts SDK, Flash Loan Router |
| **TypeScript SDK** | Installation, concepts, guides, API reference, migration |
| **Python SDK** | Installation, concepts, guides, API reference |
| **Backend** | BFF, Services, Watch Tower |
| **Governance** | Mission & token, grants, fees |

Navigation is defined in `docs.json`. Update it when adding new pages.

## Writing style

- **Direct and concise** — Lead with the answer, not the reasoning.
- **Code-first** — Show examples alongside concepts. Every integration page should have a working code example.
- **Multi-language** — Use `<Tabs>` with TypeScript, Python, and cURL where applicable.
- **Practical** — Every page should help someone do something.

### Terminology

Use these terms consistently:

| Use this | Not this |
|----------|----------|
| intent | order request |
| solver | solver bot, solver agent |
| batch auction | auction, batch |
| programmatic order | conditional order, composable order, ComposableCoW order |
| CoW (Coincidence of Wants) | coincidence of wants (lowercase) |
| Fair Combinatorial Batch Auction | FCBA (on first use, spell it out) |
| Uniform Directed Clearing Prices | Directional/Delivering Clearing Prices |

### Mintlify components

Use these components where appropriate:

- `<Steps>` / `<Step>` — Sequential procedures
- `<Tabs>` / `<Tab>` — Multi-language code examples or alternative approaches
- `<CodeGroup>` — Multiple related code blocks
- `<Note>` — Important context that doesn't interrupt flow
- `<Warning>` — Breaking changes, security considerations, or common pitfalls
- `<Tip>` — Helpful shortcuts or best practices
- `<CardGroup>` / `<Card>` — Navigation grids for section landing pages
- `<Accordion>` — Expandable details for advanced or optional content
- Mermaid diagrams — Architecture and flow diagrams

## Personas

Keep these audiences in mind when writing:

| Persona | Cares about | Start here |
|---------|-------------|------------|
| **Trader** | How to swap, order types, fees | CoW Swap tutorials |
| **Integrator** | Widget, SDK, API, testing | Integration overview |
| **Solver operator** | Running solvers, auction mechanics, rewards | Solver tutorials |
| **Smart contract dev** | ComposableCoW, hooks, flash loans | Contracts reference |
| **Backend contributor** | Services architecture, Watch Tower | Backend section |
| **DAO participant** | Governance, grants, voting | Governance section |

## Frontmatter

Every MDX file must have:

```yaml
---
title: "Page Title"
description: "One sentence describing what this page helps the reader accomplish."
---
```

- `description` should be 50–160 characters for SEO.
- Add `sidebarTitle` if the `title` is longer than 30 characters.

## Code examples

- Always include a language identifier on code blocks.
- Use real contract addresses and endpoints, not placeholders.
- Show error handling in integration examples.
- For SDK examples, use v7 (`@cowprotocol/cow-sdk`). If referencing older versions, note the migration guide.

### Key addresses (Ethereum Mainnet)

- Vault Relayer: `0xC92E8bdf79f0507f65a392b0ab4667716BFE0110`
- Settlement: `0x9008D19f58AAbD9eD0D60971565AA8510560ab41`
- ComposableCoW: `0xfdaFc9d1902f4e0b84f65F49f244b32b31013b74`

For other chains, reference `snippets/core-contract-addresses.mdx`.

## Supported networks

Ethereum, Gnosis Chain, Arbitrum One, Base, and Sepolia (testnet). Check `snippets/supported-networks.mdx` for the canonical list.

## Shared content

Reusable snippets live in `snippets/`. Import them rather than duplicating:

- `snippets/core-contract-addresses.mdx` — Contract addresses per chain
- `snippets/supported-networks.mdx` — Network support table
- `snippets/sdk-install.mdx` — SDK installation commands
- `snippets/community-links.mdx` — Discord, GitHub, Forum, Snapshot

## What not to do

- Do not add general DeFi education, Solidity tutorials, or Ethereum basics unless directly relevant to a CoW integration.
- Do not change technical content meaning when fixing style issues.
- Do not create pages that mix Diataxis quadrants.
- Do not use placeholder addresses or endpoints — use real ones or reference snippets.
- Do not introduce new terminology without checking the terminology table above.
- Do not remove content without verifying it is truly outdated against the source repos.
