const capabilities = [
  { num: '01', text: 'Patent, financing, team, and company-change tracking' },
  { num: '02', text: 'Real-time monitoring of breakthrough technologies' },
  { num: '03', text: 'Smart alerts across priority technology sectors' },
  { num: '04', text: 'China Innovation ecosystem mapping based on Trusted Network across academia, industry, media, and entrepreneurial communities.' },
];

export default function AiPlatformSection() {
  return (
    <section className="bg-[#0a0f1a] py-20 md:py-32 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20">
          {/* Left: heading + intro + hero stat */}
          <div className="flex flex-col">
            <span className="uppercase tracking-[0.3em] text-sm text-[#008080] font-semibold mb-4 block">We&rsquo;re AI-propelled</span>
            <h2 className="text-4xl md:text-6xl font-black text-white mb-6">Intelligence<br />Platform.</h2>
            <p className="text-base md:text-lg text-slate-400 leading-relaxed max-w-md mb-12 md:mb-16">
              PROPELLER is building an AI-powered open-source intelligence platform designed to decode China&rsquo;s AI and robotics ecosystem for global businesses.
            </p>
            <div className="mt-auto border-t border-white/10 pt-8">
              <span className="block text-6xl md:text-8xl font-black text-white leading-none tracking-tighter">
                5000<span className="text-[#3533cd]">+</span>
              </span>
              <span className="block mt-3 text-sm md:text-base text-slate-500">
                filtered AI Builder and Innovator profiles
              </span>
            </div>
          </div>

          {/* Right: minimal numbered list */}
          <ul className="md:pt-4">
            {capabilities.map((item) => (
              <li
                key={item.num}
                className="group flex items-baseline gap-6 md:gap-8 py-7 md:py-9 border-t border-white/10 last:border-b transition-colors duration-300 hover:border-[#3533cd]/40"
              >
                <span className="font-mono text-sm text-[#3533cd] font-semibold shrink-0 transition-transform duration-300 group-hover:-translate-y-0.5">
                  {item.num}
                </span>
                <p className="text-lg md:text-2xl text-slate-300 leading-snug transition-colors duration-300 group-hover:text-white">
                  {item.text}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
