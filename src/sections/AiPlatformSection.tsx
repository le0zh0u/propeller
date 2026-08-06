import { Database, LineChart, Radar, BellRing, Network } from 'lucide-react';

const capabilities = [
  { icon: Database, text: '5000+ filtered AI Builder and Innovator profiles' },
  { icon: LineChart, text: 'Patent, financing, team, and company-change tracking' },
  { icon: Radar, text: 'Real-time monitoring of breakthrough technologies' },
  { icon: BellRing, text: 'Smart alerts across priority technology sectors' },
  { icon: Network, text: 'China Innovation ecosystem mapping based on Trusted Network across academia, industry, media, and entrepreneurial communities.' },
];

export default function AiPlatformSection() {
  return (
    <section className="bg-[#0a0f1a] py-20 md:py-32 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-start">
          {/* Left: heading + intro */}
          <div>
            <span className="uppercase tracking-[0.3em] text-sm text-[#008080] font-semibold mb-4 block">We&rsquo;re AI-propelled</span>
            <h2 className="text-4xl md:text-6xl font-black text-white mb-6">Intelligence<br />Platform.</h2>
            <p className="text-base md:text-lg text-slate-400 leading-relaxed max-w-md">
              PROPELLER is building an AI-powered open-source intelligence platform designed to decode China&rsquo;s AI and robotics ecosystem for global businesses.
            </p>
          </div>

          {/* Right: capability list */}
          <ul className="space-y-4 md:space-y-5 md:pt-4">
            {capabilities.map((item, i) => (
              <li
                key={i}
                className="group flex items-start gap-4 bg-[#0d1321]/85 rounded-2xl p-5 md:p-6 border border-white/5 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#008080]/30"
              >
                <div className="w-10 h-10 rounded-xl bg-[#3533cd] flex items-center justify-center shrink-0">
                  <item.icon className="w-5 h-5 text-white" />
                </div>
                <p className="text-sm md:text-base text-slate-300 leading-relaxed pt-2">{item.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
