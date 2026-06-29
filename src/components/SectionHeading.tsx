import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

interface SectionHeadingProps {
  label: string
  title: string
  description?: string
  align?: 'left' | 'center'
}

export default function SectionHeading({ label, title, description, align = 'left' }: SectionHeadingProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: el,
          start: 'top 85%',
        },
      })

      tl.from(el.querySelector('.sh-label'), {
        opacity: 0,
        y: 10,
        duration: 0.5,
        ease: 'power2.out',
      })
      .from(el.querySelector('.sh-title'), {
        opacity: 0,
        y: 20,
        duration: 0.7,
        ease: 'power2.out',
      }, '-=0.2')

      if (description) {
        tl.from(el.querySelector('.sh-desc'), {
          opacity: 0,
          y: 15,
          duration: 0.5,
          ease: 'power2.out',
        }, '-=0.3')
      }
    }, el)

    return () => ctx.revert()
  }, [description])

  return (
    <div ref={ref} className={`mb-12 ${align === 'center' ? 'text-center' : ''}`}>
      <p className="sh-label text-label text-brand-blue mb-3">{label}</p>
      <h2 className={`sh-title text-h1 text-white ${align === 'center' ? 'mx-auto' : ''}`} style={{ maxWidth: align === 'center' ? '800px' : '700px' }}>
        {title}
      </h2>
      {description && (
        <p className={`sh-desc text-body-large text-slate mt-4 ${align === 'center' ? 'mx-auto' : ''}`} style={{ maxWidth: '560px' }}>
          {description}
        </p>
      )}
    </div>
  )
}
