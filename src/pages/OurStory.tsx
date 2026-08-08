import { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';

/* WebGL water surface — mouse movement churns ripples that refract the depths.
   Technique: draw expanding rings to a 2D canvas → upload as a height texture →
   fragment shader derives normals from the heightfield and distorts a procedural
   underwater background (à la Codrops water distortion). */
function WaterSurface() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const gl = canvas.getContext('webgl', { alpha: false, antialias: false });
    if (!gl) return; // CSS caustics fallback remains visible

    const VERT = `
      attribute vec2 aPos;
      varying vec2 vUv;
      void main() {
        vUv = aPos * 0.5 + 0.5;
        gl_Position = vec4(aPos, 0.0, 1.0);
      }
    `;

    const FRAG = `
      precision highp float;
      varying vec2 vUv;
      uniform vec2 uRes;
      uniform vec2 uRipRes;
      uniform float uTime;
      uniform sampler2D uRipple;

      // layered sine interference — bounded 0..1 shimmer, reads as moving water
      float waves(vec2 p, float t) {
        float v = 0.0;
        v += sin(p.x * 9.0 + t * 0.9) * sin(p.y * 7.0 - t * 0.7);
        v += sin((p.x * 1.3 + p.y) * 11.0 - t * 1.1) * 0.6;
        v += sin((p.x - p.y * 0.8) * 15.0 + t * 0.5) * 0.35;
        v += sin(p.x * 23.0 - t * 1.4) * sin(p.y * 19.0 + t) * 0.2;
        return v / 2.15 * 0.5 + 0.5;
      }

      vec3 background(vec2 uv) {
        vec2 p = (uv - 0.5) * vec2(uRes.x / uRes.y, 1.0) + 0.5;
        // deep water: faint teal depth below, dark above
        vec3 col = mix(vec3(0.024, 0.100, 0.115), vec3(0.031, 0.047, 0.082), pow(uv.y, 0.8));
        vec2 d1 = p - vec2(0.30, 0.30);
        col += vec3(0.0, 0.16, 0.16) * exp(-5.0 * dot(d1, d1));  // teal glow
        vec2 d2 = p - vec2(0.75, 0.75);
        col += vec3(0.06, 0.06, 0.22) * exp(-4.0 * dot(d2, d2)); // indigo glow
        float wv = waves(p, uTime);
        col += vec3(0.0, 0.38, 0.40) * pow(wv, 2.0) * 0.30;      // shimmer
        return col;
      }

      void main() {
        vec2 uv = vUv;
        vec2 texel = 1.0 / uRipRes;
        float hx = texture2D(uRipple, uv + vec2(texel.x, 0.0)).r - texture2D(uRipple, uv - vec2(texel.x, 0.0)).r;
        float hy = texture2D(uRipple, uv + vec2(0.0, texel.y)).r - texture2D(uRipple, uv - vec2(0.0, texel.y)).r;
        vec2 grad = vec2(hx, hy);
        vec3 col = background(uv + grad * 0.6);
        // meniscus glint — light catching the curved surface at the ripple edge
        col += vec3(0.25, 0.55, 0.55) * length(grad) * 1.4;
        // animated dither to hide 8-bit heightfield banding
        float n = fract(sin(dot(uv * uRes + vec2(uTime * 61.7, uTime * 83.3), vec2(12.9898, 78.233))) * 43758.5453);
        col += (n - 0.5) * 0.012;
        gl_FragColor = vec4(col, 1.0);
      }
    `;

    const compile = (type: number, src: string) => {
      const sh = gl.createShader(type);
      if (!sh) return null;
      gl.shaderSource(sh, src);
      gl.compileShader(sh);
      if (!gl.getShaderParameter(sh, gl.COMPILE_STATUS)) return null;
      return sh;
    };
    const vs = compile(gl.VERTEX_SHADER, VERT);
    const fs = compile(gl.FRAGMENT_SHADER, FRAG);
    if (!vs || !fs) return;
    const prog = gl.createProgram();
    if (!prog) return;
    gl.attachShader(prog, vs);
    gl.attachShader(prog, fs);
    gl.linkProgram(prog);
    if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) return;
    gl.useProgram(prog);

    const quad = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, quad);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]), gl.STATIC_DRAW);
    const aPos = gl.getAttribLocation(prog, 'aPos');
    gl.enableVertexAttribArray(aPos);
    gl.vertexAttribPointer(aPos, 2, gl.FLOAT, false, 0, 0);

    const uRes = gl.getUniformLocation(prog, 'uRes');
    const uRipRes = gl.getUniformLocation(prog, 'uRipRes');
    const uTime = gl.getUniformLocation(prog, 'uTime');
    const uRipple = gl.getUniformLocation(prog, 'uRipple');

    const tex = gl.createTexture();
    gl.bindTexture(gl.TEXTURE_2D, tex);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);
    gl.uniform1i(uRipple, 0);

    // --- ripple heightfield drawn on a low-res 2D canvas ---
    const ripCanvas = document.createElement('canvas');
    const rctx = ripCanvas.getContext('2d');
    if (!rctx) return;

    type Ripple = { x: number; y: number; r: number; maxR: number; speed: number; strength: number };
    let ripples: Ripple[] = [];
    let w = 0;
    let h = 0;

    const addRipple = (x: number, y: number, size: number, strength: number, life: number) => {
      ripples.push({ x, y, r: 0, maxR: size, speed: size / life, strength });
      if (ripples.length > 80) ripples.shift();
    };

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      w = canvas.clientWidth;
      h = canvas.clientHeight;
      canvas.width = Math.max(1, Math.round(w * dpr));
      canvas.height = Math.max(1, Math.round(h * dpr));
      ripCanvas.width = Math.max(1, Math.round(w / 3));
      ripCanvas.height = Math.max(1, Math.round(h / 3));
      gl.viewport(0, 0, canvas.width, canvas.height);
      gl.uniform2f(uRes, canvas.width, canvas.height);
      gl.uniform2f(uRipRes, ripCanvas.width, ripCanvas.height);
    };
    resize();
    window.addEventListener('resize', resize);

    // pointer → ripples (canvas itself is pointer-events-none, so listen globally)
    let lastX = -1;
    let lastY = -1;
    const toUv = (e: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = 1 - (e.clientY - rect.top) / rect.height;
      return { x, y, inside: x >= 0 && x <= 1 && y >= 0 && y <= 1 };
    };
    const onMove = (e: PointerEvent) => {
      const { x, y, inside } = toUv(e);
      if (!inside) {
        lastX = -1;
        return;
      }
      const dx = lastX < 0 ? 999 : Math.hypot((x - lastX) * w, (y - lastY) * h);
      if (dx > 24) {
        addRipple(x, y, 0.45, 0.55, 3);
        lastX = x;
        lastY = y;
      }
    };
    const onDown = (e: PointerEvent) => {
      const { x, y, inside } = toUv(e);
      if (inside) addRipple(x, y, 0.8, 0.9, 4.5);
    };
    window.addEventListener('pointermove', onMove, { passive: true });
    window.addEventListener('pointerdown', onDown, { passive: true });

    let raf = 0;
    let last = 0;
    const tick = (t: number) => {
      const dt = Math.min(0.05, (t - last) / 1000 || 0);
      last = t;

      // advance + draw the heightfield. Each ripple is an annular wavefront —
      // height lives only near radius r, so it travels outward like a real
      // water wave and settles back to calm. Never drawn visibly itself.
      rctx.clearRect(0, 0, ripCanvas.width, ripCanvas.height);
      const rw = ripCanvas.width;
      const rh = ripCanvas.height;
      for (let i = ripples.length - 1; i >= 0; i--) {
        const rp = ripples[i];
        rp.r += rp.speed * dt;
        const p = rp.r / rp.maxR;
        if (p >= 1) {
          ripples.splice(i, 1);
          continue;
        }
        const a = (1 - p) * (1 - p) * rp.strength;
        const px = rp.x * rw;
        const py = (1 - rp.y) * rh;
        const rad = Math.max(1, rp.r * rw);
        const grad = rctx.createRadialGradient(px, py, 0, px, py, rad);
        grad.addColorStop(0, 'rgba(255,255,255,0)');
        grad.addColorStop(0.72, `rgba(255,255,255,${a * 0.25})`);
        grad.addColorStop(0.9, `rgba(255,255,255,${a})`);
        grad.addColorStop(1, 'rgba(255,255,255,0)');
        rctx.fillStyle = grad;
        rctx.beginPath();
        rctx.arc(px, py, rad, 0, Math.PI * 2);
        rctx.fill();
      }

      gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, ripCanvas);
      gl.uniform1f(uTime, t / 1000);
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
      window.removeEventListener('pointermove', onMove);
      window.removeEventListener('pointerdown', onDown);
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
          {/* Interactive water surface (WebGL ripple distortion + CSS caustics fallback) */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="ocean-caustics absolute inset-0" />
            <WaterSurface />
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
