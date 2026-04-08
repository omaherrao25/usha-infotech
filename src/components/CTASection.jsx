import { motion } from 'framer-motion'
import { fadeUp, viewportOnce } from '../animations/fadeUp'

export default function CTASection({
  title = "Ready to engineer your next phase?",
  subtitle = "Speak with our consulting team to define a precision-driven IT roadmap for your enterprise.",
}) {
  return (
    <section className="py-32 px-8" aria-label="Call to action">
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="max-w-7xl mx-auto bg-logo-gradient rounded-[2rem] p-8 md:p-12 lg:p-16 relative overflow-hidden text-on-primary"
      >
        {/* Decorative SVG curves */}
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none" aria-hidden="true">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path d="M0,100 Q50,0 100,100" fill="none" stroke="currentColor" strokeWidth="0.5" />
            <path d="M0,80 Q50,-20 100,80" fill="none" stroke="currentColor" strokeWidth="0.5" />
            <path d="M0,60 Q50,-40 100,60" fill="none" stroke="currentColor" strokeWidth="0.5" />
          </svg>
        </div>

        <div className="max-w-2xl relative z-10">
          <h2 className="text-4xl md:text-6xl font-sora font-bold tracking-tight mb-8">
            {title}
          </h2>
          <p className="text-xl mb-12 text-on-primary/80">
            {subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 w-full">
            <a
              href="tel:+919850751208"
              className="bg-surface-container-lowest text-primary px-10 py-5 rounded-xl font-bold text-lg hover:shadow-2xl transition-shadow flex justify-center items-center gap-3 w-full sm:w-auto"
              aria-label="Schedule consultation call"
            >
              Schedule Consultation
            </a>
            <a
              href="https://wa.me/919850751208"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-on-primary/30 px-10 py-5 rounded-xl font-bold text-lg hover:bg-on-primary/10 transition-colors flex justify-center items-center gap-3 w-full sm:w-auto"
            >
              Request Audit
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
