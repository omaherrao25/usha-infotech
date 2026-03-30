import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { staggerMed, staggerItem } from '../animations/stagger'
import { viewportOnce } from '../animations/fadeUp'

const footerLinks = {
  Services: [
    { label: 'IT Infrastructure', href: '/services#infrastructure' },
    { label: 'Hardware Supply', href: '/services#hardware' },
    { label: 'Security Systems', href: '/services#security' },
    { label: 'Enterprise Networking', href: '/services#networking' },
    { label: 'IT Rentals & AMC', href: '/services#rentals' },
    { label: 'B2B Contracting', href: '/services#b2b' },
  ],
  Company: [
    { label: 'About Us', href: '/#story' },
    { label: 'Our Process', href: '/#process' },
    { label: 'Case Studies', href: '/case-studies' },
    { label: 'Products', href: '/products' },
    { label: 'Contact', href: 'tel:+918087051208' },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300">
      {/* Top CTA strip */}
      <div className="border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <p className="text-slate-400 text-sm font-semibold uppercase tracking-widest mb-2">
                Ready to get started?
              </p>
              <h3 className="font-display text-3xl lg:text-4xl font-bold text-white">
                Let's switch you{' '}
                <span className="gradient-text">on.</span>
              </h3>
            </div>
            <div className="flex flex-wrap gap-4">
              <a
                href="tel:+918087051208"
                className="inline-flex items-center gap-2 bg-white text-slate-900 px-6 py-3 rounded-xl font-semibold text-sm hover:bg-blue-600 hover:text-white transition-all duration-200"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/>
                </svg>
                Call Now
              </a>
              <a
                href="https://wa.me/918087051208"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-slate-600 text-slate-300 px-6 py-3 rounded-xl font-semibold text-sm hover:border-green-500 hover:text-green-400 transition-all duration-200"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main footer grid */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <img src="/logo.png" alt="Usha Infotech" className="h-12 w-auto object-contain brightness-0 invert" />
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Nashik's leading IT solutions provider with a national reach. 25 years of excellence in infrastructure, hardware, and managed IT support.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://www.facebook.com/ushainfotech01/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-blue-600 hover:text-white transition-all text-sm font-bold"
              >
                f
              </a>
              <a
                href="https://www.instagram.com/usha_infotech/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-pink-600 hover:text-white transition-all text-sm font-bold"
              >
                ig
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-bold text-white text-sm uppercase tracking-widest mb-6">
              Services
            </h4>
            <nav className="flex flex-col gap-3">
              {footerLinks.Services.map((link) => (
                <Link
                  key={link.label}
                  to={link.href}
                  className="text-slate-400 text-sm hover:text-white transition-colors hover:translate-x-1 inline-block"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-display font-bold text-white text-sm uppercase tracking-widest mb-6">
              Company
            </h4>
            <nav className="flex flex-col gap-3">
              {footerLinks.Company.map((link) => (
                <Link
                  key={link.label}
                  to={link.href}
                  className="text-slate-400 text-sm hover:text-white transition-colors hover:translate-x-1 inline-block"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-bold text-white text-sm uppercase tracking-widest mb-6">
              Contact Info
            </h4>
            <div className="flex flex-col gap-4 text-sm text-slate-400">
              <div className="flex items-start gap-3">
                <span className="mt-0.5 text-blue-400 text-base">📍</span>
                <p className="leading-relaxed">
                  Shop No 5, Damodar Chambers,<br />
                  Old Kanherewadi, CBS, Shalimar,<br />
                  Nashik, MH 422001
                </p>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-blue-400 text-base">🕐</span>
                <p>Mon – Sat : 10:00 AM – 8:30 PM</p>
              </div>
              <div className="flex flex-col gap-2">
                <a href="tel:+918087051208" className="flex items-center gap-3 hover:text-white transition-colors">
                  <span className="text-blue-400 text-base">📞</span>
                  +91 8087051208
                </a>
                <a href="tel:+919422251208" className="flex items-center gap-3 hover:text-white transition-colors">
                  <span className="text-blue-400 text-base">📞</span>
                  +91 9422251208
                </a>
              </div>
              <a
                href="mailto:sales.ushainfocom@gmail.com"
                className="flex items-center gap-3 hover:text-white transition-colors"
              >
                <span className="text-blue-400 text-base">✉️</span>
                sales.ushainfocom@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-xs tracking-wider uppercase">
            © 2026 Usha Infotech. All Rights Reserved.
          </p>
          <div className="flex items-center gap-2 text-slate-600 text-xs">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            Pan-India IT Support · Since 2000
          </div>
        </div>
      </div>
    </footer>
  )
}
