---
name: add-page
description: Step-by-step runbook for adding a new route/page in the Next.js App Router with metadata, loading states, and error handling.
---

# Skill: Add App Router Route

Use this runbook whenever adding a new route to the Next.js application.

## Step 1: Create Route Directory
Create the directory in `src/app/<route-name>/`:
- `src/app/<route-name>/page.tsx`: The primary route page.
- (Optional) `src/app/<route-name>/layout.tsx`: Nested layout if sub-routes share a wrapper.
- (Optional) `src/app/<route-name>/loading.tsx`: Route-specific loading skeleton.

## Step 2: Implement Page Component & Metadata
Always export a default function and a typed `Metadata` object:
```typescript
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Feature Name | Next.js Starter",
  description: "Description of the feature.",
};

export default function FeaturePage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-12">
      <h1 className="text-2xl font-bold">Feature Name</h1>
    </main>
  );
}
```

## Step 3: Handle Client Components
If the page requires user interaction or forms:
1. Keep the `page.tsx` as a Server Component for metadata and SSR data fetching.
2. Delegate interactive widgets to a separate client component inside `src/components/`.

## Step 4: Verify
Verify that the new route builds without type errors:
```bash
npm run typecheck
npm run build
```
