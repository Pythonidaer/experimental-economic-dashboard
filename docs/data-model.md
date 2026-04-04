Data Model
Current Tables
state_trade_metrics
Purpose:

Core dataset for trade-based dashboard views (map, charts, tables)
Fields:

id (uuid, primary key)
state_code (text, indexed)
state_name (text)
year (int8, indexed)
import_value (numeric)
export_value (numeric)
total_trade_value (numeric)
created_at (timestamptz)
state_labor_metrics
Purpose:

Supports labor and workforce-related insights
Fields:

id (uuid, primary key)
state_code (text, indexed)
state_name (text)
year (int8, indexed)
unemployment_rate (numeric)
avg_wage (numeric)
labor_force_participation (numeric)
created_at (timestamptz)
Current Schema Strategy
Keep tables flat and query-friendly
Avoid premature normalization
Optimize for dashboard queries (map, table, charts)
Prefer duplicating simple fields (like state_name) over joins
Add new tables only when there is a clear frontend use case
Frontend Integration Status
state_trade_metrics: integrated (or primary working dataset)
state_labor_metrics: not yet integrated
Query Expectations
Tables should support:

filtering by state
filtering by year
sorting by metric values
aggregations for charts and comparisons
Avoid joins for now.

Indexing Guidance
Add indexes for:

state_code
year
Optional:

composite index (state_code, year)
Future Expansion Notes
Potential future datasets (exploratory):

trade by product by state
banks by state
population by state
jobs by sector
industry reference data
job posting ingestion (e.g. scraping platforms like Greenhouse)
These should NOT be implemented until:

a reliable data source is identified
update frequency is understood
a clear frontend use case exists
Notes
This document reflects the CURRENT database state
Future ideas are exploratory and should not drive schema changes prematurely
Prioritize clarity, performance, and real use cases over completeness