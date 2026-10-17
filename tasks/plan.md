# Technical Plan: Optimization & Bug Remediation

## Overview
Gated implementation plan to resolve 5 identified bugs, eliminate code duplication, and optimize application architecture.

Each phase is executed independently and validated with `npx tsc --noEmit` and manual verification before proceeding to the next.

---

## Phase 1: Visual Defect Remediation (Bug 1)
- **Goal:** Fix literal HTML entity string rendering in `mockData.ts`.
- **Target Files:**
  - `src/demo/mockData.ts`
  - `src/demo/HotelHome.tsx`
- **Actions:**
  1. Replace `&bull;` in `HOTEL_PRESETS` badgeText with Unicode bullet character `•`.
  2. Verify that other string occurrences in `mockData.ts` render cleanly.
- **Verification:**
  - `npx tsc --noEmit`
  - Visual verification in browser at `/demo`.

---

## Phase 2: Lead Submission Flow & Browser Popup Blocker Resolution (Bug 2)
- **Goal:** Eliminate browser popup blocking on WhatsApp redirects across all lead forms.
- **Target Files:**
  - `src/components/BookDemoForm.tsx`
  - `src/components/FooterContactForm.tsx`
- **Actions:**
  1. Open a blank window synchronously on user click before `await submitLead()`, or transition to a direct high-contrast "Continue to WhatsApp Chat" CTA in the success banner that is 100% immune to popup blockers.
  2. Ensure the WhatsApp message payload formats cleanly without truncation.
- **Verification:**
  - Test lead submission in Chrome/Safari to confirm zero "Pop-up blocked" browser warnings.

---

## Phase 3: Demo Home Date Picker & Booking Engine Synchronization (Bug 3)
- **Goal:** Carry user-selected dates from `HotelHome` hero into `BookingFlowModal`.
- **Target Files:**
  - `src/app/demo/page.tsx`
  - `src/demo/HotelHome.tsx`
  - `src/demo/BookingFlowModal.tsx`
- **Actions:**
  1. Extend `onOpenBooking` signature to accept `{ roomId?: string; checkIn?: string; checkOut?: string }`.
  2. Pass selected dates from `HotelHome` state when clicking "Check Availability".
  3. Initialize `BookingFlowModal` dates with the passed-in values.
- **Verification:**
  - Selecting custom dates in `/demo` and clicking "Check Availability" displays those exact dates in the booking modal summary and price calculations.

---

## Phase 4: Header Cross-Page Navigation Fix (Bug 4)
- **Goal:** Allow navigation from `/book-demo` and other sub-routes back to homepage sections.
- **Target Files:**
  - `src/components/Header.tsx`
  - `src/config/siteConfig.ts`
- **Actions:**
  1. Update `siteConfig.navLinks` to root-relative paths (`/#services`, `/#process`, `/#contact`).
  2. Ensure clicking links from `/book-demo` navigates back to `/` and smoothly anchors to the section.
- **Verification:**
  - Navigate to `/book-demo`, click "Services" in header, confirm browser smoothly lands on the homepage services section.

---

## Phase 5: Dynamic Property Accent Color Re-Skinning (Bug 5)
- **Goal:** Connect preset default accents so each hotel property in `/demo` dynamically updates its accent theme.
- **Target Files:**
  - `src/app/demo/page.tsx`
  - `src/demo/ThemeSwitcher.tsx`
  - `src/demo/mockData.ts`
- **Actions:**
  1. Derive `currentAccent` from `HOTEL_PRESETS[currentType].defaultAccent` (or user selection).
  2. Pass `currentAccent` to all demo components so Emerald, Navy, and Terracotta palettes take effect on switcher tab selection.
- **Verification:**
  - In `/demo`, click "Boutique Retreat" -> accent changes to Emerald Green. Click "Beach Resort" -> accent changes to Navy Blue.

---

## Phase 6: Code Redundancy Cleanup & Form Helpers (Complexity Optimization)
- **Goal:** Eliminate duplicate phone validation and WhatsApp formatting across lead forms.
- **Target Files:**
  - `src/lib/whatsapp.ts` (new shared utility)
  - `src/components/BookDemoForm.tsx`
  - `src/components/FooterContactForm.tsx`
- **Actions:**
  1. Create `buildWhatsAppUrl(phone, lines)` helper in `src/lib/whatsapp.ts`.
  2. Reuse helper across both forms, reducing ~120 lines of redundant boilerplate.
- **Verification:**
  - `npx tsc --noEmit` and `npm run build` pass cleanly.
