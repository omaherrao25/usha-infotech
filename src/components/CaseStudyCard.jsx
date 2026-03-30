import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { staggerItem } from '../animations/stagger'

const colorMap = {
  blue: {
    tag: 'bg-blue-50 text-blue-700 border-blue-100',
    metric: 'text-blue-600',
    icon: 'bg-blue-50',
    border: 'group-hover:border-blue-200',
  },
  teal: {
    tag: 'bg-teal-50 text-teal-700 border-teal-100',
    metric: 'text-teal-600',
    icon: 'bg-teal-50',
    border: 'group-hover:border-teal-200',
  },
}

export default function CaseStudyCard({ study, variant = 'default' }) {
  const c = colorMap[study.color] || colorMap.blue

  if (variant === 'preview') {
    return (
      <motion.div
        variants={staggerItem}
        className={`group bg-white rounded-2xl border border-slate-100 shadow-card hover:shadow-card-hover hover:-translate-y-1.5 transition-all duration-300 overflow-hidden ${c.border} border-2`}
      >
        {/* Icon header */}
        <div className={`${c.icon} px-6 pt-6 pb-4 flex items-center justify-between`}>
          <span className="text-4xl">{study.icon}</span>
          <span className={`text-xs font-bold px-3 py-1 rounded-full border ${c.tag} uppercase tracking-wide`}>
            {study.tag}
          </span>
        </div>

        <div className="px-6 pb-6">
          <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">
            {study.client}
          </p>
          <h3 className="font-display font-bold text-lg text-slate-900 mb-4 leading-tight">
            {study.title}
          </h3>

          {/* Metrics row */}
          <div className="grid grid-cols-2 gap-3 mb-5">
            {[study.metric1, study.metric2].map((m) => (
              <div key={m.label} className="bg-slate-50 rounded-xl px-3 py-3 border border-slate-100">
                <div className={`font-display font-black text-2xl ${c.metric}`}>{m.val}</div>
                <div className="text-xs text-slate-400 font-medium mt-0.5">{m.label}</div>
              </div>
            ))}
          </div>

          <Link
            to="/case-studies"
            className="flex items-center gap-1.5 text-sm font-semibold text-slate-500 group-hover:text-blue-600 transition-colors"
          >
            Read full story
            <svg className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </motion.div>
    )
  }

  // Full card used in case studies page grid
  return (
    <motion.div
      variants={staggerItem}
      className="group bg-white rounded-2xl border border-slate-100 shadow-card hover:shadow-card-hover transition-all duration-300 overflow-hidden"
    >
      <div className={`${c.icon} px-7 pt-7 pb-4 flex items-center justify-between`}>
        <span className="text-5xl">{study.icon}</span>
        <span className={`text-xs font-bold px-3 py-1.5 rounded-full border ${c.tag} uppercase tracking-wide`}>
          {study.tag}
        </span>
      </div>
      <div className="px-7 pb-7">
        <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">{study.client}</p>
        <h3 className="font-display font-bold text-xl text-slate-900 mb-2 leading-tight">{study.title}</h3>
        <p className="text-slate-500 text-sm leading-relaxed mb-5">{study.subtitle}</p>
        <div className="grid grid-cols-3 gap-3 mb-5">
          {study.metrics.map((m) => (
            <div key={m.label} className="bg-slate-50 rounded-xl px-3 py-3 border border-slate-100 text-center">
              <div className={`font-display font-black text-xl ${c.metric}`}>{m.val}</div>
              <div className="text-[11px] text-slate-400 font-medium mt-0.5">{m.label}</div>
            </div>
          ))}
        </div>
        <div className="flex flex-wrap gap-2 mb-5">
          {study.tags.map((tag) => (
            <span key={tag} className="tag-pill text-[11px] py-1 px-2.5">{tag}</span>
          ))}
        </div>
        <a
          href="tel:+918087051208"
          className="flex items-center gap-2 text-sm font-semibold text-slate-500 group-hover:text-blue-600 transition-colors"
        >
          {study.ctaLabel} →
        </a>
      </div>
    </motion.div>
  )
}
