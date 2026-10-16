"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { siteConfig } from "@/config/siteConfig";
import { Menu, X } from "lucide-react";

interface HeaderProps {
  onOpenBookDemo?: () => void;
}

export default function Header({ onOpenBookDemo }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#FAF7F2]/95 backdrop-blur-md border-b border-[#E4DCCB] py-3.5 shadow-sm"
          : "bg-gradient-to-b from-[#141414]/90 via-[#141414]/50 to-transparent py-5"
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-6 md:px-8 flex items-center justify-between">
        {/* Brand / Wordmark */}
        <Link href="/" className="group flex flex-col">
          <span
            className={`font-serif text-2xl tracking-[0.16em] font-semibold leading-none transition-colors duration-300 ${
              isScrolled ? "text-[#141414]" : "text-[#FAF7F2]"
            }`}
          >
            PRISM
          </span>
          <span className="text-[10px] tracking-[0.24em] uppercase text-[#B8975A] font-medium mt-1">
            Hotel Management
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8">
          {siteConfig.navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`text-[13px] uppercase tracking-[0.12em] font-medium transition-colors duration-200 ${
                isScrolled
                  ? "text-[#2A2A2A] hover:text-[#B8975A]"
                  : "text-[#FAF7F2]/85 hover:text-[#B8975A]"
              }`}
            >
              {link.label}
            </a>
          ))}
          <Link
            href="/demo"
            className={`text-[13px] uppercase tracking-[0.12em] font-semibold transition-colors duration-200 flex items-center gap-1.5 ${
              isScrolled
                ? "text-[#B8975A] hover:text-[#141414]"
                : "text-[#B8975A] hover:text-[#FAF7F2]"
            }`}
          >
            Live Demo
            <span className="w-1.5 h-1.5 rounded-full bg-[#B8975A] animate-pulse" />
          </Link>
        </nav>

        {/* Right CTA Button (Desktop) */}
        <div className="hidden md:block">
          {onOpenBookDemo ? (
            <button onClick={onOpenBookDemo} className="btn-gold shadow-sm">
              Book a Demo
            </button>
          ) : (
            <Link href="/book-demo" className="btn-gold shadow-sm">
              Book a Demo
            </Link>
          )}
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`p-2 transition-colors focus:outline-none ${
              isScrolled ? "text-[#141414]" : "text-[#FAF7F2]"
            }`}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#141414] border-b border-[#B8975A]/30 px-6 py-6 shadow-2xl">
          <nav className="flex flex-col gap-4">
            {siteConfig.navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm uppercase tracking-[0.14em] font-medium text-[#FAF7F2]/90 hover:text-[#B8975A] transition-colors py-1.5 border-b border-[#2A2A2A]"
              >
                {link.label}
              </a>
            ))}
            <Link
              href="/demo"
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm uppercase tracking-[0.14em] font-medium text-[#B8975A] py-2 flex items-center justify-between border-b border-[#2A2A2A]"
            >
              <span>Explore Live Demo</span>
              <span className="text-[10px] bg-[#B8975A]/20 text-[#B8975A] px-2 py-0.5 border border-[#B8975A]/40">
                Interactive
              </span>
            </Link>

            <div className="pt-3">
              {onOpenBookDemo ? (
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenBookDemo();
                  }}
                  className="btn-gold w-full text-center"
                >
                  Book a Demo
                </button>
              ) : (
                <Link
                  href="/book-demo"
                  onClick={() => setMobileMenuOpen(false)}
                  className="btn-gold w-full text-center block"
                >
                  Book a Demo
                </Link>
              )}
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
