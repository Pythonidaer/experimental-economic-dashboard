# Implementation Plan

**Note:** There is no separate `implementation.md`; this file is the implementation reference for the project.

## Phase 1: Knowledge Layer — stabilized for now
- Glossary and topics aligned with `economists-hour-master-checklist.md` for the current stage; treat the knowledge layer as **stabilized**—incremental content edits can continue, but it is not blocking dashboard work
- People, institutions, laws, and events remain modeled as glossary entries (no extra routes)
- Glossary and topics indexes include alphabetical navigation and consistent layout with detail pages

## Phase 2: Dashboard Data Integration (in progress / iterative)
- Confirm Supabase schema matches the app’s query needs
- **`state_trade_metrics`** and **`state_labor_metrics`** are integrated in the frontend with real query-backed data where loaded (labor unemployment includes **2024 state annual rates from BLS LAU**)
- Keep loading, error, and empty states handled consistently

## Phase 3: Map View Hardening
- State boundaries and state-level data render reliably
- State selection stays visually and programmatically clear
- The same information remains accessible outside the map (table, charts)

## Phase 4: Table View Hardening
- Tables use real data for trade and labor flows that are wired in the UI
- Sorting and filtering remain understandable; table interactions stay aligned with map/chart state
- Responsive behavior including accessible **screen-reader tables** where applicable

## Phase 5: Chart View Hardening
- Charts use the same real datasets as map/table for each dataset toggle
- Comparative views stay readable; **expanded chart mode** supports deeper exploration without cluttering the default view
- Mobile layout and controls refined for the current stage

## Phase 6: Next-stage data and source work
- **Trade data enrichment** (e.g. richer time range or breakdowns only when sourced and justified—see `docs/data-roadmap.md`)
- **Source reliability:** document provenance, coverage, and limitations; tighten ingestion validation as needed
- **Labor fields beyond unemployment:** fill or document `avg_wage` and `labor_force_participation` when sources and UI use cases are clear

## Phase 7: Polish and Production Readiness
- Accessibility labels and keyboard behavior
- TypeScript and lint cleanup
- Refactor large files where necessary
- Empty/loading/error state review
- README and docs kept aligned with implementation

---

## Notes
- **Dashboard** and data visualization remain the primary product direction; glossary/topics are **supporting**
- Labor integration shipped **before** broad multi-dataset expansion; the next deliberate thrust is trade enrichment and source-quality work—not a second “first integration” pass for unemployment
- Do not expand scope beyond current architecture unless documentation is updated first
