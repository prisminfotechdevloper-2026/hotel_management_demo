# Optimization & Bug Remediation Tasks

- [x] Task 1: Fix Visual Bug (Literal `&bull;` in Demo Mock Data)
  - Acceptance: In `mockData.ts`, replace `&bull;` with Unicode bullet `•` across all hotel presets. Badge in `HotelHome.tsx` displays `"Heritage Property • Est. 1782"` with no raw entity text.
  - Verify: `npx tsc --noEmit` passes; inspect `/demo` badge in browser.
  - Files: `src/demo/mockData.ts`

- [x] Task 2: Fix WhatsApp Lead Submission Flow & Popup Blocker
  - Acceptance: Form submission does not rely on async `window.open` calls that trigger browser popup blockers. Render a direct 1-click WhatsApp redirect CTA button in the confirmation banner.
  - Verify: Form submits cleanly and opens WhatsApp without browser popup warnings in Chrome or Safari.
  - Files: `src/components/BookDemoForm.tsx`, `src/components/FooterContactForm.tsx`

- [x] Task 3: Synchronize Demo Date Picker with Booking Engine
  - Acceptance: Dates picked in `HotelHome.tsx` hero are passed through `onOpenBooking` to prefill Check-in and Check-out dates in `BookingFlowModal.tsx`.
  - Verify: Select dates on `/demo` home, click "Check Availability", and confirm dates match in modal Step 1 & price calculation.
  - Files: `src/app/demo/page.tsx`, `src/demo/HotelHome.tsx`, `src/demo/BookingFlowModal.tsx`

- [x] Task 4: Fix Cross-Page Navigation in Header Links
  - Acceptance: Update nav links in `siteConfig.navLinks` and `Header.tsx` to root-relative paths (`/#services`, `/#process`, `/#contact`) so clicking them on `/book-demo` returns smoothly to the homepage sections.
  - Verify: Click "Services" from `/book-demo`, verify navigation back to homepage `#services`.
  - Files: `src/config/siteConfig.ts`, `src/components/Header.tsx`

- [x] Task 5: Enable Dynamic Brand Color Accents in Demo
  - Acceptance: Connect `preset.defaultAccent` to active theme in `/demo`, allowing Boutique Retreat (Emerald), Beach Resort (Navy), and Business Hotel (Terracotta) to dynamically re-skin UI accents.
  - Verify: Switch between properties in `/demo` and verify accent colors adapt immediately.
  - Files: `src/app/demo/page.tsx`, `src/demo/ThemeSwitcher.tsx`

- [x] Task 6: Code Redundancy Cleanup (Shared WhatsApp & Form Helpers)
  - Acceptance: Extract shared WhatsApp query formatting and phone validation into `src/lib/whatsapp.ts`, reducing duplication between `BookDemoForm.tsx` and `FooterContactForm.tsx`.
  - Verify: `npx tsc --noEmit` and `npm run build` pass with 0 errors.
  - Files: `src/lib/whatsapp.ts`, `src/components/BookDemoForm.tsx`, `src/components/FooterContactForm.tsx`
