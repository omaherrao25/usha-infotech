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
        <span className="text-xs font-semibold text-outline uppercase tracking-widest">
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
      <h2 className="text-3xl lg:text-4xl xl:text-5xl font-sora font-bold tracking-tight text-on-surface leading-tight mb-4">
        {study.title}
      </h2>

      <p className="text-on-surface-variant text-base leading-relaxed mb-8">
        {study.desc}
      </p>

      {/* Challenge / Solution / ROI */}
      <motion.div
        variants={staggerMed}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
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
            className="bg-surface-container-lowest p-5 rounded-xl"
          >
            <div className="flex items-center gap-2 mb-2">
              <span className="material-symbols-outlined text-primary text-lg">{item.icon}</span>
              <p className="text-xs font-bold text-outline uppercase tracking-widest">{item.label}</p>
            </div>
            <p className="text-on-surface text-sm leading-relaxed">{item.text}</p>
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
        href="tel:+918087051208"
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
            <span className="text-[100px] opacity-40">{study.icon}</span>
          </div>
        )}

        {/* Floating badges */}
        <div className="stat-float-badge top-4 left-4 bg-white/95 backdrop-blur-sm shadow-card">
          <span className="font-sora font-black text-lg text-primary">{study.badges[0].num}</span>
          <span className="text-[11px] text-outline font-bold">{study.badges[0].label}</span>
        </div>
        <div className="stat-float-badge bottom-4 right-4 bg-white/95 backdrop-blur-sm shadow-card">
          <span className="font-sora font-black text-lg text-primary">{study.badges[1].num}</span>
          <span className="text-[11px] text-outline font-bold">{study.badges[1].label}</span>
        </div>
      </div>

      {/* Quote */}
      <div className="mt-5 text-center px-4">
        <p className="text-on-surface-variant text-sm font-medium italic">"{study.outcome}"</p>
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
            className="bg-surface-container-lowest rounded-xl p-4 text-center shadow-card"
          >
            <div className="font-sora font-black text-2xl text-primary mb-0.5">{m.val}</div>
            <div className="text-[11px] text-outline font-semibold uppercase tracking-wide">{m.label}</div>
          </div>
        ))}
      </motion.div>
    </motion.div>
  )

  return (
    <section
      id={`case-${study.id}`}
      className={`py-24 lg:py-32 ${isEven ? 'bg-surface-container-low' : 'bg-surface'}`}
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
