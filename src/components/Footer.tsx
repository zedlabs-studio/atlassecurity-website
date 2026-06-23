import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-[#0a1628] border-t border-white/10">
      <div className="container mx-auto px-6 lg:px-16 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <p className="text-white font-extrabold text-xl mb-3">ATLAS <span className="text-[#1e40af]">SECURITY</span></p>
            <p className="text-gray-400 text-sm leading-relaxed">Professional and reliable security services across New Zealand. NZ Owned & Operated.</p>
          </div>
          <div>
            <p className="text-white font-bold text-sm uppercase tracking-wider mb-4">Quick Links</p>
            <ul className="space-y-2.5">
              {[
                { label: 'Home', href: '/'},
                { label: 'About Us', href: '/about'},
                { label: 'Services', href: '/services'},
                { label: 'Careers', href: '/careers'},
                { label: 'Blog', href: '/blog'},
                { label: 'Contact', href: '/contact'},
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              )) 
              }  
              {/* {['Home', 'About Us', 'Services', 'Careers', 'Blog', 'Contact'].map((l) => (
                <li key={l}>
                  <Link href={`/${l.toLowerCase().replace(' ', '-')}`} className="text-gray-400 hover:text-white text-sm transition-colors">
                    {l}
                  </Link>
                </li>
              ))} */}
            </ul>
          </div>
          <div>
            <p className="text-white font-bold text-sm uppercase tracking-wider mb-4">Contact</p>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li>022 199 3486</li>
              <li>info@atlassecurity.co.nz</li>
              <li>Auckland, New Zealand</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 mt-10 pt-6 flex justify-between items-center">
          <p className="text-gray-500 text-xs">© 2026 Atlas Security NZ. All rights reserved.</p>
          <p className="text-gray-600 text-xs">Built by <span className="text-gray-400">Zedlabs Studio</span></p>
        </div>
      </div>
    </footer>
  )
}