import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { staggerItem } from "../animations/stagger";

// Category-specific accent colors for visual differentiation
const TAG_ACCENT = {
  "IT Infrastructure": {
    bar: "#1A6B8A",
    tagBg: "rgba(26,107,138,0.08)",
    tagText: "#1A6B8A",
  },
  "Security Systems": {
    bar: "#b45309",
    tagBg: "rgba(180,83,9,0.08)",
    tagText: "#b45309",
  },
  Networking: {
    bar: "#0f766e",
    tagBg: "rgba(15,118,110,0.08)",
    tagText: "#0f766e",
  },
};
const DEFAULT_ACCENT = {
  bar: "#1A6B8A",
  tagBg: "rgba(26,107,138,0.08)",
  tagText: "#1A6B8A",
};

export default function CaseStudyCard({ study, variant = "default" }) {
  if (variant === "preview") {
    const accent = TAG_ACCENT[study.tag] ?? DEFAULT_ACCENT;

    return (
      <motion.article
        variants={staggerItem}
        whileHover={{
          y: -6,
          transition: { duration: 0.28, ease: [0.22, 1, 0.36, 1] },
        }}
        className="group relative bg-surface-container-lowest rounded-2xl overflow-hidden border border-surface-container-high hover:shadow-[0_20px_52px_rgba(0,0,0,0.08)] transition-shadow duration-300"
      >
        {/* Left accent bar — scales into view on hover */}
        <div
          className="absolute left-0 top-0 bottom-0 w-[3px] origin-top scale-y-[0.22] group-hover:scale-y-100 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
          style={{ backgroundColor: accent.bar }}
        />

        <div className="pl-7 pr-6 py-6">
          {/* Header: logo + category tag */}
          <div className="flex items-center justify-between mb-5">
            <div className="h-7 flex items-center">
              {study.logo ? (
                <img
                  src={study.logo}
                  alt={study.client}
                  className="h-full max-w-[110px] object-contain opacity-75 group-hover:opacity-100 transition-opacity duration-300"
                />
              ) : (
                <span className="text-2xl leading-none">{study.icon}</span>
              )}
            </div>
            <span
              className="text-[10px] font-bold uppercase tracking-[0.14em] px-2.5 py-1 rounded-full"
              style={{ color: accent.tagText, backgroundColor: accent.tagBg }}
            >
              {study.tag}
            </span>
          </div>

          {/* Client name */}
          <p className="text-[10px] font-extrabold text-outline uppercase tracking-[0.18em] mb-1.5">
            {study.client}
          </p>

          {/* Title */}
          <h3 className="font-sora font-bold text-[1.05rem] leading-snug text-on-surface mb-5 group-hover:text-primary transition-colors duration-300">
            {study.title}
          </h3>

          {/* Metrics — inline with vertical separator, no boxy containers */}
          <div className="flex items-stretch gap-0 mb-5">
            <div className="flex-1 min-w-0">
              <div className="font-sora font-black text-[1.7rem] leading-none text-on-surface mb-1.5 group-hover:text-primary transition-colors duration-300">
                {study.metric1.val}
              </div>
              <div className="text-[11px] text-outline font-semibold uppercase tracking-wide truncate">
                {study.metric1.label}
              </div>
            </div>
            <div className="w-px bg-surface-container-high mx-5 shrink-0" />
            <div className="flex-1 min-w-0">
              <div className="font-sora font-black text-[1.7rem] leading-none text-on-surface mb-1.5 group-hover:text-primary transition-colors duration-300">
                {study.metric2.val}
              </div>
              <div className="text-[11px] text-outline font-semibold uppercase tracking-wide truncate">
                {study.metric2.label}
              </div>
            </div>
          </div>

          {/* Footer CTA */}
          <div className="pt-4 border-t border-surface-container-high flex items-center justify-between">
            <Link
              to="/case-studies"
              className="text-xs font-bold text-outline group-hover:text-primary transition-colors duration-300"
            >
              View case study
            </Link>
            <span className="material-symbols-outlined text-[16px] text-outline group-hover:text-primary group-hover:translate-x-1 transition-all duration-300">
              arrow_forward
            </span>
          </div>
        </div>
      </motion.article>
    );
  }

  return (
    <motion.div
      variants={staggerItem}
      className="group bg-surface-container-lowest p-8 rounded-2xl transition-all duration-300 hover:translate-y-[-4px] hover:shadow-card"
    >
      <div className="flex items-center gap-4 mb-6">
        {study.logo ? (
          <img
            src={study.logo}
            alt={study.client}
            className="h-12 max-w-[160px] object-contain"
          />
        ) : (
          <span className="text-5xl">{study.icon}</span>
        )}
        <span className="tag-glass-primary shrink-0 ml-auto">{study.tag}</span>
      </div>

      <p className="text-xs font-bold text-outline uppercase tracking-widest mb-1">
        {study.client}
      </p>
      <h3 className="font-sora font-bold text-xl text-on-surface mb-2 leading-tight">
        {study.title}
      </h3>
      <p className="text-on-surface-variant text-sm leading-relaxed mb-5">
        {study.subtitle}
      </p>

      <div className="grid grid-cols-3 gap-3 mb-5">
        {study.metrics.map((m) => (
          <div
            key={m.label}
            className="bg-surface-container-low rounded-xl px-3 py-3 text-center"
          >
            <div className="font-sora font-black text-xl text-primary">
              {m.val}
            </div>
            <div className="text-[11px] text-outline font-medium mt-0.5">
              {m.label}
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-wrap gap-2 mb-5">
        {study.tags.map((tag) => (
          <span key={tag} className="tag-pill">
            {tag}
          </span>
        ))}
      </div>

      <a
        href="tel:+918087051208"
        className="flex items-center gap-2 text-sm font-semibold text-outline group-hover:text-primary transition-colors"
      >
        {study.ctaLabel}
        <span className="material-symbols-outlined text-sm">arrow_forward</span>
      </a>
    </motion.div>
  );
}
