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
  <li><strong>Unsecured Access Barriers &amp; Tenant Access:</strong> Exterior doors left unlatched or electronic access control systems failing to engage properly after hours.</li>
  <li><strong>Underground Loading Docks &amp; Parking Garages:</strong> Service basements, loading dock security gates, waste compaction areas, and vehicle entry gates that remain hidden from main street visibility.</li>
  <li><strong>Vacant Floor Checks &amp; Lease Transition Areas:</strong> Vacant floor checks in suites undergoing fit-out or awaiting new tenancy, where uninstalled fixtures or copper piping may attract opportunist theft.</li>
  <li><strong>Unmonitored Perimeter Windows &amp; Fire Exits:</strong> Ground-level windows or rear emergency exits that are accidentally left unlatched by exiting workers.</li>
</ul>

<h2>1. Tenant Access &amp; Entry Control Systems</h2>
<p>Access control is your building's primary line of defense. Property managers should ensure electronic access control card readers switch automatically to high-security mode outside normal business hours. All after-hours visitors, cleaning crews, and sub-contractors must be assigned individually trackable keycards to maintain a digital audit trail.</p>

<h2>2. Loading Dock Security &amp; Underground Garages</h2>
<p>Basement loading dock security and tenant car parks are frequent entry points for unauthorized intruders. Automatic roller shutters should be programmed to close immediately after vehicle entry, and security lighting should remain at 100% illumination throughout the night.</p>

<h2>3. Vacant Floor Checks &amp; Restricted Tenant Areas</h2>
<p>Conducting systematic vacant floor checks in unleased corporate floors or mechanical plant rooms containing HVAC, lift motor, and electrical distribution equipment ensures unauthorized access is detected early. Unlocked plant rooms expose critical building infrastructure to accidental damage or deliberate tampering.</p>

<h2>4. Alarm Escalation &amp; Surveillance Integration</h2>
<p>Connecting intruder detection sensors, door reed switches, and glass-break detectors to a 24/7 central <a href="/services/alarm-monitoring" className="text-[#1e40af] font-semibold underline">security alarm monitoring station</a> ensures instant signal verification and rapid alarm escalation when an after-hours breach occurs.</p>

<h2>5. Static Guards vs Mobile Patrols for Commercial Buildings</h2>
<p>Depending on building scale and tenant risk profiles, property managers can select between stationed <a href="/services/static-guard" className="text-[#1e40af] font-semibold underline">static security guards</a> and periodic <a href="/services/mobile-patrolling" className="text-[#1e40af] font-semibold underline">mobile security patrols</a>:</p>
<ul>
  <li><strong>Static Concierge Guards:</strong> Recommended for high-rise commercial office towers in CBD precincts where on-site lobby management, contractor sign-ins, tenant access management, and continuous physical deterrence are essential.</li>
  <li><strong>GPS Mobile Patrol Vehicles:</strong> Ideal for suburban commercial business parks or multi-building industrial precincts requiring 2–4 randomized site checks, after-hours visitor procedures, and lock-up services per night.</li>
</ul>

<h2>Actionable Commercial Building Security Checklist for Property Managers</h2>
<div className="bg-[#f8f9fa] border border-gray-200 p-6 rounded-xl my-6">
  <h3 className="font-bold text-[#0a1628] text-base mb-4">Property Manager After-Hours &amp; Pre-Closing Security Checklist:</h3>
  <ol className="space-y-2 text-sm text-gray-700">
    <li><strong>1. Verify Perimeter Lock-Up &amp; Entry Points:</strong> Check all ground-floor glass entry doors, revolving doors, turnstiles, and side emergency exits at closing time.</li>
    <li><strong>2. Audit Tenant Access &amp; Contractor Credentials:</strong> Deactivate access credentials for former tenants, terminated staff, and temporary contractors immediately upon project completion.</li>
    <li><strong>3. Inspect Basement Garages &amp; Loading Docks:</strong> Enforce loading dock security by confirming overhead roller doors and waste bins are padlocked or electronically secured after evening deliveries.</li>
    <li><strong>4. Conduct Vacant Floor Checks:</strong> Inspect vacant floor suites, electrical riser cupboards, lift motor rooms, telecom closets, and server racks.</li>
    <li><strong>5. Manage After-Hours Visitor &amp; Access Procedures:</strong> Enforce strict sign-in logs and badge issuing for evening cleaning crews and maintenance contractors.</li>
    <li><strong>6. Maintain Exterior &amp; Canopy Lighting:</strong> Check that entry canopy LEDs, car park floodlights, and rear alley security lights operate reliably throughout the night.</li>
    <li><strong>7. Test Intruder Alarms &amp; Signal Transmission:</strong> Ensure motion detectors, door reed switches, and glass-break sensors communicate correctly with your 24/7 central monitoring station.</li>
    <li><strong>8. Schedule Mobile Lock-Ups &amp; Static Concierge Sweeps:</strong> Engage licensed patrol officers or static guards to perform randomized perimeter sweeps between 10:00 PM and 5:00 AM.</li>
  </ol>
</div>

<h2>Frequently Asked Questions</h2>
<h3>What is the most common after-hours security breach in commercial office buildings?</h3>
<p>Tailgating — where unauthorized individuals follow legitimate staff or cleaning personnel through access doors — is the most frequent access breach in corporate office buildings.</p>

<h3>Can mobile patrol officers perform lock-ups and staff escorts?</h3>
<p>Yes. Mobile security patrol officers conduct scheduled evening lock-up inspections, arm master alarms, check loading dock security, and provide safe escorts for late-working staff to their vehicles.</p>

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

<h2>What Information a Monitoring Provider Needs Prior to Setup</h2>
<p>Before connecting your facility to a 24/7 central monitoring network, establishing accurate system details is critical. Key information required includes:</p>
<ul>
  <li><strong>Alarm Control Panel &amp; Zone Labels:</strong> Make and model of control panel, dual-path IP/cellular dialer serials, and clear descriptive zone names (e.g. Zone 4 — North Emergency Exit).</li>
  <li><strong>Keyholder &amp; Escalation Planning:</strong> Ordered contact hierarchy of primary, secondary, and emergency phone numbers for business owners, facilities managers, and site keyholders.</li>
  <li><strong>Guard Dispatch Authorizations:</strong> Pre-approved instructions stating whether the monitoring station should dispatch a mobile patrol vehicle immediately upon signal verification.</li>
  <li><strong>Site Access &amp; Lock-Box Passcodes:</strong> Secure gate codes, key lock-box numbers, and entry alarm disarm codes for responding officers.</li>
</ul>

<h2>Step 1: Signal Generation &amp; Sensor Detection</h2>
<p>Commercial intruder alarm systems utilize specialized field sensors — including passive infrared (PIR) motion detectors, door magnetic reed switches, glass-break sensors, and perimeter beam sensors. When an unauthorized movement or physical door opening occurs in an armed zone, the alarm control panel immediately registers an intrusion event.</p>

<h2>Step 2: Instant Signal Transmission to Central Station</h2>
<p>The alarm control panel sends an encrypted data signal via dual-path communication (IP internet and cellular network backup) to a 24/7 central monitoring station. Dual-path signaling ensures that even if local phone lines or internet cables are severed, alarm notifications reach operators in seconds.</p>

<h2>Step 3: Operator Verification &amp; Keyholder Escalation Planning</h2>
<p>Upon receiving the alarm signal, trained monitoring station operators analyze the incoming event data within seconds:</p>
<ul>
  <li><strong>Single Zone Trigger:</strong> A single motion sensor activation may prompt immediate phone verification according to keyholder/escalation planning rules.</li>
  <li><strong>Multiple Sequential Triggers:</strong> Multiple motion sensors activating in sequence (e.g., perimeter door followed by hallway PIR) signals an active intrusion, triggering immediate mobile patrol guard dispatch.</li>
  <li><strong>Tamper or Duress Alarms:</strong> Instant high-priority dispatch protocols initiate without delay.</li>
</ul>

<h2>Step 4: Immediate Dispatch of Mobile Patrol Officers</h2>
<p>Once verified, the monitoring station dispatches a nearby GPS-tracked <a href="/services/mobile-patrolling" className="text-[#1e40af] font-semibold underline">mobile patrol security vehicle</a> to the property. Atlas Security patrol officers are strategically positioned across <a href="/service-area/auckland" className="text-[#1e40af] font-semibold underline">Auckland</a>, <a href="/service-area/hamilton" className="text-[#1e40af] font-semibold underline">Hamilton</a>, and <a href="/service-area/wellington" className="text-[#1e40af] font-semibold underline">Wellington</a> to minimize arrival times.</p>

<h2>Step 5: On-Site Physical Inspection &amp; Relationship to Physical Response</h2>
<p>Alarm monitoring provides rapid digital threat detection, while physical security response delivers on-site intervention. Upon arriving at your premises, the patrol officer conducts a thorough physical inspection:</p>
<ol>
  <li>Inspects exterior perimeter doors, windows, and loading bay gates for signs of forced entry.</li>
  <li>If entry is detected, officer secures the perimeter and requests police backup while remaining on site.</li>
  <li>If the property is secure, officer resets the alarm panel (if keyholder access is authorized), re-arms the building, and submits an electronic incident report.</li>
</ol>

<h2>Maintaining Alarm Instructions &amp; Periodic Reviews</h2>
<p>Businesses should review their alarm instructions and keyholder contacts at least twice per year. Staff turnover, updated mobile numbers, or changes to after-hours entry procedures must be updated immediately with your monitoring provider to prevent delayed escalations or unnecessary callout fees.</p>

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
<p>While self-monitored smartphone alarm apps allow owners to receive push notifications, they rely entirely on the owner being awake, attentive, and able to respond at 2:00 AM. In contrast, 24/7 central <a href="/services/alarm-monitoring" className="text-[#1e40af] font-semibold underline">security alarm monitoring</a> provides dedicated, uninterrupted operator oversight and reliable, protocol-driven mobile guard dispatch 365 days a year.</p>

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

<h2>How to Decide Based on Site Characteristics</h2>
<p>Evaluating site characteristics helps property owners choose the optimal security model:</p>
<ul>
  <li><strong>Permanent Presence vs Scheduled Patrol Checks:</strong> High-risk assets, high visitor traffic, or active contractor access demand permanent on-site static guarding. Lower-risk, enclosed, or unoccupied properties benefit from scheduled or randomized mobile patrol checks.</li>
  <li><strong>Combining Both Approaches (Hybrid Strategy):</strong> Combining static guarding during busy operating hours with mobile patrols during non-operational night shifts provides seamless protection.</li>
  <li><strong>Buyer Planning Considerations:</strong> Evaluate key access points, property boundary size, insurance mandates, and shift hours before requesting quotes.</li>
</ul>

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
  <li><strong>Unsecured High-Value Materials &amp; Equipment:</strong> Bundles of copper cabling, structural timber, plumbing fittings, and roofing sheets stored in open yards.</li>
  <li><strong>After-Hours Site Vacancy:</strong> Sites left unattended from 5:00 PM until 7:00 AM on weekdays and completely unstaffed over weekends and public holidays.</li>
  <li><strong>Complex Site Perimeters &amp; Contractor Access:</strong> Multiple temporary access gates, incomplete hoarding, unverified contractor access, and unlit blind spots along site boundaries in developing subdivisions across <a href="/service-area/auckland" className="text-[#1e40af] font-semibold underline">Auckland</a> and <a href="/service-area/hamilton" className="text-[#1e40af] font-semibold underline">Hamilton</a>.</li>
</ul>

<h2>Security Planning by Construction Stage</h2>
<p>Security requirements evolve through each phase of a development project:</p>
<ul>
  <li><strong>Phase 1 — Site Setup &amp; Excavation:</strong> Perimeter hoarding installation, gate locking mechanisms, temporary security floodlighting, and heavy equipment immobilization.</li>
  <li><strong>Phase 2 — Active Frame &amp; Fit-Out:</strong> Contractor sign-in logs, copper cable and tool vault locking, night-time static guarding, and gate access management.</li>
  <li><strong>Phase 3 — Completion &amp; Handover:</strong> Appliance protection, final lock-up inspections, and frequent mobile patrol sweeps until tenant occupancy.</li>
</ul>

<h2>10-Point Construction Site Theft Prevention &amp; Shutdown Checklist</h2>
<div className="bg-[#f8f9fa] border border-gray-200 p-6 rounded-xl my-6">
  <h3 className="font-bold text-[#0a1628] text-base mb-4">Essential Security Measures &amp; Site Shutdown Checklist for Site Managers:</h3>
  <ol className="space-y-2 text-sm text-gray-700">
    <li><strong>1. Secure Perimeter Hoarding &amp; Boundary Checks:</strong> Install 2.1m heavy-duty anti-climb mesh fencing with locked gates and perform daily perimeter checks.</li>
    <li><strong>2. Implement Gatehouse Visitor &amp; Contractor Access Logging:</strong> Require all sub-contractors, delivery drivers, and visitors to sign in and present ID.</li>
    <li><strong>3. Equipment &amp; Material Protection in Lockboxes:</strong> Store all handheld power tools, copper wiring, and fitting components inside heavy steel job-site storage vaults.</li>
    <li><strong>4. Immobilize Heavy Machinery &amp; Plant Equipment:</strong> Remove ignition keys, lock cab doors, and lower excavator buckets flat to the ground.</li>
    <li><strong>5. Deploy Motion-Sensor Solar Floodlighting:</strong> Illuminate material staging bays and unlit site corners.</li>
    <li><strong>6. Engrave Company Identifiers &amp; Asset Tags:</strong> Mark expensive equipment and power tools with permanent micro-dots or company logos.</li>
    <li><strong>7. Post Visible Warning Signage:</strong> Display clear <em>"Warning: Licensed Security Guard &amp; GPS Patrols on Site"</em> notices on all gates.</li>
    <li><strong>8. Stage Deliveries Just-In-Time:</strong> Schedule copper cable and high-value appliance deliveries immediately prior to installation.</li>
    <li><strong>9. Deploy Static Guards After Hours:</strong> Station licensed COA security officers on site during evening, weekend, and holiday shutdown periods.</li>
    <li><strong>10. Execute Nightly Site Shutdown Checks:</strong> Perform randomized mobile patrol vehicle sweeps throughout non-operational hours.</li>
  </ol>
</div>

<h2>How Security Guards Protect Construction Sites</h2>
<p>Deploying licensed <a href="/services/construction-site-security" className="text-[#1e40af] font-semibold underline">construction site security guards</a> provides an active, physical deterrent that electronic alarms alone cannot match. Stationed guards perform active perimeter walks, check storage container locks, verify overnight delivery vehicles, manage contractor access, and clear trespassers before damage occurs.</p>
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

<h2>Opening, Closing &amp; Trading Hours Security Procedures</h2>
<p>Security protocols must cover every phase of the retail operating day:</p>
<ul>
  <li><strong>Opening Security Procedures:</strong> Pre-opening floor sweeps, verifying exterior locks, checking panic alarms, and ensuring safe staff entry before unlocking customer doors.</li>
  <li><strong>Trading Hours &amp; High-Risk Periods:</strong> Uniformed store security guard presence, attentive customer engagement, monitoring high-value merchandise areas, and staff safety oversight during peak footfall hours.</li>
  <li><strong>Closing Security Procedures &amp; Incident Escalation:</strong> Managing register reconciliation clearing, closing door lock-up, conducting staff car escorts, and maintaining zero-tolerance incident escalation protocols.</li>
</ul>

<h2>10 Practical Retail Loss Prevention &amp; Staff Safety Procedures</h2>
<ol>
  <li><strong>Deploy Uniformed Retail Security Guards:</strong> Stationing trained <a href="/services/retail-security" className="text-[#1e40af] font-semibold underline">retail security guards</a> at store entrances creates an immediate visible deterrent to potential thieves while greeting legitimate shoppers.</li>
  <li><strong>Protect High-Value Merchandise Areas:</strong> Display premium inventory inside locked glass showcases, install electronic article surveillance (EAS) tags, and position high-shrink items near checkout stations.</li>
  <li><strong>Enforce Opening &amp; Closing Procedures:</strong> Require dual-staff presence during opening and closing hours, verify emergency exits are unblocked, and escort staff to vehicles.</li>
  <li><strong>Prioritize Staff Safety &amp; Incident Escalation:</strong> Provide staff with clear de-escalation training and non-confrontational procedures, leaving physical interventions to trained security guards.</li>
  <li><strong>Maintain 24/7 CCTV &amp; Alarm Integration:</strong> Connect store intruder alarms to central <a href="/services/alarm-monitoring" className="text-[#1e40af] font-semibold underline">alarm monitoring</a> for immediate mobile guard dispatch when closed.</li>
  <li><strong>Optimize Floor Visibility &amp; Layout:</strong> Eliminate tall aisle displays that block staff line-of-sight and keep checkout sightlines unobstructed.</li>
  <li><strong>Audit Fitting Room Access:</strong> Track item counts entering and leaving fitting room suites.</li>
  <li><strong>Conduct Regular Inventory Audits:</strong> Track stock shrinkage trends to pinpoint vulnerable product lines early.</li>
  <li><strong>Implement Mobile Lock-Up Sweeps:</strong> Have a <a href="/services/mobile-patrolling" className="text-[#1e40af] font-semibold underline">mobile patrol officer</a> check exterior doors and windows after closing.</li>
  <li><strong>Post Visible Security Signs:</strong> Display clear notices stating premises are monitored by COA-certified guards and 24/7 surveillance.</li>
</ol>

<h2>How Retail Security Guards Support Store Loss Prevention</h2>
<p>Trained <a href="/services/static-guard" className="text-[#1e40af] font-semibold underline">static security guards</a> serve a dual role in retail: they provide active loss prevention oversight while maintaining excellent customer service standards. Our COA-certified officers are skilled in verbal de-escalation, conflict resolution, crowd management, and incident documentation — ensuring your store remains safe and compliant with Ministry of Justice standards.</p>

<h2>Frequently Asked Questions</h2>
<h3>How do retail security guards balance theft deterrence with customer service?</h3>
<p>Our retail security officers are trained in customer engagement and professional etiquette. They act as welcoming brand ambassadors for genuine customers while providing a firm, professional deterrent to shoplifters.</p>

<h3>Can Atlas Security provide short-term security for retail sales events or peak seasons?</h3>
<p>Yes. We provide flexible guard deployments for holiday trading periods, Black Friday events, store grand openings, and high-traffic promotional sales across New Zealand.</p>

<h3>What compliance licenses do your retail guards hold?</h3>
<p>Every Atlas Security officer holds an active Ministry of Justice Certificate of Approval (COA) under the Private Security Personnel and Private Investigators Act 2010.</p>

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
<p className="lead">Physical security is an essential operational requirement for commercial premises, retail stores, and industrial sites across <a href="/service-area/auckland" className="text-[#1e40af] font-semibold underline">Auckland</a>, <a href="/service-area/hamilton" className="text-[#1e40af] font-semibold underline">Hamilton</a>, and <a href="/service-area/wellington" className="text-[#1e40af] font-semibold underline">Wellington</a>. Implementing robust security protocols protects employees, physical assets, and inventory from unauthorized entry, opportunist theft, and property damage.</p>

<h2>1. Conduct Regular Physical Security Audits</h2>
<p>Regularly inspect perimeter fencing, gate latches, exterior LED floodlighting, and electronic access control systems. Identifying physical vulnerabilities early prevents intruders from exploiting weak access points outside regular operating hours.</p>
<div className="bg-[#f8f9fa] border-l-4 border-[#1e40af] p-4 my-4 text-xs space-y-1">
  <p><strong>WHAT TO CHECK:</strong> Boundary fence wire integrity, gate latch mechanisms, and ground-level window locks.</p>
  <p><strong>WHY IT MATTERS:</strong> Over 70% of commercial intrusions enter through compromised ground-level access points.</p>
  <p><strong>WHAT TO DO NEXT:</strong> Schedule a monthly perimeter audit and repair loose fence panels immediately.</p>
</div>

<h2>2. Deploy Licensed On-Site Security Personnel</h2>
<p>A visible, uniformed security presence remains the single most effective deterrent against burglary and antisocial behavior. Depending on your building type and budget, property managers can select between stationed <a href="/services/static-guard" className="text-[#1e40af] font-semibold underline">static security guards</a> and periodic vehicle patrols. Read our guide on <a href="/blog/static-guards-vs-mobile-patrols-nz" className="text-[#1e40af] font-semibold underline">static security guards vs mobile patrols</a> to evaluate the right fit for your property.</p>
<div className="bg-[#f8f9fa] border-l-4 border-[#1e40af] p-4 my-4 text-xs space-y-1">
  <p><strong>WHAT TO CHECK:</strong> Peak risk hours, visitor traffic volume, and high-value asset storage zones.</p>
  <p><strong>WHY IT MATTERS:</strong> Active physical guards intervene in real time, preventing property damage before it escalates.</p>
  <p><strong>WHAT TO DO NEXT:</strong> Request a customized site guard proposal tailored to your operational hours.</p>
</div>

<h2>3. Implement Rigorous Access Control &amp; Visitor Sign-Ins</h2>
<p>Control access to corporate office floors and warehouse bays by issuing trackable contractor keycards and logging all visitors at main reception desks or gatehouses. Ensure keycard permissions for former employees or temporary contractors are revoked immediately.</p>
<div className="bg-[#f8f9fa] border-l-4 border-[#1e40af] p-4 my-4 text-xs space-y-1">
  <p><strong>WHAT TO CHECK:</strong> Active electronic keycard permissions and contractor sign-in registries.</p>
  <p><strong>WHY IT MATTERS:</strong> Unrevoked access cards allow unmonitored entries into restricted corporate or storage zones.</p>
  <p><strong>WHAT TO DO NEXT:</strong> Perform a weekly keycard audit and revoke inactive employee badges immediately.</p>
</div>

<h2>4. Secure Construction &amp; High-Risk Sites After Hours</h2>
<p>Building sites and civil infrastructure projects contain exposed tools, copper cabling, and heavy plant equipment. Follow our <a href="/blog/construction-site-theft-prevention-nz" className="text-[#1e40af] font-semibold underline">construction site theft prevention guide</a> and consider deploying dedicated <a href="/services/construction-site-security" className="text-[#1e40af] font-semibold underline">construction security guards</a> during night-time and weekend shifts.</p>
<div className="bg-[#f8f9fa] border-l-4 border-[#1e40af] p-4 my-4 text-xs space-y-1">
  <p><strong>WHAT TO CHECK:</strong> Perimeter hoardings, heavy machinery cabs, and tool storage vaults.</p>
  <p><strong>WHY IT MATTERS:</strong> Unsecured tools and materials are prime targets for opportunistic after-hours theft.</p>
  <p><strong>WHAT TO DO NEXT:</strong> Lock all handheld power tools in steel vaults and schedule night-time <a href="/services/mobile-patrolling" className="text-[#1e40af] font-semibold underline">mobile patrol checks</a>.</p>
</div>

<h2>5. Partner with a 24/7 Monitored Alarm &amp; Guard Response Provider</h2>
<p>Ensure your intruder detection sensors and CCTV surveillance systems connect directly to a 24/7 central monitoring station capable of instant signal verification and immediate <a href="/services/alarm-monitoring" className="text-[#1e40af] font-semibold underline">security guard response dispatch</a>.</p>
<div className="bg-[#f8f9fa] border-l-4 border-[#1e40af] p-4 my-4 text-xs space-y-1">
  <p><strong>WHAT TO CHECK:</strong> Alarm control panel backup batteries and keyholder emergency contact lists.</p>
  <p><strong>WHY IT MATTERS:</strong> Dual-path monitoring ensures rapid guard dispatch even if phone cables or internet lines fail.</p>
  <p><strong>WHAT TO DO NEXT:</strong> Test your alarm signaling with your monitoring station quarterly.</p>
</div>

<h2>Actionable NZ Business Security Checklist</h2>
<div className="bg-[#f8f9fa] border border-gray-200 p-6 rounded-xl my-6">
  <h3 className="font-bold text-[#0a1628] text-base mb-3">Key Workplace Security Steps:</h3>
  <ul className="space-y-2 text-sm text-gray-700">
    <li>• <strong>Audit Perimeter Lighting:</strong> Replace blown fixtures along dark loading bays and rear entryways.</li>
    <li>• <strong>Verify Keyholder Lists:</strong> Keep 24/7 emergency contact details current with your monitoring station.</li>
    <li>• <strong>Schedule Night Lock-Ups:</strong> Engage <a href="/services/mobile-patrolling" className="text-[#1e40af] font-semibold underline">mobile security patrols</a> for randomized perimeter sweeps between 10 PM and 5 AM.</li>
  </ul>
</div>

<div className="mt-8 p-6 bg-[#0a1628] text-white rounded-xl">
  <h3 className="text-xl font-bold mb-2 text-white">Protect Your NZ Business Today</h3>
  <p className="text-gray-300 text-sm mb-4">Contact Atlas Security for a free physical security assessment and tailored service proposal.</p>
  <a href="/contact" className="inline-block bg-[#1e40af] hover:bg-[#1d3a9e] text-white font-bold px-6 py-3 rounded-lg text-sm transition-colors">Request Free Security Assessment</a>
</div>
`,
    coverImage: '/images/blog-security-tips.jpg',
    published: true,
    publishedAt: '2026-06-01T00:00:00Z',
    createdAt: '2026-06-01T00:00:00Z',
    updatedAt: '2026-06-01T00:00:00Z',
  },
  {
    id: '2',
    title: 'Why Mobile Patrols Are the Future of NZ Commercial Site Security',
    slug: 'mobile-patrols-future-nz-security',
    excerpt: 'Static guards are just one layer. Discover why leading NZ businesses are switching to GPS-tracked mobile patrol solutions for cost-effective after-hours protection.',
    content: `
<p className="lead">As commercial property footprints expand across <a href="/service-area/auckland" className="text-[#1e40af] font-semibold underline">Auckland</a>, <a href="/service-area/hamilton" className="text-[#1e40af] font-semibold underline">Hamilton</a>, and <a href="/service-area/wellington" className="text-[#1e40af] font-semibold underline">Wellington</a>, business owners are looking for flexible physical protection strategies that balance rigorous threat deterrence with operational budget efficiency. Mobile security patrols are rapidly becoming the preferred choice for commercial precincts, industrial parks, and multi-tenant facilities.</p>

<h2>What Are Mobile Security Patrols?</h2>
<p>Unlike stationed guards who remain at a single location throughout their shift, <a href="/services/mobile-patrolling" className="text-[#1e40af] font-semibold underline">mobile security patrols</a> feature licensed officers operating GPS-tracked vehicles across dedicated patrol sectors. Officers conduct randomized and scheduled physical inspections of exterior building perimeters, unlit storage yards, loading bays, and entry gates.</p>

<h2>Why NZ Businesses Are Adopting Mobile Patrols</h2>
<ul>
  <li><strong>Unpredictable Inspection Schedule:</strong> Randomized patrol timings prevent potential trespassers from predicting guard arrivals, creating a dynamic physical threat deterrent.</li>
  <li><strong>Cost-Effective Physical Coverage:</strong> Enjoy active multi-point physical security checks at a fraction of the cost of stationing a full-time dedicated static guard.</li>
  <li><strong>Integrated After-Hours Lock-Ups:</strong> Mobile officers securely close main gates, inspect exterior fire doors, arm master security alarm systems, and escort late-working staff to their vehicles.</li>
  <li><strong>Immediate 24/7 Alarm Verification &amp; Dispatch:</strong> Patrol vehicles operate as first responders when intruder sensors trigger at our central <a href="/services/alarm-monitoring" className="text-[#1e40af] font-semibold underline">security alarm monitoring station</a>.</li>
</ul>

<h2>Comparing Patrols to On-Site Guarding</h2>
<p>Choosing between static guards and mobile patrols depends on your facility's operational hours and risk level. Dedicated <a href="/services/static-guard" className="text-[#1e40af] font-semibold underline">static security guards</a> excel at high-rise office concierges and active <a href="/services/construction-site-security" className="text-[#1e40af] font-semibold underline">construction site security</a>. Mobile patrols, however, offer superior cost efficiency for warehouse yards and commercial business parks. Read our in-depth analysis on <a href="/blog/static-guards-vs-mobile-patrols-nz" className="text-[#1e40af] font-semibold underline">Static Security Guards vs Mobile Patrols</a> to determine the right fit for your property.</p>

<h2>GPS Verification &amp; Real-Time Electronic Proof of Attendance</h2>
<p>Modern mobile patrol fleets utilize real-time GPS tracking and electronic checkpoint scan keys. When a patrol officer checks your perimeter gates, loading docks, or server room doors, a time-stamped digital log is instantly registered, giving property managers verified audit trails of every visit.</p>

<h2>Mobile Patrol Inspection Checklist for Commercial Sites</h2>
<div className="bg-[#f8f9fa] border border-gray-200 p-6 rounded-xl my-6">
  <h3 className="font-bold text-[#0a1628] text-base mb-3">Key Checkpoints Covered During a Mobile Patrol Sweep:</h3>
  <ul className="space-y-2 text-sm text-gray-700">
    <li>• <strong>Perimeter Door &amp; Gate Verification:</strong> Physical hand-check of all exterior glass doors, fire exits, and boundary gates.</li>
    <li>• <strong>Window &amp; Latch Inspections:</strong> Verifying ground-level glass panels and window handles remain securely latched.</li>
    <li>• <strong>Security Lighting Audit:</strong> Identifying non-functional LED floodlights or dark alleyways along loading bays.</li>
    <li>• <strong>Outbuilding &amp; Storage Checks:</strong> Inspecting detached tool sheds, waste skips, and trailer parking lanes.</li>
    <li>• <strong>Master Alarm Arming &amp; Reset:</strong> Confirming intruder panels are armed properly upon completing evening lock-up rounds.</li>
  </ul>
</div>

<h2>Frequently Asked Questions</h2>
<h3>How many times per night will a mobile patrol check my business?</h3>
<p>Patrol frequency is completely customizable — options typically range from 1 to 5 randomized checks per night depending on your site's risk profile and operational needs.</p>

<h3>Are mobile patrol officers licensed in New Zealand?</h3>
<p>Yes. All Atlas Security mobile patrol officers hold active Ministry of Justice Certificates of Approval (COA) under the Private Security Personnel and Private Investigators Act 2010.</p>

<h3>Can mobile patrol officers respond to 24/7 intruder alarm triggers?</h3>
<p>Yes. When your intruder alarm triggers, our 24/7 central monitoring station dispatches the nearest mobile patrol unit immediately for on-site physical verification and securing.</p>

<div className="mt-8 p-6 bg-[#0a1628] text-white rounded-xl">
  <h3 className="text-xl font-bold mb-2 text-white">Upgrade Your Commercial Security with Mobile Patrols</h3>
  <p className="text-gray-300 text-sm mb-4">Protect your business premises across Auckland, Hamilton, and Wellington with GPS-verified mobile patrols. Request a free site evaluation today.</p>
  <a href="/services/mobile-patrolling" className="inline-block bg-[#1e40af] hover:bg-[#1d3a9e] text-white font-bold px-6 py-3 rounded-lg text-sm transition-colors">Explore Mobile Security Patrol Services</a>
</div>
`,
    coverImage: '/images/blog-mobile-patrols.jpg',
    published: true,
    publishedAt: '2026-05-20T00:00:00Z',
    createdAt: '2026-05-20T00:00:00Z',
    updatedAt: '2026-09-16T00:00:00Z',
  },
  {
    id: '3',
    title: 'Atlas Security Expands Commercial Guarding & Mobile Patrols Across Wellington',
    slug: 'atlas-security-expands-wellington',
    excerpt: 'Atlas Security extends comprehensive physical security services across the Wellington region, serving government, commercial, retail, and industrial clients in the capital.',
    content: `
<p className="lead">Atlas Security NZ is proud to announce the formal expansion of our licensed security guard, corporate concierge, and mobile patrol operations across the Greater Wellington region. As New Zealand's capital city continues to develop its commercial, public sector, and logistics infrastructure, securing physical premises requires dedicated, highly trained security professionals.</p>

<h2>Comprehensive Regional Security Coverage across Greater Wellington</h2>
<p>Our expanded Wellington operations deliver professional, COA-certified security personnel across key commercial and industrial corridors:</p>
<ul>
  <li><strong>Wellington CBD &amp; Parliamentary Precinct:</strong> Corporate lobby concierge, electronic access control management, and corporate office tower static guarding.</li>
  <li><strong>Lower Hutt &amp; Gracefield Industrial Zones:</strong> Warehouse guarding, freight staging yard checks, and mobile patrol vehicle sweeps.</li>
  <li><strong>Petone &amp; Kilbirnie Retail Hubs:</strong> Customized <a href="/services/retail-security" className="text-[#1e40af] font-semibold underline">retail security guards</a> and loss prevention support to curb shoplifting and safeguard store workers.</li>
  <li><strong>Porirua &amp; Kapiti Coast Developments:</strong> <a href="/services/construction-site-security" className="text-[#1e40af] font-semibold underline">Construction site security</a> and temporary guarding for infrastructure projects.</li>
</ul>

<h2>Delivering Tailored Physical Security Services in the Capital</h2>
<p>Wellington businesses can now leverage Atlas Security's complete suite of physical security solutions:</p>
<ul>
  <li><strong>Static Security Guarding:</strong> Dedicated stationed officers for corporate towers, government contractors, and high-value sites. Learn more on our <a href="/services/static-guard" className="text-[#1e40af] font-semibold underline">static security guard service page</a>.</li>
  <li><strong>GPS Mobile Patrol Vehicles:</strong> Cost-effective after-hours lock-up inspections and randomized perimeter sweeps managed from our dedicated regional patrol units. View our <a href="/services/mobile-patrolling" className="text-[#1e40af] font-semibold underline">mobile patrolling services</a>.</li>
  <li><strong>24/7 Alarm Monitoring &amp; Guard Dispatch:</strong> Instant signal verification and rapid guard response through our centralized <a href="/services/alarm-monitoring" className="text-[#1e40af] font-semibold underline">security alarm monitoring station</a>.</li>
</ul>

<h2>Supporting Wellington Retailers with Proven Loss Prevention</h2>
<p>Store operators along Lambton Quay, Willis Street, and Jackson Street can protect inventory and store workers using our proven <a href="/blog/retail-loss-prevention-nz-stores" className="text-[#1e40af] font-semibold underline">retail loss prevention strategies</a>. Our COA-certified guards balance approachable customer service with firm de-escalation skills to maintain a safe shopping environment.</p>

<h2>Why Wellington Property Managers Choose Atlas Security</h2>
<div className="bg-[#f8f9fa] border border-gray-200 p-6 rounded-xl my-6">
  <h3 className="font-bold text-[#0a1628] text-base mb-3">The Atlas Security Wellington Advantage:</h3>
  <ol className="space-y-2 text-sm text-gray-700">
    <li><strong>1. 100% Licensed COA Personnel:</strong> Every officer holds active Ministry of Justice accreditation under the Private Security Personnel Act 2010.</li>
    <li><strong>2. GPS Patrol Verification:</strong> Transparent, time-stamped digital proof of every site visit and lock-up.</li>
    <li><strong>3. Rapid Regional Guard Dispatch:</strong> Strategically positioned mobile units across Wellington, Hutt Valley, and Porirua.</li>
    <li><strong>4. Tailored Site Post Orders:</strong> Standardized site risk assessments and custom operational protocols for every building.</li>
  </ol>
</div>

<h2>Frequently Asked Questions</h2>
<h3>What areas of Greater Wellington does Atlas Security cover?</h3>
<p>We provide static guarding, mobile patrols, and alarm monitoring across Wellington CBD, Te Aro, Thorndon, Lower Hutt, Upper Hutt, Petone, Porirua, and Johnsonville.</p>

<h3>Are Wellington security guards available for short-term projects?</h3>
<p>Yes. We offer flexible guard deployments for temporary construction sites, corporate events, retail sales periods, and emergency site lock-ups.</p>

<h3>How do I request a security assessment for a Wellington property?</h3>
<p>Visit our dedicated <a href="/service-area/wellington" className="text-[#1e40af] font-semibold underline">Wellington service area page</a> or contact our team directly to arrange a complimentary physical security assessment.</p>

<div className="mt-8 p-6 bg-[#0a1628] text-white rounded-xl">
  <h3 className="text-xl font-bold mb-2 text-white">Secure Your Wellington Business Premises</h3>
  <p className="text-gray-300 text-sm mb-4">Partner with Wellington's reliable physical security specialists. Contact Atlas Security today for a tailored operational proposal.</p>
  <a href="/service-area/wellington" className="inline-block bg-[#1e40af] hover:bg-[#1d3a9e] text-white font-bold px-6 py-3 rounded-lg text-sm transition-colors">View Wellington Security Services</a>
</div>
`,
    coverImage: '/images/blog-wellington-security.jpg',
    published: true,
    publishedAt: '2026-05-10T00:00:00Z',
    createdAt: '2026-05-10T00:00:00Z',
    updatedAt: '2026-09-16T00:00:00Z',
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
    <li><strong>1. Are 100% of your guards COA-licensed in New Zealand?</strong> (Every on-site officer must hold active credentials issued under the PSPLA Act 2010).</li>
    <li><strong>2. How do you track officer attendance and patrol sweeps?</strong> (Ensure they use real-time GPS tracking and electronic scan points).</li>
    <li><strong>3. What is your incident reporting procedure?</strong> (Verify that time-stamped digital reports are provided after every shift or alarm response).</li>
    <li><strong>4. Do you provide localized coverage in our region?</strong> (Check regional operational hubs in Auckland, Hamilton, or Wellington).</li>
    <li><strong>5. How are site post orders created and updated?</strong> (Confirm that custom written post instructions are provided for your specific facility layout and access points).</li>
    <li><strong>6. What public liability insurance coverage do you maintain?</strong> (Verify active commercial security liability policy coverage for property protection).</li>
  </ol>
</div>

<h2>Matching Security Coverage to Your Property Needs</h2>
<p>Different property types require distinct guard deployment models. Commercial office towers benefit from stationed concierge guards, while expansive logistics yards across <a href="/service-area/hamilton" className="text-[#1e40af] font-semibold underline">Te Rapa and Waikato</a> are best served by a combination of static gatehouse guards and GPS-tracked <a href="/services/mobile-patrolling" className="text-[#1e40af] font-semibold underline">mobile security patrols</a>.</p>
<p>Read our detailed guide on <a href="/blog/static-guards-vs-mobile-patrols-nz" className="text-[#1e40af] font-semibold underline">Static Security Guards vs Mobile Patrols</a> to evaluate which model best fits your operational budget.</p>

<h2>How Atlas Security Ensures Licensing Compliance</h2>
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