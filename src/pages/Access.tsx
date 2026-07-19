import { useEffect, useRef, useState } from 'react';
import { ArrowRight, ArrowDown, MapPin, MessageSquare, Handshake } from 'lucide-react';

const deliverables = [
  { num: '01', title: 'Curated Executive Expedition', desc: 'A meticulously planned itinerary featuring factory deep-dives, supplier audits, and meetings with potential investors or clients.', icon: MapPin, bg: 'bg-[#008080]' },
  { num: '02', title: '"China Speed" Closed-Door Workshops', desc: 'Exclusive, off-the-record sessions with leading Chinese AI/Robotics founders and technical experts.', icon: MessageSquare, bg: 'bg-[#004d4d]' },
  { num: '03', title: 'Agile Vetting & Negotiation Support', desc: 'Deep background checks on 2-3 core partners, alongside active support in cross-cultural negotiations.', icon: Handshake, bg: 'bg-[#0d1321]' },
];

export default function Access() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="min-h-screen bg-[#0a0f1a]">
      {/* Hero — video backdrop, centered, homepage-style */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
        <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover opacity-20 pointer-events-none">
          <source src="https://res.cloudinary.com/dprydfxok/video/upload/v1782459210/bg1_jgni8n.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/40" />

        <div className="relative text-center px-6 pt-16">
          <span className="uppercase tracking-[0.3em] text-sm text-[#008080] font-semibold mb-6 block">Phase 02 — Access</span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-tight mb-6">
            Skip the PR Tours.<br />Parachute into the Inner Circle.
          </h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto mb-10">
            Bypass the noise and connect directly with vetted decision-makers in China's AI and robotics hubs.
          </p>
          <a
            href="#deliverables"
            onClick={(e) => { e.preventDefault(); document.querySelector('#deliverables')?.scrollIntoView({ behavior: 'smooth' }); }}
            className="group inline-flex items-center gap-3 bg-[#008080] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#3533cd] transition-colors duration-300"
          >
            See What's Included
            <ArrowDown className="w-5 h-5 transition-transform duration-300 group-hover:translate-y-1" />
          </a>
        </div>
      </section>

      {/* The Challenge — centered pull-quote */}
      <section className="py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-4 md:px-6 text-center">
          <span className="uppercase tracking-[0.3em] text-sm text-[#008080] font-semibold mb-6 block">The Challenge</span>
          <h2 className="text-3xl md:text-5xl font-black text-white leading-tight mb-8">Accessing the Real Ecosystem.</h2>
          <p className="text-lg text-slate-400 leading-relaxed mb-6">
            Finding the right factory, securing meetings with actual decision-makers, and navigating cross-cultural negotiations is a massive hurdle.
          </p>
          <p className="text-2xl md:text-3xl font-black text-[#008080] leading-snug">
            "You don't need a tour guide;<br />you need an insider."
          </p>
        </div>
      </section>

      {/* The Solution — full-width band */}
      <section className="py-20 md:py-28 bg-[#0d1321] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 md:px-6 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <span className="uppercase tracking-[0.3em] text-sm text-[#3533cd] font-semibold mb-4 block">The Solution</span>
            <h2 className="text-3xl md:text-5xl font-black text-white leading-tight">Agile Sourcing &<br />Tech Transfer.</h2>
          </div>
          <p className="text-lg text-slate-400 leading-relaxed">
            We leverage our deep roots in the Yangtze River Delta to bypass middle-management and act as your local advisors — opening doors that stay closed to outsiders.
          </p>
        </div>
      </section>

      {/* Key Deliverables — sticky stacked cards (desktop) / vertical list (mobile) */}
      <div id="deliverables">
        <DeliverablesMobile />
        <DeliverablesDesktop />
      </div>

      {/* Investment — centered card */}
      <section className="py-20 md:py-28 bg-[#0d1321]">
        <div className="max-w-7xl mx-auto px-4 md:px-6 text-center">
          <div className="bg-[#0a0f1a] rounded-2xl p-8 md:p-12 max-w-2xl mx-auto border border-white/5">
            <span className="uppercase tracking-[0.3em] text-sm text-[#008080] font-semibold mb-4 block">Investment & Fit</span>
            <h2 className="text-3xl font-black text-white mb-4">Ready to Execute.</h2>
            <p className="text-slate-400 mb-6">Best for scale-ups ready for on-the-ground execution and agile sourcing.</p>
            <div className="pt-6 border-t border-white/10 mb-8">
              <p className="text-sm text-slate-500 uppercase tracking-wider">Pricing</p>
              <p className="text-3xl md:text-4xl font-black text-white mt-2">min $15,000 USD</p>
              <p className="text-sm text-slate-500 mt-2">(Project Fee, excluding travel expenses)</p>
            </div>
            <a
              href="mailto:business@globalpropeller.com"
              className="group inline-flex items-center gap-3 bg-[#008080] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#3533cd] transition-colors duration-300"
            >
              Let's Talk
              <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

/* ---------- Mobile: plain vertical card list ---------- */

function DeliverablesMobile() {
  return (
    <section className="md:hidden py-16 px-6">
      <div className="mb-8">
        <span className="uppercase tracking-[0.3em] text-[10px] text-[#008080] font-semibold mb-2 block">What's Included</span>
        <h2 className="text-3xl font-black text-white">Key Deliverables.</h2>
      </div>
      <div className="flex flex-col gap-4">
        {deliverables.map((item) => (
          <div key={item.num} className={`relative overflow-hidden rounded-xl ${item.bg} shadow-2xl p-6 border border-white/5`}>
            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-2">
                <item.icon className="w-5 h-5 text-white/70" />
                <span className="text-[10px] uppercase tracking-[0.3em] text-white/50 font-semibold">{item.num}</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-1">{item.title}</h3>
              <p className="text-sm text-white/80">{item.desc}</p>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---------- Desktop: sticky scroll-driven stacked cards ---------- */

function StackedCard({ item, index, progress }: { item: typeof deliverables[0]; index: number; progress: number }) {
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

  return (
    <div
      className={`absolute inset-x-6 rounded-2xl overflow-hidden ${item.bg} shadow-2xl border border-white/5`}
      style={{
        transform: `translateY(${y}%) scale(${s})`,
        top: `${index * 8}%`,
        zIndex: index + 1,
        height: `${100 - index * 8}%`,
      }}
    >
      <div className="absolute bottom-0 left-0 right-0 p-8 z-10">
        <div className="flex items-center gap-2 mb-2">
          <item.icon className="w-7 h-7 text-white/70" />
          <span className="text-xs uppercase tracking-[0.3em] text-white/50 font-semibold">{item.num}</span>
        </div>
        <h3 className="text-3xl font-bold text-white mb-1">{item.title}</h3>
        <p className="text-base text-white/80 max-w-md">{item.desc}</p>
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
    </div>
  );
}

function DeliverablesDesktop() {
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
      <div className="sticky top-0 h-screen flex flex-row items-center overflow-hidden">
        {/* Left Text Column */}
        <div className="w-2/5 flex flex-col justify-center px-12 lg:px-16">
          <span className="uppercase tracking-[0.3em] text-sm text-[#008080] font-semibold mb-2 block">What's Included</span>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-3 md:mb-6">Key<br />Deliverables.</h2>
          <p className="text-sm md:text-lg text-slate-400 max-w-sm">
            Three ways we plug you directly into the inner circle.
          </p>
        </div>

        {/* Right Cards Area */}
        <div className="relative w-3/5 h-[52vh] self-center px-6 overflow-hidden">
          {deliverables.map((item, index) => (
            <StackedCard key={item.num} item={item} index={index} progress={progress} />
          ))}
        </div>
      </div>
    </section>
  );
}
