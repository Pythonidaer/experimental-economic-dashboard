# Experimental Economic Dashboard

## Project Summary

Experimental Economic Dashboard is a Next.js + TypeScript application for exploring economic and policy-related data through maps, tables, charts, and supporting knowledge content.

The long-term goal is to create an accessible state-level dashboard for understanding economic patterns such as:
- trade and exports (today: broad Census origin-of-movement state profiles; later: richer breakdowns when sourced)
- labor conditions
- institutions and policy systems
- future economic indicators and historical comparisons

The project is inspired by themes in *The Economist’s Hour* and serves as both:
- an exploratory learning project
- a portfolio-quality implementation

---

## Core Product Areas

### 1. Dashboard (Primary)
An interactive dashboard for exploring state-level economic data through:
- map views
- table views
- chart views
- state detail interactions

### 2. Knowledge Layer (Supporting)
A structured glossary and topic system that provides context for the dashboard’s economic concepts, people, institutions, laws, and events.

---

## Core Goals

- Build an accessible dashboard with maps, tables, and charts
- Use a map-based UI as a primary exploration surface
- Support data exploration through multiple complementary views (including sort/filter/chart exploration and an expanded chart mode where implemented)
- Pair quantitative views with **interpretive Notes** (e.g. data source context and how to read unemployment—not placeholder copy)
- Store and query structured data with Supabase/Postgres
- Maintain a clean architecture that can later support:
  - real data ingestion
  - scraping workflows
  - reliability checks
  - future AI/LLM experimentation

---

## Non-Goals for Current Stage

- No agentic LLM workflows yet
- No advanced scraping pipeline yet
- No multi-tenant user system yet
- No complex auth/permissions system yet
- No full production-scale data platform yet

---

## Current MVP Scope

The current MVP includes:
- a Next.js App Router app
- accessible dashboard layout with tabs (overview, map, table, charts, notes)
- **two live dashboard datasets** on the main toggle:
  - **Labor** — state **unemployment** (and related labor columns where populated), sourced from **BLS Local Area Unemployment Statistics (LAU)** for loaded periods (e.g. 2024 annual state averages)
  - **Exports** — a **broad state export profile** from **U.S. Census origin-of-movement** style buckets (**manufactured, non-manufactured, re-exports, total**), stored in **`state_export_profiles`**
- map, table, chart, and **Notes** support for those active datasets, including methodology and caveats (e.g. origin of movement vs. production, bucket limits)
- chart/table UX for exploration (sorting, filtering, expanded chart mode, shared control patterns where implemented, mobile responsiveness)
- glossary and topic content system (**stabilized for now** at the content-architecture level)
- alphabetical glossary/topic navigation
- state-level knowledge + data foundation

**What Exports is not:** it is **not** industry-by-state truth or product-level trade detail. It is useful for **comparison and orientation** across states and coarse buckets, not for definitive industry composition.

The database may still hold other tables (e.g. **`state_trade_metrics`**) for reference or future use, but the **primary product surface** today is **Labor + Exports** as above.

---

## Likely next directions (not commitments)

- **More actionable labor-market data:** employment or jobs by state, industry or sector slices, when sources and UI use cases are clear—exports and unemployment alone are thin for “what work exists where.”
- **Banking / financial-institution reference layers:** institutions or branches by geography to support learning and optional future **bank maps**.
- **Richer trade / export views:** finer product or partner breakdowns **when a reliable, maintainable source is chosen**—not a vague expansion of the current broad buckets alone.
- **Dashboard refinement:** accessibility polish, visual consistency, and **chart alternatives** as later-stage experimentation—not blocked on new data.

---

## Notes

- The **dashboard** remains the primary long-term product direction
- The glossary/topics layer supports interpretation and learning; combining **labor**, **exports**, and (eventually) **industry/jobs** and **banking** context should make the dashboard more meaningful than any single dataset
- The project remains experimental, but the doc set and implementation should stay clean and production-ready
