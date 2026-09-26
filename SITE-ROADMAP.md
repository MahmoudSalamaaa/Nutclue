# NutClue — Site Improvement Roadmap

Last updated: 2026-09-27

## Goal
Turn the current editorial prototype into a production-ready, easy-to-use nutrition education experience for adults, parents and children, while keeping the visual identity distinctive and calm.

## Ground rules
- Do not rename the product until the replacement name is cleared.
- Mobile-first usability before decorative polish.
- Every primary action must be obvious without explanation.
- Educational content must not drift into diagnosis or treatment.
- Kids content stays visually distinct but remains part of the same product.
- Avoid duplicate sections and marketing copy written for the project team rather than visitors.

## Phase 1 — Navigation & core UX
1. Replace hash-view behavior with a clearer navigation experience while preserving static export compatibility.
2. Add a proper mobile navigation instead of hiding the main nav below 800px.
3. Make the primary journeys obvious: Explore, Kids, Log, Journal, Visit.
4. Add active-state navigation and consistent back/next actions.
5. Improve keyboard focus, labels, contrast and touch targets.

## Phase 2 — Home page
1. Reduce oversized editorial typography on smaller screens.
2. Make the first screen explain the product in seconds.
3. Replace generic stock-photo dependence with a consistent image system.
4. Tighten repeated messages across hero, statement, feature and final CTA.
5. Surface the most useful actions earlier.

## Phase 3 — Explore
1. Turn placeholder topic cards into real browsable content.
2. Add categories, search and practical examples.
3. Build Food A–Z as a useful reference rather than a static card.
4. Keep language plain and evidence-aware.

## Phase 4 — Logging & Journal
1. Replace one free-text box with quick structured logging plus optional notes.
2. Support meal, water, sleep, medication, smoking, work/activity, chronic conditions and previous operations where appropriate.
3. Make journal entries editable/deletable.
4. Add useful filtering and visit-summary selection.
5. Keep data local until a deliberate persistence/privacy model is chosen.

## Phase 5 — Kids
1. Preserve the playful Kids visual system.
2. Validate carb examples and distinguish estimates from label-derived values.
3. Improve navigation through the long guide.
4. Make portions, carb locations and label reading highly visual.
5. Avoid insulin-dose or treatment calculations.

## Phase 6 — Visit
1. Convert the current visit view into a clean preparation summary.
2. Let users choose which journal items to include.
3. Add printable/exportable output later.
4. Clearly separate user-entered facts from educational prompts.

## Phase 7 — About & trust
1. Verify the founder portrait asset and path on both Vercel and GitHub Pages.
2. Keep founder credentials concise and accurate.
3. Add editorial principles, source policy and content-review dates.
4. Keep safety language visible but not intrusive.

## Phase 8 — Production hardening
1. Remove fragile external image dependencies where practical.
2. Check GitHub Pages and Vercel base paths.
3. Add metadata, favicon, social cards and basic SEO.
4. Test responsive layouts at common mobile widths.
5. Test build/deploy before every release.

## Start here
Start with **Phase 1: Navigation & core UX**. The current mobile CSS hides the primary navigation entirely, so fixing navigation gives the highest immediate usability return and creates the structure needed for every later section.

## Naming
Keep **NutClue** as the working name until a replacement passes practical collision screening. Do not block UX/product work on naming.
