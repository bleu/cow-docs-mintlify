---
name: Stale content check — periphery
on:
  cron: "0 9 * * 3"
context:
  - repo: cowprotocol/composable-cow
  - repo: cowprotocol/watch-tower
  - repo: cowprotocol/flash-loan-router
  - repo: cowprotocol/hooks-trampoline
  - repo: cowprotocol/ethflowcontract
automerge: false
---

Identify documentation pages that may be out of date by comparing docs content against the current state of periphery and infrastructure repositories.

Check for:

1. **ComposableCoW**: Compare `composable-cow/` docs against the composable-cow repo for interface changes, new order types, or deprecated patterns.
2. **Watch Tower**: Compare `watch-tower/` docs against the watch-tower repo for configuration changes, new features, or deployment updates.
3. **Flash Loan Router**: Compare `flash-loan-router/` docs against the repo for supported protocols, deployment addresses, or API changes.
4. **Hooks Trampoline**: Compare `hooks-trampoline/` docs against the repo for contract interface changes.
5. **Eth-flow**: Compare eth-flow documentation in `cow-protocol/reference/contracts/periphery/` against the ethflowcontract repo.
6. **Contract addresses**: Flag any addresses in docs that don't match deployment artifacts in the repos.

Open a pull request that lists all findings organized by severity:
- **Critical**: Incorrect contract addresses, wrong interface signatures, or broken code examples
- **Warning**: Outdated configuration examples, stale deployment details
- **Info**: Pages not updated in over 6 months that reference these repos

Success criteria: All critical and warning issues have proposed fixes. Info items are listed for human review.

## Important

- Do not guess at correct values. If you cannot verify the current correct value from the context repos, flag the issue for human review instead of making changes.
- ComposableCoW and Watch Tower are tightly coupled — check for consistency between their docs sections.
- Use "programmatic order" terminology consistently when flagging ComposableCoW issues.
