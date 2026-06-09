import Card from '../components/ui/Card'
import Tag from '../components/ui/Tag'
import PageHeader from '../components/ui/PageHeader'

const GITHUB_ICON = (
  <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2Z" clipRule="evenodd" />
  </svg>
)

function GitHubLink({ href }: { href: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-gray-700 bg-gray-800 text-gray-300 text-xs font-medium hover:border-cyan-500/50 hover:text-cyan-400 transition-colors"
    >
      {GITHUB_ICON}
      GitHub
    </a>
  )
}

export default function EducationPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-16 w-full">

      <PageHeader
        badge="Education"
        title="Academic Background"
        subtitle="Degrees, coursework, and research projects."
      />

      {/* Degree Card */}
      <Card padding="p-8" className="mb-8">
        <div className="flex items-start gap-5">
          <div className="w-14 h-14 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center shrink-0">
            <svg className="w-7 h-7 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 3.741-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
            </svg>
          </div>
          <div className="flex-1">
            <div className="flex flex-wrap items-start justify-between gap-3 mb-1">
              <h2 className="text-xl font-bold text-white">University of Delaware</h2>
              <span className="text-sm text-gray-500 font-medium">2020 – 2024</span>
            </div>
            <p className="text-cyan-400 font-semibold text-sm mb-1">4+1 Accelerated B.S./M.S. Program</p>
            <div className="space-y-1 mb-4">
              <p className="text-gray-300 text-sm">B.S. Computer Science — Concentration in Data Science</p>
              <p className="text-gray-300 text-sm">M.S. Data Science</p>
            </div>
            <div className="flex flex-wrap gap-2">
              <Tag variant="yellow" className="font-medium px-3 py-1">
                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                Dean&rsquo;s List — 5 Semesters (2020–2022)
              </Tag>
              <Tag className="font-medium px-3 py-1">Accelerated Graduate Track</Tag>
            </div>
          </div>
        </div>
      </Card>

      {/* ML & AI Coursework */}
      <Card padding="p-8" className="mb-8">
        <h3 className="text-lg font-bold text-white mb-1">Machine Learning &amp; AI Coursework</h3>
        <p className="text-gray-500 text-sm mb-6">Core technical skills developed through coursework and independent study.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            {
              label: 'Deep Learning Theory',
              detail: 'DNNs, CNNs, activation functions, loss landscapes, backpropagation from scratch using only NumPy operations.',
            },
            {
              label: 'ML Fundamentals',
              detail: 'Classification, regression, decision trees, SVMs, k-NN, ensemble methods, model evaluation and validation.',
            },
            {
              label: 'TensorFlow & PyTorch',
              detail: 'Built and trained models end-to-end: MLP, CNN, custom training loops, dropout, and optimizer tuning.',
            },
            {
              label: 'scikit-learn & Data Pipelines',
              detail: 'StandardScaler, KNN Imputer, one-hot encoding, train/test splits, and full preprocessing workflows.',
            },
          ].map(({ label, detail }) => (
            <Card key={label} variant="inner" padding="p-5">
              <h4 className="text-sm font-semibold text-white mb-1">{label}</h4>
              <p className="text-gray-500 text-xs leading-relaxed">{detail}</p>
            </Card>
          ))}
        </div>
      </Card>

      {/* Research & Presentations */}
      <div className="mb-8">
        <h3 className="text-lg font-bold text-white mb-4">Research &amp; Presentations</h3>
        <Card className="border-violet-500/25 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-48 h-48 bg-violet-500/5 rounded-full blur-3xl pointer-events-none" />

          <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
            <div className="flex items-start gap-3">
              <div className="mt-0.5 w-8 h-8 rounded-lg bg-violet-500/10 border border-violet-500/25 flex items-center justify-center shrink-0">
                <svg className="w-4 h-4 text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6" />
                </svg>
              </div>
              <div>
                <Tag variant="violet" className="font-semibold uppercase tracking-wide text-[10px] mb-1.5 pt-1">
                  Poster Presentation
                </Tag>
                <h4 className="text-base font-bold text-white leading-snug">
                  Zebra Shark Egg Shape Morphology Predicts Dam-Origin Using Machine Learning
                </h4>
                <p className="text-gray-500 text-xs mt-1">University of Delaware Data Science Symposium</p>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2 mb-4">
            {['Adam Kenney', 'Kady Lyons', 'Jennifer Wyffels'].map((name, i) => (
              <span key={name} className="flex items-center gap-2">
                <span className="text-gray-300 text-xs font-medium">{name}</span>
                {i < 2 && <span className="text-gray-700 text-lg">·</span>}
              </span>
            ))}
          </div>

          <p className="text-gray-400 text-sm leading-relaxed mb-5">
            Collaborated with my senior project mentors as part of the{' '}
            <span className="text-white font-medium">StAR Project</span> {' '}(Stegostoma tigrinum Augmentation &amp; Recovery),
            a global conservation effort to re-establish healthy zebra shark populations. Analyzed morphological measurements
            of 499 eggs from 23 females across 16 exhibits at 11 aquariums. Built a{' '}
            <span className="text-white font-medium">Random Forest classifier</span> to predict dam-origin from egg shape
            measurements, achieving <span className="text-green-400 font-semibold">99% accuracy</span> when institution
            and exhibit metadata were included, and{' '}
            <span className="text-yellow-400 font-semibold">91% accuracy</span> on morphology alone.
          </p>

          <div className="flex flex-wrap gap-2 mb-5">
            {['Python', 'scikit-learn', 'Random Forest', 'Power BI', 'Conservation ML', 'StAR Project'].map((tag) => (
              <Tag key={tag}>{tag}</Tag>
            ))}
          </div>

          <Card variant="inner" padding="p-4" className="border-cyan-500/15">
            <div className="flex items-start gap-3">
              <svg className="w-4 h-4 text-cyan-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
              <p className="text-gray-400 text-xs leading-relaxed">
                The Random Forest produced impressive results but required institution and exhibit metadata to reach peak accuracy.
                This raised a question: <span className="text-white font-medium">could a deep neural network match or exceed that accuracy on morphology alone?</span>{' '}
                The work was continued as a standalone DNN project — see <span className="text-cyan-400 font-medium">Shark Egg Female Predictor</span> below.
              </p>
            </div>
          </Card>
        </Card>
      </div>

      {/* Featured Projects */}
      <h3 className="text-lg font-bold text-white mb-4">Featured Academic Projects</h3>
      <div className="space-y-5">

        {/* Raytracer */}
        <Card>
          <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
            <div>
              <h4 className="text-base font-bold text-white">Parallel Raytracer</h4>
              <p className="text-gray-500 text-xs mt-0.5">Parallel Computing — HPC Project</p>
            </div>
            <GitHubLink href="https://github.com/AKenney31/Raytracer_project" />
          </div>
          <p className="text-gray-400 text-sm leading-relaxed mb-4">
            Parallelized an orthographic raytracer using OpenMP across multiple CPU cores and benchmarked it on the{' '}
            <span className="text-white font-medium">Bridges 2 supercomputer</span> at Pittsburgh Supercomputing Center.
            Scaled the scene from 800×800 to 10,000×10,000 pixels to stress-test serial vs. parallel speedup across
            2, 4, 8, and 16 cores.
          </p>
          <div className="flex flex-wrap gap-2">
            {['C++', 'OpenMP', 'HPC / Bridges 2', 'Raytracing', 'Parallel Computing'].map((tag) => (
              <Tag key={tag}>{tag}</Tag>
            ))}
          </div>
        </Card>

        {/* Shark Egg MLP */}
        <Card>
          <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
            <div>
              <h4 className="text-base font-bold text-white">Shark Egg Female Predictor</h4>
              <div className="flex items-center gap-2 mt-0.5">
                <p className="text-gray-500 text-xs">Neural Networks — Applied ML Project</p>
                <Tag variant="cyan" className="text-[10px] font-semibold uppercase tracking-wide pt-1">Continuation of Research</Tag>
              </div>
            </div>
            <GitHubLink href="https://github.com/AKenney31/shark_egg_neuralnetwork" />
          </div>
          <p className="text-gray-400 text-sm leading-relaxed mb-4">
            Extended the StAR Project research by implementing a <span className="text-white font-medium">TensorFlow MLP</span> to
            test whether a deep neural network could predict dam-origin from morphology alone — without relying on institution
            or exhibit metadata. The DNN <span className="text-green-400 font-medium">exceeded the Random Forest&rsquo;s standalone accuracy</span>,
            demonstrating that AI can be a powerful tool for analyzing and predicting shark egg origins purely from physical measurements.
            Engineered the full data pipeline (KNN imputation, StandardScaler, one-hot encoding) and systematically tuned
            network depth, neuron count (64–512), activation functions (ReLU vs. Swish), dropout rates (0.1–0.5),
            and optimizers (Adam, SGD, AdaGrad, Nadam) to reach the optimal architecture.
          </p>

          {/* Architecture visualization */}
          <Card variant="inner" padding="p-4" className="mb-4">
            <p className="text-gray-600 text-xs font-mono mb-3 uppercase tracking-widest">Model Architecture</p>
            <div className="flex items-center gap-2 flex-wrap text-xs">
              {[
                { label: 'Input',      sub: '20 features',         color: 'border-gray-700 text-gray-400' },
                { label: 'Dense 64',   sub: 'ReLU',                color: 'border-cyan-500/40 text-cyan-400' },
                { label: 'Dropout 0.2', sub: '',                   color: 'border-gray-700 text-gray-500' },
                { label: 'Dense 128',  sub: 'Swish',               color: 'border-cyan-500/40 text-cyan-400' },
                { label: 'Dropout 0.3', sub: '',                   color: 'border-gray-700 text-gray-500' },
                { label: 'Output',     sub: '20 classes · Softmax', color: 'border-violet-500/40 text-violet-400' },
              ].map((layer, i, arr) => (
                <div key={layer.label} className="flex items-center gap-2">
                  <div className={`rounded-lg border px-2.5 py-1.5 ${layer.color}`}>
                    <div className="font-semibold">{layer.label}</div>
                    {layer.sub && <div className="text-gray-600 text-[10px]">{layer.sub}</div>}
                  </div>
                  {i < arr.length - 1 && <span className="text-gray-700">→</span>}
                </div>
              ))}
            </div>
          </Card>

          <div className="flex flex-wrap gap-2">
            {['Python', 'TensorFlow', 'scikit-learn', 'Pandas', 'NumPy', 'MLP', '20-class Classification'].map((tag) => (
              <Tag key={tag}>{tag}</Tag>
            ))}
          </div>
        </Card>

      </div>
    </div>
  )
}
