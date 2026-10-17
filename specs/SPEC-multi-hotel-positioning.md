# SPEC: Multi-Hotel Hospitality Positioning & Modern Conversion Overhaul

## 1. Problem Statement & User Intent
The website currently relies too heavily on heritage palace imagery, heritage haveli references, and heritage-only copy ("Heritage, Boutique & Luxury Hotels", "Aurelia Heritage Palace", heritage haveli testimonials).
The user requested:
> *"dekho apni site me heritage kafi use kiya h, apna aisa koi motive nhi h ki bs heritage jesi hotel hi build krenge, apn har tarh ki hotel related site build krte h to customer visit kre to use yeh nhi lgna chahiye ki bs heritage ke liye service h, customer attractive kro aur sahi se."*

Visiting hoteliers (boutique owners, beach resort operators, city business hotel GMs, private villa managers) must immediately see that Prism builds high-converting direct booking platforms and custom websites for **their exact category of property**.

---

## 2. Strategic Objectives
1. **Full-Spectrum Hospitality Positioning:**
   Explicitly showcase the primary property categories served across India:
   - **Boutique & Design Stays**
   - **Beach & Hill Resorts**
   - **City & Business Hotels**
   - **Heritage Palaces & Havelis**
   - **Private Villas & Homestay Chains**
2. **Interactive Property Switcher on the Homepage (`DemoPreview.tsx`):**
   Allow visitors to switch between all 4 live property styles (Heritage, Boutique, Beach Resort, Business Hotel) directly inside the interactive homepage laptop frame, updating hotel title, photo, badge, accent color, and rates live without leaving the page.
3. **Dedicated Hospitality Categories Showcase Component (`PropertyTypesShowcase.tsx`):**
   A dedicated, interactive section highlighting tailored capabilities for each hotel format (e.g., instant GST corporate checkout for business hotels, multi-night packages for resorts, aesthetic room galleries for boutique stays).
4. **Balanced Social Proof & Testimonials (`siteConfig.ts`):**
   Diversify testimonials across a Goa Beach Resort, a Bengaluru Business Hotel, a Himachal Boutique Retreat, and a Rajasthan Heritage Palace.
5. **Universal Inquiry Forms (`BookDemoForm.tsx` & `FooterContactForm.tsx`):**
   Add a property type selector dropdown and neutral placeholders (`gm@yourhotel.com`, `e.g. Grand Horizon Hotel & Suites`).
6. **Hero & Metadata Refresh:**
   Update Hero headline, trust pill, and metadata to encompass the full range of hospitality formats.

---

## 3. High-Quality Dedicated Visual Assets
- `/images/resort-beach.jpg`: Ultra-luxury tropical beach resort with ocean sunset & cabanas.
- `/images/business-hotel.jpg`: Sleek modern 5-star executive business hotel with glass architecture & city skyline.
- `/images/boutique-retreat.jpg`: Intimate mountain pine forest boutique retreat with architectural terrace & fire pit.
- `/images/hero-palace.jpg`: Royal heritage palace hotel.

---

## 4. Implementation Modules

### Module 1: Update Mock Data & Prototype Presets (`src/demo/mockData.ts`)
- Assign real dedicated images for each preset:
  - `heritage`: `/images/hero-palace.jpg`
  - `boutique`: `/images/boutique-retreat.jpg`
  - `resort`: `/images/resort-beach.jpg`
  - `business`: `/images/business-hotel.jpg`

### Module 2: Multi-Property Homepage Interactive Switcher (`src/components/DemoPreview.tsx`)
- Add interactive property type buttons inside `DemoPreview.tsx` (`Heritage Palace`, `Boutique Retreat`, `Beach Resort`, `Business Hotel`).
- Selecting a category updates the preview image, hotel name, nightly rate, and accent colors instantly.

### Module 3: Hero Section & Tagline Enhancement (`src/components/Hero.tsx` & `src/config/siteConfig.ts`)
- Add an interactive / animated property category badge strip in the Hero (`Boutique Hotels • Luxury Resorts • Business Stays • Heritage Haveli • Villa Chains`).
- Update trust line to: *"Trusted by independent hotels, luxury resorts, boutique stays, business hotels & heritage properties across India"*.
- Update metadata in `src/app/layout.tsx`.

### Module 4: Dedicated Hospitality Formats Showcase (`src/components/PropertyTypesShowcase.tsx`)
- Build an interactive, luxury tabbed showcase displaying tailored feature highlights for:
  - Boutique & Intimate Stays
  - Coastal Beach & Hill Resorts
  - City Business & Executive Hotels
  - Heritage Havelis & Palaces
  - Luxury Villas & Serviced Apartments
- Embed seamlessly in the home page layout.

### Module 5: Testimonials & Social Proof Balancing (`src/config/siteConfig.ts`)
- Balance client testimonials across distinct hotel formats:
  - Beach Resort (Goa)
  - City Business Hotel (Bengaluru)
  - Boutique Mountain Retreat (Himachal)
  - Heritage Haveli (Rajasthan)

### Module 6: Forms Property Type Selector (`src/components/BookDemoForm.tsx` & `src/components/FooterContactForm.tsx`)
- Add Property Type dropdown with options for all hotel formats.
- Update email and hotel name placeholders to generic, professional examples.
