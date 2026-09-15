# App Router Patterns & Conventions

## File Roles in `src/app/`

| File | Context | Purpose |
| :--- | :--- | :--- |
| `layout.tsx` | Server | Top-level HTML shell, font loading (`Geist`), global metadata |
| `page.tsx` | Server | Route view component |
| `loading.tsx` | Server | Streaming loading skeleton shown while async data resolves |
| `error.tsx` | Client (`"use client"`) | Global error boundary catching uncaught runtime exceptions |
| `not-found.tsx` | Server/Client | Custom 404 handler when `notFound()` is triggered |
| `globals.css` | CSS | Tailwind CSS v4 directives |

## Client Component Boundary Best Practices

- Do NOT put `"use client"` on `page.tsx` directly if you need metadata or SSR data.
- Instead, extract the interactive parts into a client component inside `src/components/` and import it into `page.tsx`.
- This ensures fast initial server-rendered HTML and optimal SEO.
