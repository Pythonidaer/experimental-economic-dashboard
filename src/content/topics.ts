import type { Topic } from "@/content/types";

export const topics: Topic[] = [
  {
    slug: "the-rise-of-market-thinking",
    title: "The Rise of Market Thinking",
    subtitle:
      "How economists moved from the margins to the center of public policy—and what that shift asks of citizens reading the numbers today.",
    sections: [
      {
        paragraphs: [
          "Over the last several decades, arguments once confined to academic seminars came to dominate regulatory agencies, central banks, and political campaigns. Market-friendly ideas did not win every battle, but they reshaped the vocabulary of governance: incentives, trade-offs, human capital, and getting prices right.",
          "Journalistic accounts such as “The Economist’s Hour” trace personalities, institutions, and contingencies behind that shift. The point is not to canonize any single hero or villain, but to notice when technical reasoning crowds out other values—and when it clarifies hard choices.",
        ],
      },
      {
        heading: "Keynesians, monetarists, and the policy runway",
        paragraphs: [
          "Debates between Keynesian stabilization and monetarist skepticism (often associated with figures like Milton Friedman) changed what responsible macro policy meant. Meanwhile, microeconomic tools—especially cost-benefit analysis—spread through rulemaking, marrying welfare economics with legal process.",
          "Monetary policy became the front line for fighting inflation and managing expectations. Together, these threads encouraged policymakers to justify decisions with models and evidence, even when data were incomplete or contested.",
        ],
      },
      {
        heading: "Open economies, open questions",
        paragraphs: [
          "Globalization amplified returns to some skills and regions while straining others. Aggregate statistics rarely settle moral questions about distribution or adjustment, but they show where integration left marks: trade balances, industry structure, migration patterns.",
          "This dashboard’s state-level views are one slice of that story—enough to spark better questions, not enough to finish them.",
        ],
      },
    ],
    relatedGlossarySlugs: [
      "milton-friedman",
      "keynesian-economics",
      "monetarism",
      "cost-benefit-analysis",
      "globalization",
      "fiscal-policy",
      "inflation",
      "unemployment",
      "monetary-policy",
      "economic-growth",
      "deregulation",
      "supply-side-economics",
      "rational-expectations",
      "market-efficiency",
      "trickle-down-economics",
    ],
  },
  {
    slug: "antitrust-and-corporate-power",
    title: "Antitrust and Corporate Power",
    subtitle:
      "Why market concentration became a live issue again—and how economic evidence enters the courtroom and the court of public opinion.",
    sections: [
      {
        paragraphs: [
          "Antitrust enforcement surged and receded across the twentieth century. A period of aggressive merger control and breakups gave way to approaches more tolerant of scale—sometimes on the theory that efficiency gains benefit consumers, sometimes from difficulty proving harm in fast-moving tech markets.",
          "Today, critics argue that dominant platforms and roll-ups in sectors like health care require tougher rules, while defenders warn that ham-handed intervention could chill innovation.",
        ],
      },
      {
        heading: "Evidence beyond headlines",
        paragraphs: [
          "Economists supply theories of harm, market definitions, and retrospective studies of prices after consolidation. None of that replaces democratic deliberation, but it disciplines slogans.",
          "Regional data can illustrate where economic activity clusters: a single campus, a supplier basin, or a thin labor market. Those facts do not prove illegal conduct, but they explain why national markets still land somewhere in particular.",
        ],
      },
      {
        heading: "Links to openness and trade",
        paragraphs: [
          "Globalization and corporate strategy intertwine: multinationals route inputs through tax and regulatory environments while households face shelves of imported goods. Antitrust debates increasingly ask whether traditional consumer-price tests miss risks to workers, innovation, or democracy.",
        ],
      },
    ],
    relatedGlossarySlugs: [
      "antitrust",
      "globalization",
      "cost-benefit-analysis",
      "market-concentration",
      "corporate-concentration",
      "monopoly",
      "competition",
      "industrial-policy",
    ],
  },
  {
    slug: "globalization-through-trade-data",
    title: "Globalization Through Trade Data",
    subtitle:
      "How state-level imports and exports make abstract ideas about openness concrete—and how this dashboard’s current dataset fits the content plan.",
    sections: [
      {
        paragraphs: [
          "Globalization is easy to debate in the abstract and harder to see clearly in your own neighborhood. Aggregated trade statistics, however imperfect, show which regions are tightly coupled to world markets through ports, factories, agriculture, and services sold abroad.",
          "The project’s content plan singles out state_trade_metrics as the first bridge between knowledge pages and live data: concepts like globalization, exchange rates, and trade balances are meant to connect here over time.",
        ],
      },
      {
        heading: "Reading state trade totals",
        paragraphs: [
          "Total trade value by state captures how much crosses the ledger for that geography—not the full story of value added or supply chains, but a starting point. Comparisons across states reveal hubs of openness and places more oriented toward domestic demand.",
          "Pair these numbers with glossary entries on cost-benefit analysis and antitrust when you ask whether openness delivers widely shared gains or concentrates rents.",
        ],
      },
      {
        heading: "What comes next",
        paragraphs: [
          "Future datasets in the plan (labor metrics, industries, finance) will deepen the picture. For now, trade data is the empirical spine for this topic page.",
        ],
      },
    ],
    relatedGlossarySlugs: [
      "globalization",
      "inflation",
      "antitrust",
      "cost-benefit-analysis",
      "trade-surplus",
      "trade-deficit",
      "exchange-rates",
      "capital-flows",
      "economic-growth",
    ],
  },
  {
    slug: "labor-wages-and-unemployment",
    title: "Labor, Wages, and Unemployment",
    subtitle:
      "Frameworks for job markets, price stability, and the datasets the roadmap promises under state_labor_metrics.",
    sections: [
      {
        paragraphs: [
          "Labor markets sit at the intersection of macro shocks and lived experience: a plant closing, a hiring boom in logistics, migration into a metro area. Unemployment rates and wage growth summarize those stories only partially, yet they remain essential for policy and for households deciding whether to move or retrain.",
          "Keynesian and monetarist perspectives offer different emphases on demand shortfalls versus expectations and rules. Inflation and monetary policy enter whenever central banks respond to tight or slack labor markets.",
        ],
      },
      {
        heading: "From national frames to state detail",
        paragraphs: [
          "National unemployment hides enormous variation. When state_labor_metrics arrives in the app, maps and tables should make dispersion visible: which regions recover first, which rely on volatile sectors, and where demographic change swamps cyclical swings.",
        ],
      },
      {
        heading: "Using the glossary alongside this page",
        paragraphs: [
          "Jump to entries on unemployment, wages, productivity, labor force participation, inflation, and monetary policy for definitions; return here for narrative that binds those terms to the dashboard roadmap.",
        ],
      },
    ],
    relatedGlossarySlugs: [
      "unemployment",
      "wages",
      "productivity",
      "labor-force-participation",
      "labor-unions",
      "inflation",
      "monetary-policy",
      "keynesian-economics",
      "globalization",
      "milton-friedman",
      "stagflation",
      "trickle-down-economics",
    ],
  },
  {
    slug: "what-the-federal-reserve-actually-does",
    title: "What the Federal Reserve Actually Does",
    subtitle:
      "A concise map of mandates, tools, and why a national central bank still lands differently in each state’s economy.",
    sections: [
      {
        paragraphs: [
          "The Federal Reserve oversees monetary policy, supervises many banks, operates payments systems, and—since 2008—uses a wider toolkit than the discount rate alone. Its dual mandate steers toward maximum employment and stable prices, goals that can pull in opposite directions in real time.",
        ],
      },
      {
        heading: "Tools in plain language",
        paragraphs: [
          "Policy rates, balance-sheet policy (quantitative easing or tightening), and guidance about the future path of rates all shape financial conditions. Markets transmit those changes to mortgages, car loans, and business credit—not always evenly.",
        ],
      },
      {
        heading: "Regional unevenness",
        paragraphs: [
          "A single national stance interacts with local housing wealth, industrial mix, and bank health. That is why labor and trade views in this app still matter alongside Fed-watching at the national level.",
        ],
      },
    ],
    relatedGlossarySlugs: [
      "monetary-policy",
      "inflation",
      "unemployment",
      "monetarism",
      "rational-expectations",
      "financial-crisis",
      "milton-friedman",
    ],
  },
  {
    slug: "inflation-and-price-stability",
    title: "Inflation and Price Stability",
    subtitle:
      "Why price level matters for contracts, politics, and credibility—and how it connects to oil, supply chains, and labor markets.",
    sections: [
      {
        paragraphs: [
          "Inflation rewrites the real value of debt, wages, and savings. Central banks anchor expectations so planning is possible; when anchors slip, distributional fights intensify.",
        ],
      },
      {
        heading: "Many sources",
        paragraphs: [
          "Demand pull, cost push, and expectations all appear in histories from the 1970s to the 2020s. Import prices and exchange rates link inflation to globalization; labor markets link it to jobs.",
        ],
      },
      {
        heading: "Deflation’s mirror",
        paragraphs: [
          "Sustained deflation can be just as damaging when debts swell in real terms. Policymakers therefore aim for low, stable inflation rather than zero volatility.",
        ],
      },
    ],
    relatedGlossarySlugs: [
      "inflation",
      "deflation",
      "stagflation",
      "monetary-policy",
      "unemployment",
      "wages",
      "exchange-rates",
      "monetarism",
      "keynesian-economics",
    ],
  },
  {
    slug: "trade-and-state-economies",
    title: "How Trade Shapes State Economies",
    subtitle:
      "Interpreting openness, balances, and growth when the evidence is sub-national rather than only national.",
    sections: [
      {
        paragraphs: [
          "National trade politics often treats “America” as a single unit. State-level flows show which economies live and die by ports, farming exports, advanced manufacturing, or cross-border services.",
        ],
      },
      {
        heading: "Surplus, deficit, nuance",
        paragraphs: [
          "A state that imports heavily may still host high-value headquarters; surplus-oriented states may depend on volatile commodity prices. Glossary entries on trade surplus and deficit pair with this page to avoid moralized readings of the map.",
        ],
      },
      {
        heading: "Exchange rates and investment",
        paragraphs: [
          "Capital flows and currency moves filter through local employment even when firms never ship a container. Growth and industrial-policy debates increasingly acknowledge these channels.",
        ],
      },
    ],
    relatedGlossarySlugs: [
      "globalization",
      "trade-surplus",
      "trade-deficit",
      "exchange-rates",
      "capital-flows",
      "economic-growth",
      "industrial-policy",
      "antitrust",
    ],
  },
  {
    slug: "financial-crises-explained",
    title: "Financial Crises Explained",
    subtitle:
      "Leverage, panic, and policy responses—why crashes are as much institutional as psychological.",
    sections: [
      {
        paragraphs: [
          "Crises tend to begin where short-term funding meets long-term, illiquid assets. When confidence breaks, fire sales and credit freezes transmit stress from finance to jobs and state tax bases.",
        ],
      },
      {
        heading: "Macro policy response",
        paragraphs: [
          "Central banks become lenders of last resort; treasuries debate bailouts and stimulus. The Great Recession rekindled Keynesian arguments and reshaped regulation while testing market-efficiency complacency.",
        ],
      },
      {
        heading: "Lessons for readers",
        paragraphs: [
          "No chart on this site replaces a full financial stability dashboard, but trade and (eventually) labor data help show real-economy scarring after crises hit.",
        ],
      },
    ],
    relatedGlossarySlugs: [
      "financial-crisis",
      "banking-regulation",
      "monetary-policy",
      "fiscal-policy",
      "deficit-spending",
      "market-efficiency",
      "keynesian-economics",
      "deflation",
      "unemployment",
      "capital-flows",
    ],
  },
  {
    slug: "deregulation-and-its-consequences",
    title: "Deregulation and Its Consequences",
    subtitle:
      "When rules rolled back—and when crises or social costs invited a second look.",
    sections: [
      {
        paragraphs: [
          "Deregulation promised cheaper tickets, more dynamism, and narrower margins of bureaucratic error. Airlines, trucking, telecoms, and finance each carry distinct case studies of gains and mishaps.",
        ],
      },
      {
        heading: "Evidence policy",
        paragraphs: [
          "Cost-benefit analysis became the default language for judging both regulation and its removal. Economists-in-government topics overlap here: who measures wins and losses, and on what horizon?",
        ],
      },
      {
        heading: "Competition concentration",
        paragraphs: [
          "Some deregulation spurred entry; other episodes ended in consolidation. Antitrust and market-structure entries help separate pro-market rhetoric from competitive outcomes.",
        ],
      },
    ],
    relatedGlossarySlugs: [
      "deregulation",
      "cost-benefit-analysis",
      "competition",
      "market-concentration",
      "monopoly",
      "antitrust",
      "supply-side-economics",
      "globalization",
    ],
  },
  {
    slug: "energy-shocks-and-stagflation",
    title: "Energy Shocks and Stagflation",
    subtitle:
      "Why supply shocks can raise prices and kill jobs at once—and why that puzzle reshaped macro policy.",
    sections: [
      {
        paragraphs: [
          "Oil shocks in the 1970s broke simple Phillips-curve intuitions: inflation rose while unemployment stayed high. Policymakers learned that stimulating demand could worsen inflation without restoring growth.",
        ],
      },
      {
        heading: "Modern echoes",
        paragraphs: [
          "Geopolitics, climate transitions, and pandemic bottlenecks revived supply-side inflation debates. Monetary and fiscal leaders must judge what is transient versus persistent.",
        ],
      },
      {
        heading: "Link to the glossary",
        paragraphs: [
          "See stagflation, inflation, and monetary policy entries for definitions; this topic ties the narrative together.",
        ],
      },
    ],
    relatedGlossarySlugs: [
      "stagflation",
      "inflation",
      "unemployment",
      "monetary-policy",
      "economic-growth",
      "globalization",
    ],
  },
  {
    slug: "economists-in-public-policy",
    title: "The Role of Economists in Public Policy",
    subtitle:
      "From forecasters to expert witnesses—how technical authority grew and where it collides with democracy.",
    sections: [
      {
        paragraphs: [
          "Economists staff central banks, treasuries, regulatory bodies, and congressional budget offices. Their models set expectations for legislation, merger review, and crisis response.",
        ],
      },
      {
        heading: "Power and limits",
        paragraphs: [
          "Expertise can clarify trade-offs but cannot dissolve values. Cost-benefit analysis quantifies some harms while narrowing others; rational-expectations models discipline policy while simplifying politics.",
        ],
      },
      {
        heading: "Reading this site",
        paragraphs: [
          "When you open a map of trade or jobs, you are seeing data that analysts debate inside institutions sketched in “The Economist’s Hour.” Glossary bridges help you unpack the vocabulary behind the charts.",
        ],
      },
    ],
    relatedGlossarySlugs: [
      "cost-benefit-analysis",
      "fiscal-policy",
      "deficit-spending",
      "keynesian-economics",
      "rational-expectations",
      "financial-crisis",
      "antitrust",
      "monetary-policy",
      "deregulation",
    ],
  },
  {
    slug: "from-bretton-woods-to-modern-currency-systems",
    title: "From Bretton Woods to Modern Currency Systems",
    subtitle:
      "How the postwar settlement on money and exchange rates gave way to today’s fiat, floating, and politically fraught monetary world.",
    sections: [
      {
        paragraphs: [
          "The Bretton Woods conference (1944) imagined pegged exchange rates, capital controls, and an International Monetary Fund to smooth adjustment. Currencies were tied to the dollar and indirectly to gold until strains in the 1960s and Nixon’s closure of the gold window in 1971 ended the arrangement.",
        ],
      },
      {
        heading: "What changed",
        paragraphs: [
          "Floating rates, mobile capital, and independent central banks replaced the mid-century compromise. The content plan lists Bretton Woods among P1 events/systems to anchor later institutional pages; for now, glossary entries on exchange rates, capital flows, globalization, and the gold standard carry the vocabulary.",
        ],
      },
      {
        heading: "Why it matters on this site",
        paragraphs: [
          "State trade data you explore here are denominated in dollars shaped by that institutional evolution—not by nineteenth-century gold parity.",
        ],
      },
    ],
    relatedGlossarySlugs: [
      "gold-standard",
      "exchange-rates",
      "capital-flows",
      "globalization",
      "monetary-policy",
      "inflation",
      "trade-deficit",
    ],
  },
  {
    slug: "government-regulation-and-cost-benefit-analysis",
    title: "Government Regulation and Cost-Benefit Analysis",
    subtitle:
      "How agencies weigh lives, dollars, and freedoms—and why economists became indispensable to the regulatory state.",
    sections: [
      {
        paragraphs: [
          "Modern rulemaking often requires estimating benefits and harms of pollution limits, safety standards, and market rules. Cost-benefit analysis translates incommensurable values into common units imperfectly but transparently.",
        ],
      },
      {
        heading: "Pushback and politics",
        paragraphs: [
          "Critics argue CBA buries dignity, equity, and precaution; defenders call it disciplined democracy. Deregulation waves sometimes attacked process costs; crises and scandal renewed appetite for oversight.",
        ],
      },
      {
        heading: "Content plan alignment",
        paragraphs: [
          "This topic mirrors the P2 page in economists-hour-content-plan.md pairing regulation with CBA; glossary entries on cost-benefit analysis, deregulation, competition, and fiscal policy supply definitions.",
        ],
      },
    ],
    relatedGlossarySlugs: [
      "cost-benefit-analysis",
      "deregulation",
      "competition",
      "monopoly",
      "fiscal-policy",
      "deficit-spending",
      "antitrust",
    ],
  },
  {
    slug: "banking-regulation-and-financial-risk",
    title: "Banking Regulation and Financial Risk",
    subtitle:
      "Capital rules, shadow banking, and why finance is never ‘just’ a technical appendix to the real economy.",
    sections: [
      {
        paragraphs: [
          "Banks transform short-term deposits into long-term loans; when confidence breaks, liquidity evaporates faster than models assume. Post-crisis regimes raised capital buffers and stress tests but left room for regulatory arbitrage.",
        ],
      },
      {
        heading: "Topic placement",
        paragraphs: [
          "The content plan schedules this as a P2 topic tied to bank_and_finance_entities data later. Glossary entries on banking regulation, financial crisis, monetary policy, and market efficiency orient you without yet duplicating institution-specific pages.",
        ],
      },
    ],
    relatedGlossarySlugs: [
      "banking-regulation",
      "financial-crisis",
      "monetary-policy",
      "market-efficiency",
      "capital-flows",
      "deflation",
    ],
  },
  {
    slug: "politics-of-antitrust",
    title: "The Politics of Antitrust",
    subtitle:
      "Why merger law is never pure economics—ideology, populism, and agency design matter as much as models.",
    sections: [
      {
        paragraphs: [
          "Antitrust debates pit Chicago-school skepticism against Brandeisian fear of bigness; electorates swing between trust in experts and anger at platforms. Courts, not only agencies, interpret statutes shaped decades ago.",
        ],
      },
      {
        heading: "Maps and power",
        paragraphs: [
          "Corporate concentration and market power land in particular metros and states; regional economic data cannot prove illegality but shows where political pressure originates.",
        ],
      },
      {
        heading: "Plan note",
        paragraphs: [
          "This page corresponds to “The Politics of Antitrust” in the content plan’s P2 topic list and feeds off glossary entries on antitrust, competition, monopoly, market concentration, corporate concentration, and industrial policy.",
        ],
      },
    ],
    relatedGlossarySlugs: [
      "antitrust",
      "competition",
      "monopoly",
      "market-concentration",
      "corporate-concentration",
      "industrial-policy",
      "cost-benefit-analysis",
      "globalization",
    ],
  },
];
