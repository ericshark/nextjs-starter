# Testing Strategy

This project uses **Vitest** with **React Testing Library** for fast, reliable unit and component testing.

## Principles

1. **Test observable behavior**: Assert on rendered text, accessibility roles, and user interactions rather than implementation details or component state.
2. **Deterministic & Fast**: Tests run against `jsdom` and should execute in seconds via `npm run test` or `make test`.
3. **No regressions**: When adding new functionality or modifying behavior, accompanying tests must be written or updated. Never disable failing tests.

## Running Tests

- Run full test suite once:
  ```bash
  npm run test
  ```
- Run tests in watch mode:
  ```bash
  npm run test:watch
  ```

## Writing Tests

Place tests under the `tests/` directory matching the component or utility under test:
- Component tests: `tests/<ComponentName>.test.tsx`
- Utility tests: `tests/<utility>.test.ts`
