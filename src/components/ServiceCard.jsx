import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { staggerItem } from "../animations/stagger";

export default function ServiceCard({ service, index }) {
  return (
    <motion.div
      variants={staggerItem}
      className="group relative h-[300px] md:h-[420px] rounded-2xl overflow-hidden bg-surface-container border border-outline/10 transition-all hover:shadow-[0_25px_50px_-12px_rgba(45,58,176,0.25)] hover:-translate-y-2 cursor-pointer"
    >
      {/* Background Image (Always visible, blurs and scales up on hover) */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-all duration-700 ease-in-out scale-100 group-hover:scale-110 group-hover:blur-[6px]"
        style={{ backgroundImage: `url('/assets/${service.image}.png')` }}
      />
      {/* Brand gradient overlay for contrast over image */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 group-hover:from-black/95 group-hover:bg-logo-gradient-20 group-hover:via-transparent group-hover:to-black/80 transition-all duration-500 ease-in-out" />

      {/* Content wrapper */}
      <div className="relative h-full flex flex-col p-6 md:p-8 z-10 justify-between text-left">
        {/* Top Info (Hidden by default, slides down on hover) */}
        <div className="flex-1 overflow-hidden">
          <div className="transform -translate-y-[120%] opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] flex flex-col gap-4">
            <p className="text-white/90 text-sm leading-relaxed border-l-2 border-primary pl-3 mt-4">
              {service.shortDesc}
            </p>

            <Link
              to="/services"
              className="mt-2 inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-white hover:text-gradient transition-colors w-max"
            >
              Learn More
              <span className="material-symbols-outlined text-[14px]">
                arrow_forward
              </span>
            </Link>
          </div>
        </div>

        {/* Bottom Title (Always visible) */}
        <div className="mt-auto relative z-20 -mx-6 md:-mx-8 px-6 md:px-8 pt-5 pb-1 backdrop-blur-md bg-black/30 group-hover:bg-logo-gradient-40 transition-all duration-500">
          {/* Decorative bar */}
          <div className="w-8 h-1 bg-primary mb-4 transition-all duration-500 group-hover:w-16 group-hover:bg-white rounded-full" />
          <h3 className="text-xl md:text-2xl font-sora font-bold text-white/90 group-hover:text-white transition-colors duration-300">
            {service.title}
          </h3>
        </div>
      </div>
    </motion.div>
  );
}
