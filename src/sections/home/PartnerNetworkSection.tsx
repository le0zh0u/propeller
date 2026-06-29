import { useEffect, useRef, useState } from 'react'
import SectionHeading from '../../components/SectionHeading'

const categories = [
  {
    count: 9,
    label: 'Academic Partners & University Network',
    names: 'East China Normal University, Shanghai Jiao Tong University, Fudan University, Tongji University, Shanghai Tech University, Shanghai University, Shanghai University of International Business and Economics, Shanghai University of Electric Power, Shanghai Dianji University',
  },
  {
    count: 10,
    label: 'Associations, Industry Platforms & Innovation Ecosystems',
    names: 'China Association of SMEs, Shanghai Association for International Cooperation of SMEs, Shanghai Open-Source Information Technology Association, Shanghai Software Industry Association, Shanghai Intelligent Automotive Software Park, Shanghai Pudong Software Park, OpenAtom Foundation, Shanghai Technology Exchange International Trading Center, Shanghai Institute of Electronics, Yangtze River Delta G60 ST Corridor Financial Services Alliance',
  },
  {
    count: 19,
    label: 'Corporate & Technology Ecosystem',
    names: 'Huawei, Alibaba, Tencent, Ant Group, ByteDance, BYD, Infineon, MetaX, Red Hat, Puhua Basic Software, Unitree Robotics, AgiBot, Kepler Robotics, Galbot, Fourier Intelligence, Songyan Dynamics, MiniMax, Kimi, RT-Thread',
  },
  {
    count: 12,
    label: 'Media & Communications Network',
    names: 'Xinhua News Agency, The Paper, China News Service, Yicai, China Daily, Phoenix New Media, Tencent News, NetEase News, China.com, Hexun, China Enterprise News, China.com.cn',
  },
]

function AnimatedCount({ target, inView }: { target: number; inView: boolean }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!inView) return
    let start = 0
    const duration = 600
    const startTime = performance.now()

    const update = (now: number) => {
      const elapsed = now - startTime
      const progress = Math.min(elapsed / duration, 1)
      start = Math.floor(progress * target)
      setCount(start)
      if (progress < 1) requestAnimationFrame(update)
    }

    requestAnimationFrame(update)
  }, [inView, target])

  return <span>{count}</span>
}

export default function PartnerNetworkSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [inView, setInView] = useState(false)
  const [cardsVisible, setCardsVisible] = useState(false)

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          // Stagger card appearance
          setTimeout(() => setCardsVisible(true), 100)
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )
    observer.observe(el)

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="bg-ink" style={{ padding: 'clamp(80px, 10vh, 160px) clamp(24px, 5vw, 80px)' }}>
      <div className="max-w-[1200px] mx-auto">
        <SectionHeading
          label="06. — ECOSYSTEM"
          title="Our Partner Network"
          description="PROPELLER is powered by a trusted network across academia, industry, capital, media, and entrepreneurial communities."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
          {categories.map((c, i) => (
            <div
              key={c.label}
              className="bg-graphite rounded-card p-7 border border-transparent hover:border-brand-blue/20 transition-all duration-500 hover:-translate-y-0.5"
              style={{
                opacity: cardsVisible ? 1 : 0,
                transform: cardsVisible ? 'translateY(0)' : 'translateY(30px)',
                transitionDelay: `${i * 100}ms`,
              }}
            >
              <span className="font-display text-4xl text-brand-blue font-normal">
                <AnimatedCount target={c.count} inView={inView} />
              </span>
              <h4 className="text-lg font-medium text-white mt-3">{c.label}</h4>
              <p className="text-sm text-slate mt-2 leading-relaxed">{c.names}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
