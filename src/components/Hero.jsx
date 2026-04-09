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
      className="relative min-h-screen flex items-center pt-20 pb-16 bg-surface overflow-hidden"
      aria-label="Hero section"
    >
      {/* Left Side: Animated Background Image Container (Half-Moon split) */}
      <div
        className="absolute top-20 lg:top-[100px] bottom-0 left-0 w-full lg:w-[50%] z-0 overflow-hidden shadow-[20px_0_40px_rgba(0,0,0,0.1)]"
        style={{
          borderTopRightRadius: "30vh",
          borderBottomRightRadius: "30vh",
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

        {/* Dark gradient overlay for text readability on mobile and mood rendering */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/20 lg:from-black/30 lg:to-black/10 z-10" />
      </div>

      {/* Right Side: Content Overlay */}
      <div className="max-w-7xl mx-auto px-8 w-full relative z-20">
        <div className="grid grid-cols-12 gap-8 w-full items-center">
          {/* Spacer for left side image on Desktop */}
          <div className="hidden lg:block lg:col-span-6"></div>

          {/* Text Content */}
          <div className="col-span-12 lg:col-span-6 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.2,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="bg-surface/85 lg:bg-transparent backdrop-blur-xl lg:backdrop-blur-none p-8 lg:p-0 rounded-3xl lg:rounded-none lg:pl-12 shadow-2xl lg:shadow-none border border-white/20 lg:border-none"
            >
              <div className="flex items-center gap-3 mb-6">
                {/* <div className="w-8 h-[2px] bg-primary"></div> */}
                <span className="font-sora font-bold text-xs uppercase tracking-[0.2em] text-primary">
                Precision Infrastructure
                </span>
              </div>

              <h1 className="text-5xl md:text-7xl lg:text-7xl font-sora font-extrabold tracking-tighter leading-[1.05] text-on-surface mb-8">
                Strategic <br />
                <span className="text-gradient">IT Solutions</span>
              </h1>

              <p className="text-lg md:text-xl text-on-surface-variant max-w-xl font-light leading-relaxed mb-10">
                We architect resilient digital foundations through human-centric
                engineering and precision technical oversight for complete
                operational continuity.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 w-full">
                <Link
                  to="/services"
                  className="btn-primary flex justify-center text-base py-4 px-8 shadow-lg shadow-primary/20"
                >
                  Explore Services
                  <span className="material-symbols-outlined text-[18px]">
                    arrow_forward
                  </span>
                </Link>
                <Link
                  to="/case-studies"
                  className="btn-secondary flex justify-center text-base py-4 px-8 bg-surface-container-low hover:bg-surface-container"
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
