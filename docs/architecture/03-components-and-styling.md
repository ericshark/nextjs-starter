# Components & Styling Architecture

## Component Layering

```
src/
├── components/
│   ├── ui/                    # Base UI primitives (Button, Card, Badge)
│   └── TemplateDemo.tsx       # Feature/composite components
└── lib/
    └── utils.ts               # cn(...) utility
```

## Styling Rules with Tailwind CSS v4

1. **Conflict Resolution with `cn`**:
   Always pass component class names through `cn(...)` from `@/lib/utils`:
   ```typescript
   import { cn } from "@/lib/utils";

   export function Button({ className, ...props }) {
     return <button className={cn("base-classes", className)} {...props} />;
   }
   ```

2. **Color Theme**:
   - Use standard `zinc` scales (`zinc-900`, `zinc-50`) with dark mode variants (`dark:bg-zinc-950`, `dark:text-zinc-50`).
   - Accent colors: `indigo-500`, `emerald-500`, `rose-600`.
