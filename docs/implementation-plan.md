# Implementation Plan

**Note:** There is no separate `implementation.md`; this file is the implementation reference for the project.

## Phase 1: Knowledge Layer — stabilized for now
- Glossary and topics aligned with `economists-hour-master-checklist.md` for the current stage; treat the knowledge layer as **stabilized**—incremental content edits can continue, but it is not blocking dashboard work
- People, institutions, laws, and events remain modeled as glossary entries (no extra routes)
- Glossary and topics indexes include alphabetical navigation and consistent layout with detail pages

## Phase 2: Dashboard Data Integration — iterative (current)
- Confirm Supabase schema matches the app’s query needs
- **`state_labor_metrics`** remains **active** for **unemployment** (e.g. **2024** state annual rates from **BLS LAU** where loaded)
- **`state_export_profiles`** is **integrated** for the **Exports** toggle: Census **origin-of-movement**-style buckets on map, table, charts, and Notes (with shared chart controls pattern alongside Labor where implemented)
- Keep loading, error, and empty states handled consistently
- **`state_trade_metrics`** may remain in the project for reference or future use; the **primary** user-facing trade-adjacent layer is **Exports** unless the product changes

## Phase 3: Map View Hardening
- State boundaries and state-level data render reliably
- State selection stays visually and programmatically clear
- The same information remains accessible outside the map (table, charts)

## Phase 4: Table View Hardening
- Tables use real data for **Exports** and **Labor** flows that are wired in the UI
- Sorting and filtering remain understandable; table interactions stay aligned with map/chart state
- Responsive behavior including accessible **screen-reader tables** where applicable

## Phase 5: Chart View Hardening
- Charts use the same real datasets as map/table for each dataset toggle
- Comparative views stay readable; **expanded chart mode** supports deeper exploration without cluttering the default view
- Mobile layout and controls refined for the current stage

## Phase 6: Data usefulness and interpretability (next likely thrust)
- **Exports:** explore more **actionable** breakdowns (product, partner, or industry-aligned cuts) **only when** sources and maintenance are defined—current buckets stay honest about limits
- **Labor:** extend beyond unemployment where fields (`avg_wage`, `labor_force_participation`, etc.) and UI use cases justify it
- **Jobs / industry by state:** add datasets (and possibly new tables) when a reliable source and clear visualization story exist
- **Banking:** explore institution or branch datasets for reference data and eventual **bank map** layers—not committed until scoped
- **Source reliability:** document provenance, coverage, and limitations; tighten ingestion validation as needed

## Phase 7: Polish and later experimentation
- Accessibility labels and keyboard behavior
- TypeScript and lint cleanup
- Refactor large files where necessary
- Empty/loading/error state review
- **UI cleanup and chart alternatives** as optional later refinement (same architecture, different presentation experiments)
- **Future map surfaces:** banking-focused maps, jobs/employment maps—only after data exists

### Later exploratory (not current implementation)
- **Job scraper** or third-party job-posting **ingestion pipeline** research (e.g. evaluating sources, licensing, refresh cadence). Treat as **research**, not a committed milestone, until requirements and ethics/legal constraints are clear.

---

## Notes
- **Dashboard** and data visualization remain the primary product direction; glossary/topics are **supporting**
- Do not expand scope beyond current architecture unless documentation is updated first
- Distinguish **shipped behavior** (Labor + Exports on the main path) from **roadmap** items in issues and prompts
