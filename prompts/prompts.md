# Frontend Assessment

This file documents the major prompts used with AI tools during the implementation of this frontend assessment.  
It serves as the mandatory audit record for AI usage, as required in the assignment instructions.

> Note: The prompts listed below are short summaries of the actual requests made while working on the project.  
> They are ordered roughly chronologically and grouped by topic.

## Confirmation of Design
"Recreate the provided desktop-only page design responsively, implementing the same structure and sections with appropriate responsive behavior."

## Initial Setup & Components
"Create a Navbar component and a Hero component; move the existing navbar code into the Navbar component and hero code into the Hero component."

"Refactor inline CSS from app.component.html into component-specific CSS files. Use Bootstrap where appropriate for responsiveness."

## Bootstrap Installation and Usage
"Install Bootstrap via npm and import it into src/styles.css."

"Use Bootstrap grid system and utility classes to make the hero section responsive, ensuring the image appears above text on mobile using order utilities."


## Navbar Behavior (Mobile-First)
"Collapse the navbar into a hamburger menu on small screens that contains navigation links and action buttons."

"Ensure the navbar expands into a horizontal layout on larger screens, matching the provided desktop design."

"Add a smooth transition for the navbar background color when scrolling."

## Hero Variations and Cards
"Create a secondary hero section (Hero2) containing a heading and three feature cards."

"Move the icon in each Hero2 card to appear above the heading instead of beside it."

"Replace placeholder SVG icons with image assets (Images1.png, Images2.png, Images3.png)."

"Make Hero2 responsive by centering icons and text on small screens and left-aligning them on medium and larger screens. Adjust icon sizes for different breakpoints."

## Additional Sections
"Create additional sections (Hero3 to Hero7) as standalone components, including projects grid, testimonials, team grid, trusted logos, and a call-to-action section."

"For the CTA section, swap image and text positions on medium and larger screens and adjust spacing to better match the desktop layout."

## Footer
"Create a Footer component containing brand/logo information and social icons styled consistently with the navbar."

## Final Documentation
"Create a concise README explaining how to run the project, the tech stack used, mobile-first design decisions, AI usage, and potential future improvements."

"Create prompts/prompts.md to document all AI prompts, iterations, and manual edits."


## Manual Edits After AI-Generated Output
- Replaced several explicit CSS media queries with Bootstrap utility classes.
- Standardized icon and image sizing using component-level CSS.
- Replaced SVG placeholders with PNG image assets from the assets folder.
- Reorganized the main app template to include all section components.
- Added minor CSS adjustments to improve spacing and better align with the desktop design.

## Mobile-First Assumptions
- The default layout starts stacked vertically for small screens.
- Multi-column layouts are introduced at medium and large breakpoints using Bootstrap grid utilities.
- Text remains readable and horizontal scrolling is avoided at all screen sizes.
- Bootstrap utilities are preferred over custom media queries wherever possible.
