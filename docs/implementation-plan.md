# Implementation Plan

**Note:** There is no separate `implementation.md`; this file is the implementation reference for the project.

## Phase 1: Knowledge Layer Completion
- Glossary content aligned with `economists-hour-master-checklist.md`; quality, taxonomy, and `relatedTopicSlugs` passes done—treat as **stabilized / production-ready** for the knowledge layer
- People, institutions, laws, and events remain modeled as glossary entries (no extra routes)
- Glossary and topics indexes include alphabetical navigation and consistent layout with detail pages

## Phase 2: Dashboard Data Integration
- Confirm current Supabase schema matches the app’s query needs
- Fully integrate `state_trade_metrics` into the frontend if any placeholder paths still remain
- Replace placeholder or mock dashboard data with real query-backed data
- Ensure loading, error, and empty states are handled

## Phase 3: Map View Hardening
- Ensure state boundaries and state-level data render reliably
- Support selecting a state
- Keep selected state visually and programmatically clear
- Ensure the same information is accessible outside the map

## Phase 4: Table View Hardening
- Ensure table is using real data
- Keep sorting and filtering clean and understandable
- Make sure table interactions do not fight map state
- Verify responsive behavior

## Phase 5: Chart View Hardening
- Ensure charts use the same real dataset as map/table
- Keep comparisons readable and minimal
- Avoid chart complexity that does not improve understanding

## Phase 6: Secondary Dataset Integration
- Prepare query layer for `state_labor_metrics`
- Define one narrow first use case for labor data
- Integrate labor data only where it clearly improves the dashboard
- Do not over-expand the UI during first labor integration

## Phase 7: Polish and Production Readiness
- Improve accessibility labels and keyboard behavior
- Resolve remaining TypeScript and lint issues
- Refactor large files where necessary
- Review empty/loading/error states across the app
- Update README and docs to reflect the actual implementation

---

## Notes
- The glossary is the immediate completion priority
- Dashboard and data visualization remain the long-term core focus
- Do not expand scope beyond current architecture unless documentation is updated first
