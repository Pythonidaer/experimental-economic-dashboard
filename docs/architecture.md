# Architecture

## Stack
- Next.js (App Router)
- TypeScript
- shadcn/ui
- Radix UI primitives
- MapLibre GL JS
- TanStack Table
- Nivo
- TanStack Query
- Supabase

## Architecture Principles
- Keep components small and focused
- Prefer composition over large monolithic components
- Separate UI concerns from data concerns
- Prefer server-safe patterns where appropriate
- Keep feature folders understandable for a junior-to-mid-level engineer
- Avoid premature abstraction
- Add comments only where intent is not obvious

## Suggested App Structure

src/
  app/
    layout.tsx
    page.tsx
    dashboard/
      page.tsx
  components/
    layout/
    navigation/
    map/
    charts/
    table/
    filters/
    states/
    ui/
  features/
    economic-data/
      components/
      hooks/
      queries/
      types/
      utils/
  lib/
    supabase/
    map/
    utils/
    constants/
  types/
  styles/

## Data Layer Guidance
- Use TanStack Query for client-side data fetching and caching
- Keep fetch logic in dedicated query files
- Keep Supabase access isolated in lib/supabase
- Avoid calling Supabase directly from many random UI components

## UI Guidance
- Use shadcn/ui components where possible
- Use Radix-backed primitives for accessibility
- Keep tabs, drawers, dialogs, and filters accessible by default

## Map Guidance
- Map must enhance the dashboard, not block access to data
- State detail must also be viewable outside the map
- GeoJSON handling should be isolated from general UI logic