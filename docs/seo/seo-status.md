# Atlas Security NZ — Master SEO Architecture & Status Report

**Document Status:** Master Central SEO Documentation  
**Target Domain:** `https://www.atlassecurity.co.nz`  
**Repository:** `https://github.com/zedlabs-studio/atlassecurity-website`  
**Framework:** Next.js 16 App Router  
**Last Updated:** September 2026  

---

## 1. Executive Summary & Project Status

This document serves as the master central record for all completed, ongoing, and planned SEO implementations for Atlas Security New Zealand.

### Quick Stats:
* **Total Public Indexable Routes:** 24 URLs (including Homepage, Core Services, Verticals, Regional Hubs, Utilities, and 9 Blog Articles).
* **Next.js Pre-rendered SSG Static Routes:** 53 total routes (including admin/utility SSG routes).
* **TypeScript & Build Status:** Clean compilation (`0 type errors`, Next.js 16 SSG build passing).
* **On-Page Keyword Optimization:** 100% complete across all 24 public pages.

---

## 2. Architecture & Implementation Summary

### A. Implemented in Codebase (100% Verified)
1. **Master Keyword Architecture:** Documented in `docs/seo-keyword-map.md`. Zero keyword cannibalization between Homepage, Core Services, and City pages.
2. **On-Page SEO & Metadata:** Custom `constructMetadata` helper providing unique Title Tags, Meta Descriptions, OpenGraph images, and Canonicals across all routes.
3. **Structured Data (JSON-LD):** Implemented `SecurityService`, `Organization`, `WebSite`, `BreadcrumbList`, `FAQPage`, and `BlogPosting` schemas via `@/components/JsonLd`.
4. **Blog Content Architecture:** 9 high-intent blogs published, complete with Table of Contents (TOC), dynamic word-count Reading Time, WebP images, and contextual SILO linking.
5. **Technical SEO:** `robots.ts` configured; dynamic `sitemap.ts` with DB fallback to mock data.
6. **Performance & CWV Code Optimization:** Pure Server Component (RSC) blog rendering, zero-layout-shift image sizing, and semantic HTML5 headings.

### B. Pending External Authorization / Client Access
1. **Google Search Console Indexation:** Inspection checklist created in `docs/seo/gsc-indexation-checklist.md`.
2. **Google Business Profile (GBP):** Regional profile checklist created in `docs/local-seo/gbp-consistency-checklist.md`.
3. **Local Directory Citations:** NZ Citation strategy detailed in `docs/local-seo/nz-citation-plan.md`.
4. **Off-Page Backlink Outreach:** White-hat link strategy detailed in `docs/seo/off-page-seo-plan.md`.

---

## 3. Core URL & Keyword Mapping Reference

| Public URL | Primary Keyword | Search Intent | Target Regional Market |
|---|---|---|---|
| `/` | `security company NZ` | Brand / Commercial | Nationwide |
| `/services/static-guard` | `static security guards NZ` | Transactional | Nationwide |
| `/services/mobile-patrolling` | `mobile patrol security NZ` | Transactional | Nationwide |
| `/services/alarm-monitoring` | `security alarm monitoring NZ` | Transactional | Nationwide |
| `/service-area/auckland` | `security company Auckland` | Local Commercial | Greater Auckland |
| `/service-area/hamilton` | `security services Hamilton` | Local Commercial | Hamilton / Waikato HQ |
| `/service-area/wellington` | `security guards Wellington` | Local Commercial | Wellington Metro |
| `/services/construction-site-security` | `construction site security NZ` | Commercial Investigation | Civil / Building Sites |
| `/services/retail-security` | `retail security guards NZ` | Commercial Investigation | Retail Stores & Malls |
| `/services/commercial-security` | `commercial building security NZ` | Commercial Investigation | Corporate Office Towers |

---

## 4. Prioritized SEO Roadmap (P0 – P3)

### P0 — Critical (Immediate External Action)
* Log into Google Search Console and submit the 24 public URLs from `docs/seo/gsc-indexation-checklist.md` for indexation.

### P1 — High Priority (Local Verification & Profile Setup)
* Verify and optimize Google Business Profiles for Hamilton HQ, Auckland, and Wellington using `docs/local-seo/gbp-consistency-checklist.md`.

### P2 — Medium Priority (Local Citation Submissions)
* Submit NAP listings to top tier NZ directories (Yellow Pages, Finda, Localist) per `docs/local-seo/nz-citation-plan.md`.

### P3 — Future Enhancement (Editorial Backlinks & Content Scaling)
* Execute guest contribution and partner co-marketing per `docs/seo/off-page-seo-plan.md`.
