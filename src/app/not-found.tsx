import Link from 'next/link'
import type { Metadata } from 'next'
import { constructMetadata } from '@/lib/siteConfig'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = constructMetadata({
  title: 'Page Not Found | Atlas Security NZ',
  description: 'The requested page could not be found. Explore security guard services, mobile patrols, and alarm monitoring across New Zealand.',
  noIndex: true,
})

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#0a1628] flex items-center justify-center py-32 px-6 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
        />

        <div className="max-w-xl mx-auto text-center relative z-10">
          <p className="text-[#3b5fd9] font-extrabold text-7xl lg:text-9xl mb-4 tracking-tighter">404</p>
          <h1 className="text-3xl lg:text-4xl font-extrabold text-white mb-4">Page Not Found</h1>
          <p className="text-gray-300 text-base leading-relaxed mb-8">
            The security page or resource you are looking for does not exist or has been relocated. Discover our core security services or get in touch with our team.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10 text-left">
            <Link
              href="/services"
              className="p-4 bg-white/5 border border-white/10 rounded-xl hover:border-[#1e40af] hover:bg-white/10 transition-all group"
            >
              <p className="text-white font-bold text-sm mb-1 group-hover:text-[#3b5fd9] transition-colors">
                Security Services →
              </p>
              <p className="text-gray-400 text-xs">Static guarding, mobile patrols & alarm monitoring.</p>
            </Link>

            <Link
              href="/service-area"
              className="p-4 bg-white/5 border border-white/10 rounded-xl hover:border-[#1e40af] hover:bg-white/10 transition-all group"
            >
              <p className="text-white font-bold text-sm mb-1 group-hover:text-[#3b5fd9] transition-colors">
                Service Areas →
              </p>
              <p className="text-gray-400 text-xs">Coverage across Auckland, Hamilton & Wellington.</p>
            </Link>

            <Link
              href="/blog"
              className="p-4 bg-white/5 border border-white/10 rounded-xl hover:border-[#1e40af] hover:bg-white/10 transition-all group"
            >
              <p className="text-white font-bold text-sm mb-1 group-hover:text-[#3b5fd9] transition-colors">
                Security Blog →
              </p>
              <p className="text-gray-400 text-xs">Industry news, theft prevention & guides.</p>
            </Link>

            <Link
              href="/contact"
              className="p-4 bg-white/5 border border-white/10 rounded-xl hover:border-[#1e40af] hover:bg-white/10 transition-all group"
            >
              <p className="text-white font-bold text-sm mb-1 group-hover:text-[#3b5fd9] transition-colors">
                Contact Us →
              </p>
              <p className="text-gray-400 text-xs">Request a free security consultation & quote.</p>
            </Link>
          </div>

          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-[#1e40af] hover:bg-[#2747c4] text-white font-bold px-8 py-3.5 rounded-lg text-sm transition-colors shadow-lg shadow-[#1e40af]/30"
          >
            ← Return to Homepage
          </Link>
        </div>
      </main>
      <Footer />
    </>
  )
}
