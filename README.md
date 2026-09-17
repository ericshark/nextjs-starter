# Next.js Starter

A minimal Next.js 16 starter using the App Router, React 19, Tailwind CSS v4, TypeScript, ESLint, and Vitest.

## Quick start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Structure

```text
src/app/           App Router pages and layouts
src/components/    Reusable components and UI primitives
src/lib/           Shared utilities and environment handling
tests/             Unit and component tests
docs/architecture/ Architecture notes
```

## Commands

| Command | Purpose |
| --- | --- |
| `make check` | Run linting, type checking, and tests |
| `make test` | Run Vitest |
| `make lint` | Run ESLint |
| `make typecheck` | Run TypeScript checks |
| `make build` | Create a production build |
| `make format` | Format files with Prettier |

Equivalent npm scripts are available in `package.json`.

## Agent instructions

Read [`AGENTS.md`](./AGENTS.md) before making changes. Check the relevant note in [`docs/architecture/`](./docs/architecture/) before changing a subsystem, and run `make check` before completing non-trivial work.

## License

MIT
