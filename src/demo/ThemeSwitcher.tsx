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
    <aside aria-label="Demo controls" className="sticky top-0 z-40 bg-[#141414]/95 backdrop-blur-md border-y border-[#B8975A]/40 text-[#FAF7F2] shadow-2xl">
      {/* Top Controls Bar */}
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 py-2.5 flex flex-wrap items-center justify-between gap-3">
        {/* Left: Exit Demo Link & Title */}
        <div className="flex items-center gap-3">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-xs text-[#FAF7F2]/70 hover:text-[#B8975A] transition-colors py-1"
          >
            <ArrowLeft size={13} />
            <span className="hidden sm:inline">Back to Prism Agency</span>
          </Link>

          <span className="h-4 w-[1px] bg-[#2A2A2A] hidden sm:block" />

          <div className="flex items-center gap-1.5">
            <Sliders size={13} className="text-[#B8975A]" />
            <span className="text-[11px] uppercase tracking-wider text-[#FAF7F2]/90 font-medium">
              Property Switcher:
            </span>
          </div>
        </div>

        {/* Center: Hotel Type Presets (Heritage, Boutique, Resort, Business) */}
        <div className="flex items-center gap-1.5 overflow-x-auto py-1">
          {types.map((t) => {
            const isSelected = currentType === t;
            const accent = HOTEL_PRESETS[t].defaultAccent;
            return (
              <button
                key={t}
                onClick={() => onChangeType(t)}
                className={`text-[11px] px-3 py-1 uppercase tracking-wider transition-all cursor-pointer font-medium whitespace-nowrap ${
                  isSelected
                    ? "font-bold shadow-sm"
                    : "bg-[#1C1C1C] text-[#FAF7F2]/70 hover:text-[#FAF7F2] border border-[#2A2A2A]"
                }`}
                style={{
                  backgroundColor: isSelected ? accent : undefined,
                  color: isSelected ? (t === "heritage" ? "#141414" : "#FFFFFF") : undefined,
                }}
              >
                {HOTEL_PRESETS[t].label}
              </button>
            );
          })}
        </div>

        {/* View Switcher Tabs (Hotel Home, Rooms & Rates, Admin Snapshot) */}
        <div className="flex items-center gap-1 bg-[#1C1C1C] p-0.5 border border-[#2A2A2A] text-[11px]">
          <button
            onClick={() => onChangeTab("home")}
            className={`px-3 py-1 uppercase tracking-wider transition-colors cursor-pointer ${
              activeTab === "home"
                ? "bg-[#FAF7F2] text-[#141414] font-semibold"
                : "text-[#FAF7F2]/70 hover:text-[#FAF7F2]"
            }`}
          >
            Hotel Home
          </button>
          <button
            onClick={() => onChangeTab("rooms")}
            className={`px-3 py-1 uppercase tracking-wider transition-colors cursor-pointer ${
              activeTab === "rooms"
                ? "bg-[#FAF7F2] text-[#141414] font-semibold"
                : "text-[#FAF7F2]/70 hover:text-[#FAF7F2]"
            }`}
          >
            Rooms & Rates
          </button>
          <button
            onClick={() => onChangeTab("admin")}
            className={`px-3 py-1 uppercase tracking-wider transition-colors cursor-pointer flex items-center gap-1 ${
              activeTab === "admin"
                ? "bg-[#FAF7F2] text-[#141414] font-semibold"
                : "text-[#FAF7F2]/70 hover:text-[#FAF7F2]"
            }`}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
            Admin Snapshot
          </button>
        </div>
      </div>

      {/* Persistent Bottom Bar */}
      <div className="bg-[#B8975A] text-[#141414] px-4 py-1.5 flex items-center justify-between text-xs font-medium">
        <div className="max-w-[1280px] mx-auto w-full flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#141414]" />
            <span className="font-semibold">Like what you see?</span>
            <span className="hidden sm:inline text-[#141414]/80">
              We can deploy this exact direct booking platform customized for your hotel brand.
            </span>
          </div>

          <button
            onClick={onOpenBookDemo}
            className="bg-[#141414] text-[#FAF7F2] px-3.5 py-1 text-[11px] uppercase tracking-wider font-semibold hover:bg-black transition-colors flex items-center gap-1 shrink-0 ml-4 cursor-pointer"
          >
            <span>Book a Demo</span>
            <ArrowRight size={12} />
          </button>
        </div>
      </div>
    </aside>
  );
}
