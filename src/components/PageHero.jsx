import { motion } from 'framer-motion'
import { fadeUp } from '../animations/fadeUp'

export default function PageHero({ label, title, accent, subtitle, subtitleLine2, badges = [], bgImage, invertImage }) {
  return (
    <section
      className="relative pt-36 pb-28 overflow-hidden min-h-[560px] flex items-center"
      aria-label={`${title} ${accent || ''}`}
    >
      {/* Plain surface strip behind the navbar (top-0 to top-20) */}
      <div className="absolute inset-x-0 top-0 h-20 bg-surface" aria-hidden="true" />

      {/* Background image — starts below navbar */}
      {bgImage && (
        <div className="absolute inset-x-0 top-20 bottom-0" aria-hidden="true">
          <img
            src={`/assets/${bgImage}`}
            alt=""
            className={`w-full h-full object-cover object-center${invertImage ? ' scale-x-[-1]' : ''}`}
          />
        </div>
      )}

      {/* Gradient overlay */}
      {bgImage && (
        <div
          className="absolute inset-x-0 top-20 bottom-0"
          aria-hidden="true"
          style={{
            background: 'linear-gradient(105deg, rgba(11,25,35,0.92) 0%, rgba(11,25,35,0.82) 40%, rgba(11,25,35,0.55) 70%, rgba(11,25,35,0.25) 100%)',
          }}
        />
      )}
      {/* Brand tint */}
      {bgImage && (
        <div
          className="absolute inset-x-0 top-20 bottom-0"
          aria-hidden="true"
          style={{ background: 'linear-gradient(180deg, rgba(26,107,138,0.18) 0%, transparent 60%)' }}
        />
      )}

      {/* Fallback plain background when no image */}
      {!bgImage && (
        <div className="absolute inset-0 bg-surface-container-low" aria-hidden="true" />
      )}

      <div className="relative max-w-7xl mx-auto px-8 w-full">
        <motion.div variants={fadeUp} initial="hidden" animate="visible" className="max-w-3xl">
          {label && (
            <span
              className={`section-label mb-6 block ${bgImage ? 'text-primary-fixed-dim' : ''}`}
            >
              {label}
            </span>
          )}

          <h1
            className={`font-sora font-extrabold text-5xl sm:text-6xl lg:text-7xl tracking-tighter leading-[0.9] mb-7 ${
              bgImage ? 'text-white' : 'text-on-surface'
            }`}
          >
            {title}
            {accent && (
              <>
                <br />
                <span className={bgImage ? 'text-primary-fixed-dim' : 'text-primary-container'}>
                  {accent}
                </span>
              </>
            )}
          </h1>

          {subtitle && (
            <p
              className={`text-lg max-w-2xl font-light leading-relaxed mb-8 ${
                bgImage ? 'text-white/75' : 'text-on-surface-variant'
              }`}
            >
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
                  className={`text-xs py-2 px-4 rounded-full font-bold uppercase tracking-widest transition-all ${
                    bgImage
                      ? 'border border-white/25 text-white/80 bg-white/10 backdrop-blur-sm'
                      : 'tag-pill'
                  }`}
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
