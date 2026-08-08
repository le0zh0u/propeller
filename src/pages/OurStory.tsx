import { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';

/* Canvas-rendered sparkling water glints (波光粼粼) */
function OceanSparkles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let raf = 0;
    let w = 0;
    let h = 0;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    type Particle = { x: number; y: number; r: number; speed: number; phase: number; hue: number; drift: number; flare: boolean };
    let particles: Particle[] = [];

    const spawn = () => {
      const count = Math.floor((w * h) / 7000);
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        // weighted toward the lower 2/3, like light on a sea surface
        y: h * 0.3 + Math.random() * h * 0.7,
        r: 0.8 + Math.random() * 2.2,
        speed: 0.8 + Math.random() * 2.2,
        phase: Math.random() * Math.PI * 2,
        hue: 175 + Math.random() * 30,
        drift: 4 + Math.random() * 10,
        flare: Math.random() < 0.3,
      }));
    };

    const resize = () => {
      w = canvas.clientWidth;
      h = canvas.clientHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      spawn();
    };
    resize();
    window.addEventListener('resize', resize);

    let last = 0;
    const tick = (t: number) => {
      const dt = Math.min(0.05, (t - last) / 1000 || 0);
      last = t;
      const time = t / 1000;
      ctx.clearRect(0, 0, w, h);

      for (const p of particles) {
        p.x += p.drift * dt;
        if (p.x > w + 20) p.x = -20;

        const tw = (Math.sin(time * p.speed + p.phase) + 1) / 2;
        const a = tw * tw * 0.9; // spend more time dim, flash bright
        if (a < 0.02) continue;

        // gentle bobbing with the swell
        const y = p.y + Math.sin(time * 0.6 + p.phase) * 6;
        const r = p.r * (0.6 + tw * 0.8);

        // horizontally-stretched glint — ripples stretch light into flat flecks
        ctx.save();
        ctx.translate(p.x, y);
        ctx.scale(2.4, 0.55);
        const g = ctx.createRadialGradient(0, 0, 0, 0, 0, r * 3.5);
        g.addColorStop(0, `hsla(${p.hue}, 90%, 85%, ${a})`);
        g.addColorStop(0.4, `hsla(${p.hue}, 90%, 68%, ${a * 0.5})`);
        g.addColorStop(1, 'transparent');
        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.arc(0, 0, r * 3.5, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();

        // horizontal shimmer streak on peak (no vertical spike — water, not stars)
        if (p.flare && tw > 0.6) {
          const la = ((tw - 0.6) / 0.4) * 0.55;
          const len = r * (10 + p.drift);
          const lg = ctx.createLinearGradient(p.x - len, y, p.x + len, y);
          lg.addColorStop(0, 'transparent');
          lg.addColorStop(0.5, `hsla(${p.hue}, 90%, 85%, ${la})`);
          lg.addColorStop(1, 'transparent');
          ctx.strokeStyle = lg;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(p.x - len, y);
          ctx.lineTo(p.x + len, y);
          ctx.stroke();
        }
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />;
}

const propellerPrinciples = [
  { title: 'Pulls in diverse currents', desc: 'We absorb perspectives from every culture and vertical, bringing them into productive collision.', accent: '#3533cd' },
  { title: 'Swirls them into productive turbulence', desc: 'We agitate ideas in open collaboration, creating the conditions for breakthrough innovation.', accent: '#008080' },
  { title: 'Drives the entire vessel forward', desc: 'We thrust solutions toward a healthier, more sustainable horizon.', accent: '#3533cd' },
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
        <section className="min-h-[85vh] relative flex items-center justify-center px-6 overflow-hidden">
          {/* Dynamic sparkling ocean (canvas glints + CSS caustics) */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="ocean-caustics absolute inset-0" />
            <OceanSparkles />
            <div className="absolute inset-0 bg-gradient-to-b from-[#0a0f1a]/50 via-transparent to-[#0a0f1a]/80" />
          </div>
          <style>{`
            @keyframes causticsMove {
              0%   { background-position: 0% 0%, 100% 100%, 50% 50%; }
              50%  { background-position: 25% 35%, 75% 65%, 45% 55%; }
              100% { background-position: 0% 0%, 100% 100%, 50% 50%; }
            }
            .ocean-caustics {
              background:
                radial-gradient(ellipse 60% 40% at 30% 65%, rgba(0,128,128,0.35), transparent 70%),
                radial-gradient(ellipse 50% 35% at 70% 35%, rgba(53,51,205,0.3), transparent 70%),
                radial-gradient(ellipse 40% 30% at 50% 85%, rgba(0,190,190,0.22), transparent 70%);
              animation: causticsMove 14s ease-in-out infinite alternate;
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
          <div className="max-w-4xl mx-auto px-6">
            <span className="uppercase tracking-[0.3em] text-sm text-[#008080] font-semibold mb-4 block">Our Origin</span>
            <h2 className="text-4xl md:text-6xl font-black text-white mb-8">The Fish That Never Existed.</h2>

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
        </section>

        {/* MIT Building 20 */}
        <section className="pb-20 md:pb-28">
          <div className="max-w-4xl mx-auto px-6">
            <span className="uppercase tracking-[0.3em] text-sm text-[#3533cd] font-semibold mb-4 block">MIT 2.0</span>
            <h2 className="text-4xl md:text-6xl font-black text-white mb-8">Building 20 — The Magical Incubator</h2>

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
        </section>

        {/* Why Propeller — minimal numbered list */}
        <section className="pb-20 md:pb-28">
          <div className="max-w-4xl mx-auto px-6">
            <div className="mb-12 md:mb-16">
              <span className="uppercase tracking-[0.3em] text-sm text-[#008080] font-semibold mb-4 block">Why Propeller?</span>
              <h2 className="text-4xl md:text-6xl font-black text-white">What a Propeller Does.</h2>
            </div>
            <ul>
              {propellerPrinciples.map((item, i) => (
                <li
                  key={item.title}
                  className="group flex items-baseline gap-6 md:gap-8 py-7 md:py-9 border-t border-white/10 last:border-b transition-colors duration-300 hover:border-white/25"
                >
                  <span
                    className="font-mono text-sm font-semibold shrink-0 transition-transform duration-300 group-hover:-translate-y-0.5"
                    style={{ color: item.accent }}
                  >
                    0{i + 1}
                  </span>
                  <div>
                    <h3 className="text-lg md:text-2xl font-bold text-slate-200 leading-snug transition-colors duration-300 group-hover:text-white">
                      {item.title}
                    </h3>
                    <p className="text-sm md:text-base text-slate-400 leading-relaxed mt-2">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>

            {/* Closing quote + CTA */}
            <div className="mt-20 md:mt-28">
              <p className="text-3xl md:text-5xl font-black text-white leading-tight mb-4">
                "Let's make waves,<br />not walls."
              </p>
              <p className="text-slate-400 mb-10 max-w-xl">
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
