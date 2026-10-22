# Agent Guidelines

## Commands

Use the `Makefile` for tasks (`make help` lists all of them):

- `make check` — Run all verification checks (lint, typecheck, tests). Run before completing tasks.
- `make dev` — Run development server
- `make test` — Run Vitest suite
- `make build` — Run production build

## Environment

- Use `npm` (not pnpm/yarn) and Node.js 24.
- Required environment variables are listed in `.env.example`.
- Next.js 16 has breaking changes from older versions. Before using an unfamiliar Next.js API or convention, check the bundled docs in `node_modules/next/dist/docs/`.

## Architecture & Code Style

- **Structure**:
  - `src/app/` — App Router pages, layouts, metadata, and routes
  - `src/components/` — Application and feature components
  - `src/lib/` — Shared utilities (`cn` in `@/lib/utils`)
  - `tests/` — Vitest unit and component tests
  - `docs/` — Project documentation and decision records
- **Styling**: Tailwind CSS v4. Use `cn(...)` from `@/lib/utils` for conditional class merging. Adhere to design conventions defined in `docs/design-system.md`.
- **Testing**: Test observable behavior. Add or update tests when changing behavior, and never bypass tests.
- **Product Context**: Refer to `PRODUCT.md` for feature scope, requirements, and target user journeys. If it still contains template placeholders, ask rather than treating them as requirements.
- **Documentation & Tracking**:
  - **Architecture**: Update `docs/architecture/` when changing architecture, data flow, or core patterns.
  - **Decisions**: Document significant technical or architectural choices as an ADR under `docs/decisions/` following `docs/decisions/0000-template.md`.
  - **Review Findings**: Record unexpected gaps, bugs, or oversights in `docs/review-findings.md`.

## Skills

Reusable procedures are stored in `.agents/skills/` (none yet; `.claude/skills` links here).

When a task matches an existing skill, follow that skill rather than recreating the procedure here.
