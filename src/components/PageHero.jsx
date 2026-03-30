import { motion } from 'framer-motion'
import { fadeUp } from '../animations/fadeUp'

export default function PageHero({ label, title, accent, subtitle, badges = [] }) {
  return (
    <section className="relative pt-32 pb-16 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/30 to-teal-50/20" />
      <div className="absolute inset-0 grid-bg opacity-50" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-teal-200/15 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <motion.div variants={fadeUp} initial="hidden" animate="visible">
          {label && (
            <div className="inline-flex items-center gap-2 bg-white border border-blue-100 rounded-full px-5 py-2 mb-8 shadow-sm">
              <span className="text-xs font-bold tracking-widest uppercase text-blue-600">{label}</span>
            </div>
          )}

          <h1 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-slate-900 leading-tight mb-6">
            {title}{' '}
            {accent && <span className="gradient-text italic">{accent}</span>}
          </h1>

          {subtitle && (
            <p className="text-lg text-slate-500 leading-relaxed max-w-2xl mx-auto mb-8">
              {subtitle}
            </p>
          )}

          {badges.length > 0 && (
            <div className="flex flex-wrap gap-3 justify-center">
              {badges.map((badge) => (
                <span
                  key={badge}
                  className="inline-flex items-center gap-2 bg-white border border-slate-200 rounded-full px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm"
                >
                  {badge}
                </span>
              ))}
            </div>
          )}
        </motion.div>
      </div>
    </section>
  )
}
