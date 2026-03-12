---
name: Quality and SEO audit
on:
  cron: "0 9 * * 1"
automerge: false
---

Audit all MDX files in the documentation for quality, style, and SEO. Check for:

### SEO and metadata
- Missing or empty `title` or `description` frontmatter
- Descriptions that are too short (under 50 characters) or too long (over 160 characters)
- Missing `sidebarTitle` where the page title is longer than 30 characters
- Duplicate descriptions across multiple pages

### Style and structure
- **Diataxis compliance**: Pages should clearly belong to one quadrant (tutorial, how-to, explanation, or reference). Flag pages that mix concerns.
- **Writing style**: Content should be direct and concise, leading with the answer. Flag verbose introductions or filler text.
- **Component usage**: Verify appropriate use of Mintlify components — `<Steps>` for procedures, `<Tabs>` for multi-language code, `<Note>`/`<Warning>` for callouts.
- **Code examples**: Ensure code blocks have language identifiers. Flag code examples without context.
- **Broken internal links**: Check that relative links point to files that exist in the repo.

Open a pull request to fix any issues that can be resolved automatically. For issues requiring judgment, list them in the PR body with file paths, line references, and suggested fixes.

Success criteria: All pages have complete metadata and follow documentation standards consistently.

## Important

- Do not change technical content meaning. Only correct style, structural, and metadata issues.
- Descriptions should mention CoW Protocol, CoW Swap, or the specific feature when relevant for SEO.
- If all pages are already compliant, do nothing.
