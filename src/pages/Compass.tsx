import { useEffect } from 'react';
import { ArrowRight, ArrowDown, FileText, Users, Map } from 'lucide-react';

const deliverables = [
  { num: '01', title: 'Market Reality Check Deck', desc: 'A customized briefing highlighting immediate opportunities, technology readiness levels, and potential regulatory or supply chain landmines.', icon: FileText },
  { num: '02', title: 'Vetted Partner Long-list', desc: 'A curated list of 3-5 highly capable upstream/downstream suppliers or tech partners, complete with a strategic "Why Them" analysis.', icon: Users },
  { num: '03', title: 'The Roadmap Session', desc: 'A 90-minute deep-dive consultation with our senior partners, culminating in an actionable Cross-Border Execution Roadmap.', icon: Map },
];

export default function Compass() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="min-h-screen bg-[#0a0f1a]">
      {/* Hero — left-aligned editorial with giant phase numeral */}
      <section className="relative min-h-[85vh] flex items-end overflow-hidden">
        {/* Concentric circle decoration */}
        <div className="absolute -right-[20vmin] top-1/2 -translate-y-1/2 pointer-events-none">
          <div className="w-[70vmin] h-[70vmin] rounded-full border border-[#3533cd]/20 flex items-center justify-center">
            <div className="w-[50vmin] h-[50vmin] rounded-full border border-[#3533cd]/30 flex items-center justify-center">
              <div className="w-[30vmin] h-[30vmin] rounded-full bg-[#3533cd]/10" />
            </div>
          </div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 pb-20 md:pb-28 pt-40 w-full">
          <span className="uppercase tracking-[0.3em] text-sm text-[#3533cd] font-semibold mb-4 block">Phase 01 — Compass</span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-tight mb-6">
            Before You Invest Capital,<br />Invest 90 Minutes.
          </h1>
          <p className="text-lg text-slate-400 max-w-2xl mb-10">
            Get an unfiltered, zero-fluff reality check on China's AI and robotics ecosystem before committing heavy resources.
          </p>
          <a
            href="#investment"
            onClick={(e) => { e.preventDefault(); document.querySelector('#investment')?.scrollIntoView({ behavior: 'smooth' }); }}
            className="group inline-flex items-center gap-3 bg-[#3533cd] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#008080] transition-colors duration-300"
          >
            Start with a Compass Session
            <ArrowDown className="w-5 h-5 transition-transform duration-300 group-hover:translate-y-1" />
          </a>
        </div>

        {/* Giant ghost numeral */}
        <span className="absolute bottom-0 right-4 md:right-12 font-black leading-none text-[#3533cd]/10 select-none pointer-events-none text-[40vmin]">01</span>
      </section>

      {/* The Challenge — big quote layout */}
      <section className="py-20 md:py-28 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-8">
            <div className="lg:col-span-3">
              <span className="uppercase tracking-[0.3em] text-sm text-[#3533cd] font-semibold">The Challenge</span>
            </div>
            <div className="lg:col-span-9">
              <h2 className="text-3xl md:text-5xl font-black text-white leading-tight mb-8">Navigating the Noise.</h2>
              <blockquote className="border-l-2 border-[#3533cd] pl-6 md:pl-8 text-xl md:text-2xl text-slate-300 leading-relaxed mb-8">
                The biggest risk isn't moving too slow — it's moving in the wrong direction.
              </blockquote>
              <div className="grid md:grid-cols-2 gap-6 text-slate-400 leading-relaxed">
                <p>To the outside world, China's tech ecosystem is obscured by media noise, PR fluff, and complex geopolitical narratives.</p>
                <p>You need to know if your technology is a fit, if the supply chain is ready, and if the regulatory environment is safe for your IP.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Solution — reversed editorial row */}
      <section className="py-20 md:py-28 bg-[#0d1321]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-8">
            <div className="lg:col-span-9 lg:order-1 order-2">
              <h2 className="text-3xl md:text-5xl font-black text-white leading-tight mb-8">Strategic De-risking.</h2>
              <p className="text-lg text-slate-400 leading-relaxed mb-4 max-w-2xl">The China Compass is your low-risk, high-impact entry point. We provide a surgical diagnostic of your specific niche.</p>
              <p className="text-lg text-slate-400 leading-relaxed max-w-2xl">If your product isn't a fit, we'll tell you immediately — saving you hundreds of thousands in trial-and-error costs.</p>
            </div>
            <div className="lg:col-span-3 lg:order-2 order-1 lg:text-right">
              <span className="uppercase tracking-[0.3em] text-sm text-[#008080] font-semibold">The Solution</span>
            </div>
          </div>
        </div>
      </section>

      {/* Key Deliverables — 3-column card grid */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-12 md:mb-16">
            <span className="uppercase tracking-[0.3em] text-sm text-[#3533cd] font-semibold mb-4 block">What's Included</span>
            <h2 className="text-3xl md:text-5xl font-black text-white">Key Deliverables.</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-4 md:gap-6">
            {deliverables.map((item) => (
              <div
                key={item.num}
                className="group relative bg-[#0d1321] rounded-2xl p-8 border border-white/5 overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-[#3533cd]/40"
              >
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-[#3533cd] to-transparent opacity-60" />
                <div className="w-14 h-14 rounded-xl bg-[#3533cd] flex items-center justify-center mb-6">
                  <item.icon className="w-7 h-7 text-white" />
                </div>
                <span className="text-xs uppercase tracking-[0.3em] text-[#3533cd] font-semibold">{item.num}</span>
                <h3 className="text-xl font-bold text-white mt-2 mb-3">{item.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Investment — split panel */}
      <section id="investment" className="py-20 md:py-28 bg-[#0d1321]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-10 items-center bg-[#0a0f1a] rounded-2xl border border-white/5 p-8 md:p-12">
            <div>
              <span className="uppercase tracking-[0.3em] text-sm text-[#3533cd] font-semibold mb-4 block">Investment & Fit</span>
              <h2 className="text-3xl md:text-4xl font-black text-white mb-4">De-risk First.</h2>
              <p className="text-slate-400 leading-relaxed">Best for early-stage exploring, market validation, and strategic de-risking.</p>
            </div>
            <div className="lg:text-right">
              <p className="text-sm text-slate-500 uppercase tracking-wider">Pricing</p>
              <p className="text-3xl md:text-4xl font-black text-white mt-2 mb-8">Starting from $5,000 USD</p>
              <a
                href="mailto:business@globalpropeller.com"
                className="group inline-flex items-center gap-3 bg-[#3533cd] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#008080] transition-colors duration-300"
              >
                Let's Talk
                <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
