// fadeUp.js — Reusable Framer Motion variants with reduced-motion support

const prefersReducedMotion =
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

const safeTransition = (transition) =>
  prefersReducedMotion ? { duration: 0 } : transition

export const fadeUp = {
  hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: safeTransition({ duration: 0.6, ease: [0.22, 1, 0.36, 1] }),
  },
}

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: safeTransition({ duration: 0.5, ease: 'easeOut' }),
  },
}

export const fadeLeft = {
  hidden: { opacity: 0, x: prefersReducedMotion ? 0 : -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: safeTransition({ duration: 0.7, ease: [0.22, 1, 0.36, 1] }),
  },
}

export const fadeRight = {
  hidden: { opacity: 0, x: prefersReducedMotion ? 0 : 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: safeTransition({ duration: 0.7, ease: [0.22, 1, 0.36, 1] }),
  },
}

export const scaleIn = {
  hidden: { opacity: 0, scale: prefersReducedMotion ? 1 : 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: safeTransition({ duration: 0.5, ease: [0.22, 1, 0.36, 1] }),
  },
}

export const slideUp = {
  hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: safeTransition({ duration: 0.8, ease: [0.22, 1, 0.36, 1] }),
  },
}

// For hero text character/word reveals
export const heroText = {
  hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 80, rotateX: prefersReducedMotion ? 0 : -20 },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: safeTransition({ duration: 0.9, ease: [0.22, 1, 0.36, 1] }),
  },
}

// Common viewport settings
export const viewportOnce = { once: true, margin: '-80px' }
export const viewportEager = { once: true, margin: '-40px' }
