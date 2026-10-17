# Specification: Bugs, Complexity & Code Optimization

## Objective
Remediate identified functional, visual, and browser compatibility bugs across the Prism Hotel Management platform, eliminate redundant code duplication between lead forms, restore proper property color skinning in the live demo, and ensure 100% reliable conversion tracking and navigation.

## Tech Stack
- Framework: Next.js 16.4.2 (App Router with Turbopack)
- Language: TypeScript 5
- Core: React 19.3.0
- Icons: `lucide-react`
- Styling: Tailwind CSS v4 with custom design tokens (`src/styles/tokens.css`)

## Commands
```bash
Build: npm run build
Typecheck: npx tsc --noEmit
Lint: npm run lint
Dev: npm run dev
```

## Project Structure
```
src/
├── app/
│   ├── page.tsx               # Main landing page
│   ├── demo/page.tsx          # Standalone live demo application
│   ├── book-demo/page.tsx     # Dedicated book a demo lead capture page
│   └── layout.tsx             # Root layout with Cormorant Garamond & Inter
├── components/                # Landing page modular components & lead forms
│   ├── BookDemoForm.tsx       # Reusable multi-field agency booking form
│   ├── BookDemoModal.tsx      # Modal popup for booking walkthrough
│   ├── FooterContactForm.tsx  # In-page footer contact form
│   ├── Header.tsx             # Agency navigation header
│   └── ...
├── demo/                      # Standalone interactive hotel prototype (/demo)
│   ├── mockData.ts            # Hotel presets, room catalog, admin metrics
│   ├── HotelHome.tsx          # Client-facing hotel homepage with date picker
│   ├── Rooms.tsx              # Room accommodations catalog & reserve CTAs
│   ├── BookingFlowModal.tsx   # 4-step interactive reservation engine
│   └── AdminSnapshot.tsx      # Front-desk PMS live snapshot
└── config/
    └── siteConfig.ts          # Centralized configuration & company contact data
```

## Boundaries
- **Always do:**
  - Verify every modification with `npx tsc --noEmit` and `npm run build`.
  - Maintain WCAG AA text contrast and Taj luxury aesthetics.
  - Await user approval ("proceed") before transitioning to the next optimization phase.
- **Ask first:**
  - Any architectural layout changes to the landing page category navigation.
  - Addition of new external npm packages.
- **Never do:**
  - Break existing client-side booking or admin simulation state.
  - Use `window.open` after async promises where pop-up blockers trigger.
  - Leave unescaped HTML entities in JavaScript strings.

---

## Detailed Issue Specifications

### Module 1: Fix Visual HTML Entity Bug (`&bull;`)
- **Problem:** In `src/demo/mockData.ts`, `badgeText` strings contain raw `&bull;` entities. React escapes them in JSX strings, rendering literal `"&bull;"` on screen.
- **Requirement:** Replace `&bull;` with Unicode bullet `•` (`\u2022`) across all `badgeText` strings in `mockData.ts` and verify all badge rendering locations.
- **Success Criteria:** Badge in `HotelHome.tsx` renders cleanly as `"Heritage Property • Est. 1782"`.

### Module 2: Fix WhatsApp Lead Submission Flow & Popup Blocker
- **Problem:** In `BookDemoForm.tsx` and `FooterContactForm.tsx`, `window.open(whatsappUrl, "_blank")` is executed after `await submitLead()`. Modern browsers block pop-ups triggered asynchronously after promises resolve.
- **Requirement:** 
  1. Trigger submission cleanly without relying on asynchronous unprompted popups.
  2. In the success state, render a prominent, 1-click **"Continue to WhatsApp Chat"** button with prefilled message.
  3. Optionally trigger synchronous navigation or open the window tab synchronously before the request if direct redirect is desired.
- **Success Criteria:** Form submission records the lead and guarantees the user can reach WhatsApp without browser blocking warnings.

### Module 3: Synchronize Date Picker with Booking Engine Flow
- **Problem:** In `HotelHome.tsx`, the hero reservation bar allows choosing Check-in and Check-out dates. When clicking "Check Availability", dates are discarded and reset to static values in `BookingFlowModal.tsx`.
- **Requirement:** Update `onOpenBooking` to accept `{ roomId?: string; checkIn?: string; checkOut?: string }` so hero date selections seamlessly prefill Step 1 of `BookingFlowModal`.
- **Success Criteria:** Picking dates like Oct 28 - Oct 31 in `HotelHome.tsx` and clicking "Check Availability" opens the booking modal with Oct 28 - Oct 31 pre-selected.

### Module 4: Fix Cross-Page Anchor Navigation in Header
- **Problem:** `Header.tsx` uses relative hashes (`#services`, `#demo-preview`, `#process`, `#contact`). On `/book-demo`, clicking these links does nothing because those sections only exist on `/`.
- **Requirement:** Update header nav links to use root-relative paths (`/#services`, `/#process`, `/#contact`) so navigation works reliably from any route.
- **Success Criteria:** Clicking "Services" on `/book-demo` smoothly navigates to the home page Services section.

### Module 5: Dynamic Property Accent Re-skinning in Demo
- **Problem:** `mockData.ts` defines unique brand accent colors for each property type (Heritage: Gold, Boutique: Forest Emerald, Resort: Navy, Business: Terracotta), but `src/app/demo/page.tsx` hardcodes `#B8975A` for all properties.
- **Requirement:** Make the demo accent color dynamic based on the active property preset (`preset.defaultAccent`), allowing each hotel type to visually express its unique luxury identity.
- **Success Criteria:** Switching to "Boutique Retreat" shifts accents to Deep Emerald (`#2E6F56`), "Beach Resort" to Imperial Navy (`#1F4E79`), and "Heritage Palace" to Royal Gold (`#B8975A`).

### Module 6: Form Complexity & Redundancy Cleanup
- **Problem:** `BookDemoForm.tsx` and `FooterContactForm.tsx` duplicate telephone formatting, honeypot validation, and WhatsApp message construction logic.
- **Requirement:** Centralize shared phone sanitization and WhatsApp URL generator utilities into `src/lib/whatsapp.ts` or `src/lib/submitLead.ts` to reduce code duplication and simplify maintenance.
- **Success Criteria:** Both forms use a single shared source of truth for validation and WhatsApp formatting.
