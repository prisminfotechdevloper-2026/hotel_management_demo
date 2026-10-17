"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ExternalLink,
  Sliders,
  Calendar,
  LayoutDashboard,
  CheckCircle2,
} from "lucide-react";
import { HotelType, HOTEL_PRESETS } from "@/demo/mockData";

const HOTEL_STYLES: { id: HotelType; label: string; city: string }[] = [
  { id: "resort", label: "Beach Resort", city: "Goa" },
  { id: "boutique", label: "Boutique Retreat", city: "Himalayas" },
  { id: "business", label: "Business Hotel", city: "Metro City" },
  { id: "heritage", label: "Heritage Palace", city: "Rajasthan" },
];

export default function DemoPreview() {
  const [selectedType, setSelectedType] = useState<HotelType>("resort");
  const activePreset = HOTEL_PRESETS[selectedType];

  return (
    <section id="demo-preview" className="pt-10 pb-12 md:pt-14 md:pb-16 bg-white border-b border-slate-200 relative overflow-hidden">
      {/* Decorative subtle ambient backdrop */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-black/[0.02] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1200px] mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Copy & Value Proposition (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-5 h-[1.5px] bg-[#0B111A]" />
              <span className="eyebrow tracking-[0.2em] text-[#0B111A] font-semibold">
                Multi-Format Live Preview
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#0B111A] font-medium leading-[1.12] mb-4">
              Built For Every Hotel & Resort Format.
            </h2>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6 font-normal">
              Whether you run a <strong>luxury beach resort</strong>, an <strong>intimate boutique retreat</strong>, a <strong>high-occupancy business hotel</strong>, or a <strong>heritage palace</strong>, our direct booking engine is tailor-made for your exact property.
            </p>

            {/* Interactive Hotel Style Selector Pills */}
            <div className="w-full mb-6 p-3 bg-slate-50 border border-slate-200 rounded-none">
              <span className="text-[11px] uppercase tracking-wider text-slate-500 font-semibold block mb-2">
                Select hotel format to preview:
              </span>
              <div className="grid grid-cols-2 gap-2">
                {HOTEL_STYLES.map((style) => {
                  const isSelected = selectedType === style.id;
                  return (
                    <button
                      key={style.id}
                      onClick={() => setSelectedType(style.id)}
                      className={`px-3 py-2 text-left text-xs font-medium transition-all flex items-center justify-between cursor-pointer border ${
                        isSelected
                          ? "bg-[#0B111A] text-white border-[#0B111A] shadow-sm"
                          : "bg-white text-slate-700 border-slate-200 hover:border-[#0B111A] hover:text-[#0B111A]"
                      }`}
                    >
                      <span className="truncate font-medium">{style.label}</span>
                      {isSelected && (
                        <span className="w-1.5 h-1.5 rounded-full bg-white shrink-0" />
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="space-y-3 mb-7 w-full">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 size={16} className="text-[#0B111A] shrink-0 mt-0.5" />
                <p className="text-xs sm:text-sm text-slate-700">
                  <strong className="text-[#0B111A] font-semibold">100% Commission-Free:</strong> Guests book directly into your bank account with zero OTA fees.
                </p>
              </div>

              <div className="flex items-start gap-2.5">
                <CheckCircle2 size={16} className="text-[#0B111A] shrink-0 mt-0.5" />
                <p className="text-xs sm:text-sm text-slate-700">
                  <strong className="text-[#0B111A] font-semibold">Custom Tailored Identity:</strong> Bespoke photography, brand palette, and room tiers customized for your property.
                </p>
              </div>

              <div className="flex items-start gap-2.5">
                <CheckCircle2 size={16} className="text-[#0B111A] shrink-0 mt-0.5" />
                <p className="text-xs sm:text-sm text-slate-700">
                  <strong className="text-[#0B111A] font-semibold">Seamless 3-Step Booking:</strong> Guests choose dates, select rooms, and confirm via UPI/Cards in 45 seconds.
                </p>
              </div>
            </div>

            {/* CTA Button */}
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
              <Link
                href={`/demo?type=${selectedType}`}
                className="btn-navy w-full sm:w-auto flex items-center justify-center gap-2 shadow-sm hover:shadow-md group"
              >
                <span>Launch Interactive Demo</span>
                <ExternalLink
                  size={15}
                  className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>

              <span className="text-xs text-slate-500 uppercase tracking-wider font-medium">
                Live interactive prototype
              </span>
            </div>
          </div>

          {/* Right Column: Realistic Laptop & Phone Mockup Frame (7 Cols) */}
          <div className="lg:col-span-7 relative">
            {/* Laptop Mockup Shell */}
            <div className="relative mx-auto bg-[#141414] rounded-t-xl p-2.5 pb-0 shadow-2xl border border-[#2A2A2A]">
              {/* Browser Header / Controls */}
              <div className="flex items-center justify-between px-3 py-2 bg-[#1C1C1C] rounded-t-lg border-b border-[#2A2A2A] text-xs text-[#FAF7F2]/60">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F]" />
                </div>
                <div className="bg-[#141414] px-4 py-1 rounded text-[11px] font-mono text-[#FAF7F2]/70 border border-[#2A2A2A] flex items-center gap-2">
                  <span
                    className="w-2 h-2 rounded-full transition-colors duration-300"
                    style={{ backgroundColor: activePreset.defaultAccent }}
                  />
                  <span>prisminfotechsolution.com/demo/{selectedType}</span>
                </div>
                <div
                  className="flex items-center gap-1 text-[10px] font-semibold uppercase tracking-wider text-neutral-400"
                >
                  Live View
                </div>
              </div>

              {/* Mockup Screen Content Preview */}
              <div className="relative bg-white aspect-[16/10] overflow-hidden flex flex-col justify-between">
                {/* Simulated Floating Requirement Switcher bar at top */}
                <div className="bg-[#111111] text-white px-4 py-2 flex items-center justify-between text-xs border-b border-[#222222]">
                  <div className="flex items-center gap-2">
                    <Sliders size={13} className="text-white/80" />
                    <span className="text-[11px] uppercase tracking-wider font-medium text-neutral-400">Format:</span>
                    <span className="font-semibold px-2 py-0.5 text-[10px] bg-[#0F2744] text-white border border-[#2B4C7E]">
                      {activePreset.label}
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-[10px] uppercase tracking-wider font-semibold text-neutral-300">
                      {activePreset.city}
                    </span>
                  </div>
                </div>

                {/* Inner Mock Hotel Hero with Smooth Image Transition */}
                <div className="relative flex-1 w-full overflow-hidden">
                  <Image
                    key={activePreset.heroImage}
                    src={activePreset.heroImage}
                    alt={activePreset.name}
                    fill
                    className="object-cover transition-opacity duration-500"
                    sizes="(max-width: 768px) 100vw, 600px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent" />
                  <div className="absolute bottom-3 left-4 right-4 text-white">
                    <span className="text-[9px] uppercase tracking-[0.2em] font-semibold block mb-0.5 text-neutral-300">
                      {activePreset.badgeText}
                    </span>
                    <p className="font-serif text-lg sm:text-xl font-medium leading-tight truncate">
                      {activePreset.name}
                    </p>
                    <p className="text-[11px] text-neutral-300 line-clamp-1 mt-0.5 font-light">
                      {activePreset.tagline}
                    </p>
                  </div>
                </div>

                {/* Simulated Quick Reservation Bar */}
                <div className="bg-white border-y border-neutral-200 px-4 py-2.5 flex items-center justify-between text-xs shadow-xs">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-1.5 text-neutral-900">
                      <Calendar size={13} className="text-[#0F2744]" />
                      <span className="font-medium">Oct 24 &ndash; Oct 27</span>
                    </div>
                    <span className="text-neutral-500 hidden sm:inline">• 2 Guests</span>
                  </div>
                  <Link
                    href={`/demo?type=${selectedType}`}
                    className="btn-navy text-white text-[10px] font-semibold uppercase tracking-wider px-3 py-1 transition-opacity duration-300 hover:opacity-90"
                  >
                    Check Rates
                  </Link>
                </div>

                {/* Simulated Room Catalog & Admin snapshot teaser */}
                <div className="p-3 grid grid-cols-2 gap-2.5 bg-slate-50">
                  <div className="bg-white p-2.5 border border-slate-200 flex flex-col justify-between">
                    <div>
                      <span className="text-[10px] text-slate-500 uppercase tracking-wider block truncate">
                        {activePreset.sampleRoomName}
                      </span>
                      <span className="text-xs font-serif font-semibold text-[#0B111A]">
                        ₹{activePreset.samplePricePerNight.toLocaleString("en-IN")} / night
                      </span>
                    </div>
                    <span
                      className="text-[9px] font-medium mt-1.5 flex items-center gap-1 transition-colors duration-300"
                      style={{ color: activePreset.defaultAccent }}
                    >
                      Available • Instant Confirmation
                    </span>
                  </div>

                  <div className="bg-[#0B111A] text-white p-2.5 border border-slate-800 flex flex-col justify-between">
                    <div className="flex items-center justify-between">
                      <span
                        className="text-[9px] uppercase tracking-wider transition-colors duration-300"
                        style={{ color: activePreset.defaultAccent }}
                      >
                        Live Occupancy
                      </span>
                      <LayoutDashboard size={12} style={{ color: activePreset.defaultAccent }} />
                    </div>
                    <div className="mt-0.5">
                      <span className="text-base font-serif font-bold text-white">88%</span>
                      <span className="text-[9px] text-slate-400 block">Direct booking share: 74%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Laptop Base */}
            <div className="w-[104%] -ml-[2%] h-3.5 bg-slate-800 rounded-b-xl shadow-xl flex items-center justify-center">
              <div className="w-16 h-1 bg-slate-900 rounded-full" />
            </div>

            {/* Floating Mobile Mockup Frame Overlay */}
            <div className="hidden sm:block absolute -bottom-5 -left-5 w-44 bg-[#0B111A] rounded-2xl p-2 shadow-2xl border-2 border-slate-200 z-20">
              <div className="w-10 h-1 bg-slate-700 rounded-full mx-auto mb-1.5" />
              <div className="bg-white rounded-lg p-2 text-center text-xs">
                <span
                  className="text-[9px] uppercase tracking-wider font-semibold block transition-colors duration-300"
                  style={{ color: activePreset.defaultAccent }}
                >
                  Direct Booking Engine
                </span>
                <span className="font-serif font-bold text-[11px] text-[#141414] block mt-0.5">
                  100% Mobile Ready
                </span>
                <div className="w-full h-1 bg-black/10 mt-1.5 rounded-full overflow-hidden">
                  <div
                    className="w-4/5 h-full transition-colors duration-300"
                    style={{ backgroundColor: activePreset.defaultAccent }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
