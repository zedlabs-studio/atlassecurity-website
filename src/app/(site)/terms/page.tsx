'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import type { Variants } from 'framer-motion'

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] } },
}

function PageHero({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <section className="bg-[#0a1628] py-16 lg:py-20 relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
          backgroundSize: '50px 50px',
        }}
      />
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#1e40af] rounded-full filter blur-[120px] opacity-10 pointer-events-none" />
      <div className="container mx-auto px-6 lg:px-16 relative z-10">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <p className="text-gray-400 text-sm mb-3">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-white">{title}</span>
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">{title}</h1>
          {subtitle && <p className="text-gray-300 mt-3 text-base lg:text-lg max-w-xl">{subtitle}</p>}
          <div className="w-14 h-1 bg-[#1e40af] rounded mt-5" />
        </motion.div>
      </div>
    </section>
  )
}

export default function TermsPage() {
  return (
    <main className="overflow-x-hidden bg-white">
      <PageHero
        title="Terms & Conditions"
        subtitle="Clear, transparent guidelines for our security partnership."
      />

      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-6 lg:px-16">
          <motion.div
            className="max-w-4xl mx-auto"
            initial="hidden"
            animate="visible"
            variants={fadeUp}
          >
            {/* ── Important Notice Callout ── */}
            <div className="bg-blue-50 border-l-4 border-[#1e40af] p-6 lg:p-8 rounded-r-xl mb-12 shadow-sm">
              <h3 className="font-extrabold text-[#0a1628] text-lg mb-2 flex items-center gap-2">
                <svg className="w-5 h-5 text-[#1e40af]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
                Important Notice
              </h3>
              <p className="text-gray-700 leading-relaxed text-sm lg:text-base">
                Acceptance of any quotation, purchase order, work order, commencement of services, or continued use of Atlas Security's services constitutes acceptance of these Terms and Conditions unless otherwise agreed in writing by both parties.
              </p>
            </div>

            {/* ── 1. Core Framework & Agreements ── */}
            <div className="mb-12">
              <h2 className="text-2xl lg:text-3xl font-extrabold text-[#0a1628] mb-6 pb-4 border-b border-gray-100">
                1. Core Framework & Agreements
              </h2>
              
              <h3 className="text-xl font-bold text-[#1e40af] mt-8 mb-3">1.1 Definitions</h3>
              <ul className="space-y-3 text-gray-600 ml-4 mb-6">
                <li className="flex gap-2">
                  <span className="text-[#1e40af] mt-1">•</span>
                  <span><strong>Company:</strong> Means Atlas Security Limited.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-[#1e40af] mt-1">•</span>
                  <span><strong>Client:</strong> Means the person or organisation engaging Atlas Security Limited.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-[#1e40af] mt-1">•</span>
                  <span><strong>Services:</strong> Means any security services provided by Atlas Security Limited, including but not limited to static guarding, mobile patrols, alarm response, lock-up/unlock services, event security, construction site security, retail security, and concierge services.</span>
                </li>
              </ul>

              <h3 className="text-xl font-bold text-[#1e40af] mt-8 mb-3">1.2 Entire Agreement</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                These Terms and Conditions, together with the quotation, service agreement, or Schedule of Services, constitute the entire agreement between Atlas Security and the Client and supersede all previous discussions, negotiations, representations, or agreements relating to the Services.
              </p>

              <h3 className="text-xl font-bold text-[#1e40af] mt-8 mb-3">1.3 Variations</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Any variation to the agreed services must be confirmed in writing by both parties.
              </p>
            </div>

            {/* ── 2. Scope & Operational Specifics ── */}
            <div className="mb-12">
              <h2 className="text-2xl lg:text-3xl font-extrabold text-[#0a1628] mb-6 pb-4 border-b border-gray-100">
                2. Scope & Operational Specifics
              </h2>
              
              <h3 className="text-xl font-bold text-[#1e40af] mt-8 mb-3">2.1 Scope of Services</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Atlas Security will provide the services detailed in the quotation, service agreement, or work order. Any additional services requested by the Client may incur additional charges.
              </p>

              <h3 className="text-xl font-bold text-[#1e40af] mt-8 mb-3">2.2 Service Hours & Personnel</h3>
              <ul className="space-y-3 text-gray-600 ml-4 mb-6">
                <li className="flex gap-2">
                  <span className="text-[#1e40af] mt-1">•</span>
                  <span><strong>Service Hours:</strong> Services will be provided during the agreed hours. Any extension of service outside the agreed hours will be charged at the applicable hourly rate.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-[#1e40af] mt-1">•</span>
                  <span><strong>Personnel Substitutions:</strong> Atlas Security reserves the right to substitute security personnel where operationally required.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-[#1e40af] mt-1">•</span>
                  <span><strong>Service Review:</strong> Where security services are provided under an ongoing agreement, Atlas Security and the Client may conduct a formal service review after the <strong>initial three (3) months</strong> and thereafter at mutually agreed intervals. The review may include service performance, patrol schedules, incident trends, reporting requirements, and opportunities for service improvements.</span>
                </li>
              </ul>

              <h3 className="text-xl font-bold text-[#1e40af] mt-8 mb-3">2.3 Static Guarding Requirements</h3>
              <p className="text-gray-600 leading-relaxed mb-4">The Client shall provide:</p>
              <ul className="space-y-2 text-gray-600 ml-4 mb-6">
                <li className="flex gap-2"><span className="text-[#1e40af]">•</span> Safe working conditions</li>
                <li className="flex gap-2"><span className="text-[#1e40af]">•</span> Toilet facilities</li>
                <li className="flex gap-2"><span className="text-[#1e40af]">•</span> Shelter where reasonably practicable</li>
                <li className="flex gap-2"><span className="text-[#1e40af]">•</span> Site induction where required</li>
              </ul>
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-5 mt-4 text-sm text-gray-600">
                <strong className="text-[#0a1628]">Note on Governance:</strong> Security officers remain employees of Atlas Security and may not be directed to perform duties outside the agreed scope without Atlas Security's explicit approval.
              </div>
            </div>

            {/* ── 3. Patrols & Alarm Response Logistics ── */}
            <div className="mb-12">
              <h2 className="text-2xl lg:text-3xl font-extrabold text-[#0a1628] mb-6 pb-4 border-b border-gray-100">
                3. Patrols & Alarm Response Logistics
              </h2>
              
              <h3 className="text-xl font-bold text-[#1e40af] mt-8 mb-3">3.1 Alarm Response & Patrol Expectations</h3>
              <ul className="space-y-3 text-gray-600 ml-4 mb-6">
                <li className="flex gap-2">
                  <span className="text-[#1e40af] mt-1">•</span>
                  <span><strong>Attendance Windows:</strong> The Client acknowledges that mobile patrols and alarm response attendance times are approximate. Officers will attend the premises as soon as reasonably practicable, but exact times <strong>cannot be guaranteed</strong> due to traffic conditions, weather events, emergencies, police activity, or other operational priorities.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-[#1e40af] mt-1">•</span>
                  <span><strong>Route Modifications:</strong> Atlas Security reserves the right to alter patrol routes and timings where operationally necessary.</span>
                </li>
              </ul>

              <h3 className="text-xl font-bold text-[#1e40af] mt-8 mb-3">3.2 Site Access, Keys & Reset Procedures</h3>
              <ul className="space-y-3 text-gray-600 ml-4 mb-6">
                <li className="flex gap-2">
                  <span className="text-[#1e40af] mt-1">•</span>
                  <span><strong>Access Provision:</strong> The Client agrees to provide all keys, access cards, swipe cards, security fobs, gate remotes, alarm codes, lock combinations, and site-specific instructions necessary for Atlas Security to carry out the agreed services.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-[#1e40af] mt-1">•</span>
                  <span><strong>Access Failure:</strong> Where access cannot be obtained due to missing or incorrect information supplied by the Client, Atlas Security will not be liable for any resulting delays or inability to complete the requested service.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-[#1e40af] mt-1">•</span>
                  <span><strong>Forced Entry Limitation:</strong> Officers are <strong>not authorised to force entry</strong> unless specifically authorised by the Client or emergency services.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-[#1e40af] mt-1">•</span>
                  <span><strong>Alarm Reset Procedures:</strong> Where authorised by the Client, Atlas Security officers may reset alarm systems in accordance with documented site procedures. If alarm reset instructions or codes are unavailable, officers will secure the premises where reasonably practicable and notify the Client or alarm monitoring provider for further instructions.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-[#1e40af] mt-1">•</span>
                  <span><strong>Monitoring Providers:</strong> Atlas Security is an independent security provider and can work alongside any approved alarm monitoring company nominated by the Client. The Client is not required to change monitoring providers to engage Atlas Security's services.</span>
                </li>
              </ul>
            </div>

            {/* ── 4. Financial Terms, Pricing & Invoicing ── */}
            <div className="mb-12">
              <h2 className="text-2xl lg:text-3xl font-extrabold text-[#0a1628] mb-6 pb-4 border-b border-gray-100">
                4. Financial Terms, Pricing & Invoicing
              </h2>
              
              <h3 className="text-xl font-bold text-[#1e40af] mt-8 mb-3">4.1 Pricing Structure</h3>
              <ul className="space-y-3 text-gray-600 ml-4 mb-6">
                <li className="flex gap-2"><span className="text-[#1e40af] mt-1">•</span><span>All pricing is <strong>exclusive of GST</strong> unless otherwise stated.</span></li>
                <li className="flex gap-2"><span className="text-[#1e40af] mt-1">•</span><span>Services performed on <strong>New Zealand public holidays</strong> may attract additional charges in accordance with the quotation or current rate schedule.</span></li>
                <li className="flex gap-2"><span className="text-[#1e40af] mt-1">•</span><span>Emergency call-out services requested outside agreed hours will be charged at the applicable emergency rate.</span></li>
                <li className="flex gap-2"><span className="text-[#1e40af] mt-1">•</span><span>Additional charges may apply for public holidays, emergency call-outs, additional personnel, additional equipment, or Client-requested changes.</span></li>
              </ul>

              <h3 className="text-xl font-bold text-[#1e40af] mt-8 mb-3">4.2 Minimum Charges</h3>
              <p className="text-gray-600 leading-relaxed mb-4">Unless otherwise agreed in writing:</p>
              <ul className="space-y-3 text-gray-600 ml-4 mb-6">
                <li className="flex gap-2"><span className="text-[#1e40af] mt-1">•</span><span>A minimum charge of <strong>four (4) hours</strong> applies to each security officer deployment.</span></li>
                <li className="flex gap-2"><span className="text-[#1e40af] mt-1">•</span><span>Alarm response, mobile patrol, lock-up/unlock, and emergency call-out services are subject to a minimum <strong>one (1) hour charge</strong> per attendance.</span></li>
                <li className="flex gap-2"><span className="text-[#1e40af] mt-1">•</span><span>Where a security officer remains on site beyond the minimum charge, additional time will be charged in accordance with the agreed hourly rate.</span></li>
              </ul>

              <h3 className="text-xl font-bold text-[#1e40af] mt-8 mb-3">4.3 Annual Price Review</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Atlas Security reserves the right to review its service rates annually to reflect increases in labour costs, minimum wage adjustments, statutory employment obligations, insurance premiums, fuel costs, CPI movements, or other significant operating expenses. The Client will receive a minimum of <strong>30 days' written notice</strong> of any pricing adjustment.
              </p>

              <h3 className="text-xl font-bold text-[#1e40af] mt-8 mb-3">4.4 Invoicing & Late Payment Policy</h3>
              <ul className="space-y-3 text-gray-600 ml-4 mb-6">
                <li className="flex gap-2"><span className="text-[#1e40af] mt-1">•</span><span>Invoices are issued weekly, fortnightly, or monthly unless otherwise agreed.</span></li>
                <li className="flex gap-2"><span className="text-[#1e40af] mt-1">•</span><span><strong>Payment Terms:</strong> Invoices are issued monthly and are payable in full by the <strong>20th of the following month</strong>.</span></li>
                <li className="flex gap-2"><span className="text-[#1e40af] mt-1">•</span><span><strong>Late Penalties:</strong> Late payments may incur interest at <strong>2% per month</strong> (or the maximum permitted by law), alongside debt collection costs and legal recovery costs.</span></li>
              </ul>
            </div>

            {/* ── 5. Health, Safety & Client Responsibilities ── */}
            <div className="mb-12">
              <h2 className="text-2xl lg:text-3xl font-extrabold text-[#0a1628] mb-6 pb-4 border-b border-gray-100">
                5. Health, Safety & Client Responsibilities
              </h2>
              
              <h3 className="text-xl font-bold text-[#1e40af] mt-8 mb-3">5.1 Health & Safety Compliance</h3>
              <p className="text-gray-600 leading-relaxed mb-4">Both parties agree to comply with the <strong>Health and Safety at Work Act 2015</strong>. The Client explicitly agrees to:</p>
              <ul className="space-y-2 text-gray-600 ml-4 mb-6">
                <li className="flex gap-2"><span className="text-[#1e40af]">•</span> Inform Atlas Security of known hazards.</li>
                <li className="flex gap-2"><span className="text-[#1e40af]">•</span> Provide site-specific safety information.</li>
                <li className="flex gap-2"><span className="text-[#1e40af]">•</span> Notify Atlas Security of any incidents affecting staff safety.</li>
              </ul>
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-5 mt-4 text-sm text-gray-600">
                <strong className="text-[#0a1628]">Right of Withdrawal:</strong> Atlas Security reserves the right to immediately withdraw staff from any environment deemed unsafe.
              </div>

              <h3 className="text-xl font-bold text-[#1e40af] mt-8 mb-3">5.2 General Client Responsibilities</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                The Client agrees to provide accurate site information, supply necessary keys/access tools, notify Atlas Security swiftly of changes to operational procedures, and ensure site access is readily available at agreed service times.
              </p>
            </div>

            {/* ── 6. Data, Privacy & Evidential Material ── */}
            <div className="mb-12">
              <h2 className="text-2xl lg:text-3xl font-extrabold text-[#0a1628] mb-6 pb-4 border-b border-gray-100">
                6. Data, Privacy & Evidential Material
              </h2>
              
              <h3 className="text-xl font-bold text-[#1e40af] mt-8 mb-3">6.1 Privacy & Confidentiality</h3>
              <ul className="space-y-3 text-gray-600 ml-4 mb-6">
                <li className="flex gap-2"><span className="text-[#1e40af] mt-1">•</span><span><strong>Confidentiality:</strong> Both parties agree to keep confidential any information obtained during the course of the agreement unless disclosure is required by law.</span></li>
                <li className="flex gap-2"><span className="text-[#1e40af] mt-1">•</span><span><strong>Privacy Act:</strong> Both parties agree to comply with the <strong>Privacy Act 2020</strong> regarding the handling of personal information.</span></li>
              </ul>

              <h3 className="text-xl font-bold text-[#1e40af] mt-8 mb-3">6.2 Incident & Electronic Reporting</h3>
              <ul className="space-y-3 text-gray-600 ml-4 mb-6">
                <li className="flex gap-2"><span className="text-[#1e40af] mt-1">•</span><span>Atlas Security will provide electronic incident reports, patrol reports, photographs, and other supporting documentation following alarm responses, patrols, or security incidents where applicable.</span></li>
                <li className="flex gap-2"><span className="text-[#1e40af] mt-1">•</span><span>Reports remain strictly confidential and are supplied solely for the Client's internal use.</span></li>
              </ul>

              <h3 className="text-xl font-bold text-[#1e40af] mt-8 mb-3">6.3 Surveillance & Digital Evidence</h3>
              <ul className="space-y-3 text-gray-600 ml-4 mb-6">
                <li className="flex gap-2"><span className="text-[#1e40af] mt-1">•</span><span><strong>Body-Worn Cameras:</strong> Atlas Security officers may wear body-worn cameras while carrying out their duties where considered appropriate for safety, evidential purposes, or incident management. All recordings will be managed in accordance with the Privacy Act 2020 and Atlas Security's Privacy Policy.</span></li>
                <li className="flex gap-2"><span className="text-[#1e40af] mt-1">•</span><span><strong>Photographs and CCTV:</strong> Atlas Security may capture photographs or video footage of security incidents, property damage, hazards, suspicious activity, or other matters relevant to the services provided. Such material may be used for reporting, evidential purposes, insurance claims, or law enforcement investigations.</span></li>
              </ul>
            </div>

            {/* ── 7. Indemnity, Cancellations & Legal Guardrails ── */}
            <div className="mb-12">
              <h2 className="text-2xl lg:text-3xl font-extrabold text-[#0a1628] mb-6 pb-4 border-b border-gray-100">
                7. Indemnity, Cancellations & Legal Guardrails
              </h2>
              
              <h3 className="text-xl font-bold text-[#1e40af] mt-8 mb-3">7.1 Limitation of Liability</h3>
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-5 mb-4 text-sm text-gray-600">
                Atlas Security provides security services designed to reduce risk but <strong>cannot guarantee</strong> that theft, damage, trespass, or criminal activity will not occur.
              </div>
              <p className="text-gray-600 leading-relaxed mb-4">To the maximum extent permitted by New Zealand law:</p>
              <ul className="space-y-2 text-gray-600 ml-4 mb-6">
                <li className="flex gap-2"><span className="text-[#1e40af]">•</span> Atlas Security shall not be liable for indirect or consequential losses.</li>
                <li className="flex gap-2"><span className="text-[#1e40af]">•</span> Liability shall be strictly limited to the <strong>value of the services provided</strong> unless otherwise agreed in writing.</li>
              </ul>

              <h3 className="text-xl font-bold text-[#1e40af] mt-8 mb-3">7.2 Insurance Foundations</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Atlas Security maintains appropriate Public Liability Insurance, Professional Indemnity Insurance (where applicable), and Employer's Liability/ACC obligations as required by New Zealand law. Certificates of insurance can be provided upon request.
              </p>

              <h3 className="text-xl font-bold text-[#1e40af] mt-8 mb-3">7.3 Force Majeure</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Atlas Security shall not be liable for delays or failure to perform caused by events beyond its reasonable control, including natural disasters, floods, earthquakes, industrial action, pandemic restrictions, civil unrest, power outages, or government actions.
              </p>

              <h3 className="text-xl font-bold text-[#1e40af] mt-8 mb-3">7.4 Cancellation Rules</h3>
              <ul className="space-y-3 text-gray-600 ml-4 mb-6">
                <li className="flex gap-2"><span className="text-[#1e40af] mt-1">•</span><span><strong>Regular Services:</strong> Requires <strong>30 days' written notice</strong> of cancellation.</span></li>
                <li className="flex gap-2"><span className="text-[#1e40af] mt-1">•</span><span><strong>One-off Bookings:</strong> Cancelled within <strong>24 hours</strong> may incur a cancellation fee.</span></li>
                <li className="flex gap-2"><span className="text-[#1e40af] mt-1">•</span><span><strong>Active Deployments:</strong> Staff already deployed at the time of cancellation will be charged accordingly.</span></li>
              </ul>

              <h3 className="text-xl font-bold text-[#1e40af] mt-8 mb-3">7.5 Non-Solicitation of Personnel</h3>
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-5 mb-4 text-sm text-gray-600">
                <strong className="text-[#0a1628]">Restricted Engagement:</strong> The Client agrees that during the term of this Agreement, and for <strong>twelve (12) months</strong> following its termination, it will not directly or indirectly employ or engage any Atlas Security employee or contractor without the prior written consent of Atlas Security.
              </div>
              <p className="text-gray-600 leading-relaxed mb-6">
                Where this clause is breached, Atlas Security reserves the right to recover reasonable recruitment, training, and associated replacement costs.
              </p>

              <h3 className="text-xl font-bold text-[#1e40af] mt-8 mb-3">7.6 Compliance, Disputes & Governing Law</h3>
              <ul className="space-y-3 text-gray-600 ml-4 mb-6">
                <li className="flex gap-2"><span className="text-[#1e40af] mt-1">•</span><span><strong>Compliance:</strong> Atlas Security operates in accordance with applicable New Zealand legislation, including licensing requirements under the <strong>Private Security Personnel and Private Investigators Act 2010</strong>.</span></li>
                <li className="flex gap-2"><span className="text-[#1e40af] mt-1">•</span><span><strong>Disputes:</strong> Any dispute arising from this agreement shall first be resolved through good-faith negotiation. If the dispute cannot be resolved, the parties may pursue mediation or any other remedy available under New Zealand law.</span></li>
                <li className="flex gap-2"><span className="text-[#1e40af] mt-1">•</span><span><strong>Governing Law:</strong> This agreement shall be governed exclusively by the laws of New Zealand.</span></li>
              </ul>
            </div>

          </motion.div>
        </div>
      </section>
    </main>
  )
}