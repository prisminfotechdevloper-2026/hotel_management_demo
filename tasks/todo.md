# Implementation Tasks

- [x] Task 1: Foundations & Design System Setup
  - Acceptance: `lucide-react` installed, `tokens.css` created with Taj colors, `Cormorant Garamond` & `Inter` configured in Next.js layout, `siteConfig.ts` created, video asset transferred to `public/videos/`.
  - Verify: Next.js builds clean (`npm run build`), tokens accessible in CSS.
  - Files: `package.json`, `src/styles/tokens.css`, `src/app/globals.css`, `src/app/layout.tsx`, `src/config/siteConfig.ts`

- [x] Task 2: Navbar / Sticky Header Component
  - Acceptance: Wordmark 'PRISM' with gold prism icon + 'Hotel Management', navigation links (Services, Demo, Process, Contact), Book a Demo CTA button, responsive hamburger menu under 900px, sticky on scroll.
  - Verify: Header renders cleanly at desktop (1440px) and mobile (360px) breakpoints with sharp Taj luxury styling.
  - Files: `src/components/Header.tsx`, `src/app/page.tsx`

- [x] Task 3: Hero Section
  - Acceptance: Light luxury cream theme, full-width Taj Jai Mahal Palace reference imagery, gold eyebrow label, Cormorant Garamond serif headline, subtext, dual action buttons (Book a Demo + Watch Overview scroll trigger), trust line, floating revenue lift badge.
  - Verify: Renders cleanly above the fold, text matches brief, buttons styled correctly, image loads without layout shift.
  - Files: `src/components/Hero.tsx`, `src/app/page.tsx`, `public/images/hero-palace.jpg`

- [x] Task 4: Overview Video Section
  - Acceptance: Ink-colored band, centered 16:9 player, thin gold border, gold circular play button, duration badge, lazy loaded HTML5 video playing `Untitled video (4).mp4` (`public/videos/overview.mp4`), custom playback controls, replay/CTA overlay on end, and auto-pause on scroll.
  - Verify: Video plays on click, doesn't autoplay with sound, responsive down to 360px.
  - Files: `src/components/VideoSection.tsx`, `src/app/page.tsx`, `public/videos/overview.mp4`, `public/images/video-poster.jpg`

- [x] Task 5: What We Build / Service Cards
  - Acceptance: 4 luxury service cards (Hotel Website, Booking Engine, Hotel Management Software, Digital Marketing & SEO) with custom icons, 01-04 numerals, white card on cream background, subtle hover lift, and "Learn more" scroll action to contact.
  - Verify: Grid responsive across 360px, 768px, 1200px, matches Taj aesthetics.
  - Files: `src/components/ServiceCards.tsx`, `src/app/page.tsx`

- [x] Task 6: Live Demo Preview Section
  - Acceptance: Split layout with left-hand copy & feature breakdown, right-hand laptop/mobile mockup frame of sample hotel app, and "Open Live Demo" CTA linking to `/demo`.
  - Verify: Visual mockup displays correctly and links to demo.
  - Files: `src/components/DemoPreview.tsx`, `src/app/page.tsx`

- [x] Task 7: How It Works & Why Prism Proof Points
  - Acceptance: 4 numbered steps (Discovery, Requirement mapping, Build & review, Launch & growth) in `Steps.tsx` + 4 proof statistics with numbers (`+38%`, `14 Days`, `0%`, `24/7`) and editable labels in `Proof.tsx`.
  - Verify: Clear sequence and readable metrics on all screen widths, styled with Taj palette.
  - Files: `src/components/Steps.tsx`, `src/components/Proof.tsx`, `src/app/page.tsx`

- [x] Task 8: Testimonials & Final CTA Band
  - Acceptance: 3 quotes from hotel general managers with subtle luxury styling, Cormorant Garamond typography, followed by high-impact dark CTA band with Book a Demo & Contact buttons.
  - Verify: Clean typography, proper contrast, and responsive layout across all breakpoints.
  - Files: `src/components/Testimonials.tsx`, `src/components/CTABand.tsx`, `src/app/page.tsx`

- [x] Task 9: Luxury Footer & Floating WhatsApp
  - Acceptance: Footer with PRISM wordmark, contact line, email, phone, city, short contact form with `submitLead()` mock API, social icons, copyright, and floating bottom-right WhatsApp button opening prefilled chat.
  - Verify: Matches brief constraints (nothing else floats on screen), clean responsive layout.
  - Files: `src/components/Footer.tsx`, `src/components/WhatsAppButton.tsx`, `src/app/page.tsx`

- [x] Task 10: Book a Demo Modal / Flow & Contact Handler
  - Acceptance: Complete lead capture modal (`BookDemoModal.tsx`) + dedicated route (`/book-demo`) with all fields specified in section 6 (name, hotel, email, 10-digit phone, city, rooms select, multi-select needs chips, preferred slot, message), validation, honeypot spam protection, and `submitLead()` mock API.
  - Verify: Validation catches errors, modal opens from any "Book a Demo" CTA, submission shows 24h confirmation notice.
  - Files: `src/components/BookDemoModal.tsx`, `src/app/book-demo/page.tsx`, `src/app/page.tsx`, `src/lib/submitLead.ts`

- [x] Task 11: Standalone Live Demo Software (`/demo`)
  - Acceptance: 'Aurelia Heritage Hotel' full interactive demo route (`/demo`) with floating Requirement Switcher (Heritage, Boutique, Resort, Business + 4 Accent color presets: Royal Gold, Deep Emerald, Imperial Navy, Rich Terracotta), Hotel Home with live date picker, Room catalog with filter, 4-step client-side interactive direct booking flow modal, and live read-only Admin snapshot dashboard.
  - Verify: Instant theme re-skinning, booking voucher generation, zero TypeScript/build errors.
  - Files: `src/app/demo/page.tsx`, `src/demo/mockData.ts`, `src/demo/ThemeSwitcher.tsx`, `src/demo/HotelHome.tsx`, `src/demo/Rooms.tsx`, `src/demo/BookingFlowModal.tsx`, `src/demo/AdminSnapshot.tsx`
