import { useEffect } from 'react';
import { TrendingUp, UserCog, Shield, DollarSign } from 'lucide-react';

const deliverables = [
  { num: '01', title: 'Fractional COO/CSO', desc: 'Active, on-the-ground management of your China-based operations, supply chain quality control, and vendor relationships.', icon: UserCog },
  { num: '02', title: 'IP & Crisis Management', desc: 'Proactive oversight of intellectual property protection, compliance adherence, and rapid resolution of supply chain disruptions.', icon: Shield },
  { num: '03', title: 'Cross-Border Fundraising', desc: 'Pitch deck localization and direct introductions to top-tier USD funds or Chinese strategic CVCs.', icon: DollarSign },
];

export default function Growth() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="min-h-screen pt-16">
      <section className="py-24 md:py-32 bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 md:px-6 text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-white/60 mb-4 block">Phase 03</span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-6">Tailored Solutions.<br />Seamless Connections.</h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">Your transformation starts here. We bridge the gap between your business needs and China's most innovative tech providers.</p>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-[#0a0f1a]">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#3533cd] mb-3 block">China Acceleration</span>
              <h2 className="text-3xl md:text-5xl font-black text-white mb-4">Flip the Script.</h2>
              <p className="text-lg text-slate-400 leading-relaxed mb-4">Successfully navigating a "soft landing" in China might be wishful thinking—sometimes it's just not in the cards. Instead, flip the script.</p>
              <p className="text-lg text-slate-400 leading-relaxed">For overseas incubators, accelerators, and venture studios, we assist in bringing your portfolio startups to the Chinese market.</p>
            </div>
            <div className="rounded-2xl overflow-hidden bg-gradient-to-br from-slate-700/50 to-[#3533cd]/30 aspect-video flex items-center justify-center">
              <TrendingUp className="w-24 h-24 text-[#3533cd] opacity-60" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-[#0d1321]">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="rounded-2xl overflow-hidden bg-gradient-to-br from-[#008080]/30 to-slate-700/50 aspect-video flex items-center justify-center order-2 lg:order-1">
              <Shield className="w-24 h-24 text-[#008080] opacity-60" />
            </div>
            <div className="order-1 lg:order-2">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#008080] mb-3 block">The Challenge</span>
              <h2 className="text-3xl md:text-5xl font-black text-white mb-4">Execution Without the Overhead.</h2>
              <p className="text-lg text-slate-400 leading-relaxed">Managing a cross-border operation is a full-time job. Hiring a full-time executive team in China is expensive and risky. Without trusted boots on the ground, you face IP theft and missed opportunities.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-[#0a0f1a]">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#3533cd] mb-3 block">What's Included</span>
            <h2 className="text-3xl md:text-5xl font-black text-white">Key Deliverables.</h2>
          </div>
          <div className="space-y-6">
            {deliverables.map((item) => (
              <div key={item.num} className="flex items-start gap-6 bg-[#0d1321] rounded-2xl p-6 md:p-8 border border-white/5">
                <div className="w-14 h-14 rounded-xl bg-slate-700 flex items-center justify-center shrink-0">
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

      <section className="py-20 md:py-28 bg-slate-800/10">
        <div className="max-w-7xl mx-auto px-4 md:px-6 text-center">
          <div className="bg-[#0d1321] rounded-2xl p-8 md:p-12 max-w-2xl mx-auto border border-white/5">
            <div className="w-16 h-16 rounded-full bg-slate-700 flex items-center justify-center mx-auto mb-6">
              <TrendingUp className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl font-black text-white mb-4">Investment & Fit</h2>
            <p className="text-slate-400 mb-6">Best For: High-growth ventures in AI/Robotics requiring on-the-ground execution.</p>
            <div className="pt-6 border-t border-white/10">
              <p className="text-sm text-slate-500 uppercase tracking-wider">Pricing</p>
              <p className="text-3xl md:text-4xl font-black text-white mt-2">$5,000 USD/month</p>
              <p className="text-sm text-slate-500 mt-2">Retainer + 3-5% Success Fee or strategic equity</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
