"use client"

import { useEffect, useRef } from "react"
import { cn } from "@/lib/utils"

export function SnowBackground({
  className,
  children,
  count = 150,
  intensity = 1,
  wind = 0.3,
  color = "rgba(255, 255, 255, 0.9)",
  speed = 1,
}) {
  const canvasRef = useRef(null)
  const containerRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const container = containerRef.current
    if (!canvas || !container) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let rect = container.getBoundingClientRect()
    let width = rect.width
    let height = rect.height
    canvas.width = width
    canvas.height = height

    let animationId
    let tick = 0
    const totalFlakes = Math.floor(count * intensity)

    const layers = [
      { speed: 0.3, minSize: 1, maxSize: 2.5, opacity: 0.4 },
      { speed: 0.6, minSize: 2, maxSize: 4, opacity: 0.6 },
      { speed: 1, minSize: 3, maxSize: 6, opacity: 0.9 },
    ]

    const createSnowflake = (layer, startFromTop = false) => {
      const config = layers[layer]
      return {
        x: Math.random() * (width + 100) - 50,
        y: startFromTop
          ? -10 - Math.random() * 100
          : Math.random() * height,
        size:
          config.minSize +
          Math.random() * (config.maxSize - config.minSize),
        speed: config.speed * (0.8 + Math.random() * 0.4),
        opacity: config.opacity * (0.8 + Math.random() * 0.2),
        wobbleOffset: Math.random() * Math.PI * 2,
        wobbleSpeed: 0.02 + Math.random() * 0.02,
        rotation: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() - 0.5) * 0.02,
        layer,
      }
    }

    const snowflakes = []
    for (let i = 0; i < totalFlakes; i++) {
      const layer =
        i < totalFlakes * 0.4
          ? 0
          : i < totalFlakes * 0.75
          ? 1
          : 2
      snowflakes.push(createSnowflake(layer))
    }

    snowflakes.sort((a, b) => a.layer - b.layer)

    const handleResize = () => {
      rect = container.getBoundingClientRect()
      width = rect.width
      height = rect.height
      canvas.width = width
      canvas.height = height
    }

    const ro = new ResizeObserver(handleResize)
    ro.observe(container)

    const animate = () => {
      tick++
      ctx.clearRect(0, 0, width, height)

      for (const flake of snowflakes) {
        flake.y += flake.speed * speed * 1.5

        const wobble =
          Math.sin(
            tick * flake.wobbleSpeed + flake.wobbleOffset
          ) * 0.5
        flake.x += wobble + wind * flake.speed * speed

        flake.rotation += flake.rotationSpeed * speed

        if (flake.y > height + 20) {
          flake.y = -10 - Math.random() * 50
          flake.x = Math.random() * (width + 100) - 50
        }
        if (flake.x < -50) flake.x = width + 50
        if (flake.x > width + 50) flake.x = -50

        ctx.save()
        ctx.translate(flake.x, flake.y)
        ctx.rotate(flake.rotation)

        ctx.shadowColor = "rgba(255, 255, 255, 0.5)"
        ctx.shadowBlur = flake.size * 2

        ctx.globalAlpha = flake.opacity
        ctx.fillStyle = color
        ctx.beginPath()
        ctx.arc(0, 0, flake.size, 0, Math.PI * 2)
        ctx.fill()

        ctx.globalAlpha = flake.opacity * 0.5
        ctx.fillStyle = "#ffffff"
        ctx.beginPath()
        ctx.arc(
          -flake.size * 0.2,
          -flake.size * 0.2,
          flake.size * 0.4,
          0,
          Math.PI * 2
        )
        ctx.fill()

        ctx.restore()
      }

      ctx.shadowBlur = 0
      ctx.globalAlpha = 1
      animationId = requestAnimationFrame(animate)
    }

    animationId = requestAnimationFrame(animate)

    return () => {
      cancelAnimationFrame(animationId)
      ro.disconnect()
    }
  }, [count, intensity, wind, color, speed])

  return (
    <div
      ref={containerRef}
      className={cn("absolute inset-0 overflow-hidden", className)}
      style={{
        background:
          "linear-gradient(to bottom, #0b0c1a 0%, #1b1235 40%, #2b1055 100%)",
      }}
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0 h-full w-full"
      />

      {/* Ambient glow */}
      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          background:
            "radial-gradient(ellipse at 50% 0%, rgba(160, 120, 255, 0.2) 0%, transparent 50%)",
        }}
      />

      {/* Vignette */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 0%, transparent 50%, rgba(0,0,0,0.8) 100%)",
        }}
      />

      {children && (
        <div className="relative z-10 h-full w-full">
          {children}
        </div>
      )}
    </div>
  )
}

export default function SnowBackgroundDemo() {
  return <SnowBackground />
}