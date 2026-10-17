"use client";

import React from "react";
import { siteConfig } from "@/config/siteConfig";

export default function WhatsAppButton() {
  const whatsappUrl = `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(
    siteConfig.contact.whatsappPrefill
  )}`;

  return (
    <aside aria-label="Quick contact" className="fixed bottom-6 right-6 z-40">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-2xl transition-[transform,background-color] duration-300 hover:scale-110 hover:bg-[#20ba59] focus:outline-none focus:ring-4 focus:ring-[#25D366]/40 cursor-pointer"
        aria-label={`Chat with Prism Hotel Management on WhatsApp (${siteConfig.contact.phone})`}
      >
        {/* Real Official WhatsApp Icon */}
        <svg
          viewBox="0 0 24 24"
          width="30"
          height="30"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          className="transition-transform duration-300 group-hover:rotate-6"
        >
          <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2ZM12.05 20.15C10.57 20.15 9.11 19.76 7.85 19.01L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.99 3.8 13.47 3.8 11.91C3.8 7.37 7.5 3.67 12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.05 20.15ZM16.57 14.39C16.32 14.26 15.1 13.66 14.87 13.58C14.65 13.5 14.48 13.46 14.32 13.71C14.15 13.96 13.68 14.51 13.54 14.67C13.4 14.84 13.25 14.86 13 14.73C12.75 14.61 11.95 14.35 11 13.5C10.26 12.84 9.76 12.03 9.62 11.78C9.48 11.53 9.6 11.4 9.73 11.27C9.84 11.16 9.98 10.98 10.1 10.84C10.22 10.7 10.27 10.6 10.35 10.43C10.43 10.26 10.39 10.12 10.33 10C10.27 9.87 9.77 8.65 9.57 8.16C9.37 7.68 9.17 7.74 9.02 7.73C8.88 7.73 8.71 7.73 8.55 7.73C8.38 7.73 8.12 7.79 7.89 8.04C7.67 8.29 7.04 8.88 7.04 10.08C7.04 11.29 7.92 12.45 8.04 12.61C8.16 12.78 9.76 15.25 12.21 16.31C12.79 16.56 13.25 16.71 13.6 16.82C14.19 17.01 14.72 16.98 15.14 16.92C15.61 16.85 16.58 16.33 16.78 15.76C16.98 15.19 16.98 14.7 16.92 14.6C16.86 14.51 16.7 14.45 16.45 14.33L16.57 14.39Z" />
        </svg>

        {/* Pulse effect badge */}
        <span className="absolute -inset-1 rounded-full border border-[#25D366]/50 animate-ping opacity-30 pointer-events-none" />

        {/* Hover Tooltip */}
        <span className="absolute right-16 px-3 py-1.5 bg-[#0B111A] text-white text-xs font-sans whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none border border-slate-700 shadow-xl hidden sm:block">
          WhatsApp: {siteConfig.contact.phone}
        </span>
      </a>
    </aside>
  );
}
