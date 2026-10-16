"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/config/siteConfig";
import { Play, ShieldCheck, ArrowRight, TrendingUp, Check } from "lucide-react";

interface HeroProps {
  onOpenBookDemo?: () => void;
  onSelectVideoCategory?: () => void;
}

export default function Hero({ onOpenBookDemo, onSelectVideoCategory }: HeroProps) {
  const scrollToVideo = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    onSelectVideoCategory?.();
    const videoSection = document.getElementById("category-navbar") || document.getElementById("overview-video");
    if (videoSection) {
      videoSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative flex items-center justify-center overflow-hidden">
      {/* 1. Full Background Palace Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-palace.jpg"
          alt="Luxury Heritage Palace Hotel in India"
          fill
          priority
          className="object-cover object-center scale-105 animate-subtleZoom"
          sizes="100vw"
        />
        {/* Luxury Vignette & Dark Overlay for crisp WCAG AA text contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#141414]/95 via-[#141414]/75 to-black/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-transparent to-black/40" />
      </div>

      {/* 2. Top Brand Bar (Integrated inside Hero, clean and non-sticky) */}
      <div className="absolute top-0 left-0 right-0 z-20 px-6 md:px-8 py-5 flex items-center justify-between border-b border-white/10 bg-gradient-to-b from-black/80 to-transparent">
        <Link href="/" className="flex flex-col text-left group">
          <span className="font-serif text-2xl tracking-[0.22em] text-[#FAF7F2] font-semibold uppercase leading-tight group-hover:text-[#B8975A] transition-colors">
            PRISM
          </span>
          <span className="text-[9px] uppercase tracking-[0.28em] text-[#B8975A] font-medium">
            Hotel Management Agency
          </span>
        </Link>

        <div className="flex items-center gap-4">
          <Link
            href="/demo"
            className="hidden sm:inline-block text-xs uppercase tracking-wider text-[#FAF7F2]/80 hover:text-[#B8975A] transition-colors"
          >
            Live Prototype Demo &rarr;
          </Link>
          {onOpenBookDemo && (
            <button
              onClick={onOpenBookDemo}
              className="text-xs uppercase tracking-wider font-semibold text-[#141414] bg-[#B8975A] hover:bg-[#A38347] px-4 py-2 transition-colors cursor-pointer"
            >
              Book a Demo
            </button>
          )}
        </div>
      </div>

      {/* 3. Hero Content Container (Left-Right Aligned Grid, Compact Spacing) */}
      <div className="relative z-10 w-full max-w-[1200px] mx-auto px-6 md:px-8 pt-20 pb-7 md:pt-24 md:pb-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Column: Left-aligned Typography & CTA (7 Cols) */}
          <div className="lg:col-span-7 text-left flex flex-col items-start">
            {/* Eyebrow with gold accent */}
            <div className="inline-flex items-center gap-2.5 mb-4 px-3 py-1 bg-[#141414]/80 backdrop-blur-md border border-[#B8975A]/40">
              <span className="w-2 h-2 rounded-full bg-[#B8975A] animate-pulse" />
              <span className="eyebrow tracking-[0.2em] text-[#B8975A] text-[11px]">
                Hotel Websites & Booking Software
              </span>
            </div>

            {/* Clear, High-Impact Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-[62px] text-[#FAF7F2] font-normal leading-[1.1] tracking-[-0.02em] mb-6">
              We build websites and software that fill your hotel rooms.
            </h1>

            {/* Clear Subtext: What it does & why you need it */}
            <p className="text-base sm:text-lg text-[#FAF7F2]/90 max-w-xl leading-relaxed mb-8 font-normal">
              Get more direct guest bookings and stop losing 18&ndash;25% of your earnings to booking apps. We design your luxury hotel website and setup your online booking system in 14 days.
            </p>

            {/* Two Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-8">
              {onOpenBookDemo ? (
                <button
                  onClick={onOpenBookDemo}
                  className="btn-gold shadow-xl hover:shadow-2xl group flex items-center justify-center cursor-pointer"
                >
                  <span>Book a Free Demo</span>
                  <ArrowRight
                    size={15}
                    className="ml-2 transition-transform duration-200 group-hover:translate-x-1"
                  />
                </button>
              ) : (
                <Link
                  href="/book-demo"
                  className="btn-gold shadow-xl hover:shadow-2xl group flex items-center justify-center"
                >
                  <span>Book a Free Demo</span>
                  <ArrowRight
                    size={15}
                    className="ml-2 transition-transform duration-200 group-hover:translate-x-1"
                  />
                </Link>
              )}

              <a
                href="#overview-video"
                onClick={scrollToVideo}
                className="btn-outline-gold flex items-center justify-center gap-2 bg-[#141414]/60 backdrop-blur-md hover:bg-[#B8975A] hover:text-[#141414] cursor-pointer"
              >
                <Play size={13} className="fill-current text-[#B8975A]" />
                <span>Watch 2-Min Tour</span>
              </a>
            </div>

            {/* Simple Trust Line */}
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.14em] text-[#FAF7F2]/75 font-medium">
              <ShieldCheck size={16} className="text-[#B8975A] shrink-0" />
              <span>{siteConfig.trustLine}</span>
            </div>
          </div>

          {/* Right Column: Direct Booking Impact Card (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            {/* Simple Direct Booking Growth Card */}
            <div className="bg-[#141414]/90 backdrop-blur-xl border border-[#B8975A]/40 p-6 md:p-8 shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#B8975A]/15 rounded-full blur-2xl pointer-events-none" />

              <div className="flex items-center justify-between mb-6 pb-4 border-b border-[#2A2A2A]">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 bg-[#B8975A]/15 border border-[#B8975A]/40 flex items-center justify-center text-[#B8975A]">
                    <TrendingUp size={16} />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-[0.2em] text-[#B8975A] font-semibold block">
                      Direct Bookings Result
                    </span>
                    <span className="font-serif text-sm text-[#FAF7F2]">
                      What Our Partner Hotels Achieve
                    </span>
                  </div>
                </div>

                <span className="text-[10px] font-mono bg-[#B8975A]/20 text-[#B8975A] px-2 py-0.5 border border-[#B8975A]/30">
                  Proven Impact
                </span>
              </div>

              {/* Big Metric Display */}
              <div className="mb-6">
                <div className="flex items-baseline gap-2">
                  <span className="font-serif text-5xl font-light text-[#FAF7F2]">
                    +38%
                  </span>
                  <span className="text-xs uppercase tracking-wider text-[#B8975A] font-semibold">
                    More Direct Bookings
                  </span>
                </div>
                <p className="text-xs text-[#FAF7F2]/70 mt-1">
                  Average increase in direct guest reservations without paying booking app commission.
                </p>
              </div>

              {/* Bullet list in plain English */}
              <div className="space-y-3 text-xs text-[#FAF7F2]/85 mb-6">
                <div className="flex items-center gap-2.5">
                  <span className="w-4 h-4 rounded-full bg-[#B8975A]/20 flex items-center justify-center text-[#B8975A] shrink-0">
                    <Check size={11} />
                  </span>
                  <span>Keep 100% of room revenue with zero commission</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <span className="w-4 h-4 rounded-full bg-[#B8975A]/20 flex items-center justify-center text-[#B8975A] shrink-0">
                    <Check size={11} />
                  </span>
                  <span>Luxury website that looks 5-star on every smartphone</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <span className="w-4 h-4 rounded-full bg-[#B8975A]/20 flex items-center justify-center text-[#B8975A] shrink-0">
                    <Check size={11} />
                  </span>
                  <span>Complete system setup and launched in 14 days</span>
                </div>
              </div>

              {/* Direct Demo Link */}
              <Link
                href="/demo"
                className="w-full bg-[#FAF7F2]/10 hover:bg-[#B8975A] hover:text-[#141414] text-[#FAF7F2] border border-[#B8975A]/40 text-xs font-semibold uppercase tracking-wider py-2.5 px-4 flex items-center justify-between transition-[background-color,color] duration-300"
              >
                <span>Try Sample Hotel Prototype</span>
                <ArrowRight size={14} />
              </Link>
            </div>

            {/* Design Benchmark Tag */}
            <div className="bg-[#141414]/80 backdrop-blur-md border border-[#E4DCCB]/20 p-3.5 flex items-center justify-between text-xs text-[#FAF7F2]/75">
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#B8975A]" />
                <span>Made for: <strong>Heritage, Boutique & Luxury Hotels</strong></span>
              </span>
              <span className="text-[10px] text-[#B8975A] uppercase tracking-wider font-semibold">
                Across India
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
