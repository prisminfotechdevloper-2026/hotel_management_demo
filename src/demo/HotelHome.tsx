"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { HotelPreset, ROOMS_DATA } from "./mockData";
import {
  Calendar,
  Users,
  MapPin,
  Utensils,
  Compass,
  ArrowRight,
  Coffee,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

interface HotelHomeProps {
  preset: HotelPreset;
  accentColor: string;
  onOpenBooking: (options?: { roomId?: string; checkIn?: string; checkOut?: string } | string) => void;
  onViewRooms: () => void;
  switcherSlot?: React.ReactNode;
}

export default function HotelHome({
  preset,
  accentColor,
  onOpenBooking,
  onViewRooms,
  switcherSlot,
}: HotelHomeProps) {
  const [dates, setDates] = useState({
    checkIn: "2026-10-24",
    checkOut: "2026-10-27",
    guests: "2 Guests, 1 Room",
  });

  return (
    <div className="pb-20">
      {/* 1. Hotel Hero with dynamic theme data */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Dynamic Hero Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src={preset.heroImage}
            alt={preset.name}
            fill
            priority
            className="object-cover object-center scale-105 transition-[transform,opacity] duration-700"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/35" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/40" />
        </div>

        {/* Hotel Top Brand Bar */}
        <div className="absolute top-0 left-0 right-0 z-20 px-6 md:px-8 py-5 flex items-center justify-between border-b border-white/10 bg-gradient-to-b from-black/80 to-transparent">
          <div className="flex items-center gap-3">
            <span className="font-serif text-xl sm:text-2xl tracking-[0.16em] text-[#FAF7F2] font-semibold">
              {preset.name.toUpperCase()}
            </span>
            <span className="hidden sm:inline text-[10px] uppercase tracking-widest text-[#B8975A] border-l border-white/20 pl-3">
              Sample Hotel Prototype
            </span>
          </div>

          <Link
            href="/"
            className="text-xs uppercase tracking-wider text-[#FAF7F2]/80 hover:text-[#B8975A] transition-colors"
          >
            &larr; Back to Agency
          </Link>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-[1200px] mx-auto px-6 md:px-8 w-full pt-28 pb-16">
          <div className="max-w-2xl text-left">
            <span
              className="inline-block px-3 py-1 bg-black/60 backdrop-blur-md text-xs uppercase tracking-[0.2em] font-semibold border mb-4"
              style={{ color: accentColor, borderColor: `${accentColor}60` }}
            >
              {preset.badgeText}
            </span>

            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#FAF7F2] font-normal leading-tight mb-4">
              {preset.name}
            </h1>

            <p className="text-lg text-[#FAF7F2]/90 font-serif italic mb-4">
              &ldquo;{preset.tagline}&rdquo;
            </p>

            <p className="text-sm text-[#FAF7F2]/75 max-w-lg mb-8 leading-relaxed">
              {preset.description}
            </p>

            {/* Floating Date Picker & Reservation Bar */}
            <div className="bg-[#FFFFFF] p-4 border border-[#E4DCCB] shadow-2xl flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 flex-1">
                <div className="border-b sm:border-b-0 sm:border-r border-[#E4DCCB] pr-3 pb-2 sm:pb-0">
                  <span className="text-[10px] uppercase tracking-wider text-[#6B645A] block mb-0.5 font-semibold">
                    Check-in
                  </span>
                  <div className="flex items-center gap-2 text-xs font-semibold text-[#141414]">
                    <Calendar size={14} style={{ color: accentColor }} />
                    <input
                      type="date"
                      value={dates.checkIn}
                      onChange={(e) => setDates({ ...dates, checkIn: e.target.value })}
                      className="bg-transparent focus:outline-none cursor-pointer"
                    />
                  </div>
                </div>

                <div className="border-b sm:border-b-0 sm:border-r border-[#E4DCCB] pr-3 pb-2 sm:pb-0">
                  <span className="text-[10px] uppercase tracking-wider text-[#6B645A] block mb-0.5 font-semibold">
                    Check-out
                  </span>
                  <div className="flex items-center gap-2 text-xs font-semibold text-[#141414]">
                    <Calendar size={14} style={{ color: accentColor }} />
                    <input
                      type="date"
                      value={dates.checkOut}
                      onChange={(e) => setDates({ ...dates, checkOut: e.target.value })}
                      className="bg-transparent focus:outline-none cursor-pointer"
                    />
                  </div>
                </div>

                <div className="pb-2 sm:pb-0">
                  <span className="text-[10px] uppercase tracking-wider text-[#6B645A] block mb-0.5 font-semibold">
                    Guests
                  </span>
                  <div className="flex items-center gap-2 text-xs font-semibold text-[#141414]">
                    <Users size={14} style={{ color: accentColor }} />
                    <span>2 Adults, 1 Room</span>
                  </div>
                </div>
              </div>

              <button
                onClick={() => onOpenBooking({ checkIn: dates.checkIn, checkOut: dates.checkOut })}
                className="py-3 px-6 text-xs uppercase tracking-wider font-semibold text-white transition-opacity hover:opacity-90 flex items-center justify-center gap-2 cursor-pointer shrink-0"
                style={{ backgroundColor: accentColor }}
              >
                <span>Check Availability</span>
                <ArrowRight size={14} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. SWITCHER BAR PLACED DIRECTLY AFTER HOTEL HERO (Navbar Type Attached Flush) */}
      {switcherSlot}

      {/* 3. Lower Sections Container */}
      <div className="space-y-16 sm:space-y-20 pt-12 sm:pt-16">
        {/* Core Vision & Purpose Banner - Single View Clarity */}
        <section className="max-w-[1200px] mx-auto px-6 md:px-8">
          <div className="bg-[#FAF7F2] border border-[#E4DCCB] p-8 sm:p-10 text-left">
            <div className="max-w-3xl mb-8">
              <div className="inline-flex items-center gap-2 mb-2">
                <Sparkles size={14} style={{ color: accentColor }} />
                <span className="eyebrow tracking-[0.2em] font-semibold text-xs" style={{ color: accentColor }}>
                  Our Hospitality Promise
                </span>
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-[#141414] font-medium leading-tight mb-3">
                A Peaceful Stay, Genuine Care, and Transparent Prices.
              </h2>
              <p className="text-sm sm:text-base text-[#6B645A] leading-relaxed">
                We believe hospitality should feel personal, welcoming, and effortless. From spotlessly clean rooms and fresh home-style meals to honest direct pricing with zero middleman commissions &mdash; our single vision is to make your stay truly memorable.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-[#E4DCCB]">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-white border border-[#E4DCCB] flex items-center justify-center shrink-0 mt-0.5" style={{ color: accentColor }}>
                  <CheckCircle2 size={16} />
                </div>
                <div>
                  <h3 className="font-serif text-base font-semibold text-[#141414] mb-1">Clean &amp; Quiet Rooms</h3>
                  <p className="text-xs text-[#6B645A] leading-relaxed">
                    Spacious rooms with comfortable king beds, fresh linens, and modern amenities for restful sleep.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-white border border-[#E4DCCB] flex items-center justify-center shrink-0 mt-0.5" style={{ color: accentColor }}>
                  <Utensils size={16} />
                </div>
                <div>
                  <h3 className="font-serif text-base font-semibold text-[#141414] mb-1">Fresh Daily Dining</h3>
                  <p className="text-xs text-[#6B645A] leading-relaxed">
                    Authentic regional dishes, live breakfast counters, and fresh multi-cuisine meals cooked daily.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-white border border-[#E4DCCB] flex items-center justify-center shrink-0 mt-0.5" style={{ color: accentColor }}>
                  <ShieldCheck size={16} />
                </div>
                <div>
                  <h3 className="font-serif text-base font-semibold text-[#141414] mb-1">Best Rate Guarantee</h3>
                  <p className="text-xs text-[#6B645A] leading-relaxed">
                    Save 10% on direct bookings with free breakfast, zero hidden charges, and instant confirmation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Room Highlights Section */}
        <section className="max-w-[1200px] mx-auto px-6 md:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-4 border-b border-[#E4DCCB]">
            <div className="text-left">
              <span
                className="eyebrow tracking-[0.2em] block mb-1"
                style={{ color: accentColor }}
              >
                Accommodations
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#141414]">
                Choose Your Room or Suite
              </h2>
              <p className="text-xs sm:text-sm text-[#6B645A] mt-1">
                Transparent rates with all taxes clear. Zero booking fees or hidden charges.
              </p>
            </div>

            <button
              onClick={onViewRooms}
              className="mt-4 md:mt-0 text-xs uppercase tracking-wider font-semibold text-[#141414] hover:underline flex items-center gap-1.5 cursor-pointer"
            >
              <span>View All Rooms &amp; Rates</span>
              <ArrowRight size={14} />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {ROOMS_DATA.map((room) => (
              <div
                key={room.id}
                className="bg-white border border-[#E4DCCB] overflow-hidden flex flex-col justify-between group shadow-sm hover:shadow-xl transition-[box-shadow,border-color]"
              >
                <div className="relative h-60 w-full overflow-hidden bg-stone-100">
                  <Image
                    src={room.image}
                    alt={room.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 400px"
                  />
                  <div className="absolute top-3 right-3 bg-black/75 backdrop-blur-md text-white text-[11px] px-2.5 py-1 font-mono">
                    {room.size}
                  </div>
                </div>

                <div className="p-6 text-left flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-serif text-xl font-semibold text-[#141414] mb-2">
                      {room.name}
                    </h3>
                    <p className="text-xs text-[#6B645A] leading-relaxed mb-4">
                      {room.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#FAF7F2] flex items-center justify-between">
                    <div>
                      <span className="font-serif text-xl font-bold text-[#141414]">
                        ₹{room.pricePerNight.toLocaleString()}
                      </span>
                      <span className="text-[10px] text-[#6B645A] block">per night</span>
                    </div>

                    <button
                      onClick={() => onOpenBooking({ roomId: room.id, checkIn: dates.checkIn, checkOut: dates.checkOut })}
                      className="text-xs uppercase font-semibold text-white px-4 py-2 transition-opacity hover:opacity-90 cursor-pointer"
                      style={{ backgroundColor: accentColor }}
                    >
                      Reserve Room
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 4. Dining & Guest Amenities */}
        <section className="bg-white py-16 border-y border-[#E4DCCB]">
          <div className="max-w-[1200px] mx-auto px-6 md:px-8">
            <div className="text-left max-w-xl mb-10">
              <span
                className="eyebrow tracking-[0.2em] block mb-1"
                style={{ color: accentColor }}
              >
                Guest Amenities &amp; Dining
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#141414]">
                Everything Designed For Your Comfort
              </h2>
              <p className="text-xs sm:text-sm text-[#6B645A] mt-1">
                Thoughtful services to help you unwind and make the most of your stay.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6 bg-[#FAF7F2] border border-[#E4DCCB] text-left">
                <Utensils size={24} style={{ color: accentColor }} className="mb-4" />
                <h3 className="font-serif text-xl font-medium text-[#141414] mb-2">
                  Fresh Multi-Cuisine Dining
                </h3>
                <p className="text-xs text-[#6B645A] leading-relaxed">
                  Authentic regional specialties, popular Indian dishes, and Continental favorites cooked fresh daily by our chefs.
                </p>
              </div>

              <div className="p-6 bg-[#FAF7F2] border border-[#E4DCCB] text-left">
                <Coffee size={24} style={{ color: accentColor }} className="mb-4" />
                <h3 className="font-serif text-xl font-medium text-[#141414] mb-2">
                  Complimentary Breakfast &amp; Tea
                </h3>
                <p className="text-xs text-[#6B645A] leading-relaxed">
                  Start your morning with a healthy breakfast buffet, fresh fruit juices, and evening tea/coffee on the open lawn.
                </p>
              </div>

              <div className="p-6 bg-[#FAF7F2] border border-[#E4DCCB] text-left">
                <Compass size={24} style={{ color: accentColor }} className="mb-4" />
                <h3 className="font-serif text-xl font-medium text-[#141414] mb-2">
                  Relaxation Spa &amp; Concierge
                </h3>
                <p className="text-xs text-[#6B645A] leading-relaxed">
                  Soothing body massages, quiet poolside loungers, and convenient airport transfers or local sightseeing arrangements.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 5. Why Book Direct Offer Banner */}
        <section className="max-w-[1200px] mx-auto px-6 md:px-8">
          <div className="bg-[#141414] text-white p-8 md:p-12 border border-[#B8975A]/40 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-xl">
            <div className="text-left max-w-xl">
              <span
                className="text-[10px] uppercase tracking-widest font-semibold block mb-1"
                style={{ color: accentColor }}
              >
                Official Website Benefits
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-medium text-[#FAF7F2] mb-3">
                Why Book Directly With Us?
              </h3>
              <div className="space-y-1.5 text-xs text-[#FAF7F2]/85 mb-3">
                <p className="flex items-center gap-2">
                  <CheckCircle2 size={13} style={{ color: accentColor }} />
                  <span><strong>10% Lower Price:</strong> Guaranteed cheaper than any third-party booking app.</span>
                </p>
                <p className="flex items-center gap-2">
                  <CheckCircle2 size={13} style={{ color: accentColor }} />
                  <span><strong>Free Breakfast &amp; Welcome Drink:</strong> Included with every direct room reservation.</span>
                </p>
                <p className="flex items-center gap-2">
                  <CheckCircle2 size={13} style={{ color: accentColor }} />
                  <span><strong>Instant WhatsApp Confirmation:</strong> Direct contact with our front-desk team.</span>
                </p>
              </div>
              <p className="text-[11px] text-[#FAF7F2]/60 flex items-center gap-1.5">
                <MapPin size={12} style={{ color: accentColor }} />
                <span>Location: {preset.city} &bull; 25 minutes from airport &amp; main railway station</span>
              </p>
            </div>

            <button
              onClick={() => onOpenBooking({ checkIn: dates.checkIn, checkOut: dates.checkOut })}
              className="py-3.5 px-7 text-xs uppercase tracking-wider font-semibold text-white whitespace-nowrap cursor-pointer hover:opacity-95 shadow-md transition-opacity"
              style={{ backgroundColor: accentColor }}
            >
              Book Direct &amp; Save 10%
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}
