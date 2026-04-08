import { motion } from "framer-motion";
import { staggerItem } from "../animations/stagger";

export default function ProductCard({ product }) {
  return (
    <motion.div
      variants={staggerItem}
      layout
      className="group relative h-[420px] rounded-2xl overflow-hidden bg-surface-container border border-outline/10 transition-all hover:shadow-[0_20px_48px_rgba(26,107,138,0.35)] hover:-translate-y-2 cursor-pointer"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-all duration-700 ease-in-out scale-100 group-hover:scale-110 group-hover:blur-[6px]"
        style={{
          backgroundImage: product.image
            ? `url('/assets/${product.image}${product.image.includes(".") ? "" : ".png"}')`
            : "none",
          backgroundColor: product.image ? "transparent" : "#0d3d52",
        }}
      >
        {/* Fallback icon if no image */}
        {!product.image && (
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="material-symbols-outlined text-[120px] text-white/10">
              {product.icon || "devices"}
            </span>
          </div>
        )}
      </div>

      {/* Base dark scrim — always visible, ensures readability on BOTH dark and light images */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/50" />
      {/* Teal brand tint — transitions on hover */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0d3d52]/60 via-transparent to-transparent group-hover:from-[#0a2e3e]/80 group-hover:via-[#1A6B8A]/40 group-hover:to-transparent transition-all duration-500 ease-in-out" />

      {/* Badge Tag — top-left */}
      {product.badge?.label && (
        <div className="absolute top-6 left-6 z-20">
          <span className="tag-glass whitespace-nowrap">
            {product.badge.label}
          </span>
        </div>
      )}

      {/* Content wrapper */}
      <div className="relative h-full flex flex-col p-6 md:p-8 z-10 justify-between text-left">

        {/* Top Info — revealed on hover, starts below badge */}
        <div className="flex-1 overflow-hidden pt-12">
          <div className="transform -translate-y-[120%] opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] flex flex-col gap-4">
            <p className="text-white/90 text-sm leading-relaxed border-l-2 border-primary pl-3 mt-4">
              {product.desc || product.tags?.join(" · ")}
            </p>

            <a
              href="tel:+919850751208"
              className="mt-2 inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-white hover:text-sky-200 transition-colors duration-200 w-max border-b border-white/30 hover:border-sky-200 pb-0.5"
            >
              {product.ctaLabel || "Enquire Now"}
              <span className="material-symbols-outlined text-[14px]">
                arrow_forward
              </span>
            </a>
          </div>
        </div>

        {/* Bottom Title — always visible */}
        <div className="mt-auto relative z-20 -mx-6 md:-mx-8 px-6 md:px-8 pt-5 pb-1 backdrop-blur-md bg-black/30 group-hover:bg-[#1A6B8A]/35 transition-all duration-500">
          {/* Decorative bar */}
          <div className="w-8 h-1 bg-primary mb-4 transition-all duration-500 group-hover:w-16 group-hover:bg-white rounded-full" />
          <h3 className="text-xl md:text-2xl font-sora font-bold text-white/90 group-hover:text-white transition-colors duration-300">
            {product.title}
          </h3>
        </div>
      </div>
    </motion.div>
  );
}
