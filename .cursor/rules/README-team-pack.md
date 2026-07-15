# Team and build rules pack (drop 2)

Adds project, design, security, workflow, and accessibility rules on top of the SEO pack. Unzip so these `.mdc` files join the existing ones in `.cursor/rules/`, then commit and push. Both contributors inherit all of them automatically.

## What each file does

| File | Activation | Purpose |
|------|-----------|---------|
| `01-project-conventions.mdc` | Auto (code files) | Folder structure, Server-Component-first patterns, TypeScript strictness, Tailwind tokens. |
| `15-landing-pages.mdc` | Auto (pages/sections) | Build landing pages fast from a reusable section library, held to a clear design bar. |
| `70-security-secrets.mdc` | Auto (code/env/api) | Env and secret hygiene, server-only data access, input validation, safe output. |
| `80-collaboration-workflow.mdc` | Auto | Branch naming, commit style, and a definition of done before every PR. |
| `90-accessibility.mdc` | Auto (pages/components) | WCAG AA: landmarks, keyboard, focus, contrast, labels. |

## Combined pack is now 11 rules
That is above the usual 5 to 8 sweet spot, but every file is scoped by glob or agent-requested, so only the relevant ones load per request and the token cost stays controlled. If any rule stops earning its place, prune it.
