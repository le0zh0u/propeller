import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { CTAButtonFilled, CTAButtonOutline } from '../../components/CTAButtons'

gsap.registerPlugin(ScrollTrigger)

export default function CTASection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return

    const ctx = gsap.context(() => {
      gsap.from(el.querySelector('.cta-title'), {
        y: 30,
        opacity: 0,
        duration: 0.7,
        ease: 'power2.out',
        scrollTrigger: { trigger: el, start: 'top 80%' },
      })
      gsap.from(el.querySelector('.cta-sub'), {
        y: 20,
        opacity: 0,
        duration: 0.5,
        delay: 0.2,
        ease: 'power2.out',
        scrollTrigger: { trigger: el, start: 'top 80%' },
      })
      gsap.from(el.querySelector('.cta-slogan'), {
        y: 15,
        opacity: 0,
        duration: 0.5,
        delay: 0.3,
        ease: 'power2.out',
        scrollTrigger: { trigger: el, start: 'top 80%' },
      })
      gsap.from(el.querySelector('.cta-buttons'), {
        y: 10,
        opacity: 0,
        duration: 0.5,
        delay: 0.4,
        ease: 'power2.out',
        scrollTrigger: { trigger: el, start: 'top 80%' },
      })
    }, el)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="bg-brand-gradient-full animate-gradient-shimmer"
      style={{ padding: 'clamp(100px, 15vh, 200px) clamp(24px, 5vw, 80px)' }}
    >
      <div className="max-w-[700px] mx-auto text-center">
        <h2 className="cta-title text-h1 text-white">
          Ready to Navigate China's AI & Robotics Ecosystem?
        </h2>
        <p className="cta-sub text-body-large text-pearl/90 mt-4 max-w-[560px] mx-auto">
          Whether you are exploring, entering, or scaling, PROPELLER helps you move with clarity, confidence, and trusted local access.
        </p>
        <p className="cta-slogan font-display text-xl text-white tracking-tight mt-6">
          Start with Compass. Enter with Access. Grow with PROPELLER.
        </p>
        <div className="cta-buttons flex flex-col sm:flex-row gap-4 justify-center mt-10">
          <CTAButtonFilled to="/contact">Contact Us</CTAButtonFilled>
          <CTAButtonOutline to="/compass">Explore Services</CTAButtonOutline>
        </div>
      </div>
    </section>
  )
}
