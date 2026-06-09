import { ReactNode } from 'react'

type CardVariant = 'default' | 'inner'

const variantBase: Record<CardVariant, string> = {
  default: 'rounded-2xl border border-gray-800 bg-gray-900',
  inner:   'rounded-xl border border-gray-800 bg-gray-950',
}

interface CardProps {
  children: ReactNode
  variant?: CardVariant
  padding?: string
  /** Extra Tailwind classes — use to override border color, add glow, etc. */
  className?: string
}

export default function Card({ children, variant = 'default', padding = 'p-7', className = '' }: CardProps) {
  return (
    <div className={`${variantBase[variant]} ${padding} ${className}`}>
      {children}
    </div>
  )
}
