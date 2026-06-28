import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-[#0a1628] border-t border-white/10">
      <div className="container mx-auto px-6 lg:px-16 py-12 lg:py-14">

        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 lg:gap-10">

          {/* Brand — full width on mobile, normal on md+ */}
          <div className="col-span-2 md:col-span-1">
            <p className="text-white font-extrabold text-xl mb-3">
              ATLAS <span className="text-[#1e40af]">SECURITY</span>
            </p>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Professional and reliable security services across New Zealand. NZ Owned & Operated.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <p className="text-white font-bold text-sm uppercase tracking-wider mb-4">Quick Links</p>
            <ul className="space-y-2.5">
              {[
                { label: 'Home',     href: '/'         },
                { label: 'About Us', href: '/about'    },
                { label: 'Services', href: '/services' },
                { label: 'Careers',  href: '/careers'  },
                { label: 'Blog',     href: '/blog'     },
                { label: 'Contact',  href: '/contact'  },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-white font-bold text-sm uppercase tracking-wider mb-4">Contact</p>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="tel:+64 221993486" className="text-gray-400 hover:text-white transition-colors">
                  +64 22 199 3486
                </a>
              </li>
              <li>
                <a href="mailto:info@atlassecurity.co.nz" className="text-gray-400 hover:text-white transition-colors break-all">
                  info@atlassecurity.co.nz
                </a>
              </li>
              <li className="text-gray-400">Hamilton, New Zealand</li>
            </ul>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 mt-10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-2">
          <p className="text-gray-500 text-xs text-center sm:text-left">
            © 2026 Atlas Security NZ. All rights reserved.
          </p>
          <p className="text-gray-600 text-xs">
            Built by <span className="text-gray-400">Zedlabs Studio</span>
          </p>
        </div>

      </div>
    </footer>
  )
}