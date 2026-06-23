import type { Variants } from 'framer-motion'

// The signature "premium" curve — fast start, long buttery settle.
// This single change (swapping your old [0.25,0.1,0.25,1] for this) is the
// biggest "why does this suddenly feel expensive" lever in the whole file.
export const EASE = [0.16, 1, 0.3, 1] as const

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
}

export const fadeLeft: Variants = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.75, ease: EASE } },
}

export const fadeRight: Variants = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.75, ease: EASE } },
}

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: EASE } },
}

export const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
}

export const staggerFast: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } },
}

export const cardVariant: Variants = {
  hidden: { opacity: 0, y: 24, scale: 0.98 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: EASE } },
}

// One viewport config used everywhere so every section "arrives" with the
// same timing feel instead of triggering at random scroll points.
export const viewport = { once: true, margin: '-80px' } as const

// Word-level reveal for hero-style headlines — splits text into words and
// staggers them in. This is the highest-impact single addition: it's the
// first thing a visitor sees, so it sets the "is this expensive" verdict
// before they've read a sentence.
export const wordContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.15 },
  },
}

export const wordChild: Variants = {
  hidden: { opacity: 0, y: 32, rotateX: -40 },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: { duration: 0.65, ease: EASE },
  },
}