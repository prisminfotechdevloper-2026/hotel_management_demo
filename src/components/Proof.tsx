"use client";

import React from "react";
import { siteConfig } from "@/config/siteConfig";
import { TrendingUp, Award, Zap, Clock } from "lucide-react";

export default function Proof() {
  const metricIcons = [
    <TrendingUp key="1" size={20} className="text-[#B8975A]" />,
    <Clock key="2" size={20} className="text-[#B8975A]" />,
    <Zap key="3" size={20} className="text-[#B8975A]" />,
    <Award key="4" size={20} className="text-[#B8975A]" />,
  ];

  return (
    <section className="pt-6 pb-7 md:pt-8 md:pb-8 bg-[#FFFFFF] border-b border-[#E4DCCB] relative">
      <div className="max-w-[1200px] mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Left-Aligned Editorial Pitch (5 Cols) */}
          <div className="lg:col-span-5 text-left">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-6 h-[1px] bg-[#B8975A]" />
              <span className="eyebrow tracking-[0.2em] text-[#9A7B43]">
                Proven Numbers
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#141414] font-normal leading-tight mb-5">
              Real Results Delivered to Independent Hotels.
            </h2>

            <p className="text-base text-[#6B645A] leading-relaxed mb-6">
              We help hotels take back control from third-party booking sites. Here is the direct commercial impact our software delivers:
            </p>

            <div className="p-5 bg-[#FAF7F2] border-l-2 border-[#B8975A]">
              <p className="text-xs sm:text-sm text-[#2A2A2A] italic font-serif leading-relaxed">
                &ldquo;Hotels using our booking software immediately start saving lakhs by taking direct guest reservations without middleman commission fees.&rdquo;
              </p>
            </div>
          </div>

          {/* Right Column: 2x2 High-Impact Metric Cards Grid (7 Cols) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {siteConfig.stats.map((stat, idx) => (
              <div
                key={stat.label}
                className="bg-[#FAF7F2] border border-[#E4DCCB] p-7 flex flex-col justify-between transition-[border-color,background-color,box-shadow] duration-300 hover:border-[#B8975A] hover:bg-[#FFFFFF] hover:shadow-xl group text-left"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 bg-[#FFFFFF] border border-[#E4DCCB] flex items-center justify-center transition-colors group-hover:border-[#B8975A]/60">
                    {metricIcons[idx]}
                  </div>
                  <span className="text-[10px] font-mono text-[#B8975A] uppercase tracking-wider">
                    {stat.note}
                  </span>
                </div>

                <div className="mb-2">
                  <span className="font-serif text-4xl sm:text-5xl text-[#141414] group-hover:text-[#9A7B43] font-light tracking-tight transition-colors block leading-none mb-2">
                    {stat.value}
                  </span>
                  <h3 className="text-xs uppercase tracking-[0.14em] font-semibold text-[#2A2A2A]">
                    {stat.label}
                  </h3>
                </div>

                <div className="pt-3 border-t border-[#E4DCCB]/60 text-[11px] text-[#6B645A]">
                  Verified Commercial Standard
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
