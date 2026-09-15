---
name: full-check
description: Runbook for running full repository verification, interpreting failures, and achieving clean checks.
---

# Skill: Full Verification Runbook

Use this skill before completing an agent turn or pushing code to ensure the repository has zero errors.

## Verification Command
```bash
make check
```
*(Or `npm run check`)*

This runs:
1. `npm run lint`: ESLint 9 validation
2. `npm run typecheck`: TypeScript compilation check (`tsc --noEmit`)
3. `npm run test`: Vitest test suite

---

## Common Failures & Quick Fixes

### 1. ESLint Failures
- **Unused variables**: Remove the unused variable or prefix with an underscore (`_var`).
- **Synchronous setState in effects**: In React 19, never call `setState` synchronously at the start of an effect. Initialize state with `useState(initialValue)` instead.

### 2. TypeScript (`tsc --noEmit`) Failures
- **Brittle LayoutProps**: Do not use `LayoutProps<"/">` in `layout.tsx`. Use `Readonly<{ children: React.ReactNode }>`.
- **Missing imports**: Check `@/lib/utils` or `@/components/ui/` paths.

### 3. Vitest Failures
- **Async acts**: Wrap rendering of components that execute effects in `await act(async () => { render(...) })`.
