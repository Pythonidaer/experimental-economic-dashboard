# Done Criteria

A task is only done when:

- the code compiles
- the relevant UI renders
- TypeScript errors are resolved
- obvious linting issues are resolved
- loading/error/empty states are handled if data is involved
- accessibility basics are handled
- the code matches the documentation and architecture guidance
- the task checklist item is updated if applicable

## For UI Components
- keyboard accessible
- labeled appropriately
- responsive enough for common viewport sizes

## For Data Features
- query logic is separated from presentational components
- data loading and error states are visible
- types are defined

## For Map Features
- non-map fallback access to the same data exists
- selected state is visually and programmatically clear