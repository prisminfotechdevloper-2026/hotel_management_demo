"use client";

import React from "react";
import Link from "next/link";
import { HotelType, HOTEL_PRESETS } from "./mockData";
import { Sliders, ArrowRight, ArrowLeft } from "lucide-react";

interface ThemeSwitcherProps {
  currentType: HotelType;
  onChangeType: (type: HotelType) => void;
  activeTab: "home" | "rooms" | "admin";
  onChangeTab: (tab: "home" | "rooms" | "admin") => void;
  onOpenBookDemo: () => void;
}

export default function ThemeSwitcher({
  currentType,
  onChangeType,
  activeTab,
  onChangeTab,
  onOpenBookDemo,
}: ThemeSwitcherProps) {
  const types: HotelType[] = ["heritage", "boutique", "resort", "business"];

  return (
    <aside aria-label="Demo controls" className="sticky top-0 z-40 bg-[#0A0A0A] backdrop-blur-md border-y border-[#222222] text-[#F3F4F6] shadow-2xl">
      {/* Top Controls Bar */}
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 py-2.5 flex flex-wrap items-center justify-between gap-3">
        {/* Left: Exit Demo Link & Title */}
        <div className="flex items-center gap-3">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-xs text-neutral-400 hover:text-white transition-colors py-1"
          >
            <ArrowLeft size={13} />
            <span className="hidden sm:inline">Back to Prism Agency</span>
          </Link>

          <span className="h-4 w-[1px] bg-[#2A2A2A] hidden sm:block" />

          <div className="flex items-center gap-1.5">
            <Sliders size={13} className="text-white/80" />
            <span className="text-[11px] uppercase tracking-wider text-neutral-200 font-medium">
              Property Switcher:
            </span>
          </div>
        </div>

        {/* Center: Hotel Type Presets (Heritage, Boutique, Resort, Business) */}
        <div className="flex items-center gap-1.5 overflow-x-auto py-1">
          {types.map((t) => {
            const isSelected = currentType === t;
            return (
              <button
                key={t}
                onClick={() => onChangeType(t)}
                className={`text-[11px] px-3.5 py-1.5 uppercase tracking-wider transition-all cursor-pointer font-medium whitespace-nowrap rounded-none ${
                  isSelected
                    ? "bg-[#0F2744] text-white border border-[#2B4C7E] font-bold shadow-sm"
                    : "bg-[#181818] text-neutral-400 hover:text-white hover:bg-[#222222] border border-[#2A2A2A]"
                }`}
              >
                {HOTEL_PRESETS[t].label}
              </button>
            );
          })}
        </div>

        {/* View Switcher Tabs (Hotel Home, Rooms & Rates, Admin Snapshot) */}
        <div className="flex items-center gap-1 bg-[#181818] p-0.5 border border-[#2A2A2A] text-[11px]">
          <button
            onClick={() => onChangeTab("home")}
            className={`px-3 py-1 uppercase tracking-wider transition-colors cursor-pointer ${
              activeTab === "home"
                ? "bg-white text-black font-semibold"
                : "text-neutral-400 hover:text-white"
            }`}
          >
            Hotel Home
          </button>
          <button
            onClick={() => onChangeTab("rooms")}
            className={`px-3 py-1 uppercase tracking-wider transition-colors cursor-pointer ${
              activeTab === "rooms"
                ? "bg-white text-black font-semibold"
                : "text-neutral-400 hover:text-white"
            }`}
          >
            Rooms &amp; Rates
          </button>
          <button
            onClick={() => onChangeTab("admin")}
            className={`px-3 py-1 uppercase tracking-wider transition-colors cursor-pointer flex items-center gap-1 ${
              activeTab === "admin"
                ? "bg-white text-black font-semibold"
                : "text-neutral-400 hover:text-white"
            }`}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Admin Snapshot
          </button>
        </div>
      </div>

      {/* Persistent Bottom Bar - Pure Neutral Black with Navy Blue Action Button */}
      <div className="bg-[#111111] text-white border-t border-[#222222] px-4 py-2 text-xs font-medium">
        <div className="max-w-[1280px] mx-auto w-full flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span className="font-semibold text-white">Like what you see?</span>
            <span className="hidden sm:inline text-neutral-400">
              We can deploy this exact direct booking platform customized for your hotel brand.
            </span>
          </div>

          <button
            onClick={onOpenBookDemo}
            className="bg-[#0F2744] hover:bg-[#163857] text-white border border-[#2B4C7E] px-4 py-1.5 text-[11px] uppercase tracking-wider font-semibold transition-colors flex items-center gap-1.5 shrink-0 ml-4 cursor-pointer shadow-sm"
          >
            <span>Book a Demo</span>
            <ArrowRight size={12} />
          </button>
        </div>
      </div>
    </aside>
  );
}
