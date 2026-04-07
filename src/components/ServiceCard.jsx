import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { staggerItem } from '../animations/stagger'

export default function ServiceCard({ service, index }) {
  return (
    <motion.div
      variants={staggerItem}
      className="group relative bg-surface-container-lowest p-10 md:p-12 rounded-2xl transition-all duration-300 hover:translate-y-[-8px]"
    >
      {/* Number + Icon row */}
      <div className="flex justify-between items-start mb-10">
        <div className="w-16 h-16 bg-primary/5 rounded-xl flex items-center justify-center">
          <span className="text-3xl">{service.icon}</span>
        </div>
        <span className="text-4xl font-sora font-black text-outline/10">
          {String(index + 1).padStart(2, '0')}
        </span>
      </div>

      {/* Title */}
      <h3 className="text-2xl md:text-3xl font-sora font-bold mb-6 text-on-surface">
        {service.title}
      </h3>

      {/* Description */}
      <p className="text-on-surface-variant leading-relaxed mb-8">
        {service.shortDesc}
      </p>

      {/* Feature preview */}
      <ul className="flex flex-col gap-3 mb-8">
        {service.features.slice(0, 3).map((f) => (
          <li key={f} className="flex items-center gap-3 text-sm">
            <div className="w-1 h-1 rounded-full bg-primary/40 shrink-0" />
            <span className="font-medium text-on-surface">{f}</span>
          </li>
        ))}
      </ul>

      {/* CTA link */}
      <Link
        to="/services"
        className="text-sm font-bold tracking-widest uppercase text-primary-container border-b-2 border-primary-container/20 pb-1 hover:border-primary-container transition-colors"
      >
        Learn More
      </Link>
    </motion.div>
  )
}
