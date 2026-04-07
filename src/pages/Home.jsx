import { useRef } from 'react'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import Hero from '../components/Hero'
import ServiceCard from '../components/ServiceCard'
import CTASection from '../components/CTASection'
import { services } from '../data/services'
import { homePreviewCases, clients } from '../data/caseStudies'
import { fadeUp, fadeLeft, fadeRight, viewportOnce } from '../animations/fadeUp'
import { staggerFast, staggerMed, staggerItem } from '../animations/stagger'

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
]

function ClientsTicker() {
  const doubled = [...clientLogos, ...clientLogos]
  return (
    <section className="py-16 bg-surface-container-low overflow-hidden" aria-label="Our trusted clients">
      <div className="max-w-7xl mx-auto px-8 mb-10 text-center">
        <span className="section-label">Trusted By</span>
        <h2 className="font-sora font-bold text-2xl text-on-surface">Our Clients</h2>
      </div>
      <div className="relative overflow-hidden">
        <div className="flex ticker-track gap-16 items-center">
          {doubled.map((logo, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.15 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
              className="flex-shrink-0 flex items-center justify-center p-2 transition-all duration-300 cursor-pointer"
            >
              <img
                src={logo}
                alt={`Client: ${logo.split('/').pop().replace(/\.(png|jpg|jpeg|svg)$/i, '').replace(/[-_]/g, ' ')}`}
                className="h-10 md:h-14 w-auto object-contain max-w-[180px]"
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// — Case Study: Networking (editorial split) —
function NetworkingCaseStudy() {
  return (
    <section className="py-24 lg:py-32 bg-surface-container-low">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Image side */}
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="order-2 lg:order-1"
          >
            <div className="relative">
              <div className="absolute -top-8 -left-8 w-32 h-32 bg-primary/10 -z-10 rounded-full" />
              <div className="w-full aspect-video lg:aspect-square rounded-xl overflow-hidden shadow-ambient bg-surface-container-high">
                <img
                  src="/assets/networking.png"
                  alt="Enterprise networking infrastructure"
                  className="w-full h-full object-cover"
                  loading="lazy"
                  onError={(e) => {
                    e.target.style.display = 'none'
                    e.target.parentElement.classList.add('flex', 'items-center', 'justify-center')
                    const span = document.createElement('span')
                    span.className = 'material-symbols-outlined text-[120px] text-outline/20'
                    span.textContent = 'cable'
                    e.target.parentElement.appendChild(span)
                  }}
                />
              </div>
              {/* Floating metric */}
              <div className="absolute bottom-6 right-6 bg-surface-container-lowest p-6 rounded-lg shadow-card max-w-xs">
                <span className="text-xs font-bold uppercase tracking-widest text-outline block mb-2">Metrics</span>
                <p className="text-2xl font-sora font-bold text-primary">99.99%</p>
                <p className="text-sm text-on-surface-variant">Uptime achieved for global enterprise infrastructure.</p>
              </div>
            </div>
          </motion.div>

          {/* Text side */}
          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="order-1 lg:order-2"
          >
            <span className="text-sm font-bold text-primary-container mb-4 block uppercase tracking-widest">
              Case Study
            </span>
            <h2 className="text-4xl md:text-5xl font-sora font-bold tracking-tight mb-6 text-on-surface">
              Cognitive Networking Infrastructure
            </h2>
            <p className="text-lg text-on-surface-variant mb-8 leading-relaxed">
              Connectivity is the central nervous system of the modern enterprise. We don't just pull cables; we design intelligent, self-healing network architectures that scale with your ambition.
            </p>
            <ul className="space-y-4 mb-10">
              {['SD-WAN Optimization', 'Zero-Trust Architecture', 'Fiber-Optic Precision Layout'].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary/40 shrink-0" />
                  <span className="font-medium text-on-surface-variant">{item}</span>
                </li>
              ))}
            </ul>
            <Link
              to="/case-studies"
              className="inline-flex items-center gap-2 text-primary font-bold hover:gap-4 transition-all"
            >
              View technical breakdown
              <span className="material-symbols-outlined">arrow_forward</span>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// — Services Showcase —
function ServicesSection() {
  return (
    <section className="py-24 lg:py-32 bg-surface" id="services">
      <div className="max-w-7xl mx-auto px-8">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8"
        >
          <div className="max-w-2xl">
            <h2 className="text-5xl font-sora font-extrabold tracking-tighter mb-6 text-on-surface">
              Precision Services for Critical Operations
            </h2>
            <p className="text-xl text-on-surface-variant font-light">
              Combining technical rigor with proactive human oversight to ensure total operational continuity.
            </p>
          </div>
        </motion.div>

        <motion.div
          variants={staggerFast}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {services.slice(0, 4).map((service, i) => (
            <ServiceCard key={service.id} service={service} index={i} />
          ))}
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="text-center mt-16"
        >
          <Link to="/services" className="btn-primary px-8 py-4 text-base">
            View All Services
            <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

// — Quote Section —
function QuoteSection() {
  return (
    <section className="py-24 lg:py-32 bg-on-surface text-surface">
      <div className="max-w-4xl mx-auto px-8 text-center">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <span className="material-symbols-outlined text-6xl text-primary mb-8 block">format_quote</span>
          <blockquote className="text-3xl md:text-5xl font-sora font-light italic leading-tight mb-12">
            "Precision is not just about the hardware; it's about the{' '}
            <span className="text-primary-container font-semibold not-italic">
              integrity of the architecture
            </span>{' '}
            that supports the human experience."
          </blockquote>
          <div className="flex items-center justify-center gap-4">
            <div className="w-12 h-12 rounded-full bg-surface-container-high overflow-hidden flex items-center justify-center">
              <span className="material-symbols-outlined text-on-surface text-2xl">person</span>
            </div>
            <div className="text-left">
              <p className="font-bold text-white">Sameer Agarwal</p>
              <p className="text-sm text-outline">Founder & MD, Usha Infotech</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// — Case Studies Preview —
const CASE_TAG_ACCENT = {
  'IT Infrastructure': '#1A6B8A',
  'Security Systems':  '#b45309',
  'Networking':        '#0f766e',
}

function CaseStudyRow({ study, index }) {
  const color = CASE_TAG_ACCENT[study.tag] ?? '#1A6B8A'
  const tagBg  = color + '14' // ~8% opacity

  return (
    <motion.div variants={staggerItem} className="group relative">
      <Link to="/case-studies" className="block border-b border-surface-container-high">
        {/* Left accent bar — scale-y reveals on hover */}
        <div
          className="absolute left-0 top-0 bottom-0 w-[3px] origin-top scale-y-0 group-hover:scale-y-100 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
          style={{ backgroundColor: color }}
        />

        <div className="flex items-center gap-5 lg:gap-8 py-6 pl-7 pr-3 rounded-r-xl transition-colors duration-200 group-hover:bg-primary/[0.025]">
          {/* Index number */}
          <span className="font-sora font-black text-[1.9rem] leading-none w-9 shrink-0 text-surface-dim group-hover:text-primary/20 transition-colors duration-300 tabular-nums select-none">
            {String(index + 1).padStart(2, '0')}
          </span>

          {/* Logo */}
          <div className="w-[72px] h-7 shrink-0 hidden sm:flex items-center">
            {study.logo ? (
              <img
                src={study.logo}
                alt={study.client}
                className="h-full w-full max-w-[72px] object-contain opacity-50 group-hover:opacity-90 transition-opacity duration-300"
              />
            ) : (
              <span className="text-xl leading-none">{study.icon}</span>
            )}
          </div>

          {/* Client name + title */}
          <div className="flex-1 min-w-0">
            <p className="text-[10px] font-extrabold text-outline uppercase tracking-[0.18em] mb-1 leading-none">
              {study.client}
            </p>
            <h3 className="font-sora font-bold text-base lg:text-[1.05rem] text-on-surface leading-snug group-hover:text-primary transition-colors duration-250 truncate">
              {study.title}
            </h3>
          </div>

          {/* Category badge */}
          <span
            className="text-[10px] font-bold uppercase tracking-[0.12em] px-2.5 py-1 rounded-full shrink-0 hidden md:inline-block"
            style={{ color, backgroundColor: tagBg }}
          >
            {study.tag}
          </span>

          {/* Metrics */}
          <div className="hidden lg:flex items-stretch divide-x divide-surface-container-high shrink-0">
            {[study.metric1, study.metric2].map((m, i) => (
              <div key={m.label} className={`${i === 0 ? 'pr-6' : 'px-6'} text-right`}>
                <div className="font-sora font-black text-lg text-on-surface group-hover:text-primary transition-colors duration-250 leading-none mb-1">
                  {m.val}
                </div>
                <div className="text-[10px] text-outline font-semibold uppercase tracking-wide whitespace-nowrap">
                  {m.label}
                </div>
              </div>
            ))}
          </div>

          {/* Arrow */}
          <span className="material-symbols-outlined text-[18px] text-outline group-hover:text-primary group-hover:translate-x-1.5 transition-all duration-300 shrink-0">
            arrow_forward
          </span>
        </div>
      </Link>
    </motion.div>
  )
}

function CaseStudiesSection() {
  return (
    <section className="py-24 lg:py-32 bg-surface-container-low" id="cases">
      <div className="max-w-7xl mx-auto px-8">

        {/* Header — headline left, stats right */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="flex flex-col lg:flex-row lg:items-end justify-between gap-10 pb-12 mb-0 border-b border-surface-container-high"
        >
          <div className="max-w-lg">
            <span className="section-label">Client Success Stories</span>
            <h2 className="font-sora font-extrabold text-4xl lg:text-5xl text-on-surface leading-tight">
              Results that speak
              <br />
              <span className="text-primary-container">louder than claims.</span>
            </h2>
          </div>

          {/* 4 stats — clean, no boxes */}
          <div className="grid grid-cols-2 gap-x-10 gap-y-5 lg:text-right shrink-0">
            {[
              { val: '500+',   label: 'Businesses served' },
              { val: '25 Cr+', label: 'Capital saved'     },
              { val: '99.9%',  label: 'Avg. uptime'       },
              { val: '40%',    label: 'Cost reduction'    },
            ].map((s) => (
              <div key={s.label}>
                <div className="font-sora font-black text-3xl text-on-surface leading-none mb-1.5">{s.val}</div>
                <div className="text-sm text-outline font-medium">{s.label}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Numbered case study rows */}
        <motion.div
          variants={staggerMed}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mb-14"
        >
          {homePreviewCases.map((study, i) => (
            <CaseStudyRow key={study.client} study={study} index={i} />
          ))}
        </motion.div>

        {/* CTAs */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="flex flex-wrap gap-4"
        >
          <a href="tel:+918087051208" className="btn-primary py-4 px-7">
            Get Free IT Consultation
          </a>
          <Link to="/case-studies" className="btn-secondary py-4 px-7">
            View All Stories
            <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </Link>
        </motion.div>

      </div>
    </section>
  )
}

// — Process/How We Work —

const processSteps = [
  { title: 'Free Consultation Call', desc: 'Call or WhatsApp us to discuss your requirements, timeline, and budget — absolutely no obligations attached.', icon: 'call' },
  { title: 'Site Survey & Planning', desc: 'Our engineers visit your site or do a remote assessment, then deliver a detailed, transparent quotation.', icon: 'search' },
  { title: 'Deployment & Support', desc: 'Our trained team handles installation end-to-end with post-deployment AMC and 24-hr replacement guarantee.', icon: 'build' },
]

function ProcessSection() {
  const sectionRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start']
  })

  // Animate path drawing
  const pathLength = useSpring(
    useTransform(scrollYProgress, [0.1, 0.55], [0, 1]),
    { stiffness: 60, damping: 20 }
  )

  // Animate step reveals
  const step1Opacity = useTransform(scrollYProgress, [0.12, 0.25], [0, 1])
  const step1Y = useTransform(scrollYProgress, [0.12, 0.25], [30, 0])
  const step2Opacity = useTransform(scrollYProgress, [0.22, 0.35], [0, 1])
  const step2Y = useTransform(scrollYProgress, [0.22, 0.35], [30, 0])
  const step3Opacity = useTransform(scrollYProgress, [0.32, 0.45], [0, 1])
  const step3Y = useTransform(scrollYProgress, [0.32, 0.45], [30, 0])

  const stepAnims = [
    { opacity: step1Opacity, y: step1Y },
    { opacity: step2Opacity, y: step2Y },
    { opacity: step3Opacity, y: step3Y },
  ]

  return (
    <section ref={sectionRef} className="py-24 lg:py-32 overflow-hidden relative" id="process"
      style={{ background: '#0f1923' }}
    >
      {/* Decorative background circles */}
      <div className="absolute top-8 right-[-40px] w-[260px] h-[260px] rounded-full border-[28px] pointer-events-none"
        style={{ borderColor: 'rgba(26,107,138,0.08)' }} />
      <div className="absolute bottom-[-60px] left-[-80px] w-[200px] h-[200px] rounded-full border-[22px] pointer-events-none"
        style={{ borderColor: 'rgba(26,107,138,0.06)' }} />
      <div className="absolute top-[40%] right-[5%] w-[120px] h-[120px] rounded-full pointer-events-none hidden lg:block"
        style={{ background: 'rgba(26,107,138,0.05)' }} />

      <div className="max-w-7xl mx-auto px-8 relative">
        {/* Full-width heading */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mb-20 max-w-3xl"
        >
          <span className="text-xs font-bold uppercase tracking-[0.2em] mb-6 block"
            style={{ color: '#1A6B8A' }}>
            How We Work
          </span>
          <h2 className="font-sora font-extrabold text-4xl lg:text-5xl xl:text-[3.5rem] leading-tight text-white">
            Our team of experts deliver
            <br />
            <span style={{ color: '#1a9dbb' }}>precision and reliability</span>
            {' '}at every step.
          </h2>
        </motion.div>

        {/* Horizontal timeline — dots on curve, text alternating above/below */}
        {/* Horizontal timeline — dots on curve, text alternating above/below */}
        <div className="relative hidden md:block" style={{ height: '420px' }}>
          {/* SVG curved line — fills the container height to sync coordinates */}
          <svg
            className="absolute left-0 right-0 top-0 bottom-0 pointer-events-none w-full h-full"
            viewBox="0 0 1000 420"
            fill="none"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            {/* 
              Curve coordinates (x, y):
              Start: 0, 240
              Point 1 (Step 1): ~100, 240
              Point 2 (Step 2): ~460, 160
              Point 3 (Step 3): ~900, 220
              End: 1000, 230
            */}
            {/* Ghost path */}
            <path
              d="M 0 240 C 50 240, 70 240, 100 240 C 250 240, 300 160, 460 160 C 650 160, 750 220, 900 220 C 950 220, 980 230, 1000 230"
              stroke="#1A6B8A"
              strokeWidth="2"
              strokeLinecap="round"
              fill="none"
              opacity="0.15"
            />
            {/* Animated path */}
            <motion.path
              d="M 0 240 C 50 240, 70 240, 100 240 C 250 240, 300 160, 460 160 C 650 160, 750 220, 900 220 C 950 220, 980 230, 1000 230"
              stroke="#1A6B8A"
              strokeWidth="2.5"
              strokeLinecap="round"
              fill="none"
              style={{ pathLength }}
            />
            {/* Glow */}
            <motion.path
              d="M 0 240 C 50 240, 70 240, 100 240 C 250 240, 300 160, 460 160 C 650 160, 750 220, 900 220 C 950 220, 980 230, 1000 230"
              stroke="#1A6B8A"
              strokeWidth="8"
              strokeLinecap="round"
              fill="none"
              opacity="0.1"
              style={{ pathLength }}
            />
          </svg>

          {/* Step 1 — dot on curve, text BELOW */}
          <motion.div
            className="absolute"
            style={{ left: '10%', top: '240px', transform: 'translate(-50%, -50%)', opacity: step1Opacity }}
          >
            <div className="w-[18px] h-[18px] rounded-full border-[2.5px] flex items-center justify-center mx-auto relative z-10"
              style={{ borderColor: '#1A6B8A', background: 'rgba(15,25,35,0.9)' }}>
              <div className="w-[7px] h-[7px] rounded-full" style={{ background: '#1a9dbb' }} />
            </div>
            <motion.div className="mt-8 w-[240px] text-center absolute left-1/2 -translate-x-1/2" style={{ y: step1Y }}>
              <span className="font-sora font-black text-[8rem] leading-none select-none absolute pointer-events-none"
                style={{ color: 'rgba(26,107,138,0.07)', top: '-10px', left: '50%', transform: 'translateX(-50%)' }}>
                1
              </span>
              <h3 className="font-sora font-bold text-base text-white mb-2 relative">
                {processSteps[0].title}
              </h3>
              <p className="text-sm leading-relaxed relative mx-auto" style={{ color: 'rgba(255,255,255,0.5)' }}>
                {processSteps[0].desc}
              </p>
            </motion.div>
          </motion.div>

          {/* Step 2 — dot on curve, text ABOVE */}
          <motion.div
            className="absolute"
            style={{ left: '46%', top: '160px', transform: 'translate(-50%, -50%)', opacity: step2Opacity }}
          >
            <motion.div className="mb-8 w-[260px] text-center absolute bottom-full left-1/2 -translate-x-1/2" style={{ y: step2Y }}>
              <span className="font-sora font-black text-[8rem] leading-none select-none absolute pointer-events-none"
                style={{ color: 'rgba(26,107,138,0.07)', bottom: '-20px', left: '50%', transform: 'translateX(-50%)' }}>
                2
              </span>
              <h3 className="font-sora font-bold text-base text-white mb-2 relative">
                {processSteps[1].title}
              </h3>
              <p className="text-sm leading-relaxed relative mx-auto" style={{ color: 'rgba(255,255,255,0.5)' }}>
                {processSteps[1].desc}
              </p>
            </motion.div>
            <div className="w-[18px] h-[18px] rounded-full border-[2.5px] flex items-center justify-center mx-auto relative z-10"
              style={{ borderColor: '#1A6B8A', background: 'rgba(15,25,35,0.9)' }}>
              <div className="w-[7px] h-[7px] rounded-full" style={{ background: '#1a9dbb' }} />
            </div>
          </motion.div>

          {/* Step 3 — dot on curve, text BELOW */}
          <motion.div
            className="absolute"
            style={{ left: '90%', top: '220px', transform: 'translate(-50%, -50%)', opacity: step3Opacity }}
          >
            <div className="w-[18px] h-[18px] rounded-full border-[2.5px] flex items-center justify-center mx-auto relative z-10"
              style={{ borderColor: '#1A6B8A', background: 'rgba(15,25,35,0.9)' }}>
              <div className="w-[7px] h-[7px] rounded-full" style={{ background: '#1a9dbb' }} />
            </div>
            <motion.div className="mt-8 w-[240px] text-center absolute left-1/2 -translate-x-1/2" style={{ y: step3Y }}>
              <span className="font-sora font-black text-[8rem] leading-none select-none absolute pointer-events-none"
                style={{ color: 'rgba(26,107,138,0.07)', top: '-10px', left: '50%', transform: 'translateX(-50%)' }}>
                3
              </span>
              <h3 className="font-sora font-bold text-base text-white mb-2 relative">
                {processSteps[2].title}
              </h3>
              <p className="text-sm leading-relaxed relative mx-auto" style={{ color: 'rgba(255,255,255,0.5)' }}>
                {processSteps[2].desc}
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* Mobile fallback — vertical stack */}
        <div className="md:hidden space-y-10">
          {processSteps.map((step, i) => (
            <motion.div key={step.title} className="flex gap-5 items-start"
              style={{ opacity: stepAnims[i].opacity, y: stepAnims[i].y }}>
              <div className="w-[18px] h-[18px] rounded-full border-[2.5px] flex items-center justify-center shrink-0 mt-1"
                style={{ borderColor: '#1A6B8A', background: 'rgba(26,107,138,0.15)' }}>
                <div className="w-[7px] h-[7px] rounded-full" style={{ background: '#1a9dbb' }} />
              </div>
              <div>
                <h3 className="font-sora font-bold text-base text-white mb-1.5">{step.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.5)' }}>{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// — Our Story / Founders —
function StorySection() {
  return (
    <section className="py-24 lg:py-32 bg-surface-container-low" id="story">
      <div className="max-w-7xl mx-auto px-8">
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
              <div className="group relative bg-surface-container-high rounded-2xl overflow-hidden aspect-[3/4] flex flex-col items-center justify-end pb-4 px-2 sm:pb-6 sm:px-4 text-center">
                <div className="absolute inset-0">
                  <img src="/assets/SameerAgarwal.jpeg" alt="Sameer Agarwal" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                </div>
                <div className="relative z-10 bg-surface-container-lowest/90 backdrop-blur-sm rounded-xl px-2 py-1.5 sm:px-4 sm:py-3">
                  <p className="font-sora font-bold text-on-surface text-xs sm:text-sm">Sameer Agarwal</p>
                  <p className="text-[10px] sm:text-xs text-primary font-semibold uppercase tracking-wide">Founder & MD</p>
                </div>
              </div>
              <div className="group relative bg-surface-container-high rounded-2xl overflow-hidden aspect-[3/4] flex flex-col items-center justify-end pb-4 px-2 sm:pb-6 sm:px-4 text-center">
                <div className="absolute inset-0">
                  <img src="/assets/EktaAgarwal.jpeg" alt="Ekta Agarwal" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                </div>
                <div className="relative z-10 bg-surface-container-lowest/90 backdrop-blur-sm rounded-xl px-2 py-1.5 sm:px-4 sm:py-3">
                  <p className="font-sora font-bold text-on-surface text-xs sm:text-sm">Ekta Agarwal</p>
                  <p className="text-[10px] sm:text-xs text-primary font-semibold uppercase tracking-wide">Co-Founder & Director</p>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-on-surface text-white rounded-2xl px-3 py-2 sm:px-6 sm:py-3 shadow-lg flex items-center gap-3 w-max max-w-[90vw]">
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="font-sora font-bold text-xs sm:text-sm tracking-wide">Since 2000 &middot; 25+ Years</span>
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
            <h2 className="font-sora font-extrabold text-4xl lg:text-5xl xl:text-6xl text-on-surface leading-tight mb-6">
              Built on one promise
              <br />
              <span className="text-primary-container">since 2000.</span>
            </h2>
            <p className="text-on-surface-variant text-base leading-relaxed mb-6">
              What started as a small computer shop in Nashik has grown into a leading pan-India IT solutions provider. For over 25 years, our journey has been defined by a relentless focus on reliability and customer-first service.
            </p>

            <blockquote className="relative pl-6 py-2 mb-8 bg-primary/5 rounded-r-xl pr-6 border-l-4 border-primary">
              <p className="text-on-surface text-base italic leading-relaxed font-medium">
                "We don't just install technology. We make sure it works on the day you need it most."
              </p>
              <cite className="text-sm text-primary font-bold not-italic mt-2 block">
                — Sameer Agarwal, Founder
              </cite>
            </blockquote>

            <p className="text-on-surface-variant text-sm leading-relaxed mb-8">
              Today, we manage IT infrastructure for over 500+ global enterprises, ensuring their business stays connected, secure, and ready for the future.
            </p>

            <div className="grid grid-cols-3 gap-4">
              {[
                { val: '25+', label: 'Years' },
                { val: '500+', label: 'Clients' },
                { val: 'Pan-India', label: 'Reach' },
              ].map((item) => (
                <div key={item.label} className="bg-surface-container-lowest rounded-xl p-4 text-center">
                  <div className="font-sora font-black text-2xl text-on-surface">{item.val}</div>
                  <div className="text-xs text-outline font-semibold uppercase tracking-wide mt-1">{item.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default function Home() {
  return (
    <>
      <SEO
        path="/"
        description="Usha Infotech — Nashik's trusted IT solutions provider since 2000. Enterprise hardware, CCTV, networking, AMC and IT rentals across India."
      />
      <Hero />
      <ClientsTicker />
      <NetworkingCaseStudy />
      <ServicesSection />
      <QuoteSection />
      <CaseStudiesSection />
      <ProcessSection />
      <StorySection />
      <CTASection />
    </>
  )
}
