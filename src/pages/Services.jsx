import { useState, useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import SEO from '../components/SEO'
import PageHero from '../components/PageHero'
import ServiceSplitSection from '../components/ServiceSplitSection'
import CTASection from '../components/CTASection'
import { services } from '../data/services'
import { fadeUp, viewportOnce } from '../animations/fadeUp'
import { staggerFast, staggerItem } from '../animations/stagger'

function ServiceQuickNav({ activeId }) {
  return (
    <div className="sticky top-20 z-40 bg-surface/80 backdrop-blur-xl border-b border-outline-variant/10">
      <div className="max-w-7xl mx-auto px-8 overflow-x-auto scrollbar-hide">
        <div className="flex gap-2 py-3 min-w-max">
          {services.map((s) => {
            const isActive = activeId === s.id
            return (
              <a
                key={s.id}
                href={`#${s.id}`}
                className={`flex items-center px-5 py-2.5 rounded-full text-[11px] font-bold uppercase tracking-widest transition-all duration-300 font-sora ${
                  isActive
                    ? 'bg-primary text-white shadow-lg shadow-primary/20 scale-105'
                    : 'text-on-surface-variant hover:text-primary hover:bg-primary/5'
                }`}
              >
                {s.title}
              </a>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default function Services() {
  const location = useLocation()
  const [activeId, setActiveId] = useState('')

  useEffect(() => {
    // Scroll to hash if exists
    if (location.hash) {
      const el = document.querySelector(location.hash)
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }, 300)
      }
    }
  }, [location.hash])

  useEffect(() => {
    // Track active section for nav highlighting
    const handleObserver = () => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveId(entry.target.id)
            }
          })
        },
        { threshold: 0.1, rootMargin: '-40% 0px -40% 0px' }
      )

      services.forEach((service) => {
        const el = document.getElementById(service.id)
        if (el) observer.observe(el)
      })

      return observer
    }

    const obs = handleObserver()
    return () => obs.disconnect()
  }, [])

  return (
    <>
      <SEO
        title="IT Services"
        path="/services"
        description="Complete IT services under one roof — infrastructure setup, hardware supply, CCTV surveillance, enterprise networking, IT rentals and AMC support across India."
      />
      <PageHero
        label="Precision Infrastructure"
        title="Strategic"
        accent="IT Solutions"
        subtitle="We architect resilient digital foundations through human-centric engineering and precision technical oversight."
        badges={['Cloud Architecture', 'Cybersecurity', 'Networking', 'AMC Support', 'Hardware Supply', 'IT Rentals']}
        bgImage="IT Infra Service.webp"
        invertImage
      />

      <ServiceQuickNav activeId={activeId} />

      {/* All services in alternating split layout */}
      {services.map((service, index) => (
        <ServiceSplitSection key={service.id} service={service} index={index} />
      ))}

      {/* Bottom trust bar */}
      <section className="py-24 bg-on-surface text-surface">
        <div className="max-w-7xl mx-auto px-8">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="text-center mb-12"
          >
            <h2 className="font-sora font-bold text-2xl text-white mb-2">All services include</h2>
            <p className="text-outline text-sm">Standard with every Usha Infotech engagement</p>
          </motion.div>
          <motion.div
            variants={staggerFast}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="grid grid-cols-2 md:grid-cols-4 gap-12"
          >
            {[
              { title: 'Warranty Backed', desc: 'All hardware comes with OEM warranty' },
              { title: 'Fast Deployment', desc: 'Most setups completed within 3-5 days' },
              { title: 'Dedicated Support', desc: 'Direct line to your assigned engineer' },
              { title: 'Full Documentation', desc: 'Network maps, credentials, asset lists' },
            ].map((item) => (
              <motion.div
                key={item.title}
                variants={staggerItem}
                className="flex flex-col items-center text-center"
              >
                <div className="w-1 h-12 bg-primary/20 rounded-full mb-6" />
                <h3 className="font-sora font-bold text-sm text-white mb-2 uppercase tracking-widest">{item.title}</h3>
                <p className="text-xs text-outline leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <CTASection
        title="Ready to get started?"
        subtitle="Tell us what you need — we'll get back to you with a free, no-obligation quote within 24 hours."
      />
    </>
  )
}
