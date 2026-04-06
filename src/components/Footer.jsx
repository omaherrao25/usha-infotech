import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-slate-950 w-full py-20 text-slate-400 font-manrope text-sm leading-relaxed" role="contentinfo">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 max-w-7xl mx-auto px-8">
        <div className="col-span-1 md:col-span-1">
          <span className="text-2xl font-extrabold text-white mb-4 block font-sora">Usha Infotech</span>
          <p className="mb-6">
            Engineering precision for the digital age. We provide the physical backbone for the world's most demanding computational tasks.
          </p>
          <div className="flex gap-4">
            <a
              href="https://www.facebook.com/ushainfotech01/"
              target="_blank"
              rel="noopener noreferrer"
              className="material-symbols-outlined hover:text-white cursor-pointer transition-colors"
              aria-label="Facebook"
            >
              share
            </a>
            <a
              href="https://www.instagram.com/usha_infotech/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="material-symbols-outlined hover:text-white cursor-pointer transition-colors"
              aria-label="Instagram"
            >
              public
            </a>
            <a
              href="mailto:sales.ushainfocom@gmail.com"
              className="material-symbols-outlined hover:text-white cursor-pointer transition-colors"
              aria-label="Email"
            >
              mail
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Services</h4>
          <ul className="space-y-4">
            {['Cloud Architecture', 'Cybersecurity', 'Data Strategy', 'Network Design'].map((item) => (
              <li key={item}>
                <Link
                  to="/services"
                  className="hover:text-indigo-400 hover:translate-x-1 transition-all duration-300 block"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Resources</h4>
          <ul className="space-y-4">
            {[
              { label: 'Case Studies', href: '/case-studies' },
              { label: 'Products', href: '/products' },
              { label: 'Privacy Policy', href: '#' },
              { label: 'Terms of Service', href: '#' },
            ].map((item) => (
              <li key={item.label}>
                <Link
                  to={item.href}
                  className="hover:text-indigo-400 hover:translate-x-1 transition-all duration-300 block"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Contact</h4>
          <address className="not-italic space-y-4">
            <p>
              Shop No 5, Damodar Chambers,<br />
              CBS, Shalimar, Nashik,<br />
              MH 422001
            </p>
            <p className="text-white font-bold">+91 8087051208</p>
            <p className="text-indigo-400">sales.ushainfocom@gmail.com</p>
          </address>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-8 mt-20 pt-8 border-t border-slate-800 flex flex-col sm:flex-row justify-between items-center gap-4">
        <p>&copy; {new Date().getFullYear()} Usha Infotech. Engineering Precision.</p>
        <p className="text-xs uppercase tracking-wider">Precision &middot; Stability &middot; Scale</p>
      </div>
    </footer>
  )
}
