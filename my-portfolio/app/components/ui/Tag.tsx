import { ReactNode } from 'react'

type TagVariant = 'default' | 'cyan' | 'yellow' | 'violet' | 'green' | 'blue'

const variantClasses: Record<TagVariant, string> = {
  default: 'bg-gray-800 border-gray-700 text-gray-400',
  cyan:    'bg-cyan-500/10 border-cyan-500/30 text-cyan-400',
  yellow:  'bg-yellow-500/10 border-yellow-500/25 text-yellow-400',
  violet:  'bg-violet-500/10 border-violet-500/25 text-violet-400',
  green:   'bg-green-500/10 border-green-500/25 text-green-400',
  blue:    'bg-blue-500/10 border-blue-500/25 text-blue-400',
}

export interface TagProps {
  children: ReactNode
  variant?: TagVariant
  /** Extra Tailwind classes — use for size, font, spacing overrides */
  className?: string
}

export default function Tag({ children, variant = 'default', className = '' }: TagProps) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full border text-xs ${variantClasses[variant]} ${className}`}
    >
      {children}
    </span>
  )
}
