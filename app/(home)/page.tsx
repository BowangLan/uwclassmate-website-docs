import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="relative flex flex-1 items-center justify-center overflow-hidden px-6 py-16">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_10%_10%,rgba(30,64,175,0.16),transparent_36%),radial-gradient(circle_at_85%_80%,rgba(22,163,74,0.14),transparent_42%)] dark:bg-[radial-gradient(circle_at_10%_10%,rgba(96,165,250,0.12),transparent_36%),radial-gradient(circle_at_85%_80%,rgba(74,222,128,0.1),transparent_42%)]" />
      <div className="relative mx-auto flex w-full max-w-3xl flex-col items-center rounded-2xl border border-black/10 bg-white/80 p-10 text-center shadow-2xl shadow-blue-950/10 backdrop-blur-sm dark:border-white/10 dark:bg-white/5 dark:shadow-none">
        <p className="mb-4 rounded-full border border-black/10 bg-black/5 px-3 py-1 text-xs tracking-[0.16em] text-black/70 uppercase dark:border-white/10 dark:bg-white/10 dark:text-white/70">
          UWClassmate Engineering
        </p>
        <h1 className="mb-4 text-4xl font-semibold leading-tight text-balance text-black dark:text-white">
          Product docs for the UWClassmate Next.js frontend
        </h1>
        <p className="mb-8 max-w-2xl text-base leading-relaxed text-black/70 dark:text-white/70">
          Setup, architecture, features, API routes, and data model documentation for
          `/Users/bowanglan/Dev/uwclassmate-official-frontend-nextjs`.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/docs"
            className="rounded-lg bg-black px-5 py-2.5 text-sm font-medium text-white transition hover:bg-black/85 dark:bg-white dark:text-black dark:hover:bg-white/90"
          >
            Open Documentation
          </Link>
          <Link
            href="/docs/getting-started/local-development"
            className="rounded-lg border border-black/20 bg-white px-5 py-2.5 text-sm font-medium text-black transition hover:bg-black/5 dark:border-white/20 dark:bg-white/10 dark:text-white dark:hover:bg-white/15"
          >
            Start Locally
          </Link>
        </div>
      </div>
    </div>
  );
}
