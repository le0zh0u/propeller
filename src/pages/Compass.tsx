import { useEffect } from 'react';
import { Target, FileText, Users, Map } from 'lucide-react';

const deliverables = [
  { num: '01', title: 'Market Reality Check Deck', desc: 'A customized briefing highlighting immediate opportunities, technology readiness levels, and potential regulatory or supply chain landmines.', icon: FileText },
  { num: '02', title: 'Vetted Partner Long-list', desc: 'A curated list of 3-5 highly capable upstream/downstream suppliers or tech partners, complete with a strategic "Why Them" analysis.', icon: Users },
  { num: '03', title: 'The Roadmap Session', desc: 'A 90-minute deep-dive consultation with our senior partners, culminating in an actionable Cross-Border Execution Roadmap.', icon: Map },
];

export default function Compass() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="min-h-screen pt-16">
      {/* Hero */}
      <section className="py-24 md:py-32 bg-[#3533cd]">
        <div className="max-w-7xl mx-auto px-4 md:px-6 text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-white/60 mb-4 block">Phase 01</span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-6">Before You Invest Capital,<br />Invest 90 Minutes.</h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">Get an unfiltered, zero-fluff reality check on China's AI and robotics ecosystem before committing heavy resources.</p>
        </div>
      </section>

      {/* The Challenge */}
      <section className="py-20 md:py-28 bg-[#0a0f1a]">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#3533cd] mb-3 block">The Challenge</span>
              <h2 className="text-3xl md:text-5xl font-black text-white mb-4">Navigating the Noise.</h2>
              <p className="text-lg text-slate-400 leading-relaxed mb-4">To the outside world, China's tech ecosystem is obscured by media noise, PR fluff, and complex geopolitical narratives. The biggest risk isn't moving too slow—it's moving in the wrong direction.</p>
              <p className="text-lg text-slate-400 leading-relaxed">You need to know if your technology is a fit, if the supply chain is ready, and if the regulatory environment is safe for your IP.</p>
            </div>
            <div className="rounded-2xl overflow-hidden bg-gradient-to-br from-[#3533cd]/30 to-[#008080]/30 aspect-video flex items-center justify-center">
              <Target className="w-24 h-24 text-[#3533cd] opacity-60" />
            </div>
          </div>
        </div>
      </section>

      {/* The Solution */}
      <section className="py-20 md:py-28 bg-[#0d1321]">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="rounded-2xl overflow-hidden bg-gradient-to-br from-[#008080]/30 to-[#3533cd]/30 aspect-video flex items-center justify-center order-2 lg:order-1">
              <FileText className="w-24 h-24 text-[#008080] opacity-60" />
            </div>
            <div className="order-1 lg:order-2">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#008080] mb-3 block">The Solution</span>
              <h2 className="text-3xl md:text-5xl font-black text-white mb-4">Strategic De-risking.</h2>
              <p className="text-lg text-slate-400 leading-relaxed mb-4">The China Compass is your low-risk, high-impact entry point. We provide a surgical diagnostic of your specific niche.</p>
              <p className="text-lg text-slate-400 leading-relaxed">If your product isn't a fit, we'll tell you immediately—saving you hundreds of thousands in trial-and-error costs.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Deliverables */}
      <section className="py-20 md:py-28 bg-[#0a0f1a]">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#3533cd] mb-3 block">What's Included</span>
            <h2 className="text-3xl md:text-5xl font-black text-white">Key Deliverables.</h2>
          </div>
          <div className="space-y-6">
            {deliverables.map((item) => (
              <div key={item.num} className="flex items-start gap-6 bg-[#0d1321] rounded-2xl p-6 md:p-8 border border-white/5">
                <div className="w-14 h-14 rounded-xl bg-[#3533cd] flex items-center justify-center shrink-0">
                  <item.icon className="w-7 h-7 text-white" />
                </div>
                <div>
                  <span className="text-sm font-semibold text-[#3533cd]">{item.num}</span>
                  <h3 className="text-xl font-semibold text-white mt-1 mb-2">{item.title}</h3>
                  <p className="text-slate-400 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Investment */}
      <section className="py-20 md:py-28 bg-[#3533cd]/10">
        <div className="max-w-7xl mx-auto px-4 md:px-6 text-center">
          <div className="bg-[#0d1321] rounded-2xl p-8 md:p-12 max-w-2xl mx-auto border border-white/5">
            <div className="w-16 h-16 rounded-full bg-[#3533cd] flex items-center justify-center mx-auto mb-6">
              <Target className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl font-black text-white mb-4">Investment & Fit</h2>
            <p className="text-slate-400 mb-6">Best For: Early-stage exploring, market validation, and strategic de-risking.</p>
            <div className="pt-6 border-t border-white/10">
              <p className="text-sm text-slate-500 uppercase tracking-wider">Pricing</p>
              <p className="text-3xl md:text-4xl font-black text-white mt-2">Starting from $5,000 USD</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
