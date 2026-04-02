# Experimental Economic Dashboard

Next.js (App Router) dashboard for **state-level economic metrics**: MapLibre map, TanStack Table, Nivo charts, and Supabase. See `docs/` for product and architecture notes.

## Requirements

- **Node.js** 20+ (matches typical Vercel runtimes)
- **npm** (or compatible package manager)

## Local setup

1. Clone the repo and install dependencies:

   ```bash
   npm install
   ```

2. Environment variables — copy the example file and fill in values:

   ```bash
   cp .env.example .env.local
   ```

   | Variable | Required for | Notes |
   |----------|----------------|--------|
   | `NEXT_PUBLIC_SUPABASE_URL` | Table, Charts, Map metrics panel | Project **Settings → API → Project URL** |
   | `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Same | **Publishable** key (`sb_publishable_…`, not the service role key) |
   | `NEXT_PUBLIC_SITE_URL` | Optional | Canonical URL for metadata / sitemap; on Vercel, `VERCEL_URL` is used if unset |

3. Ensure your Supabase project has a **`state_trade_metrics`** table (and seed data) consistent with `docs/data-model.md`.

4. Run the dev server:

   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000). The **Dashboard** route is at `/dashboard`.

## Scripts

| Command | Purpose |
|---------|---------|
| `npm run dev` | Development server (Turbopack) |
| `npm run build` | Production build |
| `npm run start` | Run production build locally |
| `npm run lint` | ESLint |

## Deploying to Vercel (with Supabase)

1. Push the repository to GitHub (or GitLab / Bitbucket) and import the project in [Vercel](https://vercel.com).
2. In the Vercel project **Settings → Environment Variables**, add at least:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
3. Optionally set `NEXT_PUBLIC_SITE_URL` to your production domain (e.g. `https://app.example.com`) so Open Graph and `sitemap.xml` use the correct origin.
4. Deploy. After the first deployment, confirm the **Map** tab loads GeoJSON from `/geo/us-states.json` and that **Table** / **Charts** load when Supabase env vars are present.

If Supabase variables are missing or invalid, an **amber configuration banner** appears at the top of the app and data queries show a clear error instead of failing opaquely.

## Security notes

- Only the **publishable** key (`sb_publishable_…`) is used in the browser. Never commit **service role** keys or add them as `NEXT_PUBLIC_*` variables.
- Row Level Security (RLS) and policies in Supabase should match how exposed your dataset is meant to be.

## Project layout (high level)

- `src/app/` — routes, layouts, metadata, `icon.svg`, `robots.ts`, `sitemap.ts`
- `src/features/economic-data/` — hooks, queries, table/chart UI tied to `state_trade_metrics`
- `src/components/map/` — MapLibre US states map and details panel
- `src/lib/supabase/` — env validation and browser / server clients
- `public/geo/` — US states GeoJSON
- `docs/` — architecture, data model, implementation plan

## License

Private / use per your organization’s policy.
