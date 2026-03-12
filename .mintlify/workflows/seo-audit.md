---
name: SEO and metadata audit
on:
  cron: "0 9 * * 1"
automerge: false
---

Audit all MDX files in the documentation for SEO and metadata quality. Check for:

- Missing or empty `title` frontmatter
- Missing or empty `description` frontmatter
- Descriptions that are too short (under 50 characters) or too long (over 160 characters)
- Missing `sidebarTitle` where the page title is longer than 30 characters
- Pages without a clear H1 or introductory paragraph
- Duplicate descriptions across multiple pages

Open a pull request with improvements for any issues found. Write descriptions that accurately summarize what the page helps the reader accomplish, using plain language relevant to CoW Protocol users (traders, solvers, developers, liquidity providers).

Success criteria: All pages have complete, accurate metadata that helps search engines and users understand the page content.

## Important

- Only update frontmatter and metadata. Do not change page content.
- Descriptions should mention CoW Protocol, CoW Swap, or the specific feature when relevant for SEO.
- If all pages have complete and reasonable metadata, do nothing.
