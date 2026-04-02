# Implementation Plan

## Phase 1: Project Setup
- Initialize Next.js app with TypeScript
- Install shadcn/ui
- Install MapLibre, TanStack Table, Nivo, TanStack Query, Supabase client
- Set up base layout and navigation
- Add docs folder and project documentation
- Create base folder structure

## Phase 2: Dashboard Shell
- Create dashboard route
- Add accessible tabs:
  - Overview
  - Map
  - Table
  - Charts
  - Notes
- Create placeholder content for each tab
- Add basic responsive layout

## Phase 3: Supabase Integration
- Create Supabase project
- Add environment variables
- Create first dataset table
- Seed sample data
- Build first query hook
- Add loading/error/empty UI states

## Phase 4: Map View
- Add MapLibre map
- Add state boundaries GeoJSON
- Display state-level data
- Support selecting a state
- Show a details panel for the selected state

## Phase 5: Table View
- Add TanStack Table
- Make columns sortable
- Add filtering
- Sync selected state with details panel if useful

## Phase 6: Chart View
- Add Nivo chart using same dataset
- Show top-level comparisons
- Keep charts simple and readable

## Phase 7: Polish
- Improve accessibility labels and keyboard behavior
- Improve empty/loading/error states
- Refactor large files
- Add README screenshots and explanation