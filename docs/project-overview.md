# Experimental Economic Dashboard

## Project Summary
Experimental Economic Dashboard is a React-based geospatial analytics dashboard for exploring economic and policy-related data through maps, tables, and charts.

The goal is to create an accessible dashboard that allows users to explore state-level economic data such as:
- imports and exports by state
- jobs by state
- banks by state and bank type
- future economic indicators and historical comparisons

This project is inspired by themes in *The Economist's Hour* and is intended as an exploratory learning and portfolio project.

## Core Goals
- Build an accessible dashboard with tabs and interactive panels
- Use a map-based UI as a primary exploration surface
- Support data exploration through map, table, and chart views
- Store and query structured data through Supabase/Postgres
- Keep the architecture clean enough to later support:
  - data ingestion
  - scraping pipelines
  - agentic/open-source LLM experimentation

## Non-Goals for MVP
- No agentic LLM workflows yet
- No advanced scraping pipeline yet
- No multi-tenant user system yet
- No overly complex auth/permissions system yet
- No full production-scale data platform yet

## MVP
The MVP should include:
- a Next.js app
- accessible tabbed layout
- one interactive MapLibre map
- one data table
- one chart
- one filter panel
- one seeded dataset in Supabase
- one state detail view