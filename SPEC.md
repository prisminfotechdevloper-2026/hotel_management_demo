# Specification: Prism Hotel Management Agency Website & Demo Software

## 1. Capability Map

| Module ID | Responsibility | Depends on |
|---|---|---|
| `foundations` | Design tokens (`tokens.css`), typography (Cormorant Garamond & Inter), config (`siteConfig.ts`), Lucide icons | — |
| `navbar` | Sticky header with wordmark, gold prism icon, desktop navigation links, Book a Demo CTA, mobile hamburger menu | `foundations` |
| `hero` | Dark luxury full-width hero, eyebrow label, headline, subtext, dual CTA buttons, trust indicators | `foundations`, `navbar` |
| `video-section` | Dark band 16:9 overview video player (using `Untitled video (4).mp4`), poster image, gold circular play button, lazy loading | `foundations` |
| `services` | 4 service cards (Hotel Website, Booking Engine, Hotel Management Software, Digital Marketing & SEO) with smooth scroll to contact | `foundations` |
| `demo-preview` | Split layout showing live demo preview mockup (laptop/phone) with copy & "Open Live Demo" CTA | `foundations` |
| `process-proof` | 4 numbered steps (Discovery, Mapping, Build, Launch) + 3-4 proof point stats + client quotes/testimonials | `foundations` |
| `cta-footer` | Final dark CTA band + clean luxury footer (wordmark, contact info, social links, copyright) | `foundations` |
| `lead-forms` | Book a Demo modal / route + Contact form with validation, honeypot, and `submitLead()` mock API | `foundations` |
| `demo-app` | Standalone `/demo` route: Aurelia Heritage Hotel demo with Hotel Type & Accent switcher, room cards, 4-step booking flow, admin snapshot | `foundations` |

**Build Order:**
1. `foundations`
2. `navbar`
3. `hero`
4. `video-section`
5. `services`
6. `demo-preview`
7. `process-proof`
8. `cta-footer`
9. `lead-forms`
10. `demo-app`

---

## 2. Objective
Build a high-converting, luxury B2B agency sales website and interactive software demo for **Prism Hotel Management**.
Prism is **not** a hotel; it is a digital growth agency that builds websites, booking engines, and management software for hotels (boutique, heritage, resort, business hotels in India).
The site must reflect the restrained luxury mood of **Taj Jai Mahal Palace, Jaipur** (deep black, warm gold, cream backgrounds, Cormorant Garamond serif, Inter sans-serif).

### Primary Goals:
- Convert hotel owners and general managers into demo bookings and enquiries.
- Instant clarity: A first-time visitor understands what Prism does within 5 seconds.
- One-click access to "Book a Demo" anywhere on the page.

---

## 3. Tech Stack & Dependencies
- **Framework**: Next.js 16 (App Router) + React 19 + TypeScript
- **Styling**: Tailwind CSS v4 + Custom design tokens (`tokens.css`)
- **Fonts**: `Cormorant Garamond` (Google Fonts via `next/font/google`) & `Inter`
- **Icons**: `lucide-react`
- **Video**: Self-hosted MP4 (`task/Untitled video (4).mp4` copied to `public/videos/overview.mp4`) with click-to-play lazy loading and customizable `siteConfig.ts`

---

## 4. Commands
- **Dev**: `npm run dev`
- **Build**: `npm run build`
- **Start**: `npm run start`
- **Lint**: `npm run lint`

---

## 5. Design Tokens (Taj Inspired)
```css
:root {
  --color-ink: #141414;        /* Headings, nav, dark sections */
  --color-charcoal: #2A2A2A;   /* Body text */
  --color-gold: #B8975A;       /* Accent, primary button, lines, icons */
  --color-gold-deep: #9A7B43;  /* Button hover */
  --color-cream: #FAF7F2;      /* Page background, alternate sections */
  --color-line: #E4DCCB;       /* Borders, dividers */
  --color-stone: #6B645A;      /* Secondary text */
  --color-white: #FFFFFF;      /* Cards, forms */
}
```

### Components & UI Rules:
- **Primary button**: Gold background (`#B8975A`), ink text (`#141414`), uppercase 13px, letter-spacing 0.1em, 0px border radius (sharp Taj corners), padding 16px 32px. Hover: `#9A7B43`.
- **Secondary button**: Transparent, 1px gold border, gold text. Hover fills gold with ink text.
- **Section Spacing**: 96px vertical padding on desktop, 64px on mobile. Max content width: 1200px.
- **Cards**: White on cream background, 1px line border, subtle hover lift, no heavy drop shadows.
- **Typography**: Cormorant Garamond serif for headlines (weight 500-600, tight leading). Inter for body and UI (weight 400/500, line-height 1.65). Eyebrow labels: Inter 11-12px uppercase, letter-spacing 0.18em, gold.

---

## 6. Boundaries
- **Always do**: Keep all copy, contact details, video paths, and statistics centralized in `src/config/siteConfig.ts`.
- **Always do**: Follow WCAG AA contrast (ink text on gold buttons, white text on dark sections).
- **Always do**: Maintain 0-radius sharp corners for buttons as specified in Taj guidelines.
- **Never do**: Add pop-ups, autoplay audio/video, or unsolicited generic elements not in the brief.
- **Never do**: Pretend Prism is a hotel or add room listings on the landing page hero.

---

## 7. Success Criteria
1. Visual and experiential parity with the brief's Taj-inspired luxury design language.
2. Complete landing page with all 10 ordered sections functioning smoothly.
3. Interactive video player playing the provided overview video with custom controls & poster.
4. Functional `/demo` software preview with theme/accent switcher, room catalog, interactive booking flow, and mock admin snapshot.
5. Functional Book Demo and Contact flows with validation and `submitLead()` mock handler.
