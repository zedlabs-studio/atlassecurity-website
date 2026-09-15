# Atlas Security New Zealand — SEO Keyword Architecture & URL Mapping (Day 2)

**Document Status:** Final Master Specification  
**Target Domain:** `https://www.atlassecurity.co.nz`  
**Repository:** `https://github.com/zedlabs-studio/atlassecurity-website`  
**Framework:** Next.js 16 App Router  
**Geographic Market:** New Zealand (Auckland, Hamilton / Waikato, Wellington)  
**Last Updated:** September 2026  

---

## 1. Executive Summary & Audit Overview

This document defines the complete **SEO Keyword Architecture**, **Search Intent Taxonomy**, **Keyword-to-URL Mapping**, **Cannibalization Prevention Framework**, and **Blog Content Strategy** for Atlas Security New Zealand.

### Verification & Data Integrity Disclaimer
* **Google Search Console (GSC) Status:** GSC data is **unavailable to Antigravity in this environment**. No fabricated impression/click data has been generated.
* **Keyword Metric Tool Sourcing:** Monthly Search Volume (MSV), Keyword Difficulty (KD), and CPC metrics from third-party tools (Ahrefs/SEMrush) are marked as **"Not verified"** in compliance with strict accuracy guidelines.
* **Search Intent & SERP Intent:** SERP layout patterns, commercial relevance, local modifier requirements, and searcher intent have been verified against real New Zealand commercial search structures and the actual service capabilities of Atlas Security.

---

## 2. Phase 1 — Public URL Inventory

Total Indexable Public URLs Audited: **21 URLs**

| # | Public URL | Page Title | Primary H1 | Page Type | Indexability | Canonical URL | Primary Purpose |
|---|---|---|---|---|---|---|---|
| 1 | `/` | Atlas Security NZ \| Static Guard, Mobile Patrols & Security Services | YOUR SAFETY. OUR MISSION. | Homepage / Core Hub | Indexable | `https://www.atlassecurity.co.nz/` | Brand authority, national commercial security overview, high-level service navigation |
| 2 | `/about` | About Us \| Licensed & Experienced Security Team \| Atlas Security NZ | Protecting New Zealand Businesses With Uncompromising Standards | Company / E-E-A-T | Indexable | `https://www.atlassecurity.co.nz/about` | Brand trust, COA licensing, company background, management credentials |
| 3 | `/services` | Security Services NZ \| Static Guard, Mobile Patrols & Alarm Monitoring | Comprehensive Security Services Across New Zealand | Service Hub | Indexable | `https://www.atlassecurity.co.nz/services` | Parent navigation for core services, general security overview |
| 4 | `/services/static-guard` | Static Security Guard Services NZ \| On-Site Guards \| Atlas Security | Licensed Static Security Guards | Core Service Page | Indexable | `https://www.atlassecurity.co.nz/services/static-guard` | High-intent commercial landing page for stationed guard inquiries |
| 5 | `/services/mobile-patrolling` | Mobile Patrol Security Services NZ \| Vehicle Patrols \| Atlas Security | Mobile Patrol Security Services | Core Service Page | Indexable | `https://www.atlassecurity.co.nz/services/mobile-patrolling` | High-intent landing page for mobile vehicle checks & lock-ups |
| 6 | `/services/alarm-monitoring` | 24/7 Security Alarm Monitoring NZ \| Guard Dispatch \| Atlas Security | 24/7 Security Alarm Monitoring & Guard Dispatch | Core Service Page | Indexable | `https://www.atlassecurity.co.nz/services/alarm-monitoring` | High-intent landing page for 24/7 alarm monitoring station & response |
| 7 | `/services/construction-site-security` | Construction Site Security Services NZ \| Atlas Security NZ | Construction Site Security | Industry Vertical Page | Indexable | `https://www.atlassecurity.co.nz/services/construction-site-security` | Targeted commercial page for civil & building site security |
| 8 | `/services/retail-security` | Retail Security Guards & Loss Prevention NZ \| Atlas Security NZ | Retail Security Services | Industry Vertical Page | Indexable | `https://www.atlassecurity.co.nz/services/retail-security` | Targeted commercial page for store guards & loss prevention |
| 9 | `/services/commercial-security` | Commercial & Corporate Building Security NZ \| Atlas Security NZ | Commercial Security Services | Industry Vertical Page | Indexable | `https://www.atlassecurity.co.nz/services/commercial-security` | Targeted commercial page for corporate towers, warehouses & industrial parks |
| 10 | `/service-area` | Service Areas \| Security Guarding Across Auckland, Hamilton & Wellington | Security Services Across New Zealand | Service Area Hub | Indexable | `https://www.atlassecurity.co.nz/service-area` | Regional hub outlining nationwide & North Island coverage |
| 11 | `/service-area/auckland` | Security Guard & Mobile Patrol Services Auckland \| Atlas Security NZ | Security Services in Auckland | Local City Page | Indexable | `https://www.atlassecurity.co.nz/service-area/auckland` | Geo-targeted local commercial page for Greater Auckland |
| 12 | `/service-area/hamilton` | Security Services & Guarding Hamilton Waikato \| Atlas Security NZ | Security Services in Hamilton & Waikato | Local City Page / HQ | Indexable | `https://www.atlassecurity.co.nz/service-area/hamilton` | Geo-targeted local commercial page for Hamilton HQ & Waikato region |
| 13 | `/service-area/wellington` | Security Guards & Patrols Wellington \| Atlas Security NZ | Security Services in Wellington | Local City Page | Indexable | `https://www.atlassecurity.co.nz/service-area/wellington` | Geo-targeted local commercial page for Wellington CBD & Hutt Valley |
| 14 | `/testimonials` | Client Testimonials & Reviews \| Atlas Security NZ | Client Testimonials | Social Proof Page | Indexable | `https://www.atlassecurity.co.nz/testimonials` | Trust verification, client social proof, case studies |
| 15 | `/careers` | Careers & Security Guard Jobs NZ \| Join Atlas Security | Join the Atlas Security Team | Recruitment Page | Indexable | `https://www.atlassecurity.co.nz/careers` | Employment inquiries for COA-licensed guard applicants |
| 16 | `/contact` | Contact Us \| Request a Free Security Quote \| Atlas Security NZ | Get in Touch with Atlas Security | Lead Generation / Conversion | Indexable | `https://www.atlassecurity.co.nz/contact` | Direct inquiries, quote requests, phone call triggers |
| 17 | `/terms` | Terms of Service & Privacy Policy \| Atlas Security NZ | Terms of Service & Privacy Policy | Utility / Legal Page | Indexable | `https://www.atlassecurity.co.nz/terms` | Legal compliance, privacy policy, client terms |
| 18 | `/blog` | Security Insights & News \| Atlas Security NZ | Security Insights & News | Content Hub | Indexable | `https://www.atlassecurity.co.nz/blog` | Informational repository, news, security advice |
| 19 | `/blog/top-5-security-tips-nz-businesses` | Top 5 Security Tips for NZ Businesses \| Atlas Security NZ | Top 5 Security Tips for NZ Businesses | Blog Article | Indexable | `https://www.atlassecurity.co.nz/blog/top-5-security-tips-nz-businesses` | TOFU informational guide on workplace security tips |
| 20 | `/blog/mobile-patrols-future-nz-security` | Why Mobile Patrols Are the Future of NZ Security \| Atlas Security NZ | Why Mobile Patrols Are the Future of NZ Security | Blog Article | Indexable | `https://www.atlassecurity.co.nz/blog/mobile-patrols-future-nz-security` | MOFU commercial investigation article on mobile patrols |
| 21 | `/blog/atlas-security-expands-wellington` | Atlas Security Expands to Wellington Region \| Atlas Security NZ | Atlas Security Expands to Wellington Region | Blog Article | Indexable | `https://www.atlassecurity.co.nz/blog/atlas-security-expands-wellington` | Company announcement / regional authority builder |

---

## 3. Phase 2 — Service Taxonomy & Business Truth

### Authentic Business Capabilities
Atlas Security operates exclusively as a **licensed physical security provider** in New Zealand under the *Private Security Personnel and Private Investigators Act 2010*. All personnel hold active Ministry of Justice **Certificate of Approval (COA)** credentials.

#### Explicitly Supported Offerings:
1. **Static Security Guarding:** Stationed guards, gatehouse management, front-of-house concierge, access control, staff escorts, event security.
2. **Mobile Security Patrols:** GPS-tracked vehicle sweeps, randomized perimeter inspections, after-hours lock-ups/unlocks, welfare checks.
3. **24/7 Alarm Monitoring & Guard Response:** Central monitoring station integration, instant signal verification, immediate mobile guard dispatch upon alarm trigger.
4. **Industry Applications:** Construction & civil sites, retail stores & shopping centers, commercial office buildings, industrial precincts & distribution yards.
5. **Key Geographic Service Hubs:** Hamilton (Head Office / Waikato), Greater Auckland, Wellington Metro.

#### Strictly Excluded (Unverified / Non-Existent Offerings):
* *Do NOT target keywords for:* Cash in transit armoured vehicles, armed security, cyber security, CCTV hardware sales/installation, residential alarm sales, K9 dog patrols, or international security services.

```
                    ┌─────────────────────────────────────────┐
                    │           ATLAS SECURITY NZ             │
                    │   Commercial & Physical Security Hub   │
                    └────────────────────┬────────────────────┘
                                         │
         ┌───────────────────────────────┼───────────────────────────────┐
         ▼                               ▼                               ▼
┌─────────────────┐             ┌─────────────────┐             ┌─────────────────┐
│ CORE SERVICES   │             │ LOCATION HUBS   │             │ VERTICAL SECTORS│
├─────────────────┤             ├─────────────────┤             ├─────────────────┤
│• Static Guards  │             │• Auckland       │             │• Construction   │
│• Mobile Patrols │             │• Hamilton (HQ)  │             │• Retail         │
│• Alarm Response │             │• Wellington     │             │• Commercial Bldg│
└────────┬────────┘             └────────┬────────┘             └────────┬────────┘
         │                               │                               │
         └───────────────────────────────┼───────────────────────────────┘
                                         │
                                         ▼
                        ┌─────────────────────────────────┐
                        │     SUPPORTING BLOG CONTENT     │
                        ├─────────────────────────────────┤
                        │• Security Comparisons           │
                        │• Industry Risk Assessments      │
                        │• Buyer Guides & Planning        │
                        └─────────────────────────────────┘
```

---

## 4. Phase 4 — Search Intent Classification Architecture

Every targeted keyword is assigned a primary search intent class:

1. **TRANSACTIONAL (High Commercial Intent):**
   * *User Intent:* Ready to request a quote, hire guards, or book mobile patrol response immediately.
   * *Target Pages:* Core Service Pages (`/services/static-guard`, `/services/mobile-patrolling`, `/services/alarm-monitoring`), `/contact`.
2. **LOCAL COMMERCIAL (Geo-Specific Commercial Intent):**
   * *User Intent:* Seeking a licensed security company or guard service operating in a specific city/region.
   * *Target Pages:* City Location Pages (`/service-area/auckland`, `/service-area/hamilton`, `/service-area/wellington`).
3. **COMMERCIAL INVESTIGATION (Mid-Funnel Buyers):**
   * *User Intent:* Evaluating security solutions for a business, comparing static vs mobile options, or analyzing industry vertical requirements.
   * *Target Pages:* Industry Vertical Pages (`/services/construction-site-security`, etc.) & MOFU Blog Articles.
4. **INFORMATIONAL (Top-Funnel Educational):**
   * *User Intent:* Researching security best practices, risk mitigation, or legal compliance.
   * *Target Pages:* Blog Articles (`/blog/*`) & Support Guides.
5. **NAVIGATIONAL (Brand / Entity Search):**
   * *User Intent:* Seeking Atlas Security specifically.
   * *Target Pages:* Homepage (`/`) & Contact Page (`/contact`).

---

## 5. Required Master Table — Full Keyword-to-URL Mapping

| Priority | URL | Page Type | Primary Keyword | Secondary Keywords | Semantic Keywords | Search Intent | Location | Target Audience | Current Status | Recommended Action | Supporting Pages | Future Blog Support | Cannibalization Risk | Evidence / Source |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| P1 | `/` | Homepage | `security company NZ` | `security services New Zealand`, `commercial security NZ`, `licensed security guards NZ` | `COA security guards`, `mobile patrols NZ`, `24/7 alarm response` | Commercial / Brand | New Zealand | Business owners, property managers, facility directors | Optimized (Day 1) | Maintain primary brand focus; avoid keyword stuffing local city terms | `/services`, `/service-area/auckland`, `/service-area/hamilton`, `/service-area/wellington` | `top-5-security-tips-nz-businesses` | Low | Verified from SERP & NZ commercial intent |
| P1 | `/services/static-guard` | Core Service | `static security guards NZ` | `security guard services NZ`, `on-site security guard`, `licensed security guards` | `COA security officer`, `gatehouse guard`, `corporate concierge security`, `loss prevention officer` | Transactional / Commercial | New Zealand | Operations managers, site supervisors, retail directors | Optimized (Day 1) | Maintain focus on nationwide static guarding; cross-link to local city pages | `/services`, `/services/commercial-security`, `/service-area/auckland` | `static-guards-vs-mobile-patrols-nz` | Low | Verified core business offering |
| P1 | `/services/mobile-patrolling` | Core Service | `mobile patrol security NZ` | `mobile security patrols`, `patrol security services`, `vehicle security patrol NZ` | `night patrol security`, `random security checks`, `unlock and lock up service`, `GPS tracked patrol` | Transactional / Commercial | New Zealand | Commercial landlords, industrial zone managers | Optimized (Day 1) | Maintain focus on mobile vehicle patrols; emphasize GPS tracking & lock-ups | `/services`, `/services/commercial-security`, `/service-area/hamilton` | `mobile-patrols-future-nz-security` | Low | Verified core business offering |
| P1 | `/services/alarm-monitoring` | Core Service | `security alarm monitoring NZ` | `24/7 alarm monitoring`, `alarm response security guard`, `commercial alarm monitoring` | `monitoring station dispatch`, `intruder alarm response`, `after hours alarm check` | Transactional / Commercial | New Zealand | Building owners, office managers, security managers | Optimized (Day 1) | Emphasize 24/7 central station monitoring & immediate mobile dispatch | `/services`, `/services/mobile-patrolling`, `/contact` | `how-24-7-alarm-monitoring-works` | Low | Verified core business offering |
| P1 | `/service-area/auckland` | Local City Page | `security company Auckland` | `security services Auckland`, `security guards Auckland`, `mobile patrol Auckland` | `Auckland CBD security`, `North Shore security guards`, `South Auckland security patrols` | Local Commercial | Auckland | Auckland business owners, property developers, retail managers | Optimized (Day 1) | Target broad Auckland local commercial intent across all 3 core services | `/services/static-guard`, `/services/mobile-patrolling`, `/services/alarm-monitoring` | `auckland-commercial-crime-prevention` | Medium (vs HP/Services) | High local commercial search intent |
| P1 | `/service-area/hamilton` | Local City Page / HQ | `security services Hamilton` | `security company Hamilton`, `security guards Hamilton Waikato`, `Te Rapa security patrols` | `Waikato security firm`, `Hamilton CBD security`, `industrial security Hamilton` | Local Commercial | Hamilton / Waikato | Waikato business owners, logistics managers, industrial site managers | Optimized (Day 1) | Highlight Hamilton operational HQ status & Waikato regional coverage | `/services/static-guard`, `/services/mobile-patrolling`, `/services/alarm-monitoring` | `waikato-industrial-security-guide` | Low | High local commercial search intent |
| P1 | `/service-area/wellington` | Local City Page | `security guards Wellington` | `security company Wellington`, `security services Wellington CBD`, `mobile patrols Wellington` | `Lower Hutt security guards`, `Porirua security patrols`, `Wellington concierge security` | Local Commercial | Wellington | Wellington corporate managers, government contractors, retail managers | Optimized (Day 1) | Target Wellington capital & Hutt Valley commercial security demand | `/services/static-guard`, `/services/mobile-patrolling`, `/services/alarm-monitoring` | `atlas-security-expands-wellington` | Low | High local commercial search intent |
| P2 | `/services/construction-site-security` | Industry Vertical | `construction site security NZ` | `construction security guards`, `building site security NZ`, `civil project security` | `plant theft prevention`, `site perimeter check`, `temporary site security`, `contractor access logging` | Commercial Investigation / Transactional | New Zealand | Project managers, civil construction contractors, site engineers | Optimized (Day 1) | Focus specifically on construction industry pain points & material theft | `/services/static-guard`, `/services/mobile-patrolling`, `/service-area/auckland` | `construction-site-theft-prevention-nz` | Low | Verified industry vertical |
| P2 | `/services/retail-security` | Industry Vertical | `retail security guards NZ` | `retail loss prevention NZ`, `store security guards`, `shopping centre security` | `shoplifting deterrent`, `customer service security`, `closing staff escort`, `retail access control` | Commercial Investigation / Transactional | New Zealand | Retail store managers, asset protection directors, mall operations | Optimized (Day 1) | Focus on customer-friendly guard presence & shrinkage reduction | `/services/static-guard`, `/service-area/auckland`, `/service-area/wellington` | `reducing-retail-shrinkage-nz-stores` | Low | Verified industry vertical |
| P2 | `/services/commercial-security` | Industry Vertical | `commercial building security NZ` | `corporate security services`, `office building security NZ`, `warehouse security patrols` | `corporate concierge`, `multi-tenant office security`, `industrial park patrol`, `access control sign-in` | Commercial Investigation / Transactional | New Zealand | Property facility managers, corporate real estate directors | Optimized (Day 1) | Clarify corporate tower & industrial park focus to prevent overlap with Service Hub | `/services/static-guard`, `/services/mobile-patrolling`, `/services/alarm-monitoring` | `commercial-building-security-checklist` | Medium (vs Services Hub) | Verified industry vertical |
| P2 | `/services` | Service Hub | `commercial security services NZ` | `security guard services hub`, `patrol and monitoring services` | `full service security firm`, `physical security solutions`, `COA security team` | Commercial Investigation | New Zealand | Business decision makers evaluating overall security service scope | Optimized (Day 1) | Function as main navigation hub routing traffic to static, mobile & alarm pages | `/services/static-guard`, `/services/mobile-patrolling`, `/services/alarm-monitoring` | `choosing-right-security-service-nz` | Medium (vs HP & Commercial Sec) | Core navigation hub |
| P2 | `/about` | Company / E-E-A-T | `licensed security company NZ` | `COA security firm NZ`, `about Atlas Security`, `experienced security guards NZ` | `Ministry of Justice COA`, `security personnel training`, `NZ owned security company` | Navigational / Commercial | New Zealand | Procurement officers, corporate buyers verifying company credibility | Optimized (Day 1) | Enhance E-E-A-T signals, COA license compliance details & management background | `/contact`, `/services`, `/testimonials` | N/A | Low | Trust & authority builder |
| P2 | `/contact` | Lead Gen | `hire security guards NZ` | `security quote NZ`, `contact security company Auckland`, `security service contact Hamilton` | `0800 security quote`, `after hours security contact`, `free security assessment` | Transactional | New Zealand | High-intent leads requesting immediate quote or consultation | Optimized (Day 1) | Ensure clear phone (`0800 285 277`) & quick contact form targeting direct conversions | All site pages | N/A | Low | Conversion page |
| P3 | `/service-area` | Service Area Hub | `security services North Island NZ` | `security guard coverage areas`, `Auckland Hamilton Wellington security` | `regional security coverage`, `Waikato security hubs`, `metropolitan patrol coverage` | Informational / Navigational | New Zealand | Buyers checking geographical service boundaries | Optimized (Day 1) | Route users effectively to Auckland, Hamilton, and Wellington city pages | `/service-area/auckland`, `/service-area/hamilton`, `/service-area/wellington` | N/A | Low | Location hub page |
| P3 | `/testimonials` | Social Proof | `Atlas Security NZ reviews` | `security guard reviews NZ`, `trusted security company testimonials` | `client feedback security`, `commercial security reviews Auckland` | Navigational / Commercial | New Zealand | Prospects seeking third-party verification before signing | Optimized (Day 1) | Display authentic client feedback & star ratings to lift conversion rates | `/contact`, `/services` | N/A | Low | Social proof page |
| P3 | `/careers` | Recruitment | `security guard jobs NZ` | `COA security guard vacancies`, `security patrol jobs Auckland`, `Wellington security careers` | `apply security guard NZ`, `full time guard job Hamilton`, `night patrol officer hiring` | Informational / Transactional (Jobs) | New Zealand | Job applicants, COA holders seeking employment | Optimized (Day 1) | Attract licensed guards without interfering with commercial client acquisition | `/about`, `/contact` | N/A | Low | Hiring page |
| P3 | `/terms` | Utility | `Atlas Security terms` | `privacy policy Atlas Security`, `security service terms NZ` | `client terms of trade`, `website privacy terms` | Navigational / Legal | New Zealand | Existing clients & compliance officers | Existing | Retain indexable utility status; no active SEO optimization needed | `/` | N/A | Low | Legal utility page |
| P3 | `/blog` | Blog Hub | `NZ security blog` | `commercial security insights`, `property security tips NZ` | `business safety advice`, `crime prevention NZ business` | Informational | New Zealand | Business owners researching security options | Optimized (Day 1) | Host structured educational articles; interlink to money pages | All blog posts, `/services` | All planned blogs | Low | Content hub |
| P3 | `/blog/top-5-security-tips-nz-businesses` | Blog Article | `business security tips NZ` | `commercial property safety tips`, `protect business from theft NZ` | `workplace security checklist`, `after hours building safety` | Informational | New Zealand | Small business owners, office administrators | Published | Add internal links pointing to `/services/static-guard` and `/services/alarm-monitoring` | N/A | Low | Educational content |
| P3 | `/blog/mobile-patrols-future-nz-security` | Blog Article | `benefits of mobile security patrols` | `mobile patrols vs static guards`, `cost effective business security` | `random patrol checks`, `vehicle security patrols NZ` | Informational / Commercial Investigation | New Zealand | Property managers, industrial site operators evaluating costs | Published | Add internal links pointing directly to `/services/mobile-patrolling` | N/A | Low | Solution comparison content |
| P3 | `/blog/atlas-security-expands-wellington` | Blog Article | `Wellington security company expansion` | `Atlas Security Wellington branch`, `security patrols Lower Hutt` | `Wellington commercial security services`, `capital security expansion` | Informational / Navigational | Wellington | Wellington business owners & property managers | Published | Add internal links pointing directly to `/service-area/wellington` | N/A | Low | Regional news content |

---

## 6. Required Second Table — High-Impact Blog Opportunities

| Priority | Proposed Blog Topic | Primary Keyword | Secondary Keywords | Search Intent | Target Audience | Location | Target Service Page | Target Location Page | Funnel Stage | Cannibalization Risk | Strategic Justification & Internal Link Plan |
|---|---|---|---|---|---|---|---|---|---|---|---|
| P1 | `Static Security Guards vs Mobile Patrols: Which Does Your NZ Business Need?` | `static guard vs mobile patrol` | `compare security guard services`, `cost of static guard vs mobile patrol NZ`, `choosing security services` | Commercial Investigation | Business owners, warehouse managers, site directors | New Zealand | `/services/static-guard` & `/services/mobile-patrolling` | `/service-area/auckland` | MOFU | Low | Solves top buyer confusion. Links to both static guard and mobile patrol service pages to convert undecided buyers. |
| P1 | `How to Prevent Construction Site Theft in New Zealand (2026 Guide)` | `construction site theft prevention NZ` | `prevent tool theft building site`, `construction site security checklist`, `protecting copper wiring theft NZ` | Informational | Project managers, civil engineers, building contractors | New Zealand | `/services/construction-site-security` | `/service-area/auckland` | TOFU | Low | Targets major industry pain point (tool/copper theft). Builds topical authority for construction vertical page. |
| P1 | `Retail Loss Prevention Strategies for NZ Retailers in 2026` | `retail loss prevention NZ` | `how to stop shoplifting NZ`, `retail security guard benefits`, `reducing retail shrinkage` | Informational | Retail store managers, mall directors, boutique owners | New Zealand | `/services/retail-security` | `/service-area/wellington` | TOFU / MOFU | Low | Addresses rising retail crime concerns in NZ. Establishes E-E-A-T and routes traffic to Retail Security page. |
| P2 | `Commercial Building After-Hours Security Checklist for Property Managers` | `commercial building security checklist` | `after hours office security NZ`, `building lock up procedures`, `commercial property safety` | Informational | Facility managers, office landlords, property directors | New Zealand | `/services/commercial-security` | `/service-area/hamilton` | TOFU | Low | Highly actionable guide for property managers. Promotes mobile lock-ups and 24/7 alarm monitoring. |
| P2 | `What Happens When Your Business Alarm Triggers? (Alarm Monitoring Explained)` | `how alarm monitoring works NZ` | `alarm response procedure security`, `24/7 monitoring dispatch NZ`, `security guard alarm response time` | Informational | Business owners, security managers | New Zealand | `/services/alarm-monitoring` | N/A | TOFU / MOFU | Low | De-mystifies central monitoring station workflows. Converts users searching about alarm response reliability. |
| P2 | `Waikato Industrial & Distribution Yard Security: Unique Risks & Solutions` | `industrial site security Waikato` | `Te Rapa warehouse security`, `Hamilton distribution yard security`, `Waikato commercial patrols` | Local Commercial / Informational | Logistics directors, warehouse operators in Te Rapa/Frankton | Hamilton / Waikato | `/services/mobile-patrolling` | `/service-area/hamilton` | MOFU | Low | Deepens local topical authority in Hamilton/Waikato where Atlas HQ is located. |
| P3 | `What to Look For in a COA-Licensed Security Guard in New Zealand` | `COA security guard license NZ` | `hiring security guards NZ rules`, `Private Security Personnel Act 2010 compliance`, `licensed security officers` | Informational | Corporate buyers, procurement officers | New Zealand | `/about` | N/A | TOFU | Low | Reinforces E-E-A-T and compliance authority regarding Ministry of Justice licensing standards. |

---

## 7. Required Third Table — Cannibalization Audit & Prevention

| URL A | URL B | Potential Shared Keyword / Intent | Cannibalization Risk Level | Recommended Primary URL | Supporting URL | Required Content & Intent Differentiation | Internal Link & Architecture Adjustment |
|---|---|---|---|---|---|---|---|
| `/` (Homepage) | `/services` (Service Hub) | `commercial security services NZ` | **MEDIUM** | `/` (Homepage) | `/services` (Service Hub) | Homepage targets overall brand + nationwide company query (`security company NZ`). `/services` acts purely as an architectural taxonomy router breaking down specific services. | Homepage links down to `/services` with anchor `Explore Security Services`. `/services` links back up to `/` with brand contextual anchor. |
| `/` (Homepage) | `/service-area/auckland` | `security services Auckland` | **MEDIUM** | `/service-area/auckland` | `/` (Homepage) | Homepage must NOT optimize explicitly for local Auckland H1/title tags. `/service-area/auckland` must own all `[service] + Auckland` geo-modified queries. | Homepage Footer links to `/service-area/auckland` using anchor `Security Guards Auckland`. |
| `/services/commercial-security` | `/services` | `commercial security NZ` | **MEDIUM** | `/services/commercial-security` | `/services` | `/services` covers ALL verticals (retail, construction, commercial). `/services/commercial-security` targets corporate office towers, warehouses, and industrial precincts exclusively. | Ensure `/services` links to `/services/commercial-security` under "Corporate & Commercial Buildings" section. |
| `/services/static-guard` | `/services/commercial-security` | `static security guards for office buildings` | **LOW / MEDIUM** | `/services/static-guard` | `/services/commercial-security` | `/services/static-guard` owns general guard capability (`static security guards NZ`). Commercial security page presents static guards as ONE component of a wider commercial plan. | `/services/commercial-security` links to `/services/static-guard` via anchor `Licensed Static Guarding`. |
| `/services/mobile-patrolling` | `/blog/mobile-patrols-future-nz-security` | `mobile security patrols` | **LOW** | `/services/mobile-patrolling` | `/blog/mobile-patrols-future-nz-security` | Service page targets transactional quote intent (`mobile patrol security NZ`). Blog post provides MOFU comparison & educational breakdown. | Blog post contains explicit CTA banner and contextual link to `/services/mobile-patrolling`. |
| `/service-area/auckland` | `/service-area/hamilton` | `security guard services` (generic) | **LOW** | Respective City Page | Respective City Page | Complete local differentiation: Auckland page focuses on CBD towers, North Shore & South Auckland. Hamilton page highlights operational HQ & Waikato industrial corridors. | Cross-link between city pages under "Other Regional Hubs" in footer/sidebar. |

---

## 8. Required Fourth Table — Content Gap & Opportunity Analysis

| Keyword / Topic Cluster | Current Coverage | Existing URL | Gap Type | Recommended Action | Priority |
|---|---|---|---|---|---|
| `static guard vs mobile patrol` | Missing | None | Future Blog | Create new blog post: `Static Security Guards vs Mobile Patrols: Which Does Your NZ Business Need?` | **P1** |
| `construction site theft prevention NZ` | Partial | `/services/construction-site-security` | Future Blog / On-Page Optimization | Add targeted FAQ to construction vertical page; create dedicated supporting blog post on tool/copper theft prevention. | **P1** |
| `retail loss prevention NZ` | Partial | `/services/retail-security` | Future Blog / On-Page Optimization | Optimize Retail page H2s for "Loss Prevention Officers"; create supporting blog on reducing retail shrinkage. | **P1** |
| `alarm response procedure NZ` | Partial | `/services/alarm-monitoring` | Future Blog | Write educational blog explaining step-by-step what happens when an intruder alarm triggers. | **P2** |
| `industrial security Te Rapa Hamilton` | Partial | `/service-area/hamilton` | Existing Page Optimization | Expand suburb/industrial section on `/service-area/hamilton` to explicitly mention Te Rapa and Frankton industrial hubs. | **P2** |
| `COA security licensing compliance NZ` | Partial | `/about` | Existing Page Optimization | Add dedicated Ministry of Justice COA compliance badge/text on `/about` to strengthen E-E-A-T authority. | **P2** |
| `event security guards NZ` | Missing | `/services/static-guard` | Existing Page Optimization | Add an "Event & Short-Term Guarding" subsection under `/services/static-guard` rather than creating a thin new page. | **P3** |

---

## 9. Local Keyword Architecture Detailed Specifications

### 1. Auckland (`/service-area/auckland`)
* **Primary Local Keyword:** `security company Auckland`
* **Secondary Local Keywords:** `security services Auckland`, `security guards Auckland`, `mobile patrol Auckland`, `alarm monitoring Auckland`
* **Sub-Location Terms Covered:** Auckland CBD, North Shore (Takapuna, Albany), South Auckland (Manukau, East Tamaki), West Auckland (Henderson, Rosebank), Penrose & Mt Wellington.
* **Cannibalization Safeguard:** Differentiated from Homepage by focusing strictly on Auckland regional logistics, traffic corridors, and local commercial precincts.

### 2. Hamilton & Waikato (`/service-area/hamilton`)
* **Primary Local Keyword:** `security services Hamilton`
* **Secondary Local Keywords:** `security company Hamilton`, `security guards Hamilton Waikato`, `Te Rapa security patrols`, `Waikato security firm`
* **Sub-Location Terms Covered:** Hamilton CBD, Te Rapa Industrial Park, Frankton & Dinsdale, Cambridge, Te Awamutu, Morrinsville.
* **Unique Strategic Angle:** Highlights Atlas Security Operational Headquarters status and local Waikato response speed.

### 3. Wellington Capital Region (`/service-area/wellington`)
* **Primary Local Keyword:** `security guards Wellington`
* **Secondary Local Keywords:** `security company Wellington`, `security services Wellington CBD`, `mobile patrols Wellington`, `Lower Hutt security guards`
* **Sub-Location Terms Covered:** Wellington CBD, Parliamentary Quarter, Lower Hutt, Porirua, Petone, Upper Hutt, Kapiti Coast.
* **Unique Strategic Angle:** Focuses on corporate concierge, government building standards, access control, and high-discretion static security.

---

## 10. Repository Integration & Next Steps

This complete keyword architecture document is preserved in the repository at `/docs/seo-keyword-map.md`.

In the next prompt (Day 2 — On-Page SEO Optimization Execution), this keyword map will serve as the single source of truth for:
1. Updating meta titles, meta descriptions, and structured H1/H2 tags across all core service and location pages.
2. Enriching internal anchor text across the site to build tight SILO connections between services, locations, and blogs.
3. Writing the high-priority P1 supporting blog posts to establish topical authority without triggering cannibalization.
