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
- Current tables:
  - state_trade_metrics  
  - state_labor_metrics  

### Labor data sourcing (current)
- State **unemployment_rate** values in use (e.g. **2024** state annual averages) come from **BLS Local Area Unemployment Statistics (LAU)**  
- Unemployment is useful but **not sufficient** for full labor-market picture; richer interpretation will likely require wages, participation, employment levels, and broader economic context as those fields are populated  
- **`state_labor_metrics` integration** (unemployment-first) was prioritized and delivered **before** broad expansion into many new domains—next-stage work is biased toward **trade enrichment** and **source reliability**, not re-doing the initial labor chart pass  

---

### Product Direction
- Primary focus: dashboard (map, charts, table)  
- Knowledge layer (glossary/topics) is supportive  
- Build datasets incrementally and validate visually  

---

## Deferred Decisions

These are intentionally postponed until the data layer and dashboard are stable.

### Data Expansion
- scraping pipeline architecture (e.g. job postings)  
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

- Expand datasets **deliberately**; prefer one clear integration at a time, but the app may host **multiple** flat tables once each has a justified UI path (trade + labor unemployment today)  
- Do not introduce new domains without:
  - a real dataset  
  - a clear UI use case  
  - a defined query pattern  

---

## Notes

- This document reflects active decisions, not ideas  
- Exploratory concepts should live in separate planning documents  
- Update this document as decisions become concrete  
