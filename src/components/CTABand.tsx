"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";

interface CTABandProps {
  onOpenBookDemo?: () => void;
}

export default function CTABand({ onOpenBookDemo }: CTABandProps) {
  const scrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-20 md:py-28 bg-[#0A0A0A] text-white relative border-t border-[#1C1C1C] overflow-hidden">
      {/* Background Subtle Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/[0.04] via-transparent to-transparent pointer-events-none" />

      <div className="max-w-[1200px] mx-auto px-6 md:px-8 text-center relative z-10">
        <div className="inline-flex items-center gap-3 mb-4">
          <span className="w-8 h-[1px] bg-white/30" />
          <span className="eyebrow tracking-[0.2em] text-white/90 font-semibold">
            Take The Next Step
          </span>
          <span className="w-8 h-[1px] bg-white/30" />
        </div>

        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white font-normal leading-tight max-w-3xl mx-auto mb-6">
          Ready to grow your hotel digitally?
        </h2>

        <p className="text-base sm:text-lg text-slate-300 max-w-xl mx-auto mb-10 leading-relaxed font-normal">
          Let our team demonstrate how Prism will eliminate commissions, elevate your guest experience, and scale direct bookings.
        </p>

        {/* Dual CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          {onOpenBookDemo ? (
            <button
              onClick={onOpenBookDemo}
              className="btn-navy w-full sm:w-auto shadow-md group"
            >
              Book a Demo
              <ArrowRight
                size={15}
                className="ml-2 transition-transform duration-200 group-hover:translate-x-1"
              />
            </button>
          ) : (
            <Link
              href="/book-demo"
              className="btn-navy w-full sm:w-auto shadow-md group"
            >
              Book a Demo
              <ArrowRight
                size={15}
                className="ml-2 transition-transform duration-200 group-hover:translate-x-1"
              />
            </Link>
          )}

          <a
            href="#contact"
            onClick={scrollToContact}
            className="btn-outline-navy w-full sm:w-auto flex items-center justify-center gap-2 border-slate-700 text-white hover:border-white hover:bg-white/10"
          >
            <Mail size={15} />
            Contact Us
          </a>
        </div>

        {/* Trust Note */}
        <p className="mt-8 text-xs text-slate-400 uppercase tracking-widest">
          Personalized demo • Custom direct booking roadmap • Zero obligation
        </p>
      </div>
    </section>
  );
}
