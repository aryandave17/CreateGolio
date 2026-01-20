# Prompts Log (required)

This file lists the major prompts used with the AI assistant during the implementation. Keep this file as the mandatory audit for AI usage.

Note: prompts below are short summaries of the actual requests sent while working on the project. They are ordered roughly chronologically and grouped by topic.

1) Confirmation of design
- "Recreate the provided page design responsively — make the same page with responsive behavior."

2) Initial setup / components
- "Create a `Navbar` component and a `Hero` component; move navbar code into the Navbar component and hero code into Hero component."
- "Move inline CSS from `app.component.html` to `app.component.css`. Use Bootstrap for responsiveness."

3) Bootstrap installation and usage
- "Install Bootstrap via npm and import it into `src/styles.css`."
- "Use Bootstrap grid and utilities to make the hero image responsive and show image above text on mobile (use order utilities)."

4) Navbar behavior on mobile
- "Collapse the navbar into a hamburger on mobile that contains links and action buttons; show menu inline inside the hamburger." 
- "Make the navbar smoothly transition to a white background on scroll."

5) Hero variations and cards
- "Create `Hero2` component matching the provided snippet with a header and three cards."
- "Move the small SVG icon in every Hero2 card to appear above the `h5` heading (not to the side)."
- "Replace placeholder SVGs with `assets/Images1.png`, `assets/Images2.png`, `assets/Images3.png`."
- "Make Hero2 responsive: center icons/text on small screens, left-align from `md` up, scale icons (64px small, 148px large)."

6) Additional sections (Hero3..Hero7)
- "Add Hero3 (projects grid), Hero4 (testimonial), Hero5 (team grid), Hero6 (trusted logos), Hero7 (CTA dark section) as standalone components and wire them into `AppComponent`."
- "For Hero7 swap image/text sides on md+ screens and tighten spacing so text and image are closer."

7) Footer
- "Add a Footer component with brand/logo and social icons as images (same style as navbar logo)."

8) Final README and prompts documentation
- "Create a concise English README describing how to run the project, tech stack, mobile-first decisions, what AI generated vs what I edited, and two improvements."
- "Create `prompts/prompts.md` containing the prompts used and manual edits summary."

Manual edits performed after AI-generated output
- Replaced many explicit CSS media queries with Bootstrap utilities and removed redundant styling.
- Standardized icon/image sizing via component CSS (`hero2.component.css`, etc.).
- Replaced SVG placeholders with final/placeholder PNGs from `src/assets`.
- Reorganized the app template: added `app-hero3`, `app-hero4`, `app-hero5`, `app-hero6`, `app-hero7`, and `app-footer` into `src/app/app.component.html`.
- Added `@media` tweaks and local CSS adjustments to tighten spacing and match the provided desktop layout where practical.

Mobile-first assumptions (explicit)
- Start layout stacked vertically for small screens; use Bootstrap columns to introduce multi-column layouts at `md` and `lg` breakpoints.
- Keep text readable and avoid horizontal scrolling at all breakpoints.
- Use Bootstrap utility classes to change order and alignment instead of custom media queries where possible.

If you need the exact, verbatim prompts (original Hindi/English messages) captured from the chat history, I can produce a longer verbatim log as well.
