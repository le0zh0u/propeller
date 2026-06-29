import { useEffect, useRef } from 'react'

export default function GradientCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animRef = useRef<number>(0)
  const timeRef = useRef(0)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const dpr = Math.min(window.devicePixelRatio * 0.5, 1)

    let visible = true

    const resize = () => {
      const w = canvas.offsetWidth
      const h = canvas.offsetHeight
      canvas.width = w * dpr
      canvas.height = h * dpr
      ctx.scale(dpr, dpr)
    }

    const draw = () => {
      if (!visible) {
        animRef.current = requestAnimationFrame(draw)
        return
      }

      const w = canvas.offsetWidth
      const h = canvas.offsetHeight
      timeRef.current += 0.008
      const t = timeRef.current

      ctx.clearRect(0, 0, w, h)

      // Gradient A: deep indigo, drifting center
      const ax = w * (0.3 + Math.sin(t * 0.7) * 0.08)
      const ay = h * (0.4 + Math.cos(t * 0.5) * 0.06)
      const ar = Math.max(w, h) * 0.6
      const hueA = 241 + Math.sin(t * 0.3) * 8

      const gradA = ctx.createRadialGradient(ax, ay, 0, ax, ay, ar)
      gradA.addColorStop(0, `hsl(${hueA}, 60%, 25%)`)
      gradA.addColorStop(1, `hsl(${hueA}, 60%, 8%)`)

      // Gradient B: rich blue, drifting center
      const bx = w * (0.7 + Math.cos(t * 0.6) * 0.06)
      const by = h * (0.6 + Math.sin(t * 0.8) * 0.08)
      const br = Math.max(w, h) * 0.5
      const hueB = 225 + Math.cos(t * 0.25) * 8

      const gradB = ctx.createRadialGradient(bx, by, 0, bx, by, br)
      gradB.addColorStop(0, `hsl(${hueB}, 70%, 30%)`)
      gradB.addColorStop(1, `hsl(${hueB}, 70%, 5%)`)

      // Draw gradient A
      ctx.fillStyle = gradA
      ctx.fillRect(0, 0, w, h)

      // Blend gradient B with screen mode
      ctx.globalCompositeOperation = 'screen'
      ctx.fillStyle = gradB
      ctx.fillRect(0, 0, w, h)
      ctx.globalCompositeOperation = 'source-over'

      animRef.current = requestAnimationFrame(draw)
    }

    resize()

    const handleVisibility = () => {
      visible = !document.hidden
    }
    document.addEventListener('visibilitychange', handleVisibility)

    window.addEventListener('resize', resize)

    if (prefersReducedMotion) {
      // Draw a single static frame
      timeRef.current = 0
      const w = canvas.offsetWidth
      const h = canvas.offsetHeight
      ctx.clearRect(0, 0, w, h)

      const gradA = ctx.createRadialGradient(w * 0.3, h * 0.4, 0, w * 0.3, h * 0.4, Math.max(w, h) * 0.6)
      gradA.addColorStop(0, 'hsl(241, 60%, 25%)')
      gradA.addColorStop(1, 'hsl(241, 60%, 8%)')

      const gradB = ctx.createRadialGradient(w * 0.7, h * 0.6, 0, w * 0.7, h * 0.6, Math.max(w, h) * 0.5)
      gradB.addColorStop(0, 'hsl(225, 70%, 30%)')
      gradB.addColorStop(1, 'hsl(225, 70%, 5%)')

      ctx.fillStyle = gradA
      ctx.fillRect(0, 0, w, h)
      ctx.globalCompositeOperation = 'screen'
      ctx.fillStyle = gradB
      ctx.fillRect(0, 0, w, h)
      ctx.globalCompositeOperation = 'source-over'
    } else {
      setTimeout(() => {
        animRef.current = requestAnimationFrame(draw)
      }, 500)
    }

    return () => {
      cancelAnimationFrame(animRef.current)
      document.removeEventListener('visibilitychange', handleVisibility)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      aria-hidden="true"
    />
  )
}
