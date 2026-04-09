import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

const images = [
  "/assets/srv_rental.png",
  "/assets/srv_infra.png",
  "/assets/srv_network.png",
  "/assets/srv_cctv.png",
];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      className="relative min-h-screen flex flex-col lg:flex-row lg:items-center pt-20 lg:pt-0 bg-surface overflow-hidden"
      aria-label="Hero section"
    >
      {/* Background Image Container */}
      <div
        className="relative lg:absolute lg:top-[100px] lg:bottom-0 lg:left-0 w-full lg:w-[50%] h-[40vh] sm:h-[50vh] lg:h-auto z-10 overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.1)] lg:shadow-[20px_0_40px_rgba(0,0,0,0.1)]"
        style={{
          borderBottomRightRadius: window.innerWidth < 1024 ? "80px" : "30vh",
          borderTopRightRadius: window.innerWidth < 1024 ? "0" : "30vh",
        }}
      >
        <AnimatePresence mode="popLayout">
          <motion.img
            key={currentIndex}
            src={images[currentIndex]}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full object-cover"
            alt="IT Services Showcase"
          />
        </AnimatePresence>

        {/* Subtle gradient overlay for mood */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent lg:bg-gradient-to-r lg:from-black/30 lg:to-black/10 z-10" />
      </div>

      {/* Content Area */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full relative z-20 py-12 lg:py-0">
        <div className="grid grid-cols-12 gap-8 w-full items-center">
          {/* Spacer for left side image on Desktop */}
          <div className="hidden lg:block lg:col-span-6"></div>

          {/* Text Content */}
          <div className="col-span-12 lg:col-span-6 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.2,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="lg:pl-12"
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="font-sora font-bold text-[10px] sm:text-xs uppercase tracking-[0.25em] text-primary">
                  Precision Infrastructure
                </span>
              </div>

              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-sora font-extrabold tracking-tighter leading-[1.1] text-on-surface mb-6 lg:mb-8">
                Strategic <br />
                <span className="text-primary-container">IT Solutions</span>
              </h1>

              <p className="text-base sm:text-xl text-on-surface-variant max-w-xl font-light leading-relaxed mb-10">
                We architect resilient digital foundations through human-centric
                engineering and precision technical oversight for complete
                operational continuity.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 w-full">
                <Link
                  to="/services"
                  className="btn-primary w-full sm:w-auto flex justify-center text-base py-4 px-8 shadow-lg shadow-primary/20"
                >
                  Explore Services
                  <span className="material-symbols-outlined text-[18px]">
                    arrow_forward
                  </span>
                </Link>
                <Link
                  to="/case-studies"
                  className="btn-secondary w-full sm:w-auto flex justify-center text-base py-4 px-8 bg-surface-container-low hover:bg-surface-container border border-outline-variant/30"
                >
                  Our Method
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>


  );
}
