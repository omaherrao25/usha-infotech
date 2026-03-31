import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Link } from "react-router-dom";
import { fadeUp, viewportOnce } from "../animations/fadeUp";
import { staggerMed, staggerItem } from "../animations/stagger";

function CountUp({ target, suffix = "", prefix = "", duration = 2000 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  useEffect(() => {
    if (!inView) return;
    const startTime = performance.now();
    const animate = (now) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * target));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [inView, target, duration]);

  return (
    <span ref={ref}>
      {prefix}
      {count}
      {suffix}
    </span>
  );
}

const stats = [
  { target: 25, suffix: "+", label: "Years Experience", icon: "🏆" },
  { target: 500, suffix: "+", label: "Enterprise Clients", icon: "🏢" },
  { target: 5000, suffix: "+", label: "Deployments Done", icon: "⚡" },
  {
    target: 50,
    prefix: "₹",
    suffix: "Cr+",
    label: "Capital Saved",
    icon: "💰",
  },
];

const wordVariants = {
  hidden: { opacity: 0, y: 60, rotateX: -15 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: { delay: i * 0.08, duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function Hero() {
  const headlineWords = ["25+", "Years", "of", "IT", "that"];
  const accentWords = ["just works."];
  const [isSplineLoaded, setIsSplineLoaded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const target = document.getElementById("spline-container");
    if (target) observer.observe(target);

    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/40 to-teal-50/30" />
      <div className="absolute inset-0 grid-bg opacity-60" />

      {/* Decorative blobs */}
      <div className="absolute top-1/4 -right-32 w-96 h-96 rounded-full bg-blue-200/30 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -left-32 w-80 h-80 rounded-full bg-teal-200/30 blur-3xl pointer-events-none" />

      {/* Spline 3D Background */}
      <div id="spline-container" className="absolute inset-0 w-full h-full z-0">
        {isVisible && (
          <iframe
            src="https://my.spline.design/websitedesigncopycopycopy-CcOG0L8LDoXZOY5T7Cl7Wh26-LtE/"
            frameBorder="0"
            width="100%"
            height="100%"
            title="Spline 3D Background"
            onLoad={() => setIsSplineLoaded(true)}
          ></iframe>
        )}
        {!isSplineLoaded && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
            <p>Loading 3D Background...</p>
          </div>
        )}
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 w-full">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-flex items-center gap-2 bg-white border border-blue-100 rounded-full px-5 py-2 mb-8 shadow-sm"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
            </span>
            <span className="text-xs font-bold tracking-widest uppercase text-slate-600">
              Trusted across India · Since 2000
            </span>
          </motion.div>

          {/* Headline */}
          <div className="mb-6 perspective-[1000px]">
            <div className="flex flex-wrap justify-center gap-x-4 gap-y-0 mb-2">
              {headlineWords.map((word, i) => (
                <motion.span
                  key={word + i}
                  custom={i}
                  variants={wordVariants}
                  initial="hidden"
                  animate="visible"
                  className="font-display text-4xl sm:text-5xl lg:text-7xl xl:text-8xl font-black text-slate-900 leading-tight tracking-tight"
                >
                  {word}
                </motion.span>
              ))}
            </div>
            <div className="flex justify-center">
              {accentWords.map((word, i) => (
                <motion.span
                  key={word}
                  custom={headlineWords.length + i}
                  variants={wordVariants}
                  initial="hidden"
                  animate="visible"
                  className="font-display text-4xl sm:text-5xl lg:text-7xl xl:text-8xl font-black leading-tight tracking-tight gradient-text italic"
                >
                  {word}
                </motion.span>
              ))}
            </div>
          </div>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="text-lg sm:text-xl text-slate-500 leading-relaxed max-w-2xl mx-auto mb-10"
          >
            IT Infrastructure · AMC Support · Refurbished · Rentals · Security
            Systems · Networking
            <br />
            <span className="text-slate-400 text-base">
              No technical knowledge needed — everything handled for you.
            </span>
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.75 }}
            className="flex flex-wrap justify-center gap-4 mb-16"
          >
            <Link
              to="/services"
              className="btn-primary text-base px-7 py-4 shadow-blue"
            >
              Explore Services
              <svg
                className="w-4 h-4 ml-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
            <a
              href="tel:+918087051208"
              className="btn-secondary text-base px-7 py-4"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z" />
              </svg>
              Get Free Consultation
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={staggerMed}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6"
          >
            {stats.map((stat) => (
              <motion.div
                key={stat.label}
                variants={staggerItem}
                className="bg-white rounded-2xl border border-slate-100 shadow-card px-5 py-6 text-center group hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300"
              >
                <div className="text-2xl mb-2">{stat.icon}</div>
                <div className="font-display text-3xl lg:text-4xl font-black text-slate-900 mb-1">
                  <CountUp
                    target={stat.target}
                    suffix={stat.suffix}
                    prefix={stat.prefix || ""}
                    duration={2200}
                  />
                </div>
                <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
