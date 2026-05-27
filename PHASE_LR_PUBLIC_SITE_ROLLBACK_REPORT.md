# Phase L-R — Public Site Rollback Patch

Generated: 2026-05-27 01:02

## Purpose

This patch restores the public EECSL website to the stable K.1 structure and removes public navigation into the broken Phase L Canvas Module Integration web section.

## What remains public

- EECSL Library Hub
- Case pages
- Cross-Case Dashboard
- Capability Lab Links
- Classroom Bookmarks
- Student Launch
- Instructor Quick Links
- Public Cleanup Guide
- Key Terms Glossary
- Methodology pages

## What should not remain publicly linked

- Canvas Module Integration web pages
- Canvas chapter pack web pages
- Nested `teaching/canvas/` pages

## Manual delete list

GitHub web upload can overwrite files, but it does not automatically delete old files. After uploading this rollback patch, manually delete these files/folders if they appear in the repository:

- `teaching/canvas-module-integration.html`
- `teaching/canvas-index.html`
- `teaching/canvas-chapter-1.html`
- `teaching/canvas-chapter-2.html`
- `teaching/canvas-chapter-3.html`
- `teaching/canvas-chapter-4.html`
- `teaching/canvas-chapter-5.html`
- `teaching/canvas-prompt-governance.html`
- `teaching/canvas-copy-paste-blocks.html`
- `teaching/canvas/`
- `data/canvas-chapter-routes-1-5.json`
- `PHASE_L1_CANVAS_ROUTE_MAP.md`
- `PHASE_L1_PROMPT_GOVERNANCE.md`
- `PHASE_L1_REPORT.md`
- `PHASE_L1_STATIC_LINK_CHECK.md`
- `PHASE_L1A_CANVAS_404_REPAIR_REPORT.md`
- `PHASE_L1A_STATIC_LINK_CHECK.md`

## Stable public test URLs

- https://rmertzman-tech.github.io/empirical-ethics-case-simulation-library/
- https://rmertzman-tech.github.io/empirical-ethics-case-simulation-library/teaching/classroom-bookmarks.html
- https://rmertzman-tech.github.io/empirical-ethics-case-simulation-library/teaching/student-launch.html
- https://rmertzman-tech.github.io/empirical-ethics-case-simulation-library/teaching/instructor-quick-links.html
- https://rmertzman-tech.github.io/empirical-ethics-case-simulation-library/methods/key-terms-glossary.html

## Design decision

The public EECSL site should route students and instructors to stable public tools. Canvas module materials are now preserved as separate instructor resource files rather than as a GitHub Pages mini-site.
