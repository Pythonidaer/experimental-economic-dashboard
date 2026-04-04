# Experimental Economic Dashboard

## Project Summary

Experimental Economic Dashboard is a Next.js + TypeScript application for exploring economic and policy-related data through maps, tables, charts, and supporting knowledge content.

The long-term goal is to create an accessible state-level dashboard for understanding economic patterns such as:
- trade flows
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
- Support data exploration through multiple complementary views
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
- accessible dashboard layout
- map/table/chart structure
- seeded Supabase-backed datasets
- glossary and topic content system
- alphabetical glossary/topic navigation
- state-level knowledge + data foundation

---

## Notes

- The dashboard remains the primary long-term focus
- The glossary/topics layer supports interpretation and learning
- The project remains experimental, but the implementation should still be clean and production-ready
