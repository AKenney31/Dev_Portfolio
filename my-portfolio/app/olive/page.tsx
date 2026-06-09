import Card from '../components/ui/Card'
import Tag from '../components/ui/Tag'
import PageHeader from '../components/ui/PageHeader'

const CORE_FEATURES = [
  {
    label: 'Plant Identification',
    detail:
      'Point your camera at any plant and Olive identifies it instantly — species name, characteristics, and origin — powered by advanced image recognition.',
  },
  {
    label: 'Tailored Care Routines',
    detail:
      'Every plant has unique needs. Olive builds a personalized care schedule — watering, light, humidity, and more — tuned to your specific plant and environment.',
  },
  {
    label: 'Health & Growth Tracking',
    detail:
      'Log health and growth updates with supporting photos. AI-powered image analysis spots issues early, celebrates milestones, and builds a visual record of your plant\'s journey over time.',
  },
  {
    label: 'Ask Olive AI',
    detail:
      'A fully agentic AI system with multiple expert personalities — including a dedicated Plant Doctor — to diagnose problems, answer questions, and guide every stage of care.',
  },
]

const GBETA_BENEFITS = [
  'Personalized coaching from gener8tor driving growth and investor readiness',
  'Weekly Lunch & Learns and Mentor Swarms with seasoned operators',
  'Pitch opportunities with investors and accelerator partners',
  'Access to potential funding opportunities and connections within the gener8tor network',
]

const SPARKLES_PATH =
  'M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z'

export default function OlivePage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-16 w-full">

      <PageHeader
        badge="Mobile App"
        title="Plant With Olive"
        subtitle="An AI-powered plant care companion — identify, nurture, and grow with confidence."
        badgeVariant="green"
      />

      {/* Hero Card */}
      <Card padding="p-8" className="mb-8 border-green-500/20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-72 h-72 bg-green-500/5 rounded-full blur-3xl pointer-events-none" />
        <div className="flex items-start gap-5">
          <div className="w-14 h-14 rounded-xl bg-green-500/10 border border-green-500/20 flex items-center justify-center shrink-0">
            <svg className="w-7 h-7 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d={SPARKLES_PATH} />
            </svg>
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex flex-wrap items-start justify-between gap-3 mb-1">
              <div className="flex items-center gap-3">
                <h2 className="text-xl font-bold text-white">Plant With Olive</h2>
              </div>
              <span className="text-sm text-gray-500 font-medium">2026</span>
            </div>
            <p className="text-green-400 font-semibold text-sm mb-4">Co-Founder &amp; Engineer</p>
            <p className="text-gray-400 text-sm leading-relaxed mb-5">
              Olive is an AI-powered plant care app built from the ground up — recently launched and gaining early
              traction. It identifies your plants, builds tailored care routines, and encourages health and growth
              updates with supporting photos for AI-powered analysis.
            </p>

            <div className="flex flex-wrap gap-3 mb-5">
              <a
                href="https://plantwitholive.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 text-gray-300 text-sm font-semibold hover:border-gray-500 hover:text-white transition-colors"
              >
                Visit plantwitholive.com
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
              </a>
            </div>

            <div className="flex flex-wrap gap-2">
              {['React Native', 'Expo', 'Agentic AI', 'Image Recognition', 'iOS', 'Android', 'Mobile Development'].map((tag) => (
                <Tag key={tag} variant="green">{tag}</Tag>
              ))}
            </div>
          </div>
        </div>
      </Card>

      {/* Core Features */}
      <Card padding="p-8" className="mb-8">
        <h3 className="text-lg font-bold text-white mb-1">Core Features</h3>
        <p className="text-gray-500 text-sm mb-6">Built to make plant care intuitive, intelligent, and deeply personal.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {CORE_FEATURES.map(({ label, detail }) => (
            <Card key={label} variant="inner" padding="p-5">
              <h4 className="text-sm font-semibold text-white mb-1">{label}</h4>
              <p className="text-gray-500 text-xs leading-relaxed">{detail}</p>
            </Card>
          ))}
        </div>
        <div className="mt-4">
          <Card variant="inner" padding="p-4" className="border-green-500/15">
            <div className="flex items-start gap-3">
              <svg className="w-4 h-4 text-green-400 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
              <p className="text-gray-400 text-xs leading-relaxed">
                The website goes deep on every feature —{' '}
                <a
                  href="https://plantwitholive.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-400 hover:text-green-300 transition-colors font-medium"
                >
                  explore plantwitholive.com
                </a>
                {' '}to learn more and download the app.
              </p>
            </div>
          </Card>
        </div>
      </Card>

      {/* gbeta Accelerator */}
      <div className="mb-8">
        <h3 className="text-lg font-bold text-white mb-4">Accelerator Program</h3>
        <Card className="border-yellow-500/25 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-48 h-48 bg-yellow-500/5 rounded-full blur-3xl pointer-events-none" />

          <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
            <div className="flex items-center gap-3">
              <div className="mt-0.5 w-8 h-8 rounded-lg bg-yellow-500/10 border border-yellow-500/25 flex items-center justify-center shrink-0">
                <svg className="w-4 h-4 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
                </svg>
              </div>
              <h4 className="text-base font-bold text-white leading-snug">gbeta — Pennsylvania</h4>
            </div>
            <a
              href="https://www.gener8tor.com/gbeta/pennsylvania"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-gray-700 bg-gray-800 text-gray-300 text-xs font-medium hover:border-yellow-500/50 hover:text-yellow-400 transition-colors"
            >
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" />
              </svg>
              View Program
            </a>
          </div>

          <p className="text-gray-400 text-sm leading-relaxed mb-5">
            Plant With Olive is enrolled in the{' '}
            <a
              href="https://www.gener8tor.com/gbeta/pennsylvania"
              target="_blank"
              rel="noopener noreferrer"
              className="text-yellow-400 hover:text-yellow-300 transition-colors font-medium"
            >
              gbeta Pennsylvania accelerator
            </a>
            {' '}— a program by gener8tor designed to help early-stage startups accelerate growth and build investor
            readiness. Participating companies receive hands-on support, meaningful connections, and resources to
            accelerate growth. An exciting early milestone as we build momentum and a professional path forward
            following the app&rsquo;s launch.
          </p>

          <h5 className="text-sm font-semibold text-gray-300 mb-3">Program Benefits</h5>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {GBETA_BENEFITS.map((benefit) => (
              <Card key={benefit} variant="inner" padding="p-4">
                <div className="flex items-start gap-2">
                  <svg className="w-3.5 h-3.5 text-yellow-400 shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" />
                  </svg>
                  <p className="text-gray-400 text-xs leading-relaxed">{benefit}</p>
                </div>
              </Card>
            ))}
          </div>
        </Card>
      </div>

    </div>
  )
}
