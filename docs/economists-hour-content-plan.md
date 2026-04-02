# The Economist's Hour — Content Plan

## Purpose
This document organizes glossary, topic, people, institution, and event content inspired by themes and index entries from *The Economist's Hour*.

The goal is to support:
- a glossary system
- article/topic pages
- future links between knowledge pages and dashboard datasets

This is a content-planning and architecture document, not a final statement that every listed entry must be created immediately.

---

## Priority Levels

### P1 — build first
These are the best initial entries because they connect directly to current or near-term dashboard datasets.

### P2 — build next
Important supporting concepts and institutions.

### P3 — build later
Long-tail enrichment, supporting figures, and secondary topics.

---

## Content Types

- glossary: short concept/term definitions
- people: important economists and public figures
- institutions: agencies, banks, and organizations
- events: major historical episodes
- topics: broader article-style pages that connect many terms

---

# P1 Glossary Entries

## Core economic concepts
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

## Economic schools / frameworks
- Keynesian economics
- Monetarism
- Supply-side economics
- Market efficiency
- Rational expectations
- Trickle-down economics

---

# P1 Institutions

- Federal Reserve
- International Monetary Fund (IMF)
- World Bank
- Federal Trade Commission (FTC)
- Occupational Safety and Health Administration (OSHA)
- Environmental Protection Agency (EPA)
- Securities and Exchange Commission (SEC)
- Organization for Economic Cooperation and Development (OECD)

---

# P1 Events / Systems

- Bretton Woods system
- Great Depression
- Great Recession
- Great Moderation
- Oil crises
- Clean Air Act
- Sherman Antitrust Act
- Humphrey-Hawkins Full Employment Act

---

# P1 People

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

# P1 Topic / Article Pages

- How Trade Shapes State Economies
- What the Federal Reserve Actually Does
- Inflation and Why Prices Rise
- Globalization Through Trade Data
- Deregulation and Its Consequences
- Antitrust and Corporate Power
- Labor, Wages, and Unemployment
- From Bretton Woods to Modern Currency Systems

---

# P2 Glossary Entries

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

# P2 Institutions

- European Central Bank
- Bank for International Settlements
- Consumer Financial Protection Bureau
- Civil Aeronautics Board
- Commodity Futures Trading Commission
- National Bureau of Economic Research
- White House Council of Economic Advisers
- American Economic Association

---

# P2 People

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

# P2 Events / Systems

- Airline deregulation
- Savings and loan crisis
- Military draft and economic policy
- European integration
- Postwar international monetary system
- OPEC and oil shocks
- Cold War economic effects

---

# P2 Topic / Article Pages

- The Rise of Market Thinking
- The Role of Economists in Public Policy
- Banking Regulation and Financial Risk
- The Politics of Antitrust
- Energy Shocks and Stagflation
- Government Regulation and Cost-Benefit Analysis

---

# P3 People / Long-tail Enrichment

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

# Planned Data Connections

## Existing dataset
### state_trade_metrics
Related concepts:
- Globalization
- Trade surplus
- Trade deficit
- Exchange rates
- Capital flows
- Economic growth

## Next dataset
### state_labor_metrics
Related concepts:
- Unemployment
- Wages
- Labor unions
- Productivity
- Employment
- Labor force participation

## Future dataset
### state_industries
Related concepts:
- Industrial policy
- Corporate concentration
- Globalization
- Deregulation

## Future dataset
### bank_and_finance_entities
Related concepts:
- Banking regulation
- Credit derivatives
- Financial crisis
- Federal Reserve

---

# Site Architecture Direction

## Planned routes
- /glossary
- /glossary/[slug]
- /topics
- /topics/[slug]
- /people
- /people/[slug]
- /institutions
- /institutions/[slug]
- /events
- /events/[slug]

## MVP content scope
Start with:
- glossary
- topics

People, institutions, and events can be supported in the data model now, even if their list/detail routes are added later.

---

# Initial Seed Content for MVP

## Glossary seed entries
- Milton Friedman
- Keynesian economics
- Cost-benefit analysis
- Globalization
- Antitrust
- Inflation
- Unemployment
- Monetary policy

## Topic seed pages
- The Rise of Market Thinking
- Antitrust and Corporate Power
- Globalization Through Trade Data
- Labor, Wages, and Unemployment