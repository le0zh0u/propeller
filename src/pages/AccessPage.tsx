import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import GradientCanvas from '../components/GradientCanvas'
import SectionHeading from '../components/SectionHeading'
import ServiceCard from '../components/ServiceCard'
import { CTAButtonFilled } from '../components/CTAButtons'

gsap.registerPlugin(ScrollTrigger)

const questions = [
  'Which factories or suppliers are truly capable?',
  'Who are the actual decision-makers?',
  'Which companies are open to international collaboration?',
  'Which opportunities are real, and which are simply PR?',
  'How do you negotiate across cultural, operational, and legal differences?',
]

const deliverables = [
  {
    number: '01.',
    title: 'Curated Executive Expedition',
    body: 'A carefully designed itinerary based on your strategic priorities, including factory deep-dives, supplier audits, technology company visits, founder and executive meetings, investor or client introductions, university or lab visits, and ecosystem briefings.',
  },
  {
    number: '02.',
    title: "'China Speed' Closed-Door Workshops",
    body: 'Private, off-the-record sessions with leading Chinese AI, robotics, smart manufacturing, and deep tech founders, operators, and technical experts. These workshops provide practical insight into technology commercialization, supply chain execution, product iteration cycles, competitive dynamics, partnership logic, and local market expectations.',
  },
  {
    number: '03.',
    title: 'Agile Vetting & Negotiation Support',
    body: 'We conduct deep background checks on 2–3 core potential partners and support your team throughout early-stage negotiation. Support includes partner credibility assessment, strategic positioning, cross-cultural communication, NDA and LOI facilitation, meeting preparation, follow-up coordination, and risk and expectation alignment.',
  },
]

export default function AccessPage() {
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
        <div ref={heroRef} className="relative z-10 text-center max-w-[900px] px-6">
          <p className="hero-label text-label text-brand-blue tracking-[0.12em] mb-4">ACCESS SERVICE</p>
          <h1 className="hero-title text-hero-display text-white font-display">
            Skip the PR Tours. Parachute into the Inner Circle.
          </h1>
          <p className="hero-sub text-body-large text-pearl mt-4 max-w-[600px] mx-auto">
            Direct access to vetted decision-makers, technical experts, and real ecosystem operators.
          </p>
          <div className="hero-cta mt-8">
            <a href="#included" className="inline-flex items-center justify-center bg-brand-gradient text-white text-sm font-medium tracking-[0.02em] px-8 py-3.5 rounded-pill btn-glow active:scale-[0.97]">
              Explore Access
            </a>
          </div>
        </div>
      </section>

      {/* Challenge */}
      <AccessChallenge />

      {/* Solution */}
      <AccessSolution />

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
      <AccessInvestment />

      {/* CTA */}
      <section className="bg-brand-gradient-full animate-gradient-shimmer" style={{ padding: 'clamp(100px, 12vh, 160px) clamp(24px, 5vw, 80px)' }}>
        <div className="max-w-[700px] mx-auto text-center">
          <h2 className="text-h1 text-white">Ready to Enter the Inner Circle?</h2>
          <p className="text-body-large text-pearl/90 mt-4 max-w-[500px] mx-auto">
            Let's design your executive expedition. Every itinerary is built around your strategic priorities.
          </p>
          <div className="mt-8">
            <CTAButtonFilled to="/contact">Contact Us</CTAButtonFilled>
          </div>
        </div>
      </section>
    </>
  )
}

function AccessChallenge() {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const ctx = gsap.context(() => {
      gsap.from(el.querySelectorAll('.q-item'), { x: -15, opacity: 0, duration: 0.5, stagger: 0.08, ease: 'power2.out', scrollTrigger: { trigger: el, start: 'top 80%' } })
      gsap.from(el.querySelector('.access-img'), { scale: 1.02, opacity: 0, duration: 0.8, delay: 0.2, ease: 'power2.out', scrollTrigger: { trigger: el, start: 'top 80%' } })
    }, el)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={ref} className="bg-abyss" style={{ padding: 'clamp(80px, 10vh, 160px) clamp(24px, 5vw, 80px)' }}>
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-[55%_45%] gap-12 items-center">
        <div>
          <SectionHeading label="01. — THE CHALLENGE" title="Accessing the Real Ecosystem" />
          <p className="text-body-large text-pearl mt-2">
            You may already know that China's supply chains, engineering talent, AI applications, robotics companies, and manufacturing capabilities can accelerate your global competitiveness. But identifying the right partner is difficult.
          </p>
          <h3 className="text-h3 text-white font-medium mt-6">You do not need a tour guide. You need an insider.</h3>
          <div className="mt-6 space-y-4">
            {questions.map((q, i) => (
              <div key={i} className="q-item flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-blue flex-shrink-0 mt-2"></span>
                <p className="text-base text-white font-medium">{q}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="access-img rounded-card overflow-hidden">
          <img src="/images/access-challenge-visual.jpg" alt="Executive meeting" className="w-full h-auto" loading="lazy" />
        </div>
      </div>
    </section>
  )
}

function AccessSolution() {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const ctx = gsap.context(() => {
      gsap.from(el.querySelector('.sol-body'), { y: 20, opacity: 0, duration: 0.7, ease: 'power2.out', scrollTrigger: { trigger: el, start: 'top 80%' } })
      gsap.from(el.querySelectorAll('.outcome-badge'), { scale: 0.9, opacity: 0, duration: 0.5, stagger: 0.1, delay: 0.3, ease: 'power2.out', scrollTrigger: { trigger: el, start: 'top 80%' } })
    }, el)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={ref} className="bg-ink" style={{ padding: 'clamp(80px, 10vh, 160px) clamp(24px, 5vw, 80px)' }}>
      <div className="max-w-[1200px] mx-auto text-center">
        <SectionHeading label="02. — THE SOLUTION" title="Agile Sourcing & Technology Transfer" align="center" />
        <p className="sol-body text-body-large text-pearl max-w-[700px] mx-auto mt-4">
          PROPELLER Access is built for on-the-ground execution. We leverage our deep roots in the Yangtze River Delta, China's leading technology hubs, and top-tier industry networks to help clients bypass surface-level introductions and reach relevant decision-makers. We act as your local advisor, ecosystem translator, and negotiation partner. Our goal is to help you leave China with more than impressions — with concrete next steps, qualified partners, signed NDAs, LOIs, or a clear execution path.
        </p>
        <div className="flex flex-wrap gap-3 justify-center mt-8">
          {['Concrete next steps', 'Qualified partners', 'Signed NDAs & LOIs'].map((badge) => (
            <span key={badge} className="outcome-badge bg-brand-blue text-white text-sm font-medium px-5 py-2.5 rounded-pill">
              {badge}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

function AccessInvestment() {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const ctx = gsap.context(() => {
      gsap.from(el.querySelectorAll('.inv-col'), { y: 20, opacity: 0, duration: 0.7, stagger: 0.1, ease: 'power2.out', scrollTrigger: { trigger: el, start: 'top 80%' } })
    }, el)
    return () => ctx.revert()
  }, [])

  const tags = ['Scaleups', 'Executives', 'Corporate innovation teams', 'Investors', 'Ecosystem leaders', 'Agile sourcing', 'Technology transfer', 'Strategic partnerships']

  return (
    <section ref={ref} className="bg-ink" style={{ padding: 'clamp(80px, 10vh, 160px) clamp(24px, 5vw, 80px)' }}>
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="inv-col">
          <p className="text-label text-brand-blue mb-3">INVESTMENT</p>
          <p className="text-h1 text-white">Starting from USD 15,000</p>
          <p className="text-base text-slate mt-2">Project fee. Travel and related expenses excluded.</p>
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
