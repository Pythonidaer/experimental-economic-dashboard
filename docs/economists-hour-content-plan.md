# The Economist's Hour — Content Plan

## Purpose
This document organizes glossary and topic content inspired by themes and index entries from *The Economist's Hour*.

The goal is to support:
- a complete glossary system (primary focus)
- topic/article pages (secondary)
- future connections between knowledge content and dashboard datasets

This is a planning and execution document for building out the full glossary.

---

## Content Model

- glossary (primary system)
- topics (secondary system)

Notes:
- People, institutions, and events are represented as glossary entries
- No separate route systems for people, institutions, or events

---

## Routes

- /glossary
- /glossary/[slug]
- /topics
- /topics/[slug]

---

## Execution Priority

The glossary remains the **primary knowledge artifact**, but **dashboard data integration** (**Labor** / BLS LAU unemployment and **Exports** / Census origin-of-movement buckets via `state_export_profiles`) runs in parallel with ongoing glossary/topic work—not strictly “after” a complete glossary.

Topics can be developed alongside glossary entries. For the **current stage**, treat glossary **structure and baseline content** as **stabilized**; expand entries incrementally without blocking dashboard or data roadmap tasks.

---

## Priority Levels

### P1 — build first
Core concepts that directly support understanding of economic data and dashboard features.

### P2 — build next
Supporting concepts and systems that deepen understanding.

### P3 — build later
Long-tail enrichment and secondary figures.

---

## P1 Glossary Entries

### Core economic concepts
- Inflation
- Unemployment
- Economic growth
- Cost-benefit analysis
- Globalization
- Deregulation
- Antitrust
- Monetary policy
- Exchange rates
- Capital flows
- Trade surplus
- Trade deficit
- Stagflation
- Productivity
- Wages
- Labor unions

### Economic schools / frameworks
- Keynesian economics
- Monetarism
- Supply-side economics
- Market efficiency
- Rational expectations
- Trickle-down economics

---

## P1 Institutions (represented as glossary entries)

- Federal Reserve
- International Monetary Fund (IMF)
- World Bank
- Federal Trade Commission (FTC)
- Occupational Safety and Health Administration (OSHA)
- Environmental Protection Agency (EPA)
- Securities and Exchange Commission (SEC)
- Organization for Economic Cooperation and Development (OECD)

---

## P1 Events / Systems (represented as glossary entries)

- Bretton Woods system
- Great Depression
- Great Recession
- Great Moderation
- Oil crises
- Clean Air Act
- Sherman Antitrust Act
- Humphrey-Hawkins Full Employment Act

---

## P1 People (represented as glossary entries)

- Milton Friedman
- John Maynard Keynes
- Friedrich Hayek
- Paul Volcker
- Alan Greenspan
- Robert Bork
- Paul Samuelson
- Joseph Stiglitz
- Robert Solow
- Janet Yellen

---

## P1 Topic / Article Pages

- How Trade Shapes State Economies
- What the Federal Reserve Actually Does
- Inflation and Why Prices Rise
- Globalization Through Trade Data
- Deregulation and Its Consequences
- Antitrust and Corporate Power
- Labor, Wages, and Unemployment
- From Bretton Woods to Modern Currency Systems

---

## P2 Glossary Entries

- Banking regulation
- Credit derivatives
- Financial crisis
- Asset bubble
- Deficit spending
- Fiscal policy
- Consumer safety
- Environmental regulation
- Industrial policy
- Price controls
- Gold standard
- Deflation
- Competitive markets
- Corporate concentration
- Market revolution

---

## P2 Institutions (glossary entries)

- European Central Bank
- Bank for International Settlements
- Consumer Financial Protection Bureau
- Civil Aeronautics Board
- Commodity Futures Trading Commission
- National Bureau of Economic Research
- White House Council of Economic Advisers
- American Economic Association

---

## P2 People (glossary entries)

- Arthur Burns
- Lawrence Summers
- David Ricardo
- Robert Mundell
- George Stigler
- Aaron Director
- Richard Posner
- Arthur Laffer
- Ralph Nader
- Robert Reich
- Dani Rodrik
- Carmen Reinhart
- Kenneth Rogoff

---

## P2 Events / Systems (glossary entries)

- Airline deregulation
- Savings and loan crisis
- Military draft and economic policy
- European integration
- Postwar international monetary system
- OPEC and oil shocks
- Cold War economic effects

---

## P2 Topic / Article Pages

- The Rise of Market Thinking
- The Role of Economists in Public Policy
- Banking Regulation and Financial Risk
- The Politics of Antitrust
- Energy Shocks and Stagflation
- Government Regulation and Cost-Benefit Analysis

---

## P3 People / Long-tail Enrichment (glossary entries)

- Ronald Reagan
- Richard Nixon
- Jimmy Carter
- Bill Clinton
- George W. Bush
- Barack Obama
- Margaret Thatcher
- Henry Kissinger
- John Kenneth Galbraith
- Alan Krueger
- Paul Krugman
- Amartya Sen
- Cass Sunstein
- Thurgood Marshall
- Louis Brandeis

---

## Data Connections

These mappings indicate how glossary concepts relate to datasets.

They guide future integration but do not require immediate implementation.

### state_export_profiles (live — Exports toggle)

Related concepts (today and as content expands):
- Globalization
- Trade surplus / deficit (orientation—not the same as customs balances without matching definitions)
- Exchange rates, capital flows, economic growth (context in topics; coarse export buckets support “trade and places,” not full macro)

Future tie-ins: more detailed **product/industry** trade stories when sourced.

### state_labor_metrics (live — Labor toggle)

Related concepts:
- Unemployment
- Wages
- Labor unions
- Productivity
- Employment
- Labor force participation

Future tie-ins: **jobs / industry employment** datasets when integrated.

### state_trade_metrics (reference / auxiliary)

May support glossary copy and legacy links; **not** the main Exports dataset in the product today. Update content if the primary table for trade concepts changes.

### Future datasets (exploratory — see `docs/data-roadmap.md`)

- Industry / employment by state
- Banking institutions or branches (maps and reference)
- Richer trade/partner/product layers when available
- Job postings or scraper-sourced feeds (**research stage only** until scoped)

---

## MVP Scope

MVP includes:
- full glossary implementation (ongoing content growth; architecture stabilized for now)
- initial topic pages
- **dashboard** integration of **`state_labor_metrics`** (unemployment / BLS LAU where loaded) and **`state_export_profiles`** (Census export buckets) on map, table, charts, and Notes

**Banking** and **industry/jobs** topics in the glossary are positioned to connect to **future** bank and employment datasets and maps when those exist—not assumed live today.

Further glossary depth and additional datasets proceed incrementally; they are not serialized as “glossary 100% then data.”

---

## Initial Seed Content for MVP

### Glossary seed entries
- Milton Friedman
- Keynesian economics
- Cost-benefit analysis
- Globalization
- Antitrust
- Inflation
- Unemployment
- Monetary policy

### Topic seed pages
- The Rise of Market Thinking
- Antitrust and Corporate Power
- Globalization Through Trade Data
- Labor, Wages, and Unemployment
