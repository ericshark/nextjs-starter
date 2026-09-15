# System Architecture Overview: Next.js 16 Starter

This project is a standalone, production-ready frontend starter powered by **Next.js 16 (App Router)** and **React 19**.

## Core Technology Stack

- **Framework**: Next.js 16.3.5 with Turbopack bundler
- **Runtime**: Node.js 22+ (tested on Node 24)
- **Language**: TypeScript 5+ in strict mode
- **Styling**: Tailwind CSS v4 with PostCSS
- **Test Runner**: Vitest 3 with React Testing Library & JSDOM
- **Code Quality**: ESLint 9 + Prettier

## Architectural Principles

1. **Server-First by Default**: Pages and layout wrappers are Server Components that execute on the server or build time, keeping client bundles lightweight.
2. **Accessible Primitives**: Base UI widgets live in `src/components/ui/` with clear TypeScript interfaces and variant props.
3. **Deterministic Feedback Loop**: `npm run check` runs all linter, typecheck, and test validations in seconds.
