import { useEffect } from 'react';
import { ArrowRight, Waves, Wind, Anchor, Building2 } from 'lucide-react';

const propellerPrinciples = [
  { title: 'Pulls in diverse currents', desc: 'We absorb perspectives from every culture and vertical, bringing them into productive collision.', icon: Waves, accent: '#3533cd' },
  { title: 'Swirls them into productive turbulence', desc: 'We agitate ideas in open collaboration, creating the conditions for breakthrough innovation.', icon: Wind, accent: '#008080' },
  { title: 'Drives the entire vessel forward', desc: 'We thrust solutions toward a healthier, more sustainable horizon.', icon: Anchor, accent: '#3533cd' },
];

export default function OurStory() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="min-h-screen bg-[#0a0f1a] relative overflow-hidden">
      {/* Ambient brand glows */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            background: 'radial-gradient(ellipse at 30% 20%, rgba(53,51,205,0.25) 0%, transparent 50%), radial-gradient(ellipse at 70% 80%, rgba(0,128,128,0.15) 0%, transparent 50%)',
            animation: 'oceanShift 12s ease-in-out infinite alternate',
          }}
        />
        <style>{`
          @keyframes oceanShift {
            0% { transform: translate(0, 0) scale(1); }
            50% { transform: translate(-2%, 1%) scale(1.02); }
            100% { transform: translate(2%, -1%) scale(0.98); }
          }
        `}</style>
      </div>

      <div className="relative z-10">
        {/* Hero — sparkling ocean background */}
        <section className="min-h-[85vh] relative flex items-center justify-center px-4 md:px-6 overflow-hidden">
          {/* Dynamic sparkling ocean (CSS shader-style animation) */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="ocean-caustics absolute inset-0" />
            <div className="ocean-sparkles absolute inset-0" />
            <div className="absolute inset-0 bg-gradient-to-b from-[#0a0f1a]/70 via-transparent to-[#0a0f1a]" />
          </div>
          <style>{`
            @keyframes causticsMove {
              0%   { background-position: 0% 0%, 100% 100%, 50% 50%; }
              50%  { background-position: 25% 35%, 75% 65%, 45% 55%; }
              100% { background-position: 0% 0%, 100% 100%, 50% 50%; }
            }
            .ocean-caustics {
              background:
                radial-gradient(ellipse 60% 40% at 30% 65%, rgba(0,128,128,0.28), transparent 70%),
                radial-gradient(ellipse 50% 35% at 70% 35%, rgba(53,51,205,0.24), transparent 70%),
                radial-gradient(ellipse 40% 30% at 50% 85%, rgba(0,190,190,0.16), transparent 70%);
              animation: causticsMove 14s ease-in-out infinite alternate;
            }
            @keyframes twinkle {
              0%   { opacity: 0.15; transform: translateY(0); }
              100% { opacity: 0.85; transform: translateY(-8px); }
            }
            .ocean-sparkles {
              background-image:
                radial-gradient(1.5px 1.5px at 20px 30px, rgba(255,255,255,0.9), transparent),
                radial-gradient(1px 1px at 75px 95px, rgba(160,220,255,0.8), transparent),
                radial-gradient(2px 2px at 125px 45px, rgba(255,255,255,0.7), transparent),
                radial-gradient(1.5px 1.5px at 165px 125px, rgba(140,200,255,0.8), transparent),
                radial-gradient(1px 1px at 100px 160px, rgba(255,255,255,0.6), transparent);
              background-size: 200px 200px;
              animation: twinkle 3.2s ease-in-out infinite alternate;
            }
            .ocean-sparkles::before {
              content: '';
              position: absolute;
              inset: 0;
              background-image:
                radial-gradient(1.5px 1.5px at 50px 70px, rgba(255,255,255,0.8), transparent),
                radial-gradient(1px 1px at 140px 30px, rgba(170,225,255,0.7), transparent),
                radial-gradient(2px 2px at 220px 110px, rgba(255,255,255,0.6), transparent),
                radial-gradient(1.5px 1.5px at 90px 180px, rgba(150,210,255,0.7), transparent);
              background-size: 320px 320px;
              animation: twinkle 4.6s ease-in-out infinite alternate-reverse;
            }
            .ocean-sparkles::after {
              content: '';
              position: absolute;
              inset: 0;
              background-image:
                radial-gradient(1px 1px at 40px 120px, rgba(255,255,255,0.7), transparent),
                radial-gradient(1.5px 1.5px at 180px 60px, rgba(160,220,255,0.8), transparent),
                radial-gradient(1px 1px at 240px 200px, rgba(255,255,255,0.6), transparent);
              background-size: 260px 260px;
              animation: twinkle 3.9s ease-in-out infinite alternate;
              animation-delay: -1.4s;
            }
          `}</style>
          <div className="relative text-center max-w-4xl mx-auto">
            <span className="uppercase tracking-[0.3em] text-sm text-[#008080] font-semibold mb-8 block">Our Story</span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-[1.2] mb-10">
              Propelling Cross-Border<br />Innovation.
            </h1>
            <p className="text-lg md:text-xl text-slate-400 font-light leading-loose">
              — Because competent ideas refuse to stay in their lane.
            </p>
          </div>
        </section>

        {/* Origin Story */}
        <section className="py-20 md:py-28">
          <div className="max-w-4xl mx-auto px-4 md:px-6">
            <div className="bg-[#0d1321]/85 backdrop-blur-sm rounded-2xl p-8 md:p-12 lg:p-16 border border-white/5">
              <span className="uppercase tracking-[0.3em] text-sm text-[#008080] font-semibold mb-4 block">Our Origin</span>
              <h2 className="text-3xl md:text-4xl font-black text-white mb-8">The Fish That Never Existed.</h2>

              <blockquote className="border-l-2 border-[#008080] pl-6 mb-8 italic text-white/90 text-lg leading-relaxed">
                Some say <a href="https://www.goodreads.com/book/show/50887097-why-fish-don-t-exist" target="_blank" rel="noopener noreferrer" className="text-[#008080] underline decoration-[#008080]/40 underline-offset-4 hover:decoration-[#008080] transition-colors not-italic font-semibold">the fish</a> never existed, yet its legend swims on: a creature so elusive it forced us to reconsider the entire food chain.
              </blockquote>

              <p className="text-slate-400 leading-relaxed mb-6">
                That myth taught us two things — nature always runs its own operating system, and real innovation happens when you delete the borders from the map. In chasing that phantom fin, we uncovered our own cross-border innovation formula, the spark that became <strong className="text-white">PROPELLER</strong>.
              </p>

              <p className="text-slate-400 leading-relaxed mb-6">
                Like any thriving reef, a resilient future demands diversity. We borrow the <strong className="text-[#008080]">open-source ethos</strong> — code, coral, and crazy ideas are all stronger when shared — and invite every industry vertical to pour its unique nutrients into a common tidepool.
              </p>

              <p className="text-slate-400 leading-relaxed">
                Our spiritual mascot is MIT's ramshackle Building 20, the "<strong className="text-[#008080]">magical incubator</strong>" where a linguist, an acoustics maverick, and a band of proto-hackers reinvented half the modern world simply because no one told them to stay in their lane.
              </p>
            </div>
          </div>
        </section>

        {/* MIT Building 20 */}
        <section className="pb-20 md:pb-28">
          <div className="max-w-4xl mx-auto px-4 md:px-6">
            <div className="bg-[#0d1321]/85 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-white/5">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-xl bg-[#3533cd] flex items-center justify-center shrink-0">
                  <Building2 className="w-7 h-7 text-white" />
                </div>
                <div>
                  <span className="uppercase tracking-[0.3em] text-xs text-[#3533cd] font-semibold">MIT 2.0</span>
                  <h3 className="text-2xl font-bold text-white">Building 20 — The Magical Incubator</h3>
                </div>
              </div>

              {/* MIT Building 20 (MIT 2.0) */}
              <div className="rounded-xl overflow-hidden mb-8 border border-white/10">
                <img
                  src="/images/mit-building-20.png"
                  alt="MIT Building 20 (MIT 2.0)"
                  className="w-full aspect-[16/9] object-cover"
                />
              </div>
              <p className="text-slate-400 leading-relaxed mb-4">
                Building 20 at MIT was a ramshackle wooden structure that housed some of the most groundbreaking innovations of the 20th century. Its genius lay not in its architecture, but in its deliberate lack of organization — forcing researchers from different disciplines to collide, share ideas, and cross-pollinate.
              </p>
              <p className="text-slate-400 leading-relaxed">
                PROPELLER is our attempt to recreate that magic in the cross-border context. We bring together innovators from different cultures, industries, and backgrounds, creating the conditions for breakthrough ideas to emerge naturally.
              </p>
            </div>
          </div>
        </section>

        {/* Why Propeller — 3-column principle cards */}
        <section className="py-20 md:py-28 border-t border-white/5">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <div className="mb-12 md:mb-16">
              <span className="uppercase tracking-[0.3em] text-sm text-[#008080] font-semibold mb-4 block">Why Propeller?</span>
              <h2 className="text-3xl md:text-5xl font-black text-white">What a Propeller Does.</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-4 md:gap-6">
              {propellerPrinciples.map((item, i) => (
                <div
                  key={item.title}
                  className="group relative bg-[#0d1321]/85 backdrop-blur-sm rounded-2xl p-8 border border-white/5 transition-all duration-300 hover:-translate-y-1"
                  style={{ ['--accent' as string]: item.accent }}
                >
                  <div
                    className="absolute top-0 left-0 right-0 h-px opacity-60"
                    style={{ background: `linear-gradient(to right, ${item.accent}, transparent)` }}
                  />
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-6"
                    style={{ backgroundColor: item.accent }}
                  >
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-xs uppercase tracking-[0.3em] font-semibold" style={{ color: item.accent }}>0{i + 1}</span>
                  <h3 className="text-xl font-bold text-white mt-2 mb-3">{item.title}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

            {/* Closing quote + CTA */}
            <div className="mt-20 md:mt-28 text-center">
              <p className="text-3xl md:text-5xl font-black text-white leading-tight mb-4">
                "Let's make waves,<br />not walls."
              </p>
              <p className="text-slate-400 mb-10 max-w-xl mx-auto">
                Let's be the propeller that turns cross-border curiosity into tomorrow's breakthroughs.
              </p>
              <a
                href="mailto:business@globalpropeller.com"
                className="group inline-flex items-center gap-3 bg-[#3533cd] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#008080] transition-colors duration-300"
              >
                Let's Talk
                <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
