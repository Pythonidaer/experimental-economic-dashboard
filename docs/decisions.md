# Decisions Log

## Accepted Decisions

### Core Stack
- Framework: Next.js (App Router) + React + TypeScript  
- UI: shadcn/ui + Radix UI  
- Map: MapLibre GL JS  
- Table: TanStack Table  
- Charts: Nivo  
- Client data fetching: TanStack Query  
- Backend: Supabase (Postgres)  

---

### Project Identity
- Repository name: experimental-economic-dashboard  
- Project is intentionally in an experimental stage while core systems are being validated  

---

### Data Layer
- Use Supabase as the primary data store  
- Keep schema flat and query-friendly  
- Avoid joins for MVP  
- Tables in use or referenced include:
  - **`state_labor_metrics`** — **active** on the **Labor** dashboard path (unemployment from **BLS LAU** for loaded periods)
  - **`state_export_profiles`** — **active** on the **Exports** dashboard path (Census **origin-of-movement**-style **broad buckets**)
  - **`state_trade_metrics`** — may exist for legacy, content links, or future wiring; **not** the driver of the main **Exports vs Labor** toggle today

### Exports dataset (current)
- Integrated as a **state export profile** layer: manufactured, non-manufactured, re-exports, total (**millions USD** in app treatment)  
- Interpreted as **directional and comparative** (origin of movement, coarse buckets)—**not** definitive industry-by-state or product-level truth  
- UI and Notes intentionally explain **origin of movement vs production**, bucket limits, and non-manufactured / re-export caveats  
- **Richer trade or product breakdowns** are **future** work contingent on sourcing, not an implicit promise of the current schema

### Labor data sourcing (current)
- State **unemployment_rate** values in use (e.g. **2024** state annual averages) come from **BLS Local Area Unemployment Statistics (LAU)**  
- Unemployment is useful but **not sufficient** for a full labor-market picture; **likely next product-value** includes **jobs / employment / industry-by-state** data when available, plus optional expansion of other `state_labor_metrics` fields  

### Banking and jobs (directional, not shipped)
- **Banking** (institutions, branches, or reference attributes) is a **valid future data domain** for learning and optional **bank map** surfaces—no committed schema until a source and UI scope exist  
- **Job scraper** or automated job-posting ingestion is **exploratory / later** only—**not** a current implementation commitment; research may precede any build  

---

### Product Direction
- Primary focus: dashboard (map, charts, table, notes)  
- Knowledge layer (glossary/topics) is supportive  
- Build datasets incrementally and validate visually  

---

## Deferred Decisions

These are intentionally postponed until the data layer and dashboard are stable.

### Data Expansion
- production scraping pipeline architecture (e.g. job postings)  
- external data ingestion automation  

### Advanced Features
- authentication beyond basic experimentation  
- role-based access / permissions  

### AI / LLM Exploration
- agentic systems  
- LangGraph  
- Langfuse  

These are areas of interest to explore once:
- data is reliably integrated  
- visualizations are stable  
- core workflows are established  

---

## MVP Constraint

- Expand datasets **deliberately**; prefer one clear integration at a time. The app may host **multiple** flat tables once each has a justified UI path (**Labor + Exports** today on the primary toggle).  
- Do not introduce new domains without:
  - a real dataset  
  - a clear UI use case  
  - a defined query pattern  

---

## Notes

- This document reflects active decisions, not ideas  
- Exploratory concepts should live in `docs/data-roadmap.md` and related planning docs  
- Update this document as decisions become concrete  
