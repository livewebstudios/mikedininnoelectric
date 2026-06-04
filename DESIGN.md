---
name: Mike DiNinno Electric — Electric Storm
description: Cinematic dark brand site for a veteran-owned NJ electrical contractor
colors:
  bg: "#080808"
  bg-alt: "#0A0A0A"
  bg-card: "#0D0D0D"
  bg-deep: "#050505"
  bg-plasma: "#08000F"
  accent-cyan: "#00C8FF"
  accent-electric: "#00D4FF"
  accent-purple: "#7B2FFF"
  accent-green: "#39FF14"
  accent-stars: "#FFD700"
  emergency: "#FF4500"
  teal-border: "#008080"
  text: "#FFFFFF"
  text-muted: "#CCCCCC"
  text-dim: "#888888"
  border-soft: "rgba(255,255,255,0.08)"
  topbar-bg: "#E9E9E9"
  topbar-ink: "#1A1A1A"
typography:
  display:
    fontFamily: "'Alumni Sans Pinstripe', 'Albert Sans', Arial, sans-serif"
    fontSize: "clamp(2.4rem, 5vw, 4.2rem)"
    fontWeight: 600
    lineHeight: 1.15
    letterSpacing: "0.02em"
  heading:
    fontFamily: "'Alumni Sans Pinstripe', 'Albert Sans', Arial, sans-serif"
    fontSize: "clamp(1.9rem, 3.8vw, 2.8rem)"
    fontWeight: 600
    lineHeight: 1.15
    letterSpacing: "0.01em"
  subheading:
    fontFamily: "'Alumni Sans Pinstripe', 'Albert Sans', Arial, sans-serif"
    fontSize: "clamp(1.3rem, 2.2vw, 1.6rem)"
    fontWeight: 600
    lineHeight: 1.2
  body:
    fontFamily: "'Alumni Sans Pinstripe', 'Albert Sans', Arial, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
  eyebrow:
    fontFamily: "'Alumni Sans Pinstripe', 'Albert Sans', Arial, sans-serif"
    fontSize: "0.85rem"
    fontWeight: 600
    letterSpacing: "0.25em"
  mono-label:
    fontFamily: "'Share Tech Mono', monospace"
    fontSize: "0.78rem"
    letterSpacing: "0.25em"
rounded:
  sm: "4px"
  md: "6px"
  lg: "12px"
  pill: "99px"
spacing:
  xs: "0.5rem"
  sm: "1rem"
  md: "1.5rem"
  lg: "2rem"
  xl: "3.5rem"
  section: "100px"
  section-tight: "64px"
  section-wide: "150px"
components:
  topbar:
    backgroundColor: "{colors.topbar-bg}"
    textColor: "{colors.topbar-ink}"
    height: "38px"
  nav:
    backgroundColor: "rgba(0,0,0,0.9)"
    textColor: "{colors.text}"
    height: "72px"
  button-primary:
    backgroundColor: "{colors.accent-cyan}"
    textColor: "#000000"
    rounded: "{rounded.md}"
    padding: "0.95rem 2rem"
  button-primary-hover:
    backgroundColor: "#FFFFFF"
    textColor: "{colors.accent-cyan}"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.text}"
    rounded: "{rounded.md}"
    padding: "0.95rem 2rem"
  button-secondary-hover:
    textColor: "{colors.accent-cyan}"
  button-emergency:
    backgroundColor: "{colors.emergency}"
    textColor: "#FFFFFF"
    rounded: "{rounded.md}"
    padding: "1.1rem 2.5rem"
  service-card:
    backgroundColor: "{colors.bg-card}"
    rounded: "{rounded.md}"
  pillar:
    backgroundColor: "{colors.bg-card}"
    rounded: "{rounded.md}"
    padding: "1.5rem 1.75rem"
  feature-tile:
    backgroundColor: "rgba(30,144,212,0.12)"
    rounded: "{rounded.lg}"
    padding: "1.25rem 0.75rem"
  feature-tile-emergency:
    backgroundColor: "rgba(232,93,4,0.12)"
    rounded: "{rounded.lg}"
  licensed-badge:
    backgroundColor: "rgba(255,69,0,0.10)"
    textColor: "{colors.emergency}"
    rounded: "{rounded.pill}"
    padding: "0.5rem 1rem"
  contact-form-input:
    backgroundColor: "{colors.bg}"
    textColor: "{colors.text}"
    rounded: "{rounded.md}"
    padding: "0.95rem 1rem"
  emergency-bar:
    backgroundColor: "linear-gradient(90deg, rgba(255,69,0,0.18), rgba(0,0,0,0.6), rgba(255,69,0,0.18))"
    textColor: "{colors.text}"
---

# Mike DiNinno Electric — Electric Storm

## Overview

The Electric Storm system. Cinematic dark mode for a veteran-owned NJ electrical contractor, designed to read as a premium professional operation (not a one-truck shop) while feeling distinctly *electric*: animated lightning grids, drifting plasma orbs, pulsing cyan/purple glows, and a thin teal-and-cream utility strip at the very top of every page.

The brand has a strict scaffolding: **topbar (38px light grey) → primary nav (72px near-black) → page-hero (full-viewport on home with split logo/text, 32vh on subpages) → emergency call bar → content sections → plasma-orb footer**. Every page follows this rhythm. Lightning Grid is the hero background across the site; alternate atmospheres (Circuit Board, Plasma Arc, Voltage Hazard, Thermal Power) appear once per page max as section accents.

Color strategy is **Committed**: near-black is the body bg (≥75% of surface), cyan `#00C8FF` is the brand voice carrier (links, focus, emphasis, button fills), purple `#7B2FFF` is the secondary atmospheric (plasma orbs, lightning bolts), and orange `#FF4500` is reserved exclusively for emergency / urgency cues. The thin light grey topbar is the only intentional break from dark.

This DESIGN.md captures the system as shipped. New screens, sections, and components should adhere to the tokens below. Distinctive moves (lightning grid, plasma orb, BG-effect overlays) are part of the language; reproduce them, don't reinvent them.

## Colors

| Token | Hex | Usage |
|---|---|---|
| `bg` | `#080808` | Site body background |
| `bg-alt` | `#0A0A0A` | Alternating section bg |
| `bg-card` | `#0D0D0D` | Card surfaces (service, blog, testimonial, pillar) |
| `bg-deep` | `#050505` | Footer base (before plasma overlay) |
| `bg-plasma` | `#08000F` | Plasma section + footer base |
| `accent-cyan` | `#00C8FF` | Primary brand accent, links, buttons, focus rings, ~85% of decorative motion |
| `accent-electric` | `#00D4FF` | Variant cyan used in hero lightning + grid lines |
| `accent-purple` | `#7B2FFF` | Plasma core, hover halos, BG03/footer atmospherics |
| `accent-green` | `#39FF14` | Reserved for BG02 Circuit Board canvas pulses only (single-use neon green) |
| `accent-stars` | `#FFD700` | Testimonial star ratings + the BG02 bolt color |
| `emergency` | `#FF4500` | Phone CTAs, emergency bar, "Licensed & Insured" pill, BG04 hazard borders |
| `teal-border` | `#008080` | Mike's portrait frame border, that single deliberate move |
| `text` | `#FFFFFF` | Headings + primary body |
| `text-muted` | `#CCCCCC` | Long-form paragraphs, lead copy |
| `text-dim` | `#888888` | Captions, metadata, secondary list items |
| `border-soft` | `rgba(255,255,255,0.08)` | Default card/section borders |
| `topbar-bg` | `#E9E9E9` | Light utility strip at the very top |
| `topbar-ink` | `#1A1A1A` | Text on the topbar |

**Contrast**: white-on-`#080808` measures ~21:1 (well above WCAG AAA at 7:1). Muted text on near-black bg measures ~13:1. The single AA-borderline case is the red `licensed-badge` text on a red-tinted background (~4.5:1).

## Typography

Two-family system: `Alumni Sans Pinstripe` as the headline-character voice (decorative, vertical-line stylization through letters; rare and intentional) with `Albert Sans` as the always-loaded sibling for weight contrast and fallback rendering. `Share Tech Mono` is the third utility face for code-style eyebrows and section labels (used sparingly).

- **Display** (`h1`, `.hero-h1`): clamp(2.4rem, 5vw, 4.2rem), weight 600, letter-spacing 0.02em, uppercase. `text-wrap: balance` for line evenness.
- **Heading 2** (`h2`, `.section-h2`): clamp(1.9rem, 3.8vw, 2.8rem), weight 600, uppercase.
- **Heading 3** (`h3`): clamp(1.3rem, 2.2vw, 1.6rem), weight 600.
- **Body**: 1rem (16px floor), line-height 1.6, color `text-muted`.
- **Eyebrow** (`.eyebrow`): 0.85rem, weight 600, letter-spacing 0.25em, uppercase, cyan, with a 28px underline ::after. Used as section labels, sparingly — never on every section (PRODUCT.md anti-ref).
- **Mono label** (`Share Tech Mono`): 0.78rem, letter-spacing 0.25em, uppercase. Used on the "Why Mike?" card eyebrow and similar code-leaning callouts.

`.section-h2 .accent` and `.hero-h1 .line2` carry a multi-layer cyan text-shadow for the signature heading glow.

## Elevation

The Electric Storm system does not use traditional `box-shadow` for layering; depth is conveyed through **glow** and **background blur/overlay**.

| Token / Pattern | Effect |
|---|---|
| **Card rest** | `inset 0 0 20px rgba(0,200,255,0.04), inset 0 1px 0 rgba(0,200,255,0.08), 0 0 0 1px rgba(0,200,255,0.06)` |
| **Card hover** | `inset 0 0 40px rgba(0,200,255,0.08), 0 0 30px rgba(0,200,255,0.12), 0 0 0 1px rgba(0,200,255,0.2)` |
| **Top card glow** | Universal `::after` radial gradient (cyan, mix-blend-mode: screen) on every card, simulates "lit from above" |
| **Button primary** | `0 0 20px rgba(0,200,255,0.35), 0 0 60px rgba(0,200,255,0.15)` |
| **Hero h1 glow** | `text-shadow: 0 0 30px rgba(0,200,255,0.7), 0 0 80px rgba(0,200,255,0.3), 0 0 140px rgba(0,200,255,0.15)` |
| **Emergency phone glow** | `text-shadow: 0 0 20px rgba(255,69,0,0.8), 0 0 60px rgba(255,69,0,0.4)` |
| **About portrait frame** | 1px `#008080` border + `0 0 40px rgba(0,200,255,0.08), inset 0 0 60px rgba(0,200,255,0.04)` |

Backdrop blur (`backdrop-filter: blur(10px)`) is used only on the sticky nav for a glassy effect against the lightning hero behind. It is *not* used as a general decorative pattern (no "glassmorphism cards") per Impeccable's brand register guidance.

## Components

### Topbar utility strip
Light grey strip at the very top, 38px tall (34px on mobile). Carries `⚡ Call Now for Emergency Service · Free Consultations Available 973.787.7122`. The phone has a 2px red underline that brightens on hover. On mobile ≤720px, the tagline collapses and only the phone remains.

### Sticky nav
Dark `rgba(0,0,0,0.9)` with backdrop blur. 72px tall. The logo `<img>` fills the full nav height (height: 72px) and sits at the leftmost edge. Menu items are uppercase Albert Sans 0.82rem, padded `0.65rem 0.75rem`, `gap: 2.5rem` from the logo. SERVICES is a real link to the services index, hover reveals a dropdown of all 9 service slugs. Mobile (≤992px) collapses to a full-screen overlay menu (z-index 1100) with the hamburger pinned top-right when open.

### Hero — `#hero-lightning`
Lightning Grid is the canonical hero background. Structure:

```
<section class="hero" id="hero-lightning">
  <div class="grid-lines"></div>      <!-- dual-scale cyan grid -->
  <div class="arc-glow"></div>          <!-- top radial cyan pulse -->
  <div class="bolt-container">          <!-- 5 strobing bolts -->
    <div class="bolt b1..b5"></div>
  </div>
  <div class="hero-inner [hero-split]"> <!-- content -->
  </div>
</section>
```

Home uses `.hero-split` for the logo-color.png-on-left + headline-on-right two-column layout. Subpages use `.page-hero` (32vh min-height, smaller scale) but the same lightning markup inside.

### Emergency bar
Full-width gradient strip below the hero. Background gradient red-tinted at the edges, dark in the middle. `⚡ Electrical Emergency? Call Now — 973.787.7122` with the phone underlined in red, glowing.

### Feature bar (home)
5-column grid of dark tinted tiles (cyan-tinted blue for the 4 standard, orange-tinted for the EMERGENCY SERVICE tile). Tabler icon + uppercase label. On mobile ≤480px the emergency tile spans full width.

### Why Mike? card (home)
Right-column card in the welcome section: dark gradient bg with cyan glow, 4 differentiator items (Veteran-Owned / Licensed / 30+ Years / 24/7), each with a 42×42 cyan icon tile + uppercase strong + dim description. Footed by a right-aligned link to the contact page.

### Service card
Image + body, full-bleed image at top (16:10 aspect), body has h3, paragraph, and "Learn More →" link. Hover: cyan glow ring, arc-of-light pseudo-element sweeps across the top, image scales 1.08 and brightens.

### Testimonial card
Five-star row (`color: accent-stars`), italic blockquote, divider, name + role. Border highlights to purple on hover.

### Plasma footer
Every page footer is a `.site-footer.plasma-section`. Layer stack from back to front:
1. `#08000F` deep purple-black bg
2. Rotating `.plasma-core` orb (600px desktop / 340px mobile) with conic sweep and pulsing white-hot core
3. Three expanding `.ring` elements (purple, cyan, white)
4. `.plasma-overlay` dark gradient (rgba(8,0,15,0.55) → rgba(0,0,0,0.92))
5. Wavy-line PNG separator
6. 4-column footer grid + footer-bottom row

### About portrait frame
4:5 aspect, 1px solid `#008080` border, 360px max-width (240px mobile), right-aligned in its grid column so it butts up to the bio. Image gets `object-fit: cover; object-position: top center; filter: contrast(1.05) saturate(0.9)` plus a 40% bottom gradient overlay.

### Contact form
Dark bg-card form with input borders soft-white, focus state ramps to cyan `outline: 2px solid var(--color-accent)` with cyan box-shadow halo. Submit button uses `.btn-primary`. Async submit via `js/form.js`; success/error inline below the submit.

## Do's and Don'ts

### Do

- Use the **5-BG system** (Lightning Grid, Circuit Board, Plasma Arc, Voltage Hazard, Thermal Power) for section backgrounds, never duplicate the same BG on a page.
- Apply `:focus-visible` to every interactive element. The skip-link helper class is `.skip-link`.
- Honor `prefers-reduced-motion: reduce` — every animation already has a fallback that disables it.
- Carry the cyan glow into new components via the existing `box-shadow` patterns or the universal top-card-glow `::after`.
- Use `clamp()` for fluid typography on headings; ratio 1.25× minimum between scale steps.
- Pull from the token system. Inline hex in HTML is fine for the topbar (it's not part of the dark theme), nowhere else.

### Don't

- **No em-dashes in copy.** PRODUCT.md anti-ref. Use commas, periods, colons, or parentheses.
- **No `<button>` for the SERVICES nav** — it's a real link to the services index.
- **No emojis used as functional UI icons** — the existing emoji (⚡ in the topbar/emergency, ★ for ratings, 📞 for phone, ✉ ✏ 📍 in contact info) are decorative content, not actionable. Use Tabler icons (loaded via the CDN) for actionable UI.
- **No new card grids that duplicate the 9-service-card pattern.** That structure carries the most weight on the home page; avoid identical-card-grid repetition elsewhere.
- **No numbered section eyebrows** (`01 · About`). PRODUCT.md anti-ref.
- **No glassmorphism as decoration.** The one acceptable backdrop-filter use is the sticky nav. Don't add glass cards.
- **No root-relative paths** (`/css/style.css`) or absolute URLs to internal assets. Live Web Studios global rule.
- **No `text-transform: uppercase` on body paragraphs.** Reserved for nav links, labels, eyebrows, and short button copy.
- **No second display font.** The stack is locked: Alumni Sans Pinstripe + Albert Sans + Share Tech Mono. Three families is the ceiling.
