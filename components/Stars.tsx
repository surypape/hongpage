'use client'

import { useEffect, useRef } from 'react'

const COLORS = ['#ffffff', '#ffe8a0', '#ffb060', '#ff8060']

interface Star {
  x: number; y: number; r: number
  phase: number; spd: number; col: string
}

export default function Stars() {
  const ref = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = ref.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')!
    let stars: Star[] = []
    let animId: number

    function resize() {
      canvas.width  = window.innerWidth
      canvas.height = window.innerHeight
    }

    function build() {
      stars = Array.from({ length: 200 }, () => ({
        x:     Math.random() * canvas.width,
        y:     Math.random() * canvas.height,
        r:     Math.random() * 1.6 + 0.3,
        phase: Math.random() * Math.PI * 2,
        spd:   0.004 + Math.random() * 0.014,
        col:   COLORS[Math.floor(Math.random() * COLORS.length)],
      }))
    }

    function draw(ts: number) {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      for (const s of stars) {
        const a = 0.25 + 0.75 * (0.5 + 0.5 * Math.sin(ts * s.spd + s.phase))
        ctx.save()
        ctx.globalAlpha = a
        ctx.shadowBlur  = s.r * 7
        ctx.shadowColor = s.col
        ctx.fillStyle   = s.col
        ctx.beginPath()
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2)
        ctx.fill()
        ctx.restore()
      }
      animId = requestAnimationFrame(draw)
    }

    function onResize() { resize(); build() }

    resize()
    build()
    animId = requestAnimationFrame(draw)
    window.addEventListener('resize', onResize)

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', onResize)
    }
  }, [])

  return <canvas ref={ref} className="fixed inset-0 z-0 pointer-events-none" />
}
