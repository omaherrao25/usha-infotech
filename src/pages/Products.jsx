import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import SEO from '../components/SEO'
import ProductCard from '../components/ProductCard'
import CTASection from '../components/CTASection'
import { products, productCategories } from '../data/products'
import { accessorySubcategories } from '../data/accessories'
import { fadeUp, viewportOnce } from '../animations/fadeUp'
import { staggerFast, staggerItem } from '../animations/stagger'

const categoryMeta = {
  laptops: { label: 'Laptops & Desktops', icon: 'computer', desc: 'Authorised Dell, HP & Lenovo — enterprise grade' },
  networking: { label: 'Networking Equipment', icon: 'router', desc: 'Cisco, Fortinet, TP-Link — complete enterprise stacks' },
  cctv: { label: 'Security Systems', icon: 'videocam', desc: 'Hikvision, Dahua, CP-Plus — 4K to industrial grade' },
  refurbished: { label: 'Grade-A Refurbished Systems', icon: 'recycling', desc: '60% savings · 3-month warranty · bulk ready' },
  accessories: { label: 'Accessories & Peripherals', icon: 'cable', desc: 'UPS, cabling, monitors, racks — everything else' },
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
      <div className="flex items-center gap-5 mb-8">
        <div className="w-12 h-12 bg-primary/5 rounded-xl flex items-center justify-center">
          <span className="material-symbols-outlined text-primary text-2xl">{meta?.icon || 'devices'}</span>
        </div>
        <div>
          <h3 className="font-sora font-bold text-xl text-on-surface">{meta?.label}</h3>
          <p className="text-sm text-outline">{meta?.desc}</p>
        </div>
        <div className="flex-1 h-px bg-outline-variant/20 ml-4" />
      </div>

      <motion.div
        variants={staggerFast}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12"
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
        <h2 className="font-sora font-bold text-3xl lg:text-4xl text-on-surface mb-4">Complete IT Accessories Catalog</h2>
        <p className="text-on-surface-variant max-w-2xl mx-auto">Everything your office IT setup needs — from structured cabling and UPS systems to GPUs, monitors, and networking racks.</p>
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
            metaOverrides={{ label: sub.label, icon: sub.icon || 'category', desc: sub.desc }}
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

  const categoriesOrder = ['laptops', 'networking', 'cctv', 'refurbished', 'accessories']

  return (
    <>
      <SEO
        title="IT Products & Hardware"
        path="/products"
        description="Authorised Dell, HP & Lenovo dealer. Enterprise laptops, networking gear, CCTV cameras, refurbished systems and IT accessories. GEM registered. Pan-India delivery."
      />

      {/* Editorial Hero */}
      <section className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-8">
          <div className="editorial-grid">
            <div className="col-span-12 md:col-span-8">
              <span className="section-label mb-6 block">Inventory Ledger v.2024</span>
              <h1 className="text-6xl md:text-8xl font-sora font-extrabold tracking-tighter text-on-surface leading-[0.9] mb-8">
                Precision<br />Infrastructure.
              </h1>
              <p className="text-xl text-on-surface-variant max-w-xl leading-relaxed">
                Curated high-performance hardware for enterprise scalability. Available for strategic rental or certified procurement.
              </p>
            </div>
            <div className="hidden md:block col-span-4 relative">
              <div className="absolute right-0 top-0 w-full h-full bg-surface-container-high rounded-xl -z-10 translate-x-8 translate-y-8" />
              <div className="w-full h-full bg-surface-container-highest rounded-xl overflow-hidden flex items-center justify-center min-h-[240px]">
                <span className="material-symbols-outlined text-[80px] text-outline/20">dns</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Catalog Controls */}
      <section className="max-w-7xl mx-auto px-8 mb-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-outline-variant/20 pb-8 gap-8">
          <div className="flex flex-wrap gap-8">
            <div className="flex flex-col gap-2">
              <label className="text-[10px] font-bold uppercase tracking-widest text-outline">Hardware Type</label>
              <div className="flex gap-2 flex-wrap">
                {productCategories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    className={`px-4 py-1.5 rounded-full text-sm font-semibold transition-all duration-200 ${
                      activeCategory === cat.id
                        ? 'border border-primary text-primary'
                        : 'border border-outline-variant/30 text-on-surface-variant hover:border-primary/50'
                    }`}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
          <div className="text-right">
            <span className="text-sm font-manrope text-outline">
              Displaying {filteredProducts.length} of {products.length} Units
            </span>
          </div>
        </div>
      </section>

      {/* Products grid */}
      <section className="pb-16 lg:pb-20">
        <div className="max-w-7xl mx-auto px-8">
          <AnimatePresence mode="wait">
            {activeCategory === 'all' ? (
              <motion.div key="all">
                {categoriesOrder.map((cat) => {
                  const items = products.filter((p) => p.category === cat)
                  if (cat === 'accessories') {
                    return (
                      <div key={cat} className="mt-20 pt-16 border-t border-outline-variant/20">
                        <AccessoriesCatalog allItems={items} />
                      </div>
                    )
                  }
                  return (
                    <CategorySection key={cat} category={cat} items={items} isVisible={true} />
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
                <CategorySection category={activeCategory} items={filteredProducts} isVisible={true} />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>



      <CTASection
        title="Need a quote or bulk pricing?"
        subtitle="Call us or WhatsApp with your requirements. We'll get back within 2 hours with a detailed quote."
      />
    </>
  )
}
