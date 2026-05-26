# EECSL Phase J — Post-Deployment Test and Link Repair Pass

Date generated: 2026-05-26 16:38

Live URL tested:

https://rmertzman-tech.github.io/empirical-ethics-case-simulation-library/

## Live checks performed

The public hub loads at the live URL. The visible page identifies the site as the **Empirical Ethics Case Simulation Library** and states that the Library remains separate from the Navigator and connects outward to the Capability Lab.

The Phase H integration panel is visible on the live hub and states the current layer rule:

- Capability Lab = public simulation
- EECSL = public empirical case study
- Navigator = private student application

The Cross-Case Dashboard page loads.

The Capability Lab Links page loads.

The shared case shell page loads.

## Main repair made in Phase J

The deployed site was structurally working, but several important sections depended heavily on JavaScript rendering. That is fine for normal browsing, but it is less robust for classroom use, accessibility, quick previews, and link testing.

Phase J adds **static fallback links and cards** to:

- `index.html`
- `teaching/cross-case-integration.html`
- `teaching/capability-lab-links.html`

These fallback links remain visible even before JavaScript renders. If JavaScript loads normally, the interactive dashboards still enhance the same sections.

## Root deployment recommendation

Because the repository currently publishes from the repository root, upload the contents of this Phase J repair pack directly to the repository root.

Do **not** upload the ZIP file itself to the site root unless you intentionally want it publicly visible.

## Files/folders that should remain public

- `.nojekyll`
- `index.html`
- `assets/`
- `cases/`
- `data/`
- `methods/`
- `shared/`
- `teaching/`

## Files that can be removed from the public root after the site is stable

These are not harmful, but they are not needed for the public website:

- `eecsl_phase_i_docs_folder_only.zip`
- `eecsl_phase_i_github_pages_deployment_package.zip`
- old deployment guide HTML/MD files
- duplicate top-level case HTML files if the corresponding `cases/` pages work
- duplicate top-level JSON files if the corresponding `data/` files work

## Classroom-use result

The public site is now more reliable for live teaching because the main navigation no longer depends entirely on scripts. You can bookmark:

- Library hub
- Cross-case dashboard
- Capability Lab Links
- Four empirical case pages
