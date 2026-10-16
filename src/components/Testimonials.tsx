"use client";

import React from "react";
import { siteConfig } from "@/config/siteConfig";
import { Star } from "lucide-react";

export default function Testimonials() {
  return (
    <section className="pt-6 pb-7 md:pt-8 md:pb-8 bg-[#FAF7F2] border-b border-[#E4DCCB] relative">
      <div className="max-w-[1200px] mx-auto px-6 md:px-8">
        {/* Left-Right Aligned Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-6 md:mb-8 pb-4 border-b border-[#E4DCCB]">
          <div className="lg:col-span-8 text-left">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-6 h-[1px] bg-[#B8975A]" />
              <span className="eyebrow tracking-[0.2em] text-[#9A7B43]">
                Hotelier Reviews
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#141414] font-normal leading-tight">
              What Hotel General Managers Say About Our Software.
            </h2>
          </div>

          <div className="lg:col-span-4 text-left lg:text-right flex flex-col lg:items-end justify-end">
            <div className="flex items-center gap-1 text-[#B8975A] mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} className="fill-[#B8975A]" />
              ))}
            </div>
            <p className="text-xs text-[#6B645A] uppercase tracking-wider font-medium">
              Verified Feedback from General Managers & Hoteliers
            </p>
          </div>
        </div>

        {/* Testimonials 3-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {siteConfig.testimonials.map((t) => (
            <div
              key={t.author}
              className="bg-[#FFFFFF] border border-[#E4DCCB] p-8 flex flex-col justify-between transition-[border-color,box-shadow] duration-300 hover:border-[#B8975A] hover:shadow-xl group relative text-left"
            >
              {/* Decorative Large Quotation Mark */}
              <div className="font-serif text-6xl text-[#B8975A]/25 leading-none select-none mb-3">
                &ldquo;
              </div>

              {/* Quote Body */}
              <p className="font-serif text-lg sm:text-xl text-[#141414] leading-relaxed italic mb-8">
                {t.quote}
              </p>

              {/* Author & Hotel Attribution */}
              <div className="pt-4 border-t border-[#FAF7F2]">
                <h3 className="text-sm font-semibold text-[#141414] font-sans">
                  {t.author}
                </h3>
                <p className="text-xs text-[#9A7B43] font-medium mt-0.5">
                  {t.role}
                </p>
                <p className="text-xs text-[#6B645A] mt-0.5">
                  {t.hotel}
                </p>
                <span className="inline-block mt-3 text-[10px] text-[#B8975A]/70 font-mono">
                  [EDIT ME: Client Quote]
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
