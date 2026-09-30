# Agent Guidelines

## Commands

Use the `Makefile` for tasks:

- `make check` — Run all verification checks (lint, typecheck, tests). Run before completing tasks.
- `make dev` — Run development server
- `make test` — Run Vitest suite
- `make build` — Run production build

## Architecture & Code Style

- **Structure**:
  - `src/app/` — App Router pages, layouts, and routes
  - `src/components/` — Application and feature components
  - `src/lib/` — Shared utilities (`cn` in `@/lib/utils`)
  - `tests/` — Vitest unit and component tests
- **Styling**: Tailwind CSS v4. Use `cn(...)` from `@/lib/utils` for conditional class merging.
- **Testing**: Test observable behavior. Add or update tests when changing behavior, and never bypass tests.
- **Documentation**: Update `docs/architecture/` when changing architecture, data flow, or core design patterns.

## Skills

Reusable procedures are stored in `.agents/skills/`.

When a task matches an existing skill, follow that skill rather than recreating the procedure here.
