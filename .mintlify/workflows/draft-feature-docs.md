---
name: Draft docs for new features
on:
  push:
    - repo: cowprotocol/contracts
      branch: main
    - repo: cowprotocol/services
      branch: main
    - repo: cowprotocol/cow-sdk
      branch: main
    - repo: cowprotocol/cowswap
      branch: main
    - repo: cowprotocol/composable-cow
      branch: main
    - repo: cowprotocol/flash-loan-router
      branch: main
    - repo: cowprotocol/hooks-trampoline
      branch: main
    - repo: cowprotocol/watch-tower
      branch: main
    - repo: cowprotocol/ethflowcontract
      branch: main
    - repo: cowdao-grants/cow-py
      branch: main
    - repo: cowdao-grants/cow-shed
      branch: main
    - repo: cowdao-grants/milkman
      branch: main
context:
  - repo: cowprotocol/contracts
  - repo: cowprotocol/services
  - repo: cowprotocol/cow-sdk
  - repo: cowprotocol/cowswap
  - repo: cowprotocol/composable-cow
  - repo: cowprotocol/flash-loan-router
  - repo: cowprotocol/hooks-trampoline
  - repo: cowprotocol/watch-tower
  - repo: cowprotocol/ethflowcontract
  - repo: cowdao-grants/cow-py
  - repo: cowdao-grants/cow-shed
  - repo: cowdao-grants/milkman
automerge: false
---

Review the diff from the last merged PR in the pushed repository. Identify any new features, API endpoints, smart contract changes, solver changes, or configuration options that require documentation.

For each change that affects end users or developers integrating with CoW Protocol:

1. Determine which section of the docs it belongs to based on the Diataxis framework:
   - `explanation/` for conceptual content about why something works a certain way
   - `tutorials/` for step-by-step learning exercises
   - `howto/` for task-oriented guides
   - `reference/` for technical specs and API details
2. Draft documentation that matches the style of existing pages in that section.
3. Update navigation in `docs.json` if new pages are added.
4. Update any related snippets in `snippets/` if shared content like contract addresses or supported networks changed.

Follow the writing guidelines in `about-these-docs.mdx`:
- Direct and concise — lead with the answer
- Code-first — show examples alongside concepts
- Use Mintlify components (`<Steps>`, `<Tabs>`, `<CodeGroup>`, `<Note>`, `<Warning>`) where appropriate

Success criteria: A developer reading the new or updated documentation understands what changed, whether it affects them, and how to use it.

## Important

- Only document changes that affect end users or integrators. Skip internal refactors, dependency updates, or CI changes.
- Match the existing page structure and component usage patterns.
- If a change modifies an existing feature, update the existing page rather than creating a new one.
