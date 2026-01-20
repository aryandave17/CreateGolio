# CreateGolio — Project README
# 

Overview
---
This repository contains an Angular single-page application built to replicate a multi-section responsive landing page. The app uses standalone Angular components and Bootstrap for responsive layout and utilities.

# CreateGolio — Quick README

Short summary
---
This is an Angular single-page app composed of small, standalone components that recreate a responsive landing page. Bootstrap v5 is used for layout and responsiveness.

How to run
---
1. Install dependencies:

```bash
npm install
```

2. Run dev server:

```bash
npm start
```

3. Build for production:

```bash
npm run build
```

Tech stack
---
- Angular (standalone components)
- Bootstrap v5 (installed via npm)
- Plain CSS for small, component-scoped tweaks

Mobile-first decisions (summary)
---
- Use Bootstrap utilities and grid to stack content on small screens.
- Keep readable font sizes and avoid horizontal scrolling.
- On medium screens use 2-column patterns where logical; on large screens match provided desktop layout.

AI usage and manual edits
---
- AI used: ChatGPT-based assistant during development (prompts and interactions are logged in `prompts/prompts.md`).
- Manual edits by developer (important):
  - Replaced many handcrafted CSS media queries with Bootstrap utility classes to simplify responsive behavior.
  - Converted inline styles into component CSS files and `src/styles.css`.
  - Reorganized components into `hero` sections (`hero`, `hero2`, ..., `hero7`) for clarity.
  - Replaced placeholder SVGs with `assets/Images1.png`, `Images2.png`, `Images3.png` and other images.

What AI generated vs what I edited
---
- AI assisted with component templates, responsive suggestions, and code snippets.
- Developer manually adjusted CSS, image sizes, component imports, and wiring in `AppComponent` to ensure layout correctness.

Two improvements to make with more time
---
1. Add automated visual tests and component-level storybook previews.
2. Replace placeholder images with optimized production assets and add lazy-loading where needed.

Prompts & audit file
---
All prompts and iterations are logged at `prompts/prompts.md` (required for the assessment).

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
