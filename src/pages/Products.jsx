import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import SEO from '../components/SEO'
import ProductCard from '../components/ProductCard'
import CTASection from '../components/CTASection'
import { products, productCategories } from '../data/products'
import { accessorySubcategories } from '../data/accessories'
import { fadeUp, viewportOnce } from '../animations/fadeUp'
import { staggerFast, staggerItem } from '../animations/stagger'

const categoryMeta = {
  all:         { label: 'All Products',               icon: 'grid_view',   desc: 'Full product catalog' },
  laptops:     { label: 'Laptops & Desktops',         icon: 'computer',    desc: 'Authorised Dell, HP & Lenovo — enterprise grade' },
  networking:  { label: 'Networking Equipment',       icon: 'router',      desc: 'Cisco, Fortinet, TP-Link — complete enterprise stacks' },
  cctv:        { label: 'Security Systems',           icon: 'videocam',    desc: 'Hikvision, Dahua, CP-Plus — 4K to industrial grade' },
  refurbished: { label: 'Grade-A Refurbished',        icon: 'recycling',   desc: '60% savings · 3-month warranty · bulk ready' },
  accessories: { label: 'Accessories & Peripherals',  icon: 'cable',       desc: 'UPS, cabling, monitors, racks — everything else' },
}

const categoriesOrder = ['laptops', 'networking', 'cctv', 'refurbished', 'accessories']

// — Sticky Nav (identical pattern to Services & CaseStudies) —
function ProductQuickNav({ activeId, onNavClick }) {
  const scrollRef = useRef(null);

  // Auto-scroll the active tab into view when activeId changes
  useEffect(() => {
    if (!scrollRef.current) return;
    const activeEl = scrollRef.current.querySelector("[data-active='true']");
    if (activeEl) {
      activeEl.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
    }
  }, [activeId]);

  return (
    <div className="sticky top-20 z-30 bg-surface/80 backdrop-blur-xl border-b border-outline-variant/10">
      <div className="max-w-7xl mx-auto px-8 overflow-x-auto scrollbar-hide" ref={scrollRef}>
        <div className="flex gap-2 py-3 min-w-max">
          {categoriesOrder.map((id) => {
            const meta = categoryMeta[id]
            const isActive = activeId === id
            return (
              <button
                key={id}
                data-active={isActive.toString()}
                onClick={() => onNavClick(id)}
                className={`flex items-center px-5 py-2.5 rounded-full text-[11px] font-bold uppercase tracking-widest transition-all duration-300 font-sora ${
                  isActive
                    ? 'bg-logo-gradient text-white shadow-lg shadow-primary/20 scale-105'
                    : 'text-on-surface-variant hover:text-gradient hover:bg-logo-gradient-5'
                }`}
              >
                {meta.label}
              </button>
            )
          })}
        </div>
      </div>
    </div>
  )
}

// — Category Section with scroll anchor —
function CategorySection({ categoryId }) {
  const meta = categoryMeta[categoryId]
  const items =
    categoryId === 'accessories'
      ? products.filter((p) => p.category === 'accessories')
      : products.filter((p) => p.category === categoryId)

  if (items.length === 0) return null

  return (
    <section id={`cat-${categoryId}`} className="pt-16 pb-8 scroll-mt-36">
      <div className="max-w-7xl mx-auto px-8">
        {/* Section header */}
        <div className="flex items-center gap-5 mb-10">
          <div className="w-12 h-12 bg-logo-gradient-5 rounded-xl flex items-center justify-center shrink-0">
            <span className="material-symbols-outlined text-gradient text-2xl">{meta.icon}</span>
          </div>
          <div>
            <h2 className="font-sora font-bold text-xl text-on-surface">{meta.label}</h2>
            <p className="text-sm text-outline">{meta.desc}</p>
          </div>
          <div className="flex-1 h-px bg-outline-variant/20 ml-4" />
        </div>

        {categoryId === 'accessories' ? (
          // Accessories — rendered by sub-category
          <div>
            {accessorySubcategories.map((sub) => {
              const subItems = items.filter((p) => p.subCategory === sub.id)
              if (subItems.length === 0) return null
              return (
                <div key={sub.id} className="mb-16">
                  <div className="flex items-center gap-4 mb-8">
                    <h3 className="font-sora font-semibold text-base text-on-surface-variant">{sub.label}</h3>
                    <div className="flex-1 h-px bg-outline-variant/10" />
                  </div>
                  <motion.div
                    variants={staggerFast}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                  >
                    {subItems.map((product) => (
                      <ProductCard key={product.id} product={product} />
                    ))}
                  </motion.div>
                </div>
              )
            })}
          </div>
        ) : (
          <motion.div
            variants={staggerFast}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {items.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </motion.div>
        )}
      </div>
    </section>
  )
}

export default function Products() {
  const [activeId, setActiveId] = useState('laptops')

  // Manual scroll to section with offset for both navbars (80px main + ~52px sticky)
  const handleNavClick = (id) => {
    setActiveId(id)
    const el = document.getElementById(`cat-${id}`)
    if (el) {
      const offset = 140 // main navbar height + sticky product nav height
      const top = el.getBoundingClientRect().top + window.scrollY - offset
      window.scrollTo({ top, behavior: 'smooth' })
    }
  }

  // Scroll-spy: find the section whose top is at/just above the sticky nav
  useEffect(() => {
    const OFFSET = 150; // main nav (~80px) + quick nav (~52px) + buffer
    const onScroll = () => {
      let current = '';
      for (const id of categoriesOrder) {
        const el = document.getElementById(`cat-${id}`);
        if (!el) continue;
        if (el.getBoundingClientRect().top <= OFFSET) {
          current = id;
        }
      }
      if (current && current !== activeId) setActiveId(current);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll(); // set initial active on mount
    return () => window.removeEventListener('scroll', onScroll);
  }, [])

  return (
    <>
      <SEO
        title="IT Products & Hardware"
        path="/products"
        description="Authorised Dell, HP & Lenovo dealer. Enterprise laptops, networking gear, CCTV cameras, refurbished systems and IT accessories. GEM registered. Pan-India delivery."
      />

      {/* Hero */}
      <section className="relative pt-36 pb-28 overflow-hidden min-h-[560px] flex items-center">
        <div className="absolute inset-x-0 top-0 h-20 bg-surface" aria-hidden="true" />
        <div className="absolute inset-x-0 top-20 bottom-0" aria-hidden="true">
          <img src="/assets/hw_real.png" alt="" className="w-full h-full object-cover object-center" />
        </div>
        <div
          className="absolute inset-x-0 top-20 bottom-0"
          aria-hidden="true"
          style={{ background: 'linear-gradient(105deg, rgba(11,25,35,0.92) 0%, rgba(11,25,35,0.82) 40%, rgba(11,25,35,0.55) 70%, rgba(11,25,35,0.25) 100%)' }}
        />
        <div
          className="absolute inset-x-0 top-20 bottom-0"
          aria-hidden="true"
          style={{ background: 'linear-gradient(180deg, rgba(26,107,138,0.18) 0%, transparent 60%)' }}
        />
        <div className="relative max-w-7xl mx-auto px-8 w-full">
          <div className="max-w-3xl">
            <span className="section-label mb-6 block text-gradient">Inventory Ledger v.2026</span>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-sora font-extrabold tracking-tighter text-white leading-[0.9] mb-7">
              Precision<br />
              <span className="text-gradient">Infrastructure.</span>
            </h1>
            <p className="text-lg text-white/75 max-w-2xl font-light leading-relaxed">
              Curated high-performance hardware for enterprise scalability. Available for strategic rental or certified procurement.
            </p>
          </div>
        </div>
      </section>

      {/* Sticky Quick Nav */}
      <ProductQuickNav activeId={activeId} onNavClick={handleNavClick} />

      {/* All category sections — always rendered, scroll-based */}
      <div className="pb-16 lg:pb-20">
        {categoriesOrder.map((id) => (
          <CategorySection key={id} categoryId={id} />
        ))}
      </div>

      <CTASection
        title="Need a quote or bulk pricing?"
        subtitle="Call us or WhatsApp with your requirements. We'll get back within 24 hours with a detailed quote."
      />
    </>
  )
}
