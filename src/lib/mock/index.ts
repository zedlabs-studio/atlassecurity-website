// lib/mock/index.ts
import type { Blog, Testimonial, Career } from '@/types'

export const mockBlogs: Blog[] = [
  {
    id: 'p1-1',
    title: 'Static Security Guards vs Mobile Patrols: Which Does Your NZ Business Need?',
    slug: 'static-guards-vs-mobile-patrols-nz',
    excerpt: 'Compare on-site static security guards and GPS-tracked mobile patrol security services in New Zealand. Discover key differences, cost factors, and decision frameworks for your premises.',
    content: `
<p className="lead">Choosing between on-site <strong>static security guards</strong> and randomized <strong>mobile patrol security</strong> is one of the most critical decisions for New Zealand property managers and business owners. While both services serve to mitigate crime, trespass, and property loss, they operate under fundamentally different protection models.</p>

<h2>What Are Static Security Guards?</h2>
<p><strong>Static security guards</strong> are licensed security officers stationed continuously at a specific property or building. Rather than moving between multiple client sites, an on-site security guard remains dedicated to your facility throughout their shift.</p>

<h3>Core Functions of Static Guarding:</h3>
<ul>
  <li><strong>Continuous Physical Deterrence:</strong> A visible, uniformed guard stationed at entrance points or gatehouses acts as an active deterrent to unauthorized entry and opportunist theft.</li>
  <li><strong>Access Control &amp; Visitor Logging:</strong> Managing contractor sign-ins, issuing visitor passes, verifying staff credentials, and operating electronic access barriers.</li>
  <li><strong>Immediate Incident Intervention:</strong> On-site guards respond instantly to suspicious behavior, medical emergencies, or safety alarms without waiting for a patrol vehicle to dispatch.</li>
  <li><strong>Customer Service &amp; Concierge:</strong> Representing corporate office towers or retail store entrances with professional concierge etiquette.</li>
</ul>

<h2>What Are Mobile Security Patrols?</h2>
<p><strong>Mobile security patrols</strong> involve licensed patrol officers visiting multiple commercial properties in GPS-tracked patrol vehicles during after-hours periods. Rather than remaining stationed at one site, mobile patrol units perform scheduled and randomized perimeter checks across designated routes.</p>

<h3>Core Functions of Mobile Patrols:</h3>
<ul>
  <li><strong>Randomized Perimeter Inspection:</strong> Checking perimeter fencing, exterior doors, loading bays, and storage yards at unpredictable intervals.</li>
  <li><strong>Lock-Up and Unlock Services:</strong> Securely arming alarm systems, locking exterior gates, checking windows, and escorting closing staff at designated times.</li>
  <li><strong>24/7 Mobile Alarm Response:</strong> Serving as the first responder when an intruder or fire alarm triggers at your monitoring station.</li>
  <li><strong>Cost-Effective Coverage:</strong> Providing multi-point physical checks across large areas at a fraction of the cost of full-time dedicated guarding.</li>
</ul>

<h2>Static Guards vs Mobile Patrols: Key Differences</h2>
<div className="overflow-x-auto my-8">
  <table className="w-full text-left border-collapse border border-gray-200 text-sm">
    <thead>
      <tr className="bg-[#0a1628] text-white">
        <th className="p-3 border border-gray-300">Feature / Dimension</th>
        <th className="p-3 border border-gray-300">Static Security Guards</th>
        <th className="p-3 border border-gray-300">Mobile Security Patrols</th>
      </tr>
    </thead>
    <tbody>
      <tr className="border-b border-gray-200">
        <td className="p-3 font-bold border border-gray-200">Presence Pattern</td>
        <td className="p-3 border border-gray-200">Continuous on-site presence throughout shift</td>
        <td className="p-3 border border-gray-200">Intermittent checks at scheduled or random intervals</td>
      </tr>
      <tr className="bg-gray-50 border-b border-gray-200">
        <td className="p-3 font-bold border border-gray-200">Access Control &amp; Concierge</td>
        <td className="p-3 border border-gray-200">Yes — front desk, gatehouse, visitor management</td>
        <td className="p-3 border border-gray-200">No — focused on exterior perimeter security</td>
      </tr>
      <tr className="border-b border-gray-200">
        <td className="p-3 font-bold border border-gray-200">Response Speed</td>
        <td className="p-3 border border-gray-200">Instant (seconds) — officer is already on site</td>
        <td className="p-3 border border-gray-200">Fast (minutes) — vehicle dispatch upon alarm signal</td>
      </tr>
      <tr className="bg-gray-50 border-b border-gray-200">
        <td className="p-3 font-bold border border-gray-200">Cost Structure</td>
        <td className="p-3 border border-gray-200">Hourly rate per stationed guard</td>
        <td className="p-3 border border-gray-200">Cost-effective flat fee per patrol visit / check</td>
      </tr>
      <tr className="border-b border-gray-200">
        <td className="p-3 font-bold border border-gray-200">Best Suited Environments</td>
        <td className="p-3 border border-gray-200">Office towers, active construction sites, retail stores</td>
        <td className="p-3 border border-gray-200">Warehouses, industrial yards, multi-tenant precincts</td>
      </tr>
    </tbody>
  </table>
</div>

<h2>When Should a NZ Business Choose Static Security Guards?</h2>
<p>Stationed <a href="/services/static-guard" className="text-[#1e40af] font-semibold underline">static security guards</a> are recommended when continuous vigilance, entry control, or high-value asset protection is required during operational hours or overnight shifts:</p>
<ul>
  <li><strong>Commercial Office Towers &amp; Head Offices:</strong> Managing lobby reception, contractor access passes, and floor safety in corporate precincts in <a href="/service-area/auckland" className="text-[#1e40af] font-semibold underline">Auckland CBD</a> or <a href="/service-area/wellington" className="text-[#1e40af] font-semibold underline">Wellington CBD</a>.</li>
  <li><strong>High-Value Active Construction Sites:</strong> Preventing overnight plant vandalism, tool theft, and unauthorized site entry before project handover.</li>
  <li><strong>Busy Retail Stores &amp; Shopping Centres:</strong> Providing visible customer-friendly loss prevention and staff safety during peak shopping hours.</li>
</ul>

<h2>When Are Mobile Patrols a Better Fit?</h2>
<p>GPS-tracked <a href="/services/mobile-patrolling" className="text-[#1e40af] font-semibold underline">mobile security patrols</a> offer an ideal balance of protection and cost-efficiency for properties that do not require an officer stationed continuously in one spot:</p>
<ul>
  <li><strong>Industrial Estates &amp; Distribution Yards:</strong> Conducting night-time vehicle perimeter checks across logistics parks in <a href="/service-area/hamilton" className="text-[#1e40af] font-semibold underline">Te Rapa (Hamilton)</a> or Penrose.</li>
  <li><strong>After-Hours Building Lock-Ups:</strong> Ensuring windows, fire doors, and master security alarms are secured at 6:00 PM every evening.</li>
  <li><strong>SMEs &amp; Standalone Commercial Buildings:</strong> Providing reliable physical checks 2-4 times per night at an accessible monthly cost.</li>
</ul>

<h2>Can Static Guards and Mobile Patrols Work Together?</h2>
<p>Yes. Many leading New Zealand corporations utilize a hybrid security strategy. For example, a facility may deploy a static security officer at the front desk during daytime operating hours (8:00 AM – 6:00 PM) to manage visitor sign-ins, followed by randomized mobile patrol checks throughout the night to verify perimeter integrity.</p>

<h2>Decision Checklist for NZ Property Owners</h2>
<ol>
  <li>Do you require visitor sign-in, keycard issuance, or gate management? (If Yes $\rightarrow$ <strong>Static Guard</strong>)</li>
  <li>Is your main goal after-hours lock-ups and periodic perimeter verification? (If Yes $\rightarrow$ <strong>Mobile Patrol</strong>)</li>
  <li>Does your site contain high-value uninstalled materials or exposed machinery? (If Yes $\rightarrow$ <strong>Static Guard or Hybrid</strong>)</li>
  <li>Are you looking for 24/7 alarm verification and rapid guard dispatch? (If Yes $\rightarrow$ <strong>Mobile Patrol &amp; Alarm Response</strong>)</li>
</ol>

<h2>Frequently Asked Questions</h2>
<h3>What is the main benefit of static security guards over mobile patrols?</h3>
<p>Static security guards provide continuous, uninterrupted physical presence. They do not leave your property during their shift, enabling immediate physical intervention and continuous entry control.</p>

<h3>Are Atlas Security mobile patrols tracked by GPS?</h3>
<p>Yes, 100% of our mobile patrol vehicles utilize real-time GPS tracking and electronic checkpoint scanning, providing clients with verifiable time-stamped proof of site inspections.</p>

<h3>Are your security officers licensed in New Zealand?</h3>
<p>All Atlas Security static guards and patrol officers hold current Ministry of Justice Certificates of Approval (COA) under the Private Security Personnel and Private Investigators Act 2010.</p>

<div className="mt-8 p-6 bg-[#0a1628] text-white rounded-xl">
  <h3 className="text-xl font-bold mb-2 text-white">Find the Right Security Plan for Your Site</h3>
  <p className="text-gray-300 text-sm mb-4">Not sure whether static guarding or mobile patrols fit your operational budget? Contact our team for a free on-site security assessment across Auckland, Hamilton, and Wellington.</p>
  <a href="/contact" className="inline-block bg-[#1e40af] hover:bg-[#1d3a9e] text-white font-bold px-6 py-3 rounded-lg text-sm transition-colors">Request Free Consultation</a>
</div>
`,
    coverImage: '/images/service-static-guard.webp',
    published: true,
    publishedAt: '2026-09-14T00:00:00Z',
    createdAt: '2026-09-14T00:00:00Z',
    updatedAt: '2026-09-14T00:00:00Z',
  },
  {
    id: 'p1-2',
    title: 'How to Prevent Construction Site Theft in New Zealand (2026 Guide)',
    slug: 'construction-site-theft-prevention-nz',
    excerpt: 'Learn proven construction site security strategies to prevent tool loss, copper wire theft, and machinery vandalism across New Zealand building and civil developments.',
    content: `
<p className="lead">Civil building projects and commercial developments across New Zealand face persistent threats from theft, trespassing, and property damage. Unsecured construction sites contain exposed copper wiring, expensive power tools, building materials, and heavy machinery — making them prime targets for opportunistic crime after hours.</p>

<h2>Why Construction Sites Are Vulnerable to Theft</h2>
<p>Unlike established commercial buildings, construction developments are constantly evolving environments. Fencing boundaries shift daily, temporary lighting varies, and multiple contractor trades move on and off site throughout the week.</p>
<p>Key risk factors include:</p>
<ul>
  <li><strong>Unsecured High-Value Materials:</strong> Bundles of copper cabling, structural timber, plumbing fittings, and roofing sheets stored in open yards.</li>
  <li><strong>After-Hours Site Vacancy:</strong> Sites left unattended from 5:00 PM until 7:00 AM on weekdays and completely unstaffed over weekends and public holidays.</li>
  <li><strong>Complex Site Perimeters:</strong> Multiple temporary access gates, incomplete hoarding, and unlit blind spots along site boundaries in developing subdivisions across <a href="/service-area/auckland" className="text-[#1e40af] font-semibold underline">Auckland</a> and <a href="/service-area/hamilton" className="text-[#1e40af] font-semibold underline">Hamilton</a>.</li>
</ul>

<h2>Common Construction Site Security Weaknesses</h2>
<ol>
  <li>Gaps or damaged sections in temporary perimeter chain-link fencing.</li>
  <li>Power tools and portable generators left inside unlocked site sheds or utility vehicles overnight.</li>
  <li>Lack of contractor sign-in logs, allowing unauthorized sub-contractors to access restricted work areas.</li>
  <li>Unlit storage yards and dark perimeters hidden from main road visibility.</li>
  <li>Absence of physical guarding or after-hours vehicle patrols.</li>
</ol>

<h2>10-Point Construction Site Theft Prevention Checklist</h2>
<div className="bg-[#f8f9fa] border border-gray-200 p-6 rounded-xl my-6">
  <h3 className="font-bold text-[#0a1628] text-base mb-4">Essential Security Measures for Site Managers:</h3>
  <ol className="space-y-2 text-sm text-gray-700">
    <li><strong>1. Secure Perimeter Hoarding:</strong> Install 2.1m heavy-duty anti-climb mesh fencing with locked gates.</li>
    <li><strong>2. Implement Gatehouse Visitor Logging:</strong> Require all sub-contractors and delivery drivers to sign in and out.</li>
    <li><strong>3. Store Power Tools in Lockboxes:</strong> Lock all handheld power tools inside steel job-site storage vaults.</li>
    <li><strong>4. Immobilize Heavy Machinery:</strong> Remove ignition keys, lock cabs, and lower excavator buckets flat to the ground.</li>
    <li><strong>5. Install Floodlighting:</strong> Deploy solar-powered motion sensor LED floodlights across material staging yards.</li>
    <li><strong>6. Mark Materials &amp; Tools:</strong> Engrave company identifiers or micro-dots onto expensive equipment.</li>
    <li><strong>7. Post Warning Signage:</strong> Display clear <em>"Warning: Licensed Security Guard &amp; GPS Patrols on Site"</em> boards.</li>
    <li><strong>8. Stage Deliveries Just-In-Time:</strong> Schedule high-value copper cable and appliance deliveries right before installation.</li>
    <li><strong>9. Deploy Static Guards After Hours:</strong> Station licensed COA security officers on site during evening and weekend shifts.</li>
    <li><strong>10. Schedule GPS Mobile Patrol Sweeps:</strong> Arrange randomized vehicle checks throughout the night.</li>
  </ol>
</div>

<h2>How Security Guards Protect Construction Sites</h2>
<p>Deploying licensed <a href="/services/construction-site-security" className="text-[#1e40af] font-semibold underline">construction site security guards</a> provides an active, physical deterrent that electronic alarms alone cannot match. Stationed guards perform active perimeter walks, check storage container locks, verify overnight delivery vehicles, and clear trespassers before damage occurs.</p>
<p>For large-scale commercial developments, on-site <a href="/services/static-guard" className="text-[#1e40af] font-semibold underline">static security guards</a> manage gate access during working shifts and maintain continuous surveillance throughout non-operational hours.</p>

<h2>How Mobile Patrols Support Civil &amp; Building Sites</h2>
<p>For medium-sized building sites or civil works with limited after-hours activity, GPS-tracked <a href="/services/mobile-patrolling" className="text-[#1e40af] font-semibold underline">mobile security patrols</a> provide a flexible, cost-effective defense. Mobile patrol officers arrive in marked security vehicles at unpredictable times, inspect perimeter fencing, check site hoists, and verify that temporary sheds remain secured.</p>

<h2>Frequently Asked Questions</h2>
<h3>Can security guards handle sub-contractor inductions and site access?</h3>
<p>Yes. Atlas Security static guards are trained to manage gate access control, verify visitor credentials, conduct safety inductions, and maintain accurate sign-in registries for civil and commercial build sites.</p>

<h3>What regions do you service for construction security?</h3>
<p>We provide construction site security guards and mobile patrol coverage across Greater Auckland, Hamilton, Waikato, and the Wellington metropolitan region.</p>

<h3>How quickly can temporary security guarding be deployed to a new building site?</h3>
<p>We can deploy licensed COA security guards to temporary or new construction sites within 24 to 48 hours of completing a site security risk evaluation.</p>

<div className="mt-8 p-6 bg-[#0a1628] text-white rounded-xl">
  <h3 className="text-xl font-bold mb-2 text-white">Protect Your Building Site From Costly Theft</h3>
  <p className="text-gray-300 text-sm mb-4">Prevent material loss and project delays. Speak with our civil security specialists for a customized construction protection plan.</p>
  <a href="/contact" className="inline-block bg-[#1e40af] hover:bg-[#1d3a9e] text-white font-bold px-6 py-3 rounded-lg text-sm transition-colors">Request Construction Quote</a>
</div>
`,
    coverImage: '/images/service-construction.webp',
    published: true,
    publishedAt: '2026-09-12T00:00:00Z',
    createdAt: '2026-09-12T00:00:00Z',
    updatedAt: '2026-09-12T00:00:00Z',
  },
  {
    id: 'p1-3',
    title: 'Retail Loss Prevention Strategies for NZ Retailers in 2026',
    slug: 'retail-loss-prevention-nz-stores',
    excerpt: 'Explore actionable retail loss prevention techniques to reduce shoplifting, protect store staff, and maintain a safe shopping environment in New Zealand retail precincts.',
    content: `
<p className="lead">Shoplifting, organized retail theft, and anti-social behavior present ongoing challenges for New Zealand retail store operators, department stores, and shopping mall tenants. Implementing a robust retail loss prevention strategy is essential to protect profit margins, safeguard floor staff, and ensure a welcoming customer environment.</p>

<h2>What Is Retail Loss Prevention?</h2>
<p><strong>Retail loss prevention</strong> encompasses the policies, security personnel, training, and surveillance systems designed to prevent stock shrinkage, theft, fraud, and operational waste within retail environments.</p>

<h2>Common Retail Security Risks Facing Store Operators</h2>
<ul>
  <li><strong>Shoplifting &amp; Inventory Shrinkage:</strong> Opportunistic or organized theft of high-value clothing, electronics, cosmetics, and luxury goods.</li>
  <li><strong>Staff Safety Hazards:</strong> Aggressive behavior, verbal abuse, or physical confrontation directed toward store workers during trade or closing hours.</li>
  <li><strong>Closing Register Vulnerabilities:</strong> Risk during end-of-day register reconciliation, cash drawer clearing, and staff vehicle escorts in <a href="/service-area/wellington" className="text-[#1e40af] font-semibold underline">Wellington CBD</a> or <a href="/service-area/auckland" className="text-[#1e40af] font-semibold underline">Auckland</a> retail precincts.</li>
  <li><strong>After-Hours Break-Ins:</strong> Smash-and-grab entry targeting storefront glass or rear loading dock access.</li>
</ul>

<h2>10 Practical Retail Loss Prevention Strategies</h2>
<ol>
  <li><strong>Deploy Uniformed Retail Security Guards:</strong> Stationing trained <a href="/services/retail-security" className="text-[#1e40af] font-semibold underline">retail security guards</a> at store entrances creates an immediate visible deterrent to potential thieves while greeting legitimate shoppers.</li>
  <li><strong>Optimize Store Floor Layout:</strong> Keep high-value inventory visible from checkout counters; eliminate tall displays that block staff line-of-sight.</li>
  <li><strong>Train Staff in Customer Engagement:</strong> Greet every shopper who enters. Attentive customer service is one of the most effective non-confrontational shoplifting deterrents.</li>
  <li><strong>Implement Closing Staff Escorts:</strong> Have a uniformed guard or <a href="/services/mobile-patrolling" className="text-[#1e40af] font-semibold underline">mobile patrol officer</a> conduct staff vehicle escorts and register lock-up checks.</li>
  <li><strong>Maintain 24/7 CCTV &amp; Alarm Integration:</strong> Connect store intruder alarms to central <a href="/services/alarm-monitoring" className="text-[#1e40af] font-semibold underline">alarm monitoring</a> for immediate mobile guard dispatch when closed.</li>
  <li><strong>Secure High-Risk Stock in Lockable Showcases:</strong> Use electronic anti-theft tags, cable locks, and locked display cabinets for premium merchandise.</li>
  <li><strong>Establish Clear Incident Escalation Protocols:</strong> Ensure retail staff never engage in unsafe physical confrontations; rely on trained security officers for de-escalation.</li>
  <li><strong>Audit Fitting Room Access:</strong> Monitor the number of garments entering and exiting fitting room areas.</li>
  <li><strong>Maintain Accurate Inventory Records:</strong> Conduct regular stock counts to identify shrinkage patterns and high-risk product categories early.</li>
  <li><strong>Display Visible Security Signage:</strong> Clearly indicate that store premises are protected by COA-certified guards and 24/7 surveillance monitoring.</li>
</ol>

<h2>How Retail Security Guards Support Store Loss Prevention</h2>
<p>Trained <a href="/services/static-guard" className="text-[#1e40af] font-semibold underline">static security guards</a> serve a dual role in retail: they provide active loss prevention oversight while maintaining excellent customer service standards. Our COA-certified officers are skilled in verbal de-escalation, conflict resolution, crowd management, and incident documentation — ensuring your store remains safe and compliant with Ministry of Justice standards.</p>

<h2>Security Guards vs Technology: Why Retailers Need Both</h2>
<p>While CCTV cameras and electronic article surveillance (EAS) gates provide valuable evidence, technology alone cannot stop an active theft or reassure an anxious staff member. Combining electronic surveillance with professional security guards creates a comprehensive protection layer: technology detects issues, while human security officers respond with immediate, professional action.</p>

<h2>Frequently Asked Questions</h2>
<h3>How do retail security guards balance theft deterrence with customer service?</h3>
<p>Our retail security officers are trained in customer engagement and professional etiquette. They act as welcoming brand ambassadors for genuine customers while providing a firm, professional deterrent to shoplifters.</p>

<h3>Can Atlas Security provide short-term security for retail sales events or peak seasons?</h3>
<p>Yes. We provide flexible guard deployments for holiday trading periods, Black Friday events, store grand openings, and high-traffic promotional sales across New Zealand.</p>

<h3>What compliance licenses do your retail guards hold?</h3>
<p>Every Atlas Security officer holds a active Ministry of Justice Certificate of Approval (COA) under the Private Security Personnel and Private Investigators Act 2010.</p>

<div className="mt-8 p-6 bg-[#0a1628] text-white rounded-xl">
  <h3 className="text-xl font-bold mb-2 text-white">Enhance Your Retail Security &amp; Loss Prevention</h3>
  <p className="text-gray-300 text-sm mb-4">Protect your store staff and reduce inventory shrinkage with trained retail security personnel. Contact us today for a free retail assessment.</p>
  <a href="/contact" className="inline-block bg-[#1e40af] hover:bg-[#1d3a9e] text-white font-bold px-6 py-3 rounded-lg text-sm transition-colors">Speak With a Retail Security Specialist</a>
</div>
`,
    coverImage: '/images/service-retail.webp',
    published: true,
    publishedAt: '2026-09-10T00:00:00Z',
    createdAt: '2026-09-10T00:00:00Z',
    updatedAt: '2026-09-10T00:00:00Z',
  },
  {
    id: '1',
    title: 'Top 5 Security Tips for NZ Businesses',
    slug: 'top-5-security-tips-nz-businesses',
    excerpt: 'Learn how to protect your business with these essential security practices used by professionals across New Zealand.',
    content: `
<p>Security is not a one-time investment — it is an ongoing commitment. Implementing robust security protocols protects your employees, physical premises, and valuable assets against unauthorized entry, theft, and property damage.</p>

<h2>1. Conduct Regular Physical Security Audits</h2>
<p>Regularly inspect perimeter fencing, locks, exterior lighting, and alarm systems. Identifying vulnerabilities early prevents opportunist intrusions before they occur.</p>

<h2>2. Deploy Licensed On-Site Security Personnel</h2>
<p>A visible, uniformed presence remains the single most effective deterrent to theft. Learn more about choosing between <a href="/blog/static-guards-vs-mobile-patrols-nz" className="text-[#1e40af] font-semibold underline">static security guards and mobile patrols</a> for your specific property type.</p>

<h2>3. Implement Access Control &amp; Visitor Sign-Ins</h2>
<p>Control who enters your premises by issuing contractor badges and logging visitor details at main reception desks or gatehouses.</p>

<h2>4. Secure Construction &amp; High-Risk Sites After Hours</h2>
<p>If you manage building or civil developments, follow our <a href="/blog/construction-site-theft-prevention-nz" className="text-[#1e40af] font-semibold underline">construction site theft prevention guide</a> to secure high-value tools, copper cabling, and heavy machinery overnight.</p>

<h2>5. Partner with a 24/7 Monitored Response Provider</h2>
<p>Ensure your intruder alarms are connected to a centralized monitoring station with immediate <a href="/services/alarm-monitoring" className="text-[#1e40af] font-semibold underline">guard dispatch capabilities</a> across Auckland, Hamilton, and Wellington.</p>
`,
    coverImage: '/images/blog/security-tips.jpg',
    published: true,
    publishedAt: '2026-06-01T00:00:00Z',
    createdAt: '2026-06-01T00:00:00Z',
    updatedAt: '2026-06-01T00:00:00Z',
  },
  {
    id: '2',
    title: 'Why Mobile Patrols Are the Future of NZ Security',
    slug: 'mobile-patrols-future-nz-security',
    excerpt: 'Static guards are just one layer. Discover why leading NZ businesses are switching to mobile patrol solutions.',
    content: `
<p>Mobile security patrols provide flexible, cost-effective coverage across multiple commercial sites, warehouses, and industrial parks in New Zealand.</p>

<h2>Flexible &amp; Cost-Effective Protection</h2>
<p>Rather than stationing a full-time officer on site, <a href="/services/mobile-patrolling" className="text-[#1e40af] font-semibold underline">mobile security patrols</a> conduct randomized vehicle checks, perimeter sweeps, and night-time lock-up services at predictable or unpredictable intervals.</p>

<h2>Comparing Patrols to On-Site Guarding</h2>
<p>Read our in-depth analysis on <a href="/blog/static-guards-vs-mobile-patrols-nz" className="text-[#1e40af] font-semibold underline">Static Security Guards vs Mobile Patrols</a> to determine which protection model best suits your budget and risk profile.</p>

<h2>GPS Verification &amp; Proof of Attendance</h2>
<p>Modern mobile patrol fleets use real-time GPS tracking and electronic checkpoint logging to deliver time-stamped inspection reports to property managers in <a href="/service-area/hamilton" className="text-[#1e40af] font-semibold underline">Hamilton</a>, <a href="/service-area/auckland" className="text-[#1e40af] font-semibold underline">Auckland</a>, and regional commercial centers.</p>
`,
    coverImage: '/images/blog/mobile-patrol.jpg',
    published: true,
    publishedAt: '2026-05-20T00:00:00Z',
    createdAt: '2026-05-20T00:00:00Z',
    updatedAt: '2026-05-20T00:00:00Z',
  },
  {
    id: '3',
    title: 'Atlas Security Expands to Wellington Region',
    slug: 'atlas-security-expands-wellington',
    excerpt: 'We are proud to announce our coverage now extends across the Wellington region, serving more NZ businesses.',
    content: `
<p>Atlas Security NZ is excited to announce the expansion of our dedicated security guard, corporate concierge, and mobile patrol services across the Greater Wellington region.</p>

<h2>Serving Wellington CBD, Hutt Valley &amp; Porirua</h2>
<p>Our expanded capital operations deliver licensed <a href="/service-area/wellington" className="text-[#1e40af] font-semibold underline">Wellington security guards</a> for commercial office towers, government contractors, retail precincts in Petone, and industrial sites in Lower Hutt.</p>

<h2>Retail &amp; Commercial Security Solutions</h2>
<p>Wellington store operators can also leverage our specialized <a href="/blog/retail-loss-prevention-nz-stores" className="text-[#1e40af] font-semibold underline">retail loss prevention strategies</a> to combat shoplifting and protect floor staff during trading and closing shifts.</p>
`,
    coverImage: '/images/blog/wellington.jpg',
    published: true,
    publishedAt: '2026-05-10T00:00:00Z',
    createdAt: '2026-05-10T00:00:00Z',
    updatedAt: '2026-05-10T00:00:00Z',
  },
]

export const mockTestimonials: Testimonial[] = [
  {
    id: '1',
    name: 'James Whitfield',
    message: 'Atlas Security has been protecting our Auckland warehouse for over a year. Professional, reliable, and always responsive. Could not ask for better service.',
    rating: 5,
    status: 'APPROVED',
    createdAt: '2026-05-15T00:00:00Z',
  },
  {
    id: '2',
    name: 'Sarah Thompson',
    message: 'The mobile patrol team is excellent. We have had zero incidents since switching to Atlas. Highly recommend to any NZ business owner.',
    rating: 5,
    status: 'APPROVED',
    createdAt: '2026-04-28T00:00:00Z',
  },
  {
    id: '3',
    name: 'Raj Patel',
    message: 'Very professional team. They responded within minutes when our alarm triggered at 2am. That kind of dedication is rare.',
    rating: 5,
    status: 'APPROVED',
    createdAt: '2026-04-10T00:00:00Z',
  },
]

export const mockCareers: Career[] = [
  {
    id: '1',
    title: 'Static Security Guard — Auckland',
    description: 'We are looking for reliable, professional security guards to join our Auckland team on a full-time basis. You will be stationed at commercial premises and responsible for the safety of people and property.',
    requirements: 'Current NZ Certificate of Approval (COA)\nMinimum 1 year security experience\nExcellent communication skills\nAbility to work night shifts',
    applyEmail: 'info@atlassecurity.co.nz',
    isActive: true,
    createdAt: '2026-06-01T00:00:00Z',
  },
  {
    id: '2',
    title: 'Mobile Patrol Officer — Wellington',
    description: 'Join our Wellington mobile patrol team. You will conduct scheduled and random patrols across multiple client sites, respond to alarms, and submit detailed incident reports.',
    requirements: 'Current NZ COA\nClean full NZ drivers licence\nPhysically fit and alert\nExperience with patrol vehicles preferred',
    applyEmail: 'info@atlassecurity.co.nz',
    isActive: true,
    createdAt: '2026-05-25T00:00:00Z',
  },
]