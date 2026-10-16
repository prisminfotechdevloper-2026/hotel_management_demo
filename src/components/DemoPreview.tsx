"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ExternalLink,
  Sliders,
  Calendar,
  LayoutDashboard,
  CheckCircle2,
} from "lucide-react";

export default function DemoPreview() {
  return (
    <section id="demo-preview" className="pt-6 pb-7 md:pt-8 md:pb-8 bg-[#FFFFFF] border-b border-[#E4DCCB] relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#B8975A]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1200px] mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Column: Copy & Value Proposition (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#B8975A]" />
              <span className="eyebrow tracking-[0.2em] text-[#9A7B43]">
                Interactive Demo
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#141414] font-medium leading-[1.12] mb-5">
              Try The Guest Experience Before You Commit.
            </h2>

            <p className="text-base text-[#2A2A2A]/85 leading-relaxed mb-6 font-normal">
              Test-drive our working sample hotel prototype. See how effortless it is for guests to search dates, browse suites, and book directly.
            </p>

            <div className="space-y-3.5 mb-8 w-full">
              <div className="flex items-start gap-3">
                <CheckCircle2 size={18} className="text-[#B8975A] shrink-0 mt-0.5" />
                <p className="text-sm text-[#2A2A2A]">
                  <strong className="text-[#141414] font-semibold">4 Hotel Styles:</strong> Switch easily between Heritage Palace, Boutique Retreat, Beach Resort, or Business Hotel.
                </p>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 size={18} className="text-[#B8975A] shrink-0 mt-0.5" />
                <p className="text-sm text-[#2A2A2A]">
                  <strong className="text-[#141414] font-semibold">Customized For Your Hotel:</strong> We customize your rooms, photos, amenities, and room rates for your brand.
                </p>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 size={18} className="text-[#B8975A] shrink-0 mt-0.5" />
                <p className="text-sm text-[#2A2A2A]">
                  <strong className="text-[#141414] font-semibold">Easy 4-Step Booking:</strong> Guests choose dates, select a room, and get confirmed directly without middleman fees.
                </p>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 size={18} className="text-[#B8975A] shrink-0 mt-0.5" />
                <p className="text-sm text-[#2A2A2A]">
                  <strong className="text-[#141414] font-semibold">Front-Desk Dashboard:</strong> A simple screen to check room occupancy, today&apos;s arrivals, and daily booking revenue.
                </p>
              </div>
            </div>

            {/* CTA Button */}
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
              <Link
                href="/demo"
                className="btn-gold w-full sm:w-auto flex items-center justify-center gap-2 shadow-md hover:shadow-xl group"
              >
                <span>Open Live Demo</span>
                <ExternalLink
                  size={15}
                  className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>

              <span className="text-xs text-[#6B645A] uppercase tracking-wider font-medium">
                No sign-up required &bull; 100% interactive
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
                  <span className="w-2 h-2 rounded-full bg-[#B8975A]" />
                  <span>prismhotels.agency/demo/aurelia</span>
                </div>
                <div className="flex items-center gap-1 text-[10px] text-[#B8975A] font-semibold uppercase tracking-wider">
                  Live View
                </div>
              </div>

              {/* Mockup Screen Content Preview */}
              <div className="relative bg-[#FAF7F2] aspect-[16/10] overflow-hidden">
                {/* Simulated Floating Requirement Switcher bar at top */}
                <div className="bg-[#141414] text-[#FAF7F2] px-4 py-2 flex items-center justify-between text-xs border-b border-[#B8975A]/40">
                  <div className="flex items-center gap-2">
                    <Sliders size={13} className="text-[#B8975A]" />
                    <span className="text-[11px] uppercase tracking-wider font-medium">Property:</span>
                    <span className="bg-[#B8975A] text-[#141414] font-semibold px-2 py-0.5 text-[10px]">
                      Heritage Palace
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-[10px] text-[#B8975A] uppercase tracking-wider font-semibold">
                      4 Presets Active
                    </span>
                  </div>
                </div>

                {/* Inner Mock Hotel Hero */}
                <div className="relative h-44 sm:h-56 w-full">
                  <Image
                    src="/images/hero-palace.jpg"
                    alt="Aurelia Heritage Hotel Demo"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 600px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <span className="text-[9px] uppercase tracking-[0.2em] text-[#B8975A] font-semibold block">
                      Aurelia Heritage Hotel
                    </span>
                    <p className="font-serif text-lg sm:text-xl font-medium leading-tight">
                      Experience Royal Rajasthan in Grand Luxury
                    </p>
                  </div>
                </div>

                {/* Simulated Quick Reservation Bar */}
                <div className="bg-white border-b border-[#E4DCCB] px-4 py-3 flex items-center justify-between text-xs shadow-xs">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1.5 text-[#2A2A2A]">
                      <Calendar size={13} className="text-[#B8975A]" />
                      <span className="font-medium">Oct 24 &ndash; Oct 27</span>
                    </div>
                    <span className="text-[#6B645A] hidden sm:inline">&bull; 2 Guests, 1 Suite</span>
                  </div>
                  <Link
                    href="/demo"
                    className="bg-[#B8975A] text-[#141414] text-[11px] font-semibold px-3 py-1 hover:bg-[#9A7B43] transition-colors"
                  >
                    Check Rates
                  </Link>
                </div>

                {/* Simulated Room Catalog & Admin snapshot teaser */}
                <div className="p-4 grid grid-cols-2 gap-3 bg-[#FAF7F2]">
                  <div className="bg-white p-2.5 border border-[#E4DCCB] flex flex-col justify-between">
                    <div>
                      <span className="text-[10px] text-[#6B645A] uppercase tracking-wider block">Deluxe Palace Room</span>
                      <span className="text-xs font-serif font-semibold text-[#141414]">₹14,500 / night</span>
                    </div>
                    <span className="text-[9px] text-[#9A7B43] font-medium mt-2 flex items-center gap-1">
                      Available &bull; Instant Confirmation
                    </span>
                  </div>

                  <div className="bg-[#141414] text-white p-2.5 border border-[#B8975A]/30 flex flex-col justify-between">
                    <div className="flex items-center justify-between">
                      <span className="text-[9px] text-[#B8975A] uppercase tracking-wider">Live Occupancy</span>
                      <LayoutDashboard size={12} className="text-[#B8975A]" />
                    </div>
                    <div className="mt-1">
                      <span className="text-base font-serif font-bold text-white">88%</span>
                      <span className="text-[9px] text-[#FAF7F2]/60 block">14 arrivals expected today</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Laptop Base */}
            <div className="w-[104%] -ml-[2%] h-3.5 bg-[#2A2A2A] rounded-b-xl shadow-xl flex items-center justify-center">
              <div className="w-16 h-1 bg-[#141414] rounded-full" />
            </div>

            {/* Floating Mobile Mockup Frame Overlay */}
            <div className="hidden sm:block absolute -bottom-6 -left-6 w-44 bg-[#141414] rounded-2xl p-2 shadow-2xl border-2 border-[#FAF7F2] z-20">
              <div className="w-10 h-1 bg-[#2A2A2A] rounded-full mx-auto mb-1.5" />
              <div className="bg-white rounded-lg p-2 text-center text-xs">
                <span className="text-[9px] uppercase tracking-wider text-[#9A7B43] font-semibold block">Mobile Direct Flow</span>
                <span className="font-serif font-bold text-[11px] text-[#141414] block mt-0.5">3-Tap Booking</span>
                <div className="w-full h-1 bg-[#B8975A]/20 mt-1.5 rounded-full overflow-hidden">
                  <div className="w-3/4 h-full bg-[#B8975A]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
