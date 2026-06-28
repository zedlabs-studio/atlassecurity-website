'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

const COVERED_CITIES = [
  // Primary hubs
  { name: 'Hamilton',        lat: -37.7870, lng: 175.2793, primary: true,  detail: 'Head office & primary coverage'   },
  { name: 'Auckland',        lat: -36.8485, lng: 174.7633, primary: true,  detail: 'Static guard & mobile patrol'     },
  { name: 'Wellington',      lat: -41.2865, lng: 174.7762, primary: true,  detail: 'Static guard & mobile patrol'     },
  // Secondary cities
  { name: 'Tauranga',        lat: -37.6870, lng: 176.1654, primary: false, detail: 'Mobile patrol' },
  { name: 'Rotorua',         lat: -38.1368, lng: 176.2497, primary: false, detail: 'Mobile patrol' },
  { name: 'Napier',          lat: -39.4928, lng: 176.9120, primary: false, detail: 'Mobile patrol' },
  { name: 'Hastings',        lat: -39.6386, lng: 176.8402, primary: false, detail: 'Mobile patrol' },
  { name: 'New Plymouth',    lat: -39.0556, lng: 174.0752, primary: false, detail: 'Mobile patrol' },
  { name: 'Whanganui',       lat: -39.9301, lng: 175.0472, primary: false, detail: 'Mobile patrol' },
  { name: 'Palmerston North',lat: -40.3523, lng: 175.6082, primary: false, detail: 'Mobile patrol' },
  { name: 'Whangarei',       lat: -35.7275, lng: 174.3166, primary: false, detail: 'Mobile patrol' },
  { name: 'Cambridge',       lat: -37.8893, lng: 175.4746, primary: false, detail: 'Mobile patrol' },
  { name: 'Te Awamutu',      lat: -38.0093, lng: 175.3260, primary: false, detail: 'Mobile patrol' },
  { name: 'Huntly',          lat: -37.5594, lng: 175.1568, primary: false, detail: 'Mobile patrol' },
  { name: 'Ngaruawahia',     lat: -37.6697, lng: 175.1547, primary: false, detail: 'Mobile patrol' },
  { name: 'Morrinsville',    lat: -37.6506, lng: 175.5333, primary: false, detail: 'Mobile patrol' },
]

const PRIMARY_CITIES   = COVERED_CITIES.filter(c => c.primary)
const SECONDARY_CITIES = COVERED_CITIES.filter(c => !c.primary)

const fadeUp = {
  hidden:  { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as const } },
}
const stagger = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.08 } },
}

function CoverageMap() {
  const mapRef     = useRef<HTMLDivElement>(null)
  const leafletRef = useRef<unknown>(null)

  useEffect(() => {
    if (!mapRef.current || leafletRef.current) return

    Promise.all([
      import('leaflet'),
      import('leaflet/dist/leaflet.css' as string),
    ]).then(([L]) => {
      if (!mapRef.current || leafletRef.current) return

      const map = L.default.map(mapRef.current, {
        center:             [-38.5, 175.8],
        zoom:               6,
        zoomControl:        true,
        scrollWheelZoom:    false,
        attributionControl: true,
      })

      leafletRef.current = map

      L.default.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        maxZoom: 18,
      }).addTo(map)

      function makeIcon(primary: boolean) {
        const size  = primary ? 36 : 28
        const color = primary ? '#1e40af' : '#3b6fd4'
        const svg   = `
          <svg width="${size}" height="${size}" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">
            <circle cx="18" cy="18" r="17" fill="${color}" stroke="white" stroke-width="2.5"/>
            <circle cx="18" cy="18" r="6" fill="white"/>
            ${primary ? `<circle cx="18" cy="18" r="3" fill="${color}"/>` : ''}
          </svg>`
        return L.default.divIcon({
          html:        svg,
          className:   '',
          iconSize:    [size, size],
          iconAnchor:  [size / 2, size / 2],
          popupAnchor: [0, -(size / 2 + 4)],
        })
      }

      COVERED_CITIES.forEach(city => {
        L.default.marker([city.lat, city.lng], { icon: makeIcon(city.primary) })
          .addTo(map)
          .bindPopup(`
            <div style="font-family:Arial,sans-serif;min-width:140px">
              <p style="margin:0 0 4px;font-weight:700;font-size:14px;color:#0a1628">${city.name}</p>
              <p style="margin:0;font-size:12px;color:#6b7280">${city.detail}</p>
              ${city.primary ? `<span style="display:inline-block;margin-top:6px;background:#1e40af;color:white;font-size:10px;font-weight:700;padding:2px 8px;border-radius:999px">Primary Hub</span>` : ''}
            </div>
          `, { maxWidth: 200 })
      })
    })

    return () => {
      if (leafletRef.current) {
        ;(leafletRef.current as { remove: () => void }).remove()
        leafletRef.current = null
      }
    }
  }, [])

  return (
    <div
      ref={mapRef}
      className="w-full"
      style={{ height: '100%', minHeight: 600 }}
      aria-label="Map showing Atlas Security coverage areas across the North Island of New Zealand"
    />
  )
}

export default function ServiceAreaPage() {
  return (
    <main className="overflow-x-hidden">

      {/* ── Hero ── */}
      <section className="bg-[#0a1628] py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: 'linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)', backgroundSize: '50px 50px' }} />
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#1e40af] rounded-full blur-[140px] opacity-10 pointer-events-none" />

        <div className="container mx-auto px-6 lg:px-16 relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <p className="text-gray-400 text-sm mb-3">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span className="mx-2">/</span>
              <span className="text-white">Service Area</span>
            </p>
            <p className="text-[#1e40af] font-semibold text-sm uppercase tracking-widest mb-4 flex items-center gap-2">
              <span className="w-8 h-px bg-[#1e40af]" />
              Where We Operate
            </p>
            <h1 className="text-4xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight">
              Protecting the North Island.<br />
              <span className="text-[#1e40af]">City by City.</span>
            </h1>
            <p className="text-gray-300 mt-4 text-lg max-w-xl leading-relaxed">
              Atlas Security covers Auckland, Wellington, Hamilton, and every major city and
              town across the North Island — wherever your business operates, we have boots
              on the ground.
            </p>
            <div className="w-14 h-1 bg-[#1e40af] rounded mt-6" />
          </motion.div>

          <motion.div
            className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-12"
            initial="hidden" animate="visible" variants={stagger}
          >
            {[
              { value: '16+',  label: 'Cities & towns covered' },
              { value: '3',    label: 'Primary hubs'            },
              { value: '24/7', label: 'Response availability'   },
              { value: 'NZ',   label: 'Owned & operated'        },
            ].map((s, i) => (
              <motion.div key={i} variants={fadeUp}
                className="bg-white/5 border border-white/10 rounded-xl px-5 py-4">
                <p className="text-2xl font-extrabold text-white">{s.value}</p>
                <p className="text-gray-400 text-xs mt-0.5">{s.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Map + sidebar ── */}
      <section className="bg-[#f8f9fa] py-16">
        <div className="container mx-auto px-6 lg:px-16">
          <div className="flex flex-col xl:flex-row gap-8">

            {/* Map — explicit height so the child div has something to fill against */}
            <motion.div
              className="flex-1 rounded-2xl overflow-hidden shadow-lg border border-gray-200"
              style={{ height: 600 }}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <CoverageMap />
            </motion.div>

            <motion.div
              className="xl:w-80 shrink-0 flex flex-col gap-5"
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
            >
              {/* Primary hubs */}
              <motion.div variants={fadeUp} className="bg-[#0d1f3c] border border-white/10 rounded-2xl p-6">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-[#1e40af]" />
                  <p className="text-white font-bold text-sm uppercase tracking-wider">Primary Hubs</p>
                </div>
                <div className="space-y-3">
                  {PRIMARY_CITIES.map(city => (
                    <div key={city.name} className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-[#1e40af] flex items-center justify-center shrink-0 mt-0.5 text-white font-bold text-xs">
                        {city.name.charAt(0)}
                      </div>
                      <div>
                        <p className="text-white font-semibold text-sm">{city.name}</p>
                        <p className="text-gray-400 text-xs">{city.detail}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Secondary cities */}
              <motion.div variants={fadeUp} className="bg-white border border-gray-200 rounded-2xl p-6">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-[#3b6fd4]" />
                  <p className="text-[#0a1628] font-bold text-sm uppercase tracking-wider">Also Covered</p>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {SECONDARY_CITIES.map(city => (
                    <div key={city.name} className="flex items-center gap-2 py-1.5 px-2 rounded-lg hover:bg-gray-50 transition-colors">
                      <svg width="8" height="8" viewBox="0 0 8 8"><circle cx="4" cy="4" r="4" fill="#3b6fd4"/></svg>
                      <span className="text-[#0a1628] text-sm font-medium">{city.name}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Legend */}
              <motion.div variants={fadeUp} className="bg-white border border-gray-200 rounded-2xl p-5">
                <p className="text-[#0a1628] font-bold text-sm mb-3">Map Legend</p>
                <div className="space-y-2.5">
                  <div className="flex items-center gap-3">
                    <svg width="20" height="20" viewBox="0 0 36 36"><circle cx="18" cy="18" r="17" fill="#1e40af" stroke="white" strokeWidth="2.5"/><circle cx="18" cy="18" r="6" fill="white"/><circle cx="18" cy="18" r="3" fill="#1e40af"/></svg>
                    <span className="text-gray-600 text-sm">Primary hub — full-service coverage</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <svg width="16" height="16" viewBox="0 0 36 36"><circle cx="18" cy="18" r="17" fill="#3b6fd4" stroke="white" strokeWidth="2.5"/><circle cx="18" cy="18" r="6" fill="white"/></svg>
                    <span className="text-gray-600 text-sm">Service city — patrol coverage</span>
                  </div>
                </div>
              </motion.div>

              {/* CTA */}
              <motion.div variants={fadeUp} className="bg-[#1e40af] rounded-2xl p-6 text-center">
                <p className="text-white font-bold text-base mb-1">Not on the list?</p>
                <p className="text-blue-200 text-sm mb-4">We're expanding across New Zealand. Get in touch — we may be able to accommodate your location.</p>
                <Link href="/contact"
                  className="inline-flex items-center gap-2 bg-white text-[#1e40af] font-bold px-6 py-2.5 rounded-lg text-sm hover:bg-blue-50 transition-colors">
                  Contact Us
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── City detail cards ── */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-6 lg:px-16">
          <motion.div className="text-center mb-12"
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <p className="text-[#1e40af] font-semibold text-sm uppercase tracking-widest mb-3">Coverage Details</p>
            <h2 className="text-3xl font-extrabold text-[#0a1628] tracking-tight">Our Covered Locations</h2>
            <div className="w-14 h-1 bg-[#1e40af] mx-auto mt-4 rounded" />
          </motion.div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
          >
            {COVERED_CITIES.map((city, i) => (
              <motion.div key={i} variants={fadeUp}
                className={`relative rounded-xl p-5 border group hover:-translate-y-1 transition-all duration-300 ${
                  city.primary
                    ? 'bg-[#0d1f3c] border-[#1e40af]/30 hover:border-[#1e40af]'
                    : 'bg-[#f8f9fa] border-gray-200 hover:border-[#1e40af]/40 hover:bg-white hover:shadow-md'
                }`}
              >
                {city.primary && (
                  <span className="absolute top-3 right-3 text-xs bg-[#1e40af] text-white px-2 py-0.5 rounded-full font-semibold">
                    Primary
                  </span>
                )}
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm mb-3 ${
                  city.primary ? 'bg-[#1e40af] text-white' : 'bg-[#1e40af]/10 text-[#1e40af]'
                }`}>
                  {city.name.charAt(0)}
                </div>
                <p className={`font-extrabold text-sm mb-1 ${city.primary ? 'text-white' : 'text-[#0a1628]'}`}>
                  {city.name}
                </p>
                <p className={`text-xs leading-snug ${city.primary ? 'text-gray-400' : 'text-gray-500'}`}>
                  {city.detail}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Bottom CTA ── */}
      <section className="bg-[#0a1628] py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]"
          style={{ backgroundImage: 'linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)', backgroundSize: '40px 40px' }} />
        <div className="container mx-auto px-6 lg:px-16 text-center relative z-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-3xl font-extrabold text-white mb-3">Ready to secure your premises?</h2>
            <p className="text-gray-400 mb-8 max-w-lg mx-auto">
              Contact us for a free consultation and site assessment — no obligation, same-day response.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/contact"
                className="inline-flex items-center gap-2 bg-[#1e40af] hover:bg-[#1d3a9e] text-white font-bold px-8 py-4 rounded transition-all duration-200 hover:shadow-lg hover:shadow-[#1e40af]/30 hover:-translate-y-0.5">
                Get a Free Quote
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </Link>
              <a href="tel:02219934866"
                className="inline-flex items-center gap-2 border border-white/20 hover:border-white/50 text-white font-semibold px-8 py-4 rounded transition-all duration-200 hover:-translate-y-0.5">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.62 3.41 2 2 0 0 1 3.6 1.21h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.81a16 16 0 0 0 6 6l.92-.92a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.5 16z"/>
                </svg>
                022 199 3486
              </a>
            </div>
          </motion.div>
        </div>
      </section>

    </main>
  )
}