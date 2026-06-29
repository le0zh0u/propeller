import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import GradientCanvas from '../components/GradientCanvas'
import SectionHeading from '../components/SectionHeading'
import ServiceCard from '../components/ServiceCard'
import { CTAButtonFilled } from '../components/CTAButtons'

gsap.registerPlugin(ScrollTrigger)

const questions = [
  'Is your technology relevant to the Chinese market?',
  'Is the supply chain ready to support your product?',
  'Are there credible partners worth engaging?',
  'What regulatory, IP, or geopolitical risks should you watch?',
  'Is China a market, a manufacturing base, a technology source, or a strategic partner for your business?',
]

const deliverables = [
  {
    number: '01.',
    title: 'Market Reality Check Deck',
    body: 'A customized strategic briefing covering immediate market opportunities, technology readiness levels, competitive landscape signals, relevant supply chain conditions, potential regulatory or geopolitical risks, and key assumptions to validate before market entry.',
  },
  {
    number: '02.',
    title: 'Vetted Partner Long-List',
    body: "A curated list of 3–5 relevant upstream or downstream companies, suppliers, technology partners, investors, or ecosystem players. Each recommendation includes a strategic 'Why Them' analysis, helping you understand the relevance, credibility, and potential fit of each target.",
  },
  {
    number: '03.',
    title: '90-Minute Roadmap Session',
    body: 'A deep-dive consultation with PROPELLER senior partners. Together, we review your goals, discuss key findings, pressure-test your assumptions, and define a practical cross-border execution roadmap.',
  },
]

export default function CompassPage() {
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
          <p className="hero-label text-label text-brand-blue tracking-[0.12em] mb-4">COMPASS SERVICE</p>
          <h1 className="hero-title text-hero-display text-white font-display">
            Before You Invest Millions, Invest 90 Minutes.
          </h1>
          <p className="hero-sub text-body-large text-pearl mt-4 max-w-[600px] mx-auto">
            Get an unfiltered, zero-fluff reality check on China's AI and robotics ecosystem.
          </p>
          <div className="hero-cta mt-8">
            <a href="#included" className="inline-flex items-center justify-center bg-brand-gradient text-white text-sm font-medium tracking-[0.02em] px-8 py-3.5 rounded-pill btn-glow active:scale-[0.97]">
              Get Started
            </a>
          </div>
        </div>
      </section>

      {/* Challenge */}
      <ChallengeSection />

      {/* Solution */}
      <SolutionSection />

      {/* What's Included */}
      <section id="included" className="bg-abyss" style={{ padding: 'clamp(80px, 10vh, 160px) clamp(24px, 5vw, 80px)' }}>
        <div className="max-w-[1200px] mx-auto">
          <SectionHeading label="03. — DELIVERABLES" title="What's Included" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-4">
            {deliverables.map((d, i) => (
              <ServiceCard key={d.number} {...d} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Investment */}
      <InvestmentSection />

      {/* Platform Teaser */}
      <section className="bg-abyss" style={{ padding: 'clamp(80px, 10vh, 160px) clamp(24px, 5vw, 80px)' }}>
        <div className="max-w-[800px] mx-auto text-center">
          <h2 className="text-h2 text-white">Open-Source Intelligence Platform</h2>
          <p className="text-base text-slate mt-4 max-w-[600px] mx-auto">
            We are building an AI-powered open-source intelligence platform to decode China's AI and robotics ecosystem for global businesses. The platform will provide real-time insights, actionable intelligence, company tracking, technology monitoring, and ecosystem mapping.
          </p>
          <p className="text-body-large text-pearl mt-6">Subscribe to our newsletter to stay updated.</p>
          <div className="mt-6">
            <a href="https://mingai01.substack.com/" target="_blank" rel="noopener noreferrer" className="btn-gradient-outline text-white text-sm font-medium tracking-[0.02em] px-7 py-3 rounded-pill inline-flex items-center justify-center active:scale-[0.97]">
              Subscribe on Substack
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-gradient-full animate-gradient-shimmer" style={{ padding: 'clamp(100px, 12vh, 160px) clamp(24px, 5vw, 80px)' }}>
        <div className="max-w-[700px] mx-auto text-center">
          <h2 className="text-h1 text-white">Ready to De-Risk Your China Strategy?</h2>
          <p className="text-body-large text-pearl/90 mt-4 max-w-[500px] mx-auto">
            Let's start with a conversation. No pitch, no pressure — just clarity.
          </p>
          <div className="mt-8">
            <CTAButtonFilled to="/contact">Contact Us</CTAButtonFilled>
          </div>
        </div>
      </section>
    </>
  )
}

function ChallengeSection() {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const ctx = gsap.context(() => {
      gsap.from(el.querySelectorAll('.q-item'), {
        x: -15, opacity: 0, duration: 0.5, stagger: 0.08, ease: 'power2.out',
        scrollTrigger: { trigger: el, start: 'top 80%' },
      })
      gsap.from(el.querySelector('.challenge-img'), {
        scale: 1.02, opacity: 0, duration: 0.8, delay: 0.2, ease: 'power2.out',
        scrollTrigger: { trigger: el, start: 'top 80%' },
      })
    }, el)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={ref} className="bg-abyss" style={{ padding: 'clamp(80px, 10vh, 160px) clamp(24px, 5vw, 80px)' }}>
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-[55%_45%] gap-12 items-center">
        <div>
          <SectionHeading label="01. — THE CHALLENGE" title="Navigating the Noise" />
          <div className="space-y-4 mt-2">
            <p className="text-body-large text-pearl">
              To the outside world, China's technology ecosystem is often obscured by media noise, PR narratives, fragmented information, and complex geopolitical interpretations. For global tech founders and investors, the biggest risk is not always moving too slowly. It is moving in the wrong direction.
            </p>
            <p className="text-body-large text-pearl">
              Without reliable local intelligence, the cost of trial and error can be significant. You need to know whether your assumptions hold up before committing serious resources.
            </p>
          </div>
          <div className="mt-6 space-y-4">
            {questions.map((q, i) => (
              <div key={i} className="q-item flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-blue flex-shrink-0 mt-2"></span>
                <p className="text-base text-white font-medium">{q}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="challenge-img rounded-card overflow-hidden">
          <img src="/images/challenge-visual.jpg" alt="Navigating the noise" className="w-full h-auto" loading="lazy" />
        </div>
      </div>
    </section>
  )
}

function SolutionSection() {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const ctx = gsap.context(() => {
      gsap.from(el.querySelector('.sol-statement'), { y: 20, opacity: 0, duration: 0.6, ease: 'power2.out', scrollTrigger: { trigger: el, start: 'top 80%' } })
      gsap.from(el.querySelectorAll('.commit-card'), { y: 30, opacity: 0, duration: 0.7, stagger: 0.12, delay: 0.3, ease: 'power2.out', scrollTrigger: { trigger: el, start: 'top 80%' } })
    }, el)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={ref} className="bg-ink" style={{ padding: 'clamp(80px, 10vh, 160px) clamp(24px, 5vw, 80px)' }}>
      <div className="max-w-[1200px] mx-auto">
        <SectionHeading label="02. — THE SOLUTION" title="Strategic De-Risking" align="center" />
        <p className="sol-statement text-h2 text-white text-center max-w-[700px] mx-auto mt-4">
          China Compass is your low-risk, high-impact entry point. We do not provide generic market reports. We deliver a focused diagnostic of your specific niche, business model, and strategic questions.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
          {[
            'If your product is not a fit, we will tell you.',
            'If the opportunity is real, we will help you see where to begin.',
            'If the risks outweigh the potential upside, we will help you avoid unnecessary cost.',
          ].map((text, i) => (
            <div key={i} className="commit-card bg-graphite rounded-card p-7 text-center border-t-2 border-brand-blue">
              <p className="text-base text-pearl">{text}</p>
            </div>
          ))}
        </div>
        <p className="text-body-large text-slate text-center max-w-[560px] mx-auto mt-10">
          The goal is simple: help you make a smarter decision before making a larger commitment.
        </p>
      </div>
    </section>
  )
}

function InvestmentSection() {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const ctx = gsap.context(() => {
      gsap.from(el.querySelectorAll('.inv-col'), { y: 20, opacity: 0, duration: 0.7, stagger: 0.1, ease: 'power2.out', scrollTrigger: { trigger: el, start: 'top 80%' } })
    }, el)
    return () => ctx.revert()
  }, [])

  const tags = ['Early-stage exploration', 'Market validation', 'Strategic de-risking', 'First-step China strategy']

  return (
    <section ref={ref} className="bg-ink" style={{ padding: 'clamp(80px, 10vh, 160px) clamp(24px, 5vw, 80px)' }}>
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="inv-col">
          <p className="text-label text-brand-blue mb-3">INVESTMENT</p>
          <p className="text-h1 text-white">USD 3,000 – 5,000</p>
          <p className="text-base text-slate mt-2">One-time engagement fee. No hidden costs.</p>
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
