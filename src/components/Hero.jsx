import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { fadeUp, viewportOnce } from '../animations/fadeUp'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 pb-16" aria-label="Hero section">
      <div className="max-w-7xl mx-auto px-8 w-full">
        <div className="grid grid-cols-12 gap-8 w-full">
          {/* Left — Editorial text */}
          <div className="col-span-12 lg:col-span-8 z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="section-label mb-6 block">Precision Infrastructure</span>

              <h1 className="text-6xl md:text-8xl font-sora font-extrabold tracking-tighter leading-[0.9] text-on-surface mb-8">
                Strategic <br />
                <span className="text-primary-container">IT Solutions</span>
              </h1>

              <p className="text-xl md:text-2xl text-on-surface-variant max-w-2xl font-light leading-relaxed mb-12">
                We architect resilient digital foundations through human-centric engineering and precision technical oversight.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link to="/services" className="btn-primary text-lg">
                  Explore Services
                </Link>
                <Link to="/case-studies" className="btn-secondary text-lg">
                  Our Method
                </Link>
              </div>
            </motion.div>
          </div>

          {/* Right — Asymmetric image bracket */}
          <div className="hidden lg:block lg:col-span-4 relative">
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="absolute -top-20 right-0 w-full aspect-[3/4] bg-surface-container-highest rounded-xl overflow-hidden"
            >
              <img
                src="/assets/hero-server.jpg"
                alt="High-tech server infrastructure"
                className="w-full h-full object-cover transition-all duration-700"
                onError={(e) => {
                  e.target.style.display = 'none'
                  e.target.parentElement.classList.add('flex', 'items-center', 'justify-center')
                  const icon = document.createElement('span')
                  icon.className = 'material-symbols-outlined text-8xl text-outline/30'
                  icon.textContent = 'dns'
                  e.target.parentElement.appendChild(icon)
                }}
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
