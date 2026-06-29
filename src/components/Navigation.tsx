import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

const navLinks = [
  { path: '/', label: 'Homepage' },
  { path: '/compass', label: 'Compass' },
  { path: '/access', label: 'Access' },
  { path: '/growth', label: 'Growth' },
  { path: '/story', label: 'Our Story' },
]

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [location.pathname])

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 h-16 flex items-center justify-between transition-all duration-250 ${
          scrolled
            ? 'bg-abyss/[0.92] backdrop-blur-xl border-b border-white/[0.04]'
            : 'bg-transparent'
        }`}
        style={{ padding: '0 clamp(24px, 5vw, 80px)' }}
      >
        <Link
          to="/"
          className="text-white text-lg font-medium tracking-[0.08em] uppercase hover:text-brand-blue transition-colors duration-250 font-display"
        >
          PROPELLER
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm font-medium tracking-[0.02em] transition-all duration-250 ${
                location.pathname === link.path
                  ? 'text-white opacity-100 border-b-2 border-brand-blue pb-1'
                  : 'text-ash opacity-70 hover:opacity-100 hover:text-white'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden md:block">
          <Link
            to="/contact"
            className="btn-gradient-outline text-white text-sm font-medium tracking-[0.02em] px-6 py-2.5 rounded-pill inline-block"
          >
            Contact Us
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <div className="w-6 flex flex-col gap-1.5">
            <span className={`block h-0.5 bg-white transition-all duration-300 ${mobileOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block h-0.5 bg-white transition-all duration-300 ${mobileOpen ? 'opacity-0' : ''}`} />
            <span className={`block h-0.5 bg-white transition-all duration-300 ${mobileOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </div>
        </button>
      </nav>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 bg-abyss flex flex-col items-center justify-center gap-8 md:hidden">
          {navLinks.map((link, i) => (
            <Link
              key={link.path}
              to={link.path}
              className="text-h2 text-white opacity-0 animate-fade-in"
              style={{ animationDelay: `${i * 0.08}s`, animationFillMode: 'forwards' }}
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="btn-gradient-outline text-white text-lg font-medium px-8 py-3 rounded-pill mt-4 opacity-0 animate-fade-in"
            style={{ animationDelay: `${navLinks.length * 0.08}s`, animationFillMode: 'forwards' }}
          >
            Contact Us
          </Link>
        </div>
      )}

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fadeIn 0.4s ease forwards;
        }
      `}</style>
    </>
  )
}
