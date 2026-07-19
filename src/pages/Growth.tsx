import { useEffect } from 'react';
import { ArrowRight, ArrowDown, UserCog, Shield, DollarSign } from 'lucide-react';

const deliverables = [
  { num: '01', title: 'Fractional COO/CSO', desc: 'Active, on-the-ground management of your China-based operations, supply chain quality control, and vendor relationships.', icon: UserCog },
  { num: '02', title: 'IP & Crisis Management', desc: 'Proactive oversight of intellectual property protection, compliance adherence, and rapid resolution of supply chain disruptions.', icon: Shield },
  { num: '03', title: 'Cross-Border Fundraising', desc: 'Pitch deck localization and direct introductions to top-tier USD funds or Chinese strategic CVCs.', icon: DollarSign },
];

export default function Growth() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="min-h-screen bg-[#0a0f1a]">
      {/* Hero — split: text left, stacked giant typography right */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 md:px-6 pt-32 pb-20 w-full grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="uppercase tracking-[0.3em] text-sm text-slate-400 font-semibold mb-4 block">Phase 03 — Growth</span>
            <h1 className="text-4xl md:text-6xl font-black text-white leading-tight mb-6">
              Tailored Solutions.<br />Seamless Connections.
            </h1>
            <p className="text-lg text-slate-400 max-w-xl mb-10">
              Your transformation starts here. We bridge the gap between your business needs and China's most innovative tech providers.
            </p>
            <a
              href="#investment"
              onClick={(e) => { e.preventDefault(); document.querySelector('#investment')?.scrollIntoView({ behavior: 'smooth' }); }}
              className="group inline-flex items-center gap-3 bg-[#3533cd] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#008080] transition-colors duration-300"
            >
              Explore the Model
              <ArrowDown className="w-5 h-5 transition-transform duration-300 group-hover:translate-y-1" />
            </a>
          </div>

          {/* Stacked verb typography */}
          <div className="hidden lg:block select-none pointer-events-none text-right">
            {['Execute.', 'Scale.', 'Grow.'].map((word, i) => (
              <span
                key={word}
                className="block font-black leading-[0.95] tracking-tighter"
                style={{
                  fontSize: '9vmin',
                  color: i === 2 ? '#008080' : 'transparent',
                  WebkitTextStroke: i === 2 ? '0' : '1px rgba(255,255,255,0.25)',
                }}
              >
                {word}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* China Acceleration — editorial row */}
      <section className="py-20 md:py-28 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 md:px-6 grid lg:grid-cols-12 gap-8">
          <div className="lg:col-span-4">
            <span className="uppercase tracking-[0.3em] text-sm text-[#3533cd] font-semibold mb-4 block">China Acceleration</span>
            <h2 className="text-3xl md:text-5xl font-black text-white leading-tight">Flip the Script.</h2>
          </div>
          <div className="lg:col-span-8 space-y-4">
            <p className="text-lg text-slate-400 leading-relaxed">Successfully navigating a "soft landing" in China might be wishful thinking — sometimes it's just not in the cards. Instead, flip the script.</p>
            <p className="text-lg text-slate-400 leading-relaxed">For overseas incubators, accelerators, and venture studios, we assist in bringing your portfolio startups to the Chinese market.</p>
          </div>
        </div>
      </section>

      {/* The Challenge — quote band */}
      <section className="py-20 md:py-28 bg-[#0d1321]">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <span className="uppercase tracking-[0.3em] text-sm text-[#008080] font-semibold mb-6 block">The Challenge</span>
          <h2 className="text-3xl md:text-5xl font-black text-white leading-tight mb-8">Execution Without the Overhead.</h2>
          <blockquote className="border-l-2 border-[#008080] pl-6 md:pl-8 text-lg md:text-xl text-slate-300 leading-relaxed">
            Managing a cross-border operation is a full-time job. Hiring a full-time executive team in China is expensive and risky. Without trusted boots on the ground, you face IP theft and missed opportunities.
          </blockquote>
        </div>
      </section>

      {/* Key Deliverables — numbered editorial rows */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="mb-12 md:mb-16">
            <span className="uppercase tracking-[0.3em] text-sm text-[#3533cd] font-semibold mb-4 block">What's Included</span>
            <h2 className="text-3xl md:text-5xl font-black text-white">Key Deliverables.</h2>
          </div>
          <div>
            {deliverables.map((item) => (
              <div
                key={item.num}
                className="group grid md:grid-cols-12 gap-4 md:gap-8 items-center py-10 md:py-14 border-t border-white/10 last:border-b transition-colors duration-300 hover:bg-white/[0.02]"
              >
                <span className="md:col-span-3 font-black leading-none text-white/10 group-hover:text-[#3533cd]/40 transition-colors duration-300 text-7xl md:text-8xl select-none">
                  {item.num}
                </span>
                <div className="md:col-span-4">
                  <div className="flex items-center gap-3 mb-2">
                    <item.icon className="w-6 h-6 text-[#3533cd]" />
                    <h3 className="text-2xl font-bold text-white">{item.title}</h3>
                  </div>
                </div>
                <p className="md:col-span-5 text-slate-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Investment — split panel */}
      <section id="investment" className="py-20 md:py-28 bg-[#0d1321]">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-10 items-center bg-[#0a0f1a] rounded-2xl border border-white/5 p-8 md:p-12">
            <div>
              <span className="uppercase tracking-[0.3em] text-sm text-slate-400 font-semibold mb-4 block">Investment & Fit</span>
              <h2 className="text-3xl md:text-4xl font-black text-white mb-4">Your China Team,<br />On Demand.</h2>
              <p className="text-slate-400 leading-relaxed">Best for high-growth ventures in AI/Robotics requiring on-the-ground execution.</p>
            </div>
            <div className="lg:text-right">
              <p className="text-sm text-slate-500 uppercase tracking-wider">Pricing</p>
              <p className="text-3xl md:text-4xl font-black text-white mt-2">$5,000 USD/month</p>
              <p className="text-sm text-slate-500 mt-2 mb-8">Retainer + 3-5% Success Fee or strategic equity</p>
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
