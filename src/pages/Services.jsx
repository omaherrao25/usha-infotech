import { useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import SEO from '../components/SEO'
import PageHero from '../components/PageHero'
import ServiceSplitSection from '../components/ServiceSplitSection'
import CTASection from '../components/CTASection'
import { services } from '../data/services'
import { fadeUp, viewportOnce } from '../animations/fadeUp'
import { staggerFast, staggerItem } from '../animations/stagger'

function ServiceQuickNav() {
  return (
    <div className="sticky top-20 z-40 bg-surface/70 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-8 overflow-x-auto scrollbar-hide">
        <div className="flex gap-1 py-3 min-w-max">
          {services.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold text-on-surface-variant hover:text-primary hover:bg-primary/5 transition-all whitespace-nowrap font-sora"
            >
              <span>{s.icon}</span>
              {s.title.split(' ').slice(0, 2).join(' ')}
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function Services() {
  const location = useLocation()

  useEffect(() => {
    if (location.hash) {
      const el = document.querySelector(location.hash)
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }, 300)
      }
    }
  }, [location.hash])

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
      />

      <ServiceQuickNav />

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
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {[
              { icon: 'verified_user', title: 'Warranty Backed', desc: 'All hardware comes with OEM warranty' },
              { icon: 'bolt', title: 'Fast Deployment', desc: 'Most setups completed within 3-5 days' },
              { icon: 'support_agent', title: 'Dedicated Support', desc: 'Direct line to your assigned engineer' },
              { icon: 'description', title: 'Full Documentation', desc: 'Network maps, credentials, asset lists' },
            ].map((item) => (
              <motion.div
                key={item.title}
                variants={staggerItem}
                className="flex flex-col items-center text-center"
              >
                <div className="w-14 h-14 bg-white/5 rounded-xl flex items-center justify-center mb-4">
                  <span className="material-symbols-outlined text-primary-container text-2xl">{item.icon}</span>
                </div>
                <h3 className="font-sora font-bold text-sm text-white mb-1">{item.title}</h3>
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
