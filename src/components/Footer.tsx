"use client";

import React from "react";
import Link from "next/link";
import { siteConfig } from "@/config/siteConfig";
import { Mail, Phone, MapPin, Globe } from "lucide-react";
import FooterContactForm from "@/components/FooterContactForm";

export default function Footer() {
  const whatsappUrl = `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(
    siteConfig.contact.whatsappPrefill
  )}`;

  return (
    <footer id="contact" className="bg-[#0A0A0A] text-white relative border-t border-[#1C1C1C]">
      {/* Contact Form Section */}
      <div className="py-10 md:py-14 max-w-[1200px] mx-auto px-6 md:px-8 border-b border-[#1C1C1C]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Contact Details (5 Cols) */}
          <div className="lg:col-span-5">
            <span className="eyebrow tracking-[0.2em] text-white/90 font-semibold block mb-3">
              Get In Touch
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-white font-normal leading-tight mb-4">
              Talk Directly With Our Hotel Team.
            </h2>
            <p className="text-sm text-slate-300 leading-relaxed mb-8">
              Whether you want a new luxury website, direct booking engine, or want to stop paying heavy commissions &mdash; we are here to help. We reply within a few hours.
            </p>

            <div className="space-y-5">
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="flex items-center gap-3.5 text-sm text-slate-300 hover:text-white transition-colors group"
              >
                <div className="w-9 h-9 bg-[#141414] border border-[#262626] flex items-center justify-center text-white group-hover:border-white/50 transition-colors">
                  <Mail size={16} />
                </div>
                <span>{siteConfig.contact.email}</span>
              </a>

              <a
                href={`tel:${siteConfig.contact.phone}`}
                className="flex items-center gap-3.5 text-sm text-slate-300 hover:text-white transition-colors group"
              >
                <div className="w-9 h-9 bg-[#141414] border border-[#262626] flex items-center justify-center text-white group-hover:border-white/50 transition-colors">
                  <Phone size={16} />
                </div>
                <span>{siteConfig.contact.phone}</span>
              </a>

              <div className="flex items-start gap-3.5 text-sm text-slate-300">
                <div className="w-9 h-9 bg-[#141414] border border-[#262626] flex items-center justify-center text-white shrink-0 mt-0.5">
                  <MapPin size={16} />
                </div>
                <div>
                  <span className="block text-white font-medium">{siteConfig.contact.city}</span>
                  <span className="text-xs text-slate-400">{siteConfig.contact.address}</span>
                </div>
              </div>

              {/* Direct WhatsApp Chat Trigger */}
              <div className="pt-2">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#25D366]/10 border border-[#25D366]/40 text-[#25D366] px-4 py-2 text-xs font-semibold uppercase tracking-wider hover:bg-[#25D366] hover:text-[#141414] transition-[background-color,color]"
                >
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                    <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2ZM12.05 20.15C10.57 20.15 9.11 19.76 7.85 19.01L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.99 3.8 13.47 3.8 11.91C3.8 7.37 7.5 3.67 12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.05 20.15ZM16.57 14.39C16.32 14.26 15.1 13.66 14.87 13.58C14.65 13.5 14.48 13.46 14.32 13.71C14.15 13.96 13.68 14.51 13.54 14.67C13.4 14.84 13.25 14.86 13 14.73C12.75 14.61 11.95 14.35 11 13.5C10.26 12.84 9.76 12.03 9.62 11.78C9.48 11.53 9.6 11.4 9.73 11.27C9.84 11.16 9.98 10.98 10.1 10.84C10.22 10.7 10.27 10.6 10.35 10.43C10.43 10.26 10.39 10.12 10.33 10C10.27 9.87 9.77 8.65 9.57 8.16C9.37 7.68 9.17 7.74 9.02 7.73C8.88 7.73 8.71 7.73 8.55 7.73C8.38 7.73 8.12 7.79 7.89 8.04C7.67 8.29 7.04 8.88 7.04 10.08C7.04 11.29 7.92 12.45 8.04 12.61C8.16 12.78 9.76 15.25 12.21 16.31C12.79 16.56 13.25 16.71 13.6 16.82C14.19 17.01 14.72 16.98 15.14 16.92C15.61 16.85 16.58 16.33 16.78 15.76C16.98 15.19 16.98 14.7 16.92 14.6C16.86 14.51 16.7 14.45 16.45 14.33L16.57 14.39Z" />
                  </svg>
                  <span>Chat on WhatsApp ({siteConfig.contact.phone})</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form Component */}
          <FooterContactForm />
        </div>
      </div>

      {/* Main Footer Bar: Wordmark, short line, social icons, copyright */}
      <div className="py-6 max-w-[1200px] mx-auto px-6 md:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand Wordmark & Short Line */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <Link href="/" className="group flex flex-col items-center md:items-start mb-2">
              <span className="font-serif text-2xl tracking-[0.2em] text-white font-semibold leading-tight group-hover:text-slate-300 transition-colors">
                PRISM
              </span>
              <span className="text-[10px] tracking-[0.26em] uppercase text-slate-400 font-medium">
                Hotel Management
              </span>
            </Link>
            <p className="text-xs text-slate-400 max-w-sm">
              A specialized hospitality technology unit by{" "}
              <a
                href={siteConfig.contact.social.website}
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-white transition-colors"
              >
                Prism Infotech Solution LLP
              </a>
              .
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-4 text-slate-400">
            <a
              href={siteConfig.contact.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="w-8 h-8 rounded-full bg-[#141414] border border-[#262626] flex items-center justify-center hover:text-white hover:border-slate-500 transition-colors"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
            <a
              href={siteConfig.contact.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="w-8 h-8 rounded-full bg-[#141414] border border-[#262626] flex items-center justify-center hover:text-white hover:border-slate-500 transition-colors"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            <a
              href={siteConfig.contact.social.website}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Website"
              className="w-8 h-8 rounded-full bg-[#141414] border border-[#262626] flex items-center justify-center hover:text-white hover:border-slate-500 transition-colors text-xs font-semibold"
            >
              <Globe size={15} />
            </a>
          </div>

          {/* Copyright */}
          <div className="text-xs text-slate-500 text-center md:text-right font-mono">
            &copy; 2026 Prism Hotel Management. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
