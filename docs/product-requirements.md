# Product Requirements

## Users
Primary user:
- the project creator exploring economic and geographic data

Future users:
- portfolio reviewers
- technical interviewers
- other curious users exploring state-level data

## MVP Features
1. Dashboard layout with tabs
2. Map tab with state-level visualization
3. Table tab with sortable/filterable data table
4. Chart tab with a summary chart
5. Detail panel or drawer when selecting a state
6. Supabase-backed dataset retrieval
7. Loading, error, and empty states
8. Accessible keyboard and screen reader support

## Initial Dataset Ideas
Start with only one dataset:
- imports/exports by state
OR
- jobs by state
OR
- banks by state

Do not attempt all datasets in the first phase.

## Accessibility Requirements
- keyboard accessible tabs, buttons, popovers, drawers, and filters
- semantic headings and landmarks
- sufficient color contrast
- visible focus states
- descriptive labels for filters and controls
- avoid map as the only way to access information
- all map-driven data must also be available in table/detail format

## UX Requirements
- clear page title
- low cognitive load layout
- easy switching between tabs
- clear selected state feedback
- consistent filter behavior
- simple empty/error/loading states