import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { CTAButtonOutline } from '../components/CTAButtons'

gsap.registerPlugin(ScrollTrigger)

export default function StoryPage() {
  return (
    <>
      <StoryHero />
      <OriginStory />
      <BiodiversitySection />
      <Building20Section />
      <WhyPropellerSection />
      <OperatingSystemSection />
      <StoryCTA />
    </>
  )
}

function StoryHero() {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const tl = gsap.timeline()
    tl.from(el.querySelector('.hero-label'), { opacity: 0, duration: 0.5, delay: 0.3 })
      .from(el.querySelector('.hero-title'), { opacity: 0, y: 20, duration: 0.7 }, '-=0.2')
      .from(el.querySelector('.hero-tagline'), { opacity: 0, duration: 0.5 }, '-=0.3')
    return () => { tl.kill() }
  }, [])

  return (
    <section ref={ref} className="relative w-full min-h-[100dvh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="/images/story-hero.jpg"
          alt="Ocean propeller"
          className="w-full h-full object-cover animate-ken-burns"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/70" />
      </div>
      <div className="relative z-10 text-center max-w-[800px] px-6">
        <p className="hero-label text-label text-white/70 tracking-[0.12em] mb-4">OUR STORY</p>
        <h1 className="hero-title text-hero-display text-white font-display">
          Propelling Cross-Border Innovation
        </h1>
        <p className="hero-tagline text-h2 text-pearl italic mt-4">
          Because competent ideas refuse to stay in their lane.
        </p>
      </div>
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce-chevron">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5">
          <path d="M6 9l6 6 6-6" />
        </svg>
      </div>
    </section>
  )
}

function OriginStory() {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const ctx = gsap.context(() => {
      gsap.from(el.querySelectorAll('.story-para'), { y: 20, opacity: 0, duration: 0.7, stagger: 0.15, ease: 'power2.out', scrollTrigger: { trigger: el, start: 'top 80%' } })
      gsap.from(el.querySelector('.story-divider'), { scaleX: 0, duration: 0.5, ease: 'power2.out', scrollTrigger: { trigger: el, start: 'top 80%' } })
    }, el)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={ref} className="bg-abyss" style={{ padding: '120px clamp(24px, 5vw, 80px) 80px' }}>
      <div className="max-w-[700px] mx-auto text-center">
        <p className="story-para text-body-large text-pearl">
          Some say the fish never existed, yet its legend swims on — a creature so elusive that it forced us to reconsider the entire food chain.
        </p>
        <p className="story-para text-body-large text-pearl mt-6">
          That myth taught us two things: nature always runs its own operating system, and real innovation happens when we delete the borders from the map.
        </p>
        <p className="story-para text-body-large text-white font-medium mt-6">
          In chasing that phantom fin, we discovered our own cross-border innovation formula. That spark became PROPELLER.
        </p>
        <div className="story-divider w-[60px] h-px bg-brand-blue/40 mx-auto mt-12" />
      </div>
    </section>
  )
}

function BiodiversitySection() {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const ctx = gsap.context(() => {
      gsap.from(el.querySelectorAll('.pos-line'), { x: -20, opacity: 0, duration: 0.6, stagger: 0.2, ease: 'power2.out', scrollTrigger: { trigger: el, start: 'top 80%' } })
      gsap.from(el.querySelector('.bio-img'), { scale: 1.03, opacity: 0, duration: 0.8, ease: 'power2.out', scrollTrigger: { trigger: el, start: 'top 80%' } })
    }, el)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={ref} className="bg-ink" style={{ padding: 'clamp(80px, 10vh, 160px) clamp(24px, 5vw, 80px)' }}>
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-label text-brand-blue mb-3">PHILOSOPHY</p>
          <h2 className="text-h1 text-white">Innovation Needs Biodiversity</h2>
          <div className="space-y-4 mt-4">
            <p className="text-body-large text-pearl">
              Like any thriving reef, a resilient future demands diversity. We borrow from the open-source ethos: code, coral, and crazy ideas all become stronger when shared.
            </p>
            <p className="text-body-large text-pearl">
              When different industries, cultures, technologies, and perspectives flow into the same tidepool, ideas collide, disciplines intermingle, and new species of solutions begin to evolve — often in ways no one could have planned.
            </p>
          </div>
          <div className="mt-8 space-y-2">
            <p className="pos-line text-h3 text-white">That is where we like to operate.</p>
            <p className="pos-line text-h3 text-white">At the edge of disciplines.</p>
            <p className="pos-line text-h3 text-white">At the intersection of markets.</p>
          </div>
          <p className="text-body-large text-brand-blue italic mt-4">
            In the productive turbulence where new possibilities emerge.
          </p>
        </div>
        <div className="bio-img rounded-card overflow-hidden">
          <img src="/images/biodiversity-visual.jpg" alt="Innovation biodiversity" className="w-full h-auto" loading="lazy" />
        </div>
      </div>
    </section>
  )
}

function Building20Section() {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const ctx = gsap.context(() => {
      gsap.from(el.querySelector('.b20-img'), { scale: 1.02, opacity: 0, duration: 0.9, ease: 'power2.out', scrollTrigger: { trigger: el, start: 'top 80%' } })
      gsap.from(el.querySelector('.b20-text'), { y: 20, opacity: 0, duration: 0.7, delay: 0.3, ease: 'power2.out', scrollTrigger: { trigger: el, start: 'top 80%' } })
    }, el)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={ref} className="bg-abyss" style={{ padding: 'clamp(80px, 10vh, 160px) clamp(24px, 5vw, 80px)' }}>
      <div className="max-w-[1200px] mx-auto">
        <div className="b20-img relative rounded-card overflow-hidden aspect-video">
          <img src="/images/building-20.jpg" alt="MIT Building 20" className="w-full h-full object-cover" loading="lazy" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <p className="absolute bottom-6 left-6 text-label text-white/80">
            MIT Building 20 — the legendary 'magical incubator'
          </p>
        </div>
        <div className="b20-text max-w-[700px] mt-10">
          <p className="text-body-large text-pearl">
            Our spiritual mascot is MIT's Building 20 — the legendary 'magical incubator' where linguists, acoustics pioneers, engineers, hackers, and unconventional thinkers helped reinvent parts of the modern world simply because no one told them to stay in their lane.
          </p>
          <p className="text-body-large text-pearl mt-4">
            Building 20 proved that when cultures, crafts, and curiosities mix inside one unfiltered environment, breakthroughs can emerge faster than any formal plan could predict.{' '}
            <strong className="text-white font-medium">That spirit lives at the heart of PROPELLER.</strong>
          </p>
        </div>
      </div>
    </section>
  )
}

function WhyPropellerSection() {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const ctx = gsap.context(() => {
      el.querySelectorAll('.principle-band').forEach((band, i) => {
        const fromX = i === 0 ? -40 : i === 1 ? 40 : 0
        const fromY = i === 2 ? 30 : 0
        gsap.from(band, {
          x: fromX, y: fromY, opacity: 0, duration: 0.8,
          delay: i * 0.2, ease: 'cubic-bezier(0.16, 1, 0.3, 1)',
          scrollTrigger: { trigger: band, start: 'top 85%' },
        })
      })
    }, el)
    return () => ctx.revert()
  }, [])

  const principles = [
    { num: '01', title: 'It pulls in diverse currents.', body: 'We bring together perspectives, technologies, people, and opportunities from different markets and disciplines.', gradient: 'linear-gradient(90deg, rgba(53,51,205,0.1) 0%, transparent 60%)' },
    { num: '02', title: 'It swirls them into productive turbulence.', body: 'We create the conditions for unexpected combinations, strategic collisions, and meaningful collaboration.', gradient: 'linear-gradient(90deg, transparent 40%, rgba(53,51,205,0.1) 100%)' },
    { num: '03', title: 'It drives the vessel forward.', body: 'We turn curiosity into action, insight into execution, and cross-border complexity into momentum.', gradient: 'radial-gradient(ellipse at center, rgba(53,51,205,0.1) 0%, transparent 70%)' },
  ]

  return (
    <section ref={ref} className="bg-ink" style={{ padding: 'clamp(80px, 10vh, 160px) clamp(24px, 5vw, 80px)' }}>
      <div className="max-w-[1200px] mx-auto">
        <p className="text-label text-brand-blue mb-3">THE METAPHOR</p>
        <h2 className="text-h1 text-white">Why Propeller?</h2>
        <p className="text-body-large text-slate mt-3">A propeller does three things:</p>
        <div className="space-y-0 mt-10">
          {principles.map((p) => (
            <div key={p.num} className="principle-band relative py-12 px-6 md:px-10" style={{ background: p.gradient }}>
              <span className="absolute top-4 right-6 font-display text-[72px] text-brand-blue/20 leading-none">{p.num}</span>
              <h3 className="text-h2 text-white relative z-10">{p.title}</h3>
              <p className="text-body-large text-pearl max-w-[600px] mt-3 relative z-10">{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function OperatingSystemSection() {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const ctx = gsap.context(() => {
      gsap.from(el.querySelector('.os-statement'), { y: 20, opacity: 0, duration: 0.7, ease: 'power2.out', scrollTrigger: { trigger: el, start: 'top 80%' } })
      gsap.from(el.querySelector('.os-slogan'), { y: 20, opacity: 0, duration: 0.6, delay: 0.3, ease: 'power2.out', scrollTrigger: { trigger: el, start: 'top 80%' } })
      gsap.from(el.querySelector('.os-final'), { y: 15, opacity: 0, duration: 0.5, delay: 0.5, ease: 'power2.out', scrollTrigger: { trigger: el, start: 'top 80%' } })
    }, el)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={ref} className="bg-brand-gradient-full animate-gradient-shimmer" style={{ padding: 'clamp(100px, 15vh, 200px) clamp(24px, 5vw, 80px)' }}>
      <div className="max-w-[800px] mx-auto text-center">
        <p className="os-statement text-body-large text-white leading-[1.8]">
          Swap 'currents' for 'ideas,' and you have our operating system. PROPELLER absorbs perspectives from every culture and vertical, agitates them through open collaboration, and turns them into solutions for a healthier, more sustainable, and more connected future.
        </p>
        <h2 className="os-slogan font-display text-[clamp(28px,4vw,48px)] text-white tracking-tight mt-10 animate-glow-pulse">
          Let's Make Waves, Not Walls.
        </h2>
        <p className="os-final text-base text-pearl/80 mt-4">
          Let's be the propeller that turns cross-border curiosity into tomorrow's breakthroughs.
        </p>
      </div>
    </section>
  )
}

function StoryCTA() {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const ctx = gsap.context(() => {
      gsap.from(el.querySelectorAll('.cta-item'), { y: 20, opacity: 0, duration: 0.7, stagger: 0.1, ease: 'power2.out', scrollTrigger: { trigger: el, start: 'top 80%' } })
    }, el)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={ref} className="bg-abyss" style={{ padding: 'clamp(80px, 10vh, 160px) clamp(24px, 5vw, 80px)' }}>
      <div className="max-w-[800px] mx-auto text-center">
        <h2 className="cta-item text-h1 text-white">Let's Build the Future, Together.</h2>
        <p className="cta-item text-body-large text-pearl mt-4 max-w-[500px] mx-auto">
          Whether you're exploring China's ecosystem or ready to dive in, we'd love to hear what you're building.
        </p>
        <div className="cta-item mt-8">
          <CTAButtonOutline to="/contact">Get in Touch</CTAButtonOutline>
        </div>
      </div>
    </section>
  )
}
