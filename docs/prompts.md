# Cursor Prompt Templates

Do not try to build the final version all at once.
Implement only the current phase cleanly.
Prefer simple, readable code over clever abstractions.

---

## Prompt: Read docs first
Before making changes, read:
- docs/project-overview.md
- docs/product-requirements.md
- docs/architecture.md
- docs/implementation-plan.md
- docs/data-model.md
- docs/data-roadmap.md
- docs/done-criteria.md
- docs/decisions.md

Then explain:
1. what you think this project is
2. what you are about to build
3. which files you plan to create or edit
4. how the task fits the current phase
5. whether the work touches **live** dashboard data (**Labor** / `state_labor_metrics`, **Exports** / `state_export_profiles`) vs **roadmap-only** items (industry/jobs, banking, job scrapers, richer trade)

Do not code until you summarize that.

---

## Prompt: Implement a scoped task
Read the docs folder first.

Implement the following task:
[PASTE TASK]

Requirements:
- follow docs/architecture.md
- keep components small and focused
- use accessible shadcn/ui + Radix components where appropriate
- keep data logic separate from presentation
- satisfy docs/done-criteria.md
- do not expand scope beyond the task

At the end:
- list every file created or changed
- explain what remains incomplete
- list any assumptions made

---

## Prompt: Refactor safely
Read the docs folder first.

Refactor the current implementation for clarity and maintainability without changing behavior.

Focus on:
- reducing file size if components are too large
- improving naming
- separating data logic from UI logic
- preserving accessibility
- preserving current behavior

At the end:
- explain what changed
- explain what did not change
- list any risks or follow-up improvements

---

## Prompt: Add a new feature
Read the docs folder first.

Add the following feature:
[PASTE FEATURE]

Constraints:
- do not introduce unnecessary abstraction
- keep current scope in mind
- preserve accessibility
- preserve current behavior unless required
- explain tradeoffs before implementing if architecture is affected

At the end:
- list files changed
- explain the implementation
- identify any follow-up tasks

---

## Prompt: Audit current state
Read the docs folder first.

Audit the current codebase against:
- docs/project-overview.md
- docs/product-requirements.md
- docs/architecture.md
- docs/implementation-plan.md
- docs/done-criteria.md

Return:
1. what is complete
2. what is partially complete
3. what is missing
4. technical debt
5. the next best task to implement

Do not make changes yet.

---

## Prompt: Fix a bug
Read the docs folder first.

Investigate and fix this issue:
[PASTE ISSUE]

Requirements:
- identify likely root cause first
- explain whether the bug is UI, data, state, or integration related
- make the smallest clean fix possible
- preserve accessibility and existing behavior

At the end:
- summarize root cause
- list files changed
- mention any edge cases not fully covered

---

## Prompt: Sync documentation
Read the docs folder first.

Audit all documentation against the current implementation.

Tasks:
- identify outdated or incorrect statements
- update docs to reflect actual behavior and structure
- remove contradictions and stale information
- keep docs clean and focused
- explicitly separate **current** behavior (e.g. **Exports** + **Labor** on the main dashboard path) from **roadmap** items in `docs/data-roadmap.md` (industry/jobs, banking, richer trade, job scraper research)
- if docs mention trade data, distinguish **`state_export_profiles` (active Exports toggle)** from **`state_trade_metrics` (auxiliary unless wired again)**

Do NOT change application code.

At the end:
- list all docs updated
- explain what was outdated
- confirm docs match the current codebase for shipped features
- list any intentional doc-only forward-looking statements and where they live (`data-roadmap.md`, `decisions.md`, etc.)

---

## Prompt: New dataset integration

Read the docs folder first (`data-model.md`, `data-roadmap.md`, `decisions.md`, `implementation-plan.md`, `product-requirements.md`).

Plan or implement integration of:
[PASTE DATASET / TABLE / SOURCE]

Requirements:
- define minimal flat schema and query pattern before UI polish
- align dashboard surfaces (map, table, chart, notes) only where justified
- update **decisions** and **data-model** when the dataset becomes real—not for hypothetical tables
- do not claim industry-level precision unless the source supports it (same honesty bar as **Exports**)

At the end:
- list schema/query/UI files touched
- note follow-ups for sourcing, refresh cadence, and documentation

---

## Prompt: Roadmap-sensitive planning

Read `docs/data-roadmap.md`, `docs/decisions.md`, and `docs/implementation-plan.md` first.

Produce a short plan for:
[PASTE GOAL]

Constraints:
- label items as **current**, **next likely**, or **later exploratory**
- do not assume banking maps, jobs maps, or job scrapers are funded work unless the user says so
- call out dependencies (official APIs, licensing, ethics for scraping)
