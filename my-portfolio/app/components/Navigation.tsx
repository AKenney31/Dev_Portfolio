'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navLinks = [
  { href: '/education', label: 'Education' },
  { href: '/professional', label: 'Professional' },
  { href: '/ai-ml', label: 'AI / ML' },
  { href: '/olive', label: 'Olive App' },
  { href: '/voice-ai', label: 'Voice AI' },
  { href: '/nextgenai', label: 'NextGenAI 2026' },
]

export default function Navigation() {
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-black/20 backdrop-blur-md">
      <div className="mx-auto max-w-6xl px-6 flex h-16 items-center justify-between">
        <Link
          href="/"
          className="text-sm font-semibold tracking-wide text-gray-300 hover:text-white transition-colors duration-200"
        >
          Adam Kenney&nbsp;·&nbsp;Software Developer
        </Link>

        <nav className="flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive = pathname === link.href
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? 'bg-cyan-500/15 text-cyan-400 border border-cyan-500/40'
                    : 'text-gray-400 hover:text-white hover:bg-white/5 hover:shadow-[0_0_14px_rgba(34,211,238,0.15)]'
                }`}
              >
                {link.label}
              </Link>
            )
          })}
        </nav>
      </div>
    </header>
  )
}
