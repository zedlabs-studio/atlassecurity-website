'use client'

import { useRef, useState, type ReactNode, type MouseEvent } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

type MagneticButtonProps = {
  href?: string
  onClickAction?: () => void
  children: ReactNode
  className?: string
  strength?: number // how far it pulls toward the cursor, in px
}

/**
 * Wraps a button/link with two effects:
 * 1. A subtle "magnetic" pull toward the cursor (capped via `strength`)
 * 2. A radial glow that follows the cursor inside the button
 *
 * Cheap to build, reads as very high-polish — this is the kind of detail
 * that separates "agency built this" from "I used a template."
 */
export function MagneticButton({
  href,
  onClickAction,
  children,
  className = '',
  strength = 14,
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [pos, setPos] = useState({ x: 0, y: 0 })
  const [glow, setGlow] = useState({ x: 50, y: 50, active: false })

  function handleMouseMove(e: MouseEvent<HTMLDivElement>) {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const relX = e.clientX - rect.left
    const relY = e.clientY - rect.top

    // magnetic pull — normalized offset from center, clamped by `strength`
    const offsetX = ((relX - rect.width / 2) / rect.width) * strength
    const offsetY = ((relY - rect.height / 2) / rect.height) * strength
    setPos({ x: offsetX, y: offsetY })

    // glow position as a percentage for the radial-gradient
    setGlow({ x: (relX / rect.width) * 100, y: (relY / rect.height) * 100, active: true })
  }

  function handleMouseLeave() {
    setPos({ x: 0, y: 0 })
    setGlow((g) => ({ ...g, active: false }))
  }

  const content = (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: pos.x, y: pos.y }}
      transition={{ type: 'spring', stiffness: 150, damping: 12, mass: 0.5 }}
      onClick={onClickAction}
      className={`relative overflow-hidden isolate ${className}`}
    >
      {/* cursor-follow glow */}
      <span
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300"
        style={{
          opacity: glow.active ? 1 : 0,
          background: `radial-gradient(120px circle at ${glow.x}% ${glow.y}%, rgba(255,255,255,0.18), transparent 70%)`,
        }}
      />
      <span className="relative z-10 inline-flex items-center gap-2">{children}</span>
    </motion.div>
  )

  if (href) {
    return (
      <Link href={href} className="inline-block">
        {content}
      </Link>
    )
  }

  return content
}