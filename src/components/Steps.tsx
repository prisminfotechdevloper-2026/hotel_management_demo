"use client";

import React from "react";
import { siteConfig } from "@/config/siteConfig";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function Steps() {
  const scrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="process" className="pt-10 pb-12 md:pt-14 md:pb-16 bg-[#F8FAFC] border-b border-slate-200 relative">
      <div className="max-w-[1200px] mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Process Intro (5 Cols, Sticky) */}
          <div className="lg:col-span-5 lg:sticky lg:top-28 text-left">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-5 h-[1.5px] bg-[#0B111A]" />
              <span className="eyebrow tracking-[0.2em] text-[#0B111A] font-semibold">
                Our 14-Day Process
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#0B111A] font-normal leading-tight mb-5">
              We Launch Your New Hotel Software in 4 Simple Steps.
            </h2>

            <p className="text-base text-slate-600 leading-relaxed mb-8">
              Zero technical work for your hotel staff. Our team handles everything from custom design to payment gateway setup in two weeks.
            </p>

            {/* Quick Summary Box */}
            <div className="bg-white border border-slate-200 p-6 mb-8 shadow-xs">
              <div className="flex items-center gap-2 text-xs font-semibold text-[#0B111A] uppercase tracking-wider mb-3">
                <CheckCircle2 size={16} className="text-[#0B111A]" />
                <span>Our 14-Day Promise</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Your new website and booking system go live in two weeks without interrupting your daily hotel operations.
              </p>
            </div>

            <a
              href="#contact"
              onClick={scrollToContact}
              className="btn-navy inline-flex items-center gap-2 cursor-pointer"
            >
              <span>Talk With Our Team</span>
              <ArrowRight size={14} />
            </a>
          </div>

          {/* Right Column: 4 Step-by-Step Cards (7 Cols) */}
          <div className="lg:col-span-7 space-y-6">
            {siteConfig.steps.map((step, index) => (
              <div
                key={step.number}
                className="bg-white border border-slate-200 p-8 transition-[border-color,box-shadow] duration-300 hover:border-[#0B111A] hover:shadow-lg group relative text-left"
              >
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4">
                  <div>
                    <span className="text-[11px] uppercase tracking-[0.2em] text-[#0B111A] font-semibold block mb-1">
                      Step 0{index + 1}
                    </span>
                    <h3 className="font-serif text-2xl sm:text-3xl text-[#0B111A] font-medium transition-colors">
                      {step.title}
                    </h3>
                  </div>

                  <span className="font-mono text-3xl sm:text-4xl font-light text-slate-300 group-hover:text-[#0B111A] transition-colors leading-none self-start">
                    {step.number}
                  </span>
                </div>

                <p className="text-sm text-slate-600 leading-relaxed font-normal">
                  {step.desc}
                </p>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                  <span className="font-mono">Milestone Phase</span>
                  <span className="text-[#0B111A] font-medium">Clear Deliverables</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
