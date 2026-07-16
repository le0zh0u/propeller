import { useRef, useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const handleScroll = () => {
      const rect = el.getBoundingClientRect();
      const scrollable = el.offsetHeight - window.innerHeight;
      const scrolled = -rect.top;
      setProgress(Math.max(0, Math.min(1, scrolled / scrollable)));
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lerp helper — walks through each segment in order
  const lerp = (p: number, ranges: number[][]) => {
    for (let i = 0; i < ranges.length - 1; i++) {
      const [p0, v0] = ranges[i];
      const [p1, v1] = ranges[i + 1];
      if (p < p0) return v0;
      if (p <= p1) {
        const t = (p - p0) / (p1 - p0);
        return v0 + (v1 - v0) * t;
      }
    }
    return ranges[ranges.length - 1][1];
  };

  // Container shrink (last 25%)
  const cScale = lerp(progress, [[0, 1], [0.75, 1], [1, 0.8]]);
  const cRadius = lerp(progress, [[0, 0], [0.75, 0], [1, 60]]);
  const cOpacity = lerp(progress, [[0, 1], [0.85, 1], [1, 0]]);

  // Circles
  const s1 = lerp(progress, [[0, 0.5], [0.7, 5]]);
  const o1 = lerp(progress, [[0, 1], [0.6, 1], [0.75, 0.3]]);
  const s2 = lerp(progress, [[0.05, 0.4], [0.65, 4]]);
  const o2 = lerp(progress, [[0, 1], [0.3, 1], [0.5, 0]]);
  const s3 = lerp(progress, [[0.1, 0.3], [0.6, 3]]);
  const o3 = lerp(progress, [[0, 1], [0.25, 1], [0.45, 0]]);
  const s4 = lerp(progress, [[0.15, 0.2], [0.55, 2]]);
  const o4 = lerp(progress, [[0, 1], [0.2, 1], [0.4, 0]]);

  // C A G text
  const cagOpacity = lerp(progress, [[0, 1], [0.05, 0]]);
  // Top tagline
  const topOpacity = lerp(progress, [[0, 0], [0.1, 1]]);
  // Content 1 - fades out earlier to avoid overlap with Content 2
  const c1o = lerp(progress, [[0.12, 0], [0.2, 1], [0.32, 1], [0.40, 0]]);
  const c1y = lerp(progress, [[0.12, 50], [0.2, 0], [0.32, 0], [0.40, -50]]);
  // Content 2 - starts fading in after Content 1 is fully gone
  const c2o = lerp(progress, [[0.48, 0], [0.56, 1]]);
  const c2y = lerp(progress, [[0.48, 30], [0.56, 0]]);

  return (
    <section ref={containerRef} style={{ height: '400vh' }}>
      <div
        className="sticky top-0 h-screen overflow-hidden bg-black"
        style={{ transform: `scale(${cScale})`, borderRadius: `${cRadius}px`, opacity: cOpacity }}
      >
        {/* Background Video */}
        <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover opacity-20 pointer-events-none">
          <source src="https://res.cloudinary.com/dprydfxok/video/upload/v1782459210/bg1_jgni8n.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/40" />

        {/* Concentric Circles */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          {/* Circle 1 - Indigo */}
          <div className="absolute w-[40vmin] h-[40vmin] rounded-full bg-[#3533cd] flex items-center justify-center overflow-hidden" style={{ transform: `scale(${s1})`, opacity: o1 }}>
            <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-50">
              <source src="https://res.cloudinary.com/dprydfxok/video/upload/v1782459210/bg4_hzaahu.mp4" type="video/mp4" />
            </video>
          </div>
          {/* Circle 2 - Teal */}
          <div className="absolute w-[30vmin] h-[30vmin] rounded-full bg-[#008080]" style={{ transform: `scale(${s2})`, opacity: o2 }} />
          {/* Circle 3 */}
          <div className="absolute w-[20vmin] h-[20vmin] rounded-full bg-[#004d4d]" style={{ transform: `scale(${s3})`, opacity: o3 }} />
          {/* Circle 4 */}
          <div className="absolute w-[10vmin] h-[10vmin] rounded-full bg-[#001a1a]" style={{ transform: `scale(${s4})`, opacity: o4 }} />
        </div>

        {/* Top tagline */}
        <div className="absolute top-24 md:top-28 left-0 right-0 text-center pointer-events-none" style={{ opacity: topOpacity }}>
          <span className="text-sm uppercase tracking-[0.3em] text-white/60 font-medium">
            Experience Tomorrow, Today.
          </span>
        </div>

        {/* C A G Giant Typography */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none" style={{ opacity: cagOpacity }}>
          <span className="absolute font-black leading-none tracking-tighter text-white select-none" style={{ fontSize: '25vmin', right: '50%', marginRight: '18vmin' }}>C</span>
          <span className="absolute font-black leading-none tracking-tighter text-white select-none" style={{ fontSize: '25vmin', left: '50%', marginLeft: '14vmin' }}>G</span>
        </div>

        {/* Hidden background text */}
        <div className="absolute bottom-32 left-0 right-0 text-center px-8 pointer-events-none" style={{ opacity: topOpacity }}>
          <p className="text-lg md:text-xl text-white/10 max-w-4xl mx-auto">
            we help global innovators decode, access, and build with China's AI and Robotics ecosystem.
          </p>
        </div>

        {/* Content 1 */}
        <div className="absolute inset-0 flex items-center justify-center px-6 pointer-events-none" style={{ opacity: c1o, transform: `translateY(${c1y}px)` }}>
          <h2 className="text-4xl md:text-6xl font-bold text-white text-center">
            Innovate. Create. Amplify.
          </h2>
        </div>

        {/* Content 2 */}
        <div className="absolute inset-0 flex flex-col items-center justify-center px-6" style={{ opacity: c2o, transform: `translateY(${c2y}px)` }}>
          <h2 className="text-3xl md:text-5xl font-bold text-white text-center mb-4">
            Collaboration Is the New Competition.
          </h2>
          <p className="text-lg text-slate-300 text-center max-w-xl mb-8">
            PROPELLER helps global innovators decode, access, and build with China's AI and Robotics ecosystem.
          </p>
          <a
            href="#footer"
            onClick={(e) => { e.preventDefault(); document.querySelector('#footer')?.scrollIntoView({ behavior: 'smooth' }); }}
            className="group inline-flex items-center gap-3 bg-[#3533cd] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#008080] transition-colors duration-300"
          >
            Let's Talk
            <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
}
