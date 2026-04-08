import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";
import Hero from "../components/Hero";
import ServiceCard from "../components/ServiceCard";
import CTASection from "../components/CTASection";
import { services } from "../data/services";
import { homePreviewCases, clients } from "../data/caseStudies";
import {
  fadeUp,
  fadeLeft,
  fadeRight,
  viewportOnce,
} from "../animations/fadeUp";
import { staggerFast, staggerMed, staggerItem } from "../animations/stagger";

// — Clients Ticker —
const clientLogos = [
  "/assets/logos/KAIZEN SOLUTIONS.png",
  "/assets/logos/MYORL-CARE.png",
  "/assets/logos/NETHORITY.png",
  "/assets/logos/ROONGTA GROUP.png",
  "/assets/logos/SOMA VINE.png",
  "/assets/logos/TIMUS LIFESTYLE.png",
  "/assets/logos/WELD TECH.png.png",
  "/assets/logos/WHIZKIDS.png",
  "/assets/logos/fizzyfox logo.png",
  "/assets/logos/silverbells.png",
];

function ClientsTicker() {
  const doubled = [...clientLogos, ...clientLogos];
  return (
    <section
      className="py-16 bg-surface-container-low overflow-hidden"
      aria-label="Our trusted clients"
    >
      <div className="max-w-7xl mx-auto px-8 mb-10 text-center">
        <span className="section-label">Trusted By</span>
        <h2 className="font-sora font-bold text-2xl text-on-surface">
          Our Clients
        </h2>
      </div>
      <div className="relative overflow-hidden">
        <div className="flex ticker-track gap-16 items-center">
          {doubled.map((logo, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.15 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
              className="flex-shrink-0 flex items-center justify-center p-2 transition-all duration-300 cursor-pointer"
            >
              <img
                src={logo}
                alt={`Client: ${logo
                  .split("/")
                  .pop()
                  .replace(/\.(png|jpg|jpeg|svg)$/i, "")
                  .replace(/[-_]/g, " ")}`}
                className="h-10 md:h-14 w-auto object-contain max-w-[180px]"
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// — Case Study: Networking (editorial split) —
function NetworkingCaseStudy() {
  return (
    <section className="py-24 lg:py-32 bg-surface-container-low">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Image side */}
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="order-2 lg:order-1"
          >
            <div className="relative">
              <div className="absolute -top-8 -left-8 w-32 h-32 bg-primary/10 -z-10 rounded-full" />
              <div className="w-full aspect-video lg:aspect-square rounded-xl overflow-hidden shadow-ambient bg-surface-container-high">
                <img
                  src="/assets/networking.png"
                  alt="Enterprise networking infrastructure"
                  className="w-full h-full object-cover"
                  loading="lazy"
                  onError={(e) => {
                    e.target.style.display = "none";
                    e.target.parentElement.classList.add(
                      "flex",
                      "items-center",
                      "justify-center",
                    );
                    const span = document.createElement("span");
                    span.className =
                      "material-symbols-outlined text-[120px] text-outline/20";
                    span.textContent = "cable";
                    e.target.parentElement.appendChild(span);
                  }}
                />
              </div>
              {/* Floating metric */}
              <div className="absolute bottom-6 right-6 bg-surface-container-lowest p-6 rounded-lg shadow-card max-w-xs">
                <span className="text-xs font-bold uppercase tracking-widest text-outline block mb-2">
                  Metrics
                </span>
                <p className="text-2xl font-sora font-bold text-primary">
                  99.99%
                </p>
                <p className="text-sm text-on-surface-variant">
                  Uptime achieved for global enterprise infrastructure.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Text side */}
          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="order-1 lg:order-2"
          >
            <span className="text-sm font-bold text-primary-container mb-4 block uppercase tracking-widest">
              Case Study
            </span>
            <h2 className="text-4xl md:text-5xl font-sora font-bold tracking-tight mb-6 text-on-surface">
              Cognitive Networking Infrastructure
            </h2>
            <p className="text-lg text-on-surface-variant mb-8 leading-relaxed">
              Connectivity is the central nervous system of the modern
              enterprise. We don't just pull cables; we design intelligent,
              self-healing network architectures that scale with your ambition.
            </p>
            <ul className="space-y-4 mb-10">
              {[
                "SD-WAN Optimization",
                "Zero-Trust Architecture",
                "Fiber-Optic Precision Layout",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary/40 shrink-0" />
                  <span className="font-medium text-on-surface-variant">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
            <Link
              to="/case-studies"
              className="inline-flex items-center gap-2 text-primary font-bold hover:gap-4 transition-all"
            >
              View technical breakdown
              <span className="material-symbols-outlined">arrow_forward</span>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// — Services Showcase —
function ServicesSection() {
  return (
    <section className="py-24 lg:py-32 bg-surface" id="services">
      <div className="max-w-7xl mx-auto px-8">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8"
        >
          <div className="max-w-2xl">
            <h2 className="text-5xl font-sora font-extrabold tracking-tighter mb-6 text-on-surface">
              Precision Services for Critical Operations
            </h2>
            <p className="text-xl text-on-surface-variant font-light">
              Combining technical rigor with proactive human oversight to ensure
              total operational continuity.
            </p>
          </div>
        </motion.div>

        <motion.div
          variants={staggerFast}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {services.slice(0, 4).map((service, i) => (
            <ServiceCard key={service.id} service={service} index={i} />
          ))}
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="text-center mt-16"
        >
          <Link to="/services" className="btn-primary px-8 py-4 text-base">
            View All Services
            <span className="material-symbols-outlined text-sm">
              arrow_forward
            </span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

// — Quote Section —
function QuoteSection() {
  return (
    <section className="py-24 lg:py-32 bg-on-surface text-surface">
      <div className="max-w-4xl mx-auto px-8 text-center">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <span className="material-symbols-outlined text-6xl text-primary mb-8 block">
            format_quote
          </span>
          <blockquote className="text-3xl md:text-5xl font-sora font-light italic leading-tight mb-12">
            "Precision is not just about the hardware; it's about the{" "}
            <span className="text-primary-container font-semibold not-italic">
              integrity of the architecture
            </span>{" "}
            that supports the human experience."
          </blockquote>
          <div className="flex items-center justify-center gap-4">
            <div className="w-12 h-12 rounded-full bg-surface-container-high overflow-hidden flex items-center justify-center">
              <span className="material-symbols-outlined text-on-surface text-2xl">
                person
              </span>
            </div>
            <div className="text-left">
              <p className="font-bold text-white">Sameer Agarwal</p>
              <p className="text-sm text-outline">
                Founder & MD, Usha Infotech
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// — Case Studies Preview —
const CASE_TAG_ACCENT = {
  "IT Infrastructure": "#1A6B8A",
  "Security Systems": "#b45309",
  Networking: "#0f766e",
};

function CaseCard({ study }) {
  const color = CASE_TAG_ACCENT[study.tag] ?? "#1A6B8A";

  return (
    <motion.div
      variants={staggerItem}
      whileHover={{
        y: -6,
        transition: { duration: 0.32, ease: [0.22, 1, 0.36, 1] },
      }}
      className="group relative bg-surface-container-lowest rounded-2xl overflow-hidden border border-surface-container-high hover:shadow-[0_20px_48px_rgba(0,0,0,0.08)] transition-shadow duration-400 flex flex-col"
    >
      {/* Top accent line — scales in on hover */}
      <div
        className="h-[3px] w-full origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] shrink-0"
        style={{ backgroundColor: color }}
      />

      <div className="flex flex-col flex-1 p-7">
        {/* Logo + Tag */}
        <div className="flex items-center justify-between mb-6">
          <div className="h-6 flex items-center">
            {study.logo && (
              <img
                src={study.logo}
                alt={study.client}
                className="h-full max-w-[100px] object-contain opacity-55 group-hover:opacity-90 transition-opacity duration-300"
              />
            )}
          </div>
          <span
            className="text-[10px] font-bold uppercase tracking-[0.14em] px-2.5 py-1 rounded-full"
            style={{ color, backgroundColor: color + "14" }}
          >
            {study.tag}
          </span>
        </div>

        {/* Client name */}
        <p className="text-[10px] font-extrabold text-outline uppercase tracking-[0.2em] mb-1.5">
          {study.client}
        </p>

        {/* Title */}
        <h3 className="font-sora font-bold text-[1.05rem] leading-snug text-on-surface mb-3 group-hover:text-primary transition-colors duration-300">
          {study.title}
        </h3>

        {/* Short description */}
        <p className="text-sm text-on-surface-variant leading-relaxed flex-1 mb-7">
          {study.shortDesc}
        </p>

        {/* Divider + CTA */}
        <div className="h-px bg-surface-container-high mb-5" />
        <Link
          to="/case-studies"
          className="text-xs font-bold text-outline group-hover:text-primary transition-colors duration-300 pb-0.5 border-b border-transparent group-hover:border-primary/40 self-start"
        >
          View case study
        </Link>
      </div>
    </motion.div>
  );
}

function CaseStudiesSection() {
  return (
    <section className="py-24 lg:py-32 bg-surface-container-low" id="cases">
      <div className="max-w-7xl mx-auto px-8">
        {/* Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mb-14"
        >
          <div className="max-w-lg">
            <span className="section-label">Client Success Stories</span>
            <h2 className="font-sora font-extrabold text-4xl lg:text-5xl text-on-surface leading-tight">
              Results that speak
              <br />
              <span className="text-primary-container">
                louder than claims.
              </span>
            </h2>
          </div>
        </motion.div>

        {/* Card grid */}
        <motion.div
          variants={staggerMed}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-14"
        >
          {homePreviewCases.map((study) => (
            <CaseCard key={study.client} study={study} />
          ))}
        </motion.div>

        {/* CTAs */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="flex flex-wrap gap-4"
        >
          <a href="tel:+918087051208" className="btn-primary py-4 px-7">
            Get Free IT Consultation
          </a>
          <Link to="/case-studies" className="btn-secondary py-4 px-7">
            View All Stories
            <span className="material-symbols-outlined text-sm">
              arrow_forward
            </span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

// — Process/How We Work —

const processSteps = [
  {
    label: "Consult",
    title: "Free Consultation Call",
    desc: "Call or WhatsApp us to discuss your requirements, timeline, and budget — absolutely no obligations attached.",
  },
  {
    label: "Assess",
    title: "Site Survey & Planning",
    desc: "Our engineers visit your site or do a remote assessment, then deliver a detailed, transparent quotation.",
  },
  {
    label: "Deploy",
    title: "Deployment & Support",
    desc: "Our trained team handles installation end-to-end with post-deployment AMC and 24-hr replacement guarantee.",
  },
];

function ProcessSection() {
  return (
    <section
      className="py-24 lg:py-32 relative overflow-hidden"
      id="process"
      style={{ background: "#0b1520" }}
    >
      {/* Top edge accent line */}
      <div
        className="absolute top-0 left-0 right-0 h-px pointer-events-none"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, #1A6B8A 40%, rgba(26,107,138,0.3) 100%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-8">
        {/* Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mb-20"
        >
          <span
            className="text-xs font-bold uppercase tracking-[0.22em] mb-5 block"
            style={{ color: "#1A6B8A" }}
          >
            How We Work
          </span>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <h2
              className="font-sora font-extrabold text-4xl lg:text-5xl leading-tight text-white max-w-xl"
              style={{ letterSpacing: "-0.02em" }}
            >
              A process built around your{" "}
              <span style={{ color: "#1a9dbb" }}>operational continuity.</span>
            </h2>
            <p
              className="text-sm leading-relaxed lg:max-w-[280px] lg:pb-2"
              style={{ color: "rgba(255,255,255,0.38)" }}
            >
              Every engagement follows a proven three-phase methodology —
              refined over 25 years of on-site delivery across India.
            </p>
          </div>
        </motion.div>

        {/* Steps — 3-column card grid with gap-px dividers */}
        <motion.div
          variants={staggerMed}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-1 md:grid-cols-3 gap-px"
          style={{ background: "rgba(255,255,255,0.07)" }}
        >
          {processSteps.map((step, i) => (
            <motion.div
              key={step.title}
              variants={staggerItem}
              className="group relative flex flex-col p-10 lg:p-12"
              style={{ background: "#0b1520" }}
            >
              {/* Radial hover glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background:
                    "radial-gradient(ellipse 90% 55% at 15% 0%, rgba(26,107,138,0.15) 0%, transparent 100%)",
                }}
              />

              {/* Animated teal entry line */}
              <motion.div
                className="h-[2px] w-full origin-left mb-10"
                style={{
                  background:
                    "linear-gradient(90deg, #1A6B8A 0%, rgba(26,107,138,0.25) 100%)",
                }}
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.9,
                  delay: i * 0.2,
                  ease: [0.22, 1, 0.36, 1],
                }}
              />

              {/* Phase label */}
              <span
                className="text-[10px] font-black uppercase tracking-[0.32em] mb-6"
                style={{ color: "rgba(26,157,187,0.65)" }}
              >
                {step.label}
              </span>

              {/* Title */}
              <h3
                className="font-sora font-bold text-[1.55rem] leading-tight text-white mb-6 group-hover:text-[#62c2d9] transition-colors duration-300"
                style={{ letterSpacing: "-0.02em" }}
              >
                {step.title}
              </h3>

              {/* Expanding separator */}
              <div
                className="h-px mb-7 w-7 group-hover:w-14 transition-all duration-500"
                style={{ background: "rgba(26,107,138,0.55)" }}
              />

              {/* Description */}
              <p
                className="text-sm leading-[1.95]"
                style={{ color: "rgba(255,255,255,0.4)" }}
              >
                {step.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// — Our Story / Founders —
function StorySection() {
  return (
    <section className="py-24 lg:py-32 bg-surface-container-low" id="story">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left: Founders visual */}
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-5 pb-8">
              <div className="group relative bg-surface-container-high rounded-2xl overflow-hidden aspect-[3/4] flex flex-col items-center justify-end pb-4 px-2 sm:pb-6 sm:px-4 text-center">
                <div className="absolute inset-0">
                  <img
                    src="/assets/SameerAgarwal.jpeg"
                    alt="Sameer Agarwal"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="relative z-10 bg-surface-container-lowest/90 backdrop-blur-sm rounded-xl px-2 py-1.5 sm:px-4 sm:py-3">
                  <p className="font-sora font-bold text-on-surface text-xs sm:text-sm">
                    Sameer Agarwal
                  </p>
                  <p className="text-[10px] sm:text-xs text-primary font-semibold uppercase tracking-wide">
                    Founder & MD
                  </p>
                </div>
              </div>
              <div className="group relative bg-surface-container-high rounded-2xl overflow-hidden aspect-[3/4] flex flex-col items-center justify-end pb-4 px-2 sm:pb-6 sm:px-4 text-center">
                <div className="absolute inset-0">
                  <img
                    src="/assets/EktaAgarwal.jpeg"
                    alt="Ekta Agarwal"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="relative z-10 bg-surface-container-lowest/90 backdrop-blur-sm rounded-xl px-2 py-1.5 sm:px-4 sm:py-3">
                  <p className="font-sora font-bold text-on-surface text-xs sm:text-sm">
                    Ekta Agarwal
                  </p>
                  <p className="text-[10px] sm:text-xs text-primary font-semibold uppercase tracking-wide">
                    Co-Founder & Director
                  </p>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-on-surface text-white rounded-2xl px-3 py-2 sm:px-6 sm:py-3 shadow-lg flex items-center gap-3 w-max max-w-[90vw]">
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="font-sora font-bold text-xs sm:text-sm tracking-wide">
                Since 2000 &middot; 25+ Years
              </span>
            </div>
          </motion.div>

          {/* Right: Story content */}
          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            <span className="section-label">Our Story</span>
            <h2 className="font-sora font-extrabold text-4xl lg:text-5xl xl:text-6xl text-on-surface leading-tight mb-6">
              Built on one promise
              <br />
              <span className="text-primary-container">since 2000.</span>
            </h2>
            <p className="text-on-surface-variant text-base leading-relaxed mb-6">
              What started as a small computer shop in Nashik has grown into a
              leading pan-India IT solutions provider. For over 25 years, our
              journey has been defined by a relentless focus on reliability and
              customer-first service.
            </p>

            <blockquote className="relative pl-6 py-2 mb-8 bg-primary/5 rounded-r-xl pr-6 border-l-4 border-primary">
              <p className="text-on-surface text-base italic leading-relaxed font-medium">
                "We don't just install technology. We make sure it works on the
                day you need it most."
              </p>
              <cite className="text-sm text-primary font-bold not-italic mt-2 block">
                — Sameer Agarwal, Founder
              </cite>
            </blockquote>

            <p className="text-on-surface-variant text-sm leading-relaxed mb-8">
              Today, we manage IT infrastructure for over 500+ global
              enterprises, ensuring their business stays connected, secure, and
              ready for the future.
            </p>

            <div className="grid grid-cols-3 gap-4">
              {[
                { val: "25+", label: "Years" },
                { val: "500+", label: "Clients" },
                { val: "Pan-India", label: "Reach" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="bg-surface-container-lowest rounded-xl p-4 text-center"
                >
                  <div className="font-sora font-black text-2xl text-on-surface">
                    {item.val}
                  </div>
                  <div className="text-xs text-outline font-semibold uppercase tracking-wide mt-1">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <SEO
        path="/"
        description="Usha Infotech — Nashik's trusted IT solutions provider since 2000. Enterprise hardware, CCTV, networking, AMC and IT rentals across India."
      />
      <Hero />
      <ClientsTicker />
      <NetworkingCaseStudy />
      <ServicesSection />
      <QuoteSection />
      <CaseStudiesSection />
      <ProcessSection />
      <StorySection />
      <CTASection />
    </>
  );
}
