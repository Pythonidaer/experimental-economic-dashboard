# Data Model

## Current Tables

### `state_trade_metrics`

**Purpose:** Core dataset for trade-based dashboard views (map, charts, tables).

**Fields:**

- `id` (uuid, primary key)
- `state_code` (text, indexed)
- `state_name` (text)
- `year` (int8, indexed)
- `import_value` (numeric)
- `export_value` (numeric)
- `total_trade_value` (numeric)
- `created_at` (timestamptz)

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

---

## Current Schema Strategy

- Keep tables flat and query-friendly
- Avoid premature normalization
- Optimize for dashboard queries (map, table, charts)
- Prefer duplicating simple fields (like `state_name`) over joins
- Add new tables only when there is a clear frontend use case

---

## Frontend Integration Status

- **`state_trade_metrics`:** Integrated across dashboard views (map, table, charts).
- **`state_labor_metrics`:** Integrated for **unemployment** comparisons (charts, accessible tables, and dashboard flows that surface labor). Uses the same query/cache patterns as trade under `src/features/economic-data/`.

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

Potential future datasets (exploratory):

- trade by product by state
- banks by state
- population by state
- jobs by sector
- industry reference data
- job posting ingestion (e.g. scraping platforms like Greenhouse)

These should NOT be implemented until:

- a reliable data source is identified
- update frequency is understood
- a clear frontend use case exists

---

## Notes

- This document reflects the **current** database state and integration status.
- Unemployment alone is a useful but **limited** indicator; richer insight will likely require combining labor fields (wages, participation, employment levels) and broader context (population, industry mix, job availability) as data allows.
- Future ideas are exploratory and should not drive schema changes prematurely.
- Prioritize clarity, performance, and real use cases over completeness.
