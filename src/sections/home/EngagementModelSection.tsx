import SectionHeading from '../../components/SectionHeading'
import StepCard from '../../components/StepCard'

const stages = [
  {
    stage: 'STAGE 01',
    title: 'Compass',
    subtitle: 'Understand Before You Commit',
    description: "Before investing significant capital, time, and executive attention, we help you validate assumptions, assess market fit, identify risks, and map realistic opportunities in China's AI and robotics ecosystem.",
    tags: ['Market validation', 'Strategic de-risking', 'Early-stage exploration'],
    linkTo: '/compass',
  },
  {
    stage: 'STAGE 02',
    title: 'Access',
    subtitle: 'Enter the Inner Circle',
    description: "When you are ready to engage directly with China's ecosystem, we design curated executive expeditions, facilitate closed-door meetings, conduct partner vetting, and support cross-cultural negotiation.",
    tags: ['Executive immersion', 'Agile sourcing', 'Partner access', 'Technology transfer'],
    linkTo: '/access',
  },
  {
    stage: 'STAGE 03',
    title: 'Growth',
    subtitle: 'Execute With Trusted Local Support',
    description: 'For high-growth ventures requiring reliable on-the-ground execution, we act as your fractional China leadership team, supporting operations, vendor management, IP protection, fundraising, and partnership execution.',
    tags: ['Cross-border operations', 'Strategic partnerships', 'Fundraising', 'Risk mitigation'],
    linkTo: '/growth',
  },
]

export default function EngagementModelSection() {
  return (
    <section className="bg-ink" style={{ padding: 'clamp(80px, 10vh, 160px) clamp(24px, 5vw, 80px)' }}>
      <div className="max-w-[1200px] mx-auto">
        <SectionHeading
          label="04. — ENGAGEMENT MODEL"
          title="Compass. Access. Growth."
          description="PROPELLER supports clients through three progressive stages of cross-border innovation engagement."
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-4 relative">
          {stages.map((s, i) => (
            <div key={s.stage} className="relative">
              <StepCard {...s} index={i} />
              {i < stages.length - 1 && (
                <div className="hidden md:flex absolute -right-4 top-12 text-brand-blue/30 text-2xl z-10">
                  &rarr;
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
