import ChatInterface from './components/ChatInterface'

export default function Home() {
  return (
    <div className="flex flex-col items-center px-6 py-20 gap-12">
      <section className="text-center flex flex-col items-center gap-4">
        <h1 className="text-5xl font-black tracking-tight">
          {'Welcome to my portfolio'.split('').map((char, i) => (
            <span
              key={i}
              className="wave-letter"
              style={{ animationDelay: `${i * 0.07}s` }}
            >
              {char === ' ' ? ' ' : char}
            </span>
          ))}
        </h1>
        <p className="text-sm font-semibold tracking-[0.25em] uppercase text-cyan-400">
          AI &nbsp;·&nbsp; Full-Stack &nbsp;·&nbsp; Mobile &nbsp;·&nbsp; Voice &nbsp;·&nbsp; Data Science
        </p>
      </section>

      <section className="w-full flex items-center justify-center gap-3">
        <ChatInterface />
      </section>
    </div>
  )
}
