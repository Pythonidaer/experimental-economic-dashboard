# Product Requirements

## Users

Primary user:
- the project creator exploring economic and geographic data  

Future users:
- portfolio reviewers  
- technical interviewers  
- other users exploring state-level economic data  

---

## Core Product Areas

### 1. Dashboard (Primary)
- map, table, and chart views of state-level data  
- interactive exploration of economic metrics  

### 2. Knowledge Layer (Supporting)
- glossary of economic concepts, people, institutions, laws, and events  
- topic pages that explain broader ideas and connect concepts  

---

## MVP Features

### Dashboard
1. Dashboard layout with tabs  
2. Overview tab with high-level dashboard context  
3. Map tab with state-level visualization  
4. Table tab with sortable/filterable data table (trade and labor flows as integrated)  
5. Chart tab with summary comparisons, exploration controls, and expanded chart mode (where implemented)  
6. Notes tab with **interpretive** context (sources such as BLS LAU, what the metrics mean, limitations—not placeholder-only copy)  
7. Detail panel or drawer when selecting a state  
8. Supabase-backed dataset retrieval  
9. Loading, error, and empty states  

### Knowledge Layer
10. Glossary index with alphabetical navigation  
11. Glossary detail pages with structured content  
12. Topic pages with linked glossary concepts  
13. Working linking between glossary and topics  

---

## Data Scope

Current datasets:
- `state_trade_metrics` — active in dashboard views  
- `state_labor_metrics` — **active** for **unemployment** (real values for loaded periods, e.g. **2024** state annual averages from **BLS LAU**); other columns may be incomplete until sourcing expands  

Guidelines:
- expand datasets incrementally  
- do not introduce new datasets without a clear UI use case  
- prioritize data that can be visualized meaningfully  

---

## Accessibility Requirements

- keyboard accessible tabs, buttons, popovers, drawers, and filters  
- semantic headings and landmarks  
- sufficient color contrast  
- visible focus states  
- descriptive labels for filters and controls  
- avoid map as the only way to access information  
- all map-driven data must also be available in table/detail format  

---

## UX Requirements

- clear page title  
- low cognitive load layout  
- easy switching between tabs  
- clear selected state feedback  
- consistent filter behavior  
- simple empty/error/loading states  

---

## Notes

- The dashboard is the primary product direction  
- The glossary and topics provide supporting context and explanation  
- The system should remain simple, readable, and maintainable  
