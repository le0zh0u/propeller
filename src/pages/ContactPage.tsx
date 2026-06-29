import { useState, useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import GradientCanvas from '../components/GradientCanvas'

gsap.registerPlugin(ScrollTrigger)

type SubmitState = 'idle' | 'submitting' | 'success' | 'error'

export default function ContactPage() {
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = heroRef.current
    if (!el) return
    const tl = gsap.timeline()
    tl.from(el.querySelector('.hero-label'), { opacity: 0, duration: 0.5, delay: 0.2 })
      .from(el.querySelector('.hero-title'), { opacity: 0, y: 20, duration: 0.7 }, '-=0.2')
      .from(el.querySelector('.hero-sub'), { opacity: 0, duration: 0.5 }, '-=0.3')
      .from(el.querySelector('.hero-prompt'), { opacity: 0, duration: 0.4 }, '-=0.2')
    return () => { tl.kill() }
  }, [])

  return (
    <>
      {/* Hero */}
      <section className="relative w-full min-h-[50vh] flex items-center justify-center overflow-hidden grain-overlay">
        <GradientCanvas />
        <div ref={heroRef} className="relative z-10 text-center max-w-[700px] px-6">
          <p className="hero-label text-label text-brand-blue tracking-[0.12em] mb-4">CONTACT</p>
          <h1 className="hero-title text-hero-display text-white font-display">
            Ready to Churn the Water?
          </h1>
          <p className="hero-sub text-body-large text-pearl mt-4 max-w-[600px] mx-auto">
            Whether you are exploring China's AI and robotics ecosystem, searching for trusted partners, planning an executive immersion, or building a cross-border venture, we would love to hear from you.
          </p>
          <p className="hero-prompt text-base text-slate mt-3 max-w-[560px] mx-auto">
            Tell us what you are working on, what you are trying to understand, and where you want to go next. We will help you figure out the most practical path forward.
          </p>
        </div>
      </section>

      {/* Contact Form */}
      <ContactFormSection />

      {/* Direct Contact */}
      <DirectContactSection />

      {/* Footer CTA */}
      <section className="bg-brand-gradient-full animate-gradient-shimmer" style={{ padding: 'clamp(80px, 10vh, 120px) clamp(24px, 5vw, 80px)' }}>
        <div className="max-w-[800px] mx-auto text-center">
          <p className="font-display text-2xl text-white tracking-[0.08em] uppercase">PROPELLER</p>
          <p className="text-base text-pearl/70 mt-2">
            Cross-Border Innovation Studio for AI, Robotics & Venture Building.
          </p>
          <p className="font-mono text-xs text-slate mt-6">&copy; 2026 PROPELLER. All rights reserved.</p>
        </div>
      </section>
    </>
  )
}

function ContactFormSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [state, setState] = useState<SubmitState>('idle')
  const [formData, setFormData] = useState({ name: '', email: '', company: '', interest: '', message: '' })
  const [emailError, setEmailError] = useState('')

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return
    const ctx = gsap.context(() => {
      gsap.from(el.querySelector('.form-container'), { y: 30, opacity: 0, duration: 0.7, ease: 'power2.out', scrollTrigger: { trigger: el, start: 'top 80%' } })
      gsap.from(el.querySelectorAll('.form-field'), { y: 10, opacity: 0, duration: 0.4, stagger: 0.06, delay: 0.2, ease: 'power2.out', scrollTrigger: { trigger: el, start: 'top 80%' } })
    }, el)
    return () => ctx.revert()
  }, [])

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return re.test(email)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.name || !formData.email || !formData.message) return
    if (!validateEmail(formData.email)) {
      setEmailError('Please enter a valid email address')
      return
    }
    setEmailError('')
    setState('submitting')
    // Simulate API call
    setTimeout(() => {
      setState('success')
      setTimeout(() => {
        setState('idle')
        setFormData({ name: '', email: '', company: '', interest: '', message: '' })
      }, 3000)
    }, 1500)
  }

  const inputClass = 'w-full h-12 bg-white/[0.04] border border-white/10 rounded-[8px] px-4 text-white text-base placeholder:text-slate focus:border-brand-blue focus:shadow-[0_0_0_3px_rgba(53,51,205,0.15)] transition-all outline-none'

  const buttonContent = {
    idle: 'Send Message',
    submitting: (
      <span className="flex items-center gap-2">
        <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
        </svg>
        Sending...
      </span>
    ),
    success: 'Message Sent! \u2713',
    error: 'Please try again',
  }

  const buttonClass = state === 'success'
    ? 'w-full h-[52px] bg-success text-white text-sm font-medium rounded-pill flex items-center justify-center transition-all'
    : state === 'error'
    ? 'w-full h-[52px] bg-error text-white text-sm font-medium rounded-pill flex items-center justify-center transition-all'
    : 'w-full h-[52px] bg-brand-gradient text-white text-sm font-medium rounded-pill btn-glow active:scale-[0.97] flex items-center justify-center transition-all'

  return (
    <section ref={sectionRef} className="bg-ink" style={{ padding: 'clamp(80px, 10vh, 160px) clamp(24px, 5vw, 80px)' }}>
      <div className="max-w-[680px] mx-auto">
        <div className="form-container bg-graphite rounded-card p-8 md:p-12 border border-white/[0.06]">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="form-field">
              <label className="text-label text-ash mb-2 block">Your Name *</label>
              <input
                type="text"
                placeholder="Full name"
                className={inputClass}
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                disabled={state === 'submitting'}
              />
            </div>
            <div className="form-field">
              <label className="text-label text-ash mb-2 block">Email Address *</label>
              <input
                type="email"
                placeholder="you@company.com"
                className={`${inputClass} ${emailError ? 'border-error' : ''}`}
                value={formData.email}
                onChange={(e) => { setFormData({ ...formData, email: e.target.value }); setEmailError('') }}
                onBlur={() => { if (formData.email && !validateEmail(formData.email)) setEmailError('Please enter a valid email address') }}
                required
                disabled={state === 'submitting'}
              />
              {emailError && <p className="text-error text-sm mt-1">{emailError}</p>}
            </div>
            <div className="form-field">
              <label className="text-label text-ash mb-2 block">Company / Organization</label>
              <input
                type="text"
                placeholder="Company name"
                className={inputClass}
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                disabled={state === 'submitting'}
              />
            </div>
            <div className="form-field">
              <label className="text-label text-ash mb-2 block">What are you interested in?</label>
              <select
                className={`${inputClass} appearance-none cursor-pointer`}
                value={formData.interest}
                onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                disabled={state === 'submitting'}
              >
                <option value="" className="bg-graphite">Select a service...</option>
                <option value="compass" className="bg-graphite">Compass — Market validation & de-risking</option>
                <option value="access" className="bg-graphite">Access — Executive expedition & ecosystem entry</option>
                <option value="growth" className="bg-graphite">Growth — Fractional leadership & execution</option>
                <option value="general" className="bg-graphite">General inquiry / partnership</option>
                <option value="media" className="bg-graphite">Media inquiry</option>
              </select>
            </div>
            <div className="form-field">
              <label className="text-label text-ash mb-2 block">Your Message *</label>
              <textarea
                placeholder="Tell us about your project, goals, and what you're looking to achieve in China's ecosystem..."
                className={`${inputClass} h-[160px] py-4 resize-y`}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
                disabled={state === 'submitting'}
              />
            </div>
            <button type="submit" className={buttonClass} disabled={state === 'submitting' || state === 'success'}>
              {buttonContent[state]}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

function DirectContactSection() {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const ctx = gsap.context(() => {
      gsap.from(el.querySelectorAll('.contact-card'), { y: 20, opacity: 0, duration: 0.6, stagger: 0.12, ease: 'power2.out', scrollTrigger: { trigger: el, start: 'top 80%' } })
    }, el)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={ref} className="bg-abyss" style={{ padding: 'clamp(80px, 10vh, 160px) clamp(24px, 5vw, 80px)' }}>
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="contact-card text-center p-8">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#3533CD" strokeWidth="1.5" className="mx-auto">
            <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          <p className="text-label text-ash mt-4 mb-2">EMAIL</p>
          <a href="mailto:business@globalpropeller.com" className="text-base text-white hover:text-brand-blue link-underline transition-colors">
            business@globalpropeller.com
          </a>
        </div>

        <div className="contact-card text-center p-8">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#3533CD" strokeWidth="1.5" className="mx-auto">
            <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
          </svg>
          <p className="text-label text-ash mt-4 mb-2">FOLLOW US</p>
          <div className="flex flex-col gap-2">
            <a href="https://www.linkedin.com/company/globalpropeller/" target="_blank" rel="noopener noreferrer" className="text-base text-white hover:text-brand-blue transition-colors">LinkedIn</a>
            <a href="https://www.youtube.com/channel/UCba9zv7ESBKjyayDc6CNekQ" target="_blank" rel="noopener noreferrer" className="text-base text-white hover:text-brand-blue transition-colors">YouTube</a>
            <a href="https://mingai01.substack.com/" target="_blank" rel="noopener noreferrer" className="text-base text-white hover:text-brand-blue transition-colors">Substack</a>
          </div>
        </div>

        <div className="contact-card text-center p-8">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#3533CD" strokeWidth="1.5" className="mx-auto">
            <path d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
          </svg>
          <p className="text-label text-ash mt-4 mb-2">NEWSLETTER</p>
          <p className="text-base text-white">China Compass 101</p>
          <a href="https://mingai01.substack.com/" target="_blank" rel="noopener noreferrer" className="text-base text-brand-blue hover:underline mt-2 inline-block">
            Subscribe on Substack &rarr;
          </a>
        </div>
      </div>
    </section>
  )
}
