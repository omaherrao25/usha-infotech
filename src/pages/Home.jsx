import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Link } from 'react-router-dom'
import Hero from '../components/Hero'
import ServiceCard from '../components/ServiceCard'
import CaseStudyCard from '../components/CaseStudyCard'
import CTASection from '../components/CTASection'
import { services } from '../data/services'
import { homePreviewCases, clients } from '../data/caseStudies'
import { fadeUp, fadeLeft, fadeRight, viewportOnce } from '../animations/fadeUp'
import { staggerFast, staggerMed, staggerItem, staggerSlow } from '../animations/stagger'

// — Clients Ticker —
const clientLogos = [
  '/assets/logos/KAIZEN SOLUTIONS.png',
  '/assets/logos/MYORL-CARE.png',
  '/assets/logos/NETHORITY.png',
  '/assets/logos/ROONGTA GROUP.png',
  '/assets/logos/SOMA VINE.png',
  '/assets/logos/TIMUS LIFESTYLE.png',
  '/assets/logos/WELD TECH.png.png',
  '/assets/logos/WHIZKIDS.png',
  '/assets/logos/fizzyfox logo.png',
  '/assets/logos/silverbells.png'
];

function ClientsTicker() {
  const doubled = [...clientLogos, ...clientLogos]
  return (
    <section className="py-16 bg-white border-y border-slate-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-10 text-center">
        <p className="text-xs font-bold tracking-widest uppercase text-slate-400 mb-1">Trusted By</p>
        <h2 className="font-display font-bold text-2xl text-slate-900">Our Clients</h2>
      </div>
      <div className="relative overflow-hidden">
        <div className="flex ticker-track gap-16 items-center">
          {doubled.map((logo, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.15 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
              className="flex-shrink-0 flex items-center justify-center p-2 opacity-60 hover:opacity-100 transition-all duration-300 grayscale hover:grayscale-0 cursor-pointer"
            >
              <img 
                src={logo} 
                alt="Client Logo" 
                className="h-10 md:h-12 w-auto object-contain max-w-[160px]" 
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// — Services Showcase —
function ServicesSection() {
  return (
    <section className="py-16 lg:py-24 bg-slate-50/60" id="services">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="text-center mb-14"
        >
          <span className="section-label">Our Expertise</span>
          <h2 className="font-display font-black text-4xl lg:text-5xl text-slate-900 mb-4">
            Service Showcase
          </h2>
          <p className="text-slate-500 text-lg max-w-xl mx-auto">
            From business infrastructure to personal devices — everything under one roof.
          </p>
        </motion.div>

        <motion.div
          variants={staggerFast}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 group/services"
        >
          {services.map((service, i) => (
            <ServiceCard key={service.id} service={service} index={i} />
          ))}
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="text-center mt-12"
        >
          <Link to="/services" className="btn-primary px-8 py-4 text-base">
            View All Services in Detail →
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

// — Case Studies Preview —
function CaseStudiesSection() {
  return (
    <section className="py-16 lg:py-24 bg-white" id="cases">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left text */}
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="lg:sticky lg:top-28"
          >
            <span className="section-label">CLIENT SUCCESS STORIES</span>
            <h2 className="font-display font-black text-4xl lg:text-5xl xl:text-6xl text-slate-900 leading-tight mb-6">
              500+ Businesses<br />
              <span className="gradient-text italic">Transformed.</span>
            </h2>
            <p className="text-slate-500 text-base leading-relaxed mb-8">
              99.9% uptime guaranteed · 40% average cost savings · Zero-downtime migrations · 25 years trusted
            </p>
            <div className="flex flex-col gap-4 mb-10">
              {[
                { icon: '🏆', stat: '₹50 Cr+', label: 'Capital saved for clients' },
                { icon: '⚡', stat: '99.9%', label: 'Uptime across deployments' },
                { icon: '🚀', stat: '40%', label: 'Average cost reduction' },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-4 p-4 bg-slate-50 rounded-xl border border-slate-100">
                  <span className="text-2xl">{item.icon}</span>
                  <div>
                    <div className="font-display font-black text-xl text-slate-900">{item.stat}</div>
                    <div className="text-sm text-slate-500">{item.label}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-4">
              <a href="tel:+918087051208" className="btn-primary py-4 px-7">
                📞 Get Free IT Consultation
              </a>
              <Link to="/case-studies" className="btn-secondary py-4 px-7">
                View All Stories →
              </Link>
            </div>
          </motion.div>

          {/* Right: cards */}
          <motion.div
            variants={staggerMed}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="flex flex-col gap-6"
          >
            {homePreviewCases.map((study) => (
              <CaseStudyCard key={study.client} study={study} variant="preview" />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// — Process/How We Work —
const steps = [
  { icon: '📞', step: '01', title: 'Free Consultation', desc: 'Call or WhatsApp us. We discuss your requirements, timeline and budget — no obligations.' },
  { icon: '📋', step: '02', title: 'Site Survey & Quote', desc: 'Our engineers visit your site (or do a remote assessment) and deliver a detailed, transparent quotation.' },
  { icon: '⚡', step: '03', title: 'Deployment', desc: 'Our trained team handles the entire installation — hardware, software, networking — with zero mess left behind.' },
  { icon: '🛡️', step: '04', title: 'Support & AMC', desc: 'Post-installation support, AMC contracts, and 24-hr replacement guarantee keep you running smoothly.' },
]

function ProcessSection() {
  return (
    <section className="py-16 lg:py-24 bg-slate-50" id="process">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="text-center mb-16"
        >
          <span className="section-label">How We Work</span>
          <h2 className="font-display font-black text-4xl lg:text-5xl text-slate-900 mb-4">
            Simple Process.<br />
            <span className="gradient-text">Zero Hassle.</span>
          </h2>
        </motion.div>

        <div className="relative">
          <motion.div
            variants={staggerSlow}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10"
          >
          {steps.map((step, i) => (
            <motion.div
              key={step.step}
              variants={staggerItem}
              className="relative bg-white rounded-2xl border border-slate-100 shadow-card p-7 hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="text-4xl group-hover:scale-110 transition-transform duration-300">
                  {step.icon}
                </div>
                <span className="font-display font-black text-5xl text-slate-100 group-hover:text-blue-100 transition-colors">
                  {step.step}
                </span>
              </div>
              <h3 className="font-display font-bold text-lg text-slate-900 mb-3 group-hover:text-blue-700 transition-colors">
                {step.title}
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed">{step.desc}</p>

              {/* Timeline Connector Arrow */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute -right-6 top-[46px] w-6 h-[2px] bg-slate-100 z-20">
                   <motion.div 
                     className="absolute top-0 left-0 h-full bg-blue-500"
                     initial={{ width: '0%', opacity: 0 }}
                     animate={{ width: '100%', opacity: [0, 1, 1, 0] }}
                     transition={{ duration: 1.5, repeat: Infinity, ease: 'linear', delay: i * 0.4 }}
                   />
                   <motion.div
                     className="absolute top-1/2 -translate-y-1/2 text-blue-500"
                     initial={{ left: '0%', opacity: 0 }}
                     animate={{ left: '100%', opacity: [0, 1, 1, 0] }}
                     transition={{ duration: 1.5, repeat: Infinity, ease: 'linear', delay: i * 0.4 }}
                   >
                     <svg className="w-4 h-4 -ml-2" fill="currentColor" viewBox="0 0 20 20">
                       <path fillRule="evenodd" clipRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" />
                     </svg>
                   </motion.div>
                </div>
              )}
            </motion.div>
          ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// — Our Story / Founders —
function StorySection() {
  return (
    <section className="py-16 lg:py-24 bg-white" id="story">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left: Founders visual */}
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-5 pb-8">
              {/* Founder 1 */}
              <div className="group relative bg-gradient-to-br from-blue-50 to-slate-100 rounded-2xl overflow-hidden aspect-[3/4] border border-slate-200 shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col items-center justify-end pb-6 px-4 text-center">
                <div className="absolute inset-0">
                  <img src="/assets/SameerAgarwal.jpeg" alt="Sameer Agarwal" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                </div>
                <div className="relative z-10 bg-white/90 backdrop-blur-sm rounded-xl px-4 py-3 border border-white/60">
                  <p className="font-display font-bold text-slate-900 text-sm">Sameer Agarwal</p>
                  <p className="text-xs text-blue-600 font-semibold uppercase tracking-wide">Founder & MD</p>
                </div>
              </div>
              {/* Founder 2 */}
              <div className="group relative bg-gradient-to-br from-teal-50 to-slate-100 rounded-2xl overflow-hidden aspect-[3/4] border border-slate-200 shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col items-center justify-end pb-6 px-4 text-center">
                <div className="absolute inset-0">
                  <img src="/assets/EktaAgarwal.jpeg" alt="Ekta Agarwal" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                </div>
                <div className="relative z-10 bg-white/90 backdrop-blur-sm rounded-xl px-4 py-3 border border-white/60">
                  <p className="font-display font-bold text-slate-900 text-sm">Ekta Agarwal</p>
                  <p className="text-xs text-teal-600 font-semibold uppercase tracking-wide">Co-Founder & Director</p>
                </div>
              </div>
            </div>

            {/* Floating year badge */}
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-slate-900 text-white rounded-2xl px-6 py-3 shadow-lg flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="font-display font-bold text-sm tracking-wide">Since 2000 · 25+ Years</span>
            </div>
          </motion.div>

          {/* Right: Story content */}
          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            <span className="section-label">Our Story</span>
            <h2 className="font-display font-black text-4xl lg:text-5xl xl:text-6xl text-slate-900 leading-tight mb-6">
              Built on one promise<br />
              <span className="gradient-text italic">since 2000.</span>
            </h2>
            <p className="text-slate-500 text-base leading-relaxed mb-6">
              What started as a small computer shop in Nashik has grown into a leading pan-India IT solutions provider. For over 25 years, our journey has been defined by a relentless focus on reliability and customer-first service.
            </p>

            {/* Quote */}
            <blockquote className="relative border-l-4 border-blue-500 pl-6 py-2 mb-8 bg-blue-50/50 rounded-r-xl pr-6">
              <p className="text-slate-700 text-base italic leading-relaxed font-medium">
                "We don't just install technology. We make sure it works on the day you need it most."
              </p>
              <cite className="text-sm text-blue-600 font-bold not-italic mt-2 block">
                — Sameer Agarwal, Founder
              </cite>
            </blockquote>

            <p className="text-slate-500 text-sm leading-relaxed mb-8">
              Today, we manage IT infrastructure for over 500+ global enterprises, ensuring their business stays connected, secure, and ready for the future.
            </p>

            <div className="grid grid-cols-3 gap-4">
              {[
                { val: '25+', label: 'Years' },
                { val: '500+', label: 'Clients' },
                { val: 'Pan-India', label: 'Reach' },
              ].map((item) => (
                <div key={item.label} className="bg-slate-50 rounded-xl p-4 border border-slate-100 text-center">
                  <div className="font-display font-black text-2xl text-slate-900">{item.val}</div>
                  <div className="text-xs text-slate-400 font-semibold uppercase tracking-wide mt-1">{item.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// — Trust / Why Us —
const trustPoints = [
  { icon: '🏆', title: 'Reliable IT. Zero Stress.', points: ['25+ years experience', 'Trusted by 500+ businesses', 'Ongoing support available'] },
  { icon: '⚡', title: 'Fast & Professional', points: ['3-day avg office setup', 'Same-day emergency support', 'Trained certified engineers'] },
  { icon: '💸', title: 'Best Value Guaranteed', points: ['40% below market pricing', 'No hidden charges', 'GEM registered vendor'] },
]

function TrustSection() {
  return (
    <section className="py-16 lg:py-24 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="text-center mb-14"
        >
          <span className="section-label">Why Choose Us</span>
          <h2 className="font-display font-black text-4xl lg:text-5xl text-slate-900">
            Enterprise IT Solutions.<br />
            <span className="gradient-text">Simplified for You.</span>
          </h2>
        </motion.div>

        <motion.div
          variants={staggerMed}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {trustPoints.map((point) => (
            <motion.div
              key={point.title}
              variants={staggerItem}
              className="bg-white rounded-2xl border border-slate-100 shadow-card p-8 hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">
                {point.icon}
              </div>
              <h3 className="font-display font-bold text-xl text-slate-900 mb-5">
                {point.title}
              </h3>
              <ul className="flex flex-col gap-3">
                {point.points.map((p) => (
                  <li key={p} className="flex items-center gap-3 text-slate-600 text-sm">
                    <span className="w-5 h-5 rounded-full bg-green-50 text-green-600 flex items-center justify-center text-[10px] font-bold flex-shrink-0">✓</span>
                    {p}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default function Home() {
  return (
    <>
      <Hero />
      <ClientsTicker />
      <ServicesSection />
      <CaseStudiesSection />
      <ProcessSection />
      <StorySection />
      <TrustSection />
      <CTASection />
    </>
  )
}
