import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

interface ServiceCardProps {
  number: string
  title: string
  body: string
  idealFor?: string
  linkTo?: string
  index?: number
}

export default function ServiceCard({ number, title, body, idealFor, linkTo, index = 0 }: ServiceCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = cardRef.current
    if (!el) return

    const ctx = gsap.context(() => {
      gsap.from(el, {
        y: 40,
        opacity: 0,
        duration: 0.7,
        ease: 'cubic-bezier(0.16, 1, 0.3, 1)',
        delay: index * 0.12,
        scrollTrigger: {
          trigger: el,
          start: 'top 85%',
        },
      })
    }, el)

    return () => ctx.revert()
  }, [index])

  const content = (
    <div
      ref={cardRef}
      className={`bg-graphite rounded-card p-8 md:p-10 border border-transparent transition-all duration-400 hover:border-brand-blue/30 hover:-translate-y-1 hover:shadow-[0_8px_32px_rgba(0,0,0,0.3)] group ${linkTo ? 'cursor-pointer' : ''}`}
    >
      <span className="font-mono text-xs text-brand-blue">{number}</span>
      <h3 className="text-h3 text-white mt-3">{title}</h3>
      <p className="text-base text-slate mt-3 leading-relaxed">{body}</p>
      {idealFor && (
        <div className="mt-5">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-blue"></span>
            <span className="text-label text-ash">Ideal for</span>
          </div>
          <p className="text-sm text-slate">{idealFor}</p>
        </div>
      )}
    </div>
  )

  if (linkTo) {
    return (
      <a href={linkTo} className="block">
        {content}
      </a>
    )
  }

  return content
}
