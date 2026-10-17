"use client";

import React from "react";
import { siteConfig } from "@/config/siteConfig";
import { Star } from "lucide-react";

export default function Testimonials() {
  return (
    <section className="pt-10 pb-12 md:pt-14 md:pb-16 bg-[#F8FAFC] border-b border-slate-200 relative">
      <div className="max-w-[1200px] mx-auto px-6 md:px-8">
        {/* Left-Right Aligned Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-8 md:mb-10 pb-6 border-b border-slate-200">
          <div className="lg:col-span-8 text-left">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-5 h-[1.5px] bg-[#0B111A]" />
              <span className="eyebrow tracking-[0.2em] text-[#0B111A] font-semibold">
                Hotelier Reviews
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#0B111A] font-normal leading-tight">
              What Hotel General Managers Say About Our Software.
            </h2>
          </div>

          <div className="lg:col-span-4 text-left lg:text-right flex flex-col lg:items-end justify-end">
            <div className="flex items-center gap-1 text-[#0B111A] mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} className="fill-[#0B111A]" />
              ))}
            </div>
            <p className="text-xs text-slate-500 uppercase tracking-wider font-medium">
              Verified Feedback from General Managers & Hoteliers
            </p>
          </div>
        </div>

        {/* Testimonials 3-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {siteConfig.testimonials.map((t) => (
            <div
              key={t.author}
              className="bg-white border border-slate-200 p-8 flex flex-col justify-between transition-[border-color,box-shadow] duration-300 hover:border-[#0B111A] hover:shadow-lg group relative text-left"
            >
              {/* Decorative Large Quotation Mark */}
              <div className="font-serif text-6xl text-black/15 leading-none select-none mb-3">
                &ldquo;
              </div>

              {/* Quote Body */}
              <p className="font-serif text-lg sm:text-xl text-[#0B111A] leading-relaxed italic mb-8">
                {t.quote}
              </p>

              {/* Author & Hotel Attribution */}
              <div className="pt-4 border-t border-slate-100">
                <div className="flex items-center justify-between gap-2 mb-1.5">
                  <h3 className="text-sm font-semibold text-[#0B111A] font-sans">
                    {t.author}
                  </h3>
                  {"category" in t && (
                    <span className="text-[10px] uppercase tracking-wider font-semibold px-2 py-0.5 bg-slate-50 border border-slate-200 text-[#0B111A]">
                      {(t as any).category}
                    </span>
                  )}
                </div>
                <p className="text-xs text-slate-700 font-semibold">
                  {t.role}
                </p>
                <p className="text-xs text-slate-500 mt-0.5">
                  {t.hotel}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
