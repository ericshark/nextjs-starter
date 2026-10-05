# Contributing Guidelines

Thank you for contributing to this project! Follow these standards to maintain high quality and consistency.

## Development Workflow

1. **Branch Naming**:
   Use structured branch names following `<type>/<name>`:
   - `feat/user-auth`
   - `fix/hydration-error`
   - `docs/update-readme`
   - `refactor/api-routes`

2. **Worktrees**:
   If using git worktrees, place them in `../<project>-worktrees/<name>`.

3. **Dependencies**:
   - Use `npm` for managing packages.
   - Do not add dependencies without checking necessity and bundle impact.

## Verification Checklist

Before opening a pull request or completing a task, run the full test and verification suite:

```bash
make check
```

This runs:
- `npm run lint` (ESLint)
- `npm run typecheck` (TypeScript static analysis)
- `npm run test` (Vitest unit and component tests)

## Commit Messages

Write clear, imperative commit messages:
- `feat: add user authentication flow`
- `fix: resolve hydration mismatch in navigation header`
- `docs: add deployment instructions`
