import { motion } from 'framer-motion'

export default function PageLoader() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-surface">
      <motion.div
        initial={{ opacity: 0.3 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 1.2,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut"
        }}
      >
        <img 
          src="/assets/logo.png" 
          alt="Usha Infotech Loading..." 
          className="h-16 w-auto object-contain"
        />
      </motion.div>
    </div>
  )
}
