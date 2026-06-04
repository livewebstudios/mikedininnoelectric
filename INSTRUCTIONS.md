# INSTRUCTIONS.md — MIKE DININNO ELECTRIC
**Client:** Mike DiNinno Electric, LLC
**Agency:** Live Web Studios | livewebstudios.com
**Build Tool:** Claude Code (`claude --dangerously-skip-permissions`)
**Build Target:** `build/` directory (deployable root)
**Last Updated:** 2026-05-27

---

## ⚠️ PRE-BUILD CHECKLIST — CONFIRM BEFORE STARTING

- [x] Design concept confirmed: **Concept 3 — "Electric Storm" ✅**
- [x] Logo files: `assets/logowhite.png` (nav/dark bg) + `assets/logo-color.png` (color mark)
- [x] Formspree form ID: `xojbywgd`
- [x] GA4 Tracking ID: `G-CB47YKLFM8`
- [ ] NJ License number: `[PENDING — get from Mike]`
- [x] WordPress images listed below — download during build
- [x] verifiedsecured.png (150×37px) → `build/images/verifiedsecured.png`

---

## CONFIRMED CREDENTIALS

| Item | Value |
|---|---|
| Formspree Form ID | `xojbywgd` |
| Formspree Action URL | `https://formspree.io/f/xojbywgd` |
| GA4 Measurement ID | `G-CB47YKLFM8` |
| Domain | `mikedininnoelectric.com` |
| Phone | `973.787.7122` |
| Email | `mikedininnoelectric@hotmail.com` |
| Address | 15 Jennifer Court, Clifton, NJ 07013 |

---

## STACK

| Item | Spec |
|---|---|
| HTML | Vanilla semantic HTML5 |
| CSS | Vanilla CSS with custom properties — zero frameworks |
| JS | Vanilla JS only — zero frameworks, zero build steps |
| Forms | Formspree — `https://formspree.io/f/xojbywgd` |
| CMS | None — Tier 1 Brochure site |
| Deployment | Netlify |
| Repo | GitHub → `livewebstudios` org |
| DNS A Record | 75.2.60.5 |
| DNS CNAME | www → [sitename].netlify.app |

---

## PATH RULES — NON-NEGOTIABLE

- **ALL paths MUST be relative** — `css/style.css`, `../images/logo.png`, `js/nav.js`
- **NEVER use root-relative paths** — no `/css/style.css`
- **NEVER use absolute paths** — no `https://...` for internal assets
- **Reason:** Site moves hosts 2–3 times before client approval. Relative paths survive every move.
- **Verify:** Before any delivery, grep the entire `build/` for `/css`, `/js`, `/images` and fix every hit.

---

## FILE STRUCTURE

```
build/                          ← Netlify deploy root
├── index.html                  ← Home
├── about-us/
│   └── index.html
├── services/
│   ├── index.html              ← Services overview
│   ├── code-compliance/
│   │   └── index.html
│   ├── electrical-service-upgrades/
│   │   └── index.html
│   ├── generators/
│   │   └── index.html
│   ├── hot-tub-pool-wiring/
│   │   └── index.html
│   ├── landscape-outdoor-lighting/
│   │   └── index.html
│   ├── new-construction/
│   │   └── index.html
│   ├── recessed-lighting/
│   │   └── index.html
│   ├── smoke-co2-detectors/
│   │   └── index.html
│   └── troubleshooting/
│       └── index.html
├── service-agreements/
│   └── index.html
├── blog/
│   ├── index.html
│   ├── backup-generator-benefits/
│   │   └── index.html
│   ├── how-to-choose-an-electrician/
│   │   └── index.html
│   └── 5-signs-upgrade-electrical-panel/
│       └── index.html
├── contact/
│   └── index.html
├── css/
│   ├── style.css               ← Global styles + custom properties
│   ├── nav.css                 ← Navigation styles
│   ├── animations.css          ← Animation classes
│   └── backgrounds.css         ← Section background effects
├── js/
│   ├── nav.js                  ← Sticky nav + mobile hamburger
│   ├── animations.js           ← IntersectionObserver scroll animations
│   └── form.js                 ← Formspree form handling
├── images/
│   ├── logowhite.png           ← White horizontal logo — use in nav + footer
│   ├── logo-color.png          ← Color mark — use as accent/icon element
│   ├── verifiedsecured.png     ← LWS badge 150×37px — every footer
│   ├── electrical-contractor.jpg
│   ├── thumb-service-upgrades.jpg
│   ├── thumb-recessed-lighting.jpg
│   ├── thumb-generators.jpg
│   ├── thumb-troubleshooting.jpg
│   ├── thumb-new-construction.jpg
│   ├── thumb-smoke-detectors.jpg
│   ├── thumb-landscape-lighting.jpg
│   ├── thumb-hot-tub-pool.jpg
│   ├── thumb-code-compliance.jpg
│   ├── blog-backup-generator.webp
│   ├── blog-choose-electrician.webp
│   └── blog-panel-upgrade.jpg
├── sitemap.xml
├── robots.txt
└── _redirects                  ← Netlify 301 redirects
```

---

## WORDPRESS IMAGE DOWNLOAD

Download these images from the live WordPress site during build. Save to `build/images/` with the filenames listed above:

```bash
# Service thumbnails
curl -o build/images/thumb-service-upgrades.jpg "https://mikedininnoelectric.com/wp-content/uploads/2025/04/thumbsElectrical-Service-Upgrades.jpg"
curl -o build/images/thumb-recessed-lighting.jpg "https://mikedininnoelectric.com/wp-content/uploads/2025/04/thumbsRecessed-Accent-Lighting-Installation.jpg"
curl -o build/images/thumb-generators.jpg "https://mikedininnoelectric.com/wp-content/uploads/2025/04/thumbsGenerator-Sales-Installation-Maintenance.jpg"
curl -o build/images/thumb-troubleshooting.jpg "https://mikedininnoelectric.com/wp-content/uploads/2025/04/thumbsTroubleshooting-Repairs.jpg"
curl -o build/images/thumb-new-construction.jpg "https://mikedininnoelectric.com/wp-content/uploads/2025/04/thumbsNew-Construction-Wiring.jpg"
curl -o build/images/thumb-smoke-detectors.jpg "https://mikedininnoelectric.com/wp-content/uploads/2025/04/thumbsSmoke-CO%E2%82%82-Detector-Installation.jpg"
curl -o build/images/thumb-landscape-lighting.jpg "https://mikedininnoelectric.com/wp-content/uploads/2025/04/thumbsLandscape-Outdoor-Lighting.jpg"
curl -o build/images/thumb-hot-tub-pool.jpg "https://mikedininnoelectric.com/wp-content/uploads/2025/04/thumbsHot-Tub-Pool-Wiring.jpg"
curl -o build/images/thumb-code-compliance.jpg "https://mikedininnoelectric.com/wp-content/uploads/2025/04/thumbsCode-Compliance-Electrical-Corrections.jpg"

# Hero / feature images
curl -o build/images/electrical-contractor.jpg "https://mikedininnoelectric.com/wp-content/uploads/2025/04/Electrical-Contractor.jpg"

# Blog images
curl -o build/images/blog-backup-generator.webp "https://mikedininnoelectric.com/wp-content/uploads/2025/04/backup-generator-400x250.webp"
curl -o build/images/blog-choose-electrician.webp "https://mikedininnoelectric.com/wp-content/uploads/2025/04/iStock-598067780-640w-400x250.webp"
curl -o build/images/blog-panel-upgrade.jpg "https://mikedininnoelectric.com/wp-content/uploads/2025/04/Electrical-Panel-1-scaled-e1643994869503-400x250.jpg"
```

---

## DESIGN SPEC

### LOGO NOTES
- **Nav logo:** `logowhite.png` — horizontal format, white, on dark bg. Use in sticky nav and footer.
- **Color mark:** `logo-color.png` — lightning bolt circle with steel blue (~#7BA7D4). Use as decorative accent element — hero watermark, loading screen, favicon reference.
- **Logo brand color extracted:** `#7BA7D4` (steel blue from mark) — DO NOT use as primary accent. Use to inform palette harmony only.
- **Always use `<img>` tag — NEVER as CSS background.**
- **Logo is designed for dark backgrounds.** This site MUST be dark.

---

### CONCEPT 3 — "ELECTRIC STORM" ✅ CONFIRMED

**CONFIRMED: Concept 3 — "Electric Storm"**
- Primary bg: `#080808` (pure black)
- Alt section bg: `#0A0A0A`
- Card bg: `#0D0D0D`
- Primary accent: `#00C8FF` (electric blue)
- Secondary accent: `#7B2FFF` (plasma purple — section accents, hover glows)
- Tertiary: `#39FF14` (neon green — ONE element only, e.g. "Licensed & Insured" badge or a single icon)
- Text primary: `#FFFFFF`
- Text muted: `#CCCCCC`
- Text dim: `#888888`
- Emergency color: `#FF4500`
- Border: `rgba(255,255,255,0.08)`
- Typography headings: **Rajdhani** 700 weight (Google Fonts)
- Typography body: **Inter** 400/500 (Google Fonts)
- Hero bg effect: Plasma/lightning CSS — deep black base with radial blue-purple light bursts at low opacity, subtle scanline texture overlay at 4% (backgrounds.css bg-5)
- Card hover: glowing `var(--color-accent)` border, arc-of-light animation across top border
- Feel: Cinematic, premium, dramatic — "if Apple did electrical contracting"

### CSS Custom Properties
```css
:root {
  --color-bg:           #080808;
  --color-bg-alt:       #0A0A0A;
  --color-bg-card:      #0D0D0D;
  --color-accent:       #00C8FF;
  --color-accent-2:     #7B2FFF;
  --color-accent-3:     #39FF14;
  --color-text:         #FFFFFF;
  --color-text-muted:   #CCCCCC;
  --color-text-dim:     #888888;
  --color-border:       rgba(255,255,255,0.08);
  --color-emergency:    #FF4500;
  --color-stars:        #FFD700;
  --font-heading:       'Rajdhani', sans-serif;
  --font-body:          'Inter', sans-serif;
  --nav-height:         72px;
  --section-pad:        100px 5%;
  --border-radius:      6px;
  --transition:         0.25s ease;
  --glow-accent:        0 0 20px rgba(0,200,255,0.3);
  --glow-purple:        0 0 20px rgba(123,47,255,0.3);
}
```

### Google Fonts Import (every page `<head>`)
```html
<link href="https://fonts.googleapis.com/css2?family=Rajdhani:wght@400;600;700&family=Inter:wght@400;500;600&display=swap" rel="stylesheet">
```

---

## GLOBAL COMPONENTS

### Navigation (ALL CAPS — non-negotiable)
```
HOME | ABOUT US | SERVICES ▾ | SERVICE AGREEMENTS | BLOG | CONTACT
```
- Sticky — `position: fixed; top: 0; z-index: 1000;`
- `text-transform: uppercase` on ALL nav items AND ALL dropdown items — in CSS, not HTML
- Mobile: hamburger at 768px breakpoint, full-screen dark overlay menu
- Dropdown: SERVICES opens on hover (desktop) / tap (mobile) — show all 9 service pages
- Logo: `<img src="../images/logowhite.png" alt="Mike DiNinno Electric">` — `<img>` ONLY, never background
- Subpages use `../images/logowhite.png` (relative path — adjust depth per page location)
- Active page: `var(--color-accent)` left border or underline
- Nav bg: `rgba(0,0,0,0.9)` with `backdrop-filter: blur(10px)` always (not just on scroll)

### Emergency Banner (every page — below hero or fixed bottom strip)
```html
<div class="emergency-bar">
  <span>⚡ ELECTRICAL EMERGENCY?</span>
  <a href="tel:9737877122">CALL NOW — 973.787.7122</a>
</div>
```
Style: `var(--color-emergency)` background or dark bg with red accent text. Full-width.

### Footer (every page — identical)
```
Row 1 (4 columns):
  Col 1: <img> logowhite.png + tagline "We'll Keep You Out of the Dark"
  Col 2: QUICK LINKS — HOME | ABOUT US | SERVICES | SERVICE AGREEMENTS | BLOG | CONTACT
  Col 3: 📞 973.787.7122 | ✉️ mikedininnoelectric@hotmail.com | 📍 Clifton, NJ | Emergency: 24/7
  Col 4: Facebook icon | LinkedIn icon

Row 2 (bottom bar, thin top border):
  Left: © 2025 Mike DiNinno Electric, LLC. All Rights Reserved.
  Right: <img src="../images/verifiedsecured.png" width="150" height="37"
              alt="Verified & Secured by Live Web Studios"
              style="width:150px;height:37px;">
         (links to https://livewebstudios.com — opens new tab)
```

---

## PAGE REQUIREMENTS — EVERY PAGE

- Mobile-first, fully responsive — breakpoints: 1200px, 992px, 768px, 480px
- Single `<h1>` per page — no exceptions
- Unique `<title>` per page — format: `[Page Name] | Mike DiNinno Electric | Clifton, NJ`
- Unique `<meta name="description">` per page — 150–160 characters
- OG tags: `og:title`, `og:description`, `og:image`, `og:url`, `og:type`
- JSON-LD schema (see schema section below)
- GA4 snippet in `<head>` (see below)
- All `<img>` tags: descriptive `alt` text — no empty alts, no `alt="image"`
- Formspree contact form: home page and contact page
- verifiedsecured.png in footer — 150×37px — `<img>` tag only, never CSS background
- Scroll animations: IntersectionObserver via `animations.js`

### GA4 Snippet (every page `<head>`)
```html
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-CB47YKLFM8"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-CB47YKLFM8');
</script>
```

---

## CONTACT FORM (Formspree)

```html
<form action="https://formspree.io/f/xojbywgd" method="POST">
  <div class="form-row">
    <input type="text" name="firstName" placeholder="First Name" required>
    <input type="text" name="lastName" placeholder="Last Name" required>
  </div>
  <input type="email" name="email" placeholder="Email Address" required>
  <input type="tel" name="phone" placeholder="Phone Number">
  <input type="text" name="subject" placeholder="Type of Work / Subject">
  <textarea name="message" placeholder="Tell us about your project..." rows="6" required></textarea>
  <button type="submit" class="btn-primary">SEND MESSAGE</button>
</form>
```

---

## ANIMATIONS

Use IntersectionObserver in `animations.js`. Apply via class names:

```css
.fade-in-up    /* cards, section blocks — fade + 30px up */
.fade-in       /* text blocks — opacity only */
.slide-in-left /* left-column split sections */
.slide-in-right /* right-column split sections */
```

**Critical rule:** `animations.js` MUST expose `window.LWS = window.LWS || {}; window.LWS.observe = function(el){...}`.
Every renderer that dynamically inserts elements must call `window.LWS.observe(card)` after `appendChild()`.
Always add `card.classList.add('is-visible')` as a fallback in case IntersectionObserver fires before the call.

---

## HOME PAGE SECTIONS (index.html)

Build in this order:

1. **Hero** — full-viewport, dark bg effect from backgrounds.css, logo in nav, H1, subhead, 2 CTAs
2. **Trust bar** — 5 icons: Licensed & Insured | Residential | Commercial & Industrial | Emergency Service | 30+ Years
3. **Welcome** — "Your Journey Begins Here" — intro paragraph + 3 pillar icons (Residential / Commercial / Industrial)
4. **Services grid** — 3×3 card grid, all 9 services, thumbnail image + title + excerpt + Read More link
5. **Stats bar** — 30+ Years | 500+ Projects | 100% Licensed | 24/7 Emergency (large numbers, accent color)
6. **Testimonials** — 3 quotes, 5 stars, name, title, company
7. **Emergency CTA banner** — full-width, high contrast
8. **Blog preview** — 3 blog post cards with thumbnail, date, title, excerpt, Read More
9. **Footer**

---

## SEO — META TITLES & DESCRIPTIONS (per page)

| Page | Title | Description |
|---|---|---|
| Home | Mike DiNinno Electric \| Licensed Electrician — Clifton, NJ | Veteran-owned electrical contractor serving NJ. 30+ years experience in residential, commercial & industrial. Free estimates. Call 973.787.7122. |
| About | About Us \| Mike DiNinno Electric — NJ Licensed Electrician | Meet Mike DiNinno — NJ veteran, licensed electrical contractor with 30+ years experience. Owner-operated. Residential, commercial & industrial. |
| Services | Electrical Services \| Mike DiNinno Electric — Clifton, NJ | Full-service electrical contractor offering panel upgrades, generators, lighting, new construction & more. Serving all of NJ. Free estimates. |
| Code Compliance | Code Compliance & Electrical Corrections \| Mike DiNinno Electric | Expert electrical code corrections and inspection remediation in NJ. We bring your system up to current NEC and local standards. |
| Service Upgrades | Electrical Service Upgrades \| Panel Replacement NJ | Upgrade your electrical panel to 200A and beyond. Mike DiNinno Electric serves all of Northern NJ. Licensed, insured, permitted. |
| Generators | Generator Sales, Installation & Maintenance NJ \| Mike DiNinno Electric | Whole-home standby generators installed and maintained by a licensed NJ electrician. Never lose power again. Free estimates. |
| Hot Tub/Pool | Hot Tub & Pool Wiring NJ \| Mike DiNinno Electric | Safe, code-compliant hot tub and pool wiring by a licensed NJ electrician. Proper bonding, grounding, GFCI. Permits pulled. |
| Landscape Lighting | Landscape & Outdoor Lighting Installation NJ \| Mike DiNinno Electric | Professional outdoor and landscape lighting installation across NJ. Pathways, patios, security, dusk-to-dawn. Free estimates. |
| New Construction | New Construction Wiring NJ \| Mike DiNinno Electric | Complete new construction and addition wiring in New Jersey. Rough-in through final inspection. Residential and commercial. |
| Recessed Lighting | Recessed & Accent Lighting Installation NJ \| Mike DiNinno Electric | Expert recessed and accent lighting installation across NJ. Design advice included. LED conversions, dimmers, smart controls. |
| Smoke Detectors | Smoke & CO₂ Detector Installation NJ \| Mike DiNinno Electric | Hard-wired, interconnected smoke and CO₂ detector installation in NJ. Code-compliant placement. Protect your family. |
| Troubleshooting | Electrical Troubleshooting & Repairs NJ \| Mike DiNinno Electric | Fast, accurate electrical troubleshooting and repairs in NJ. Dead outlets, tripping breakers, flickering lights. Emergency service available. |
| Service Agreements | Electrical Service Agreement NJ \| Mike DiNinno Electric | Fixed-price electrical service contracts for NJ businesses and facilities. Priority response, energy audits, free walk-throughs. |
| Blog | Electrical Tips & Advice \| Mike DiNinno Electric Blog | Expert electrical advice from a 30-year NJ licensed electrician. Home safety, energy efficiency, and what to know before your next project. |
| Contact | Contact Mike DiNinno Electric \| Free Estimate — NJ | Get in touch with Mike DiNinno Electric for a free estimate. Serving all of Northern and Central NJ. Call 973.787.7122 or send a message. |

---

## JSON-LD SCHEMA

### Home page — LocalBusiness
```json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Mike DiNinno Electric, LLC",
  "description": "Licensed electrical contractor serving residential, commercial, and industrial clients across New Jersey. Over 30 years of experience.",
  "url": "https://mikedininnoelectric.com",
  "telephone": "+19737877122",
  "email": "mikedininnoelectric@hotmail.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "15 Jennifer Court",
    "addressLocality": "Clifton",
    "addressRegion": "NJ",
    "postalCode": "07013",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 40.8584,
    "longitude": -74.1638
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"],
      "opens": "07:00",
      "closes": "18:00"
    }
  ],
  "areaServed": {"@type": "State", "name": "New Jersey"},
  "hasCredential": "New Jersey Electrical Contractor License",
  "foundingDate": "2013"
}
```

### Service pages — Service schema
```json
{
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "[Service Name]",
  "provider": {
    "@type": "LocalBusiness",
    "name": "Mike DiNinno Electric, LLC",
    "telephone": "+19737877122",
    "url": "https://mikedininnoelectric.com"
  },
  "areaServed": {"@type": "State", "name": "New Jersey"}
}
```

### Blog posts — BlogPosting schema
```json
{
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "[Post Title]",
  "datePublished": "[Date ISO]",
  "author": {
    "@type": "Person",
    "name": "Mike DiNinno"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Mike DiNinno Electric, LLC",
    "url": "https://mikedininnoelectric.com"
  }
}
```

---

## SITEMAP.XML

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url><loc>https://mikedininnoelectric.com/</loc><priority>1.0</priority></url>
  <url><loc>https://mikedininnoelectric.com/about-us/</loc><priority>0.8</priority></url>
  <url><loc>https://mikedininnoelectric.com/services/</loc><priority>0.9</priority></url>
  <url><loc>https://mikedininnoelectric.com/services/code-compliance/</loc><priority>0.7</priority></url>
  <url><loc>https://mikedininnoelectric.com/services/electrical-service-upgrades/</loc><priority>0.7</priority></url>
  <url><loc>https://mikedininnoelectric.com/services/generators/</loc><priority>0.7</priority></url>
  <url><loc>https://mikedininnoelectric.com/services/hot-tub-pool-wiring/</loc><priority>0.7</priority></url>
  <url><loc>https://mikedininnoelectric.com/services/landscape-outdoor-lighting/</loc><priority>0.7</priority></url>
  <url><loc>https://mikedininnoelectric.com/services/new-construction/</loc><priority>0.7</priority></url>
  <url><loc>https://mikedininnoelectric.com/services/recessed-lighting/</loc><priority>0.7</priority></url>
  <url><loc>https://mikedininnoelectric.com/services/smoke-co2-detectors/</loc><priority>0.7</priority></url>
  <url><loc>https://mikedininnoelectric.com/services/troubleshooting/</loc><priority>0.7</priority></url>
  <url><loc>https://mikedininnoelectric.com/service-agreements/</loc><priority>0.6</priority></url>
  <url><loc>https://mikedininnoelectric.com/blog/</loc><priority>0.6</priority></url>
  <url><loc>https://mikedininnoelectric.com/blog/backup-generator-benefits/</loc><priority>0.5</priority></url>
  <url><loc>https://mikedininnoelectric.com/blog/how-to-choose-an-electrician/</loc><priority>0.5</priority></url>
  <url><loc>https://mikedininnoelectric.com/blog/5-signs-upgrade-electrical-panel/</loc><priority>0.5</priority></url>
  <url><loc>https://mikedininnoelectric.com/contact/</loc><priority>0.8</priority></url>
</urlset>
```

---

## ROBOTS.TXT

```
User-agent: *
Allow: /
Sitemap: https://mikedininnoelectric.com/sitemap.xml
```

---

## _REDIRECTS (Netlify — map old WP URLs to new static slugs)

```
/home/                                                          /                                              301
/about/                                                         /about-us/                                     301
/services-we-offer/                                             /services/                                     301
/contact-us/                                                    /contact/                                      301
/service-contract-agreement/                                    /service-agreements/                           301
/services/code-compliance-electrical-corrections/               /services/code-compliance/                     301
/services/electrical-service-upgrades/                          /services/electrical-service-upgrades/         200
/services/generator-sales-installation-maintenance/             /services/generators/                          301
/services/hot-tub-pool-wiring/                                  /services/hot-tub-pool-wiring/                 200
/services/landscape-outdoor-lighting/                           /services/landscape-outdoor-lighting/          200
/services/new-construction-wiring/                              /services/new-construction/                    301
/services/recessed-accent-lighting-installation/                /services/recessed-lighting/                   301
/services/smoke-co2-detector-installation/                      /services/smoke-co2-detectors/                 301
/services/troubleshooting-repairs/                              /services/troubleshooting/                     301
/2025/04/05/benefits-of-installing-a-backup-generator-for-your-home/  /blog/backup-generator-benefits/        301
/2025/04/05/how-to-choose-the-right-electrician-what-to-ask-before-hiring/  /blog/how-to-choose-an-electrician/ 301
/2025/04/05/5-signs-its-time-to-upgrade-your-electrical-panel/  /blog/5-signs-upgrade-electrical-panel/       301
```

---

## BUILD ORDER

1. `build/images/` — download all WP images via curl commands above
2. Copy logos from `assets/` → `build/images/`
3. `css/style.css` — full design system with custom properties
4. `css/nav.css` — navigation
5. `css/animations.css` — animation classes
6. `css/backgrounds.css` — section background effects (dark, electric themed)
7. `js/nav.js` — sticky nav + hamburger (expose nothing globally)
8. `js/animations.js` — IntersectionObserver (expose `window.LWS.observe`)
9. `js/form.js` — Formspree handling + success/error states
10. `index.html` — Home (all 9 sections)
11. `about-us/index.html`
12. `services/index.html`
13. `services/code-compliance/index.html`
14. `services/electrical-service-upgrades/index.html`
15. `services/generators/index.html`
16. `services/hot-tub-pool-wiring/index.html`
17. `services/landscape-outdoor-lighting/index.html`
18. `services/new-construction/index.html`
19. `services/recessed-lighting/index.html`
20. `services/smoke-co2-detectors/index.html`
21. `services/troubleshooting/index.html`
22. `service-agreements/index.html`
23. `blog/index.html`
24. `blog/backup-generator-benefits/index.html`
25. `blog/how-to-choose-an-electrician/index.html`
26. `blog/5-signs-upgrade-electrical-panel/index.html`
27. `contact/index.html`
28. `sitemap.xml`
29. `robots.txt`
30. `_redirects`

---

## IMAGE OPTIMIZATION (run after all pages built, before delivery)

```bash
# Optimize all images in build/images/ recursively
# Max width: 1600px | JPG quality: 82 | PNG: lossless | Strip metadata | Skip under 100kb
# Print before/after size report
```

---

## QA GATE — MANDATORY BEFORE MARKING COMPLETE

Run these four passes IN ORDER. Do not mark build complete until all four pass.

1. `/polish` — Fix all spelling, grammar, copy consistency. Remove ALL `[PENDING]` placeholder text. Confirm no placeholder images.
2. `/colorize` — Verify ALL accent colors use `var(--color-accent)` — zero hardcoded hex values in HTML files.
3. `/layout` — Mobile breakpoint check at 375px, 768px, 1200px. Nav overlap, footer alignment, form layout, card grids.
4. `/animate` — Verify IntersectionObserver fires on all cards and sections. Confirm no elements stuck at `opacity:0`.

**Final verification checklist:**
- [ ] No `desktop.ini` files anywhere in build/
- [ ] No hardcoded `/` root-relative paths (grep: `src="/` and `href="/"`)
- [ ] No `https://` absolute paths to internal assets
- [ ] All `[PENDING]` placeholders replaced
- [ ] verifiedsecured.png renders at exactly 150×37px in every footer
- [ ] Emergency banner present on every page
- [ ] GA4 ID `G-CB47YKLFM8` correct on every page
- [ ] Formspree action `xojbywgd` correct on form pages
- [ ] All nav items ALL CAPS in rendered output
- [ ] All service page H1s are unique and contain "NJ" or "New Jersey"
- [ ] All blog posts have correct JSON-LD BlogPosting schema

---

## PENDING — GET FROM MIKE BEFORE GO-LIVE

| Item | Status |
|---|---|
| NJ Electrical Contractor License # | ⏳ Pending |
| Facebook page URL | ⏳ Pending |
| LinkedIn page URL | ⏳ Pending |
| Google Search Console verification meta tag | ⏳ Pending |
| Headshot photo of Mike | ⏳ Pending |
| Additional job site photos (if available) | ⏳ Pending |
| Design concept selection | ✅ Concept 3 — Electric Storm |

---

*INSTRUCTIONS.md — Mike DiNinno Electric | Live Web Studios*
