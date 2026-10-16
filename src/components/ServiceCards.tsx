"use client";

import React from "react";
import { siteConfig } from "@/config/siteConfig";
import {
  Globe,
  CalendarCheck,
  LayoutDashboard,
  TrendingUp,
  ArrowRight,
} from "lucide-react";

export default function ServiceCards() {
  const iconMap: Record<string, React.ReactNode> = {
    Globe: <Globe size={24} className="text-[#B8975A]" />,
    CalendarCheck: <CalendarCheck size={24} className="text-[#B8975A]" />,
    LayoutDashboard: <LayoutDashboard size={24} className="text-[#B8975A]" />,
    TrendingUp: <TrendingUp size={24} className="text-[#B8975A]" />,
  };

  const scrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="services" className="pt-6 pb-7 md:pt-8 md:pb-8 bg-[#FAF7F2] relative border-b border-[#E4DCCB]">
      <div className="max-w-[1200px] mx-auto px-6 md:px-8">
        {/* Left-Right Aligned Header (No more center stack) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-6 md:mb-8 pb-4 border-b border-[#E4DCCB]">
          <div className="lg:col-span-7 text-left">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-6 h-[1px] bg-[#B8975A]" />
              <span className="eyebrow tracking-[0.2em] text-[#9A7B43]">
                What We Build
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#141414] font-normal leading-tight">
              Everything Your Hotel Needs to Take Direct Bookings.
            </h2>
          </div>

          <div className="lg:col-span-5 text-left lg:text-right flex flex-col lg:items-end justify-end">
            <p className="text-sm sm:text-base text-[#6B645A] max-w-md leading-relaxed mb-4">
              We build custom websites, online booking engines, and staff dashboards so you keep 100% of your room revenue.
            </p>
            <a
              href="#contact"
              onClick={scrollToContact}
              className="inline-flex items-center text-xs uppercase tracking-[0.14em] font-semibold text-[#141414] hover:text-[#B8975A] transition-colors"
            >
              Ask about your hotel
              <ArrowRight size={14} className="ml-1.5" />
            </a>
          </div>
        </div>

        {/* 4 Service Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {siteConfig.services.map((service, index) => (
            <div
              key={service.id}
              className="bg-[#FFFFFF] border border-[#E4DCCB] p-8 flex flex-col justify-between transition-[transform,border-color,box-shadow] duration-300 hover:-translate-y-1.5 hover:border-[#B8975A] hover:shadow-xl group"
            >
              <div>
                {/* Top Row: Icon & Index */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 bg-[#FAF7F2] border border-[#E4DCCB] flex items-center justify-center transition-colors duration-300 group-hover:border-[#B8975A]/60 group-hover:bg-[#B8975A]/10">
                    {iconMap[service.icon] || <Globe size={24} className="text-[#B8975A]" />}
                  </div>
                  <span className="font-serif text-xl text-[#B8975A]/50 font-light">
                    0{index + 1}
                  </span>
                </div>

                {/* Card Title */}
                <h3 className="font-serif text-2xl text-[#141414] font-medium mb-3 group-hover:text-[#9A7B43] transition-colors">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-[#2A2A2A]/80 leading-relaxed font-normal mb-8">
                  {service.desc}
                </p>
              </div>

              {/* Bottom CTA: Learn more (scrolls to contact) */}
              <div className="pt-4 border-t border-[#FAF7F2]">
                <a
                  href="#contact"
                  onClick={scrollToContact}
                  className="inline-flex items-center text-xs uppercase tracking-[0.14em] font-semibold text-[#141414] group-hover:text-[#B8975A] transition-colors"
                >
                  <span>Inquire about {service.title}</span>
                  <ArrowRight
                    size={14}
                    className="ml-2 transition-transform duration-200 group-hover:translate-x-1"
                  />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
