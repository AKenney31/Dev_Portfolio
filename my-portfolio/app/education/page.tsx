export default function EducationPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-16 w-full">
      <div className="mb-10">
        <span className="inline-block px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950 border border-blue-200 dark:border-blue-800 text-blue-700 dark:text-blue-300 text-xs font-medium tracking-wide uppercase mb-4">
          Education
        </span>
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white">Academic Background</h1>
        <p className="mt-3 text-gray-500 dark:text-gray-400 text-lg">Degrees, certifications, and coursework.</p>
      </div>

      <div className="space-y-6">
        {[1, 2].map((i) => (
          <div
            key={i}
            className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-6 flex gap-5"
          >
            <div className="w-12 h-12 rounded-xl bg-gray-100 dark:bg-gray-800 shrink-0" />
            <div className="flex-1 space-y-2">
              <div className="h-5 w-48 bg-gray-200 dark:bg-gray-700 rounded-md animate-pulse" />
              <div className="h-4 w-32 bg-gray-100 dark:bg-gray-800 rounded-md animate-pulse" />
              <div className="h-3 w-64 bg-gray-100 dark:bg-gray-800 rounded-md animate-pulse" />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
