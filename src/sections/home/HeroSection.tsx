import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import GradientCanvas from '../../components/GradientCanvas'

const headlines = [
  'Collaboration Is the New Competition.',
  'Experience Tomorrow, Today.',
  'PROPELLER helps global innovators decode, access, and build with China\'s AI and robotics ecosystem.',
]

export default function HeroSection() {
  const [currentHeadline, setCurrentHeadline] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const headlineRef = useRef<HTMLHeadingElement>(null)
  const prefixRef = useRef<HTMLParagraphElement>(null)
  const indicatorRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Entrance animations
    const tl = gsap.timeline()
    tl.from(prefixRef.current, {
      opacity: 0,
      duration: 0.6,
      ease: 'power2.out',
      delay: 0.3,
    })
    .from(headlineRef.current, {
      opacity: 0,
      y: 20,
      duration: 0.6,
      ease: 'power2.out',
    }, '-=0.2')
    .from(indicatorRef.current, {
      opacity: 0,
      duration: 0.5,
    }, '-=0.1')

    // Use revert() (not kill()): revert() restores the inline styles that
    // from()'s immediateRender applied (opacity:0). Under React 19 StrictMode
    // the effect mounts → unmounts → remounts in dev; kill() leaves opacity:0
    // in place, so the remount's from() captures 0 as the "to" value and the
    // text stays invisible. revert() clears it so the next mount fades in.
    return () => { tl.revert() }
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      if (isAnimating) return
      setIsAnimating(true)

      const el = headlineRef.current
      if (!el) { setIsAnimating(false); return }

      gsap.to(el, {
        opacity: 0,
        y: -20,
        duration: 0.4,
        ease: 'power2.in',
        onComplete: () => {
          setCurrentHeadline((prev) => (prev + 1) % headlines.length)
          gsap.fromTo(el, {
            opacity: 0,
            y: 20,
          }, {
            opacity: 1,
            y: 0,
            duration: 0.4,
            ease: 'power2.out',
            onComplete: () => setIsAnimating(false),
          })
        },
      })
    }, 4000)

    return () => clearInterval(interval)
  }, [isAnimating])

  return (
    <section className="relative w-full min-h-[100dvh] flex items-center justify-center overflow-hidden grain-overlay">
      <GradientCanvas />
      <div className="relative z-10 text-center max-w-[900px] px-6">
        <p
          ref={prefixRef}
          className="text-label text-white/90 tracking-[0.15em] mb-4"
          style={{ textShadow: '0 0 20px rgba(0,0,0,0.5), 0 1px 4px rgba(0,0,0,0.3)' }}
        >
          Innovate. Create. Amplify.
        </p>
        <h1
          ref={headlineRef}
          className="text-hero-display text-white font-display"
          style={{ textShadow: '0 0 40px rgba(0,0,0,0.4), 0 2px 8px rgba(0,0,0,0.2)' }}
        >
          {headlines[currentHeadline]}
        </h1>
      </div>
      <div
        ref={indicatorRef}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce-chevron"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5">
          <path d="M6 9l6 6 6-6" />
        </svg>
      </div>
    </section>
  )
}
