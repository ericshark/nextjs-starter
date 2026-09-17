# Agent Guidelines

This file defines the shared instructions for coding agents working in this repository.

## Project

Next.js 16 application using:

- React 19
- TypeScript
- Tailwind CSS v4
- Vitest and Testing Library
- ESLint
- Prettier

Important locations:

- `src/app/` — App Router routes and layouts
- `src/components/` — application components
- `src/components/ui/` — reusable UI primitives
- `src/lib/` — shared utilities
- `tests/` — tests
- `docs/` — architecture and subsystem documentation
- `.agents/skills/` — reusable agent procedures

## Commands

Use the Makefile as the primary command interface.

- `make dev` — development server
- `make lint` — ESLint
- `make typecheck` — TypeScript
- `make test` — Vitest
- `make build` — production build
- `make check` — lint, typecheck, and tests

### Components

Reuse existing components and UI primitives before creating new ones.

Place generic reusable UI primitives in `src/components/ui/`.

Use `cn(...)` from `@/lib/utils` when conditional Tailwind class
composition is needed.

### Testing

Add or update tests when introducing or changing meaningful behavior.

Test observable behavior rather than implementation details.

Do not weaken, remove, or bypass tests merely to make verification pass.

## Documentation

Use `docs/` for persistent architectural and subsystem knowledge. Before modifying a subsystem, check for relevant documentation there. When a change materially alters architecture, data flow, public APIs, important invariants, setup, or behavior that future developers or agents need to understand, update the relevant existing documentation. Create a new document only for a substantial new subsystem or concept that does not fit existing documentation. Do not document trivial implementation changes, routine bug fixes, or information already obvious from the code.

## Change tracking

After a non-trivial change (new feature, bug fix, schema change,
or a real design decision — not renames, formatting, or refactors
with no behavior change), append one line to docs/CHANGES.md:

date — summary — files — status — follow-up (if any)

Trivial changes: skip silently, no log, no comment.
