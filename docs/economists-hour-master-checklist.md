# The Economist's Hour — Master Checklist

## Purpose

This document converts index material from *The Economist’s Hour* into a structured, trackable system for:

- glossary entries
- topic/article pages
- people
- institutions
- events
- future datasets

This is the **source of truth for coverage**, not the MVP.

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
- [x] Labor unions (content plan P1)
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
- [x] Corporate concentration (content plan P2)
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
- [x] Deficit spending (content plan P2)
- [x] Gold standard (content plan P2)
- [x] Banking regulation (content plan P2)

---

# 🧍‍♂️ PEOPLE (P1 → P3)

## Core economists (P1)
- [x] Milton Friedman
- [ ] John Maynard Keynes
- [ ] Friedrich Hayek
- [ ] Paul Samuelson
- [ ] Joseph Stiglitz
- [ ] Robert Solow

## Policy influencers (P2)
- [ ] Paul Volcker
- [ ] Alan Greenspan
- [ ] Janet Yellen
- [ ] Lawrence Summers

## Political figures (P3)
- [ ] Ronald Reagan
- [ ] Richard Nixon
- [ ] Jimmy Carter
- [ ] Bill Clinton

---

# 🏛️ INSTITUTIONS (P1 → P2)

## Core institutions (P1)
- [ ] Federal Reserve
- [ ] IMF (International Monetary Fund)
- [ ] World Bank
- [ ] FTC (Federal Trade Commission)

## Regulatory bodies (P2)
- [ ] SEC
- [ ] OSHA
- [ ] EPA
- [ ] OECD
- [ ] CFTC

---

# 📜 POLICIES / LAWS

- [ ] Clean Air Act
- [ ] Sherman Antitrust Act
- [ ] Humphrey-Hawkins Act
- [ ] Airline Deregulation Act
- [ ] Financial regulation (general)

---

# 🌍 EVENTS / SYSTEMS

- [ ] Bretton Woods system
- [ ] Great Depression
- [ ] Great Recession
- [ ] Great Moderation
- [ ] Oil crises (OPEC)
- [ ] Cold War economic effects

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
- [x] Trade and State Economies (page title: “How Trade Shapes State Economies”)
- [x] Financial Crises Explained
- [x] Deregulation and Its Consequences
- [x] Energy Shocks and Stagflation
- [x] The Role of Economists in Policy
- [x] From Bretton Woods to Modern Currency Systems (content plan P1)
- [x] Government Regulation and Cost-Benefit Analysis (content plan P2)
- [x] Banking Regulation and Financial Risk (content plan P2)
- [x] The Politics of Antitrust (content plan P2)

---

# 🗺️ DATASET CONNECTIONS

## Current
- [x] state_trade_metrics

## Next (build now)
- [ ] state_labor_metrics

## Future
- [ ] state_industries
- [ ] macro_indicators
- [ ] banking_entities

---

# 🔗 RELATIONSHIPS (IMPORTANT)

## Concept → Data
- Globalization → trade data
- Unemployment → labor data
- Inflation → macro data
- Antitrust → company concentration (future)

## People → Ideas
- Friedman → monetarism / markets
- Keynes → demand / intervention

## Institutions → Policy
- Federal Reserve → monetary policy
- FTC → antitrust enforcement

---

# 🚧 MVP CONTENT STATUS

## Glossary
- **~35** entries (P1 checklist core + theories + selected P2, including content-plan P1 labor unions)
- Further expansion: price controls, credit derivatives, asset bubble, competitive markets as distinct entry, consumer safety, environmental regulation

## Topics
- **15** topic pages (prior 11 + Bretton Woods, regulation/CBA, banking risk, politics of antitrust)
- Optional: “Inflation and Why Prices Rise” as alternate title already covered by Inflation and Price Stability; Ricardo/Solow people routes still out of scope

## People / Institutions / Events
- Not implemented yet
- Should be structured next but not overbuilt

---

# 🎯 NEXT TARGET

## Phase Goal
Add **people**, **institutions**, and **events** routes and file-based content (per content plan)—without changing glossary/topic architecture.

## Stretch
- Remaining P2 glossary and topic pages from `economists-hour-content-plan.md`
- Inline “dataset connection” callouts on topics when `state_labor_metrics` ships