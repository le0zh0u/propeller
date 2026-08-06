import { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Compass, DoorOpen, TrendingUp } from 'lucide-react';

const services = [
  {
    title: 'Compass',
    description: 'Strategic market intelligence and validation.',
    longDesc: 'An unfiltered reality check on China\'s AI and robotics ecosystem.',
    bg: 'bg-[#3533cd]',
    path: '/compass',
    icon: Compass,
  },
  {
    title: 'Access',
    description: 'Executive expeditions and ecosystem immersion.',
    longDesc: 'Connect directly with vetted decision-makers.',
    bg: 'bg-[#008080]',
    path: '/access',
    icon: DoorOpen,
  },
  {
    title: 'Growth',
    description: 'Fractional leadership and venture execution.',
    longDesc: 'Your on-the-ground China leadership team.',
    bg: 'bg-slate-800',
    path: '/growth',
    icon: TrendingUp,
  },
];

function SectionHeading() {
  return (
    <>
      <span className="uppercase tracking-[0.3em] text-[10px] md:text-sm text-[#3533cd] font-semibold mb-2 block">Our Services</span>
      <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-3 md:mb-6">Engagement<br />Model.</h2>
      <p className="text-sm md:text-lg text-slate-400 max-w-sm">
        Three strategic phases to guide your journey into China&apos;s innovation ecosystem.
      </p>
    </>
  );
}

/* ---------- Mobile: plain vertical card list ---------- */

function MobileCard({ service, index }: { service: typeof services[0]; index: number }) {
  const Icon = service.icon;
  return (
    <Link
      to={service.path}
      className={`relative block overflow-hidden rounded-xl ${service.bg} shadow-2xl p-6`}
    >
      <div className="relative z-10">
        <div className="flex items-center gap-2 mb-2">
          <Icon className="w-5 h-5 text-white/70" />
          <span className="text-[10px] uppercase tracking-[0.3em] text-white/50 font-semibold">0{index + 1}</span>
        </div>
        <h3 className="text-xl font-bold text-white mb-1">{service.title}</h3>
        <p className="text-sm text-white/80">{service.description}</p>
        <span className="inline-flex items-center gap-1 mt-3 text-xs font-medium text-white/60">
          Learn more <span>&rarr;</span>
        </span>
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
    </Link>
  );
}

function ServicesMobile() {
  return (
    <section className="md:hidden bg-[#0a0f1a] px-6 py-16">
      <div className="mb-8">
        <SectionHeading />
      </div>
      <div className="flex flex-col gap-4">
        {services.map((service, index) => (
          <MobileCard key={service.title} service={service} index={index} />
        ))}
      </div>
    </section>
  );
}

/* ---------- Desktop: sticky scroll-driven stacked cards ---------- */

function ServiceCard({ service, index, progress }: { service: typeof services[0]; index: number; progress: number }) {
  // Card 0 is the base of the stack: always resting at y=0 and visible.
  // Cards 1+ slide up on scroll and stack on top.
  const start = index === 0 ? 0 : (index - 1) * 0.35 + 0.1;
  const end = start + 0.4;

  let y: number;
  if (index === 0) y = 0;
  else if (progress <= start) y = 100;
  else if (progress >= end) y = 0;
  else y = 100 - ((progress - start) / (end - start)) * 100;

  let s = 1;
  if (index < 2) {
    const ss = end, se = end + 0.25;
    if (progress > ss) s = 1 - Math.min(1, (progress - ss) / (se - ss)) * (0.1 - index * 0.02);
  }

  let o = 1;
  if (index < 2) {
    const os = end + 0.2, oe = end + 0.35;
    if (progress > os) o = 1 - Math.min(1, (progress - os) / (oe - os)) * 0.4;
  }

  const Icon = service.icon;

  return (
    <Link
      to={service.path}
      className={`absolute inset-x-6 rounded-2xl overflow-hidden ${service.bg} shadow-2xl block group`}
      style={{
        transform: `translateY(${y}%) scale(${s})`,
        opacity: o,
        top: `${index * 8}%`,
        zIndex: index + 1,
        height: `${100 - index * 8}%`,
      }}
    >
      {/* Content at bottom */}
      <div className="absolute bottom-0 left-0 right-0 p-8 z-10">
        <div className="flex items-center gap-2 mb-2">
          <Icon className="w-7 h-7 text-white/70 group-hover:text-white transition-colors" />
          <span className="text-xs uppercase tracking-[0.3em] text-white/50 font-semibold">0{index + 1}</span>
        </div>
        <h3 className="text-3xl font-bold text-white mb-1">{service.title}</h3>
        <p className="text-base text-white/80 max-w-md">{service.description}</p>
        <p className="text-xs text-white/40 max-w-md mt-1 group-hover:text-white/60 transition-colors">{service.longDesc}</p>
        <span className="inline-flex items-center gap-1 mt-2 text-xs font-medium text-white/50 group-hover:text-white transition-colors">
          Learn more <span className="transition-transform group-hover:translate-x-1">&rarr;</span>
        </span>
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
    </Link>
  );
}

function ServicesDesktop() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const handleScroll = () => {
      const rect = el.getBoundingClientRect();
      const scrollable = el.offsetHeight - window.innerHeight;
      setProgress(Math.max(0, Math.min(1, -rect.top / scrollable)));
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section ref={containerRef} className="relative hidden md:block" style={{ height: '300vh' }}>
      <div className="sticky top-0 h-screen flex flex-row items-center overflow-hidden bg-[#0a0f1a]">
        {/* Left Text Column */}
        <div className="w-2/5 flex flex-col justify-center px-12 lg:px-16">
          <SectionHeading />
        </div>

        {/* Right Cards Area */}
        <div className="relative w-3/5 h-[52vh] self-center px-6 overflow-hidden">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} progress={progress} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default function ServicesSection() {
  return (
    <>
      <ServicesMobile />
      <ServicesDesktop />
    </>
  );
}
