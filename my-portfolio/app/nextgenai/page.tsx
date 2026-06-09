export default function NextGenAIPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-16 w-full">
      <div className="mb-10">
        <span className="inline-block px-3 py-1 rounded-full bg-amber-50 dark:bg-amber-950 border border-amber-200 dark:border-amber-800 text-amber-700 dark:text-amber-300 text-xs font-medium tracking-wide uppercase mb-4">
          Conference · 2026
        </span>
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white">NextGenAI 2026</h1>
        <p className="mt-3 text-gray-500 dark:text-gray-400 text-lg">
          Talks, workshops, and highlights from the NextGenAI conference.
        </p>
      </div>

      {/* Hero banner placeholder */}
      <div className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-950/40 dark:to-orange-950/40 p-10 mb-10 flex flex-col items-center gap-3 text-center">
        <div className="w-16 h-16 rounded-2xl bg-amber-100 dark:bg-amber-900/50 flex items-center justify-center">
          <svg className="w-8 h-8 text-amber-500" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456z" />
          </svg>
        </div>
        <p className="text-gray-500 dark:text-gray-400 text-sm">Conference details coming soon</p>
      </div>

      {/* Content sections */}
      <div className="space-y-8">
        {/* Sessions */}
        <div>
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Sessions &amp; Talks</h2>
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-6 flex gap-4"
              >
                <div className="w-1 rounded-full bg-amber-400 shrink-0" />
                <div className="flex-1 space-y-2">
                  <div className="h-5 w-52 bg-gray-200 dark:bg-gray-700 rounded-md animate-pulse" />
                  <div className="h-3 w-32 bg-gray-100 dark:bg-gray-800 rounded animate-pulse" />
                  <div className="h-3 w-full bg-gray-100 dark:bg-gray-800 rounded animate-pulse" />
                  <div className="h-3 w-4/5 bg-gray-100 dark:bg-gray-800 rounded animate-pulse" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Key takeaways */}
        <div>
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Key Takeaways</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-5 space-y-2"
              >
                <div className="h-5 w-5 rounded-full bg-amber-100 dark:bg-amber-950 animate-pulse" />
                <div className="h-4 w-36 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
                <div className="h-3 w-full bg-gray-100 dark:bg-gray-800 rounded animate-pulse" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
