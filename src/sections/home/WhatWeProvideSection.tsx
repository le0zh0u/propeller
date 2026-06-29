import SectionHeading from '../../components/SectionHeading'
import ServiceCard from '../../components/ServiceCard'

const services = [
  {
    number: '01.',
    title: 'Executive Innovation Immersion',
    body: 'We design high-level learning expeditions for entrepreneurs, investors, executives, and innovation leaders who want direct access to China\'s most dynamic technology ecosystems. Through curated site visits, private briefings, founder roundtables, and closed-door exchanges, we help decision-makers understand China\'s emerging innovation models, AI applications, robotics supply chains, and commercialization logic.',
    idealFor: 'Corporate innovation teams, tech executives, investors, incubators, accelerators, universities, and ecosystem builders.',
    linkTo: '/compass',
  },
  {
    number: '02.',
    title: 'China Intelligence & Global Acceleration',
    body: 'We support established scaleups and technology companies with proven solutions to evaluate market potential, identify product-market fit, navigate local ecosystems, and accelerate international or China-related expansion.',
    idealFor: 'AI, robotics, industrial tech, SaaS, smart manufacturing, clean tech, and deep tech companies seeking strategic access to China or global growth through Chinese ecosystem partnerships.',
    linkTo: '/access',
  },
  {
    number: '03.',
    title: 'Venture Building & Joint Venture Formation',
    body: 'Beyond advisory, PROPELLER co-creates value. For mature Chinese technology firms expanding overseas — and for international companies looking to localize or commercialize technologies through China-linked partnerships — we facilitate venture-building models that combine capital, talent, intellectual property, market access, and operational execution.',
    idealFor: 'Mature tech firms, strategic investors, local governments, venture studios, industrial parks, and ecosystem partners.',
    linkTo: '/growth',
  },
]

export default function WhatWeProvideSection() {
  return (
    <section className="bg-ink" style={{ padding: 'clamp(80px, 10vh, 160px) clamp(24px, 5vw, 80px)' }}>
      <div className="max-w-[1200px] mx-auto">
        <SectionHeading
          label="02. — WHAT WE PROVIDE"
          title="Three ways we help you navigate China's innovation ecosystem."
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-4">
          {services.map((s, i) => (
            <ServiceCard key={s.number} {...s} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
