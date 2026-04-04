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

- Build and integrate one dataset fully before expanding  
- Do not introduce new domains without:
  - a real dataset  
  - a clear UI use case  
  - a defined query pattern  

---

## Notes

- This document reflects active decisions, not ideas  
- Exploratory concepts should live in separate planning documents  
- Update this document as decisions become concrete  
