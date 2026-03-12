---
name: Draft docs — core protocol
on:
  push:
    - repo: cowprotocol/contracts
      branch: main
    - repo: cowprotocol/services
      branch: main
    - repo: cowprotocol/ethflowcontract
      branch: main
context:
  - repo: cowprotocol/contracts
  - repo: cowprotocol/services
  - repo: cowprotocol/ethflowcontract
automerge: false
---

Review the diff from the last merged PR in the pushed repository. Identify any new features, API endpoints, smart contract changes, solver changes, or configuration options that require documentation.

These repos cover the core protocol: settlement contracts, backend services (orderbook API, driver, solver interface), and the Eth-flow contract. Changes here typically affect:
- `cow-protocol/reference/` — API specs, contract reference, auction mechanics
- `cow-protocol/explanation/` — how the protocol works, order types, fee model
- `services/` — backend service documentation
- `snippets/` — contract addresses, supported networks

For each change that affects end users or developers integrating with CoW Protocol:

1. Determine which section of the docs it belongs to based on the Diataxis framework:
   - `explanation/` for conceptual content about why something works a certain way
   - `tutorials/` for step-by-step learning exercises
   - `howto/` for task-oriented guides
   - `reference/` for technical specs and API details
2. Draft documentation that matches the style of existing pages in that section.
3. Update navigation in `docs.json` if new pages are added.
4. Update any related snippets in `snippets/` if shared content like contract addresses or supported networks changed.

Success criteria: A developer reading the new or updated documentation understands what changed, whether it affects them, and how to use it.

## Important

- Only document changes that affect end users or integrators. Skip internal refactors, dependency updates, or CI changes.
- Match the existing page structure and component usage patterns.
- If a change modifies an existing feature, update the existing page rather than creating a new one.
