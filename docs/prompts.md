# Cursor Prompt Templates

Do not try to build the final version all at once.
Implement only the current phase cleanly.
Prefer simple, readable code over clever abstractions.

---

## Prompt: Read docs first
Before making changes, read:
- docs/project-overview.md
- docs/product-requirements.md
- docs/architecture.md
- docs/implementation-plan.md
- docs/data-model.md
- docs/data-roadmap.md
- docs/done-criteria.md
- docs/decisions.md

Then explain:
1. what you think this project is
2. what you are about to build
3. which files you plan to create or edit
4. how the task fits the current phase

Do not code until you summarize that.

---

## Prompt: Implement a scoped task
Read the docs folder first.

Implement the following task:
[PASTE TASK]

Requirements:
- follow docs/architecture.md
- keep components small and focused
- use accessible shadcn/ui + Radix components where appropriate
- keep data logic separate from presentation
- satisfy docs/done-criteria.md
- do not expand scope beyond the task

At the end:
- list every file created or changed
- explain what remains incomplete
- list any assumptions made

---

## Prompt: Refactor safely
Read the docs folder first.

Refactor the current implementation for clarity and maintainability without changing behavior.

Focus on:
- reducing file size if components are too large
- improving naming
- separating data logic from UI logic
- preserving accessibility
- preserving current behavior

At the end:
- explain what changed
- explain what did not change
- list any risks or follow-up improvements

---

## Prompt: Add a new feature
Read the docs folder first.

Add the following feature:
[PASTE FEATURE]

Constraints:
- do not introduce unnecessary abstraction
- keep current scope in mind
- preserve accessibility
- preserve current behavior unless required
- explain tradeoffs before implementing if architecture is affected

At the end:
- list files changed
- explain the implementation
- identify any follow-up tasks

---

## Prompt: Audit current state
Read the docs folder first.

Audit the current codebase against:
- docs/project-overview.md
- docs/product-requirements.md
- docs/architecture.md
- docs/implementation-plan.md
- docs/done-criteria.md

Return:
1. what is complete
2. what is partially complete
3. what is missing
4. technical debt
5. the next best task to implement

Do not make changes yet.

---

## Prompt: Fix a bug
Read the docs folder first.

Investigate and fix this issue:
[PASTE ISSUE]

Requirements:
- identify likely root cause first
- explain whether the bug is UI, data, state, or integration related
- make the smallest clean fix possible
- preserve accessibility and existing behavior

At the end:
- summarize root cause
- list files changed
- mention any edge cases not fully covered

---

## Prompt: Sync documentation
Read the docs folder first.

Audit all documentation against the current implementation.

Tasks:
- identify outdated or incorrect statements
- update docs to reflect actual behavior and structure
- remove contradictions and stale information
- keep docs clean and focused

Do NOT change application code.

At the end:
- list all docs updated
- explain what was outdated
- confirm docs now match the current codebase
