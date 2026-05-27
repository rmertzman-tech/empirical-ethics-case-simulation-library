# Phase N.1b — Root-Link Safe Toulmin Patch

Why this exists:
Your repository has `critical-thinking-bridge.html` at the root, but the live homepage was linking to `teaching/critical-thinking-bridge.html`. That mismatch causes the GitHub Pages 404.

This patch avoids the folder problem by making the Toulmin pages root-level pages and updating the key links.

Upload target:
Upload the CONTENTS of this extracted folder into the ROOT of the repository:
empirical-ethics-case-simulation-library

After upload, these root files should exist:

- critical-thinking-bridge.html
- toulmin-argument-studio.html
- critical-thinking-bridge-worksheet.html
- critical-thinking-bridge-instructor-guide.html
- os1-os2-toulmin-bridge.html
- phase-n1b-root-link-diagnostic.html
- index.html

It also includes patched copies of the four case pages in:
- cases/

Test after upload:
https://rmertzman-tech.github.io/empirical-ethics-case-simulation-library/phase-n1b-root-link-diagnostic.html

Then test:
https://rmertzman-tech.github.io/empirical-ethics-case-simulation-library/critical-thinking-bridge.html
https://rmertzman-tech.github.io/empirical-ethics-case-simulation-library/toulmin-argument-studio.html
