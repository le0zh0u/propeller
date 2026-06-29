import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import GradientCanvas from '../components/GradientCanvas'
import SectionHeading from '../components/SectionHeading'
import ServiceCard from '../components/ServiceCard'
import { CTAButtonFilled } from '../components/CTAButtons'

gsap.registerPlugin(ScrollTrigger)

const services = [
  {
    number: '01.',
    title: 'Fractional COO / CSO Support',
    body: 'Active on-the-ground management of China-related operations, including vendor coordination, supplier relationship management, quality-control follow-up, local team coordination, strategic partnership execution, and operational troubleshooting.',
  },
  {
    number: '02.',
    title: 'IP & Crisis Management',
    body: 'Proactive support for intellectual property protection, compliance awareness, and crisis response. This includes IP risk monitoring, partner behavior oversight, contract and compliance coordination with legal advisors, supply chain disruption response, sensitive communication management, and contingency planning.',
  },
  {
    number: '03.',
    title: 'Cross-Border Fundraising',
    body: 'We support fundraising and strategic investment processes by helping with pitch deck localization, investor targeting, strategic narrative development, introductions to USD funds, introductions to Chinese strategic investors and CVCs, due diligence coordination, and follow-up and negotiation support.',
  },
]

const risks = ['IP leakage', 'Supply chain disruptions', 'Poor vendor management', 'Misaligned expectations', 'Missed fundraising opportunities', 'Slow execution']

export default function GrowthPage() {
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = heroRef.current
    if (!el) return
    const tl = gsap.timeline()
    tl.from(el.querySelector('.hero-label'), { opacity: 0, duration: 0.5, delay: 0.2 })
      .from(el.querySelector('.hero-title'), { opacity: 0, y: 20, duration: 0.7 }, '-=0.2')
      .from(el.querySelector('.hero-sub'), { opacity: 0, duration: 0.5 }, '-=0.3')
      .from(el.querySelector('.hero-cta'), { opacity: 0, y: 10, duration: 0.4 }, '-=0.2')
    return () => { tl.kill() }
  }, [])

  return (
    <>
      {/* Hero */}
      <section className="relative w-full min-h-[70vh] flex items-center justify-center overflow-hidden grain-overlay">
        <GradientCanvas />
        <div ref={heroRef} className="relative z-10 text-center max-w-[800px] px-6">
          <p className="hero-label text-label text-brand-blue tracking-[0.12em] mb-4">GROWTH SERVICE</p>
          <h1 className="hero-title text-hero-display text-white font-display">
            Tailored Solutions. Seamless Connections.
          </h1>
          <p className="hero-sub text-body-large text-pearl mt-4 max-w-[600px] mx-auto">
            From strategic validation to cross-border execution.
          </p>
          <div className="hero-cta mt-8">
            <a href="#included" className="inline-flex items-center justify-center bg-brand-gradient text-white text-sm font-medium tracking-[0.02em] px-8 py-3.5 rounded-pill btn-glow active:scale-[0.97]">
              Explore Growth
            </a>
          </div>
        </div>
      </section>

      {/* China Acceleration */}
      <GrowthAcceleration />

      {/* Solution */}
      <GrowthSolution />

      {/* What's Included */}
      <section id="included" className="bg-abyss" style={{ padding: 'clamp(80px, 10vh, 160px) clamp(24px, 5vw, 80px)' }}>
        <div className="max-w-[1200px] mx-auto">
          <SectionHeading label="03. — SERVICES" title="What's Included" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-4">
            {services.map((s, i) => (
              <ServiceCard key={s.number} {...s} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Investment */}
      <GrowthInvestment />

      {/* CTA */}
      <section className="bg-brand-gradient-full animate-gradient-shimmer" style={{ padding: 'clamp(100px, 12vh, 160px) clamp(24px, 5vw, 80px)' }}>
        <div className="max-w-[700px] mx-auto text-center">
          <h2 className="text-h1 text-white">Ready to Execute With Trusted Local Support?</h2>
          <p className="text-body-large text-pearl/90 mt-4 max-w-[500px] mx-auto">
            Let's build your China operations together. We share the risk and align for success.
          </p>
          <div className="mt-8">
            <CTAButtonFilled to="/contact">Contact Us</CTAButtonFilled>
          </div>
        </div>
      </section>
    </>
  )
}

function GrowthAcceleration() {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const ctx = gsap.context(() => {
      gsap.from(el.querySelectorAll('.risk-tag'), { opacity: 0, duration: 0.4, stagger: 0.06, ease: 'power2.out', scrollTrigger: { trigger: el, start: 'top 80%' } })
      gsap.from(el.querySelector('.growth-img'), { scale: 1.02, opacity: 0, duration: 0.8, delay: 0.2, ease: 'power2.out', scrollTrigger: { trigger: el, start: 'top 80%' } })
    }, el)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={ref} className="bg-abyss" style={{ padding: 'clamp(80px, 10vh, 160px) clamp(24px, 5vw, 80px)' }}>
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-[55%_45%] gap-12 items-center">
        <div>
          <SectionHeading label="01. — CHINA ACCELERATION" title="A Smarter Way to Scale" />
          <div className="space-y-4 mt-2">
            <p className="text-body-large text-pearl">
              A 'soft landing' in China is often easier said than done. Sometimes, the smarter move is not to build everything from scratch, but to find the right local talent, partner, or operating structure to take the reins on the ground.
            </p>
            <p className="text-body-large text-pearl">
              We help overseas incubators, accelerators, laboratories, venture studios, and portfolio companies enter or engage China's market while also supporting access to China's latest technologies and innovation capabilities.
            </p>
            <h3 className="text-h3 text-white font-medium">The goal is leverage.</h3>
          </div>
          <div className="mt-8">
            <p className="text-label text-brand-blue mb-3">THE CHALLENGE: EXECUTION WITHOUT THE OVERHEAD</p>
            <p className="text-base text-pearl leading-relaxed">
              You have validated the opportunity and identified potential partners. But managing cross-border operations is a full-time job. Hiring a senior China team can be costly and risky. Operating without trusted local support can expose you to:
            </p>
            <div className="flex flex-wrap gap-2 mt-4">
              {risks.map((r) => (
                <span key={r} className="risk-tag flex items-center gap-1.5 text-sm text-slate">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-blue"></span>
                  {r}
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className="growth-img rounded-card overflow-hidden">
          <img src="/images/growth-visual.jpg" alt="Cross-border partnership" className="w-full h-auto" loading="lazy" />
        </div>
      </div>
    </section>
  )
}

function GrowthSolution() {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const ctx = gsap.context(() => {
      gsap.from(el.querySelector('.sol-content'), { y: 20, opacity: 0, duration: 0.7, ease: 'power2.out', scrollTrigger: { trigger: el, start: 'top 80%' } })
    }, el)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={ref} className="bg-ink" style={{ padding: 'clamp(80px, 10vh, 160px) clamp(24px, 5vw, 80px)' }}>
      <div className="max-w-[1200px] mx-auto text-center">
        <SectionHeading label="02. — THE SOLUTION" title="Alignment & Execution" align="center" />
        <div className="sol-content">
          <h2 className="text-h2 text-white max-w-[700px] mx-auto mt-4">
            PROPELLER acts as your fractional China leadership and execution partner. We do not only advise.{' '}
            <span className="text-brand-blue animate-glow-pulse">We execute.</span>
          </h2>
          <p className="text-body-large text-pearl max-w-[700px] mx-auto mt-5">
            We help manage day-to-day cross-border operations, coordinate vendors, support partner relationships, oversee risk, and align local execution with global strategy. By sharing risk and aligning success, we help you build the operational firewalls needed to protect your technology while maximizing your leverage in the local ecosystem.
          </p>
        </div>
      </div>
    </section>
  )
}

function GrowthInvestment() {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const ctx = gsap.context(() => {
      gsap.from(el.querySelectorAll('.inv-col'), { y: 20, opacity: 0, duration: 0.7, stagger: 0.1, ease: 'power2.out', scrollTrigger: { trigger: el, start: 'top 80%' } })
    }, el)
    return () => ctx.revert()
  }, [])

  const tags = ['High-growth ventures', 'AI & robotics', 'Industrial technology', 'Deep tech', 'China-side execution', 'Strategic partnerships', 'Risk mitigation', 'Fundraising support']

  return (
    <section ref={ref} className="bg-ink" style={{ padding: 'clamp(80px, 10vh, 160px) clamp(24px, 5vw, 80px)' }}>
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="inv-col">
          <p className="text-label text-brand-blue mb-3">INVESTMENT</p>
          <p className="text-h2 text-white">USD 5,000 – 8,000 per month</p>
          <p className="text-base text-pearl mt-2">Plus 3–5% success fee on funds raised or deals closed</p>
          <p className="text-base text-slate mt-1">Or strategic equity arrangement.</p>
        </div>
        <div className="inv-col">
          <p className="text-label text-brand-blue mb-3">BEST FOR</p>
          <div className="flex flex-wrap gap-2 mt-4">
            {tags.map((tag) => (
              <span key={tag} className="text-sm text-pearl bg-graphite px-4 py-2 rounded-pill">{tag}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
