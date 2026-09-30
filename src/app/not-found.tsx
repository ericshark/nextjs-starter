import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-4 text-center">
      <h2 className="text-2xl font-bold">404</h2>
      <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
        Page not found
      </p>
      <Link
        href="/"
        className="mt-4 text-sm font-medium underline underline-offset-4"
      >
        Back to home
      </Link>
    </div>
  );
}
