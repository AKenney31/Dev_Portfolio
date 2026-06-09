import Link from 'next/link'
import Card from '../components/ui/Card'
import Tag from '../components/ui/Tag'
import PageHeader from '../components/ui/PageHeader'

export default function ProfessionalPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-16 w-full">

      <PageHeader
        badge="Professional"
        title="Work Experience"
        subtitle="Roles, technical accomplishments, and the work that shapes my engineering perspective."
        badgeVariant="blue"
      />

      {/* University of Maryland */}
      <Card padding="p-8" className="mb-8 border-blue-500/20">
        <div className="flex items-start gap-5">
          <div className="w-14 h-14 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center shrink-0">
            <svg className="w-7 h-7 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0 0 12 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75Z" />
            </svg>
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex flex-wrap items-start justify-between gap-3 mb-1">
              <h2 className="text-xl font-bold text-white">University of Maryland</h2>
              <span className="text-sm text-gray-500 font-medium">2022 · 1 Year</span>
            </div>
            <p className="text-blue-400 font-semibold text-sm mb-4">
              Department of Information Technology — IT Intern
            </p>
            <p className="text-gray-400 text-sm leading-relaxed mb-5">
              Embedded within the university&rsquo;s IT department, contributing to internal tooling and
              technology infrastructure research.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-5">
              <Card variant="inner" padding="p-4">
                <h4 className="text-sm font-semibold text-white mb-1.5">Machine Inventory Application</h4>
                <p className="text-gray-500 text-xs leading-relaxed">
                  Developed a JavaScript desktop application to read from and update a machine inventory dataset,
                  enabling IT staff to track and manage hardware assets across the department's network efficiently.
                </p>
              </Card>
              <Card variant="inner" padding="p-4">
                <h4 className="text-sm font-semibold text-white mb-1.5">Network Hardware Research</h4>
                <p className="text-gray-500 text-xs leading-relaxed">
                  Researched and compiled detailed reports on the university&rsquo;s existing network hardware,
                  identifying gaps and documenting actionable recommendations for future infrastructure enhancements.
                </p>
              </Card>
            </div>
            <div className="flex flex-wrap gap-2">
              {['JavaScript', 'Inventory Systems', 'Network Infrastructure', 'Technical Research & Reporting'].map((tag) => (
                <Tag key={tag}>{tag}</Tag>
              ))}
            </div>
          </div>
        </div>
      </Card>

      {/* W.L. Gore & Associates */}
      <Card padding="p-8" className="mb-8 border-green-500/20">
        <div className="flex items-start gap-5">
          <div className="w-14 h-14 rounded-xl bg-green-500/10 border border-green-500/20 flex items-center justify-center shrink-0">
            <svg className="w-7 h-7 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 0 0 2.25-2.25V6.75a2.25 2.25 0 0 0-2.25-2.25H6.75A2.25 2.25 0 0 0 4.5 6.75v10.5a2.25 2.25 0 0 0 2.25 2.25Zm.75-12h9v9h-9v-9Z" />
            </svg>
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex flex-wrap items-start justify-between gap-3 mb-1">
              <h2 className="text-xl font-bold text-white">W.L. Gore &amp; Associates</h2>
              <span className="text-sm text-gray-500 font-medium">2023 – 2024</span>
            </div>
            <div className="flex flex-wrap items-center gap-x-2 gap-y-1 mb-4">
              <p className="text-green-400 font-semibold text-sm">IT Intern</p>
              <span className="text-gray-700 hidden sm:inline">·</span>
              <span className="text-gray-500 text-xs">Full-time summers · Part-time during the school year</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Two-year internship across two distinct technical tracks — data engineering in the first year and
              emerging AI exploration in the second, working within Gore&rsquo;s Emerging Technology Innovation (ETI) team.
            </p>

            {/* Year 1 */}
            <div className="mb-4">
              <Tag variant="green" className="font-semibold uppercase tracking-wide text-[10px] mb-3 pt-1">
                Year 1 · Data Engineering
              </Tag>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <Card variant="inner" padding="p-4">
                  <h4 className="text-sm font-semibold text-white mb-1.5">KNIME Workflow Migration</h4>
                  <p className="text-gray-500 text-xs leading-relaxed">
                    Migrated SQL scripts from manual, error-prone processes into KNIME — a low-code/no-code data
                    analytics platform — improving workflow repeatability and reducing operational overhead for the
                    data team.
                  </p>
                </Card>
                <Card variant="inner" padding="p-4">
                  <h4 className="text-sm font-semibold text-white mb-1.5">React Employee Org Chart</h4>
                  <p className="text-gray-500 text-xs leading-relaxed">
                    Collaborated with a software engineering team to develop an interactive employee organizational
                    chart using React.
                  </p>
                </Card>
              </div>
            </div>

            {/* Year 2 */}
            <div className="mb-5">
              <Tag variant="cyan" className="font-semibold uppercase tracking-wide text-[10px] mb-3 pt-1">
                Year 2 · Emerging Technology Innovation (ETI)
              </Tag>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <Card variant="inner" padding="p-4">
                  <h4 className="text-sm font-semibold text-white mb-1.5">Medical AI Prototype</h4>
                  <p className="text-gray-500 text-xs leading-relaxed">
                    Built a prototype RAG application that periodically scraped a medical news journal, demoed to
                    Gore&rsquo;s medical products division to demonstrate AI&rsquo;s potential for clinical content
                    awareness and research acceleration.
                  </p>
                </Card>
                <Card variant="inner" padding="p-4">
                  <h4 className="text-sm font-semibold text-white mb-1.5">Azure Cognitive Search</h4>
                  <p className="text-gray-500 text-xs leading-relaxed">
                    Implemented a file search system for an existing research platform using Azure Cognitive Search,
                    enabling full-text and metadata-tag-based retrieval across file names in a large internal
                    document repository.
                  </p>
                </Card>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              {['SQL', 'KNIME', 'React', 'RAG', 'Azure Cognitive Search', 'AI Prototyping', 'Data Engineering'].map((tag) => (
                <Tag key={tag}>{tag}</Tag>
              ))}
            </div>
          </div>
        </div>
      </Card>

      {/* Problem Solutions LLC */}
      <Card padding="p-8" className="mb-8 border-cyan-500/25 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-72 h-72 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />
        <div className="flex items-start gap-5">
          <div className="w-14 h-14 rounded-xl bg-cyan-500/10 border border-cyan-500/25 flex items-center justify-center shrink-0">
            <svg className="w-7 h-7 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
            </svg>
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex flex-wrap items-start justify-between gap-3 mb-1">
              <div className="flex items-center gap-3">
                <h2 className="text-xl font-bold text-white">Problem Solutions LLC</h2>
                <Tag variant="green" className="text-[10px] font-semibold uppercase tracking-wide pt-1">Current</Tag>
              </div>
              <span className="text-sm text-gray-500 font-medium">2024 – Present</span>
            </div>
            <div className="flex flex-wrap items-center gap-x-2 gap-y-1 mb-4">
              <p className="text-cyan-400 font-semibold text-sm">AI Software Developer</p>
              <span className="text-gray-700 hidden sm:inline">·</span>
              <span className="text-gray-500 text-xs">Intern → Full-Time</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Joined as an intern while completing my master&rsquo;s degree, then transitioned directly to full-time
              upon graduating. Play a pivotal role in AI application design, security architecture, and end-to-end
              implementation across client-facing projects. Work closely with clients to provide technical expertise
              and deliver solutions built around their specific needs.
            </p>

            <h3 className="text-sm font-semibold text-gray-300 mb-3">Core Specialties</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
              {[
                {
                  label: 'Agentic RAG Systems',
                  detail:
                    'Built full agentic RAG pipelines using LangChain, LangGraph, and LangSmith — with LangSmith providing deep observability and tracing into every step of agentic workflows. Learned the limits of RAG and developed complementary context strategies (web results, image context, code sessions, prompt engineering) to fill those gaps.',
                },
                {
                  label: 'Document Intelligence',
                  detail:
                    'Extensive custom work in document chunking and retrieval — comparing semantic vs. naive chunking, maintaining document structure through parsing, and implementing media-specific indexing and retrieval. Combined lexical and semantic similarity search across multi-source knowledge bases to surface only the most useful context back to the LLM.',
                },
                {
                  label: 'Voice AI Agents',
                  detail:
                    'Designed and deployed real-time voice agents using LiveKit for production use in the trucking and business industries, building latency-sensitive audio pipelines, managing multi-turn conversation flows, and seamlesslyintegrating external data retrieval in a phonecall conversation.',
                },
                {
                  label: 'Full Stack & Mobile',
                  detail:
                    'End-to-end development spanning API design, security, React web frontends, and mobile applications with React Native Expo. Played a pivotal role in significant portions of the application design process from early architecture decisions through deployment.',
                },
              ].map(({ label, detail }) => (
                <Card key={label} variant="inner" padding="p-4">
                  <h4 className="text-sm font-semibold text-white mb-1.5">{label}</h4>
                  <p className="text-gray-500 text-xs leading-relaxed">{detail}</p>
                </Card>
              ))}
            </div>

            {/* Conference callout */}
            <Card variant="inner" padding="p-4" className="border-cyan-500/20 mb-5">
              <div className="flex items-start gap-3">
                <svg className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                </svg>
                <div>
                  <p className="text-sm font-semibold text-white mb-0.5">NextGenAI 2025 — Orlando, FL</p>
                  <p className="text-gray-400 text-xs leading-relaxed">
                    Traveled to Orlando to represent Problem Solutions at the NextGenAI 2025 AI Conference — an
                    industry gathering focused on emerging AI applications and enterprise adoption.{' '}
                    <Link
                      href="/nextgenai"
                      className="text-cyan-400 hover:text-cyan-300 transition-colors font-medium"
                    >
                      View the conference page →
                    </Link>
                  </p>
                </div>
              </div>
            </Card>

            <div className="flex flex-wrap gap-2">
              {[
                'LangChain', 'LangGraph', 'LangSmith', 'RAG', 'Agentic AI',
                'LiveKit', 'Voice AI', 'React Native', 'Prompt Engineering',
                'Azure', 'Full Stack', 'Document Indexing',
              ].map((tag) => (
                <Tag key={tag} variant="cyan">{tag}</Tag>
              ))}
            </div>
          </div>
        </div>
      </Card>

    </div>
  )
}
