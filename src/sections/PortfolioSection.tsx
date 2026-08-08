import { useState } from 'react';

const methods = [
  {
    letter: 'I',
    name: 'Scouting Intelligence',
    description: 'We identify and match the right technologies, companies, founders, suppliers, investors, and ecosystem partners based on your strategic needs. Our scouting goes beyond public databases.',
    image: '/images/project-immersion.jpg',
  },
  {
    letter: 'C',
    name: 'Cross-Cultural Communication',
    description: 'Cross-border success often depends on what is left unsaid. We help clients navigate differences in business culture, negotiation style, decision-making logic, partnership expectations, and communication norms.',
    image: '/images/project-acceleration.jpg',
  },
  {
    letter: 'N',
    name: 'Curated Network & Local Guanxi',
    description: 'We activate a carefully selected network of entrepreneurs, technical experts, corporate leaders, investors, universities, associations, and trusted local operators. Our network is built on relevance, credibility, and execution capability.',
    image: '/images/project-venture.jpg',
  },
];

export default function PortfolioSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="portfolio" className="min-h-screen bg-[#0a0f1a] py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12 md:mb-16">
          <span className="uppercase tracking-[0.3em] text-sm text-[#3533cd] font-semibold mb-4 block">Our Method</span>
          <h2 className="text-4xl md:text-6xl font-black text-white mb-4 md:mb-6">Intelligence. Communication.<br />Network.</h2>
          <p className="text-sm md:text-lg text-slate-400 max-w-2xl">
            Successful cross-border innovation requires more than information. It requires context, trust, timing, and the right people at the table.
          </p>
        </div>

        <div
          className="flex flex-col md:flex-row gap-3 md:gap-4"
          style={{ minHeight: '60vh' }}
          onMouseLeave={() => setActiveIndex(0)}
        >
          {methods.map((method, index) => (
            <div
              key={method.letter}
              onMouseEnter={() => setActiveIndex(index)}
              className="relative rounded-2xl overflow-hidden cursor-pointer transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]"
              style={{ flex: activeIndex === index ? '5' : '1', minHeight: '200px' }}
            >
              <img
                src={method.image}
                alt={method.name}
                className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] ${
                  activeIndex === index ? 'opacity-100 blur-none scale-100' : 'opacity-50 blur-sm scale-105'
                }`}
              />
              <div className={`absolute inset-0 transition-opacity duration-700 ${activeIndex === index ? 'bg-black/50' : 'bg-black/60'}`} />
              {/* Giant letter watermark */}
              <span
                className={`absolute top-4 right-6 font-black leading-none text-[#3533cd] select-none transition-all duration-700 ${
                  activeIndex === index ? 'text-7xl md:text-9xl opacity-70' : 'text-5xl opacity-40'
                }`}
              >
                {method.letter}
              </span>
              <div className="absolute inset-0 flex flex-col justify-end p-4 md:p-6">
                <h3 className={`text-2xl md:text-3xl font-bold text-white transition-all duration-700 ${activeIndex === index ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-70'}`}>
                  {method.name}
                </h3>
                <p
                  className={`text-sm text-slate-300 leading-relaxed max-w-lg mt-3 transition-all duration-700 ${
                    activeIndex === index ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 hidden md:block'
                  }`}
                >
                  {method.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
