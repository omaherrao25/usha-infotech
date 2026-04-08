// stagger.js — Container + children stagger variants with reduced-motion support

const prefersReducedMotion =
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

export const staggerContainer = (staggerChildren = 0.1, delayChildren = 0) => ({
  hidden: {},
  visible: {
    transition: prefersReducedMotion
      ? { staggerChildren: 0, delayChildren: 0 }
      : { staggerChildren, delayChildren },
  },
})

export const staggerItem = {
  hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: prefersReducedMotion
      ? { duration: 0 }
      : { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
}

export const staggerItemLeft = {
  hidden: { opacity: 0, x: prefersReducedMotion ? 0 : -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: prefersReducedMotion
      ? { duration: 0 }
      : { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
}

export const staggerItemRight = {
  hidden: { opacity: 0, x: prefersReducedMotion ? 0 : 30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: prefersReducedMotion
      ? { duration: 0 }
      : { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
}

export const staggerItemScale = {
  hidden: { opacity: 0, scale: prefersReducedMotion ? 1 : 0.85 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: prefersReducedMotion
      ? { duration: 0 }
      : { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
}

// Preset containers
export const staggerFast = {
  hidden: {},
  visible: {
    transition: prefersReducedMotion
      ? { staggerChildren: 0 }
      : { staggerChildren: 0.07, delayChildren: 0.1 },
  },
}

export const staggerMed = {
  hidden: {},
  visible: {
    transition: prefersReducedMotion
      ? { staggerChildren: 0 }
      : { staggerChildren: 0.12, delayChildren: 0.15 },
  },
}

export const staggerSlow = {
  hidden: {},
  visible: {
    transition: prefersReducedMotion
      ? { staggerChildren: 0 }
      : { staggerChildren: 0.18, delayChildren: 0.2 },
  },
}
