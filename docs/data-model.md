# Data Model

## Current Tables

### `state_trade_metrics`

**Purpose:** State-level import/export/total trade values (legacy or auxiliary schema). **Not** the table behind the main dashboard **Exports** toggle today.

**Fields:**

- `id` (uuid, primary key)
- `state_code` (text, indexed)
- `state_name` (text)
- `year` (int8, indexed)
- `import_value` (numeric)
- `export_value` (numeric)
- `total_trade_value` (numeric)
- `created_at` (timestamptz)

**Frontend note:** Query/components may still exist, but the **primary** live export-style layer in the product is **`state_export_profiles`** (see below). Update this section if trade totals return as a first-class toggle.

### `state_labor_metrics`

**Purpose:** Labor and workforce-related metrics; unemployment is the primary field in active UI use.

**Fields:**

- `id` (uuid, primary key)
- `state_code` (text, indexed)
- `state_name` (text)
- `year` (int8, indexed)
- `unemployment_rate` (numeric)
- `avg_wage` (numeric)
- `labor_force_participation` (numeric)
- `created_at` (timestamptz)

**Loaded data (current):** State annual unemployment rates for recent years (including **2024**) are populated from **BLS Local Area Unemployment Statistics (LAU)** where ingested. `avg_wage` and `labor_force_participation` may remain **null or incomplete** depending on source coverage and load status—do not assume they match unemployment coverage.

### `state_export_profiles`

**Purpose:** Broad **origin-of-movement** export buckets by state from the **U.S. Census Bureau** (aligned with Census state export “Exhibit 2”–style **bucket structure**, not NAICS industry truth or product-level detail). Drives the dashboard **Exports** toggle: map, table, charts, and Notes. **Use for comparison and orientation**, not definitive production location or industry mix.

**Fields:**

- `id` (uuid, primary key)
- `state_code` (text, indexed)
- `state_name` (text)
- `year` (int8, indexed)
- `month` (int8, nullable) — omitted or null for annual-style rows if used
- `period_label` (text, nullable) — human-readable period (e.g. `2026-01`)
- `manufactured_exports` (numeric, nullable) — **strongest proxy for production-linked exports** among these buckets
- `non_manufactured_exports` (numeric, nullable) — may reflect **port / export origin** more than in-state production
- `re_exports` (numeric, nullable) — **foreign merchandise re-exported**; interpret with care; UI de-emphasizes where helpful
- `total_exports` (numeric, nullable)
- `manufactured_percent`, `non_manufactured_percent` (numeric, nullable)
- `notes` (text, nullable)
- `source_name` (text, nullable)
- `source_url` (text, nullable)
- `methodology_note` (text, nullable)
- `created_at` (timestamptz)

**Value units:** Application code treats numeric export columns as **millions of U.S. dollars** (consistent with common Census state export table presentations). Adjust formatting if your load uses full dollars.

---

## Current Schema Strategy

- Keep tables flat and query-friendly
- Avoid premature normalization
- Optimize for dashboard queries (map, table, charts)
- Prefer duplicating simple fields (like `state_name`) over joins
- Add new tables only when there is a clear frontend use case

---

## Frontend Integration Status

- **`state_export_profiles`:** **Primary “Exports” path** — map, table, charts, Notes (Census bucket metrics, methodology in UI copy).
- **`state_labor_metrics`:** **Primary “Labor” path** — unemployment (and other columns when populated); charts, accessible tables, shared exploration controls where implemented. Uses `src/features/economic-data/` hooks and queries.
- **`state_trade_metrics`:** Schema/queries may exist; **not** wired to the main **Exports vs Labor** dataset toggle. Treat as auxiliary unless product direction changes.

---

## Query Expectations

Tables should support:

- filtering by state
- filtering by year
- sorting by metric values
- aggregations for charts and comparisons

Avoid joins for now.

---

## Indexing Guidance

Add indexes for:

- `state_code`
- `year`

Optional:

- composite index `(state_code, year)`

---

## Future Expansion Notes

**Plausible future tables** (not current schema—do not implement until sourced and scoped):

- **`state_industry_employment`** or similar — employment / jobs by state and industry or sector (NAICS-aligned), when a reliable public source fits a flat table model  
- **`industry_reference`** — NAICS (or similar) labels and hierarchy for labeling charts/maps  
- **`bank_profiles`**, **`bank_branches`**, or consolidated **`banking_entities`** — institution metadata and/or branch locations for reference and **future bank maps**  
- **Jobs-related** aggregates or postings tables — only after licensing, refresh cadence, and privacy/ethics constraints are clear  

Broader exploratory ideas (not commitments): trade by product/partner, population/demographics, job posting ingestion pipelines.

These should NOT be implemented until:

- a reliable data source is identified
- update frequency is understood
- a clear frontend use case exists

---

## Notes

- This document reflects the **current** database state and integration status.
- **Exports** buckets are useful for state comparison but **not** industry-by-state truth; pair with documentation and UI caveats (origin of movement vs production).
- Unemployment alone is a useful but **limited** indicator; richer insight will likely require combining labor fields (wages, participation, employment levels) and broader context (population, industry mix, job availability) as data allows.
- Future ideas are exploratory and should not drive schema changes prematurely.
- Prioritize clarity, performance, and real use cases over completeness.
