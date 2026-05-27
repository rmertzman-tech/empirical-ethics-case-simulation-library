# Phase M — Fall Readiness Alignment Patch

Generated: 2026-05-27 01:41

## Purpose

Phase M updates the EECSL public site so Fall instructors and students do not see older draft chapter routing. It keeps the public case library stable while aligning the teaching routes with the current course structure.

## Core changes

1. Updated the homepage case cards and teaching routes.
2. Rebuilt `teaching/chapter-routing.html` as the current Fall route map.
3. Rebuilt `teaching/cross-case-integration.html` with the current cross-case matrix and route selector.
4. Added `teaching/fall-readiness.html` as a preflight guide for instructors.
5. Added `data/fall-readiness-routes.json`.
6. Updated case data JSON files for current Fall routing.
7. Added Fall Use Status panels to each case page.
8. Added a static fallback to the Higher Education IPS Parameters table.
9. Preserved teaching-proxy and verification-queue language.
10. Continued to keep Canvas module materials outside the public site navigation.

## Current Fall mapping

- **Higher Education IPS** → Week 1–2 preview; Chapters 8 and 11 (Parasitic Institution; Invisible Ledger)
- **The 2008 Financial Crisis** → Chapters 3, 9, and 12 (Ethical Frameworks as Lenses; Ethics of Uncertainty; Governing the Commons)
- **GEO Group Florida** → Chapters 8 and 11 (GEO Group Florida Lab; Parasitic Institution; Invisible Ledger)
- **Florida Nursing Homes and the Visible Parasite** → Chapters 8, 11, and 13 (Visible Parasite Lab; care vulnerability; institutional opacity; repair)

## Higher Education IPS fallback

The IPS Parameters table now includes static rows for:

- ε Extraction
- φ Entropy
- ρ Regulatory burden
- σ Morphic residue
- μ Misalignment

These rows remain visible before or without JavaScript rendering.

## Instructor preflight recommendation

Before live classroom use, open each case, click through the tabs, and decide which tabs you will use live. Tell students when a panel is a teaching proxy and when source verification is still pending for reviewer-facing claims.
