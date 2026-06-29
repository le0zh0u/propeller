import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SectionHeading from '../../components/SectionHeading'

gsap.registerPlugin(ScrollTrigger)

const painPoints = [
  {
    title: 'Lost in Translation',
    body: 'We help translate not just language, but context. Your content, pitch, and positioning need to work locally while remaining aligned with your global brand. We help bridge that gap.',
  },
  {
    title: 'Market Whiplash',
    body: "China's technology trends move fast. We help you stay ahead with real-time insights, ecosystem updates, and grounded interpretations of what actually matters.",
  },
  {
    title: 'Connection Fatigue',
    body: 'No more cold outreach. Our match-making is based on warm introductions, strategic relevance, and trust-based relationship building.',
  },
]

export default function PainPointsSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return

    const ctx = gsap.context(() => {
      el.querySelectorAll('.pain-block').forEach((block, i) => {
        gsap.from(block, {
          y: 30,
          opacity: 0,
          duration: 0.7,
          delay: i * 0.15,
          ease: 'power2.out',
          scrollTrigger: { trigger: block, start: 'top 85%' },
        })

        const divider = block.querySelector('.pain-divider')
        if (divider) {
          gsap.from(divider, {
            scaleX: 0,
            duration: 0.6,
            delay: i * 0.15 + 0.1,
            ease: 'power2.out',
            scrollTrigger: { trigger: block, start: 'top 85%' },
          })
        }
      })
    }, el)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="bg-abyss" style={{ padding: 'clamp(80px, 10vh, 160px) clamp(24px, 5vw, 80px)' }}>
      <div className="max-w-[1200px] mx-auto">
        <SectionHeading
          label="07. — YOUR TURNAROUND"
          title="Your Turnaround Starts Here"
          description="Whether you are a business owner seeking direct access to China's agile manufacturing capabilities, a tech scout looking for unfiltered ecosystem intelligence, or a scaleup searching for trusted partners, PROPELLER helps you get there."
        />
        <div className="space-y-12 mt-8">
          {painPoints.map((p) => (
            <div key={p.title} className="pain-block">
              <div
                className="pain-divider h-px w-full mb-8 origin-center"
                style={{ background: 'linear-gradient(90deg, #000000, #3533CD, #000000)' }}
              />
              <h3 className="text-h2 text-white">{p.title}</h3>
              <p className="text-body-large text-slate mt-4 max-w-[700px]">{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
