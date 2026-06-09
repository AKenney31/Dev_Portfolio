export default function ProfessionalPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-16 w-full">
      <div className="mb-10">
        <span className="inline-block px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950 border border-blue-200 dark:border-blue-800 text-blue-700 dark:text-blue-300 text-xs font-medium tracking-wide uppercase mb-4">
          Professional
        </span>
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white">Work Experience</h1>
        <p className="mt-3 text-gray-500 dark:text-gray-400 text-lg">Roles, responsibilities, and accomplishments.</p>
      </div>

      <div className="relative border-l-2 border-gray-200 dark:border-gray-800 pl-8 space-y-10">
        {[1, 2, 3].map((i) => (
          <div key={i} className="relative">
            <div className="absolute -left-[41px] w-4 h-4 rounded-full bg-blue-600 border-2 border-white dark:border-gray-950" />
            <div className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-6 space-y-3">
              <div className="flex items-start justify-between gap-4">
                <div className="space-y-2">
                  <div className="h-5 w-40 bg-gray-200 dark:bg-gray-700 rounded-md animate-pulse" />
                  <div className="h-4 w-28 bg-gray-100 dark:bg-gray-800 rounded-md animate-pulse" />
                </div>
                <div className="h-4 w-24 bg-gray-100 dark:bg-gray-800 rounded-md animate-pulse shrink-0" />
              </div>
              <div className="space-y-2 pt-1">
                <div className="h-3 w-full bg-gray-100 dark:bg-gray-800 rounded animate-pulse" />
                <div className="h-3 w-5/6 bg-gray-100 dark:bg-gray-800 rounded animate-pulse" />
                <div className="h-3 w-4/6 bg-gray-100 dark:bg-gray-800 rounded animate-pulse" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
