import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import PageHero from '../components/PageHero'
import ProductCard from '../components/ProductCard'
import CTASection from '../components/CTASection'
import { products, productCategories } from '../data/products'
import { accessorySubcategories } from '../data/accessories'
import { fadeUp, viewportOnce } from '../animations/fadeUp'
import { staggerFast, staggerItem } from '../animations/stagger'

// Category label dividers
const categoryMeta = {
  laptops: { label: 'Laptops & Desktops', icon: '💻', desc: 'Authorised Dell, HP & Lenovo — enterprise grade' },
  networking: { label: 'Networking Equipment', icon: '🌐', desc: 'Cisco, Fortinet, TP-Link — complete enterprise stacks' },
  cctv: { label: 'Security Systems', icon: '📷', desc: 'Hikvision, Dahua, CP-Plus — 4K to industrial grade' },
  refurbished: { label: 'Grade-A Refurbished Systems', icon: '♻️', desc: '60% savings · 3-month warranty · bulk ready' },
  accessories: { label: 'Accessories & Peripherals', icon: '🔌', desc: 'UPS, cabling, monitors, racks — everything else' },
}

function CategorySection({ category, items, isVisible, metaOverrides }) {
  if (!isVisible || items.length === 0) return null
  const meta = metaOverrides || categoryMeta[category]

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="mb-16"
    >
      {/* Category header */}
      <div className="flex items-center gap-5 mb-8">
        <div className="text-3xl">{meta?.icon}</div>
        <div>
          <h3 className="font-display font-bold text-xl text-slate-900">{meta?.label}</h3>
          <p className="text-sm text-slate-400">{meta?.desc}</p>
        </div>
        <div className="flex-1 h-px bg-gradient-to-r from-slate-200 to-transparent ml-4" />
      </div>

      <motion.div
        variants={staggerFast}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"
      >
        {items.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </motion.div>
    </motion.div>
  )
}

function AccessoriesCatalog({ allItems }) {
  return (
    <div className="mt-8">
      <div className="text-center mb-16">
        <h2 className="font-display font-black text-3xl lg:text-4xl text-slate-900 mb-4">Complete IT Accessories Catalog</h2>
        <p className="text-slate-500 max-w-2xl mx-auto">Everything your office IT setup needs — from structured cabling and UPS systems to GPUs, monitors, and networking racks. Browse our structured categories below.</p>
      </div>

      {accessorySubcategories.map((sub) => {
        const subItems = allItems.filter(p => p.subCategory === sub.id)
        if (subItems.length === 0) return null
        return (
          <CategorySection
            key={sub.id}
            category={sub.id}
            items={subItems}
            isVisible={true}
            metaOverrides={{ label: sub.label, icon: sub.icon, desc: sub.desc }}
          />
        )
      })}
    </div>
  )
}

export default function Products() {
  const [activeCategory, setActiveCategory] = useState('all')

  const filteredProducts = activeCategory === 'all'
    ? products
    : products.filter((p) => p.category === activeCategory)

  // Group by category for display
  const categoriesOrder = ['laptops', 'networking', 'cctv', 'refurbished', 'accessories']

  return (
    <>
      <PageHero
        label="IT Product Catalog"
        title="Quality Hardware"
        accent="Trusted Brands"
        subtitle="Authorised laptops, desktops, servers, networking gear, security systems, and refurbished systems"
        subtitleLine2="sourced directly and available across India."
        badges={[
          '✅ Authorised Dell, HP & Lenovo Dealer',
          '🔁 Grade-A Refurbished Systems',
          '🚚 Pan-India Delivery',
          '📋 GEM Registered',
        ]}
      />

      {/* Filter bar */}
      <div className="sticky top-16 z-40 bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 overflow-x-auto scrollbar-hide">
          <div className="flex gap-2 py-4 min-w-max">
            {productCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`relative px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                  activeCategory === cat.id
                    ? 'bg-slate-900 text-white shadow-md'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {cat.label}
                {activeCategory === cat.id && (
                  <motion.div
                    layoutId="filter-active"
                    className="absolute inset-0 bg-slate-900 rounded-full -z-10"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Products grid */}
      <section className="py-16 lg:py-20 bg-slate-50/40">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatePresence mode="wait">
            {activeCategory === 'all' ? (
              <motion.div key="all">
                {categoriesOrder.map((cat) => {
                  const items = products.filter((p) => p.category === cat)
                  if (cat === 'accessories') {
                    return (
                      <div key={cat} className="mt-20 pt-16 border-t border-slate-200">
                        <AccessoriesCatalog allItems={items} />
                      </div>
                    )
                  }
                  return (
                    <CategorySection
                      key={cat}
                      category={cat}
                      items={items}
                      isVisible={true}
                    />
                  )
                })}
              </motion.div>
            ) : activeCategory === 'accessories' ? (
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              >
                <AccessoriesCatalog allItems={filteredProducts} />
              </motion.div>
            ) : (
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              >
                <CategorySection
                  category={activeCategory}
                  items={filteredProducts}
                  isVisible={true}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Trust badges strip */}
      <section className="py-12 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            variants={staggerFast}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center"
          >
            {[
              { icon: '✅', label: 'Authorised Dealer', sub: 'Dell · HP · Lenovo' },
              { icon: '📋', label: 'GEM Registered', sub: 'Govt procurement ready' },
              { icon: '🚚', label: 'Pan-India Delivery', sub: 'All major cities' },
              { icon: '🛡️', label: 'OEM Warranty', sub: 'On all new hardware' },
            ].map((item) => (
              <motion.div
                key={item.label}
                variants={staggerItem}
                className="flex flex-col items-center gap-2 p-5 bg-slate-50 rounded-2xl border border-slate-100"
              >
                <span className="text-2xl">{item.icon}</span>
                <p className="font-display font-bold text-sm text-slate-900">{item.label}</p>
                <p className="text-xs text-slate-400">{item.sub}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <CTASection
        title="Need a quote or bulk pricing?"
        subtitle="Call us or WhatsApp with your requirements. We'll get back within 2 hours with a detailed quote."
      />
    </>
  )
}
