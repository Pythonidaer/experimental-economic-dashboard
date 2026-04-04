# The Economist's Hour — Master Checklist

## Purpose

This document converts index material from *The Economist’s Hour* into a structured, trackable system for:

- glossary entries
- topic/article pages
- coverage tracking
- dataset relationships

This is the **source of truth for coverage**.

---

# Status Legend

- [ ] Not started
- [~] In progress
- [x] Implemented

---

# 🧠 GLOSSARY — CORE CONCEPTS (P1)

## Macroeconomic fundamentals
- [x] Inflation
- [x] Unemployment
- [x] Economic growth
- [x] Productivity
- [x] Wages
- [x] Labor force participation
- [x] Labor unions
- [x] Stagflation

## Trade & global systems
- [x] Globalization
- [x] Capital flows
- [x] Exchange rates
- [x] Trade surplus
- [x] Trade deficit

## Policy & analysis tools
- [x] Cost-benefit analysis
- [x] Fiscal policy
- [x] Monetary policy
- [x] Deregulation
- [x] Industrial policy

## Market structure
- [x] Antitrust
- [x] Market concentration
- [x] Corporate concentration
- [x] Monopoly
- [x] Competition

---

# 🧠 GLOSSARY — ECONOMIC THEORIES (P1)

- [x] Keynesian economics
- [x] Monetarism
- [x] Supply-side economics
- [x] Rational expectations
- [x] Market efficiency
- [x] Trickle-down economics

---

# 🧠 GLOSSARY — KEY P2 TERMS (SELECT)

- [x] Financial crisis
- [x] Deflation
- [x] Deficit spending
- [x] Gold standard
- [x] Banking regulation

---

# 🧍‍♂️ PEOPLE (represented as glossary entries)

## Core economists (P1)
- [x] Milton Friedman
- [x] John Maynard Keynes
- [x] Friedrich Hayek
- [x] Paul Samuelson
- [x] Joseph Stiglitz
- [x] Robert Solow

## Policy influencers (P2)
- [x] Paul Volcker
- [x] Alan Greenspan
- [x] Janet Yellen
- [x] Lawrence Summers

## Political figures (P3)
- [ ] Ronald Reagan
- [ ] Richard Nixon
- [ ] Jimmy Carter
- [ ] Bill Clinton

---

# 🏛️ INSTITUTIONS (represented as glossary entries)

## Core institutions (P1)
- [x] Federal Reserve
- [x] IMF (International Monetary Fund)
- [x] World Bank
- [x] FTC (Federal Trade Commission)

## Regulatory bodies (P2)
- [x] SEC
- [x] OSHA
- [x] EPA
- [x] OECD
- [x] CFTC

---

# 📜 POLICIES / LAWS (represented as glossary entries)

- [x] Clean Air Act
- [x] Sherman Antitrust Act
- [x] Humphrey-Hawkins Act
- [x] Airline Deregulation Act
- [x] Financial regulation (general)

---

# 🌍 EVENTS / SYSTEMS (represented as glossary entries)

- [x] Bretton Woods system
- [x] Great Depression
- [x] Great Recession
- [x] Great Moderation
- [x] Oil crises (OPEC)
- [x] Cold War economic effects

---

# 🧠 TOPIC / ARTICLE PAGES (P1)

- [x] The Rise of Market Thinking
- [x] Antitrust and Corporate Power
- [x] Globalization Through Trade Data
- [x] Labor, Wages, and Unemployment

---

# 🧠 TOPIC / ARTICLE PAGES (EXPAND)

- [x] What the Federal Reserve Actually Does
- [x] Inflation and Price Stability
- [x] Trade and State Economies
- [x] Financial Crises Explained
- [x] Deregulation and Its Consequences
- [x] Energy Shocks and Stagflation
- [x] The Role of Economists in Policy
- [x] From Bretton Woods to Modern Currency Systems
- [x] Government Regulation and Cost-Benefit Analysis
- [x] Banking Regulation and Financial Risk
- [x] The Politics of Antitrust

---

# 🗺️ DATASET CONNECTIONS

## Current (dashboard — main toggle)

- [x] `state_labor_metrics` (Labor: unemployment / BLS LAU where loaded)
- [x] `state_export_profiles` (Exports: Census origin-of-movement buckets)

## Reference / auxiliary (not main toggle today)

- [x] `state_trade_metrics` (schema / legacy or future use; not primary Exports path)

## Next likely datasets (when sourced — see `docs/data-roadmap.md`)

- [ ] Employment / jobs or industry-by-state tables
- [ ] Industry reference (e.g. NAICS labeling)
- [ ] Banking institutions / branches for reference and future maps

## Later exploratory

- [ ] Richer trade/product/partner breakdowns (source-dependent)
- [ ] Job scraper / postings pipeline (research only until scoped)

---

# 🔗 RELATIONSHIPS (IMPORTANT)

## Concept → Data
- Globalization / trade ideas → **Exports** live data (`state_export_profiles`) + future detailed trade when sourced; legacy `state_trade_metrics` may support related content
- Unemployment → **Labor** live data (`state_labor_metrics`)
- Inflation → macro data (future)
- Antitrust → company concentration (future)
- Banking regulation / institutions → future **banking** datasets and maps when integrated

## People → Ideas
- Friedman → monetarism / markets
- Keynes → demand / intervention

## Institutions → Policy
- Federal Reserve → monetary policy
- FTC → antitrust enforcement

---

# 🎯 NEXT TARGET

## Phase Goal
- **Glossary:** P1 and intended P2 coverage implemented and stabilized in `glossary.ts` (ongoing long-tail optional; P3 political figures still out of scope unless added deliberately)
- **Dashboard:** **Labor** and **Exports** are live on the main path; next work prioritizes **data usefulness** (industry/jobs, richer exports when sourced, banking exploration)—see `docs/data-roadmap.md` and `docs/implementation-plan.md`

## Notes
- People, institutions, and events are implemented as glossary entries
- No separate route systems are required for them
- Dataset checklist above should stay aligned with `docs/data-model.md` (avoid treating `state_trade_metrics` as the active Exports layer)

---

# Supplementary glossary (select P2 people & concepts)

Implemented in `src/content/glossary.ts` beyond the rows above (non-exhaustive): e.g. Robert Bork; Arthur Burns, Laffer; David Ricardo, Mundell; Stigler, Posner; Reich, Rodrik; Reinhart & Rogoff; OECD; CFTC; tariffs; subsidies; employment; systemic risk; credit derivatives; and other P2 anchors from `economists-hour-content-plan.md`.

Remaining long-tail (examples): P3 political figures; ECB, BIS, CFPB, NBER, CEA, AEA institutions from the content plan; additional events (Savings and Loan crisis, European integration, etc.).
