import { useState } from 'react';

const projects = [
  { name: 'Immersion', category: 'Executive Innovation Immersion', image: '/images/project-immersion.jpg' },
  { name: 'Acceleration', category: 'China Intelligence & Global Acceleration', image: '/images/project-acceleration.jpg' },
  { name: 'Venture Building', category: 'JV Model', image: '/images/project-venture.jpg' },
];

export default function PortfolioSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="portfolio" className="min-h-screen bg-[#0a0f1a] py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="mb-12 md:mb-16">
          <span className="uppercase tracking-[0.3em] text-sm text-[#3533cd] font-semibold mb-4 block">Selected Projects</span>
          <h2 className="text-4xl md:text-6xl font-black text-white">What We Do.</h2>
        </div>

        <div
          className="flex flex-col md:flex-row gap-3 md:gap-4"
          style={{ minHeight: '50vh' }}
          onMouseLeave={() => setActiveIndex(0)}
        >
          {projects.map((project, index) => (
            <div
              key={project.name}
              onMouseEnter={() => setActiveIndex(index)}
              className="relative rounded-2xl overflow-hidden cursor-pointer transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]"
              style={{ flex: activeIndex === index ? '5' : '1', minHeight: '200px' }}
            >
              <img
                src={project.image}
                alt={project.name}
                className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] ${
                  activeIndex === index ? 'opacity-100 blur-none scale-100' : 'opacity-50 blur-sm scale-105'
                }`}
              />
              <div className={`absolute inset-0 transition-opacity duration-700 ${activeIndex === index ? 'bg-black/30' : 'bg-black/60'}`} />
              <div className="absolute inset-0 flex flex-col justify-end p-4 md:p-6">
                <span className={`text-xs uppercase tracking-wider text-white/70 font-semibold mb-1 transition-opacity duration-500 ${activeIndex === index ? 'opacity-100' : 'opacity-60'}`}>
                  {project.category}
                </span>
                <h3 className={`text-2xl md:text-4xl font-bold text-white whitespace-normal md:whitespace-nowrap transition-all duration-700 ${activeIndex === index ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-70'}`}>
                  {project.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
