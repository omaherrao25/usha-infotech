import { motion } from 'framer-motion'
import { staggerItem } from '../animations/stagger'

const badgeStyles = {
  authorised: 'badge-refurbished',
  refurbished: 'badge-refurbished',
  new: 'badge-new',
  rental: 'badge-rental',
}

export default function ProductCard({ product }) {
  return (
    <motion.div
      variants={staggerItem}
      layout
      className="group"
    >
      {/* Image area — editorial style */}
      <div className="bg-surface-container-lowest aspect-[4/5] relative overflow-hidden mb-6 flex items-center justify-center p-12 transition-all duration-500 group-hover:bg-white">
        {/* Badge */}
        <span className="absolute top-6 left-6 z-10 tag-glass-primary">
          {product.badge?.label || 'New'}
        </span>

        {product.image ? (
          <img
            src={`/assets/${product.image}${product.image.includes('.') ? '' : '.png'}`}
            alt={`${product.title} — ${product.desc?.slice(0, 60)}`}
            className="w-full h-auto object-contain transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
          />
        ) : (
          <div className="group-hover:scale-110 transition-transform duration-300">
            <span className="material-symbols-outlined text-7xl text-primary/20">{product.icon}</span>
          </div>
        )}

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>

      {/* Text area */}
      <div className="flex flex-col gap-1">
        <div className="flex justify-between items-baseline gap-4">
          <h3 className="text-2xl md:text-3xl font-sora font-bold tracking-tighter text-on-surface">
            {product.title}
          </h3>
          <span className="text-lg md:text-2xl font-light text-primary tracking-tighter font-sora whitespace-nowrap">
            Contact
          </span>
        </div>

        <p className="text-outline text-sm uppercase tracking-wider font-semibold">
          {product.desc?.slice(0, 40) || product.tags?.join(' · ')}
        </p>

        {/* Hover CTA */}
        <div className="mt-4 flex gap-4 opacity-0 group-hover:opacity-100 transition-opacity">
          <a
            href="tel:+918087051208"
            className="text-primary text-sm font-bold uppercase tracking-widest flex items-center gap-2"
          >
            {product.ctaLabel || 'Enquire'}
            <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </a>
        </div>
      </div>
    </motion.div>
  )
}
