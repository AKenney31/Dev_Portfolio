import Tag from './Tag'

interface PageHeaderProps {
  badge: string
  title: string
  subtitle: string
  badgeVariant?: 'cyan' | 'blue' | 'violet' | 'green' | 'yellow'
}

export default function PageHeader({ badge, title, subtitle, badgeVariant = 'cyan' }: PageHeaderProps) {
  return (
    <div className="mb-12 pt-1">
      <Tag variant={badgeVariant} className="font-medium tracking-wide uppercase mb-4">
        {badge}
      </Tag>
      <h1 className="text-4xl font-bold tracking-tight text-white">{title}</h1>
      <p className="mt-3 text-gray-400 text-lg">{subtitle}</p>
    </div>
  )
}
