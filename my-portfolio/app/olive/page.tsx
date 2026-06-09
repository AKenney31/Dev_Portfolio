export default function OlivePage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-16 w-full">
      <div className="mb-10">
        <span className="inline-block px-3 py-1 rounded-full bg-green-50 dark:bg-green-950 border border-green-200 dark:border-green-800 text-green-700 dark:text-green-300 text-xs font-medium tracking-wide uppercase mb-4">
          Mobile App
        </span>
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white">Olive</h1>
        <p className="mt-3 text-gray-500 dark:text-gray-400 text-lg">A mobile application built to make a difference.</p>
        <a
          href="https://plantwitholive.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-4 text-green-700 dark:text-green-400 hover:underline text-sm font-medium"
        >
          plantwitholive.com →
        </a>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
        {/* App mockup placeholder */}
        <div className="lg:col-span-2 flex justify-center">
          <div className="w-48 h-96 rounded-[2.5rem] border-4 border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 flex items-center justify-center">
            <span className="text-gray-400 dark:text-gray-600 text-sm">App Preview</span>
          </div>
        </div>

        {/* Details */}
        <div className="lg:col-span-3 space-y-6">
          <div className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-6 space-y-3">
            <div className="h-5 w-32 bg-gray-200 dark:bg-gray-700 rounded-md animate-pulse" />
            <div className="space-y-2">
              <div className="h-3 w-full bg-gray-100 dark:bg-gray-800 rounded animate-pulse" />
              <div className="h-3 w-5/6 bg-gray-100 dark:bg-gray-800 rounded animate-pulse" />
              <div className="h-3 w-4/6 bg-gray-100 dark:bg-gray-800 rounded animate-pulse" />
            </div>
          </div>

          <div className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-6 space-y-3">
            <div className="h-5 w-28 bg-gray-200 dark:bg-gray-700 rounded-md animate-pulse" />
            <div className="grid grid-cols-2 gap-3">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="h-8 rounded-lg bg-gray-100 dark:bg-gray-800 animate-pulse" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
