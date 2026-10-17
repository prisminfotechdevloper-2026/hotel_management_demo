"use client";

import React from "react";
import Link from "next/link";
import { Play, Layers, Monitor, Clock, Award, ArrowRight } from "lucide-react";

export type LandingCategory =
  | "video"
  | "services"
  | "demo"
  | "process"
  | "results";

interface CategoryNavbarProps {
  activeCategory: LandingCategory;
  onSelectCategory: (cat: LandingCategory) => void;
  onOpenBookDemo: () => void;
}

interface CategoryItem {
  id: LandingCategory;
  label: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
}

const CATEGORIES: CategoryItem[] = [
  { id: "video", label: "Watch Video", icon: Play },
  { id: "services", label: "What We Build", icon: Layers },
  { id: "demo", label: "Try Live Demo", icon: Monitor },
  { id: "process", label: "How It Works", icon: Clock },
  { id: "results", label: "Reviews & Results", icon: Award },
];

export default function CategoryNavbar({
  activeCategory,
  onSelectCategory,
  onOpenBookDemo,
}: CategoryNavbarProps) {
  const handleTabClick = (cat: LandingCategory) => {
    onSelectCategory(cat);
    const target = document.getElementById("category-content-anchor");
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <aside
      id="category-navbar"
      aria-label="Navigation and Categories"
      className="sticky top-0 z-50 bg-[#0B111A]/95 backdrop-blur-md border-y border-white/10 text-white shadow-xl"
    >
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 py-2 md:py-2.5 flex flex-col md:flex-row md:items-center md:justify-between gap-2.5 md:gap-4">
        {/* Line 1 on Mobile: Brand Wordmark (Left) + Book Demo Button (Right) */}
        <div className="flex items-center justify-between w-full md:w-auto shrink-0 pb-1.5 md:pb-0 border-b border-white/10 md:border-b-0">
          <Link href="/" className="flex flex-col text-left group">
            <span className="font-serif text-lg tracking-[0.2em] text-white font-semibold uppercase leading-none group-hover:text-slate-200 transition-colors">
              PRISM
            </span>
            <span className="text-[8px] uppercase tracking-[0.24em] text-slate-400 font-medium leading-tight">
              Hotel Management
            </span>
          </Link>

          {/* Mobile-only CTA button in Line 1 (Keep Navy Blue for Action Button) */}
          <div className="md:hidden">
            <button
              onClick={onOpenBookDemo}
              className="btn-navy px-3.5 py-1 text-[11px] flex items-center gap-1 cursor-pointer"
            >
              <span>Book Demo</span>
              <ArrowRight size={12} />
            </button>
          </div>
        </div>

        {/* Line 2 on Mobile (Full-width clean scrollable category tabs) | Center on Desktop */}
        <nav className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto py-0.5 no-scrollbar w-full md:w-auto md:flex-1 md:justify-center">
          {CATEGORIES.map((cat) => {
            const isSelected = activeCategory === cat.id;
            const IconComponent = cat.icon;

            return (
              <button
                key={cat.id}
                onClick={() => handleTabClick(cat.id)}
                className={`text-xs px-3 sm:px-3.5 py-1.5 uppercase tracking-wider transition-colors cursor-pointer font-medium whitespace-nowrap flex items-center gap-1.5 shrink-0 rounded-xs ${
                  isSelected
                    ? "bg-white text-[#0B111A] font-semibold border border-white shadow-sm"
                    : "bg-white/10 text-slate-300 hover:text-white hover:bg-white/20 border border-white/10"
                }`}
              >
                <IconComponent
                  size={12}
                  className={isSelected ? "text-[#0B111A]" : "text-slate-400"}
                />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </nav>

        {/* Desktop-only Action Button on Right (Keep Navy Blue for Action Button) */}
        <div className="hidden md:flex items-center gap-2 shrink-0">
          <button
            onClick={onOpenBookDemo}
            className="btn-navy px-4 py-1.5 text-xs flex items-center gap-1.5 cursor-pointer shadow-sm hover:shadow-md"
          >
            <span>Book a Demo</span>
            <ArrowRight size={13} />
          </button>
        </div>
      </div>
    </aside>
  );
}
