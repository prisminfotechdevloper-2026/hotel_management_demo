"use client";

import React, { useEffect, useRef, useState } from "react";
import { X, CheckCircle2 } from "lucide-react";
import BookDemoForm from "@/components/BookDemoForm";
import { siteConfig } from "@/config/siteConfig";

interface BookDemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function BookDemoModal({ isOpen, onClose }: BookDemoModalProps) {
  const [successData, setSuccessData] = useState<{
    fullName: string;
    hotelName: string;
    whatsappUrl: string;
  } | null>(null);

  const onCloseRef = useRef(onClose);
  useEffect(() => {
    onCloseRef.current = onClose;
  });

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onCloseRef.current();
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleModalClose = () => {
    setSuccessData(null);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-[#141414]/85 backdrop-blur-sm p-4 sm:p-6 md:p-8 flex items-center justify-center">
      {/* Modal Dialog with generous width (max-w-4xl) and compact height */}
      <div className="relative w-full max-w-4xl bg-[#FAF7F2] border border-[#B8975A]/60 shadow-2xl p-6 sm:p-8 md:p-9 text-[#141414] my-auto">
        {/* Close Button */}
        <button
          onClick={handleModalClose}
          className="absolute top-4 right-4 p-2 text-[#141414]/60 hover:text-[#141414] hover:bg-[#E4DCCB]/40 transition-colors z-20"
          aria-label="Close modal"
        >
          <X size={22} />
        </button>

        {successData ? (
          /* Success Screen */
          <div className="text-center py-10 px-4">
            <div className="w-16 h-16 bg-[#25D366]/20 border border-[#25D366] rounded-full flex items-center justify-center text-[#25D366] mx-auto mb-4">
              <CheckCircle2 size={36} />
            </div>
            <span className="eyebrow block mb-1 text-[#9A7B43]">Demo Requested</span>
            <h3 className="font-serif text-3xl sm:text-4xl text-[#141414] font-medium mb-3">
              Thank you, {successData.fullName.split(" ")[0] || "Partner"}
            </h3>
            <p className="text-sm sm:text-base text-[#2A2A2A]/85 max-w-md mx-auto mb-6 leading-relaxed">
              Your details have been saved. Tap below to chat directly with our hotel specialist on WhatsApp, or our team will reach out within <strong>24 hours</strong>.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={successData.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-black font-semibold py-3 px-6 text-xs uppercase tracking-wider transition-colors shadow-md"
              >
                <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                  <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2ZM12.05 20.15C10.57 20.15 9.11 19.76 7.85 19.01L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.99 3.8 13.47 3.8 11.91C3.8 7.37 7.5 3.67 12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.05 20.15ZM16.57 14.39C16.32 14.26 15.1 13.66 14.87 13.58C14.65 13.5 14.48 13.46 14.32 13.71C14.15 13.96 13.68 14.51 13.54 14.67C13.4 14.84 13.25 14.86 13 14.73C12.75 14.61 11.95 14.35 11 13.5C10.26 12.84 9.76 12.03 9.62 11.78C9.48 11.53 9.6 11.4 9.73 11.27C9.84 11.16 9.98 10.98 10.1 10.84C10.22 10.7 10.27 10.6 10.35 10.43C10.43 10.26 10.39 10.12 10.33 10C10.27 9.87 9.77 8.65 9.57 8.16C9.37 7.68 9.17 7.74 9.02 7.73C8.88 7.73 8.71 7.73 8.55 7.73C8.38 7.73 8.12 7.79 7.89 8.04C7.67 8.29 7.04 8.88 7.04 10.08C7.04 11.29 7.92 12.45 8.04 12.61C8.16 12.78 9.76 15.25 12.21 16.31C12.79 16.56 13.25 16.71 13.6 16.82C14.19 17.01 14.72 16.98 15.14 16.92C15.61 16.85 16.58 16.33 16.78 15.76C16.98 15.19 16.98 14.7 16.92 14.6C16.86 14.51 16.7 14.45 16.45 14.33L16.57 14.39Z" />
                </svg>
                <span>Chat on WhatsApp ({siteConfig.contact.phone})</span>
              </a>
              <button onClick={handleModalClose} className="btn-outline-ink w-full sm:w-auto">
                Back to Site
              </button>
            </div>
          </div>
        ) : (
          /* Form Content with Wide Two-Column Layout */
          <>
            {/* Header: Left-Aligned & Compact */}
            <div className="mb-5 pb-3 border-b border-[#E4DCCB] pr-8 flex flex-col sm:flex-row sm:items-end justify-between gap-2">
              <div>
                <span className="eyebrow block text-[#9A7B43] text-[11px] mb-1">
                  Private Consultation
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl md:text-[32px] text-[#141414] font-medium leading-tight">
                  Book a Personalized Demo
                </h2>
              </div>
              <p className="text-xs text-[#6B645A] max-w-xs text-left sm:text-right">
                Discover how Prism eliminates OTA fees and scales direct guest revenue.
              </p>
            </div>

            <BookDemoForm idPrefix="modal" onSuccess={setSuccessData} />
          </>
        )}
      </div>
    </div>
  );
}
