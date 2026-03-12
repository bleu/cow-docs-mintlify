---
name: Stale content check
on:
  cron: "0 9 * * 3"
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

Identify documentation pages that may be out of date by comparing docs content against the current state of the CoW Protocol codebase.

Check for:

1. **Contract addresses**: Compare addresses in `snippets/core-contract-addresses.mdx` and `snippets/supported-networks.mdx` against deployment artifacts in the contracts repo.
2. **API endpoints**: Compare documented API endpoints and parameters in `cow-protocol/reference/` against the services repo.
3. **Code examples**: Flag code examples that reference deprecated functions, old API patterns, or outdated SDK usage.
4. **External links**: Check that URLs in MDX files return valid responses. Flag any broken or redirected links.
5. **Old dates or versions**: Flag any hardcoded dates or version numbers that appear outdated.

Open a pull request that lists all findings organized by severity:
- **Critical**: Incorrect contract addresses, broken API references, or wrong code examples
- **Warning**: Broken external links, outdated version numbers
- **Info**: Pages not updated in over 6 months that reference fast-moving areas

Success criteria: All critical and warning issues have proposed fixes. Info items are listed for human review.

## Important

- Do not guess at correct values. If you cannot verify the current correct value from the context repos, flag the issue for human review instead of making changes.
- Prioritize accuracy over completeness. It is better to flag fewer issues with high confidence than many issues with uncertainty.
