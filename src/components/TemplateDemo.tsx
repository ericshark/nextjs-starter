"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Sparkles, Plus, Minus, RotateCcw, CheckCircle2 } from "lucide-react";

export function TemplateDemo() {
  const [count, setCount] = useState(0);
  const [activeTab, setActiveTab] = useState<"features" | "architecture">("features");

  return (
    <Card className="w-full">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-indigo-500" />
            <CardTitle>Interactive Component Showcase</CardTitle>
          </div>
          <Badge variant="success">React 19 Ready</Badge>
        </div>
        <CardDescription>
          Pre-configured with Tailwind CSS v4, accessible UI primitives, and full TypeScript safety.
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-6">
        {/* Navigation Tabs */}
        <div className="flex gap-2 border-b border-zinc-100 pb-2 dark:border-zinc-800">
          <button
            onClick={() => setActiveTab("features")}
            className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
              activeTab === "features"
                ? "bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900"
                : "text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
            }`}
          >
            Template Features
          </button>
          <button
            onClick={() => setActiveTab("architecture")}
            className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
              activeTab === "architecture"
                ? "bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900"
                : "text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
            }`}
          >
            Agent Guidance
          </button>
        </div>

        {activeTab === "features" ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            <div className="flex items-start gap-2 rounded-lg bg-zinc-50 p-3 dark:bg-zinc-900">
              <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold text-zinc-900 dark:text-zinc-100">Next.js 16 App Router</span>
                <p className="text-zinc-500 dark:text-zinc-400 mt-0.5">Turbopack bundling with Server & Client components.</p>
              </div>
            </div>
            <div className="flex items-start gap-2 rounded-lg bg-zinc-50 p-3 dark:bg-zinc-900">
              <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold text-zinc-900 dark:text-zinc-100">Tailwind CSS v4</span>
                <p className="text-zinc-500 dark:text-zinc-400 mt-0.5">Zero-config modern CSS engine with dark mode support.</p>
              </div>
            </div>
            <div className="flex items-start gap-2 rounded-lg bg-zinc-50 p-3 dark:bg-zinc-900">
              <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold text-zinc-900 dark:text-zinc-100">Vitest Test Runner</span>
                <p className="text-zinc-500 dark:text-zinc-400 mt-0.5">Fast ESM testing with React Testing Library and JSDOM.</p>
              </div>
            </div>
            <div className="flex items-start gap-2 rounded-lg bg-zinc-50 p-3 dark:bg-zinc-900">
              <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold text-zinc-900 dark:text-zinc-100">Prettier + ESLint 9</span>
                <p className="text-zinc-500 dark:text-zinc-400 mt-0.5">Consistent formatting and Next.js lint enforcement.</p>
              </div>
            </div>
          </div>
        ) : (
          <div className="space-y-2 text-xs text-zinc-600 dark:text-zinc-400 bg-zinc-50 p-4 rounded-lg dark:bg-zinc-900">
            <p>
              This template includes <strong>AGENTS.md</strong> and <strong>.agents/skills/</strong> so AI coding assistants (Antigravity, Claude Code, Cursor) know how to create components, handle state, and verify code automatically.
            </p>
            <p className="font-mono text-[11px] text-zinc-800 dark:text-zinc-200">
              Run <code className="bg-zinc-200 dark:bg-zinc-800 px-1 py-0.5 rounded">make check</code> to verify all tests, lints, and types.
            </p>
          </div>
        )}

        {/* State / Interactive Counter Section */}
        <div className="flex items-center justify-between rounded-lg border border-zinc-100 p-4 dark:border-zinc-800">
          <div>
            <div className="text-xs font-medium text-zinc-500 dark:text-zinc-400">Interactive Client State</div>
            <div className="text-2xl font-bold text-zinc-900 dark:text-zinc-50" data-testid="count-display">
              {count}
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setCount((prev) => prev - 1)}
              aria-label="Decrement count"
            >
              <Minus className="h-3.5 w-3.5" />
            </Button>
            <Button
              variant="default"
              size="sm"
              onClick={() => setCount((prev) => prev + 1)}
              aria-label="Increment count"
            >
              <Plus className="h-3.5 w-3.5" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setCount(0)}
              aria-label="Reset count"
            >
              <RotateCcw className="h-3.5 w-3.5" />
            </Button>
          </div>
        </div>
      </CardContent>

      <CardFooter className="justify-between text-xs text-zinc-500 dark:text-zinc-400 border-t border-zinc-100 pt-4 dark:border-zinc-800">
        <span>UI Primitives: Button, Card, Badge</span>
        <span className="font-mono">src/components/ui/</span>
      </CardFooter>
    </Card>
  );
}
