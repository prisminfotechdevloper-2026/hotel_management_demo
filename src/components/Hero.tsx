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
          <span className="font-serif text-2xl tracking-[0.22em] text-white font-semibold uppercase leading-tight group-hover:text-slate-300 transition-colors">
            PRISM
          </span>
          <span className="text-[9px] uppercase tracking-[0.28em] text-slate-300 font-medium">
            Hotel Management Agency
          </span>
        </Link>

        <div className="flex items-center gap-4">
          <Link
            href="/demo"
            className="hidden sm:inline-block text-xs uppercase tracking-wider text-white/80 hover:text-white transition-colors"
          >
            Live Prototype Demo &rarr;
          </Link>
          {onOpenBookDemo && (
            <button
              onClick={onOpenBookDemo}
              className="text-xs uppercase tracking-wider font-semibold text-white bg-[#0F2744] hover:bg-[#1E3A8A] border border-white/20 px-4 py-2 transition-colors cursor-pointer rounded-xs"
            >
              Book a Demo
            </button>
          )}
        </div>
      </div>

      {/* 3. Hero Content Container (Left-Right Aligned Grid, Compact Spacing) */}
      <div className="relative z-10 w-full max-w-[1200px] mx-auto px-6 md:px-8 pt-20 pb-8 md:pt-24 md:pb-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Column: Left-aligned Typography & CTA (7 Cols) */}
          <div className="lg:col-span-7 text-left flex flex-col items-start">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2.5 mb-4 px-3 py-1 bg-white/10 backdrop-blur-md border border-white/20 rounded-xs">
              <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
              <span className="tracking-[0.2em] text-white text-[11px] font-semibold uppercase">
                Hotel Websites & Booking Software
              </span>
            </div>

            {/* Clear, High-Impact Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-[62px] text-white font-normal leading-[1.1] tracking-[-0.02em] mb-6">
              We build websites and software that fill your hotel rooms.
            </h1>

            {/* Clear Subtext */}
            <p className="text-base sm:text-lg text-slate-200 max-w-xl leading-relaxed mb-7 font-normal">
              Get more direct guest bookings and eliminate high 18&ndash;25% OTA commissions. From <strong className="text-white font-medium">boutique retreats</strong> and <strong className="text-white font-medium">beach resorts</strong> to <strong className="text-white font-medium">business hotels</strong> and <strong className="text-white font-medium">villas</strong>, we launch your custom direct-booking platform in 14 days.
            </p>

            {/* Two Action Buttons - Keep Navy Blue for Primary Button */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-6">
              {onOpenBookDemo ? (
                <button
                  onClick={onOpenBookDemo}
                  className="btn-navy shadow-xl hover:shadow-2xl group flex items-center justify-center cursor-pointer"
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
                  className="btn-navy shadow-xl hover:shadow-2xl group flex items-center justify-center"
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
                className="btn-outline-ink flex items-center justify-center gap-2 bg-black/40 border-white/25 text-white hover:bg-white hover:text-black cursor-pointer"
              >
                <Play size={13} className="fill-current text-white" />
                <span>Watch 2-Min Tour</span>
              </a>
            </div>

            {/* Simple Trust Line */}
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.14em] text-slate-300 font-medium mb-5">
              <ShieldCheck size={16} className="text-white shrink-0" />
              <span>{siteConfig.trustLine}</span>
            </div>

            {/* Multi-Format Category Badges Strip without emojis */}
            <div className="pt-4 border-t border-white/10 w-full flex flex-wrap gap-2 text-[11px] text-slate-200">
              <span className="px-3 py-1 bg-white/10 border border-white/15 rounded-xs">
                Luxury Beach Resorts
              </span>
              <span className="px-3 py-1 bg-white/10 border border-white/15 rounded-xs">
                Boutique Mountain Stays
              </span>
              <span className="px-3 py-1 bg-white/10 border border-white/15 rounded-xs">
                City & Business Hotels
              </span>
              <span className="px-3 py-1 bg-white/10 border border-white/15 rounded-xs">
                Heritage Properties
              </span>
              <span className="px-3 py-1 bg-white/10 border border-white/15 rounded-xs">
                Private Luxury Villas
              </span>
            </div>
          </div>

          {/* Right Column: Direct Booking Impact Card (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            {/* Simple Direct Booking Growth Card */}
            <div className="bg-[#0B111A]/95 backdrop-blur-xl border border-white/15 p-6 md:p-8 shadow-2xl relative overflow-hidden group">
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/10">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 bg-white/10 border border-white/20 flex items-center justify-center text-white">
                    <TrendingUp size={16} />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-[0.2em] text-slate-300 font-semibold block">
                      Direct Bookings Result
                    </span>
                    <span className="font-serif text-sm text-white">
                      What Our Partner Hotels Achieve
                    </span>
                  </div>
                </div>

                <span className="text-[10px] font-mono bg-white/10 text-white px-2.5 py-0.5 border border-white/20">
                  Proven Impact
                </span>
              </div>

              {/* Big Metric Display */}
              <div className="mb-6">
                <div className="flex items-baseline gap-2">
                  <span className="font-serif text-5xl font-light text-white">
                    +38%
                  </span>
                  <span className="text-xs uppercase tracking-wider text-white font-semibold">
                    More Direct Bookings
                  </span>
                </div>
                <p className="text-xs text-slate-300 mt-1">
                  Average increase in direct guest reservations without paying booking app commission.
                </p>
              </div>

              {/* Bullet list in plain English */}
              <div className="space-y-3 text-xs text-slate-200 mb-6">
                <div className="flex items-center gap-2.5">
                  <span className="w-4 h-4 rounded-full bg-white/15 border border-white/30 flex items-center justify-center text-white shrink-0">
                    <Check size={11} />
                  </span>
                  <span>Keep 100% of room revenue with zero commission</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <span className="w-4 h-4 rounded-full bg-white/15 border border-white/30 flex items-center justify-center text-white shrink-0">
                    <Check size={11} />
                  </span>
                  <span>Fast website that looks 5-star on every smartphone</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <span className="w-4 h-4 rounded-full bg-white/15 border border-white/30 flex items-center justify-center text-white shrink-0">
                    <Check size={11} />
                  </span>
                  <span>Complete system setup and launched in 14 days</span>
                </div>
              </div>

              {/* Direct Demo Button - Navy Blue */}
              <Link
                href="/demo"
                className="w-full btn-navy text-xs py-2.5 px-4 flex items-center justify-between"
              >
                <span>Try Sample Hotel Prototype</span>
                <ArrowRight size={14} />
              </Link>
            </div>

            {/* Design Benchmark Tag */}
            <div className="bg-[#0B111A]/90 backdrop-blur-md border border-white/10 p-3.5 flex items-center justify-between text-xs text-slate-300">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-white" />
                <span>Engineered for: <strong className="text-white">All Hotels, Resorts & Luxury Stays</strong></span>
              </span>
              <span className="text-[10px] text-white uppercase tracking-wider font-semibold">
                Across India
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
