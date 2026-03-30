import { motion } from 'framer-motion'
import { staggerItem } from '../animations/stagger'

const badgeStyles = {
  authorised: 'badge-authorised',
  refurbished: 'badge-refurbished',
  new: 'badge-new-tech',
  rental: 'badge-rental',
}

export default function ProductCard({ product }) {
  return (
    <motion.div
      variants={staggerItem}
      layout
      className="group bg-white rounded-2xl border border-slate-100 shadow-card hover:shadow-card-hover hover:-translate-y-1.5 transition-all duration-350 overflow-hidden"
    >
      {/* Image placeholder / Icon header */}
      <div className="relative bg-gradient-to-br from-slate-50 to-blue-50/50 px-6 pt-8 pb-6 flex flex-col items-center border-b border-slate-100">
        <div className="text-6xl mb-2 group-hover:scale-110 transition-transform duration-300">
          {product.icon}
        </div>
        <div className={`badge-pill ${badgeStyles[product.badge.type] || 'badge-new-tech'}`}>
          {product.badge.label}
        </div>

        {/* Floating mini-badges */}
        {product.badge1 && (
          <div className="absolute top-4 right-4 bg-white rounded-xl shadow-md px-3 py-2 border border-slate-100 text-center">
            <div className="font-display font-black text-sm text-slate-900 leading-tight">
              {product.badge1.num}
            </div>
            <div className="text-[10px] text-slate-400 font-medium leading-tight">
              {product.badge1.label}
            </div>
          </div>
        )}
      </div>

      <div className="p-6">
        {/* Title */}
        <h3 className="font-display font-bold text-lg text-slate-900 mb-2 leading-tight group-hover:text-blue-700 transition-colors">
          {product.title}
        </h3>
        <p className="text-slate-500 text-sm leading-relaxed mb-4">
          {product.desc}
        </p>

        {/* Specs Grid (if available) */}
        {product.specs && product.specs.length > 0 && (
          <div className="grid grid-cols-2 gap-2 mb-4">
            {product.specs.map((spec) => (
              <div key={spec.label} className="spec-item">
                <div className="spec-label">{spec.label}</div>
                <div className="spec-value">{spec.value}</div>
              </div>
            ))}
          </div>
        )}

        {/* Feature list (if no specs) */}
        {!product.specs && product.features && (
          <ul className="flex flex-col gap-2 mb-4">
            {product.features.slice(0, 3).map((f) => (
              <li key={f} className="flex items-start gap-2 text-sm text-slate-600">
                <span className="mt-0.5 w-4 h-4 rounded-full bg-green-50 text-green-600 flex items-center justify-center text-[10px] font-bold flex-shrink-0">✓</span>
                <span className="line-clamp-2">{f}</span>
              </li>
            ))}
          </ul>
        )}

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {product.tags.slice(0, 3).map((tag) => (
            <span key={tag} className="tag-pill text-[11px] py-0.5 px-2">
              {tag}
            </span>
          ))}
        </div>

        {/* Price row */}
        <div className="flex items-baseline gap-3 mb-5 pb-5 border-b border-slate-100">
          <span className="font-display font-black text-2xl gradient-text">
            {product.price}
          </span>
          <span className="text-xs text-slate-400 font-medium">{product.priceNote}</span>
        </div>

        {/* Best for */}
        {product.bestFor && (
          <div className="bg-slate-50 rounded-xl p-3 mb-5 border border-slate-100">
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">⚡ Best For</p>
            <p className="text-xs text-slate-600 leading-relaxed">{product.bestFor}</p>
          </div>
        )}

        {/* CTA */}
        <a
          href="tel:+918087051208"
          className="btn-primary w-full justify-center text-sm py-3"
        >
          {product.ctaLabel} →
        </a>
      </div>
    </motion.div>
  )
}
