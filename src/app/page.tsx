import { TemplateDemo } from "@/components/TemplateDemo";
import { Terminal, Bot, Sparkles, BookOpen, Layers } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen">
      <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8 space-y-8">
        {/* Header Section */}
        <header className="space-y-4 text-center sm:text-left">
          <div className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50/50 px-3 py-1 text-xs font-medium text-indigo-700 dark:border-indigo-900/50 dark:bg-indigo-950/40 dark:text-indigo-300">
            <Sparkles className="h-3.5 w-3.5" />
            Next.js 16 App Router Starter
          </div>
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl text-zinc-900 dark:text-zinc-50">
            Engineered for Developers & AI Agents
          </h1>
          <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 max-w-2xl">
            A production-ready foundation with Next.js 16 (Turbopack), React 19, Tailwind CSS v4, Vitest component testing, and authoritative agent steering files.
          </p>
        </header>

        {/* Command Cheatsheet */}
        <div className="rounded-xl border border-zinc-200 bg-white p-5 shadow-sm dark:border-zinc-800 dark:bg-zinc-950">
          <div className="flex items-center gap-2 pb-3 text-xs font-semibold text-zinc-500 uppercase tracking-wider dark:text-zinc-400 border-b border-zinc-100 dark:border-zinc-800">
            <Terminal className="h-4 w-4" /> Quick Command Cheatsheet
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-3 text-xs font-mono">
            <div className="rounded-lg bg-zinc-50 p-2.5 dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800">
              <span className="text-indigo-600 dark:text-indigo-400 font-bold">make check</span>
              <div className="text-[11px] text-zinc-500 dark:text-zinc-400 font-sans mt-0.5">Lint + Types + Tests</div>
            </div>
            <div className="rounded-lg bg-zinc-50 p-2.5 dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800">
              <span className="text-indigo-600 dark:text-indigo-400 font-bold">npm run dev</span>
              <div className="text-[11px] text-zinc-500 dark:text-zinc-400 font-sans mt-0.5">Turbopack dev server</div>
            </div>
            <div className="rounded-lg bg-zinc-50 p-2.5 dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800">
              <span className="text-indigo-600 dark:text-indigo-400 font-bold">npm run test</span>
              <div className="text-[11px] text-zinc-500 dark:text-zinc-400 font-sans mt-0.5">Vitest unit tests</div>
            </div>
            <div className="rounded-lg bg-zinc-50 p-2.5 dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800">
              <span className="text-indigo-600 dark:text-indigo-400 font-bold">npm run typecheck</span>
              <div className="text-[11px] text-zinc-500 dark:text-zinc-400 font-sans mt-0.5">TypeScript tsc check</div>
            </div>
          </div>
        </div>

        {/* Interactive Component Demo */}
        <TemplateDemo />

        {/* Architecture & AI Guidance Footer */}
        <footer className="pt-6 border-t border-zinc-200 dark:border-zinc-800 flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-500 dark:text-zinc-400 gap-4">
          <div className="flex items-center gap-2">
            <Bot className="h-4 w-4 text-zinc-400" />
            Agent instructions in <code className="font-mono text-zinc-700 dark:text-zinc-300">AGENTS.md</code>
          </div>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              <BookOpen className="h-3.5 w-3.5" /> docs/architecture/
            </span>
            <span>·</span>
            <span className="flex items-center gap-1">
              <Layers className="h-3.5 w-3.5" /> .agents/skills/
            </span>
          </div>
        </footer>
      </div>
    </div>
  );
}
