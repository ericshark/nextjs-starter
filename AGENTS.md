# Agent & Developer Guidelines: Next.js 16 Starter Template

Welcome to the **Next.js 16 Agentic Starter Template**. This document is the authoritative instruction manual for AI coding agents and human developers working in this codebase. Follow these rules to ensure fast development, high code quality, and zero regressions.

---

## 1. Tech Stack & Directory Structure

```
nextjs-starter/
├── Makefile                     # Root command runner (make check, make test, make dev)
├── package.json                 # Scripts: dev, build, lint, typecheck, test, check
├── vitest.config.ts             # Vitest test configuration
├── docs/architecture/           # High-signal architectural specifications
├── .agents/skills/              # Specialized agent runbooks (add-component, add-page, full-check)
├── public/                      # Static assets (images, icons, fonts)
├── src/
│   ├── app/                     # Next.js 16 App Router (Turbopack)
│   │   ├── layout.tsx           # Root HTML layout with Geist font
│   │   ├── page.tsx             # Main starter dashboard
│   │   ├── loading.tsx          # Animated loading fallback
│   │   ├── error.tsx            # Global error boundary (client component)
│   │   ├── not-found.tsx        # Custom 404 page
│   │   └── globals.css          # Tailwind CSS v4 stylesheets
│   ├── components/              # React components
│   │   ├── ui/                  # Reusable UI primitives (Button, Card, Badge)
│   │   └── TemplateDemo.tsx     # Interactive demo component
│   └── lib/                     # Utilities & configuration
│       ├── utils.ts             # cn(...) helper (clsx + tailwind-merge)
│       └── env.ts               # Runtime environment configuration
└── tests/                       # Vitest unit and component tests
```

---

## 2. Universal Command Cheatsheet

| Task | Command | Description |
| :--- | :--- | :--- |
| **Verify Everything** | `make check` (or `npm run check`) | Runs ESLint, TypeScript (`tsc --noEmit`), and Vitest |
| **Development Server** | `make dev` (or `npm run dev`) | Starts Next.js Turbopack dev server on `http://localhost:3000` |
| **Run Unit Tests** | `make test` (or `npm run test`) | Executes Vitest component and unit test suite |
| **Watch Tests** | `npm run test:watch` | Runs Vitest in interactive watch mode |
| **Type Check** | `make typecheck` (or `npm run typecheck`) | Runs `tsc --noEmit` across all TypeScript files |
| **Lint Code** | `make lint` (or `npm run lint`) | Runs ESLint 9 with Next.js rules |
| **Format Code** | `npm run format` | Auto-formats code with Prettier |
| **Production Build** | `make build` (or `npm run build`) | Creates an optimized Next.js production build |

---

## 3. Golden Rules for AI Agents

1. **Deterministic Verification Before Done**:
   - Always run `make check` (or `npm run check`) before declaring a task complete.
   - All tests must pass and zero TypeScript or ESLint errors are permitted.

2. **Server Components by Default**:
   - Treat all components in `src/app/` as **Server Components** unless interactive state (`useState`, `useEffect`, `useCallback`) or browser events (`onClick`, `onChange`) are needed.
   - When interactivity is required, add `"use client";` at the very top of the file.

3. **UI Primitive Reuse**:
   - When building new UI features, use existing primitives from `src/components/ui/` (`Button`, `Card`, `Badge`).
   - For styling, use the `cn(...)` utility from `@/lib/utils` to safely merge Tailwind CSS classes.

4. **Component Test Coverage**:
   - Whenever creating or modifying a component in `src/components/`, add or update its corresponding test in `tests/<ComponentName>.test.tsx`.
   - Use `@testing-library/react` and Vitest.

5. **Self-Contained RootLayout**:
   - Never use auto-generated `LayoutProps` in `layout.tsx`. Always use explicit `Readonly<{ children: React.ReactNode }>`.

---

## 4. Progressive Context & Skills

Refer to the agent runbooks in `.agents/skills/`:
- **`add-component`**: Guide for creating accessible UI components with variants and Vitest tests.
- **`add-page`**: Guide for adding App Router routes with metadata, loading states, and error handling.
- **`full-check`**: Diagnostic guide for fixing lint, type, or test issues.

## Documentation

Use `docs/` for persistent architectural and subsystem knowledge. Before modifying a subsystem, check for relevant documentation there. When a change materially alters architecture, data flow, public APIs, important invariants, setup, or behavior that future developers or agents need to understand, update the relevant existing documentation. Create a new document only for a substantial new subsystem or concept that does not fit existing documentation. Do not document trivial implementation changes, routine bug fixes, or information already obvious from the code.

## Change tracking

After a non-trivial change (new feature, bug fix, schema change,
or a real design decision — not renames, formatting, or refactors
with no behavior change), append one line to docs/CHANGES.md:

date — summary — files — status — follow-up (if any)

Trivial changes: skip silently, no log, no comment.
