import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SectionHeading from '../../components/SectionHeading'

gsap.registerPlugin(ScrollTrigger)

const pillars = [
  {
    letter: 'I',
    title: 'Scouting Intelligence',
    body: 'We identify and match the right technologies, companies, founders, suppliers, investors, and ecosystem partners based on your strategic needs. Our scouting goes beyond public databases.',
  },
  {
    letter: 'C',
    title: 'Cross-Cultural Communication',
    body: "Cross-border success often depends on what is left unsaid. We help clients navigate differences in business culture, negotiation style, decision-making logic, partnership expectations, and communication norms.",
  },
  {
    letter: 'N',
    title: 'Curated Network & Local Guanxi',
    body: 'We activate a carefully selected network of entrepreneurs, technical experts, corporate leaders, investors, universities, associations, and trusted local operators. Our network is built on relevance, credibility, and execution capability.',
  },
]

export default function ICNFormulaSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return

    const ctx = gsap.context(() => {
      el.querySelectorAll('.pillar-num').forEach((num, i) => {
        gsap.from(num, {
          scale: 0.8,
          opacity: 0,
          duration: 0.6,
          ease: 'cubic-bezier(0.16, 1, 0.3, 1)',
          delay: i * 0.15,
          scrollTrigger: { trigger: num, start: 'top 85%' },
        })
      })

      el.querySelectorAll('.pillar-text').forEach((text) => {
        gsap.from(text, {
          y: 20,
          opacity: 0,
          duration: 0.6,
          ease: 'power2.out',
          scrollTrigger: { trigger: text, start: 'top 85%' },
        })
      })
    }, el)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      style={{
        background: 'linear-gradient(180deg, #11111A 0%, rgba(53,51,205,0.06) 50%, #11111A 100%)',
        padding: 'clamp(80px, 10vh, 160px) clamp(24px, 5vw, 80px)',
      }}
    >
      <div className="max-w-[1200px] mx-auto">
        <SectionHeading
          label="03. — OUR METHOD"
          title="Intelligence. Communication. Network."
          description="Successful cross-border innovation requires more than information. It requires context, trust, timing, and the right people at the table."
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-12">
          {pillars.map((p) => (
            <div key={p.letter} className="text-center md:text-left">
              <span className="pillar-num font-display text-[clamp(64px,8vw,120px)] font-normal text-brand-blue/40 leading-none block">
                {p.letter}
              </span>
              <div className="h-px bg-white/[0.06] my-4" />
              <div className="pillar-text">
                <h3 className="text-h3 text-white">{p.title}</h3>
                <p className="text-base text-slate mt-3 leading-relaxed">{p.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
