# Done Criteria

A task is only done when:

- the code compiles
- the relevant UI renders as expected
- TypeScript errors are resolved
- obvious linting issues are resolved
- loading, error, and empty states are handled if data is involved
- accessibility basics are handled
- the implementation matches current documentation and architecture guidance
- the related checklist item is updated, if applicable

---

## For UI Components

- keyboard accessible
- labeled appropriately
- responsive across common viewport sizes
- no obvious broken states for long text, empty values, or narrow screens

---

## For Data Features

- query logic is separated from presentational components
- loading, error, and empty states are visible
- types are defined
- data shape is validated before rendering
- frontend behavior matches the actual database schema in use

---

## For Map Features

- non-map access to the same data exists
- selected state is visually clear
- selected state is programmatically clear
- map interactions do not block access to table or chart views

---

## Notes

- "Done" does not mean perfect; it means production-ready for the current stage
- If documentation is outdated, either update it or explicitly note the mismatch before considering the task complete
- For data work, confirm behavior matches **active** dashboard datasets (currently **Exports** + **Labor** on the main toggle) and that docs such as `data-model.md` / `product-requirements.md` are not contradicted by the change
