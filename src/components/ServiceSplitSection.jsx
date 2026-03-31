import { motion } from 'framer-motion'
import { fadeLeft, fadeRight, fadeUp, viewportOnce } from '../animations/fadeUp'
import { staggerMed, staggerItem } from '../animations/stagger'

const colorMap = {
  blue: {
    badge: 'bg-blue-50 text-blue-700 border-blue-100',
    check: 'bg-blue-50 text-blue-600',
    tag: 'bg-blue-50 text-blue-700 border-blue-100',
    btn: 'bg-blue-600 hover:bg-blue-700 text-white',
    accent: 'border-blue-200 bg-blue-50/50',
    stat: 'text-blue-600',
    pill: 'bg-blue-600',
    imgBg: 'from-blue-50 to-slate-50',
  },
  teal: {
    badge: 'bg-teal-50 text-teal-700 border-teal-100',
    check: 'bg-teal-50 text-teal-600',
    tag: 'bg-teal-50 text-teal-700 border-teal-100',
    btn: 'bg-teal-600 hover:bg-teal-700 text-white',
    accent: 'border-teal-200 bg-teal-50/50',
    stat: 'text-teal-600',
    pill: 'bg-teal-600',
    imgBg: 'from-teal-50 to-slate-50',
  },
}

const ICONS = {
  infrastructure: '🏢',
  hardware: '💻',
  security: '📷',
  networking: '🌐',
  rentals: '🔄',
  b2b: '🤝',
}

export default function ServiceSplitSection({ service, index }) {
  const isEven = index % 2 === 0
  const c = colorMap[service.color] || colorMap.blue

  const TextBlock = () => (
    <motion.div
      variants={isEven ? fadeLeft : fadeRight}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      className="flex flex-col justify-center"
    >
      {/* Tag badge */}
      <span className={`inline-flex items-center gap-2 text-xs font-bold px-4 py-2 rounded-full border ${c.badge} uppercase tracking-widest mb-5 w-fit`}>
        {service.tag}
      </span>

      {/* Title */}
      <h2 className="font-display font-black text-3xl lg:text-4xl xl:text-5xl text-slate-900 leading-tight mb-4">
        {service.title}
      </h2>

      <p className="text-slate-500 text-base lg:text-lg leading-relaxed mb-8">
        {service.fullDesc}
      </p>

      {/* Features */}
      <motion.ul
        variants={staggerMed}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="flex flex-col mb-8"
      >
        {service.features.map((feature) => (
          <motion.li
            key={feature}
            variants={staggerItem}
            className="flex items-start gap-3 py-3 border-b border-slate-100 last:border-b-0"
          >
            <span className={`mt-0.5 w-5 h-5 rounded-full ${c.check} flex items-center justify-center text-[11px] font-bold flex-shrink-0`}>
              ✓
            </span>
            <span className="text-slate-700 text-sm leading-relaxed" dangerouslySetInnerHTML={{ __html: feature }} />
          </motion.li>
        ))}
      </motion.ul>

      {/* Who it's for */}
      <div className="flex flex-wrap gap-2 mb-8">
        {service.forWhom.map((tag) => (
          <span key={tag} className={`text-xs font-semibold px-3 py-1.5 rounded-full border ${c.tag}`}>
            {tag}
          </span>
        ))}
      </div>

      {/* CTAs */}
      <div className="flex flex-wrap gap-4">
        <a
          href="tel:+918087051208"
          className={`inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm transition-all duration-200 shadow-sm hover:-translate-y-0.5 ${c.btn}`}
        >
          {service.ctaLabel} →
        </a>
        <a
          href="https://wa.me/918087051208"
          className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm border border-slate-200 text-slate-700 hover:border-slate-400 transition-all duration-200 bg-white hover:-translate-y-0.5"
        >
          <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
          WhatsApp
        </a>
      </div>
    </motion.div>
  )

  const ImageBlock = () => (
    <motion.div
      variants={isEven ? fadeRight : fadeLeft}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      className="relative"
    >
      {/* Main image card */}
      <div className={`relative rounded-xl bg-slate-100 border border-slate-200 shadow-card w-full h-[220px] lg:h-[250px] overflow-hidden flex items-center justify-center`}>
        {service.image ? (
          <img 
            src={`/assets/${service.image}.png`} 
            alt={service.title} 
            className="w-full h-full object-cover rounded-xl" 
          />
        ) : (
          <div className="text-[120px] opacity-80 animate-float select-none">
            {ICONS[service.id] || service.icon}
          </div>
        )}

        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-xl" />

        {/* Stat badges */}
        <div className="stat-float-badge top-4 left-4">
          <span className={`font-display font-black text-xl ${c.stat}`}>
            {service.badge1.num}
          </span>
          <span className="text-xs text-slate-400 font-medium">
            {service.badge1.label}
          </span>
        </div>
        <div className="stat-float-badge bottom-4 right-4">
          <span className={`font-display font-black text-xl ${c.stat}`}>
            {service.badge2.num}
          </span>
          <span className="text-xs text-slate-400 font-medium">
            {service.badge2.label}
          </span>
        </div>
      </div>

      {/* Case study card */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={viewportOnce}
        transition={{ delay: 0.3, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`mt-4 rounded-2xl border p-5 ${c.accent}`}
      >
        <div className={`inline-flex items-center gap-2 text-xs font-bold px-3 py-1.5 rounded-full text-white mb-3 ${c.pill}`}>
          {service.caseStudy.pill}
        </div>
        <p className="text-slate-700 text-sm leading-relaxed mb-4">
          {service.caseStudy.text}
        </p>
        {service.caseStudy.stats && (
          <div className="grid grid-cols-3 gap-3">
            {service.caseStudy.stats.map((stat) => (
              <div key={stat.label} className="bg-white rounded-xl p-3 border border-slate-100 text-center shadow-sm">
                <div className={`font-display font-black text-lg ${c.stat}`}>{stat.val}</div>
                <div className="text-[11px] text-slate-400 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        )}
      </motion.div>
    </motion.div>
  )

  return (
    <section
      id={service.id}
      className={`py-20 lg:py-28 ${index % 2 !== 0 ? 'bg-slate-50/60' : 'bg-white'}`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className={`order-1 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
            <ImageBlock />
          </div>
          <div className={`order-2 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
            <TextBlock />
          </div>
        </div>
      </div>
    </section>
  )
}
