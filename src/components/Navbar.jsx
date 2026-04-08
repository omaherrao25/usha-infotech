import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Products', href: '/products' },
  { label: 'Case Studies', href: '/case-studies' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
    document.body.style.overflow = ''
  }, [location.pathname])

  const toggleMobile = () => {
    setMobileOpen((v) => {
      document.body.style.overflow = v ? '' : 'hidden'
      return !v
    })
  }

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && mobileOpen) toggleMobile()
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [mobileOpen])

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        role="banner"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-surface/70 backdrop-blur-xl shadow-nav' : 'bg-transparent'
        }`}
      >
        <div className="flex justify-between items-center max-w-7xl mx-auto px-8 h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 transition-transform hover:scale-105" aria-label="Usha Infotech — Home">
            <img 
              src="/assets/logo.png" 
              alt="Usha Infotech Logo" 
              className="h-10 w-auto object-contain"
            />
            <span className="text-xl font-bold tracking-tighter text-on-surface font-sora">
              Usha Infotech
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-10" aria-label="Main navigation">
            {navLinks.map((link) => {
              const active = location.pathname === link.href
              return (
                <Link
                  key={link.href}
                  to={link.href}
                  aria-current={active ? 'page' : undefined}
                  className={`font-sora font-light tracking-tight transition-all duration-200 ${
                    active
                      ? 'text-primary font-semibold border-b-2 border-primary'
                      : 'text-on-surface-variant hover:text-on-surface'
                  }`}
                >
                  {link.label}
                </Link>
              )
            })}
          </nav>

          {/* CTA */}
          <div className="hidden md:block">
            <a
              href="tel:+918087051208"
              className="bg-primary-container text-on-primary px-6 py-2.5 rounded-lg font-sora font-semibold text-sm hover:opacity-80 transition-all transform active:scale-95 duration-200"
              aria-label="Call for consultation"
            >
              Consultation
            </a>
          </div>

          {/* Hamburger */}
          <button
            onClick={toggleMobile}
            className="md:hidden flex flex-col gap-1.5 p-2 rounded-lg hover:bg-surface-container-low transition-colors"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
          >
            <motion.span
              animate={mobileOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
              className="block w-6 h-0.5 bg-on-surface rounded-full origin-center"
            />
            <motion.span
              animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
              className="block w-6 h-0.5 bg-on-surface rounded-full"
            />
            <motion.span
              animate={mobileOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
              className="block w-6 h-0.5 bg-on-surface rounded-full origin-center"
            />
          </button>
        </div>
      </motion.header>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id="mobile-nav"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-surface flex flex-col items-center justify-center"
          >
            <button
              onClick={toggleMobile}
              className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center rounded-xl bg-surface-container-low text-on-surface text-xl hover:bg-surface-container transition-colors"
              aria-label="Close menu"
            >
              <span aria-hidden="true">&times;</span>
            </button>

            <nav className="flex flex-col items-center gap-8" aria-label="Mobile navigation">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 30 }}
                  transition={{ delay: i * 0.07, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Link
                    to={link.href}
                    onClick={toggleMobile}
                    aria-current={location.pathname === link.href ? 'page' : undefined}
                    className={`font-sora text-4xl font-bold transition-colors hover:text-primary ${
                      location.pathname === link.href ? 'text-primary' : 'text-on-surface'
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </nav>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.4 }}
              className="mt-12 flex flex-col items-center gap-4"
            >
              <a
                href="tel:+918087051208"
                className="btn-primary text-lg px-8 py-4"
                onClick={toggleMobile}
              >
                Call Now
              </a>
              <a
                href="https://wa.me/918087051208"
                className="btn-secondary text-base px-8 py-4"
                onClick={toggleMobile}
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp Us
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
