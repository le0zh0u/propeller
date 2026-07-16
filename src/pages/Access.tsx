import { useEffect } from 'react';
import { DoorOpen, MapPin, MessageSquare, Handshake } from 'lucide-react';

const deliverables = [
  { num: '01', title: 'Curated Executive Expedition', desc: 'A meticulously planned itinerary featuring factory deep-dives, supplier audits, and meetings with potential investors or clients.', icon: MapPin },
  { num: '02', title: '"China Speed" Closed-Door Workshops', desc: 'Exclusive, off-the-record sessions with leading Chinese AI/Robotics founders and technical experts.', icon: MessageSquare },
  { num: '03', title: 'Agile Vetting & Negotiation Support', desc: 'Deep background checks on 2-3 core partners, alongside active support in cross-cultural negotiations.', icon: Handshake },
];

export default function Access() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="min-h-screen pt-16">
      <section className="py-24 md:py-32 bg-[#008080]">
        <div className="max-w-7xl mx-auto px-4 md:px-6 text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-white/60 mb-4 block">Phase 02</span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-6">Skip the PR Tours.<br />Parachute into the Inner Circle.</h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">Bypass the noise and connect directly with vetted decision-makers in China's AI and robotics hubs.</p>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-[#0a0f1a]">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#008080] mb-3 block">The Challenge</span>
              <h2 className="text-3xl md:text-5xl font-black text-white mb-4">Accessing the Real Ecosystem.</h2>
              <p className="text-lg text-slate-400 leading-relaxed mb-4">Finding the right factory, securing meetings with actual decision-makers, and navigating cross-cultural negotiations is a massive hurdle.</p>
              <p className="text-lg text-slate-400 leading-relaxed font-medium text-white/80">You don't need a tour guide; you need an insider.</p>
            </div>
            <div className="rounded-2xl overflow-hidden bg-gradient-to-br from-[#008080]/30 to-[#3533cd]/30 aspect-video flex items-center justify-center">
              <DoorOpen className="w-24 h-24 text-[#008080] opacity-60" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-[#0d1321]">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="rounded-2xl overflow-hidden bg-gradient-to-br from-[#3533cd]/30 to-[#008080]/30 aspect-video flex items-center justify-center order-2 lg:order-1">
              <MessageSquare className="w-24 h-24 text-[#3533cd] opacity-60" />
            </div>
            <div className="order-1 lg:order-2">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#3533cd] mb-3 block">The Solution</span>
              <h2 className="text-3xl md:text-5xl font-black text-white mb-4">Agile Sourcing & Tech Transfer.</h2>
              <p className="text-lg text-slate-400 leading-relaxed">We leverage our deep roots in the Yangtze River Delta to bypass middle-management and act as your local advisors.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-[#0a0f1a]">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#008080] mb-3 block">What's Included</span>
            <h2 className="text-3xl md:text-5xl font-black text-white">Key Deliverables.</h2>
          </div>
          <div className="space-y-6">
            {deliverables.map((item) => (
              <div key={item.num} className="flex items-start gap-6 bg-[#0d1321] rounded-2xl p-6 md:p-8 border border-white/5">
                <div className="w-14 h-14 rounded-xl bg-[#008080] flex items-center justify-center shrink-0">
                  <item.icon className="w-7 h-7 text-white" />
                </div>
                <div>
                  <span className="text-sm font-semibold text-[#008080]">{item.num}</span>
                  <h3 className="text-xl font-semibold text-white mt-1 mb-2">{item.title}</h3>
                  <p className="text-slate-400 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-[#008080]/10">
        <div className="max-w-7xl mx-auto px-4 md:px-6 text-center">
          <div className="bg-[#0d1321] rounded-2xl p-8 md:p-12 max-w-2xl mx-auto border border-white/5">
            <div className="w-16 h-16 rounded-full bg-[#008080] flex items-center justify-center mx-auto mb-6">
              <DoorOpen className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl font-black text-white mb-4">Investment & Fit</h2>
            <p className="text-slate-400 mb-6">Best For: Scale-ups ready for on-the-ground execution and agile sourcing.</p>
            <div className="pt-6 border-t border-white/10">
              <p className="text-sm text-slate-500 uppercase tracking-wider">Pricing</p>
              <p className="text-3xl md:text-4xl font-black text-white mt-2">min $15,000 USD</p>
              <p className="text-sm text-slate-500 mt-2">(Project Fee, excluding travel expenses)</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
