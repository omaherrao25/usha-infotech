import { motion } from 'framer-motion'
import { fadeLeft, fadeRight, fadeUp, viewportOnce } from '../animations/fadeUp'
import { staggerMed, staggerItem } from '../animations/stagger'

export default function ServiceSplitSection({ service, index }) {
  const isEven = index % 2 === 0

  const TextBlock = () => (
    <motion.div
      variants={isEven ? fadeLeft : fadeRight}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      className="flex flex-col justify-center"
    >
      <span className="text-sm font-bold text-primary-container mb-4 block uppercase tracking-widest">
        {service.tag}
      </span>

      <h2 className="text-4xl md:text-5xl font-sora font-bold tracking-tight mb-6 text-on-surface">
        {service.title}
      </h2>

      <p className="text-lg text-on-surface-variant mb-8 leading-relaxed">
        {service.fullDesc}
      </p>

      {/* Features */}
      <motion.ul
        variants={staggerMed}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="space-y-4 mb-10"
      >
        {service.features.map((feature) => (
          <motion.li
            key={feature}
            variants={staggerItem}
            className="flex items-center gap-3"
          >
            <span className="material-symbols-outlined text-primary text-xl">check_circle</span>
            <span className="font-medium text-on-surface">{feature}</span>
          </motion.li>
        ))}
      </motion.ul>

      {/* Who it's for */}
      <div className="flex flex-wrap gap-2 mb-8">
        {service.forWhom.map((tag) => (
          <span key={tag} className="tag-pill">{tag}</span>
        ))}
      </div>

      {/* CTAs */}
      <div className="flex flex-wrap gap-4">
        <a
          href="tel:+918087051208"
          className="btn-primary text-sm"
        >
          {service.ctaLabel}
          <span className="material-symbols-outlined text-sm">arrow_forward</span>
        </a>
        <a
          href="https://wa.me/918087051208"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-secondary text-sm"
        >
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
      <div className="relative">
        {/* Decorative circle */}
        <div className="absolute -top-8 -left-8 w-32 h-32 bg-primary/10 -z-10 rounded-full" />

        <div className="relative w-full aspect-video lg:aspect-square overflow-hidden rounded-xl shadow-ambient">
          {service.image ? (
            <img
              src={`/assets/${service.image}.png`}
              alt={`${service.title} — ${service.shortDesc}`}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          ) : (
            <div className="w-full h-full bg-surface-container-high flex items-center justify-center">
              <span className="text-[100px] opacity-40">{service.icon}</span>
            </div>
          )}
        </div>

        {/* Floating metric card */}
        <div className="absolute bottom-6 right-6 bg-surface-container-lowest p-6 rounded-lg shadow-card max-w-xs">
          <span className="text-xs font-bold uppercase tracking-widest text-outline block mb-2">Metrics</span>
          <p className="text-2xl font-sora font-bold text-primary">{service.badge1?.num}</p>
          <p className="text-sm text-on-surface-variant">{service.badge1?.label}</p>
        </div>
      </div>
    </motion.div>
  )

  return (
    <section
      id={service.id}
      className={`py-24 lg:py-32 ${isEven ? 'bg-surface-container-low' : 'bg-surface'}`}
    >
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className={`${isEven ? 'order-2 lg:order-1' : 'order-1'}`}>
            <ImageBlock />
          </div>
          <div className={`${isEven ? 'order-1 lg:order-2' : 'order-2'}`}>
            <TextBlock />
          </div>
        </div>
      </div>
    </section>
  )
}
