// lib/mock/index.ts
import type { Blog, Testimonial, Career } from '@/types'

export const mockBlogs: Blog[] = [
  {
    id: 'p2-4',
    title: 'Commercial Building After-Hours Security Checklist for Property Managers',
    slug: 'commercial-building-after-hours-security-checklist',
    excerpt: 'A comprehensive after-hours security checklist for New Zealand commercial property managers. Learn how to secure access control points, vacant floors, loading docks, and patrol schedules.',
    content: `
<p className="lead">Managing multi-tenant office towers, corporate facilities, and commercial precincts in <a href="/service-area/auckland" className="text-[#1e40af] font-semibold underline">Auckland</a>, <a href="/service-area/wellington" className="text-[#1e40af] font-semibold underline">Wellington</a>, and <a href="/service-area/hamilton" className="text-[#1e40af] font-semibold underline">Hamilton</a> requires constant attention to after-hours safety. When regular business hours end at 5:00 PM or 6:00 PM, commercial buildings become vulnerable to unauthorized entry, property damage, and tailgating.</p>

<h2>Why After-Hours Commercial Security Demands Special Attention</h2>
<p>During standard operating hours, active lobby receptionists, tenant staff, and visible foot traffic naturally deter unauthorized visitors. Once tenant offices close, however, buildings enter a high-risk operational window. Contract cleaners, maintenance technicians, and late-working personnel move through building lobbies and service lifts, creating potential access vulnerabilities if strict protocols are not enforced.</p>
<p>Key risk areas in commercial premises include:</p>
<ul>
  <li><strong>Unsecured Access Barriers:</strong> Exterior doors left unlatched or electronic access control systems failing to engage properly after hours.</li>
  <li><strong>Underground Loading Docks &amp; Parking Garages:</strong> Service basements, waste compaction areas, and vehicle entry gates that remain hidden from main street visibility.</li>
  <li><strong>Vacant Floors &amp; Lease Transition Areas:</strong> Floors undergoing fit-out or awaiting new tenancy, where uninstalled fixtures or copper piping may attract opportunist theft.</li>
  <li><strong>Unmonitored Perimeter Windows &amp; Fire Exits:</strong> Ground-level windows or rear emergency exits that are accidentally left unlatched by exiting workers.</li>
</ul>

<h2>1. Entry Points &amp; Access Control Systems</h2>
<p>Access control is your building's primary line of defense. Property managers should ensure electronic access control card readers switch automatically to high-security mode outside normal business hours. All after-hours visitors, cleaning crews, and sub-contractors must be assigned individually trackable keycards to maintain a digital audit trail.</p>

<h2>2. Loading Docks &amp; Underground Parking Garages</h2>
<p>Basement loading docks and tenant car parks are frequent entry points for unauthorized intruders. Automatic roller shutters should be programmed to close immediately after vehicle entry, and security lighting should remain at 100% illumination throughout the night.</p>

<h2>3. Vacant Floors &amp; Restricted Tenant Areas</h2>
<p>Vacant corporate floors or mechanical plant rooms containing HVAC, lift motor, and electrical distribution equipment should remain locked at all times. Unlocked plant rooms expose critical building infrastructure to accidental damage or deliberate tampering.</p>

<h2>4. Alarm Systems &amp; Surveillance Integration</h2>
<p>Connecting intruder detection sensors, door reed switches, and glass-break detectors to a 24/7 central <a href="/services/alarm-monitoring" className="text-[#1e40af] font-semibold underline">security alarm monitoring station</a> ensures instant signal verification when an after-hours breach occurs.</p>

<h2>5. Static Guards vs Mobile Patrols for Commercial Buildings</h2>
<p>Depending on building scale and tenant risk profiles, property managers can select between stationed <a href="/services/static-guard" className="text-[#1e40af] font-semibold underline">static security guards</a> and periodic <a href="/services/mobile-patrolling" className="text-[#1e40af] font-semibold underline">mobile security patrols</a>:</p>
<ul>
  <li><strong>Static Concierge Guards:</strong> Recommended for high-rise commercial office towers in CBD precincts where on-site lobby management, contractor sign-ins, and continuous physical deterrence are essential.</li>
  <li><strong>GPS Mobile Patrol Vehicles:</strong> Ideal for suburban commercial business parks or multi-building industrial precincts requiring 2–4 randomized site checks and lock-up services per night.</li>
</ul>

<h2>Actionable Commercial Building Security Checklist</h2>
<div className="bg-[#f8f9fa] border border-gray-200 p-6 rounded-xl my-6">
  <h3 className="font-bold text-[#0a1628] text-base mb-4">Property Manager After-Hours Security Checklist:</h3>
  <ol className="space-y-2 text-sm text-gray-700">
    <li><strong>1. Verify Perimeter Lock-Up:</strong> Check all ground-floor glass entry doors, revolving doors, and side emergency exits at closing time.</li>
    <li><strong>2. Audit Keycard Permissions:</strong> Deactivate access credentials for former tenants, terminated staff, and temporary contractors immediately.</li>
    <li><strong>3. Inspect Basement Garages:</strong> Ensure automatic vehicle gates close completely after every car enters or exits.</li>
    <li><strong>4. Lock Mechanical &amp; Server Rooms:</strong> Confirm master keys lock electrical riser cupboards, lift motor rooms, and telecom closets.</li>
    <li><strong>5. Secure Loading Bays:</strong> Verify overhead roller doors are padlocked or electronically secured after evening deliveries.</li>
    <li><strong>6. Maintain Exterior Lighting:</strong> Check that entry canopy LEDs, car park lighting, and rear alley lights operate reliably.</li>
    <li><strong>7. Test Intruder Alarms:</strong> Ensure motion detectors and door sensors communicate correctly with your monitoring station.</li>
    <li><strong>8. Schedule Mobile Lock-Ups &amp; Patrols:</strong> Engage licensed patrol officers to perform randomized perimeter sweeps between 10:00 PM and 5:00 AM.</li>
  </ol>
</div>

<h2>Frequently Asked Questions</h2>
<h3>What is the most common after-hours security breach in commercial office buildings?</h3>
<p>Tailgating — where unauthorized individuals follow legitimate staff or cleaning personnel through access doors — is the most frequent access breach in corporate office buildings.</p>

<h3>Can mobile patrol officers perform lock-ups and staff escorts?</h3>
<p>Yes. Mobile security patrol officers conduct scheduled evening lock-up inspections, arm master alarms, check all perimeter doors, and provide safe escorts for late-working staff to their vehicles.</p>

<h3>What compliance standards do Atlas Security officers follow in commercial buildings?</h3>
<p>All Atlas Security static concierge guards and mobile patrol officers hold active Ministry of Justice Certificates of Approval (COA) under the Private Security Personnel and Private Investigators Act 2010.</p>

<div className="mt-8 p-6 bg-[#0a1628] text-white rounded-xl">
  <h3 className="text-xl font-bold mb-2 text-white">Optimize Your Commercial Building Security</h3>
  <p className="text-gray-300 text-sm mb-4">Explore tailored commercial property security management plans with Atlas Security. Contact our commercial team for a comprehensive building risk evaluation.</p>
  <a href="/services/commercial-security" className="inline-block bg-[#1e40af] hover:bg-[#1d3a9e] text-white font-bold px-6 py-3 rounded-lg text-sm transition-colors">View Commercial Security Services</a>
</div>
`,
    coverImage: '/images/blog-commercial-building.jpg',
    published: true,
    publishedAt: '2026-09-15T00:00:00Z',
    createdAt: '2026-09-15T00:00:00Z',
    updatedAt: '2026-09-15T00:00:00Z',
  },
  {
    id: 'p2-5',
    title: 'What Happens When Your Business Alarm Triggers? Alarm Monitoring Explained',
    slug: 'how-business-alarm-monitoring-works-nz',
    excerpt: 'Understand what occurs behind the scenes when a commercial intruder or fire alarm triggers in New Zealand. Step-by-step breakdown from central station signal to guard dispatch.',
    content: `
<p className="lead">When a commercial intruder alarm or motion sensor triggers outside regular business hours, a rapid, structured response process begins. Understanding how 24/7 central station monitoring operates gives New Zealand business owners confidence that their physical premises, assets, and inventory remain protected around the clock.</p>

<h2>Step 1: Signal Generation &amp; Sensor Detection</h2>
<p>Commercial intruder alarm systems utilize specialized field sensors — including passive infrared (PIR) motion detectors, door magnetic reed switches, glass-break sensors, and perimeter beam sensors. When an unauthorized movement or physical door opening occurs in an armed zone, the alarm control panel immediately registers an intrusion event.</p>

<h2>Step 2: Instant Signal Transmission to Central Station</h2>
<p>The alarm control panel sends an encrypted data signal via dual-path communication (IP internet and cellular network backup) to a 24/7 central monitoring station. Dual-path signaling ensures that even if local phone lines or internet cables are severed, alarm notifications reach operators in seconds.</p>

<h2>Step 3: Operator Verification &amp; Event Assessment</h2>
<p>Upon receiving the alarm signal, trained monitoring station operators analyze the incoming event data within seconds:</p>
<ul>
  <li><strong>Single Zone Trigger:</strong> A single motion sensor activation may prompt immediate phone verification with designated client keyholders.</li>
  <li><strong>Multiple Sequential Triggers:</strong> Multiple motion sensors activating in sequence (e.g., perimeter door followed by hallway PIR) signals an active intrusion, triggering immediate mobile patrol guard dispatch.</li>
  <li><strong>Tamper or Duress Alarms:</strong> Instant high-priority dispatch protocols initiate without delay.</li>
</ul>

<h2>Step 4: Immediate Dispatch of Mobile Patrol Officers</h2>
<p>Once verified, the monitoring station dispatches a nearby GPS-tracked <a href="/services/mobile-patrolling" className="text-[#1e40af] font-semibold underline">mobile patrol security vehicle</a> to the property. Atlas Security patrol officers are strategically positioned across <a href="/service-area/auckland" className="text-[#1e40af] font-semibold underline">Auckland</a>, <a href="/service-area/hamilton" className="text-[#1e40af] font-semibold underline">Hamilton</a>, and <a href="/service-area/wellington" className="text-[#1e40af] font-semibold underline">Wellington</a> to minimize arrival times.</p>

<h2>Step 5: On-Site Physical Inspection &amp; Building Securing</h2>
<p>Upon arriving at your premises, the patrol officer conducts a thorough physical inspection:</p>
<ol>
  <li>Inspects exterior perimeter doors, windows, and loading bay gates for signs of forced entry.</li>
  <li>If entry is detected, officer secures the perimeter and requests police backup while remaining on site.</li>
  <li>If the property is secure, officer resets the alarm panel (if keyholder access is authorized), re-arms the building, and submits an electronic incident report.</li>
</ol>

<h2>Common Causes of Commercial False Alarms and How to Prevent Them</h2>
<div className="bg-[#f8f9fa] border border-gray-200 p-6 rounded-xl my-6">
  <h3 className="font-bold text-[#0a1628] text-base mb-3">Preventing Unnecessary Alarm Dispatches:</h3>
  <ul className="space-y-2 text-sm text-gray-700">
    <li><strong>Staff User Error:</strong> Ensure all employees entering after hours are trained on alarm arming/disarming PIN codes.</li>
    <li><strong>Unserviced Backup Batteries:</strong> Replace aging alarm control box backup batteries every 2–3 years to prevent false triggers during power outages.</li>
    <li><strong>Environmental Interference:</strong> Keep large promotional banners, hanging signs, and HVAC vents clear of motion sensor zones.</li>
    <li><strong>Unlatched Windows:</strong> Ensure cleaning crews close and latch all exterior windows before arming the system at night.</li>
  </ul>
</div>

<h2>Why Professional Alarm Monitoring Outperforms Self-Monitored Phone Apps</h2>
<p>While self-monitored smartphone alarm apps allow owners to receive push notifications, they rely entirely on the owner being awake, attentive, and able to respond at 2:00 AM. In contrast, 24/7 central <a href="/services/alarm-monitoring" className="text-[#1e40af] font-semibold underline">security alarm monitoring</a> provides dedicated, uninterrupted operator oversight and guaranteed mobile guard dispatch 365 days a year.</p>

<h2>Frequently Asked Questions</h2>
<h3>Do I need to change my current alarm hardware to use Atlas Security monitoring?</h3>
<p>In most cases, no. Our central monitoring station integrates seamlessly with standard IP and cellular commercial alarm panels used across New Zealand.</p>

<h3>What happens if an alarm triggers while I am out of the country?</h3>
<p>Our 24/7 monitoring team handles the entire response flow according to your pre-authorized post orders — dispatching mobile patrol officers to inspect the premises, securing the site, and notifying designated keyholders via email or phone.</p>

<h3>Are all alarm response guards licensed in NZ?</h3>
<p>Yes. All Atlas Security mobile patrol officers hold active Ministry of Justice Certificates of Approval (COA) under the Private Security Personnel and Private Investigators Act 2010.</p>

<div className="mt-8 p-6 bg-[#0a1628] text-white rounded-xl">
  <h3 className="text-xl font-bold mb-2 text-white">Protect Your Property with 24/7 Alarm Monitoring</h3>
  <p className="text-gray-300 text-sm mb-4">Ensure fast, reliable security guard dispatch when an intruder alarm triggers. Contact our 24/7 team to set up monitored security for your business.</p>
  <a href="/services/alarm-monitoring" className="inline-block bg-[#1e40af] hover:bg-[#1d3a9e] text-white font-bold px-6 py-3 rounded-lg text-sm transition-colors">Explore Alarm Monitoring Services</a>
</div>
`,
    coverImage: '/images/blog-alarm-monitoring.jpg',
    published: true,
    publishedAt: '2026-09-15T00:00:00Z',
    createdAt: '2026-09-15T00:00:00Z',
    updatedAt: '2026-09-15T00:00:00Z',
  },
  {
    id: 'p2-6',
    title: 'Waikato Industrial & Distribution Yard Security: Unique Risks & Solutions',
    slug: 'waikato-industrial-distribution-yard-security',
    excerpt: 'Explore specialized industrial site security solutions for warehouses, logistics parks, and distribution yards across Hamilton, Te Rapa, and the Waikato region.',
    content: `
<p className="lead">Hamilton and the wider Waikato region serve as the core freight, logistics, and manufacturing heartland of New Zealand's North Island. Industrial parks in Te Rapa, Frankton, Dinsdale, and along the Waikato Expressway manage substantial freight volumes, heavy machinery, and raw material inventory — creating distinct security requirements.</p>

<h2>Unique Security Challenges Facing Waikato Industrial Parks</h2>
<p>Unlike standard urban retail stores or enclosed corporate office towers, industrial and distribution facilities present sprawling physical environments that require multi-layered security planning:</p>
<ul>
  <li><strong>Expansive Storage Yards:</strong> Open staging areas containing shipping containers, structural steel, agricultural machinery, and fleet vehicles spread across several hectares.</li>
  <li><strong>High Freight Movement:</strong> Heavy transport trucks, freight couriers, and sub-contractors moving on and off site throughout early morning and late evening shifts.</li>
  <li><strong>Perimeter Exposure in Industrial Zones:</strong> Facilities located along major transport corridors in Te Rapa, Frankton, and Cambridge often feature extended perimeter fence lines susceptible to cut-wire intrusions.</li>
  <li><strong>Off-Hours Freight Staging:</strong> Trailers and high-value cargo parked in unlit outdoor staging bays overnight before morning dispatch.</li>
</ul>

<h2>Te Rapa &amp; Frankton: Securing Key Logistics Corridors</h2>
<p>As the primary industrial hubs of Hamilton, Te Rapa and Frankton house manufacturing plants, agricultural processing facilities, and large-scale distribution centers. Effective site security in these precincts requires a combination of automated gate access control, high-visibility warning signage, and regular physical vehicle sweeps.</p>

<h2>Combining Mobile Patrol Vehicles &amp; On-Site Guarding</h2>
<p>Industrial facility operators in Waikato achieve maximum protection by combining stationed <a href="/services/static-guard" className="text-[#1e40af] font-semibold underline">static security guards</a> with GPS-tracked <a href="/services/mobile-patrolling" className="text-[#1e40af] font-semibold underline">mobile security patrols</a>:</p>
<ul>
  <li><strong>Gatehouse Static Guards:</strong> Stationed at main transport entrance gates during daytime and evening shift changes to manage driver sign-ins, verify container seals, and log vehicle registration numbers.</li>
  <li><strong>GPS Patrol Vehicle Sweeps:</strong> Conducting randomized night-time inspections of warehouse loading docks, exterior perimeter fencing, and machinery storage yards.</li>
</ul>

<h2>24/7 Alarm Response for Warehouses &amp; Distribution Yards</h2>
<p>Connecting warehouse intruder alarms, perimeter beam sensors, and thermal CCTV cameras to central <a href="/services/alarm-monitoring" className="text-[#1e40af] font-semibold underline">security alarm monitoring</a> ensures that any unauthorized boundary movement triggers immediate mobile patrol guard dispatch from our <a href="/service-area/hamilton" className="text-[#1e40af] font-semibold underline">Hamilton operational headquarters</a>.</p>

<h2>Waikato Industrial Property Security Checklist</h2>
<div className="bg-[#f8f9fa] border border-gray-200 p-6 rounded-xl my-6">
  <h3 className="font-bold text-[#0a1628] text-base mb-3">Essential Yard Security Steps for Waikato Site Operators:</h3>
  <ol className="space-y-2 text-sm text-gray-700">
    <li><strong>1. Inspect Perimeter Fencing:</strong> Verify 2.1m chain-link or security palisade fencing along all yard boundaries.</li>
    <li><strong>2. Secure Freight Staging Yards:</strong> Park trailers and containers close together with doors facing inward to prevent unauthorized entry.</li>
    <li><strong>3. Illuminate Staging Lanes:</strong> Install high-output LED floodlights across truck loading docks and vehicle parking areas.</li>
    <li><strong>4. Enforce Driver Gate Registration:</strong> Require all delivery drivers and sub-contractors to present photo ID at gatehouse checkpoints.</li>
    <li><strong>5. Schedule Night-Time Patrol Sweeps:</strong> Arrange randomized mobile vehicle checks throughout evening hours.</li>
    <li><strong>6. Maintain 24/7 Monitored Protection:</strong> Connect perimeter intruder beams to centralized alarm monitoring.</li>
  </ol>
</div>

<h2>Frequently Asked Questions</h2>
<h3>Where is Atlas Security headquartered in Waikato?</h3>
<p>Atlas Security operates its primary operational headquarters in Hamilton, providing centralized management, guard coordination, and rapid mobile patrol dispatch across the Waikato region.</p>

<h3>Do you service industrial areas outside Hamilton CBD?</h3>
<p>Yes. We provide comprehensive static guarding and mobile patrol coverage across Te Rapa, Frankton, Dinsdale, Cambridge, Te Awamutu, Morrinsville, and the broader Waikato commercial corridor.</p>

<h3>Can static guards manage truck sign-ins and container seal checks?</h3>
<p>Yes. Our industrial security guards are experienced in logistics gatehouse operations, bill of lading checks, container seal verification, and driver safety inductions.</p>

<div className="mt-8 p-6 bg-[#0a1628] text-white rounded-xl">
  <h3 className="text-xl font-bold mb-2 text-white">Protect Your Waikato Industrial Property</h3>
  <p className="text-gray-300 text-sm mb-4">Partner with Hamilton's local security specialists. Contact Atlas Security today for an on-site industrial security risk evaluation.</p>
  <a href="/service-area/hamilton" className="inline-block bg-[#1e40af] hover:bg-[#1d3a9e] text-white font-bold px-6 py-3 rounded-lg text-sm transition-colors">View Hamilton &amp; Waikato Services</a>
</div>
`,
    coverImage: '/images/blog-industrial-yard.jpg',
    published: true,
    publishedAt: '2026-09-15T00:00:00Z',
    createdAt: '2026-09-15T00:00:00Z',
    updatedAt: '2026-09-15T00:00:00Z',
  },
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
    coverImage: '/images/blog-static-vs-mobile.jpg',
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
    coverImage: '/images/blog-construction-security.jpg',
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
    coverImage: '/images/blog-retail-security.jpg',
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
    coverImage: '/images/blog-security-tips.jpg',
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
    coverImage: '/images/blog-mobile-patrols.jpg',
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
    coverImage: '/images/blog-wellington-security.jpg',
    published: true,
    publishedAt: '2026-05-10T00:00:00Z',
    createdAt: '2026-05-10T00:00:00Z',
    updatedAt: '2026-05-10T00:00:00Z',
  },
  {
    id: 'p3-1',
    title: 'What to Look For in a COA-Licensed Security Guard in New Zealand',
    slug: 'how-to-choose-coa-licensed-security-guard-nz',
    excerpt: 'Learn why Ministry of Justice COA licensing matters when hiring security guards in New Zealand, and how to verify professional standards, vetting, and compliance for your business.',
    content: `
<p className="lead">Hiring physical security for your commercial premises, construction site, or retail store in New Zealand requires verifying that your security personnel are fully compliant with national legal standards. In New Zealand, all security guards, mobile patrol officers, and crowd controllers must hold an active <strong>Certificate of Approval (COA)</strong> issued by the Ministry of Justice.</p>

<h2>Why Security Guard Licensing Matters in New Zealand</h2>
<p>Under the <em>Private Security Personnel and Private Investigators Act 2010</em>, operating as a security guard without a valid COA is illegal. Licensing ensures that security personnel have undergone strict background vetting, criminal history checks, and professional competency training before taking responsibility for your property and staff safety.</p>

<h2>Key Criteria to Check When Hiring Security Guards</h2>
<p>When selecting a security provider in <a href="/service-area/auckland" className="text-[#1e40af] font-semibold underline">Auckland</a>, <a href="/service-area/hamilton" className="text-[#1e40af] font-semibold underline">Hamilton</a>, or <a href="/service-area/wellington" className="text-[#1e40af] font-semibold underline">Wellington</a>, ensure they meet these core operational standards:</p>
<ul>
  <li><strong>Active Ministry of Justice COA Credential:</strong> Verify that guards carry their physical COA badge displaying their legal name, photograph, expiration date, and approved classes of security work.</li>
  <li><strong>Background Vetting &amp; Criminal History Checks:</strong> Confirm that the security firm conducts police background checks and reference screening.</li>
  <li><strong>Site-Specific Training &amp; De-Escalation Skills:</strong> Ensure guards are trained in verbal conflict de-escalation, emergency evacuation procedures, and incident reporting.</li>
  <li><strong>Clear Escalation &amp; Communication Protocols:</strong> Verify how guards log incidents, communicate with 24/7 dispatch, and notify emergency services during an active incident.</li>
</ul>

<h2>COA Licensing Classes &amp; Professional Standards</h2>
<p>The Ministry of Justice issues COA licenses across specific security categories. Depending on your operational requirements, your security officers should hold credentials in:</p>
<ul>
  <li><strong>Property Guarding:</strong> Stationed <a href="/services/static-guard" className="text-[#1e40af] font-semibold underline">static security guards</a> protecting corporate office towers, warehouses, and industrial yards.</li>
  <li><strong>Personal Guarding &amp; Crowd Control:</strong> Managing access control, retail store entry points, and high-traffic public events.</li>
  <li><strong>Mobile Patrol &amp; Alarm Response:</strong> Conducting vehicle sweeps and responding to 24/7 <a href="/services/alarm-monitoring" className="text-[#1e40af] font-semibold underline">security alarm activations</a>.</li>
</ul>

<h2>Questions to Ask a Security Guard Provider Before Signing</h2>
<div className="bg-[#f8f9fa] border border-gray-200 p-6 rounded-xl my-6">
  <h3 className="font-bold text-[#0a1628] text-base mb-3">Essential Buyer Audit Questions:</h3>
  <ol className="space-y-2 text-sm text-gray-700">
    <li><strong>1. Are 100% of your guards COA-licensed in New Zealand?</strong> (Every on-site officer must hold active credentials).</li>
    <li><strong>2. How do you track officer attendance and patrol sweeps?</strong> (Ensure they use GPS tracking and electronic scan points).</li>
    <li><strong>3. What is your incident reporting procedure?</strong> (Verify that time-stamped digital reports are provided after every shift or alarm response).</li>
    <li><strong>4. Do you provide localized coverage in our region?</strong> (Check regional operational hubs in Auckland, Hamilton, or Wellington).</li>
  </ol>
</div>

<h2>Matching Security Coverage to Your Property Needs</h2>
<p>Different property types require distinct guard deployment models. Commercial office towers benefit from stationed concierge guards, while expansive logistics yards across <a href="/service-area/hamilton" className="text-[#1e40af] font-semibold underline">Te Rapa and Waikato</a> are best served by a combination of static gatehouse guards and GPS-tracked <a href="/services/mobile-patrolling" className="text-[#1e40af] font-semibold underline">mobile security patrols</a>.</p>
<p>Read our detailed guide on <a href="/blog/static-guards-vs-mobile-patrols-nz" className="text-[#1e40af] font-semibold underline">Static Security Guards vs Mobile Patrols</a> to evaluate which model best fits your operational budget.</p>

<h2>How Atlas Security Guarantees Licensing Compliance</h2>
<p>At Atlas Security NZ, 100% of our security personnel hold active Ministry of Justice COA credentials. Our operational management team conducts ongoing compliance audits, site inductions, and performance reviews to ensure uncompromising safety standards across every client location in New Zealand.</p>
<p>Learn more about our company values and professional standards on our <a href="/about" className="text-[#1e40af] font-semibold underline">About Atlas Security</a> page.</p>

<h2>Frequently Asked Questions</h2>
<h3>How can I verify if a security guard's COA is authentic?</h3>
<p>You can request to view the guard's physical COA card, which displays their photo and license number, or verify licensing credentials directly through the Ministry of Justice Private Security Personnel Licensing Authority (PSPLA) public register.</p>

<h3>What happens if an un-licensed guard works on my property?</h3>
<p>Deploying unlicensed security guards is a violation of the Private Security Personnel and Private Investigators Act 2010. It exposes business owners to serious legal liability, insurance invalidation, and safety risks.</p>

<h3>Do Atlas Security guards undergo site-specific inductions?</h3>
<p>Yes. Before commencing duties at your premises, every Atlas Security guard completes a thorough site risk assessment and operational induction covering emergency exits, access control systems, post orders, and health &amp; safety requirements.</p>

<div className="mt-8 p-6 bg-[#0a1628] text-white rounded-xl">
  <h3 className="text-xl font-bold mb-2 text-white">Hire Licensed COA Security Guards for Your Business</h3>
  <p className="text-gray-300 text-sm mb-4">Partner with a fully licensed, compliant New Zealand security provider. Contact Atlas Security today for a tailored quote.</p>
  <a href="/contact" className="inline-block bg-[#1e40af] hover:bg-[#1d3a9e] text-white font-bold px-6 py-3 rounded-lg text-sm transition-colors">Request Security Guard Quote</a>
</div>
`,
    coverImage: '/images/blog-coa-guard.jpg',
    published: true,
    publishedAt: '2026-09-15T00:00:00Z',
    createdAt: '2026-09-15T00:00:00Z',
    updatedAt: '2026-09-15T00:00:00Z',
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