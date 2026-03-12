---
name: Draft docs — SDKs and frontend
on:
  push:
    - repo: cowprotocol/cow-sdk
      branch: main
    - repo: cowprotocol/cowswap
      branch: main
    - repo: cowdao-grants/cow-py
      branch: main
    - repo: cowdao-grants/cow-shed
      branch: main
context:
  - repo: cowprotocol/cow-sdk
  - repo: cowprotocol/cowswap
  - repo: cowdao-grants/cow-py
  - repo: cowdao-grants/cow-shed
automerge: false
---

Review the diff from the last merged PR in the pushed repository. Identify any new features, API changes, breaking changes, or configuration options that require documentation.

These repos cover developer-facing SDKs and the CoW Swap frontend:
- `cowprotocol/cow-sdk` → `cow-sdk/` docs section (TypeScript SDK)
- `cowdao-grants/cow-py` → `cow-py/` docs section (Python SDK)
- `cowprotocol/cowswap` → `cow-swap/` docs section (widget, hooks, UI features)
- `cowdao-grants/cow-shed` → referenced in hooks and smart contract wallet docs

For each change:

1. Determine which section of the docs it belongs to based on the Diataxis framework:
   - `explanation/` for conceptual content
   - `tutorials/` for step-by-step learning exercises
   - `howto/` or `guides/` for task-oriented guides
   - `reference/` or `api/` for technical specs
2. Draft documentation that matches the style of existing pages in that section.
3. Update navigation in `docs.json` if new pages are added.
4. For SDK changes, include code examples using the new API. Show TypeScript and Python side-by-side in `<Tabs>` where both SDKs support the feature.
5. For breaking changes, update the relevant migration guide.

Success criteria: A developer reading the new or updated documentation can use the new feature or migrate from the old API without consulting source code.

## Important

- Only document changes that affect SDK users or CoW Swap integrators. Skip internal refactors or CI changes.
- For cow-sdk, ensure examples use v7 patterns. Note migration steps if v6 behavior changes.
- For cow-py, match the async patterns used in existing Python docs.
- If a change modifies an existing feature, update the existing page rather than creating a new one.
