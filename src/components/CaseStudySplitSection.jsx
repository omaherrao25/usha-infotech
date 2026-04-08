import { motion } from 'framer-motion'
import { fadeLeft, fadeRight, viewportOnce } from '../animations/fadeUp'
import { staggerMed, staggerItem } from '../animations/stagger'

export default function CaseStudySplitSection({ study, index }) {
  const isEven = index % 2 === 0

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
        <span className="tag-pill">{study.industry}</span>
        <span className="text-outline">&middot;</span>
        <span className="text-xs font-semibold uppercase tracking-widest text-outline">
          {study.tag}
        </span>
      </div>

      {/* Client */}
      <div className="flex items-center gap-4 mb-3">
        {study.logo && (
          <img src={study.logo} alt={study.client} className="h-10 max-w-[140px] object-contain" />
        )}
        <p className="font-sora font-black text-sm tracking-widest uppercase text-outline">
          {study.client}
        </p>
      </div>

      {/* Title */}
      <h2 className="text-3xl lg:text-4xl xl:text-5xl font-sora font-bold tracking-tight leading-tight mb-4 text-on-surface">
        {study.title}
      </h2>

      <p className="text-base leading-relaxed mb-8 text-on-surface-variant">
        {study.desc}
      </p>

      {/* Challenge / Solution / ROI */}
      <motion.div
        variants={staggerMed}
        className="flex flex-col gap-4 mb-8"
      >
        {[
          { label: 'Challenge', text: study.challenge, icon: 'warning' },
          { label: 'Solution', text: study.solution, icon: 'build' },
          { label: 'ROI', text: study.roi, icon: 'trending_up' },
        ].map((item) => (
          <motion.div
            key={item.label}
            variants={staggerItem}
            className="p-5 rounded-xl bg-white shadow-card border-l-[3px] border-l-primary/40 border border-surface-container-high"
          >
            <div className="flex items-center gap-2 mb-2">
              <span className="material-symbols-outlined text-lg text-primary">{item.icon}</span>
              <p className="text-xs font-bold uppercase tracking-widest text-outline">{item.label}</p>
            </div>
            <p className="text-sm leading-relaxed text-on-surface">{item.text}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-8">
        {study.tags.map((tag) => (
          <span key={tag} className="tag-pill">{tag}</span>
        ))}
      </div>

      {/* CTA */}
      <a
        href="tel:+919850751208"
        className="btn-primary w-fit text-sm"
      >
        {study.ctaLabel}
        <span className="material-symbols-outlined text-sm">arrow_forward</span>
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
      {/* Image */}
      <div className="relative rounded-xl overflow-hidden w-full aspect-video lg:aspect-square shadow-ambient">
        {study.image ? (
          <img
            src={`/assets/${study.image}.png`}
            alt={`${study.client} — ${study.title}`}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full bg-surface-container-high flex items-center justify-center">
            <span className="material-symbols-outlined text-[120px] text-primary/10">{study.icon}</span>
          </div>
        )}

        {/* Floating badges */}
        <div className="stat-float-badge top-4 left-4 backdrop-blur-sm shadow-card bg-white/95">
          <span className="font-sora font-black text-lg text-primary">{study.badges[0].num}</span>
          <span className="text-[11px] font-bold text-outline">{study.badges[0].label}</span>
        </div>
        <div className="stat-float-badge bottom-4 right-4 backdrop-blur-sm shadow-card bg-white/95">
          <span className="font-sora font-black text-lg text-primary">{study.badges[1].num}</span>
          <span className="text-[11px] font-bold text-outline">{study.badges[1].label}</span>
        </div>
      </div>

      {/* Quote */}
      <div className="mt-5 text-center px-4">
        <p className="text-sm font-medium italic text-on-surface-variant">"{study.outcome}"</p>
      </div>

      {/* Metrics bar */}
      <div className="mt-4 grid grid-cols-3 gap-3">
        {study.metrics.map((m) => (
          <div
            key={m.label}
            className="rounded-xl p-4 text-center shadow-card bg-white border border-surface-container-high"
          >
            <div className="font-sora font-black text-2xl mb-0.5 text-primary">{m.val}</div>
            <div className="text-[11px] font-semibold uppercase tracking-wide text-outline">{m.label}</div>
          </div>
        ))}
      </div>
    </motion.div>
  )

  return (
    <section
      id={`case-${study.id}`}
      className={`py-24 lg:py-32 scroll-mt-36 transition-colors duration-500 overflow-hidden ${
        isEven ? 'bg-[#eef6f9]' : 'bg-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          <div className={`${isEven ? 'order-1' : 'order-1 lg:order-2'}`}>
            <VisualBlock />
          </div>
          <div className={`${isEven ? 'order-2' : 'order-2 lg:order-1'}`}>
            <TextBlock />
          </div>
        </div>
      </div>
    </section>
  )
}
