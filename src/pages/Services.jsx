import { useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'
import { motion, useScroll, useSpring } from 'framer-motion'
import PageHero from '../components/PageHero'
import ServiceSplitSection from '../components/ServiceSplitSection'
import CTASection from '../components/CTASection'
import { services } from '../data/services'
import { fadeUp, viewportOnce } from '../animations/fadeUp'
import { staggerFast, staggerItem } from '../animations/stagger'

// Quick-nav anchors
function ServiceQuickNav() {
  return (
    <div className="sticky top-16 z-50 bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 overflow-x-auto scrollbar-hide">
        <div className="flex gap-1 py-3 min-w-max">
          {services.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold text-slate-500 hover:text-blue-600 hover:bg-blue-50 transition-all whitespace-nowrap"
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

  const containerRef = useRef(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start center', 'end center']
  })

  // Smooth spring effect on the scroll progress
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100, // Provides a smooth, responsive follow
    damping: 30,
    restDelta: 0.001
  })

  // Handle hash-based scrolling
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
      <PageHero
        label="Our Expertise"
        title="Complete IT Services"
        accent="Under One Roof"
        subtitle="From infrastructure setup to ongoing AMC support we handle every layer of your IT, so you can focus on running your business."
        badges={[
          '🏢 Office Setup', '💻 Hardware Supply', '📷 Security Systems', '🌐 Networking', '🔄 Rentals', '🤝 B2B'
        ]}
      />

      <ServiceQuickNav />

      {/* Services Container with Timeline */}
      <div ref={containerRef} className="relative">
        {/* All 6 services in alternating split layout */}
        {services.map((service, index) => (
          <ServiceSplitSection
            key={service.id}
            service={service}
            index={index}
          />
        ))}

        {/* Center Timeline Track (Background) */}
        <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-[3px] bg-slate-200/50 -translate-x-1/2 z-10 pointer-events-none" />

        {/* Center Timeline Fill (Animated) */}
        <motion.div
          className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-[3px] bg-gradient-to-b from-blue-600 via-blue-500 to-teal-400 -translate-x-1/2 z-20 origin-top pointer-events-none shadow-[0_0_20px_rgba(37,99,235,0.4)]"
          style={{ scaleY }}
        >
          {/* Glowing dot effect at the tip of the scrolling line */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-4 h-4 bg-teal-400 rounded-full shadow-[0_0_20px_5px_rgba(20,184,166,0.5)] border-2 border-white" />
        </motion.div>
      </div>

      {/* Bottom trust bar */}
      <section className="py-16 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="text-center mb-12"
          >
            <h2 className="font-display font-bold text-2xl text-slate-900 mb-2">
              All services include
            </h2>
            <p className="text-slate-500 text-sm">Standard with every Usha Infotech engagement</p>
          </motion.div>
          <motion.div
            variants={staggerFast}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="grid grid-cols-2 md:grid-cols-4 gap-4"
          >
            {[
              { icon: '🛡️', title: 'Warranty Backed', desc: 'All hardware comes with OEM warranty' },
              { icon: '⚡', title: 'Fast Deployment', desc: 'Most setups completed within 3–5 days' },
              { icon: '📞', title: 'Dedicated Support', desc: 'Direct line to your assigned engineer' },
              { icon: '📋', title: 'Full Documentation', desc: 'Network maps, credentials, asset lists' },
            ].map((item) => (
              <motion.div
                key={item.title}
                variants={staggerItem}
                className="flex flex-col items-center text-center p-6 bg-slate-50 rounded-2xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/30 transition-all group"
              >
                <span className="text-3xl mb-3 group-hover:scale-110 transition-transform">{item.icon}</span>
                <h3 className="font-display font-bold text-sm text-slate-900 mb-1">{item.title}</h3>
                <p className="text-xs text-slate-500 leading-relaxed">{item.desc}</p>
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
