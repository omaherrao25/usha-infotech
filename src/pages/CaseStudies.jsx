import { motion } from 'framer-motion'
import PageHero from '../components/PageHero'
import CaseStudySplitSection from '../components/CaseStudySplitSection'
import CTASection from '../components/CTASection'
import { caseStudies } from '../data/caseStudies'
import { fadeUp, viewportOnce } from '../animations/fadeUp'
import { staggerFast, staggerMed, staggerItem } from '../animations/stagger'

// Top metrics bar
function MetricsBar() {
  const metrics = [
    { val: '500+', label: 'Businesses Transformed', icon: '🏢' },
    { val: '₹50Cr+', label: 'Capital Saved for Clients', icon: '💰' },
    { val: '99.9%', label: 'Uptime Guaranteed', icon: '⚡' },
    { val: '25 Yrs', label: 'Industry Experience', icon: '🏆' },
    { val: '40%', label: 'Avg Cost Reduction', icon: '📉' },
  ]

  return (
    <section className="py-12 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          variants={staggerFast}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4"
        >
          {metrics.map((m) => (
            <motion.div
              key={m.label}
              variants={staggerItem}
              className="flex flex-col items-center text-center p-5 bg-slate-50 rounded-2xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/30 transition-all group"
            >
              <span className="text-2xl mb-2 group-hover:scale-110 transition-transform">{m.icon}</span>
              <div className="font-display font-black text-2xl lg:text-3xl text-slate-900 mb-0.5">
                {m.val}
              </div>
              <div className="text-xs text-slate-400 font-medium leading-tight">{m.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

// Industry filter quick links
const industries = ['All', 'Retail', 'Media & Creative', 'Manufacturing', 'Education', 'Corporate']

function IndustryNav() {
  return (
    <div className="sticky top-16 z-40 bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 overflow-x-auto scrollbar-hide">
        <div className="flex gap-2 py-3 min-w-max">
          {caseStudies.map((s) => (
            <a
              key={s.id}
              href={`#case-${s.id}`}
              className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold text-slate-500 hover:text-blue-600 hover:bg-blue-50 transition-all whitespace-nowrap"
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

// Social proof strip
function TestimonialsStrip() {
  const quotes = [
    {
      text: "Usha Infotech set up our entire 80-seat office in just 4 days. Saved us ₹6 lakhs and months of headaches.",
      name: "Operations Head",
      company: "Pharma Company, Nashik",
      icon: "🏭",
    },
    {
      text: "Our media transfer times crashed by 70% after they overhauled our network. The team was professional and fast.",
      name: "Creative Director",
      company: "Fizzy Fox Studio",
      icon: "🎬",
    },
    {
      text: "We've been with them for 8 years. They handle our entire IT infrastructure without us lifting a finger.",
      name: "MD",
      company: "Logistics Group, Nashik",
      icon: "🚛",
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="text-center mb-12"
        >
          <span className="section-label">What Clients Say</span>
          <h2 className="font-display font-black text-3xl lg:text-4xl text-slate-900">
            Voices of Trust
          </h2>
        </motion.div>

        <motion.div
          variants={staggerMed}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {quotes.map((q, i) => (
            <motion.div
              key={i}
              variants={staggerItem}
              className="bg-white rounded-2xl border border-slate-100 shadow-card p-7 hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 group relative"
            >
              {/* Quote mark */}
              <div className="absolute top-5 right-7 font-display font-black text-6xl text-slate-100 leading-none group-hover:text-blue-100 transition-colors">
                "
              </div>

              <div className="text-3xl mb-4">{q.icon}</div>
              <p className="text-slate-700 text-sm leading-relaxed mb-6 relative z-10 italic">
                "{q.text}"
              </p>
              <div className="pt-4 border-t border-slate-100">
                <p className="font-display font-bold text-sm text-slate-900">{q.name}</p>
                <p className="text-xs text-blue-600 font-semibold">{q.company}</p>
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
      <PageHero
        label="Client Success Stories"
        title="500+ Businesses"
        accent="Transformed"
        subtitle="Real deployments. Real savings. Real uptime. See how Usha Infotech has solved enterprise IT challenges across India."
        badges={['🏪 Retail', '🎬 Media', '🏭 Manufacturing', '🎓 Education', '📡 Networking']}
      />

      <MetricsBar />
      <IndustryNav />

      {/* All case studies in alternating split layout */}
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
