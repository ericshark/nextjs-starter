---
name: add-component
description: Step-by-step runbook for creating a reusable UI component in Next.js with Tailwind CSS v4 and a corresponding Vitest test.
---

# Skill: Add Component & Unit Test

Use this runbook whenever creating a new reusable component in `src/components/`.

## Step 1: Create Component File
1. If it is a generic design primitive (e.g. Input, Dialog, Tooltip), place it in `src/components/ui/<ComponentName>.tsx`.
2. If it is a feature-specific component, place it in `src/components/<ComponentName>.tsx`.
3. If the component needs browser interactivity (`useState`, `onClick`), add `"use client";` at line 1.
4. Use `cn(...)` from `@/lib/utils` for class merging.

Example pattern:
```typescript
import React from "react";
import { cn } from "@/lib/utils";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, error, ...props }, ref) => {
    return (
      <input
        ref={ref}
        className={cn(
          "rounded-lg border px-3 py-2 text-sm transition-colors",
          error ? "border-rose-500" : "border-zinc-200 dark:border-zinc-800",
          className
        )}
        {...props}
      />
    );
  }
);

Input.displayName = "Input";
```

## Step 2: Write Vitest Component Test
Create `tests/<ComponentName>.test.tsx`:
```typescript
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Input } from "@/components/ui/Input";

describe("Input component", () => {
  it("renders correctly with placeholder", () => {
    render(<Input placeholder="Enter your email" />);
    expect(screen.getByPlaceholderText("Enter your email")).toBeDefined();
  });
});
```

## Step 3: Verify
Run the test suite and type check:
```bash
npm run test
npm run typecheck
```
