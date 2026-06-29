import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SectionHeading from '../../components/SectionHeading'

gsap.registerPlugin(ScrollTrigger)

export default function WhoWeAreSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return

    const ctx = gsap.context(() => {
      gsap.from(el.querySelectorAll('.animate-in'), {
        y: 30,
        opacity: 0,
        duration: 0.7,
        stagger: 0.1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 80%',
        },
      })
    }, el)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="relative bg-abyss" style={{ padding: 'clamp(80px, 10vh, 160px) clamp(24px, 5vw, 80px)' }}>
      {/* Ambient blue glow */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(53,51,205,0.04) 0%, transparent 70%)' }} />

      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-[55%_45%] gap-12 items-center relative z-10">
        <div>
          <SectionHeading
            label="01. — WHO WE ARE"
            title="We are your China innovation intelligence and execution partner."
          />
          <div className="space-y-5">
            <p className="text-body-large text-pearl animate-in">
              PROPELLER is a cross-border innovation studio connecting China's AI and robotics ecosystem with global markets. We operate at the intersection of <strong className="text-white font-medium">globalization, education, technology intelligence, and venture building</strong>.
            </p>
            <p className="text-body-large text-pearl animate-in">
              From strategic intelligence to executive immersion, from partner scouting to joint venture creation, we help global innovators move beyond surface-level narratives and engage directly with the people, technologies, and opportunities shaping the future.
            </p>
          </div>
          <div className="mt-8 space-y-2">
            <p className="font-mono text-sm text-slate animate-in">— We are not a tour operator.</p>
            <p className="font-mono text-sm text-slate animate-in">— We are not a traditional consultancy.</p>
            <p className="font-mono text-sm text-brand-blue font-medium animate-in">— We are your China innovation intelligence and execution partner.</p>
          </div>
        </div>

        {/* Wireframe Globe */}
        <div className="flex justify-center animate-in">
          <WireframeGlobe />
        </div>
      </div>
    </section>
  )
}

function WireframeGlobe() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animRef = useRef<number>(0)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const size = 320
    const dpr = Math.min(window.devicePixelRatio, 2)
    canvas.width = size * dpr
    canvas.height = size * dpr
    ctx.scale(dpr, dpr)

    const radius = size * 0.4
    let rotationX = 0
    let rotationY = 0

    // Generate icosphere vertices (simplified: use latitude/longitude grid)
    const latitudes = 8
    const longitudes = 12
    const vertices: { lat: number; lon: number }[] = []

    for (let lat = 0; lat <= latitudes; lat++) {
      for (let lon = 0; lon < longitudes; lon++) {
        vertices.push({
          lat: (lat / latitudes) * Math.PI,
          lon: (lon / longitudes) * Math.PI * 2,
        })
      }
    }

    const project = (lat: number, lon: number, rx: number, ry: number) => {
      // Spherical to Cartesian
      let x = Math.sin(lat) * Math.cos(lon)
      let y = Math.cos(lat)
      let z = Math.sin(lat) * Math.sin(lon)

      // Rotate around Y
      const cosRy = Math.cos(ry)
      const sinRy = Math.sin(ry)
      const x1 = x * cosRy - z * sinRy
      const z1 = x * sinRy + z * cosRy
      x = x1
      z = z1

      // Rotate around X
      const cosRx = Math.cos(rx)
      const sinRx = Math.sin(rx)
      const y1 = y * cosRx - z * sinRx
      const z2 = y * sinRx + z * cosRx
      y = y1
      z = z2

      // Perspective projection
      const perspective = 400
      const scale = perspective / (perspective + z * radius)

      return {
        x: size / 2 + x * radius * scale,
        y: size / 2 + y * radius * scale,
        z: z,
        scale,
      }
    }

    let visible = true
    const observer = new IntersectionObserver(
      ([entry]) => { visible = entry.isIntersecting || entry.intersectionRatio > 0 },
      { threshold: 0 }
    )
    observer.observe(canvas)

    const draw = () => {
      if (visible) {
        rotationX += 0.003
        rotationY += 0.003

        ctx.clearRect(0, 0, size, size)

        // Draw latitude lines
        ctx.strokeStyle = 'rgba(53, 51, 205, 0.25)'
        ctx.lineWidth = 0.8

        for (let lat = 1; lat < latitudes; lat++) {
          ctx.beginPath()
          for (let lon = 0; lon <= longitudes; lon++) {
            const p = project((lat / latitudes) * Math.PI, (lon / longitudes) * Math.PI * 2, rotationX, rotationY)
            if (lon === 0) ctx.moveTo(p.x, p.y)
            else ctx.lineTo(p.x, p.y)
          }
          ctx.stroke()
        }

        // Draw longitude lines
        for (let lon = 0; lon < longitudes; lon++) {
          ctx.beginPath()
          for (let lat = 0; lat <= latitudes; lat++) {
            const p = project((lat / latitudes) * Math.PI, (lon / longitudes) * Math.PI * 2, rotationX, rotationY)
            if (lat === 0) ctx.moveTo(p.x, p.y)
            else ctx.lineTo(p.x, p.y)
          }
          ctx.stroke()
        }

        // Draw bright vertex dots
        ctx.fillStyle = 'rgba(255, 255, 255, 0.5)'
        for (let i = 0; i < vertices.length; i += 3) {
          const v = vertices[i]
          const p = project(v.lat, v.lon, rotationX, rotationY)
          if (p.z > -0.3) {
            ctx.beginPath()
            ctx.arc(p.x, p.y, 1.5 * p.scale, 0, Math.PI * 2)
            ctx.fill()
          }
        }
      }

      animRef.current = requestAnimationFrame(draw)
    }

    animRef.current = requestAnimationFrame(draw)

    return () => {
      cancelAnimationFrame(animRef.current)
      observer.disconnect()
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      style={{ width: 320, height: 320 }}
      aria-hidden="true"
    />
  )
}
