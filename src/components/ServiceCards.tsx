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
    Globe: <Globe size={22} className="text-[#0B111A]" />,
    CalendarCheck: <CalendarCheck size={22} className="text-[#0B111A]" />,
    LayoutDashboard: <LayoutDashboard size={22} className="text-[#0B111A]" />,
    TrendingUp: <TrendingUp size={22} className="text-[#0B111A]" />,
  };

  const scrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="services" className="pt-10 pb-12 md:pt-14 md:pb-16 bg-[#F8FAFC] relative border-b border-slate-200">
      <div className="max-w-[1200px] mx-auto px-6 md:px-8">
        {/* Left-Right Aligned Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-8 md:mb-10 pb-6 border-b border-slate-200">
          <div className="lg:col-span-7 text-left">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-6 h-[1.5px] bg-[#0B111A]" />
              <span className="eyebrow tracking-[0.2em] text-[#0B111A] font-semibold">
                What We Build
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#0B111A] font-normal leading-tight">
              Everything Your Hotel Needs to Take Direct Bookings.
            </h2>
          </div>

          <div className="lg:col-span-5 text-left lg:text-right flex flex-col lg:items-end justify-end">
            <p className="text-sm sm:text-base text-slate-600 max-w-md leading-relaxed mb-4">
              We build custom websites, online booking engines, and staff dashboards so you keep 100% of your room revenue.
            </p>
            <a
              href="#contact"
              onClick={scrollToContact}
              className="inline-flex items-center text-xs uppercase tracking-[0.14em] font-semibold text-[#0B111A] hover:text-slate-600 transition-colors"
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
              className="bg-white border border-slate-200 p-8 rounded-none flex flex-col justify-between transition-[transform,border-color,box-shadow] duration-300 hover:-translate-y-1.5 hover:border-[#0B111A] hover:shadow-lg group"
            >
              <div>
                {/* Top Row: Icon & Index */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 bg-slate-50 border border-slate-200 flex items-center justify-center transition-colors duration-300 group-hover:border-[#0B111A]/40 group-hover:bg-[#0B111A]/5">
                    {iconMap[service.icon] || <Globe size={22} className="text-[#0B111A]" />}
                  </div>
                  <span className="font-mono text-sm font-semibold text-slate-400 group-hover:text-[#0B111A] transition-colors">
                    0{index + 1}
                  </span>
                </div>

                {/* Card Title */}
                <h3 className="font-serif text-2xl text-[#0B111A] font-medium mb-3 group-hover:text-black transition-colors">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-slate-600 leading-relaxed font-normal mb-8">
                  {service.desc}
                </p>
              </div>

              {/* Bottom CTA */}
              <div className="pt-4 border-t border-slate-100">
                <a
                  href="#contact"
                  onClick={scrollToContact}
                  className="inline-flex items-center text-xs uppercase tracking-[0.14em] font-semibold text-[#0B111A] group-hover:text-slate-600 transition-colors"
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
