import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { staggerItem } from '../animations/stagger'

export default function CaseStudyCard({ study, variant = 'default' }) {
  if (variant === 'preview') {
    return (
      <motion.div
        variants={staggerItem}
        className="group bg-surface-container-lowest p-8 rounded-2xl transition-all duration-300 hover:translate-y-[-4px] hover:shadow-card"
      >
        <div className="flex items-center gap-4 mb-4">
          {study.logo ? (
            <img src={study.logo} alt={study.client} className="h-10 max-w-[140px] object-contain" />
          ) : (
            <span className="material-symbols-outlined text-4xl text-primary">{study.icon}</span>
          )}
          <span className="tag-pill shrink-0 ml-auto">{study.tag}</span>
        </div>

        <p className="text-xs font-bold text-outline uppercase tracking-widest mb-1">{study.client}</p>
        <h3 className="font-sora font-bold text-lg text-on-surface mb-4 leading-tight">{study.title}</h3>

        {/* Metrics row */}
        <div className="grid grid-cols-2 gap-3 mb-5">
          {[study.metric1, study.metric2].map((m) => (
            <div key={m.label} className="bg-surface-container-low rounded-xl px-3 py-3">
              <div className="font-sora font-black text-2xl text-primary">{m.val}</div>
              <div className="text-xs text-outline font-medium mt-0.5">{m.label}</div>
            </div>
          ))}
        </div>

        <Link
          to="/case-studies"
          className="flex items-center gap-1.5 text-sm font-semibold text-outline group-hover:text-primary transition-colors"
        >
          Read full story
          <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">
            arrow_forward
          </span>
        </Link>
      </motion.div>
    )
  }

  return (
    <motion.div
      variants={staggerItem}
      className="group bg-surface-container-lowest p-8 rounded-2xl transition-all duration-300 hover:translate-y-[-4px] hover:shadow-card"
    >
      <div className="flex items-center gap-4 mb-6">
        {study.logo ? (
          <img src={study.logo} alt={study.client} className="h-12 max-w-[160px] object-contain" />
        ) : (
          <span className="text-5xl">{study.icon}</span>
        )}
        <span className="tag-pill shrink-0 ml-auto">{study.tag}</span>
      </div>

      <p className="text-xs font-bold text-outline uppercase tracking-widest mb-1">{study.client}</p>
      <h3 className="font-sora font-bold text-xl text-on-surface mb-2 leading-tight">{study.title}</h3>
      <p className="text-on-surface-variant text-sm leading-relaxed mb-5">{study.subtitle}</p>

      <div className="grid grid-cols-3 gap-3 mb-5">
        {study.metrics.map((m) => (
          <div key={m.label} className="bg-surface-container-low rounded-xl px-3 py-3 text-center">
            <div className="font-sora font-black text-xl text-primary">{m.val}</div>
            <div className="text-[11px] text-outline font-medium mt-0.5">{m.label}</div>
          </div>
        ))}
      </div>

      <div className="flex flex-wrap gap-2 mb-5">
        {study.tags.map((tag) => (
          <span key={tag} className="tag-pill">{tag}</span>
        ))}
      </div>

      <a
        href="tel:+918087051208"
        className="flex items-center gap-2 text-sm font-semibold text-outline group-hover:text-primary transition-colors"
      >
        {study.ctaLabel}
        <span className="material-symbols-outlined text-sm">arrow_forward</span>
      </a>
    </motion.div>
  )
}
