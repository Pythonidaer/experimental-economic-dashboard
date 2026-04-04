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

The glossary is intended to be built out fully before shifting focus to data ingestion and visualization.

Topics can be developed alongside or after glossary completion.

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

### state_trade_metrics
Related concepts:
- Globalization
- Trade surplus
- Trade deficit
- Exchange rates
- Capital flows
- Economic growth

### state_labor_metrics
Related concepts:
- Unemployment
- Wages
- Labor unions
- Productivity
- Employment
- Labor force participation

### Future datasets (exploratory)
- state_industries
- bank_and_finance_entities

---

## MVP Scope

MVP includes:
- full glossary implementation
- initial topic pages

Data integration and visualization follow after glossary completion.

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
