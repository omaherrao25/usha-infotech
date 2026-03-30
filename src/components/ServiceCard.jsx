import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { Link } from 'react-router-dom'
import { staggerItem } from '../animations/stagger'

const colorMap = {
  blue: {
    icon: 'bg-blue-50 text-blue-600',
    badge: 'bg-blue-50 text-blue-700 border-blue-100',
    line: 'bg-blue-600',
    hover: 'group-hover:text-blue-600',
    arrow: 'group-hover:bg-blue-600',
  },
  teal: {
    icon: 'bg-teal-50 text-teal-600',
    badge: 'bg-teal-50 text-teal-700 border-teal-100',
    line: 'bg-teal-600',
    hover: 'group-hover:text-teal-600',
    arrow: 'group-hover:bg-teal-600',
  },
}

export default function ServiceCard({ service, index }) {
  const c = colorMap[service.color] || colorMap.blue

  // 3D Tilt Setup
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 })
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 })

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"])
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"])

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const width = rect.width
    const height = rect.height
    const mouseX = e.clientX - rect.left
    const mouseY = e.clientY - rect.top
    const xPct = mouseX / width - 0.5
    const yPct = mouseY / height - 0.5
    x.set(xPct)
    y.set(yPct)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <div className="relative z-0 hover:z-20 transition-all duration-500 group-hover/services:opacity-50 group-hover/services:blur-[3px] hover:!opacity-100 hover:!blur-none">
      <motion.div
        variants={staggerItem}
        whileHover={{ scale: 1.05 }}
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
          perspective: 1000
        }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="group relative bg-white rounded-2xl border border-slate-100 shadow-card hover:shadow-card-hover transition-shadow duration-300 cursor-pointer"
    >
      {/* Container with overflow-hidden for the accent line and border radius, but translated in Z to pop out slightly */}
      <div 
        style={{ transform: "translateZ(40px)" }} 
        className="w-full h-full relative z-10 p-6 lg:p-7 bg-white rounded-2xl overflow-hidden"
      >
        {/* Top accent line */}
        <div className={`absolute top-0 left-0 right-0 h-1 ${c.line} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

        {/* Icon + Tag row */}
        <div className="flex items-center justify-between mb-5">
          <div className={`w-12 h-12 rounded-xl ${c.icon} flex items-center justify-center text-2xl font-display font-bold transition-transform group-hover:scale-110 duration-300`}>
            {service.icon}
          </div>
          <span className={`text-xs font-bold px-3 py-1 rounded-full border ${c.badge} uppercase tracking-wide`}>
            {service.tag}
          </span>
        </div>

        {/* Title */}
        <h3 className={`font-display font-bold text-xl text-slate-900 mb-3 transition-colors duration-200 ${c.hover}`}>
          {service.title}
        </h3>

        {/* Description */}
        <p className="text-slate-500 text-sm leading-relaxed mb-5">
          {service.shortDesc}
        </p>

        {/* Feature preview */}
        <ul className="flex flex-col gap-2 mb-6">
          {service.features.slice(0, 3).map((f) => (
            <li key={f} className="flex items-start gap-2 text-sm text-slate-600">
              <span className="mt-0.5 w-4 h-4 rounded-full bg-green-50 text-green-600 flex items-center justify-center text-[10px] font-bold flex-shrink-0">✓</span>
              {f}
            </li>
          ))}
        </ul>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {service.forWhom.map((tag) => (
            <span key={tag} className="tag-pill text-[11px] py-1 px-2.5">
              {tag}
            </span>
          ))}
        </div>

        {/* Footer CTA */}
        <div className="flex items-center justify-between pt-4 border-t border-slate-50">
          <Link
            to="/services"
            className="text-sm font-semibold text-slate-500 group-hover:text-blue-600 transition-colors flex items-center gap-1"
          >
            Learn more
            <svg
              className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform duration-200"
              fill="none" stroke="currentColor" viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
          <a
            href="tel:+918087051208"
            className={`w-8 h-8 rounded-lg bg-slate-100 ${c.arrow} flex items-center justify-center text-slate-400 group-hover:text-white transition-all duration-300 text-xs font-bold`}
          >
            →
          </a>
        </div>
      </div>
    </motion.div>
    </div>
  )
}
