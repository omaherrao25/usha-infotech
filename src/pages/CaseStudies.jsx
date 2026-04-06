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
              <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center mb-3">
                <span className="material-symbols-outlined text-primary-container text-2xl">{m.icon}</span>
              </div>
              <div className="font-sora font-black text-2xl lg:text-3xl text-white mb-0.5">{m.val}</div>
              <div className="text-xs text-outline font-medium leading-tight">{m.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

function IndustryNav() {
  return (
    <div className="sticky top-20 z-40 bg-surface/70 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-8 overflow-x-auto scrollbar-hide">
        <div className="flex gap-2 py-3 min-w-max">
          {caseStudies.map((s) => (
            <a
              key={s.id}
              href={`#case-${s.id}`}
              className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold text-on-surface-variant hover:text-primary hover:bg-primary/5 transition-all whitespace-nowrap font-sora"
            >
              <span>{s.icon}</span>
              {s.client}
            </a>
          ))}
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
          <span className="section-label text-primary-container mb-8 block">What Clients Say</span>
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
              <span className="material-symbols-outlined text-primary-container text-3xl mb-4 block">format_quote</span>
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
      />

      <MetricsBar />
      <IndustryNav />

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
