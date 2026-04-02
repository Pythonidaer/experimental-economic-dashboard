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
      "the-rise-of-market-thinking",
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
      "the-rise-of-market-thinking",
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
    category: "institution",
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
        heading: "state_labor_metrics",
        paragraphs: [
          "The content plan ties labor unions to the forthcoming state_labor_metrics dataset together with unemployment, wages, productivity, employment, and labor force participation.",
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
      "government-regulation-and-cost-benefit-analysis",
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
          "Serious supply-side analysis focuses on incentives and growth; “trickle-down” is more a political epithet than a formal model, but it structures arguments about tax cuts and inequality.",
        ],
      },
      {
        heading: "Evidence",
        paragraphs: [
          "Empirical studies disagree on whether top-rate cuts raise median wages; distribution matters as much as aggregates.",
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
    category: "event",
    title: "Financial crisis",
    summary:
      "A disruption where credit contracts, institutions fail, and asset prices collapse—often spilling into the real economy.",
    sections: [
      {
        paragraphs: [
          "Crises feature leverage, runnable funding, and panic. Responses mix central-bank liquidity, fiscal bailouts, and rewriting regulation.",
        ],
      },
      {
        heading: "Lessons for macro policy",
        paragraphs: [
          "The Great Recession renewed appreciation for Keynesian stabilization and for monetary policy as lender of last resort—while shaking faith in self-correcting markets.",
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
          "Under classic forms, central banks redeemed notes for bullion at a fixed price, disciplining inflation but also constraining crisis response when gold drained abroad.",
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
          "Mild deflation can accompany productivity booms; harmful deflation spirals featured in the Great Depression and haunted Japan. Central banks often target low positive inflation as insurance.",
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
      "globalization-through-trade-data",
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
      "the-rise-of-market-thinking",
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
          "Economists weigh safety mandates against prices, innovation speed, and residual risk. Cost-benefit analysis frequently quantifies lives saved versus compliance expenses.",
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
];
