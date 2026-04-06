import { motion } from 'framer-motion'
import { fadeUp } from '../animations/fadeUp'

export default function PageHero({ label, title, accent, subtitle, subtitleLine2, badges = [] }) {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden" aria-label={`${title} ${accent || ''}`}>
      {/* Subtle surface tonal background */}
      <div className="absolute inset-0 bg-surface-container-low" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-8">
        <motion.div variants={fadeUp} initial="hidden" animate="visible">
          {label && (
            <span className="section-label mb-6 block">{label}</span>
          )}

          <h1 className="font-sora font-extrabold text-5xl sm:text-6xl lg:text-8xl tracking-tighter text-on-surface leading-[0.9] mb-8">
            {title}
            {accent && (
              <>
                <br />
                <span className="text-primary-container">{accent}</span>
              </>
            )}
          </h1>

          {subtitle && (
            <p className="text-xl text-on-surface-variant max-w-2xl font-light leading-relaxed mb-8">
              {subtitle}
              {subtitleLine2 && <><br />{subtitleLine2}</>}
            </p>
          )}

          {badges.length > 0 && (
            <div className="flex flex-wrap gap-3" role="list" aria-label="Feature badges">
              {badges.map((badge) => (
                <span
                  key={badge}
                  role="listitem"
                  className="tag-pill text-xs py-2 px-4"
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
