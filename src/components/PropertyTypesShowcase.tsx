"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Check, ArrowRight, Building2, Palmtree, Trees, Landmark, Home } from "lucide-react";
import { HotelType } from "@/demo/mockData";

interface PropertyCategory {
  id: string;
  demoType: HotelType;
  title: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  tagline: string;
  image: string;
  accent: string;
  locationExample: string;
  keyBenefit: string;
  features: string[];
}

const PROPERTY_CATEGORIES: PropertyCategory[] = [
  {
    id: "resorts",
    demoType: "resort",
    title: "Beach & Nature Resorts",
    icon: Palmtree,
    tagline: "High-ticket multi-night leisure vacation bookings with zero OTA deduction.",
    image: "/images/resort-beach.jpg",
    accent: "#0F2744",
    locationExample: "Goa • Kerala • Andaman • Pondicherry",
    keyBenefit: "Save ₹3,000 to ₹7,000 per booking in middleman commission.",
    features: [
      "Multi-night seasonal package & holiday bundle engine",
      "Add-on booking for private beach cabanas, spa & sunset dining",
      "Instant UPI & international credit card payment processing",
      "Automated WhatsApp arrival itinerary sent to guests",
    ],
  },
  {
    id: "boutique",
    demoType: "boutique",
    title: "Boutique & Design Stays",
    icon: Trees,
    tagline: "Intimate experiential storytelling that turns website visitors into loyal guests.",
    image: "/images/boutique-retreat.jpg",
    accent: "#1E3A8A",
    locationExample: "Himachal • Rishikesh • Coorg • Munnar",
    keyBenefit: "Build direct guest relationships and direct repeat bookings.",
    features: [
      "Editorial room photography galleries and ambiance showcases",
      "Curated artisanal dining and local experience reservations",
      "Direct 1-tap WhatsApp concierge integration",
      "Minimalist mobile checkout completed in under 40 seconds",
    ],
  },
  {
    id: "business",
    demoType: "business",
    title: "City & Business Hotels",
    icon: Building2,
    tagline: "High-velocity corporate booking flow engineered for busy travelers.",
    image: "/images/business-hotel.jpg",
    accent: "#0F2744",
    locationExample: "Mumbai • Bengaluru • Delhi NCR • Hyderabad",
    keyBenefit: "Automated GST invoices & 2-tap corporate re-booking.",
    features: [
      "Express 2-tap corporate reservation with instant GST invoicing",
      "Live room occupancy dashboard for front-desk managers",
      "Corporate rate code management & repeat guest profiles",
      "Fast check-in QR pass sent immediately upon confirmation",
    ],
  },
  {
    id: "heritage",
    demoType: "heritage",
    title: "Heritage Havelis & Palaces",
    icon: Landmark,
    tagline: "Preserve regal architectural grandeur while modernizing online revenue.",
    image: "/images/hero-palace.jpg",
    accent: "#0B111A",
    locationExample: "Jaipur • Udaipur • Jodhpur • Shekhawati",
    keyBenefit: "Capture high-value international travelers booking directly.",
    features: [
      "Regal aesthetic honoring authentic historical architecture",
      "Multi-currency conversion for high-spending foreign tourists",
      "Bespoke royal pavilion & heritage suite reservations",
      "Direct inquiries for royal destination weddings and private buyouts",
    ],
  },
  {
    id: "villas",
    demoType: "boutique",
    title: "Private Villas & Estates",
    icon: Home,
    tagline: "Whole-property buyout bookings with synchronized calendar inventory.",
    image: "/images/hero-suite.jpg",
    accent: "#1E3A8A",
    locationExample: "Lonavala • Alibaug • Kasauli • Ooty",
    keyBenefit: "Stop paying 20% Airbnb/OTA cut on full-property bookings.",
    features: [
      "Centralized real-time calendar synchronization (iCal sync)",
      "Full estate booking with security deposit management",
      "Direct guest verification & instant booking agreements",
      "Direct WhatsApp lead routing to villa host or manager",
    ],
  },
];

export default function PropertyTypesShowcase() {
  const [activeTab, setActiveTab] = useState<string>("resorts");
  const activeCategory =
    PROPERTY_CATEGORIES.find((cat) => cat.id === activeTab) || PROPERTY_CATEGORIES[0];

  return (
    <section className="pt-10 pb-12 md:pt-14 md:pb-16 bg-white border-b border-slate-200 relative">
      <div className="max-w-[1200px] mx-auto px-6 md:px-8">
        {/* Section Header */}
        <div className="text-left mb-8 pb-4 border-b border-slate-200">
          <div className="inline-flex items-center gap-2 mb-2">
            <span className="w-5 h-[1.5px] bg-[#0B111A]" />
            <span className="eyebrow tracking-[0.2em] text-[#0B111A] font-semibold">
              Tailored Hospitality Solutions
            </span>
          </div>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4">
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#0B111A] font-normal leading-tight">
              We Build For Every Type Of Hotel.
            </h2>
            <p className="text-sm sm:text-base text-slate-600 max-w-lg leading-relaxed">
              Every hospitality property operates differently. We engineer custom booking logic, branding, and guest flows tailored to your specific hotel format.
            </p>
          </div>
        </div>

        {/* Category Tab Buttons */}
        <div className="flex overflow-x-auto no-scrollbar gap-2 mb-8 pb-2">
          {PROPERTY_CATEGORIES.map((category) => {
            const isSelected = activeTab === category.id;
            const Icon = category.icon;
            return (
              <button
                key={category.id}
                onClick={() => setActiveTab(category.id)}
                className={`px-4 py-3 text-xs sm:text-sm font-medium tracking-wide flex items-center gap-2.5 whitespace-nowrap border transition-all cursor-pointer ${
                  isSelected
                    ? "bg-[#0B111A] text-white border-[#0B111A] shadow-sm"
                    : "bg-white text-slate-700 border-slate-200 hover:border-[#0B111A] hover:text-[#0B111A]"
                }`}
              >
                <span>
                  <Icon size={16} />
                </span>
                <span>{category.title}</span>
              </button>
            );
          })}
        </div>

        {/* Active Category Showcase Card */}
        <div className="bg-white border border-slate-200 shadow-md overflow-hidden grid grid-cols-1 lg:grid-cols-12 transition-all duration-300">
          {/* Left Column: Image with Overlay */}
          <div className="lg:col-span-6 relative min-h-[300px] sm:min-h-[380px] lg:min-h-[460px]">
            <Image
              key={activeCategory.image}
              src={activeCategory.image}
              alt={activeCategory.title}
              fill
              className="object-cover transition-opacity duration-500"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <span className="text-[10px] uppercase tracking-[0.2em] font-semibold px-2.5 py-1 bg-black/70 backdrop-blur-md border border-white/20 inline-block mb-2 text-white">
                {activeCategory.locationExample}
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-medium leading-tight text-white mb-1">
                {activeCategory.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-200 font-light">
                {activeCategory.tagline}
              </p>
            </div>
          </div>

          {/* Right Column: Tailored Capabilities & ROI */}
          <div className="lg:col-span-6 p-6 sm:p-8 md:p-10 flex flex-col justify-between bg-white">
            <div>
              {/* Key Benefit Highlight Banner */}
              <div className="p-3.5 mb-6 border-l-4 border-[#0B111A] bg-slate-50 text-xs sm:text-sm font-medium text-[#0B111A]">
                <span className="font-semibold block uppercase tracking-wider text-[10px] mb-0.5 text-slate-500">
                  Direct Impact For Your Property
                </span>
                {activeCategory.keyBenefit}
              </div>

              {/* Feature Checklist */}
              <h4 className="text-xs uppercase tracking-[0.16em] font-semibold text-[#0B111A] mb-4">
                What We Build For {activeCategory.title}:
              </h4>
              <ul className="space-y-3.5 mb-8">
                {activeCategory.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-700">
                    <span className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 text-white bg-[#0B111A]">
                      <Check size={12} />
                    </span>
                    <span className="leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTAs - Button retains Navy Blue */}
            <div className="pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center gap-3">
              <Link
                href={`/demo?type=${activeCategory.demoType}`}
                className="btn-navy w-full sm:w-auto flex items-center justify-center gap-2"
              >
                <span>View {activeCategory.title} Demo</span>
                <ArrowRight size={14} />
              </Link>

              <Link
                href="/book-demo"
                className="btn-outline-ink w-full sm:w-auto text-center"
              >
                <span>Discuss Your Property</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
