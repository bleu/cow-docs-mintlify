---
name: Style and structure audit
on:
  push:
    - repo: ribeirojose/cow-docs-mintlify
      branch: main
automerge: false
---

Review all MDX files changed in the last merged PR against the documentation standards in `about-these-docs.mdx` and the Diataxis framework described in `diataxis.mdx`.

Check for:

1. **Diataxis compliance**: Pages should clearly belong to one quadrant (tutorial, how-to, explanation, or reference). Flag pages that mix concerns (e.g., a reference page that includes tutorial-style walkthroughs).
2. **Writing style**: Content should be direct and concise, leading with the answer. Flag verbose introductions or filler text.
3. **Component usage**: Verify appropriate use of Mintlify components — `<Steps>` for procedures, `<Tabs>` for multi-language code, `<Note>`/`<Warning>` for callouts.
4. **Code examples**: Ensure code blocks have language identifiers. Flag code examples without context or explanation.
5. **Frontmatter**: Check for missing `title`, `description`, or `sidebarTitle` fields.
6. **Broken internal links**: Check that relative links point to files that exist in the repo.

Open a pull request to fix any issues that can be resolved automatically. For issues requiring judgment, list them in the PR body with file paths, line references, and suggested fixes.

Success criteria: All changed pages follow the documentation standards and Diataxis framework consistently.

## Important

- Do not change technical content meaning. Only correct style and structural issues.
- Do not rewrite entire pages. Make targeted fixes.
- If all changed pages are already compliant, do nothing.
