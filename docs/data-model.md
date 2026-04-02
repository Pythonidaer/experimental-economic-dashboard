# Data Model

## Initial Recommendation
Start with one table only.

Example: state_trade_metrics

## state_trade_metrics
- id
- state_code
- state_name
- year
- import_value
- export_value
- total_trade_value
- created_at

## Future Tables
### states
- id
- state_code
- state_name
- region

### state_job_metrics
- id
- state_code
- year
- total_jobs
- unemployment_rate
- sector_name

### banks
- id
- bank_name
- state_code
- bank_type
- description
- headquarters_city
- headquarters_state

## Notes
- Do not over-normalize for MVP
- Prefer a practical schema that is easy to query
- Normalize later if the dataset grows significantly