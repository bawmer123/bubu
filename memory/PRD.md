# ICMN & Partner - Law Firm Website Clone

## Original Problem Statement
Pixel-perfect clone of a German law firm website (ICMN & Partner), built with React + TailwindCSS. The site replicates the original design, layout, animations, and responsive behavior.

## Core Requirements
- German-language law firm website
- Responsive design with animations and scroll effects
- Services: Immobilienrecht, Verwaltungsrecht, Wirtschaftsrecht, Arbeitsrecht, Strafrecht, Familienrecht
- Location: München, Founded: 2018
- Individual service detail pages
- Footer with legal links
- Legal pages: Impressum, Datenschutz, AGB
- DSGVO cookie consent banner

## Architecture
- **Frontend-only** React app with TailwindCSS
- All content sourced from `/app/frontend/src/mockData.js`
- React Router for navigation
- No backend in use (FastAPI server exists but unused)
- Modular component architecture (Home split into 8 section components)

## File Structure
```
/app/frontend/src/
├── components/
│   ├── sections/
│   │   ├── NavHeader.jsx       # Navigation header
│   │   ├── HeroSection.jsx     # Hero with typing animation
│   │   ├── ServicesSection.jsx  # Service cards grid
│   │   ├── QuoteSection.jsx    # Blockquote section
│   │   ├── AboutSection.jsx    # About us section
│   │   ├── TeamSection.jsx     # Team members grid
│   │   ├── ContactSection.jsx  # Contact form + info
│   │   └── FooterSection.jsx   # Site footer
│   ├── SubPageHeader.jsx       # Shared header for sub-pages
│   ├── CookieConsent.jsx       # DSGVO cookie banner
│   └── ui/                     # shadcn components
├── pages/
│   ├── Home.jsx                # Orchestrator (~110 lines)
│   ├── ServiceDetail.jsx       # Service detail pages
│   ├── Impressum.jsx           # Legal: Imprint
│   ├── Datenschutz.jsx         # Legal: Privacy Policy
│   └── AGB.jsx                 # Legal: Terms & Conditions
├── mockData.js                 # All mock content
├── App.js                      # Routes
└── App.css / index.css         # Styles
```

## What's Been Implemented
- [x] Website clone with hero, services, about, team, contact sections
- [x] Responsive header with smooth-scroll navigation
- [x] Logo integration (icmn-logo.png)
- [x] Content updates (Immobilienrecht, 2018, München)
- [x] 6 individual service detail pages with "Mehr erfahren" links
- [x] Footer with navigation, services, contact info
- [x] Impressum page (/impressum)
- [x] Datenschutz page (/datenschutz)
- [x] AGB page (/agb)
- [x] Footer links connected to legal pages via React Router
- [x] DSGVO cookie consent banner
- [x] Code quality refactoring (Feb 19, 2026):
  - Split Home.jsx (862 lines → 8 section components ~110 line orchestrator)
  - Fixed hook dependencies (useCallback, stable refs)
  - Replaced array index keys with stable identifiers
  - Removed console.log debug code
  - Extracted magic numbers to named constants
  - Shared SubPageHeader component for legal pages
  - Named function exports for all page components
  - Python type hints for server.py
  - Fixed use-toast.js useEffect dependency

## Backlog
- P1: Backend integration (FastAPI + MongoDB) for dynamic content
- P1: Functional contact form (currently frontend-only alert)
- P2: SEO meta tags
- P2: Loading states / skeleton screens

## Update — June 2026 (Security Audit + Content/FX changes)
- Removed "Familienrecht" service (services grid, contact dropdown, service detail page).
- Updated firm address to "Orleansstraße 21, 81667 München, Deutschland" (contact section, footer, Impressum, Datenschutz).
- Header logo turned into a 3D coin: continuous Y-axis flip with gold metallic edge (thickness layers), tilt and drop shadow (App.css .coin-*).
- Hero title "ICMN & Partner" given retro 3D-block layered text-shadow (App.css .text-3d-block / .text-3d-block-gold).
- Global email changed T.tsiklauri@icmn.de -> info@icmn.de; email now clickable mailto links in contact card, footer, Datenschutz (Impressum & team already linked).
- Stats "6+ Jahre Erfahrung" -> "12+ Jahre Erfahrung" (AboutSection, mockData features & stats).
- Added slide FX: hero elements slide-in from sides on load; sections slide up on scroll (existing reveal); team/contact cards staggered slide-in.
- Security audit (read-only): PASS, no critical/high. Applied 3 LOW hardening fixes in backend/server.py — removed unused /api/status demo endpoints, disabled FastAPI docs (docs_url/redoc_url/openapi_url=None), set CORS allow_credentials=False. Verified via testing_agent iteration_3.json (100% backend + frontend, no regressions).
