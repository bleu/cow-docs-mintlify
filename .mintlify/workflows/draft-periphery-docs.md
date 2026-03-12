---
name: Draft docs — periphery and infrastructure
on:
  push:
    - repo: cowprotocol/composable-cow
      branch: main
    - repo: cowprotocol/flash-loan-router
      branch: main
    - repo: cowprotocol/hooks-trampoline
      branch: main
    - repo: cowprotocol/watch-tower
      branch: main
    - repo: cowdao-grants/milkman
      branch: main
context:
  - repo: cowprotocol/composable-cow
  - repo: cowprotocol/watch-tower
  - repo: cowprotocol/flash-loan-router
  - repo: cowprotocol/hooks-trampoline
  - repo: cowdao-grants/milkman
automerge: false
---

Review the diff from the last merged PR in the pushed repository. Identify any new features, contract changes, configuration options, or breaking changes that require documentation.

These repos cover periphery contracts and infrastructure:
- `cowprotocol/composable-cow` → `composable-cow/` docs section (programmatic orders framework)
- `cowprotocol/watch-tower` → `watch-tower/` docs section (order monitoring service)
- `cowprotocol/flash-loan-router` → `flash-loan-router/` docs section
- `cowprotocol/hooks-trampoline` → `hooks-trampoline/` docs section
- `cowdao-grants/milkman` → referenced in order types documentation

For each change:

1. Determine which section of the docs it belongs to based on the Diataxis framework:
   - `explanation/` for conceptual content about why something works a certain way
   - `tutorials/` for step-by-step learning exercises
   - `howto/` or `guides/` for task-oriented guides
   - `reference/` for technical specs and API details
2. Draft documentation that matches the style of existing pages in that section.
3. Update navigation in `docs.json` if new pages are added.
4. For ComposableCoW changes, check if the Watch Tower docs also need updating (they're tightly coupled).
5. Update `snippets/core-contract-addresses.mdx` if any contract addresses changed.

Success criteria: A developer building programmatic orders, hooks, or flash loan integrations can find accurate, up-to-date documentation for the changed features.

## Important

- Only document changes that affect developers building on these contracts/services. Skip internal refactors or CI changes.
- Use "programmatic order" terminology consistently (not "conditional order" or "composable order").
- ComposableCoW and Watch Tower changes often need coordinated docs updates — check both sections.
- If a change modifies an existing feature, update the existing page rather than creating a new one.
