export default function AiMlPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-16 w-full">
      <div className="mb-10">
        <span className="inline-block px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950 border border-blue-200 dark:border-blue-800 text-blue-700 dark:text-blue-300 text-xs font-medium tracking-wide uppercase mb-4">
          AI / ML
        </span>
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white">AI &amp; Machine Learning</h1>
        <p className="mt-3 text-gray-500 dark:text-gray-400 text-lg">Projects, research, and tools built with AI and machine learning.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {[1, 2, 3, 4].map((i) => (
          <div
            key={i}
            className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-6 space-y-3"
          >
            <div className="h-10 w-10 rounded-xl bg-blue-100 dark:bg-blue-950 animate-pulse" />
            <div className="h-5 w-36 bg-gray-200 dark:bg-gray-700 rounded-md animate-pulse" />
            <div className="space-y-2">
              <div className="h-3 w-full bg-gray-100 dark:bg-gray-800 rounded animate-pulse" />
              <div className="h-3 w-4/5 bg-gray-100 dark:bg-gray-800 rounded animate-pulse" />
            </div>
            <div className="flex gap-2 pt-1">
              <div className="h-5 w-16 rounded-full bg-gray-100 dark:bg-gray-800 animate-pulse" />
              <div className="h-5 w-12 rounded-full bg-gray-100 dark:bg-gray-800 animate-pulse" />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
