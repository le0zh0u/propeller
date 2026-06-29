import { Link } from 'react-router-dom'

interface CTAButtonFilledProps {
  children: React.ReactNode
  to?: string
  href?: string
  onClick?: () => void
  className?: string
  fullWidth?: boolean
}

export function CTAButtonFilled({ children, to, href, onClick, className = '', fullWidth = false }: CTAButtonFilledProps) {
  const baseClass = `inline-flex items-center justify-center bg-brand-gradient text-white text-sm font-medium tracking-[0.02em] px-8 py-3.5 rounded-pill btn-glow active:scale-[0.97] transition-transform ${fullWidth ? 'w-full' : ''} ${className}`

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={baseClass}>
        {children}
      </a>
    )
  }

  if (to) {
    return (
      <Link to={to} className={baseClass}>
        {children}
      </Link>
    )
  }

  return (
    <button onClick={onClick} className={baseClass}>
      {children}
    </button>
  )
}

export function CTAButtonOutline({ children, to, href, onClick, className = '', fullWidth = false }: CTAButtonFilledProps) {
  const baseClass = `btn-gradient-outline text-white text-sm font-medium tracking-[0.02em] px-7 py-3 rounded-pill inline-flex items-center justify-center active:scale-[0.97] transition-transform ${fullWidth ? 'w-full' : ''} ${className}`

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={baseClass}>
        {children}
      </a>
    )
  }

  if (to) {
    return (
      <Link to={to} className={baseClass}>
        {children}
      </Link>
    )
  }

  return (
    <button onClick={onClick} className={baseClass}>
      {children}
    </button>
  )
}
