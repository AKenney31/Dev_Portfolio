export default function VoiceAiPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-16 w-full">
      <div className="mb-10">
        <span className="inline-block px-3 py-1 rounded-full bg-violet-50 dark:bg-violet-950 border border-violet-200 dark:border-violet-800 text-violet-700 dark:text-violet-300 text-xs font-medium tracking-wide uppercase mb-4">
          Voice AI
        </span>
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white">Voice AI</h1>
        <p className="mt-3 text-gray-500 dark:text-gray-400 text-lg">
          Conversational voice interfaces and speech-driven AI experiences.
        </p>
      </div>

      {/* Featured demo placeholder */}
      <div className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-10 mb-8 flex flex-col items-center gap-4">
        <div className="w-20 h-20 rounded-full bg-violet-100 dark:bg-violet-950 flex items-center justify-center">
          <svg className="w-9 h-9 text-violet-400" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z" />
          </svg>
        </div>
        <p className="text-gray-400 dark:text-gray-500 text-sm">Voice demo coming soon</p>
      </div>

      {/* Projects grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {[1, 2].map((i) => (
          <div
            key={i}
            className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-6 space-y-3"
          >
            <div className="h-8 w-8 rounded-lg bg-violet-100 dark:bg-violet-950 animate-pulse" />
            <div className="h-5 w-40 bg-gray-200 dark:bg-gray-700 rounded-md animate-pulse" />
            <div className="space-y-2">
              <div className="h-3 w-full bg-gray-100 dark:bg-gray-800 rounded animate-pulse" />
              <div className="h-3 w-3/4 bg-gray-100 dark:bg-gray-800 rounded animate-pulse" />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
