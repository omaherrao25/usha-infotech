import { motion } from 'framer-motion'
import { fadeLeft, fadeRight, viewportOnce } from '../animations/fadeUp'
import { staggerMed, staggerItem } from '../animations/stagger'

const colorMap = {
  blue: {
    tag: 'bg-blue-50 text-blue-700 border-blue-100',
    metric: 'text-blue-600',
    check: 'bg-blue-50 text-blue-600',
    pill: 'bg-blue-600 text-white',
    accent: 'border-blue-100 bg-blue-50/40',
    btn: 'bg-slate-900 hover:bg-blue-600 text-white',
    imgBg: 'from-blue-50 via-slate-50 to-blue-100/50',
    num: 'text-blue-600',
  },
  teal: {
    tag: 'bg-teal-50 text-teal-700 border-teal-100',
    metric: 'text-teal-600',
    check: 'bg-teal-50 text-teal-600',
    pill: 'bg-teal-600 text-white',
    accent: 'border-teal-100 bg-teal-50/40',
    btn: 'bg-slate-900 hover:bg-teal-600 text-white',
    imgBg: 'from-teal-50 via-slate-50 to-teal-100/50',
    num: 'text-teal-600',
  },
}

export default function CaseStudySplitSection({ study, index }) {
  const isEven = index % 2 === 0
  const c = colorMap[study.color] || colorMap.blue

  const TextBlock = () => (
    <motion.div
      variants={isEven ? fadeLeft : fadeRight}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      className="flex flex-col justify-center"
    >
      {/* Industry + tag */}
      <div className="flex items-center gap-3 mb-5">
        <span className={`text-xs font-bold px-3 py-1.5 rounded-full border ${c.tag} uppercase tracking-widest`}>
          {study.industry}
        </span>
        <span className="text-slate-300">·</span>
        <span className="text-xs font-semibold text-slate-400 uppercase tracking-widest">
          {study.tag}
        </span>
      </div>

      {/* Client name + Logo */}
      <div className="flex items-center gap-4 mb-3">
        {study.logo && (
          <img src={study.logo} alt={study.client} className="h-8 max-w-[120px] object-contain" />
        )}
        <p className="font-display font-black text-sm tracking-widest uppercase text-slate-400">
          {study.client}
        </p>
      </div>

      {/* Title */}
      <h2 className="font-display font-black text-3xl lg:text-4xl xl:text-[2.6rem] text-slate-900 leading-tight mb-4">
        {study.title}
      </h2>

      <p className="text-slate-500 text-base leading-relaxed mb-8">
        {study.desc}
      </p>

      {/* C-S-R breakdown */}
      <motion.div
        variants={staggerMed}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="flex flex-col gap-4 mb-8"
      >
        {[
          { label: '⚠️ Challenge', text: study.challenge, color: 'border-l-amber-400' },
          { label: '🛠️ Solution', text: study.solution, color: 'border-l-blue-400' },
          { label: '📈 ROI', text: study.roi, color: 'border-l-green-400' },
        ].map((item) => (
          <motion.div
            key={item.label}
            variants={staggerItem}
            className={`border-l-4 ${item.color} pl-4 py-1`}
          >
            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">
              {item.label}
            </p>
            <p className="text-slate-700 text-sm leading-relaxed">{item.text}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-8">
        {study.tags.map((tag) => (
          <span key={tag} className="tag-pill text-xs">{tag}</span>
        ))}
      </div>

      {/* CTA */}
      <a
        href="tel:+918087051208"
        className={`inline-flex items-center gap-2 w-fit px-6 py-3.5 rounded-xl font-semibold text-sm transition-all duration-200 hover:-translate-y-0.5 shadow-sm ${c.btn}`}
      >
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/>
        </svg>
        {study.ctaLabel}
      </a>
    </motion.div>
  )

  const VisualBlock = () => (
    <motion.div
      variants={isEven ? fadeRight : fadeLeft}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      className="relative"
    >
      {/* Big image card */}
      <div className={`relative rounded-xl bg-slate-100 border border-slate-200 overflow-hidden w-full h-[220px] lg:h-[250px] shadow-card flex items-center justify-center`}>
        {study.image ? (
          <img
            src={`/assets/${study.image}.png`}
            alt={`${study.client} — ${study.title}`}
            className="absolute inset-0 w-full h-full object-cover"
            loading="lazy"
          />
        ) : (
          <div className="text-[100px] animate-float select-none overflow-hidden relative z-10">
            {study.icon}
          </div>
        )}

        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-tr from-black/40 via-transparent to-transparent pointer-events-none" />

        {/* Floating badges */}
        <div className="stat-float-badge top-4 left-4 bg-white/95 backdrop-blur-sm border-0 shadow-lg z-10">
          <span className={`font-display font-black text-lg ${c.num}`}>{study.badges[0].num}</span>
          <span className="text-[11px] text-slate-500 font-bold">{study.badges[0].label}</span>
        </div>
        <div className="stat-float-badge bottom-4 right-4 bg-white/95 backdrop-blur-sm border-0 shadow-lg z-10">
          <span className={`font-display font-black text-lg ${c.num}`}>{study.badges[1].num}</span>
          <span className="text-[11px] text-slate-500 font-bold">{study.badges[1].label}</span>
        </div>
      </div>

      {/* Quote */}
      <div className="mt-5 text-center px-4">
        <p className="text-slate-600 text-sm font-medium italic">"{study.outcome}"</p>
      </div>

      {/* Metrics bar */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={viewportOnce}
        transition={{ delay: 0.3, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="mt-4 grid grid-cols-3 gap-3"
      >
        {study.metrics.map((m) => (
          <div
            key={m.label}
            className="bg-white rounded-2xl border border-slate-100 shadow-sm p-4 text-center hover:shadow-card transition-shadow"
          >
            <div className={`font-display font-black text-2xl ${c.metric} mb-0.5`}>
              {m.val}
            </div>
            <div className="text-[11px] text-slate-400 font-semibold uppercase tracking-wide">
              {m.label}
            </div>
          </div>
        ))}
      </motion.div>
    </motion.div>
  )

  return (
    <section
      id={`case-${study.id}`}
      className={`py-20 lg:py-28 ${index % 2 !== 0 ? 'bg-slate-50/60' : 'bg-white'}`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className={`order-1 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
            <VisualBlock />
          </div>
          <div className={`order-2 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
            <TextBlock />
          </div>
        </div>
      </div>
    </section>
  )
}
