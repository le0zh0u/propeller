import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SectionHeading from '../../components/SectionHeading'

gsap.registerPlugin(ScrollTrigger)

const features = [
  '200,000+ global entrepreneur and innovation profiles',
  'Patent, financing, team, and company-change tracking',
  'Real-time monitoring of breakthrough technologies',
  'Smart alerts across priority technology sectors',
  'Company, founder, investor, and ecosystem mapping',
  'AI-powered insight generation for China-related innovation strategy',
]

export default function PlatformSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return

    const ctx = gsap.context(() => {
      gsap.from(el.querySelectorAll('.feature-item'), {
        x: -20,
        opacity: 0,
        duration: 0.5,
        stagger: 0.08,
        ease: 'power2.out',
        scrollTrigger: { trigger: el, start: 'top 80%' },
      })

      gsap.from(el.querySelector('.dashboard-img'), {
        x: 30,
        opacity: 0,
        duration: 0.8,
        delay: 0.3,
        ease: 'power2.out',
        scrollTrigger: { trigger: el, start: 'top 80%' },
      })
    }, el)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="bg-abyss" style={{ padding: 'clamp(80px, 10vh, 160px) clamp(24px, 5vw, 80px)' }}>
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-[55%_45%] gap-12 items-center">
        <div>
          <SectionHeading
            label="05. — TECHNOLOGY"
            title="Powered by a Digital Intelligence Platform"
            description="PROPELLER is building an AI-powered open-source intelligence platform designed to decode China's AI and robotics ecosystem for global businesses."
          />
          <div className="space-y-4 mt-6">
            {features.map((f, i) => (
              <div key={i} className="feature-item flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-graphite flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#3533CD" strokeWidth="2.5">
                    <path d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-base text-pearl leading-relaxed">{f}</p>
              </div>
            ))}
          </div>
          <p className="text-body-large text-slate italic mt-8">
            We believe that access begins with intelligence — and intelligence must be timely, contextual, and actionable.
          </p>
        </div>

        <div className="dashboard-img">
          <div
            className="rounded-card overflow-hidden border border-white/[0.06]"
            style={{
              boxShadow: '0 20px 60px rgba(0,0,0,0.4), 0 0 40px rgba(53, 51, 205, 0.08)',
              animation: 'floatDashboard 4s ease-in-out infinite',
            }}
          >
            <img
              src="/images/dashboard-mockup.jpg"
              alt="Digital Intelligence Platform Dashboard"
              className="w-full h-auto"
              loading="lazy"
            />
          </div>
        </div>
      </div>

      <style>{`
        @keyframes floatDashboard {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
      `}</style>
    </section>
  )
}
