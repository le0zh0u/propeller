import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

interface StepCardProps {
  stage: string
  title: string
  subtitle: string
  description: string
  tags: string[]
  linkTo?: string
  index?: number
}

export default function StepCard({ stage, title, subtitle, description, tags, linkTo, index = 0 }: StepCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = cardRef.current
    if (!el) return

    const ctx = gsap.context(() => {
      gsap.from(el, {
        x: -30,
        opacity: 0,
        duration: 0.7,
        ease: 'cubic-bezier(0.16, 1, 0.3, 1)',
        delay: index * 0.15,
        scrollTrigger: {
          trigger: el,
          start: 'top 85%',
        },
      })
    }, el)

    return () => ctx.revert()
  }, [index])

  return (
    <div
      ref={cardRef}
      className="border-l-2 border-brand-blue/40 pl-8 transition-all duration-250 hover:border-brand-blue group"
    >
      <span className="font-mono text-xs text-brand-blue">{stage}</span>
      <h3 className="text-h2 text-white mt-2 group-hover:[text-shadow:0_0_20px_rgba(53,51,205,0.3)] transition-all">{title}</h3>
      <p className="text-brand-blue text-sm font-medium mt-1">{subtitle}</p>
      <p className="text-base text-slate mt-4 leading-relaxed">{description}</p>
      <div className="flex flex-wrap gap-2 mt-4">
        {tags.map((tag) => (
          <span key={tag} className="text-xs text-ash bg-graphite px-3 py-1.5 rounded-pill">
            {tag}
          </span>
        ))}
      </div>
      {linkTo && (
        <a href={linkTo} className="inline-block mt-5 text-brand-blue text-sm font-medium link-underline">
          Explore {title} &rarr;
        </a>
      )}
    </div>
  )
}
