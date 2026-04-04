import type { GlossaryEntry } from "@/content/types";

export const glossaryEntries: GlossaryEntry[] = [
  {
    slug: "milton-friedman",
    category: "person",
    title: "Milton Friedman",
    summary:
      "Monetarist and advocate of limited government who helped reshape how policymakers think about markets, money, and individual choice.",
    sections: [
      {
        paragraphs: [
          "Milton Friedman (1912–2006) was an American economist famous for arguing that competitive markets, stable rules, and restrained fiscal activism often deliver better outcomes than heavy-handed planning. His popular writing and television work brought technical debates about inflation, regulation, and welfare into public view.",
          "In the story told in works such as “The Economist’s Hour”, Friedman embodies the shift toward market thinking in the second half of the twentieth century: treating prices and incentives as central levers and questioning whether governments can reliably fine-tune complex economies.",
        ],
      },
      {
        heading: "Why it matters here",
        paragraphs: [
          "When you look at state-level trade or labor market data, many indicators reflect the same broad forces Friedman highlighted: openness to exchange, expectations about policy, and the belief that decentralized decisions aggregate into macro patterns. His lens does not replace data—but it helps explain why policymakers and voters care about growth, inflation, and regulation.",
        ],
      },
    ],
    relatedTopicSlugs: [
      "the-rise-of-market-thinking",
      "labor-wages-and-unemployment",
      "what-the-federal-reserve-actually-does",
    ],
  },
  {
    slug: "keynesian-economics",
    category: "theory",
    title: "Keynesian economics",
    summary:
      "A school of thought emphasizing aggregate demand, counter-cyclical policy, and the idea that economies can stall without deliberate intervention.",
    sections: [
      {
        paragraphs: [
          "Keynesian economics takes its name from John Maynard Keynes and his interwar analysis of depressions, uncertainty, and “animal spirits.” It stresses that total spending—consumption, investment, government outlays—can fall short of what an economy could produce, leaving labor and capital idle.",
          "In policy debates that run through “The Economist’s Hour”, Keynesian ideas often stand opposite pure laissez-faire: they justify stimulus, automatic stabilizers, and skepticism that prices adjust instantly to clear every market.",
        ],
      },
      {
        heading: "Connection to the dashboard",
        paragraphs: [
          "Regional data can show divergent recoveries: some states snap back while others lag. Keynesian narratives highlight demand shocks, fiscal transfers, and credit conditions—useful context when comparing unemployment, trade flows, or sector mixes across states.",
        ],
      },
    ],
    relatedTopicSlugs: [
      "the-rise-of-market-thinking",
      "labor-wages-and-unemployment",
      "economists-in-public-policy",
      "financial-crises-explained",
    ],
  },
  {
    slug: "cost-benefit-analysis",
    category: "concept",
    title: "Cost-benefit analysis",
    summary:
      "A structured way to compare the gains and losses of a policy or project, often using monetized impacts and explicit discounting of future effects.",
    sections: [
      {
        paragraphs: [
          "Cost-benefit analysis (CBA) asks whether society is better off after a proposed rule, infrastructure project, or environmental standard. Practitioners quantify benefits and costs where possible, discount future streams to present value, and sometimes sensitivity-test assumptions.",
          "In the rise of the economist’s hour, CBA became a lingua franca in agencies and courts—a way to make trade-offs legible and contestable without pretending arithmetic removes politics.",
        ],
      },
      {
        heading: "Reading the numbers",
        paragraphs: [
          "Metrics in this app (trade totals, and later jobs or sector data) are inputs analysts might feed into broader CBAs: they rarely settle a policy alone, but they anchor conversation about who gains, who loses, and over what horizon.",
        ],
      },
    ],
    relatedTopicSlugs: [
      "the-rise-of-market-thinking",
      "globalization-through-trade-data",
      "deregulation-and-its-consequences",
      "economists-in-public-policy",
      "government-regulation-and-cost-benefit-analysis",
    ],
  },
  {
    slug: "globalization",
    category: "concept",
    title: "Globalization",
    summary:
      "The growing integration of product, labor, and capital markets across borders—often associated with trade openness, supply chains, and cultural exchange.",
    sections: [
      {
        paragraphs: [
          "Globalization describes cross-border flows of goods, services, finance, ideas, and people. For states, it shows up as export mix, port activity, immigrant workforce participation, and exposure to shocks abroad.",
          "Competing narratives frame it as either a driver of efficiency and consumer choice or a source of inequality and vulnerability for particular workers and places.",
        ],
      },
      {
        heading: "Maps and aggregates",
        paragraphs: [
          "State-level trade metrics make tangible which regions are tightly coupled to world markets. Aggregates will not capture every community story, but they help ground debates about openness, adjustment assistance, and industrial policy.",
          "The economists-hour content plan explicitly links the state_trade_metrics dataset to globalization together with trade surplus, trade deficit, exchange rates, capital flows, and economic growth—the bundle of ideas this dashboard is built to support.",
        ],
      },
    ],
    relatedTopicSlugs: [
      "the-rise-of-market-thinking",
      "antitrust-and-corporate-power",
      "globalization-through-trade-data",
      "trade-and-state-economies",
    ],
  },
  {
    slug: "antitrust",
    category: "law_policy",
    title: "Antitrust",
    summary:
      "Law and policy aimed at curbing excessive market power—mergers, collusion, and monopolistic conduct—often justified by consumer welfare or competitive process goals.",
    sections: [
      {
        paragraphs: [
          "Antitrust regimes vary by country and era. In the United States, enforcement has swung between vigorous trust-busting, Chicago-influenced skepticism of intervention, and renewed interest in concentration across tech, health care, and agriculture.",
          "Economists feature heavily in merger review, damage calculations, and theories of harm—whether markets are contestable, whether platform rules exclude rivals, or whether efficiencies justify consolidation.",
        ],
      },
      {
        heading: "Scale and geography",
        paragraphs: [
          "Corporate power has geographic footprints: headquarters states, supplier networks, and labor markets. Regional economic data can complement antitrust narratives by showing where value accrues and how concentrated activity is in practice.",
        ],
      },
    ],
    relatedTopicSlugs: [
      "antitrust-and-corporate-power",
      "globalization-through-trade-data",
      "deregulation-and-its-consequences",
      "politics-of-antitrust",
    ],
  },
  {
    slug: "inflation",
    category: "concept",
    title: "Inflation",
    summary:
      "A sustained increase in the general level of prices for goods and services, usually expressed as an annual percentage change in a price index.",
    sections: [
      {
        paragraphs: [
          "Inflation erodes purchasing power: the same paycheck buys less when prices rise faster than wages. Economists distinguish one-off shocks (a sudden jump in oil prices) from ongoing inflation driven by persistent excess demand, supply constraints, or embedded expectations.",
          "Central banks in the postwar era were tasked with anchoring expectations; episodes from the 1970s to the 2020s show how trade-offs between employment and price stability remain politically charged.",
        ],
      },
      {
        heading: "Trade, labor, and state views",
        paragraphs: [
          "Import prices and global supply chains feed into domestic inflation; meanwhile, tight labor markets in some regions can push up wages and local service prices. State-level data will not replace national CPI, but it can illustrate which places are more exposed to traded goods and which lean on wage-sensitive sectors.",
        ],
      },
    ],
    relatedTopicSlugs: [
      "labor-wages-and-unemployment",
      "globalization-through-trade-data",
      "inflation-and-price-stability",
      "energy-shocks-and-stagflation",
    ],
  },
  {
    slug: "unemployment",
    category: "concept",
    title: "Unemployment",
    summary:
      "The share of the labor force that is jobless and actively seeking work—an indicator of spare capacity and hardship in labor markets.",
    sections: [
      {
        paragraphs: [
          "The unemployment rate is among the most watched macro statistics. It rises in recessions when firms cut payrolls and can remain elevated if recoveries are uneven across industries or regions.",
          "Economists argue over frictional unemployment (normal job search), structural mismatches (skills vs. openings), and cyclical shortfalls in aggregate demand—frameworks that map closely to debates between classical, Keynesian, and monetarist traditions described in “The Economist’s Hour.”",
        ],
      },
      {
        heading: "Roadmap: state labor metrics",
        paragraphs: [
          "The project content plan ties unemployment (and related concepts like wages and productivity) to a future state_labor_metrics dataset. Until that lands, the glossary grounds the vocabulary users will need when those maps and tables appear.",
        ],
      },
    ],
    relatedTopicSlugs: [
      "labor-wages-and-unemployment",
      "the-rise-of-market-thinking",
      "financial-crises-explained",
    ],
  },
  {
    slug: "monetary-policy",
    category: "concept",
    title: "Monetary policy",
    summary:
      "Central-bank choices—chiefly interest rates and balance-sheet operations—that influence borrowing costs, credit conditions, and inflation expectations.",
    sections: [
      {
        paragraphs: [
          "Monetary policy shapes how expensive it is to finance a home, a factory, or inventory. Tightening policy cools demand and can raise unemployment in the short run; easing supports credit and asset prices but risks overheating if taken too far.",
          "Figures such as Milton Friedman emphasized long-run relationships between money growth and inflation; modern practice blends rules, discretion, and forward guidance.",
        ],
      },
      {
        heading: "Federal level, regional effects",
        paragraphs: [
          "The Federal Reserve sets policy for the country as a whole, but transmission hits states differently—housing markets, bank concentration, and industry mix all matter. Topic pages here connect those ideas to broader narratives in the knowledge layer before dashboard datasets catch up.",
        ],
      },
    ],
    relatedTopicSlugs: [
      "labor-wages-and-unemployment",
      "what-the-federal-reserve-actually-does",
      "inflation-and-price-stability",
      "financial-crises-explained",
    ],
  },
  {
    slug: "economic-growth",
    category: "concept",
    title: "Economic growth",
    summary:
      "A rise over time in an economy’s capacity to produce goods and services—often measured by real GDP or income per person.",
    sections: [
      {
        paragraphs: [
          "Growth is not the only goal of economic policy, but it is the metric politicians and business groups cite most often when judging success. It can come from more labor and capital, better technology, or more efficient organization—themes central to how economists evaluate openness, regulation, and innovation.",
        ],
      },
      {
        heading: "Regional stories",
        paragraphs: [
          "National growth rates hide winners and losers across states. Trade exposure, energy costs, and demographics help explain why some regions compound faster than others—the connection the dashboard’s geographic views are meant to illuminate.",
          "Under the content plan’s data map, economic growth sits alongside globalization, surpluses and deficits, exchange rates, and capital flows as concepts tied to state_trade_metrics.",
        ],
      },
    ],
    relatedTopicSlugs: ["trade-and-state-economies", "the-rise-of-market-thinking"],
  },
  {
    slug: "productivity",
    category: "concept",
    title: "Productivity",
    summary:
      "Output per unit of input—typically how much GDP or value added an economy or worker produces relative to hours worked.",
    sections: [
      {
        paragraphs: [
          "Higher productivity means society can enjoy more consumption, leisure, or public goods without working harder hours. It depends on skills, equipment, management, and the rules that govern competition and entry.",
          "Slow productivity growth puzzles have motivated everything from deregulation pushes to industrial policy debates.",
        ],
      },
      {
        heading: "Labor data and the dashboard",
        paragraphs: [
          "When labor metrics join the app, productivity-related questions will sit alongside unemployment and wages: are high-job states also high-output states?",
          "The content plan’s state_labor_metrics roadmap groups productivity with unemployment, wages, labor unions, labor force participation, and employment.",
        ],
      },
    ],
    relatedTopicSlugs: ["labor-wages-and-unemployment", "deregulation-and-its-consequences"],
  },
  {
    slug: "wages",
    category: "concept",
    title: "Wages",
    summary:
      "Compensation for labor—central to household welfare, inflation dynamics, and debates over inequality.",
    sections: [
      {
        paragraphs: [
          "Nominal wages are sticker prices on paychecks; real wages adjust for inflation and measure living standards. Bargaining power, minimum wages, migration, and sectoral demand all influence outcomes.",
          "Globalization and technology are often blamed or credited for wage polarization between skill groups.",
        ],
      },
      {
        heading: "States and markets",
        paragraphs: [
          "Cost of living varies sharply by state, so identical nominal wages imply different real standards. Labor-market topic pages pair with unemployment and inflation entries to frame these comparisons.",
          "Those comparisons will deepen when state_labor_metrics lands; until then, wages stay coupled to globalization and trade exposure through import competition and migrant labor supply.",
        ],
      },
    ],
    relatedTopicSlugs: ["labor-wages-and-unemployment", "globalization-through-trade-data"],
  },
  {
    slug: "labor-unions",
    category: "concept",
    title: "Labor unions",
    summary:
      "Organizations of workers that bargain collectively over pay, benefits, and working conditions—shaping wage distributions and sometimes productivity.",
    sections: [
      {
        paragraphs: [
          "Unions negotiate with employers or industry groups, deploy strikes or slowdowns as leverage, and engage politically on labor standards. Economists disagree on whether they mainly raise wages at the cost of employment or correct power imbalances in the workplace.",
          "The “Economist’s Hour” narrative often places unions on the tension between market pricing of labor and institutional rules.",
        ],
      },
      {
        heading: "Dashboard connection",
        paragraphs: [
          "When labor metrics are wired into this app, union density and related labor-market indicators should sit near unemployment, wages, productivity, employment, and participation—so you can compare institutional labor settings across states, not only national averages.",
        ],
      },
    ],
    relatedTopicSlugs: ["labor-wages-and-unemployment", "economists-in-public-policy"],
  },
  {
    slug: "labor-force-participation",
    category: "concept",
    title: "Labor force participation",
    summary:
      "The share of the working-age population that is employed or actively looking for work.",
    sections: [
      {
        paragraphs: [
          "Participation can fall when workers retire, study full time, or stop searching because prospects look bleak—a distinction the unemployment rate alone misses.",
          "Demographics and social norms (especially for women’s employment) have moved participation dramatically across decades.",
        ],
      },
      {
        heading: "Why it pairs with unemployment",
        paragraphs: [
          "A stable jobless rate can mask people leaving the labor force. State-level labor data, when available, helps separate cyclical weakness from structural or demographic shifts.",
        ],
      },
    ],
    relatedTopicSlugs: ["labor-wages-and-unemployment", "financial-crises-explained"],
  },
  {
    slug: "stagflation",
    category: "concept",
    title: "Stagflation",
    summary:
      "A painful mix of stagnant growth or high unemployment with high inflation—challenging simple Keynesian and Phillips-curve intuitions.",
    sections: [
      {
        paragraphs: [
          "Stagflation roiled the 1970s after oil shocks and loose expectations collided. Policymakers learned that demand stimulus could worsen inflation without curing unemployment.",
          "The experience empowered monetarist critiques and tighter central-bank mandates focused on price stability.",
        ],
      },
      {
        heading: "Energy and supply shocks",
        paragraphs: [
          "Supply disruptions can raise prices while depressing output—the recipe for stagflation. That logic links this entry to energy episodes and to modern debates about global bottlenecks.",
        ],
      },
    ],
    relatedTopicSlugs: ["energy-shocks-and-stagflation", "inflation-and-price-stability"],
  },
  {
    slug: "capital-flows",
    category: "concept",
    title: "Capital flows",
    summary:
      "Cross-border movement of money for investment, lending, or portfolio allocation—tied to exchange rates and financial stability.",
    sections: [
      {
        paragraphs: [
          "Capital flows finance trade deficits, build factories abroad, and transmit shocks when investors suddenly retreat. They connect Wall Street to Main Street through interest rates and credit availability.",
        ],
      },
      {
        heading: "Openness",
        paragraphs: [
          "States tightly linked to global finance or multinationals feel swings in capital allocation differently from more domestically oriented regions—another layer beyond merchandise trade.",
          "The content plan groups capital flows with state_trade_metrics alongside globalization, exchange rates, trade surplus, trade deficit, and growth.",
        ],
      },
    ],
    relatedTopicSlugs: [
      "trade-and-state-economies",
      "financial-crises-explained",
      "globalization-through-trade-data",
      "from-bretton-woods-to-modern-currency-systems",
    ],
  },
  {
    slug: "exchange-rates",
    category: "concept",
    title: "Exchange rates",
    summary:
      "The price of one currency in terms of another—determining how affordable imports and exports are on world markets.",
    sections: [
      {
        paragraphs: [
          "A stronger domestic currency tends to cheapen foreign goods and toughen competition for exporters; a weaker currency does the opposite. Rates can float with markets or be managed by authorities.",
        ],
      },
      {
        heading: "Trade data context",
        paragraphs: [
          "State trade totals are recorded in dollars and reflect global conditions—including exchange-rate swings—even when producers never leave home.",
          "That is why exchange rates appear in the same state_trade_metrics concept cluster as globalization, balances, capital flows, and growth in the project content plan.",
        ],
      },
    ],
    relatedTopicSlugs: [
      "trade-and-state-economies",
      "globalization-through-trade-data",
      "from-bretton-woods-to-modern-currency-systems",
    ],
  },
  {
    slug: "trade-surplus",
    category: "concept",
    title: "Trade surplus",
    summary:
      "When a country’s exports of goods and services exceed imports over a period—also called a favorable balance of trade in older language.",
    sections: [
      {
        paragraphs: [
          "Surpluses mean a nation is on net sending goods abroad and receiving financial claims in return. They are neither inherently good nor bad: they can reflect competitiveness, weak domestic demand, or demographic savings patterns.",
        ],
      },
      {
        heading: "States",
        paragraphs: [
          "Sub-national units do not run independent balances of payments, but state export and import data show which regions lean outward versus inward—a useful complement to national surplus debates.",
          "The content plan lists trade surplus among the concepts anchored to state_trade_metrics together with globalization, deficit, rates, flows, and growth.",
        ],
      },
    ],
    relatedTopicSlugs: ["trade-and-state-economies", "globalization-through-trade-data"],
  },
  {
    slug: "trade-deficit",
    category: "concept",
    title: "Trade deficit",
    summary:
      "When imports exceed exports—financed by borrowing from abroad or selling assets to foreign investors.",
    sections: [
      {
        paragraphs: [
          "Deficits dominated U.S. political rhetoric for decades despite economists’ reminders that they mirror capital inflows and reflect investment opportunities as much as “losing” at trade.",
        ],
      },
      {
        heading: "Reading the map",
        paragraphs: [
          "High-import states are not morally weaker than high-export states; composition—energy, manufacturing, ports—matters. Topic pages on trade help interpret what aggregates imply.",
          "Like surplus, the trade deficit concept is part of the content plan’s state_trade_metrics bundle (with globalization, exchange rates, capital flows, and economic growth).",
        ],
      },
    ],
    relatedTopicSlugs: ["trade-and-state-economies", "globalization-through-trade-data"],
  },
  {
    slug: "fiscal-policy",
    category: "concept",
    title: "Fiscal policy",
    summary:
      "Government choices on taxes, spending, and borrowing meant to influence employment, distribution, and long-run capacity.",
    sections: [
      {
        paragraphs: [
          "Budgets are the traditional Keynesian lever: stimulus in downturns, restraint when overheating—though politics often runs countercyclical timing. Fiscal policy interacts with monetary policy when large deficits affect interest rates.",
        ],
      },
      {
        heading: "Economists in government",
        paragraphs: [
          "Forecasting, scoring legislation, and advising on debt limits brought economists inside legislatures and treasuries—themes treated more fully in topic pages on policy advice.",
        ],
      },
    ],
    relatedTopicSlugs: [
      "economists-in-public-policy",
      "the-rise-of-market-thinking",
      "financial-crises-explained",
    ],
  },
  {
    slug: "deregulation",
    category: "concept",
    title: "Deregulation",
    summary:
      "Rolling back rules on prices, entry, or standards—often to encourage competition but sometimes with contested social costs.",
    sections: [
      {
        paragraphs: [
          "From airlines to finance, deregulation waves aimed to replace administrative discretion with market pricing. Supporters cite efficiency; critics highlight safety, stability, and fairness risks.",
        ],
      },
      {
        heading: "Evidence and backlash",
        paragraphs: [
          "Cost-benefit analysis and retrospective studies became tools to judge whether deregulation delivered promised gains—while crises invited reregulation debates.",
        ],
      },
    ],
    relatedTopicSlugs: ["deregulation-and-its-consequences", "the-rise-of-market-thinking"],
  },
  {
    slug: "industrial-policy",
    category: "concept",
    title: "Industrial policy",
    summary:
      "Government efforts to favor specific sectors or technologies—subsidies, tariffs, public R&D, or national-security production goals.",
    sections: [
      {
        paragraphs: [
          "Once unfashionable among free-trade purists, industrial policy returned in discussions of semiconductors, green technology, and resilience after shocks.",
        ],
      },
      {
        heading: "Antitrust and openness",
        paragraphs: [
          "Industrial policy interacts with competition law and trade openness: the same state may subsidize domestic champions while policing foreign rivals.",
        ],
      },
    ],
    relatedTopicSlugs: [
      "trade-and-state-economies",
      "antitrust-and-corporate-power",
      "globalization-through-trade-data",
      "politics-of-antitrust",
    ],
  },
  {
    slug: "market-concentration",
    category: "concept",
    title: "Market concentration",
    summary:
      "How much production or revenue is controlled by a few firms—typically measured with concentration ratios or the Herfindahl-Hirschman Index in antitrust work.",
    sections: [
      {
        paragraphs: [
          "High concentration can reflect scale efficiencies or barriers to entry. It alarms policymakers when it coincides with higher prices, lower quality, or weak innovation.",
          "The content plan’s state_industries roadmap pairs corporate concentration and industrial policy with globalization and deregulation; this entry tracks measurable seller concentration.",
        ],
      },
      {
        heading: "Geography",
        paragraphs: [
          "National concentration statistics can miss local monopolies in hospitals or broadband—where state and metro data become especially relevant.",
        ],
      },
    ],
    relatedTopicSlugs: [
      "antitrust-and-corporate-power",
      "globalization-through-trade-data",
      "politics-of-antitrust",
    ],
  },
  {
    slug: "corporate-concentration",
    category: "concept",
    title: "Corporate concentration",
    summary:
      "The dominance of economic activity by a small number of very large firms—often discussed alongside, but not identical to, statistical market concentration.",
    sections: [
      {
        paragraphs: [
          "Corporate concentration highlights power in product, labor, and political arenas: a few employers may set wages regionally; a few platforms may control digital gateways; a few manufacturers may anchor supply chains.",
          "The P2 list in the economists-hour content plan treats corporate concentration as its own watchword, tied especially to future state_industry views of sectors and chains.",
        ],
      },
      {
        heading: "Relation to market concentration",
        paragraphs: [
          "Market concentration indices summarize sales shares; corporate concentration narratives also stress governance, lobbying, and investment behavior. Both feed antitrust and industrial-policy debates.",
        ],
      },
    ],
    relatedTopicSlugs: [
      "antitrust-and-corporate-power",
      "politics-of-antitrust",
      "trade-and-state-economies",
    ],
  },
  {
    slug: "monopoly",
    category: "concept",
    title: "Monopoly",
    summary:
      "A market structure with a single dominant seller (or close to it), facing limited direct competition.",
    sections: [
      {
        paragraphs: [
          "Pure monopolies are rare; more often analysts argue over “substantial market power.” Classic monopoly theory predicts higher prices and lower output than under competition.",
        ],
      },
      {
        heading: "Law and economics",
        paragraphs: [
          "Antitrust statutes target monopolization and mergers that would create monopoly power; economic experts argue over market definition in every major case.",
        ],
      },
    ],
    relatedTopicSlugs: [
      "antitrust-and-corporate-power",
      "deregulation-and-its-consequences",
      "politics-of-antitrust",
    ],
  },
  {
    slug: "competition",
    category: "concept",
    title: "Competition",
    summary:
      "Rivalry among sellers (and sometimes buyers) that limits prices and encourages quality and innovation.",
    sections: [
      {
        paragraphs: [
          "Competitive markets are a normative ideal in much economics, though perfect competition is a model, not a photograph of reality. Policy aims to protect the competitive process even when outcomes are unequal.",
        ],
      },
      {
        heading: "Links to deregulation",
        paragraphs: [
          "Some deregulation aimed to increase competition by removing entry controls; other reforms consolidated industries. Evaluating which happened requires data, not slogans.",
        ],
      },
    ],
    relatedTopicSlugs: [
      "antitrust-and-corporate-power",
      "deregulation-and-its-consequences",
      "politics-of-antitrust",
    ],
  },
  {
    slug: "monetarism",
    category: "theory",
    title: "Monetarism",
    summary:
      "A school emphasizing stable money growth and skepticism that fiscal fine-tuning can manage the business cycle without igniting inflation.",
    sections: [
      {
        paragraphs: [
          "Monetarists, prominently Milton Friedman, argued that erratic monetary policy deepened instability and that long-run inflation is “always and everywhere a monetary phenomenon.”",
        ],
      },
      {
        heading: "Central banking",
        paragraphs: [
          "Practical central banking absorbed some monetarist lessons (credibility, rules) while retaining discretion in crises.",
        ],
      },
    ],
    relatedTopicSlugs: ["what-the-federal-reserve-actually-does", "the-rise-of-market-thinking", "inflation-and-price-stability"],
  },
  {
    slug: "supply-side-economics",
    category: "theory",
    title: "Supply-side economics",
    summary:
      "Policy perspective stressing tax cuts, incentives, and supply constraints (labor, capital, regulation) rather than demand management alone.",
    sections: [
      {
        paragraphs: [
          "Supply-siders claimed lower marginal tax rates could raise growth enough to limit revenue losses—an optimism economists still debate. Deregulation often travels in the same political coalition.",
        ],
      },
      {
        heading: "Relation to trickle-down rhetoric",
        paragraphs: [
          "Journalistic shorthand sometimes collapses supply-side and “trickle-down” claims; technical work focuses on elasticities and incidence.",
        ],
      },
    ],
    relatedTopicSlugs: ["deregulation-and-its-consequences", "the-rise-of-market-thinking"],
  },
  {
    slug: "rational-expectations",
    category: "theory",
    title: "Rational expectations",
    summary:
      "The idea that forward-looking agents use available information when forming beliefs, limiting systematic policy surprises.",
    sections: [
      {
        paragraphs: [
          "Rational expectations revolutionized macroeconomics: if everyone anticipates stimulus, prices may adjust before real output does, blunting Keynesian effects.",
        ],
      },
      {
        heading: "Credibility",
        paragraphs: [
          "Central banks care about expectations today precisely because of this logic—another bridge between theory and institutions like the Federal Reserve.",
        ],
      },
    ],
    relatedTopicSlugs: ["economists-in-public-policy", "inflation-and-price-stability"],
  },
  {
    slug: "market-efficiency",
    category: "theory",
    title: "Market efficiency",
    summary:
      "The hypothesis that prices in competitive markets rapidly reflect available information—strongest in financial markets, contested everywhere else.",
    sections: [
      {
        paragraphs: [
          "Efficient-market reasoning supported light-touch financial regulation until bubbles and panics intervened. Applied to real markets, it underpins faith that deregulation yields better outcomes.",
        ],
      },
      {
        heading: "Limits",
        paragraphs: [
          "Behavioral economics and crisis experience highlighted imperfect information, contagion, and institutions—topics that nuance naive efficiency claims.",
        ],
      },
    ],
    relatedTopicSlugs: [
      "financial-crises-explained",
      "the-rise-of-market-thinking",
      "banking-regulation-and-financial-risk",
    ],
  },
  {
    slug: "trickle-down-economics",
    category: "theory",
    title: "Trickle-down economics",
    summary:
      "Popular label for claims that benefits to high earners or investors eventually reach workers—often criticized as oversimplified or unsupported.",
    sections: [
      {
        paragraphs: [
          "Serious supply-side analysis focuses on marginal incentives to work, invest, and take risk; “trickle-down” is more political shorthand than a textbook model, but it names the suspicion that gains concentrated at the top need not reach middle and lower earners quickly—or at all.",
        ],
      },
      {
        heading: "Evidence",
        paragraphs: [
          "Empirical work on tax cuts and growth is mixed and sensitive to time horizon, openness to capital flows, and what happens to transfers. Most economists treat distribution as inseparable from aggregate claims: higher GDP with flat or falling median pay is a different policy success than broad wage growth.",
        ],
      },
    ],
    relatedTopicSlugs: [
      "the-rise-of-market-thinking",
      "labor-wages-and-unemployment",
      "deregulation-and-its-consequences",
    ],
  },
  {
    slug: "financial-crisis",
    category: "concept",
    title: "Financial crisis",
    summary:
      "A disruption where credit contracts, institutions fail or merge under stress, and asset prices fall sharply—often transmitting to jobs, state revenues, and trade.",
    sections: [
      {
        paragraphs: [
          "Crises typically combine leverage, runnable short-term funding, and loss of confidence in collateral values. Policy responses layer central-bank liquidity, fiscal backstops, resolution of failing firms, and post-crisis regulation—each choice redistributes losses across taxpayers, creditors, and borrowers.",
          "The same label covers localized bank runs and systemic meltdowns; scale and cross-border linkages determine whether stress stays in finance or becomes a deep recession.",
        ],
      },
      {
        heading: "Lessons for macro policy",
        paragraphs: [
          "The Great Recession renewed respect for discretionary fiscal stabilization and for central banks as lenders of last resort, while undermining complacency that markets always clear without public intervention—themes developed in the Financial Crises Explained and banking regulation topics on this site.",
        ],
      },
    ],
    relatedTopicSlugs: [
      "financial-crises-explained",
      "economists-in-public-policy",
      "banking-regulation-and-financial-risk",
    ],
  },
  {
    slug: "deficit-spending",
    category: "concept",
    title: "Deficit spending",
    summary:
      "When a government spends more than it collects in revenue over a period, borrowing to cover the shortfall.",
    sections: [
      {
        paragraphs: [
          "Deficits can reflect deliberate stimulus, wars, recessions that shrink tax bases, or structural mismatches between promised benefits and revenues. They are neither automatically wise nor wicked—context and financing conditions matter.",
        ],
      },
      {
        heading: "Fiscal policy toolkit",
        paragraphs: [
          "The content plan lists deficit spending among P2 fiscal ideas alongside fiscal policy itself; Keynesian and political narratives in “The Economist’s Hour” often hinge on when borrowing is responsible versus reckless.",
        ],
      },
    ],
    relatedTopicSlugs: [
      "economists-in-public-policy",
      "financial-crises-explained",
      "government-regulation-and-cost-benefit-analysis",
    ],
  },
  {
    slug: "gold-standard",
    category: "concept",
    title: "Gold standard",
    summary:
      "A monetary arrangement tying currency value to gold, historically anchoring exchange rates and limiting discretionary money creation.",
    sections: [
      {
        paragraphs: [
          "Under classic forms, central banks redeemed notes for bullion at a fixed price. That constraint could discipline inflation but also forced painful austerity or devaluation when gold drained abroad or when wars and panics demanded liquidity.",
        ],
      },
      {
        heading: "Bretton Woods legacy",
        paragraphs: [
          "The postwar Bretton Woods system was a gold-exchange variant before full fiat currencies; understanding gold helps explain why exchange-rate regimes still provoke controversy.",
        ],
      },
    ],
    relatedTopicSlugs: ["from-bretton-woods-to-modern-currency-systems", "inflation-and-price-stability"],
  },
  {
    slug: "banking-regulation",
    category: "law_policy",
    title: "Banking regulation",
    summary:
      "Rules on capital, liquidity, consumer protection, and permissible activities intended to keep credit systems stable and trustworthy.",
    sections: [
      {
        paragraphs: [
          "After crises, capital requirements tighten and oversight fragments less; in calm decades, innovation and lobbying push for lighter touch. Shadow banking blurred lines between banks and markets.",
        ],
      },
      {
        heading: "Planned data link",
        paragraphs: [
          "The content plan’s future bank_and_finance_entities dataset groups banking regulation with credit derivatives, financial crisis, and the Federal Reserve—this glossary entry is the conceptual on-ramp.",
        ],
      },
    ],
    relatedTopicSlugs: [
      "banking-regulation-and-financial-risk",
      "financial-crises-explained",
      "what-the-federal-reserve-actually-does",
    ],
  },
  {
    slug: "deflation",
    category: "concept",
    title: "Deflation",
    summary:
      "A sustained fall in the general price level—raising real debt burdens and sometimes depressing spending if people expect further declines.",
    sections: [
      {
        paragraphs: [
          "Mild deflation can accompany rapid productivity growth if nominal wages adjust; harmful deflation—where prices and incomes fall together with sticky debts—featured in the Great Depression and troubled Japan for years. Price indexes can mask sectoral divergence: goods prices fall while housing or services stay stickier.",
          "Central banks usually target low positive inflation to keep real interest rates maneuverable and avoid downward wage rigidities magnifying unemployment.",
        ],
      },
      {
        heading: "Opposite problem from inflation",
        paragraphs: [
          "Zero lower bounds on interest rates complicate fighting deflation—making fiscal policy and unconventional monetary tools more salient.",
        ],
      },
    ],
    relatedTopicSlugs: ["inflation-and-price-stability", "financial-crises-explained"],
  },
  {
    slug: "employment",
    category: "concept",
    title: "Employment",
    summary:
      "The number of people with paid jobs (or self-employment)—the numerator behind job growth and a counterpart to unemployment and participation.",
    sections: [
      {
        paragraphs: [
          "Headline employment counts track payrolls or household surveys depending on the source. Changes in employment reflect hiring, layoffs, and whether people move in or out of the labor force.",
          "Comparing employment to population highlights demographic booms or “jobless recoveries” where output rises but hiring lags.",
        ],
      },
      {
        heading: "Regional data",
        paragraphs: [
          "The project content plan ties employment, unemployment, wages, productivity, unions, and labor force participation to a planned state_labor_metrics layer—employment is the positive side of the same labor-market coin.",
        ],
      },
    ],
    relatedTopicSlugs: [
      "labor-wages-and-unemployment",
      "financial-crises-explained",
    ],
  },
  {
    slug: "price-controls",
    category: "law_policy",
    title: "Price controls",
    summary:
      "Legal ceilings or floors on prices—rent caps, gasoline ceilings, wartime rationing—intended to shield consumers but often creating shortages or black markets.",
    sections: [
      {
        paragraphs: [
          "When a ceiling holds prices below market-clearing levels, quantity demanded can exceed supply, inviting queues, favoritism, or informal payments. Controls also complicate inflation measurement because observed prices no longer freely equilibrate.",
        ],
      },
      {
        heading: "Policy history",
        paragraphs: [
          "Debates in the second half of the twentieth century pitted market pricing against administrative limits on increases. The topic surfaces whenever energy or housing spikes dominate politics.",
        ],
      },
    ],
    relatedTopicSlugs: [
      "inflation-and-price-stability",
      "energy-shocks-and-stagflation",
      "economists-in-public-policy",
    ],
  },
  {
    slug: "credit-derivatives",
    category: "concept",
    title: "Credit derivatives",
    summary:
      "Financial contracts whose payouts depend on borrowers’ default or credit quality—tools for hedging risk that also concentrated and obscured exposure before 2008.",
    sections: [
      {
        paragraphs: [
          "Credit-default swaps and related structures let investors transfer default risk without selling the underlying loan. In calm times they add liquidity; in panics, collateral calls and opaque webs of exposure can amplify stress.",
        ],
      },
      {
        heading: "Regulatory lens",
        paragraphs: [
          "Post-crisis reforms expanded reporting, clearing, and capital treatment for derivatives—overlapping the glossary’s banking-regulation and financial-crisis material in the content plan’s future bank_and_finance_entities map.",
        ],
      },
    ],
    relatedTopicSlugs: [
      "financial-crises-explained",
      "banking-regulation-and-financial-risk",
      "what-the-federal-reserve-actually-does",
    ],
  },
  {
    slug: "asset-bubble",
    category: "concept",
    title: "Asset bubble",
    summary:
      "A sustained run-up in prices—often for housing, equities, or crypto—fueled by credit, optimism, or herding rather than fundamentals alone.",
    sections: [
      {
        paragraphs: [
          "Bubbles are easier to diagnose after they burst: appraisers debate in real time whether high valuations reflect productivity gains or self-reinforcing leverage. When credit tightens, overextended balance sheets can convert paper wealth into deep recessions.",
        ],
      },
      {
        heading: "Macro linkage",
        paragraphs: [
          "Monetary ease and expectations intertwine with bubbles; regional data sometimes show which metros inflated fastest. Narratives in works such as “The Economist’s Hour” connect market-efficiency faith with light-touch finance that preceded crises.",
        ],
      },
    ],
    relatedTopicSlugs: [
      "financial-crises-explained",
      "inflation-and-price-stability",
      "what-the-federal-reserve-actually-does",
      "deregulation-and-its-consequences",
    ],
  },
  {
    slug: "competitive-markets",
    category: "concept",
    title: "Competitive markets",
    summary:
      "Market settings with enough sellers and buyers that no participant sets the price alone—an institutional outcome policy often tries to protect or restore.",
    sections: [
      {
        paragraphs: [
          "The phrase signals entry, information, and contestability rather than the abstract model of “perfect competition.” Deregulation sometimes aimed to unlock competition; concentration metrics show when outcomes fell short.",
        ],
      },
      {
        heading: "Beyond textbook charts",
        paragraphs: [
          "This entry complements the competition entry (the economic process) by naming the market configuration antitrust and industrial policy arguments presuppose. State-level trade and (later) industry data help show where rivalry is thick or thin.",
        ],
      },
    ],
    relatedTopicSlugs: [
      "antitrust-and-corporate-power",
      "deregulation-and-its-consequences",
      "politics-of-antitrust",
    ],
  },
  {
    slug: "consumer-safety",
    category: "law_policy",
    title: "Consumer safety",
    summary:
      "Regulation, liability law, and standards meant to reduce injury from products, food, drugs, and services—classic non-price rationales for government rules.",
    sections: [
      {
        paragraphs: [
          "Safety policy blends ex ante standards (crash tests, contamination limits) with ex post liability (tort suits, strict liability for manufacturing defects). Economists weigh mandates against higher prices, delayed innovation, moral hazard if users take fewer precautions, and informational limits—consumers rarely observe latent risks.",
          "Cost-benefit analysis frequently monetizes statistical lives saved, reduced injuries, and industry compliance costs—often becoming the battleground in judicial review of major rules.",
        ],
      },
      {
        heading: "Agency politics",
        paragraphs: [
          "High-profile recalls and tort cases shaped public expectations that markets alone cannot police every hazard—grounds for institution pages (FTC, CPSC) sketched in the broader content plan.",
        ],
      },
    ],
    relatedTopicSlugs: [
      "government-regulation-and-cost-benefit-analysis",
      "deregulation-and-its-consequences",
      "economists-in-public-policy",
    ],
  },
  {
    slug: "environmental-regulation",
    category: "law_policy",
    title: "Environmental regulation",
    summary:
      "Rules limiting pollution, mandating disclosure, or protecting ecosystems—often justified by externalities markets do not price on their own.",
    sections: [
      {
        paragraphs: [
          "Cap-and-trade, performance standards, and technology mandates each embed different incentive structures. Debates pit growth against stewardship; empirical work tracks health co-benefits and employment in clean-energy supply chains.",
        ],
      },
      {
        heading: "Cost-benefit interface",
        paragraphs: [
          "Major environmental rules are scored and litigated using the same analytic toolkit as safety regulation—linking this term tightly to cost-benefit topic pages.",
        ],
      },
    ],
    relatedTopicSlugs: [
      "government-regulation-and-cost-benefit-analysis",
      "globalization-through-trade-data",
      "trade-and-state-economies",
    ],
  },
  {
    slug: "market-revolution",
    category: "event",
    title: "Market revolution",
    summary:
      "A shorthand historians use for the expansion of capitalist markets—transport, credit, and commodification—often tied to nineteenth-century U.S. integration.",
    sections: [
      {
        paragraphs: [
          "Parallel to the twentieth-century “economist’s hour,” an earlier market revolution remade how households produced, borrowed, and consumed. Long-distance trade and financial instruments connected hinterlands to coastal centers.",
        ],
      },
      {
        heading: "Conceptual bridge",
        paragraphs: [
          "Understanding deep roots of market thinking contextualizes later enthusiasm for deregulation and efficiency. It is listed among P2 glossary anchors in the economists-hour content plan as background rather than a dataset hook.",
        ],
      },
    ],
    relatedTopicSlugs: [
      "the-rise-of-market-thinking",
      "globalization-through-trade-data",
    ],
  },
  {
    slug: "tariffs",
    category: "law_policy",
    title: "Tariffs",
    summary:
      "Taxes on imported (sometimes exported) goods—raising domestic prices, shielding producers, and shaping trade balances.",
    sections: [
      {
        paragraphs: [
          "Tariffs generate revenue but more often serve protection: buyers pay more, exporters abroad may shrink sales. Retaliation can cascade through supply chains, visible in state port and manufacturing exposure.",
        ],
      },
      {
        heading: "Industrial policy overlap",
        paragraphs: [
          "Tariffs are one lever inside broader industrial-policy toolkits; their incidence falls unevenly on consumers and downstream industries.",
        ],
      },
    ],
    relatedTopicSlugs: [
      "trade-and-state-economies",
      "globalization-through-trade-data",
      "economists-in-public-policy",
      "antitrust-and-corporate-power",
    ],
  },
  {
    slug: "subsidies",
    category: "concept",
    title: "Subsidies",
    summary:
      "Government payments, tax breaks, or cheap credit that lower producers’ costs or boost purchasers’ demand—common in agriculture, energy, and technology.",
    sections: [
      {
        paragraphs: [
          "Subsidies redirect resources toward favored activities; WTO rules and domestic politics determine who qualifies. They can accelerate scale-up of new industries or lock in inefficient incumbents.",
        ],
      },
      {
        heading: "Pair with trade data",
        paragraphs: [
          "Export competitiveness partly reflects hidden subsidies; state-level trade metrics help visualize where subsidized sectors show up in cross-border flows.",
        ],
      },
    ],
    relatedTopicSlugs: [
      "trade-and-state-economies",
      "government-regulation-and-cost-benefit-analysis",
      "economists-in-public-policy",
    ],
  },
  {
    slug: "systemic-risk",
    category: "concept",
    title: "Systemic risk",
    summary:
      "The threat that distress in one institution or market propagates broadly—through correlated portfolios, funding markets, or payment systems.",
    sections: [
      {
        paragraphs: [
          "Micro-prudential supervision focuses on single firms; macro-prudential policy targets correlated exposures and cyclical leverage. Systemic risk explains why bailouts and lender-of-last-resort actions remain controversial.",
        ],
      },
      {
        heading: "After crises",
        paragraphs: [
          "Stress tests, resolution plans, and capital surcharges aim to internalize externalities that credit derivatives and shadow banking once masked—bridging this entry to banking-regulation and financial-crisis content.",
        ],
      },
    ],
    relatedTopicSlugs: [
      "banking-regulation-and-financial-risk",
      "financial-crises-explained",
      "what-the-federal-reserve-actually-does",
    ],
  },
  {
    slug: "airline-deregulation-act",
    category: "law_policy",
    title: "Airline Deregulation Act",
    summary:
      "The 1978 U.S. law that phased out the Civil Aeronautics Board’s control of routes and fares—an emblem of late-twentieth-century deregulation.",
    sections: [
      {
        paragraphs: [
          "Before reform, regulators often limited entry and set minimum fares, aiming at stability but sometimes protecting inefficient carriers. The act shifted toward market pricing and contestable routes, with effects on fares, hub concentration, and labor.",
          "Supporters cited consumer gains and innovation; critics noted consolidation, service cuts to smaller cities, and episodic distress in the industry.",
        ],
      },
      {
        heading: "Pattern for other sectors",
        paragraphs: [
          "The airline story became a template in debates over trucking, finance, and telecommunications: would deregulation deliver competition or slide into new forms of concentration?",
        ],
      },
    ],
    relatedTopicSlugs: ["deregulation-and-its-consequences", "antitrust-and-corporate-power"],
  },
  {
    slug: "alan-greenspan",
    category: "person",
    title: "Alan Greenspan",
    summary:
      "Long-serving chair of the Federal Reserve (1987–2006) whose tenure bridged the Great Moderation, the dot-com cycle, and the run-up to the financial crisis.",
    sections: [
      {
        paragraphs: [
          "A former business consultant and Ayn Rand associate turned central banker, Greenspan embodied cautious gradualism on interest rates and strong confidence in markets’ self-correcting power—confidence later scrutinized after 2008.",
          "His hearings and speeches often moved bond markets; retrospectively, critics tie light-touch supervision of mortgage innovation to systemic risk.",
        ],
      },
      {
        heading: "Why he appears in this narrative",
        paragraphs: [
          "Works such as “The Economist’s Hour” use figures like Greenspan to show how economists acquired public authority—and how hard it is to spot leverage and moral hazard in real time.",
        ],
      },
    ],
    relatedTopicSlugs: [
      "what-the-federal-reserve-actually-does",
      "financial-crises-explained",
      "inflation-and-price-stability",
    ],
  },
  {
    slug: "bretton-woods-system",
    category: "event",
    title: "Bretton Woods system",
    summary:
      "The 1944–1971 (roughly) international monetary order: adjustable currency pegs centered on the U.S. dollar, constrained cross-border capital, and IMF oversight meant to reconcile growth with balance-of-payments discipline.",
    sections: [
      {
        paragraphs: [
          "At Bretton Woods, delegates designed a gold-exchange standard: foreign central banks held dollar reserves convertible into gold at $35 per ounce, while the IMF supplied conditional credit when countries faced external deficits. Capital controls were normal, not exceptional—freeing governments to pursue domestic employment goals without instant currency flight.",
          "As Europe and Japan recovered, U.S. payments deficits supplied global liquidity (dollars abroad) but eventually eroded confidence that gold cover could hold. Speculation against the dollar, rising fiscal pressures, and Vietnam-era macro strains culminated in Nixon closing the gold window in August 1971.",
        ],
      },
      {
        heading: "From fixed rates to fiat and floats",
        paragraphs: [
          "The Smithsonian Agreement and subsequent churn failed to restore durable parities; by the mid-1970s major currencies floated against one another. That shift elevated the Fed’s role in global dollar liquidity, redefined exchange-rate risk for traders, and set the stage for today’s arguments about safe assets, reserve currency privilege, and capital-account openness.",
        ],
      },
      {
        heading: "Vocabulary hook",
        paragraphs: [
          "Entries on the IMF, World Bank, gold standard, exchange rates, and capital flows all presuppose this break from pegged Bretton Woods to a world of fiat anchors and mobile finance—context for reading dollar-denominated state trade statistics.",
        ],
      },
    ],
    relatedTopicSlugs: [
      "from-bretton-woods-to-modern-currency-systems",
      "globalization-through-trade-data",
      "trade-and-state-economies",
    ],
  },
  {
    slug: "clean-air-act",
    category: "law_policy",
    title: "Clean Air Act",
    summary:
      "Major U.S. federal law (1970 and amendments) empowering the EPA to set air-quality standards and regulate pollution sources—central to environmental economics and cost-benefit debates.",
    sections: [
      {
        paragraphs: [
          "The act blends technology standards, permitting, and market mechanisms such as emissions trading in some programs. Implementing rules triggered huge litigation and benefit-cost studies on lives saved versus compliance costs.",
          "Its history shows how economists moved from the margins into quantifying regulatory impacts that courts and Congress would fight over.",
        ],
      },
      {
        heading: "Related ideas",
        paragraphs: [
          "Air-quality rulemaking sits in the same ecosystem as broader environmental standards, product safety debates, and quantitative benefit–cost practice—threads pulled together on the regulation topics linked below.",
        ],
      },
    ],
    relatedTopicSlugs: [
      "government-regulation-and-cost-benefit-analysis",
      "deregulation-and-its-consequences",
    ],
  },
  {
    slug: "cold-war-economic-effects",
    category: "event",
    title: "Cold War economic effects",
    summary:
      "How geopolitical rivalry with the Soviet bloc reshaped U.S. trade, defense spending, innovation policy, and domestic politics from the late 1940s through 1991.",
    sections: [
      {
        paragraphs: [
          "Massive military budgets, procurement for aerospace and electronics, and alliance systems (NATO, Bretton Woods institutions) structured demand and technology spillovers. Strategic embargoes and export controls carved trading blocs.",
          "The conflict also framed ideological arguments: market capitalism versus command planning fed enthusiasm for market reforms at home even when the economy was already mixed.",
        ],
      },
      {
        heading: "Reading later debates",
        paragraphs: [
          "Industrial policy and globalization entries make more sense when you remember that “national security” often justified subsidies, tariffs, and R&D long before recent chip policies.",
        ],
      },
    ],
    relatedTopicSlugs: [
      "trade-and-state-economies",
      "globalization-through-trade-data",
      "the-rise-of-market-thinking",
    ],
  },
  {
    slug: "federal-reserve",
    category: "institution",
    title: "Federal Reserve",
    summary:
      "The U.S. central bank: the Federal Open Market Committee sets monetary policy; supervisors regulate many banks; staff provide payments, liquidity backstops, and financial-stability tools in stress.",
    sections: [
      {
        paragraphs: [
          "The Federal Reserve System blends a Washington Board of Governors with twelve regional Reserve Banks that serve banks and the public in their districts. Congress assigns goals—today a dual mandate of maximum employment and stable prices—while operational independence is meant to keep policy from short-run political pressure.",
          "The FOMC steers short-term interest rates and, since 2008, balance-sheet policy (large-scale asset purchases or runoff) plus forward guidance about likely future policy. Those choices radiate through mortgages, business credit, the dollar, and asset prices.",
        ],
      },
      {
        heading: "Supervision, liquidity, and plumbing",
        paragraphs: [
          "The Fed supervises bank holding companies and state-chartered members, runs stress tests after crises, and operates discount-window lending. It also operates critical payment systems (Fedwire, FedNow) and can create emergency facilities when funding markets freeze—powers that make institutional legitimacy as contested as macro forecasts.",
        ],
      },
      {
        heading: "For dashboard readers",
        paragraphs: [
          "One national stance interacts with uneven state industry mix, housing wealth, and bank health. Trade- and labor-oriented views on this site help show where tight or easy money lands hardest.",
        ],
      },
    ],
    relatedTopicSlugs: [
      "what-the-federal-reserve-actually-does",
      "inflation-and-price-stability",
      "financial-crises-explained",
      "banking-regulation-and-financial-risk",
    ],
  },
  {
    slug: "federal-trade-commission",
    category: "institution",
    title: "Federal Trade Commission (FTC)",
    summary:
      "Independent U.S. agency with a twin mission: stop unfair methods of competition (often with the Justice Department’s Antitrust Division) and curb deceptive or unfair commercial practices affecting consumers.",
    sections: [
      {
        paragraphs: [
          "Created in 1914, the FTC can challenge mergers and conduct administratively or in court, pursue “unfair methods of competition” under the FTC Act, and promulgate trade regulation rules (privacy, advertising substantiation, and more). The Bureau of Economics supplies industrial-organization analysis—market definition, merger simulation, and theories of harm.",
          "Enforcement philosophy swings with leadership and precedent: decades oscillate between interventionist merger control, Chicago-influenced caution, and renewed interest in labor markets, privacy, and dominant platforms.",
        ],
      },
      {
        heading: "DOJ and the practitioner divide",
        paragraphs: [
          "Criminal cartel work sits mainly with the Antitrust Division; the FTC often leads on consumer-protection rulemaking and some civil competition matters. Private plaintiffs and state attorneys general add another layer—so outcomes depend on overlapping statutes, not the FTC alone.",
        ],
      },
      {
        heading: "Antitrust thread",
        paragraphs: [
          "Read alongside antitrust, market concentration, and the Antitrust Division’s shared merger docket; politics-of-antitrust covers how elected politics feeds back on agency choice.",
        ],
      },
    ],
    relatedTopicSlugs: [
      "antitrust-and-corporate-power",
      "politics-of-antitrust",
      "deregulation-and-its-consequences",
    ],
  },
  {
    slug: "financial-regulation",
    category: "law_policy",
    title: "Financial regulation",
    summary:
      "The combined statutes and agency rules governing banks, broker-dealers, derivatives, disclosures, and resolution—aiming at investor protection and systemic stability.",
    sections: [
      {
        paragraphs: [
          "Financial regulation spans overlapping federal and state regimes: bank capital rules, securities registration, margin requirements, and consumer-protection bureaus. International coordination tries to plug gaps exposed in crises.",
          "Debates replay market-discipline views against public guarantees that can encourage risk-taking without tough guardrails.",
        ],
      },
      {
        heading: "Companion entries",
        paragraphs: [
          "See banking regulation, systemic risk, and financial crisis for the conceptual core; banking-regulation topic page deepens the story.",
        ],
      },
    ],
    relatedTopicSlugs: [
      "banking-regulation-and-financial-risk",
      "financial-crises-explained",
      "economists-in-public-policy",
    ],
  },
  {
    slug: "friedrich-hayek",
    category: "person",
    title: "Friedrich Hayek",
    summary:
      "Austrian-British economist and philosopher (1899–1992) honored for trade-cycle theory, the “knowledge problem” critique of central planning, and a constitutional vision of limited, rule-bound state power.",
    sections: [
      {
        paragraphs: [
          "Hayek argued market prices aggregate dispersed information that no planning board can possess; *The Road to Serfdom* (1944) warned that wartime planning habits could erode liberty. His work on competition as a discovery procedure influenced later Chicago-school ideas about discovery, error, and spontaneity—even where specifics diverged.",
          "He shared a Nobel (1974) for earlier business-cycle analysis tied to capital heterogeneity and interest-rate signals, distinct from simple Keynesian demand management.",
        ],
      },
      {
        heading: "Policy counterpoint",
        paragraphs: [
          "Against midcentury confidence in fine-tuning, Hayek insisted discretionary stabilization could mistake noise for knowledge and invite politicized money. That stance places him alongside monetarist skepticism of discretion, though Hayek’s constitutionalism and legal theory (e.g. *Law, Legislation and Liberty*) reach beyond Friedman’s macro focus.",
        ],
      },
      {
        heading: "Reading order on this site",
        paragraphs: [
          "Contrast with John Maynard Keynes and Keynesian economics pages; connect to monetarism, deregulation, and the-rise-of-market-thinking topic for the arc from expert planning to market primacy.",
        ],
      },
    ],
    relatedTopicSlugs: [
      "the-rise-of-market-thinking",
      "economists-in-public-policy",
      "from-bretton-woods-to-modern-currency-systems",
    ],
  },
  {
    slug: "great-depression",
    category: "event",
    title: "Great Depression",
    summary:
      "The 1930s world depression: synchronized output collapse, catastrophic joblessness, banking panics, and deflation—reordering ideas about money, finance, and the state’s role in aggregate demand.",
    sections: [
      {
        paragraphs: [
          "In the United States the Depression followed the 1929 equity crash and unfolded through waves of bank failures, credit contraction, farm distress, and international monetary dysfunction. Debates continue over gold-standard adherence, Federal Reserve passivity, tariff shocks (Smoot-Hawley), and debt deflation, but not over human cost: living standards cratered for years, not months.",
          "Democracies experimented: deposit insurance, Glass-Steagall separation norms, Social Security, Securities Acts, and a more assertive if uneven fiscal role. Those institutions framed postwar finance until late-century deregulation.",
        ],
      },
      {
        heading: "Global and monetary propagation",
        paragraphs: [
          "Because many countries defended gold parities, policy-induced tightening abroad echoed through trade and capital flows—turning a U.S. shock into a worldwide slump. The experience discredited liquidationist orthodoxy for many and elevated Keynes’s case that decentralized price flexibility might not restore full employment quickly.",
        ],
      },
      {
        heading: "Long shadow on macroeconomics",
        paragraphs: [
          "Later fights over bailouts, quantitative easing, and inflation targets invoke Depression precedents—why this entry pairs with deflation, monetary policy, fiscal policy, and financial-crisis topics.",
        ],
      },
    ],
    relatedTopicSlugs: [
      "financial-crises-explained",
      "inflation-and-price-stability",
      "economists-in-public-policy",
      "from-bretton-woods-to-modern-currency-systems",
    ],
  },
  {
    slug: "great-moderation",
    category: "event",
    title: "Great Moderation",
    summary:
      "Name for the mid-1980s–2007 stretch of lower inflation and output volatility in the United States—later reassessed after the financial crisis.",
    sections: [
      {
        paragraphs: [
          "Economists credited better monetary policy, inventory management, financial innovation, and good luck. Confidence grew that major downturns were tamed—perhaps encouraging leverage and risk underestimation.",
          "The Great Recession challenged narratives of permanent stability and reopened questions about regulation and household debt.",
        ],
      },
      {
        heading: "Link to expectations",
        paragraphs: [
          "Rational-expectations and monetarist themes intertwine with stories about anchored inflation—until shocks proved models incomplete.",
        ],
      },
    ],
    relatedTopicSlugs: [
      "inflation-and-price-stability",
      "financial-crises-explained",
      "what-the-federal-reserve-actually-does",
    ],
  },
  {
    slug: "great-recession",
    category: "event",
    title: "Great Recession",
    summary:
      "The 2007–2009 Great Financial Crisis and deep recession: U.S. housing finance, runnable shadow banking, and global dollar funding strains produced the worst postwar contraction until COVID-19—and a decade of contested policy legacies.",
    sections: [
      {
        paragraphs: [
          "Subprime-mortgage losses ramified through securitization, repo markets, and sponsor-backed vehicles until Bear Stearns, Lehman, AIG, and money-market funds signaled systemic panic. Credit froze; trade finance and emerging markets transmitted stress globally.",
          "Real GDP and employment cratered; long-term unemployment and foreclosures scarred households. Fiscal stimulus (American Recovery and Reinvestment Act), TARP capital injections, Fed emergency facilities, and near-zero rates competed with political backlash over bailouts and moral hazard.",
        ],
      },
      {
        heading: "Reforms and slow recovery",
        paragraphs: [
          "Dodd-Frank expanded bank supervision, created orderly-resolution planning, reshaped derivatives markets, and established the Consumer Financial Protection Bureau—unfinished business still argued in Congress and courts. Labor markets healed slowly; some regions never regained pre-crisis prime-age employment rates on old trajectories.",
        ],
      },
      {
        heading: "State-level lens",
        paragraphs: [
          "Sun Belt housing busts and manufacturing belts tied to autos showed geography mattered as much as national aggregates—motivation for sub-national labor and trade visualization when those datasets mature here.",
        ],
      },
    ],
    relatedTopicSlugs: [
      "financial-crises-explained",
      "banking-regulation-and-financial-risk",
      "labor-wages-and-unemployment",
    ],
  },
  {
    slug: "humphrey-hawkins-full-employment-act",
    category: "law_policy",
    title: "Humphrey-Hawkins Full Employment Act",
    summary:
      "1978 U.S. law (amending earlier mandates) that formalized reporting on full employment and, after amendments, helped define the Federal Reserve’s dual mandate alongside price stability.",
    sections: [
      {
        paragraphs: [
          "Born from civil-rights and labor demands for jobs guarantees, the statute expressed Congressional priorities the Fed must heed in conducting policy. Practical inflation-fighting in the 1980s sometimes looked at odds with early rhetoric, sharpening debates about central-bank independence.",
          "The law symbolizes tension between democratic job goals and technocratic inflation control—central to “economist’s hour” narratives.",
        ],
      },
      {
        heading: "Dual mandate in practice",
        paragraphs: [
          "The Act inscribed ambitious employment goals in statute while leaving day-to-day rate decisions to the FOMC—so critics and defenders still argue over how much Congress may steer a credibly independent Fed when jobs and inflation trade off.",
        ],
      },
    ],
    relatedTopicSlugs: [
      "what-the-federal-reserve-actually-does",
      "labor-wages-and-unemployment",
      "economists-in-public-policy",
    ],
  },
  {
    slug: "international-monetary-fund",
    category: "institution",
    title: "International Monetary Fund (IMF)",
    summary:
      "Cooperative of member countries, headquartered in Washington, that lends foreign exchange during balance-of-payments crises, runs macro surveillance, and supports technical assistance—born at Bretton Woods, remade by floating rates and capital mobility.",
    sections: [
      {
        paragraphs: [
          "Quota subscriptions determine voting power and access to automatic financing; larger economies hold larger shares. Stand-By Arrangements and similar programs pair disbursements with policy conditionality—often fiscal consolidation, exchange-rate flexibility, financial-sector repair, and structural measures—summarized in program letters subject to board approval.",
          "Critics argue templates imposed austerity or financial liberalization too quickly; defenders respond that unsecured lending to sovereigns demands credible adjustment, and that programs evolved toward more attention to social safeguards and debt sustainability.",
        ],
      },
      {
        heading: "Surveillance and SDRs",
        paragraphs: [
          "Article IV consultations produce country reports scrutinizing macro risks even absent a loan—shaping bond-market narratives about fiscal and external vulnerability. The Fund also administers Special Drawing Rights, a reserve asset small in daily commerce but symbolically central in debates over reserve-currency architecture.",
        ],
      },
      {
        heading: "Bretton Woods lineage",
        paragraphs: [
          "Created with the World Bank in 1944; after Nixon closed the gold window, the IMF pivoted from defending parities to managing debt crises in a world of fiat money and footloose capital—context for globalization, financial-crisis, and Bretton Woods topic pages.",
        ],
      },
    ],
    relatedTopicSlugs: [
      "from-bretton-woods-to-modern-currency-systems",
      "financial-crises-explained",
      "trade-and-state-economies",
    ],
  },
  {
    slug: "janet-yellen",
    category: "person",
    title: "Janet Yellen",
    summary:
      "Macroeconomist and policymaker who chaired the Federal Reserve (2014–2018) and later served as U.S. Treasury secretary—associated with gradual normalization and labor-market attentiveness.",
    sections: [
      {
        paragraphs: [
          "Yellen’s academic work on wages, search unemployment, and efficiency wages informed a Fed chairmanship focused on “maximum employment” as more than a slogan. Markets read her communications carefully for guidance on rate paths.",
          "Her career illustrates tighter links between academic macro and top policy jobs in the postwar era chronicled in popular histories of economics in government.",
        ],
      },
      {
        heading: "Fed partnership",
        paragraphs: [
          "Pair this biographical entry with the Federal Reserve institution entry for tools, mandates, and crisis mechanics.",
        ],
      },
    ],
    relatedTopicSlugs: [
      "what-the-federal-reserve-actually-does",
      "labor-wages-and-unemployment",
      "inflation-and-price-stability",
    ],
  },
  {
    slug: "john-maynard-keynes",
    category: "person",
    title: "John Maynard Keynes",
    summary:
      "British economist (1883–1946) whose *General Theory* revolutionized macroeconomics around aggregate demand, uncertainty, and a role for public policy in deep slumps.",
    sections: [
      {
        paragraphs: [
          "Keynes argued prices and wages might not adjust quickly enough to restore full employment; animal spirits drive investment; and coordinated stimulus could break vicious cycles. His ideas underpinned Bretton Woods institutions and decades of stabilization policy.",
          "Later monetarist and rational-expectations critiques tempered Keynesian activism but never erased its imprint on crisis response.",
        ],
      },
      {
        heading: "Namesake school",
        paragraphs: [
          "See the Keynesian economics entry for the modern policy tradition; this page anchors the biographical hook.",
        ],
      },
    ],
    relatedTopicSlugs: [
      "the-rise-of-market-thinking",
      "financial-crises-explained",
      "economists-in-public-policy",
      "from-bretton-woods-to-modern-currency-systems",
    ],
  },
  {
    slug: "joseph-stiglitz",
    category: "person",
    title: "Joseph Stiglitz",
    summary:
      "Columbia Nobel laureate whose work on asymmetric information, screening, and equilibrium unemployment underpins modern market-failure economics—and whose public voice challenges laissez-faire finance and austerity conditionality.",
    sections: [
      {
        paragraphs: [
          "With Akerlof and Spence he shared the 2001 prize for analyses where hidden information distorts markets—credit rationing, adverse selection, and signaling reshape macro- and micro-policy design beyond perfect-competition baselines.",
          "As World Bank chief economist and author of *Globalization and Its Discontents*, he attacked sequencing of capital-market liberalization and IMF programs during the Asian and Latin American crises—often debated against defenders of market discipline.",
        ],
      },
      {
        heading: "Antitrust and power",
        paragraphs: [
          "His later syntheses tie rent seeking, corporate power, and inequality to sluggish growth—overlapping glossary material on competition, market concentration, and industrial policy without reducing antitrust to consumer prices alone.",
        ],
      },
      {
        heading: "Connect to site themes",
        paragraphs: [
          "Pairs with market efficiency, financial crisis, globalization, and economists-in-public-policy topics on this site.",
        ],
      },
    ],
    relatedTopicSlugs: [
      "globalization-through-trade-data",
      "financial-crises-explained",
      "economists-in-public-policy",
      "antitrust-and-corporate-power",
    ],
  },
  {
    slug: "lawrence-summers",
    category: "person",
    title: "Lawrence Summers",
    summary:
      "Harvard economist and former Treasury secretary, NEC director, and World Bank chief economist—prominent in 1990s–2000s debates on finance, deficits, and globalization.",
    sections: [
      {
        paragraphs: [
          "Summers combines technical macro with heavyweight Washington experience; supporters cite crisis management and openness to evidence, while critics attack deregulation-era enthusiasms and cultural elitism in economic advising.",
          "He personifies tight coupling between academic prestige and levers of fiscal and regulatory policy.",
        ],
      },
      {
        heading: "Where he fits this project’s story",
        paragraphs: [
          "Summers’s trajectory—Treasury, World Bank chief economist, crisis advising—shows how fiscal choices, international institutions, and financial plumbing travel together. Critiques of deregulation-era enthusiasm and defenses of aggressive stabilization both cite his record, making him a useful name when reading capital-flow and banking-regulation material without treating any biography as verdict.",
        ],
      },
    ],
    relatedTopicSlugs: [
      "economists-in-public-policy",
      "financial-crises-explained",
      "globalization-through-trade-data",
    ],
  },
  {
    slug: "opec-oil-shocks",
    category: "event",
    title: "OPEC oil shocks",
    summary:
      "1970s episodes when oil exporters curtailed supply or raised prices sharply—propagating stagflation and recalibrating monetary policy worldwide.",
    sections: [
      {
        paragraphs: [
          "Higher energy costs raised business costs and consumer prices while dragging real income—producing simultaneous inflation and unemployment spikes that strained Keynesian fine-tuning.",
          "Geopolitics (Middle East conflict, embargoes) tied energy security to macro stability and later climate-transition debates.",
        ],
      },
      {
        heading: "Policy legacy",
        paragraphs: [
          "The shocks forced central banks to treat supply interruptions as distinct from excess demand, contributed to the Great Inflation’s politics, and set precedents for energy security as a macro issue—a thread picked up in energy-shocks-and-stagflation and inflation topics here.",
        ],
      },
    ],
    relatedTopicSlugs: ["energy-shocks-and-stagflation", "inflation-and-price-stability"],
  },
  {
    slug: "organization-for-economic-cooperation-and-development",
    category: "institution",
    title: "OECD",
    summary:
      "Paris-based forum of mostly high-income countries producing statistics, economic surveys, and soft-law policy coordination.",
    sections: [
      {
        paragraphs: [
          "The OECD is known for standardized data (including trade and regulatory indicators), peer review of policies, and models used in fiscal forecasting. It is not a development lender like the World Bank but shapes discourse on tax, education, and competition.",
          "Researchers often use its cross-country datasets when comparing openness, redistribution, and productivity.",
        ],
      },
      {
        heading: "Why it appears beside trade data",
        paragraphs: [
          "OECD indicators often benchmark openness, tax design, and regulation across peer countries—context for interpreting state-level trade outcomes against “how open economies usually behave,” without treating any index as destiny.",
        ],
      },
    ],
    relatedTopicSlugs: ["globalization-through-trade-data", "trade-and-state-economies"],
  },
  {
    slug: "paul-samuelson",
    category: "person",
    title: "Paul Samuelson",
    summary:
      "MIT economist (1915–2009) who mathematized micro and macro, authored a defining textbook, and linked welfare economics to public finance.",
    sections: [
      {
        paragraphs: [
          "Samuelson’s *Economics* educated generations; his research spans revealed preference, public-goods theory, and the overlapping-generations framework. He helped professionalize the discipline while synthesizing Keynesian stabilization logic with neoclassical price theory—a posture often called the neoclassical synthesis.",
          "In public argument he mixed tolerance for counter-cyclical policy with insistence on clear models: welfare claims should show assumptions; politics remained downstream from theorems.",
        ],
      },
      {
        heading: "Pedagogical legacy",
        paragraphs: [
          "Ideas scattered through this glossary—welfare trade-offs, simple multipliers, gains-from-trade figures—became common sense largely through his textbook voice.",
        ],
      },
      {
        heading: "Contrast on this site",
        paragraphs: [
          "Read him against Milton Friedman or Friedrich Hayek to see how a centrist technocratic style coexisted with sharper market-first challengers in the twentieth century.",
        ],
      },
    ],
    relatedTopicSlugs: ["economists-in-public-policy", "the-rise-of-market-thinking"],
  },
  {
    slug: "paul-volcker",
    category: "person",
    title: "Paul Volcker",
    summary:
      "Federal Reserve chair (1979–1987) who prioritized breaking Great Inflation expectations with tight money—accepting recession as the price of credibility.",
    sections: [
      {
        paragraphs: [
          "Volcker’s contractionary policy steeply raised real interest rates, crushed inflation psychology, and deeply hurt housing and manufacturing in the short run. Monetarist-flavored operating procedures and steadfast messaging became symbolic of central-bank independence.",
          "Supporters call the episode necessary disinfection; critics highlight distributional pain and developing-country debt crises.",
        ],
      },
      {
        heading: "Aftermath",
        paragraphs: [
          "Disinflation succeeded in anchoring expectations for decades but imposed steep costs on housing, industry, and foreign dollar debtors—reasons histories of stagflation and Fed independence still cite Volcker alongside energy-shock and inflation narratives.",
        ],
      },
    ],
    relatedTopicSlugs: [
      "inflation-and-price-stability",
      "energy-shocks-and-stagflation",
      "what-the-federal-reserve-actually-does",
    ],
  },
  {
    slug: "environmental-protection-agency",
    category: "institution",
    title: "Environmental Protection Agency (EPA)",
    summary:
      "U.S. regulator implementing laws such as the Clean Air Act and Clean Water Act—core site for quantitative benefit-cost analysis of pollution controls.",
    sections: [
      {
        paragraphs: [
          "The EPA sets emissions standards, runs permit programs, and partners with states on enforcement. Major rules draw thousands of public comments and court challenges; economists quantify mortality reductions and compliance costs.",
          "Deregulation debates often target EPA rules as burdens on industry; public-health advocates stress externalities markets ignore.",
        ],
      },
      {
        heading: "Related reading",
        paragraphs: [
          "Environmental regulation and clean-air-act glossary entries; government-regulation topic.",
        ],
      },
    ],
    relatedTopicSlugs: [
      "government-regulation-and-cost-benefit-analysis",
      "deregulation-and-its-consequences",
    ],
  },
  {
    slug: "occupational-safety-and-health-administration",
    category: "institution",
    title: "Occupational Safety and Health Administration (OSHA)",
    summary:
      "U.S. Labor Department agency setting and enforcing workplace safety and health standards—exemplifying rule-based risk reduction.",
    sections: [
      {
        paragraphs: [
          "OSHA issues permissible exposure limits, machine guarding rules, and record-keeping mandates; small businesses and unions debate stringency versus flexibility. Inspections and penalties aim to deter violations but cannot cover every site.",
          "Economists study OSHA’s effects on injury rates, wages compensating for risk, and innovation in protective technology.",
        ],
      },
      {
        heading: "Regulatory state",
        paragraphs: [
          "Useful counterpart to consumer-safety and cost-benefit narratives in the rise of quantitative regulation.",
        ],
      },
    ],
    relatedTopicSlugs: [
      "government-regulation-and-cost-benefit-analysis",
      "labor-wages-and-unemployment",
    ],
  },
  {
    slug: "robert-bork",
    category: "person",
    title: "Robert Bork",
    summary:
      "Judge and legal scholar (1927–2012) whose writings—and failed Supreme Court nomination—helped embed consumer-welfare framing in U.S. antitrust interpretation.",
    sections: [
      {
        paragraphs: [
          "*The Antitrust Paradox* argued that many vertical restraints and mergers enhance efficiency; courts increasingly asked whether consumers paid higher prices rather than whether small business survived. Critics tie that shift to rising concentration in some sectors.",
          "Bork embodies how law and economics moved from University of Chicago seminars into judicial doctrine.",
        ],
      },
      {
        heading: "Pairings",
        paragraphs: [
          "Read with antitrust, politics-of-antitrust, and market-concentration entries.",
        ],
      },
    ],
    relatedTopicSlugs: ["politics-of-antitrust", "antitrust-and-corporate-power"],
  },
  {
    slug: "robert-solow",
    category: "person",
    title: "Robert Solow",
    summary:
      "MIT Nobel laureate (1924–2023) whose growth models decomposed output rises into capital, labor, and a residual “technical progress”—shaping how economists talk about productivity.",
    sections: [
      {
        paragraphs: [
          "Solow’s neoclassical growth framework made long-run living standards hinge less on accumulating machines per se than on how efficiently inputs combine—and on an exogenous “residual” later reinterpreted as technology, organization, and measurement error. Empirical growth accounting informed optimism about computing eras and anxiety about post-1970s slowdowns.",
          "He remained skeptical of faddish claims that small policy tweaks permanently lift trend growth; institutions, innovation, and luck mattered more in his telling than perpetual fine-tuning.",
        ],
      },
      {
        heading: "Data tie",
        paragraphs: [
          "Connects directly to productivity and economic-growth entries and to the planned state_labor_metrics layer on this site.",
        ],
      },
      {
        heading: "Intellectual neighborhood",
        paragraphs: [
          "Contrast supply-side emphasis on marginal tax rates with Solow’s focus on aggregate fundamentals—both surface in the-rise-of-market-thinking narrative over decades.",
        ],
      },
    ],
    relatedTopicSlugs: [
      "labor-wages-and-unemployment",
      "trade-and-state-economies",
      "the-rise-of-market-thinking",
    ],
  },
  {
    slug: "securities-and-exchange-commission",
    category: "institution",
    title: "Securities and Exchange Commission (SEC)",
    summary:
      "U.S. regulator of public securities markets—disclosure, enforcement against fraud, and oversight of exchanges and key market participants.",
    sections: [
      {
        paragraphs: [
          "Born of New Deal securities laws, the SEC aims to protect investors and maintain fair, orderly markets. Rulemaking spans accounting standards implementation, mutual-fund governance, and, episodically, derivatives and money-market fund reform after crises.",
          "Economists debate whether disclosure-centric regimes suffice versus structural limits on leverage and complexity.",
        ],
      },
      {
        heading: "Financial-regulation cluster",
        paragraphs: [
          "Works alongside banking regulation and financial-crisis vocabulary—not a bank prudential supervisor but central to capital-market integrity.",
        ],
      },
    ],
    relatedTopicSlugs: [
      "financial-crises-explained",
      "banking-regulation-and-financial-risk",
      "economists-in-public-policy",
    ],
  },
  {
    slug: "sherman-antitrust-act",
    category: "law_policy",
    title: "Sherman Antitrust Act",
    summary:
      "1890 U.S. statute declaring restraint of trade and monopolization unlawful—statutory foundation for modern American antitrust.",
    sections: [
      {
        paragraphs: [
          "Section 1 targets agreements that unreasonably restrain trade; Section 2 targets monopolization and attempts. Courts initially struggled with labor and price-fixing lines; later doctrine oscillated between per se illegality and rule-of-reason balancing.",
          "The terse text leaves immense room for economic expert testimony about market definition and competitive effects.",
        ],
      },
      {
        heading: "Institutional enforcement",
        paragraphs: [
          "The FTC and Justice Department share civil enforcement; state attorneys general and private plaintiffs also sue. Glossary entries on antitrust and politics-of-antitrust unpack modern controversies.",
        ],
      },
    ],
    relatedTopicSlugs: ["antitrust-and-corporate-power", "politics-of-antitrust"],
  },
  {
    slug: "world-bank",
    category: "institution",
    title: "World Bank",
    summary:
      "World Bank Group anchor institutions—chiefly IBRD creditworthy sovereign lending and IDA concessional finance for the poorest countries—plus investment-guarantee and dispute-settlement arms supporting development projects and policy programs.",
    sections: [
      {
        paragraphs: [
          "The International Bank for Reconstruction and Development (IBRD) borrows in capital markets to fund middle-income and creditworthy borrowers on near-market terms; the International Development Association (IDA) offers grants and very soft loans where market access is weak. Project finance (power, transport, health, education) shares the agenda with policy-based lending that once carried heavy structural-adjustment controversy.",
          "Economists inside and outside the institution argue over growth diagnostics, governance metrics, and climate co-benefits; civil-society critics track displacement, debt burdens, and environmental safeguards.",
        ],
      },
      {
        heading: "Data and knowledge production",
        paragraphs: [
          "World Development Indicators and subsidiary research products supply cross-country poverty, trade, and infrastructure statistics that sit beside OECD and IMF datasets—useful when connecting globalization entries to empirical baselines.",
        ],
      },
      {
        heading: "Conceptual links",
        paragraphs: [
          "Read with IMF, Bretton Woods system, capital flows, and from-bretton-woods topics for how postwar institutions stretched into today’s mixed-income, climate-stressed global economy.",
        ],
      },
    ],
    relatedTopicSlugs: [
      "from-bretton-woods-to-modern-currency-systems",
      "globalization-through-trade-data",
      "financial-crises-explained",
    ],
  },
  {
    slug: "arthur-burns",
    category: "person",
    title: "Arthur Burns",
    summary:
      "Economist and Federal Reserve chair (1970–1978) whose tenure overlapped the collapse of Bretton Woods and rising Great Inflation—often cited in debates over political pressure, mistaken accommodation, and credibility.",
    sections: [
      {
        paragraphs: [
          "Burns arrived with scholarly stature on business cycles but confronted energy shocks, wage-price guidelines, and Nixon-era political context. Critics argue Fed policy tolerated too much inflation before the Volcker shift; defenders note structural rigidities and fiscal deficits outside the central bank’s control.",
          "His chairmanship frequently appears in narratives about why isolating monetary policy from electoral calendars matters—a theme in Fed-independence and Humphrey–Hawkins discussions.",
        ],
      },
      {
        heading: "Why his term stays in textbooks",
        paragraphs: [
          "Burns illustrates how energy politics, incomes policies, and lost credibility can complicate a technically trained chair—a contrast case when you read Volcker-era disinflation and today’s dual-mandate debates on the Fed topics linked below.",
        ],
      },
    ],
    relatedTopicSlugs: [
      "what-the-federal-reserve-actually-does",
      "energy-shocks-and-stagflation",
      "inflation-and-price-stability",
    ],
  },
  {
    slug: "arthur-laffer",
    category: "person",
    title: "Arthur Laffer",
    summary:
      "Economist popularly tied to the “Laffer curve” depiction of tax-rate revenue trade-offs—an emblem of supply-side arguments that lower marginal rates could unleash growth and receipts.",
    sections: [
      {
        paragraphs: [
          "Laffer’s napkin sketch became shorthand for claiming tax cuts might pay for themselves at sufficiently high initial rates—a possibility economists treat as contingent on elasticities, base broadening, and time horizon, not a universal law.",
          "As an adviser in the Reagan era he personifies the marriage of formal economics and political messaging about incentives, deficits, and growth.",
        ],
      },
      {
        heading: "How to read the curve",
        paragraphs: [
          "The Laffer curve is a comparative-statics illustration, not proof that a given cut pays for itself. It belongs in the same discussion as supply-side economics, marginal tax design, and the post-1980 U.S. fiscal record treated in market-thinking and policy topics here.",
        ],
      },
    ],
    relatedTopicSlugs: [
      "the-rise-of-market-thinking",
      "economists-in-public-policy",
      "deregulation-and-its-consequences",
    ],
  },
  {
    slug: "carmen-reinhart",
    category: "person",
    title: "Carmen Reinhart",
    summary:
      "Harvard macroeconomist known for empirical work on sovereign debt, serial default, and crisis analogies across emerging and advanced economies—often cited with Kenneth Rogoff.",
    sections: [
      {
        paragraphs: [
          "Reinhart’s historical datasets emphasize patterns easy to forget in calm years: sudden stops, capital flight, hidden liabilities, and the politics of restructuring. *This Time Is Different* (with Rogoff) catalogs hubris before crashes—fuel for skepticism toward linear extrapolation in market-efficiency stories.",
          "Later controversy over growth–debt threshold statistics underscored how even careful empirical work becomes politicized when it bears on austerity.",
        ],
      },
      {
        heading: "Empirical habit",
        paragraphs: [
          "Her long-horizon datasets invite comparing today’s debt and capital-flow patterns with historical defaults and sudden stops—grounding abstract “crisis” vocabulary in repeated institutional experience.",
        ],
      },
    ],
    relatedTopicSlugs: ["financial-crises-explained", "globalization-through-trade-data"],
  },
  {
    slug: "commodity-futures-trading-commission",
    category: "institution",
    title: "Commodity Futures Trading Commission (CFTC)",
    summary:
      "U.S. agency regulating futures, options on commodities, and swaps tied to physical markets—overlapping with SEC and banking regulators after derivatives reform.",
    sections: [
      {
        paragraphs: [
          "The CFTC registers custodians of customer funds, sets position limits in some products, oversees designated contract markets, and writes rules for swap execution facilities. Energy and agricultural contracts link macro shocks to localized production—relevant when trade and labor data intersect with commodity swings.",
          "Post-2008 Title VII of Dodd-Frank expanded its turf relative to the SEC, though jurisdictional seams and overseas venues still complicate enforcement.",
        ],
      },
      {
        heading: "Where it sits in U.S. regulation",
        paragraphs: [
          "Derivatives that reference oil, rates, or crops often touch CFTC rules even when the same shock surfaces in banking or securities law—one reason post-crisis reform split oversight across agencies.",
        ],
      },
    ],
    relatedTopicSlugs: [
      "banking-regulation-and-financial-risk",
      "financial-crises-explained",
      "energy-shocks-and-stagflation",
    ],
  },
  {
    slug: "dani-rodrik",
    category: "person",
    title: "Dani Rodrik",
    summary:
      "Harvard political economist famous for the globalization trilemma—democratic sovereignty, national policy autonomy, and financial integration cannot all be maximized simultaneously—and for nuanced views on industrial policy.",
    sections: [
      {
        paragraphs: [
          "Rodrik argues workable globalization requires institutional guardrails and space for local experimentation, not one-size-fits liberalization. His work legitimates selective industrial policy without romanticizing autarky.",
          "He bridges trade theory and development practice—useful when state-level trade data collide with national security or manufacturing nostalgia.",
        ],
      },
      {
        heading: "Trilemma in plain language",
        paragraphs: [
          "Rodrik’s trilemma warns you cannot simultaneously run deep capital integration, national policy autonomy, and domestic democratic control at full tilt—trade, exchange-rate, and industrial-policy fights on this site all presuppose some corner of that constraint.",
        ],
      },
    ],
    relatedTopicSlugs: [
      "globalization-through-trade-data",
      "trade-and-state-economies",
      "antitrust-and-corporate-power",
    ],
  },
  {
    slug: "david-ricardo",
    category: "person",
    title: "David Ricardo",
    summary:
      "Classical political economist (1772–1823) whose theory of comparative advantage still anchors introductory arguments for mutual gains from trade—even when countries differ in absolute productivity.",
    sections: [
      {
        paragraphs: [
          "Ricardo showed how specialization along opportunity costs can raise joint output when relative efficiencies differ across goods, even if one nation is more productive in everything (in simplified two-good models). Modern trade theory adds increasing returns, firms, and global value chains, but his ghost appears in every trade debate.",
          "He also wrote on public finance, bullion, and income distribution—classical roots for later fights about rents and taxation.",
        ],
      },
      {
        heading: "Why comparative advantage still shows up",
        paragraphs: [
          "Even complex supply chains do not erase opportunity-cost logic: states specialize unevenly, so sub-national trade statistics often reflect deeper comparative forces—not just shipping labels.",
        ],
      },
    ],
    relatedTopicSlugs: [
      "globalization-through-trade-data",
      "trade-and-state-economies",
      "the-rise-of-market-thinking",
    ],
  },
  {
    slug: "george-stigler",
    category: "person",
    title: "George Stigler",
    summary:
      "Chicago economist (1911–1991) who helped pioneer the economics of information, industrial organization empirics, and the theory of regulatory capture.",
    sections: [
      {
        paragraphs: [
          "Stigler treated regulation as endogenous: industries may seek rules that entrench incumbents, not tame them. His work on information, search, and dispersion complements later information-economics Nobel laureates.",
          "He personifies a skeptical, empirically grounded Chicago view that reshaped antitrust and regulatory scholarship midcentury.",
        ],
      },
      {
        heading: "Regulation as political economy",
        paragraphs: [
          "Capture theory cautions that rulemakers may hear incumbents loudest—reason deregulation and antitrust narratives on this site keep returning to evidence about entry, prices, and wages, not slogans alone.",
        ],
      },
    ],
    relatedTopicSlugs: [
      "deregulation-and-its-consequences",
      "antitrust-and-corporate-power",
      "economists-in-public-policy",
    ],
  },
  {
    slug: "kenneth-rogoff",
    category: "person",
    title: "Kenneth Rogoff",
    summary:
      "Macroeconomist and chess grandmaster known for crisis empirics, international macro, and the “curse of cash” argument for less large-denomination currency—often cited with Carmen Reinhart.",
    sections: [
      {
        paragraphs: [
          "Rogoff’s crisis research with Reinhart catalogs recurring patterns in leverage, capital-flow reversals, and policy mistakes across centuries—an antidote to complacency in quiet credit cycles. His work on exchange-rate regimes and optimal currency areas complements Mundell’s legacy in a policy world of dollars and euros.",
          "Public debates over his growth–debt findings illustrate how technical tables become fiscal-policy weapons.",
        ],
      },
      {
        heading: "Beyond the debt headlines",
        paragraphs: [
          "Rogoff’s international-macro work nudges readers to treat exchange regimes, sudden stops, and safe-asset demand as one system—linking crisis vocabulary here to Bretton Woods and modern currency topics without equating correlations with destiny.",
        ],
      },
    ],
    relatedTopicSlugs: [
      "financial-crises-explained",
      "from-bretton-woods-to-modern-currency-systems",
    ],
  },
  {
    slug: "richard-posner",
    category: "person",
    title: "Richard Posner",
    summary:
      "Judge and polymath who helped import price-theoretic reasoning into American law—antitrust, accidents, privacy—while later revisiting market fundamentalism after the financial crisis.",
    sections: [
      {
        paragraphs: [
          "Posner’s opinions and treatises framed liability, remedies, and merger review partly as implicit benefit–cost balancing—linking bench practice to Chicago law-and-economics.",
          "His post-crisis writing conceded blind spots in financial self-regulation, illustrating how insider critics can move with events.",
        ],
      },
      {
        heading: "Antitrust angle",
        paragraphs: [
          "Useful alongside Robert Bork, George Stigler, and politics-of-antitrust for how economic style entered doctrine.",
        ],
      },
    ],
    relatedTopicSlugs: [
      "politics-of-antitrust",
      "government-regulation-and-cost-benefit-analysis",
    ],
  },
  {
    slug: "robert-mundell",
    category: "person",
    title: "Robert Mundell",
    summary:
      "Canadian Nobel laureate (1932–2020) associated with optimal currency areas, open-economy monetarist ideas, and intellectual roots of supply-side tax debates.",
    sections: [
      {
        paragraphs: [
          "Mundell modeled how countries with different shocks and labor mobility might (or might not) share a currency advantageously—frameworks later applied to the euro. His work on policy mix under fixed and floating rates shaped textbook macro.",
          "He also advised on low-tax, stable-money narratives embraced politically in the 1980s—linking technical tradeoffs to supply-side branding.",
        ],
      },
      {
        heading: "Open-economy toolkit",
        paragraphs: [
          "Mundell’s policy-mix insights and optimal-currency-area logic sit behind modern arguments about independent currencies versus pegs—context for exchange-rate and Bretton Woods material without requiring every reader to trace the algebra.",
        ],
      },
    ],
    relatedTopicSlugs: [
      "from-bretton-woods-to-modern-currency-systems",
      "trade-and-state-economies",
      "the-rise-of-market-thinking",
    ],
  },
  {
    slug: "robert-reich",
    category: "person",
    title: "Robert Reich",
    summary:
      "Public intellectual, Berkeley professor, and former U.S. Labor secretary—prominent critic of union decline, corporate power, and wage stagnation in the globalization era.",
    sections: [
      {
        paragraphs: [
          "Reich’s popular books and commentary emphasize bargaining power, education stratification, and political choices behind inequality—not technology alone. His Labor Department tenure in the 1990s bridged Clinton-era trade openness with workplace-policy concerns.",
          "He offers a labor-side counterpoint to pure consumer-welfare competition narratives without rejecting markets wholesale.",
        ],
      },
      {
        heading: "Labor and power",
        paragraphs: [
          "Reich’s emphasis on norms, unions, and corporate strategy supplies a distribution-first counterweight to stories that treat labor markets as frictionless—useful when reading wage, union, and antitrust entries side by side.",
        ],
      },
    ],
    relatedTopicSlugs: [
      "labor-wages-and-unemployment",
      "globalization-through-trade-data",
      "antitrust-and-corporate-power",
    ],
  },
];
