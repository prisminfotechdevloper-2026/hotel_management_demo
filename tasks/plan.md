# Technical Implementation Plan: Prism Hotel Management

## Phase 1: Foundations & Architecture Setup
1. Install `lucide-react`.
2. Configure Google Fonts (`Cormorant Garamond` & `Inter`) in Next.js root layout.
3. Establish Design Tokens in `src/styles/tokens.css` and configure Tailwind CSS variables.
4. Set up `src/config/siteConfig.ts` with all copy, navigation, statistics, and video settings.
5. Create mock lead submission utility `src/lib/submitLead.ts`.
6. Copy `Untitled video (4).mp4` from `task/` to `public/videos/overview.mp4`.

## Phase 2: Landing Page Modular Build Order
Build strictly one component at a time, gated by user confirmation:
1. **Module 1: Sticky Header / Navbar (`Header.tsx`)**
   - Wordmark 'PRISM' with gold prism icon + 'Hotel Management'.
   - Nav links: Services, Demo, Process, Contact.
   - Right: "Book a Demo" CTA button.
   - Mobile: Responsive hamburger toggle with clean dropdown drawer.
2. **Module 2: Hero Section (`Hero.tsx`)**
   - Full-width dark luxury aesthetic with subtle overlay.
   - Eyebrow: "Digital growth for hotels".
   - Headline: "We build the software that fills your rooms."
   - Subtext + dual CTA buttons ("Book a Demo" + "Watch Overview" scroll trigger).
   - Trust line under buttons.
3. **Module 3: Overview Video Section (`VideoSection.tsx`)**
   - Centered 16:9 player with thin gold border.
   - Gold circular play button with duration badge.
   - Connects to local MP4 video file from `task/` with lazy loading and fallback.
4. **Module 4: What We Build / Services (`ServiceCards.tsx`)**
   - 4 luxury cards: Hotel Website, Booking Engine, Hotel Management Software, Digital Marketing & SEO.
   - "Learn more" anchor scrolls smoothly to Contact.
5. **Module 5: Live Demo Preview (`DemoPreview.tsx`)**
   - Split layout with copy on left, realistic hotel app frame mockup on right.
   - "Open Live Demo" CTA link to `/demo`.
6. **Module 6: How It Works & Why Prism Proof Points (`Steps.tsx` & `Proof.tsx`)**
   - 4 numbered steps (Discovery, Mapping, Build, Launch).
   - Proof statistics grid with clean numbers and labels.
7. **Module 7: Testimonials & Final CTA Band (`Testimonials.tsx` & `CTABand.tsx`)**
   - 2-3 quotes from hotel owners.
   - Dark high-impact CTA band for booking demo.
8. **Module 8: Luxury Footer (`Footer.tsx`)**
   - Wordmark, contact info, email, phone, city, WhatsApp trigger, copyright.
9. **Module 9: Book a Demo Modal / Flow (`BookDemoModal.tsx` & `/book-demo`)**
   - Multi-step or clean modal with validation (name, hotel name, email, phone, rooms count, requirements chips, preferred time).
10. **Module 10: Standalone Live Demo App (`/demo`)**
    - Aurelia Heritage Hotel mock application.
    - Floating requirement switcher (Hotel Type + 4 Accent colors).
    - Room cards, 4-step interactive booking flow modal, and read-only Admin snapshot.

## Verification Checkpoints
- After each module, verify in browser dev server, check mobile responsiveness, and await user command ("proceed") before starting the next module.
