# Phase I Deployment Guide

## Purpose

This package converts the Phase H EECSL build into a clean GitHub Pages deployment structure.

The recommended structure is:

```text
repository-root/
├── README.md
├── DEPLOYMENT_GUIDE.md
├── deployment_metadata.json
├── docs/
│   ├── index.html
│   ├── .nojekyll
│   ├── assets/
│   ├── shared/
│   ├── data/
│   ├── teaching/
│   │   ├── cross-case-integration.html
│   │   └── capability-lab-links.html
│   └── cases/
│       ├── higher-education-ips.html
│       ├── 2008-financial-crisis.html
│       ├── geo-florida-prison.html
│       └── florida-nursing-homes-visible-parasite.html
└── tests/
    ├── deployment_checklist.md
    └── link_check_report.md
```

## Recommended deployment path

### Option A — Easiest GitHub Pages setup

Use the `/docs` folder.

1. Create a new GitHub repository named:

   `empirical-ethics-case-simulation-library`

2. Upload the full contents of this package to the repository root.

3. Confirm that the following file exists:

   `docs/index.html`

4. Open the repository on GitHub.

5. Go to:

   `Settings → Pages`

6. Under **Build and deployment**, choose:

   `Deploy from a branch`

7. Set:

   - Branch: `main`
   - Folder: `/docs`

8. Save.

9. Wait for the GitHub Pages deployment to complete.

10. Open:

   `https://rmertzman-tech.github.io/empirical-ethics-case-simulation-library/`

## Why use /docs?

Using `/docs` keeps the public website separate from repository notes, deployment guides, tests, and future source materials. It also prevents accidental publication of instructor-only planning files.

## Update workflow

For ordinary updates:

1. Edit files inside `docs/`.
2. Commit changes.
3. GitHub Pages will republish from `docs/`.

For major phase updates:

1. Keep the older ZIP package as a backup.
2. Replace or merge the updated `docs/` folder.
3. Confirm that `docs/index.html` still exists.
4. Run the manual checklist in `tests/deployment_checklist.md`.

## Suggested repository description

Public empirical case-study library for ethics teaching, linking classroom simulations to evidence-governed case modules.

## Suggested repository topics

```text
ethics
ethics-education
public-interest-technology
simulation
github-pages
case-study
critical-thinking
systems-thinking
```

## Troubleshooting

### The site gives a 404

Check:

- Did you select `/docs` as the Pages folder?
- Is `docs/index.html` present?
- Is the filename exactly `index.html`, not `Index.html` or `index.HTML`?
- Did GitHub Pages finish deploying?

### Case links do not work

Check:

- The `cases/` folder is inside `docs/`.
- The case page filenames match:
  - `higher-education-ips.html`
  - `2008-financial-crisis.html`
  - `geo-florida-prison.html`
  - `florida-nursing-homes-visible-parasite.html`

### Styling is missing

Check:

- `docs/assets/phase-h.css` exists.
- `docs/shared/phase-h-integration.js` exists.
- The relative folder structure has not been changed.

### Capability Lab links point to the wrong EECSL URL

Open:

`docs/teaching/capability-lab-links.html`

Set the deployed EECSL base URL and regenerate the link panel snippet.
