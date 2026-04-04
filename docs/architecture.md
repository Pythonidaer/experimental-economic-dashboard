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

---

## Architecture Principles
- Keep components small and focused  
- Prefer composition over monolithic components  
- Separate UI from data logic  
- Use server-safe patterns where appropriate  
- Avoid premature abstraction  
- Keep structure easy to navigate  
- Add comments only where intent is unclear  

---

## Product Structure

The application has two main layers:

### 1. Data Layer (Primary)
- Interactive dashboard (map, charts, tables)  
- Focused on exploration of economic data  
- This is the core product direction  

### 2. Knowledge Layer (Supporting)
- `/glossary` → short definitions  
- `/topics` → longer explanatory content  
- No separate top-level routes for people, institutions, or events (those concepts live in glossary content)

Guidelines:
- Glossary supports understanding of data concepts  
- Topics provide context, not exhaustive coverage  
- Not all knowledge content must connect to the dashboard  
- Avoid over-linking between systems  

---

## App Structure

```
src/
  app/
    layout.tsx
    page.tsx

    dashboard/
      layout.tsx
      page.tsx

    glossary/
      page.tsx
      [slug]/
        page.tsx

    topics/
      page.tsx
      [slug]/
        page.tsx

  components/
    charts/
    data-view/
    filters/
    knowledge/
    layout/
    map/
    navigation/
    providers/
    states/
    table/
    ui/

  content/
    glossary.ts
    topics.ts
    types.ts

  features/
    economic-data/
      queries/
      hooks/
      components/
      utils/

  lib/
    supabase/
    map/
    utils/
    constants/

  styles/
```

---

## Data Layer Guidance

- Use TanStack Query for client-side data fetching and caching  
- Keep dashboard data fetch logic in `features/economic-data` (queries + hooks); isolate Supabase types/client as already structured there  
- Isolate low-level Supabase client wiring in `lib/supabase`  
- Do not fetch data directly inside presentational UI components  
- Normalize and shape data before passing into components  

---

## UI Guidance

- Use shadcn/ui components where possible  
- Use Radix primitives for accessibility  
- Keep interactive elements accessible by default  
- Avoid tightly coupling UI to specific data sources  

---

## Dashboard & Map Guidance

- The map is a primary interaction surface  
- It should enhance, not block, access to data  
- All map-driven data must also be accessible via table or chart  
- GeoJSON and map logic should be isolated from UI components  
- Avoid embedding business logic directly inside map components  

---

## Knowledge Layer Guidance

- Glossary entries:
  - short  
  - scannable  
  - definition-first  

- Topics:
  - structured  
  - readable in sections  
  - used for explanation, not duplication  

- Keep content simple and maintainable  
- Avoid turning content into a complex system  
