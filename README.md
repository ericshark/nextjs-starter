# 🚀 Next.js 16 Agentic Starter Template

A production-grade, highly autonomous frontend starter powered by **Next.js 16 (App Router)**, **React 19**, **Tailwind CSS v4**, and **Vitest**.

Purpose-built for **AI coding agents** (Antigravity, Claude Code, Cursor, Devin) and **modern developers** who want a solid, type-safe foundation with zero boilerplate friction.

---

## 🌟 Key Features

- **Next.js 16 (App Router)**: Powered by Turbopack with React 19 Server Components and streaming SSR.
- **Tailwind CSS v4**: Ultra-fast modern styling engine with PostCSS integration and dark mode.
- **Vitest Testing Suite**: Native ESM test runner with `@testing-library/react` and JSDOM.
- **Accessible UI Primitives**: Pre-built base components in `src/components/ui/` (`Button`, `Card`, `Badge`) with `clsx` and `tailwind-merge`.
- **App Router Boundaries**: Pre-configured global `loading.tsx`, `error.tsx` (with reset button), and `not-found.tsx`.
- **Deterministic Quality Gates**: One-step `make check` (or `npm run check`) runs ESLint, TypeScript compilation, and Vitest.
- **AI Agent Guidance**: Authoritative [`AGENTS.md`](./AGENTS.md) and [`.agents/skills/`](./.agents/skills/) runbooks teach AI assistants how to add components, routes, and tests safely.

---

## 🗂 Project Structure

```
nextjs-starter/
├── Makefile                     # Root command runner (make check, make test, make dev)
├── AGENTS.md                    # Primary AI agent instructions & conventions
├── CLAUDE.md                    # Claude Code pointer to AGENTS.md
├── package.json                 # Dependencies and npm scripts
├── vitest.config.ts             # Vitest test runner configuration
├── .github/
│   └── workflows/ci.yml         # GitHub Actions pipeline
├── .agents/
│   └── skills/                  # Specialized agent runbooks
│       ├── add-component/       # Guide for creating UI components & tests
│       ├── add-page/            # Guide for adding App Router routes
│       └── full-check/          # Guide for resolving verification failures
├── docs/
│   └── architecture/            # Architectural design specifications
│       ├── 01-overview.md       # Tech stack & overview
│       ├── 02-app-router-patterns.md # Server vs Client component patterns
│       └── 03-components-and-styling.md # Styling conventions & cn helper
├── public/                      # Static assets & icons
├── src/
│   ├── app/                     # Next.js App Router
│   │   ├── layout.tsx           # Root HTML layout with Geist font
│   │   ├── page.tsx             # Starter dashboard
│   │   ├── loading.tsx          # Loading skeleton fallback
│   │   ├── error.tsx            # Global error boundary (client component)
│   │   ├── not-found.tsx        # Custom 404 page
│   │   └── globals.css          # Tailwind CSS v4 stylesheets
│   ├── components/              # React components
│   │   ├── ui/                  # Reusable primitives (Button, Card, Badge)
│   │   └── TemplateDemo.tsx     # Interactive showcase component
│   └── lib/                     # Utilities & configuration
│       ├── utils.ts             # cn(...) helper (clsx + tailwind-merge)
│       └── env.ts               # Runtime environment configuration
└── tests/                       # Vitest unit and component tests
```

---

## ⚡ Quick Start

### 1. Install Dependencies
```bash
npm install
# Or: make setup
```

### 2. Start Development Server
```bash
npm run dev
# Or: make dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser.

### 3. Run Quality Checks
```bash
make check
# Or: npm run check
```

---

## 🛠 Command Cheatsheet

| Task | Command | Description |
| :--- | :--- | :--- |
| **Verify All** | `make check` (or `npm run check`) | Runs ESLint, TypeScript (`tsc --noEmit`), and Vitest |
| **Dev Server** | `make dev` (or `npm run dev`) | Starts Turbopack dev server on `http://localhost:3000` |
| **Run Tests** | `make test` (or `npm run test`) | Executes Vitest component test suite |
| **Watch Tests** | `npm run test:watch` | Runs Vitest in interactive watch mode |
| **Type Check** | `make typecheck` (or `npm run typecheck`) | Runs `tsc --noEmit` across all TypeScript files |
| **Lint Code** | `make lint` (or `npm run lint`) | Runs ESLint 9 validation |
| **Format Code** | `make format` (or `npm run format`) | Auto-formats code with Prettier |
| **Production Build** | `make build` (or `npm run build`) | Creates an optimized production build |

---

## 🎨 UI Primitives

This starter includes accessible, variant-based UI primitives in `src/components/ui/`:

### Button
```tsx
import { Button } from "@/components/ui/Button";

<Button variant="default" size="md">Click Me</Button>
<Button variant="secondary" size="sm">Cancel</Button>
<Button variant="outline">Settings</Button>
<Button variant="danger">Delete</Button>
```

### Card
```tsx
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/Card";

<Card>
  <CardHeader>
    <CardTitle>Analytics</CardTitle>
    <CardDescription>Monthly active visitors</CardDescription>
  </CardHeader>
  <CardContent>
    <p>12,450 users</p>
  </CardContent>
</Card>
```

### Badge
```tsx
import { Badge } from "@/components/ui/Badge";

<Badge variant="success">Active</Badge>
<Badge variant="warning">Pending</Badge>
<Badge variant="outline">Beta</Badge>
```

---

## 🤖 AI Agent Workflow

AI coding agents (Antigravity, Claude Code, Cursor) automatically read [`AGENTS.md`](./AGENTS.md) when entering the repo.

Three on-demand runbooks in `.agents/skills/` guide common workflows:
1. **[`add-component`](./.agents/skills/add-component/SKILL.md)**: Procedure for building UI primitives and writing Vitest unit tests.
2. **[`add-page`](./.agents/skills/add-page/SKILL.md)**: Pattern for creating Server Component routes with metadata, streaming loading, and error states.
3. **[`full-check`](./.agents/skills/full-check/SKILL.md)**: Guide for troubleshooting and achieving clean `make check` results.

---

## 🚢 Deployment

Deploy seamlessly to [Vercel](https://vercel.com):
```bash
npx vercel
```
Or connect your GitHub repository to Vercel for automated CI/CD previews on every pull request.

---

## 📜 License

MIT License. Free to use for personal, open-source, or commercial projects.
