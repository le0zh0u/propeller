import { Link } from 'react-router-dom'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const serviceLinks = [
  { path: '/compass', label: 'Compass' },
  { path: '/access', label: 'Access' },
  { path: '/growth', label: 'Growth' },
  { path: '/story', label: 'Our Story' },
]

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = footerRef.current
    if (!el) return

    const ctx = gsap.context(() => {
      gsap.from(el.querySelectorAll('.footer-animate'), {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: 'cubic-bezier(0.16, 1, 0.3, 1)',
        stagger: 0.1,
        scrollTrigger: {
          trigger: el,
          start: 'top 80%',
        },
      })
    }, el)

    return () => ctx.revert()
  }, [])

  return (
    <footer ref={footerRef} className="bg-ink w-full" style={{ padding: '80px clamp(24px, 5vw, 80px)' }}>
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {/* Brand */}
          <div className="footer-animate">
            <Link to="/" className="text-white text-lg font-medium tracking-[0.08em] uppercase font-display">
              PROPELLER
            </Link>
            <p className="mt-4 text-slate text-base leading-relaxed">
              Cross-Border Innovation Studio for AI, Robotics & Venture Building.
            </p>
          </div>

          {/* Services */}
          <div className="footer-animate">
            <p className="text-label text-brand-blue mb-4">SERVICES</p>
            <div className="flex flex-col gap-3">
              {serviceLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-sm text-slate hover:text-white transition-colors duration-250"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Connect */}
          <div className="footer-animate">
            <p className="text-label text-brand-blue mb-4">CONNECT</p>
            <a
              href="mailto:business@globalpropeller.com"
              className="text-sm text-slate hover:text-white transition-colors duration-250 link-underline inline-block"
            >
              business@globalpropeller.com
            </a>
            <div className="flex gap-4 mt-4">
              <a
                href="https://www.linkedin.com/company/globalpropeller/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate hover:text-brand-blue transition-colors duration-250"
                aria-label="LinkedIn"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a
                href="https://www.youtube.com/channel/UCba9zv7ESBKjyayDc6CNekQ"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate hover:text-brand-blue transition-colors duration-250"
                aria-label="YouTube"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
              <a
                href="https://mingai01.substack.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate hover:text-brand-blue transition-colors duration-250"
                aria-label="Substack"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22.539 8.242H1.46V5.406h21.08v2.836zM1.46 10.812V24L12 18.11 22.54 24V10.812H1.46zM22.54 0H1.46v2.836h21.08V0z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/[0.06] mt-12 pt-8">
          <p className="font-mono text-xs text-slate text-center">
            &copy; 2026 PROPELLER. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
