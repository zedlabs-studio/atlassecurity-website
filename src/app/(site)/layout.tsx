import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { GoogleAnalytics } from '@next/third-parties/google'
import WhatsAppButton from '@/components/WhatsAppButton'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Atlas Security NZ | Professional Security Services',
  description: 'Atlas Security NZ provides professional static guard and mobile patrol security services across New Zealand.',
  verification: {
    google: '9f2wnKUTsD5YdHHVkAStw3EXxjDZgLDhCH9pK2i76Vo',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
        <WhatsAppButton />
        <GoogleAnalytics gaId="G-PN533SHQG2" />
      </body>
    </html>
  )
}