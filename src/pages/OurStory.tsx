import { useEffect } from 'react';
import { Waves, Wind, Anchor, Building2 } from 'lucide-react';

export default function OurStory() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="min-h-screen relative">
      {/* Ocean Animation Background */}
      <div className="fixed inset-0 z-0 overflow-hidden">
        {/* Base dark gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a1628] via-[#0d1f3c] to-[#0a0f1a]" />

        {/* Animated shimmer layers */}
        <div
          className="absolute inset-0 opacity-30"
          style={{
            background: 'radial-gradient(ellipse at 30% 50%, rgba(53,51,205,0.3) 0%, transparent 50%), radial-gradient(ellipse at 70% 30%, rgba(0,128,128,0.2) 0%, transparent 50%)',
            animation: 'oceanShift 12s ease-in-out infinite alternate',
          }}
        />
        <div
          className="absolute inset-0 opacity-20"
          style={{
            background: 'radial-gradient(ellipse at 60% 70%, rgba(53,51,205,0.25) 0%, transparent 40%), radial-gradient(ellipse at 20% 20%, rgba(0,128,128,0.15) 0%, transparent 40%)',
            animation: 'oceanShift 15s ease-in-out infinite alternate-reverse',
          }}
        />

        {/* Sparkle particles */}
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.08) 1px, transparent 1px)', backgroundSize: '40px 40px', animation: 'sparkle 8s linear infinite' }} />
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle, rgba(0,128,128,0.1) 1px, transparent 1px)', backgroundSize: '60px 60px', animation: 'sparkle 12s linear infinite reverse' }} />

        {/* Wave overlays */}
        <div className="absolute bottom-0 left-0 right-0 h-1/3 opacity-10" style={{ background: 'linear-gradient(to top, rgba(0,128,128,0.3), transparent)' }} />

        <style>{`
          @keyframes oceanShift {
            0% { transform: translate(0, 0) scale(1); }
            50% { transform: translate(-2%, 1%) scale(1.02); }
            100% { transform: translate(2%, -1%) scale(0.98); }
          }
          @keyframes sparkle {
            0% { transform: translateY(0); opacity: 0.5; }
            50% { opacity: 1; }
            100% { transform: translateY(-20px); opacity: 0.5; }
          }
        `}</style>
      </div>

      {/* Content */}
      <div className="relative z-10 pt-16">
        {/* Hero */}
        <section className="min-h-[80vh] flex items-center justify-center px-4 md:px-6">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black italic text-white mb-4 drop-shadow-lg">
              Propelling Cross-Border Innovation
            </h1>
            <p className="text-lg md:text-xl text-[#008080] font-light">
              — Because the Competent Ideas Refuse to Stay in Their Lane
            </p>
          </div>
        </section>

        {/* Origin Story */}
        <section className="py-20 md:py-28">
          <div className="max-w-4xl mx-auto px-4 md:px-6">
            <div className="bg-[#0a0f1a]/85 backdrop-blur-sm rounded-2xl p-8 md:p-12 lg:p-16 text-white border border-white/5">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#008080] mb-4 block">Our Origin</span>
              <h2 className="text-3xl md:text-4xl font-black mb-8">The Fish That Never Existed</h2>

              <blockquote className="border-l-4 border-[#008080] pl-6 mb-8 italic text-white/90 text-lg leading-relaxed">
                Some say the fish never existed, yet its legend swims on: a creature so elusive it forced us to reconsider the entire food chain.
              </blockquote>

              <p className="text-white/80 leading-relaxed mb-6">
                That myth taught us two things—nature always runs its own operating system, and real innovation happens when you delete the borders from the map. In chasing that phantom fin, we uncovered our own cross-border innovation formula, the spark that became <strong className="text-white">PROPELLER</strong>.
              </p>

              <p className="text-white/80 leading-relaxed mb-6">
                Like any thriving reef, a resilient future demands diversity. We borrow the <strong className="text-[#008080]">open-source ethos</strong>—code, coral, and crazy ideas are all stronger when shared—and invite every industry vertical to pour its unique nutrients into a common tidepool.
              </p>

              <p className="text-white/80 leading-relaxed">
                Our spiritual mascot is MIT's ramshackle Building 20, the "<strong className="text-[#008080]">magical incubator</strong>" where a linguist, an acoustics maverick, and a band of proto-hackers reinvented half the modern world simply because no one told them to stay in their lane.
              </p>
            </div>
          </div>
        </section>

        {/* MIT Building 20 */}
        <section className="py-8">
          <div className="max-w-4xl mx-auto px-4 md:px-6">
            <div className="bg-[#0d1321]/80 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-white/5">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-xl bg-[#3533cd]/30 flex items-center justify-center">
                  <Building2 className="w-7 h-7 text-[#3533cd]" />
                </div>
                <div>
                  <span className="text-xs uppercase tracking-[0.2em] text-[#3533cd] font-semibold">MIT 2.0</span>
                  <h3 className="text-2xl font-bold text-white">Building 20 — The Magical Incubator</h3>
                </div>
              </div>
              <p className="text-white/70 leading-relaxed mb-4">
                Building 20 at MIT was a ramshackle wooden structure that housed some of the most groundbreaking innovations of the 20th century. Its genius lay not in its architecture, but in its deliberate lack of organization—forcing researchers from different disciplines to collide, share ideas, and cross-pollinate.
              </p>
              <p className="text-white/70 leading-relaxed">
                PROPELLER is our attempt to recreate that magic in the cross-border context. We bring together innovators from different cultures, industries, and backgrounds, creating the conditions for breakthrough ideas to emerge naturally.
              </p>
            </div>
          </div>
        </section>

        {/* Why Propeller */}
        <section className="py-20 md:py-28">
          <div className="max-w-4xl mx-auto px-4 md:px-6">
            <div className="bg-[#0a0f1a]/85 backdrop-blur-sm rounded-2xl p-8 md:p-12 lg:p-16 text-white border border-white/5">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#008080] mb-4 block">Why Propeller?</span>
              <h2 className="text-3xl md:text-4xl font-black mb-10">What a Propeller Does</h2>

              <div className="space-y-8">
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-xl bg-[#3533cd]/30 flex items-center justify-center shrink-0">
                    <Waves className="w-6 h-6 text-[#3533cd]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Pulls in diverse currents</h3>
                    <p className="text-white/70">We absorb perspectives from every culture and vertical, bringing them into productive collision.</p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-xl bg-[#008080]/30 flex items-center justify-center shrink-0">
                    <Wind className="w-6 h-6 text-[#008080]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Swirls them into productive turbulence</h3>
                    <p className="text-white/70">We agitate ideas in open collaboration, creating the conditions for breakthrough innovation.</p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-xl bg-[#3533cd]/30 flex items-center justify-center shrink-0">
                    <Anchor className="w-6 h-6 text-[#3533cd]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Drives the entire vessel forward</h3>
                    <p className="text-white/70">We thrust solutions toward a healthier, more sustainable horizon.</p>
                  </div>
                </div>
              </div>

              <div className="mt-12 pt-8 border-t border-white/10 text-center">
                <p className="text-2xl md:text-3xl font-bold italic text-[#008080]">
                  "Let's make waves, not walls."
                </p>
                <p className="text-white/60 mt-4">
                  Let's be the propeller that turns cross-border curiosity into tomorrow's breakthroughs.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
