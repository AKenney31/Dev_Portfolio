import Link from 'next/link'
import Card from '../components/ui/Card'
import Tag from '../components/ui/Tag'
import PageHeader from '../components/ui/PageHeader'

const SPARKLES_PATH =
  'M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z'

const TAKEAWAYS = [
  {
    title: 'Smarter RAG Retrieval',
    body: 'Retrieval quality improves dramatically with semantic chunking, OCR for accurate document extraction, and preserving document structure during indexing — so the model receives organized, meaningful context rather than raw fragments.',
    icon: 'M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z',
  },
  {
    title: 'LLM Memory Architecture',
    body: 'Short-term memory through structured conversation history keeps the model oriented within a session. Long-term memory via vectorized databases enables persistent recall across sessions — the foundation of truly stateful AI.',
    icon: 'M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 5.625c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125',
  },
  {
    title: 'Knowledge Graphs',
    body: 'Mapping relationships between entities across a knowledge base connects documents, concepts, and facts through shared attributes. Graphs surface non-obvious connections that flat vector search misses, improving reasoning depth.',
    icon: 'M7.5 7.5h-.75A2.25 2.25 0 0 0 4.5 9.75v7.5a2.25 2.25 0 0 0 2.25 2.25h7.5a2.25 2.25 0 0 0 2.25-2.25v-7.5a2.25 2.25 0 0 0-2.25-2.25h-.75m0-3-3-3m0 0-3 3m3-3v11.25m6-2.25h.75a2.25 2.25 0 0 1 2.25 2.25v7.5a2.25 2.25 0 0 1-2.25 2.25h-7.5a2.25 2.25 0 0 1-2.25-2.25v-.75',
  },
  {
    title: 'AI Threat Modeling',
    body: 'AI systems inherit novel attack surfaces: data poisoning corrupts retrieval data, adversarial inputs manipulate model behavior, and compromised context pipelines can subvert otherwise secure applications. Threat modeling must cover the entire context chain.',
    icon: 'M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z',
  },
]

export default function NextGenAIPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 py-10 sm:py-16 w-full">

      <PageHeader
        badge="Conference · 2025"
        title="NextGenAI 2025"
        subtitle="An AI and cybersecurity conference in Orlando, FL — spanning foundational AI concepts, advanced retrieval strategies, knowledge graphs, long-term memory, and applied threat modeling."
        badgeVariant="yellow"
      />

      {/* Hero Card */}
      <Card padding="p-5 sm:p-8" className="mb-8 border-yellow-500/20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-72 h-72 bg-yellow-500/5 rounded-full blur-3xl pointer-events-none" />
        <div className="flex items-start gap-3 sm:gap-5">
          <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-xl bg-yellow-500/10 border border-yellow-500/20 flex items-center justify-center shrink-0">
            <svg className="w-5 h-5 sm:w-7 sm:h-7 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d={SPARKLES_PATH} />
            </svg>
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex flex-wrap items-start justify-between gap-3 mb-1">
              <h2 className="text-xl font-bold text-white">NextGenAI 2025</h2>
              <span className="text-sm text-gray-500 font-medium">Orlando, FL · 2025</span>
            </div>
            <p className="text-yellow-400 font-semibold text-sm mb-4">AI &amp; Cybersecurity Conference</p>
            <p className="text-gray-400 text-sm leading-relaxed mb-5">
              Traveled to Orlando to represent{' '}
              <Link href="/professional" className="text-cyan-400 hover:text-cyan-300 transition-colors font-medium">
                Problem Solutions LLC
              </Link>
              {' '}at NextGenAI 2025 — an industry conference bringing together AI practitioners and cybersecurity
              professionals. Sessions ranged from accessible AI overviews and enterprise RAG strategies to advanced
              topics like knowledge graphs, long-term memory architectures, and AI-specific threat modeling.
            </p>
            <div className="flex flex-wrap gap-2">
              {['Generative AI', 'RAG', 'Knowledge Graphs', 'LLM Memory', 'AI Security', 'Cybersecurity'].map((tag) => (
                <Tag key={tag} variant="yellow">{tag}</Tag>
              ))}
            </div>
          </div>
        </div>
      </Card>

      {/* Defining Quote */}
      <div className="mb-8">
        <Card padding="p-5 sm:p-8" className="border-yellow-500/25 relative overflow-hidden">
          <div className="absolute top-0 left-0 bottom-0 w-1 bg-linear-to-b from-yellow-400/70 via-yellow-400/40 to-transparent rounded-l-2xl" />
          <div className="pl-5">
            <svg className="w-6 h-6 text-yellow-500/40 mb-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
            <blockquote className="text-white text-base sm:text-xl font-semibold leading-relaxed mb-4">
              The winner in AI isn&rsquo;t who uses the best model — it&rsquo;s who gives their model the best context.
            </blockquote>
            <p className="text-gray-500 text-sm leading-relaxed">
              A theme that ran through the entire conference: the model itself is increasingly a commodity. What separates
              effective AI from ineffective AI is the quality, structure, and relevance of what you deliver to it. Retrieval
              strategy, memory architecture, and data integrity matter far more than model selection alone.
            </p>
          </div>
        </Card>
      </div>

      {/* Key Takeaways */}
      <Card padding="p-5 sm:p-8" className="mb-8">
        <h3 className="text-lg font-bold text-white mb-1">Key Takeaways</h3>
        <p className="text-gray-500 text-sm mb-6">Four themes that defined the conference and shaped my thinking.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {TAKEAWAYS.map(({ title, body, icon }) => (
            <Card key={title} variant="inner" padding="p-5">
              <div className="w-8 h-8 rounded-lg bg-yellow-500/10 border border-yellow-500/20 flex items-center justify-center mb-3">
                <svg className="w-4 h-4 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d={icon} />
                </svg>
              </div>
              <h4 className="text-sm font-semibold text-white mb-1.5">{title}</h4>
              <p className="text-gray-500 text-xs leading-relaxed">{body}</p>
            </Card>
          ))}
        </div>
      </Card>

      {/* Applied Impact */}
      <div className="mb-8">
        <h3 className="text-lg font-bold text-white mb-4">What I Brought Home</h3>
        <Card className="border-cyan-500/25 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-48 h-48 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

          <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
            <div className="flex items-start gap-3">
              <div className="mt-0.5 w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/25 flex items-center justify-center shrink-0">
                <svg className="w-4 h-4 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5 10.5 6.75 12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" />
                </svg>
              </div>
              <div>
                <Tag variant="cyan" className="font-semibold uppercase tracking-wide text-[10px] mb-1.5 pt-1">
                  Applied at Problem Solutions
                </Tag>
                <h4 className="text-base font-bold text-white leading-snug">Conference-Driven Improvements</h4>
              </div>
            </div>
          </div>

          <p className="text-gray-400 text-sm leading-relaxed mb-5">
            The conference reignited a drive to raise the bar on our AI workflows at{' '}
            <Link href="/professional" className="text-cyan-400 hover:text-cyan-300 transition-colors font-medium">
              Problem Solutions
            </Link>
            . The sessions on context quality and retrieval architecture directly informed two significant initiatives after returning.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-5">
            <Card variant="inner" padding="p-4">
              <h4 className="text-sm font-semibold text-white mb-1.5">Excel Analysis via LLM Code Sessions</h4>
              <p className="text-gray-500 text-xs leading-relaxed">
                Demoed and delivered LLM-powered code sessions capable of analyzing structured Excel data — enabling
                clients to query, summarize, and reason over spreadsheet content conversationally, without manual
                data preparation.
              </p>
            </Card>
            <Card variant="inner" padding="p-4">
              <h4 className="text-sm font-semibold text-white mb-1.5">Document Indexing &amp; RAG Overhaul</h4>
              <p className="text-gray-500 text-xs leading-relaxed">
                Drove a complete rework of our document indexing and RAG retrieval systems — improving semantic
                chunking, preserving document structure through parsing, and upgrading retrieval to surface higher-quality
                context for every query.
              </p>
            </Card>
          </div>

          <Card variant="inner" padding="p-4" className="border-yellow-500/15">
            <div className="flex items-start gap-3">
              <svg className="w-4 h-4 text-yellow-400 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
              <p className="text-gray-400 text-xs leading-relaxed">
                These improvements are part of the broader AI engineering work at Problem Solutions —{' '}
                <Link href="/professional" className="text-cyan-400 hover:text-cyan-300 transition-colors font-medium">
                  view the full work history →
                </Link>
              </p>
            </div>
          </Card>
        </Card>
      </div>

    </div>
  )
}
