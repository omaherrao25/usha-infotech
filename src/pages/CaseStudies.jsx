import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import SEO from '../components/SEO'
import PageHero from '../components/PageHero'
import CaseStudySplitSection from '../components/CaseStudySplitSection'
import CTASection from '../components/CTASection'
import { caseStudies } from '../data/caseStudies'
import { fadeUp, viewportOnce } from '../animations/fadeUp'
import { staggerFast, staggerMed, staggerItem } from '../animations/stagger'

function MetricsBar() {
  const metrics = [
    { val: '500+', label: 'Businesses Transformed', icon: 'corporate_fare' },
    { val: '25 Cr+', label: 'Capital Saved for Clients', icon: 'savings' },
    { val: '99.9%', label: 'Uptime Guaranteed', icon: 'bolt' },
    { val: '25 Yrs', label: 'Industry Experience', icon: 'emoji_events' },
    { val: '40%', label: 'Avg Cost Reduction', icon: 'trending_down' },
  ]

  return (
    <section className="py-16 bg-on-surface text-surface">
      <div className="max-w-7xl mx-auto px-8">
        <motion.div
          variants={staggerFast}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8"
        >
          {metrics.map((m) => (
            <motion.div
              key={m.label}
              variants={staggerItem}
              className="flex flex-col items-center text-center"
            >
              <div className="font-sora font-black text-2xl lg:text-3xl text-white mb-0.5">{m.val}</div>
              <div className="text-xs text-outline font-medium uppercase tracking-widest leading-tight">{m.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

function IndustryNav({ activeId, onTabClick }) {
  const scrollRef = useRef(null);

  // Auto-scroll the active tab into view when activeId changes
  useEffect(() => {
    if (!scrollRef.current) return;
    const activeEl = scrollRef.current.querySelector("[data-active='true']");
    if (activeEl) {
      activeEl.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
    }
  }, [activeId]);

  return (
    <div className="sticky top-20 z-30 bg-surface/80 backdrop-blur-xl border-b border-outline-variant/10">
      <div className="max-w-7xl mx-auto px-8 overflow-x-auto scrollbar-hide" ref={scrollRef}>
        <div className="flex gap-2 py-3 min-w-max">
          {caseStudies.map((s) => {
            const isActive = activeId === s.id
            return (
              <a
                key={s.id}
                href={`#case-${s.id}`}
                data-active={isActive.toString()}
                onClick={(e) => { e.preventDefault(); onTabClick(s.id); }}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300 font-sora ${
                  isActive
                    ? 'bg-logo-gradient text-white shadow-lg shadow-primary/20 scale-105'
                    : 'text-on-surface-variant hover:text-gradient hover:bg-logo-gradient-5'
                }`}
              >
                {s.client}
              </a>
            )
          })}
        </div>
      </div>
    </div>
  )
}

function TestimonialsStrip() {
  const quotes = [
    {
      text: "Usha Infotech set up our entire 80-seat office in just 4 days. Saved us 6 lakhs and months of headaches.",
      name: "Operations Head",
      company: "Pharma Company, Nashik",
    },
    {
      text: "Our media transfer times crashed by 70% after they overhauled our network. The team was professional and fast.",
      name: "Creative Director",
      company: "Fizzy Fox Studio",
    },
    {
      text: "We've been with them for 8 years. They handle our entire IT infrastructure without us lifting a finger.",
      name: "MD",
      company: "Logistics Group, Nashik",
    },
  ]

  return (
    <section className="py-24 lg:py-32 bg-on-surface text-surface">
      <div className="max-w-4xl mx-auto px-8 text-center">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <span className="section-label text-gradient mb-8 block">What Clients Say</span>
          <h2 className="font-sora font-bold text-3xl lg:text-4xl text-white mb-16">Voices of Trust</h2>
        </motion.div>

        <motion.div
          variants={staggerMed}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {quotes.map((q, i) => (
            <motion.div
              key={i}
              variants={staggerItem}
              className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl text-left"
            >
              <span className="text-4xl text-primary-container block mb-4 font-serif leading-none select-none" aria-hidden="true">&ldquo;</span>
              <p className="text-white/80 text-sm leading-relaxed mb-6 italic">"{q.text}"</p>
              <div className="pt-4 border-t border-white/10">
                <p className="font-sora font-bold text-sm text-white">{q.name}</p>
                <p className="text-xs text-primary-container font-semibold">{q.company}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default function CaseStudies() {
  const [activeId, setActiveId] = useState('')
  const isNavigating = useRef(false)
  const targetId = useRef(null)

  const handleTabClick = (studyId) => {
    setActiveId(studyId)
    isNavigating.current = true
    targetId.current = studyId

    const el = document.getElementById(`case-${studyId}`)
    if (el) {
      const STICKY_HEIGHT = 136 // main nav + industry nav
      const top = el.getBoundingClientRect().top + window.scrollY - STICKY_HEIGHT
      window.scrollTo({ top, behavior: 'smooth' })
    }

    // Fallback: re-enable scroll-spy after scroll completes
    setTimeout(() => {
      isNavigating.current = false
      targetId.current = null
    }, 1000)
  }

  useEffect(() => {
    // Scroll-spy: find the section whose top is at/just above the sticky nav
    const OFFSET = 150; // main nav (~80px) + quick nav (~52px) + buffer
    const onScroll = () => {
      let current = '';
      for (const study of caseStudies) {
        const el = document.getElementById(`case-${study.id}`);
        if (!el) continue;
        if (el.getBoundingClientRect().top <= OFFSET) {
          current = study.id;
        }
      }
      // While navigating to a target, stop scroll-spy from overriding the active tab.
      // Re-enable once the target section reaches the top.
      if (isNavigating.current) {
        if (current === targetId.current) {
          isNavigating.current = false
          targetId.current = null
        } else {
          return
        }
      }
      if (current) setActiveId(current);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll(); // set initial active on mount
    return () => window.removeEventListener('scroll', onScroll);
  }, [])

  return (
    <>
      <SEO
        title="Case Studies"
        path="/case-studies"
        description="500+ businesses transformed. Real IT deployments, real savings, real uptime. See how Usha Infotech solves enterprise IT challenges across India."
      />
      <PageHero
        label="Client Success Stories"
        title="500+ Businesses"
        accent="Transformed"
        subtitle="Real deployments. Real savings. Real uptime. See how Usha Infotech has solved enterprise IT challenges across India."
        badges={['Retail', 'Media', 'Manufacturing', 'Education', 'Networking']}
        bgImage="cust_real.png"
      />

      <MetricsBar />
      <IndustryNav activeId={activeId} onTabClick={handleTabClick} />

      {caseStudies.map((study, index) => (
        <CaseStudySplitSection key={study.id} study={study} index={index} />
      ))}

      <TestimonialsStrip />

      <CTASection
        title="Ready for reliable IT?"
        subtitle="Let's solve your business bottlenecks. Pan-India support. Zero downtime guaranteed."
      />
    </>
  )
}
