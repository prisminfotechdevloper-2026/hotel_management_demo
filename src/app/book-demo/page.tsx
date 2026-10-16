"use client";

import React, { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import BookDemoForm from "@/components/BookDemoForm";
import { CheckCircle2, ArrowLeft } from "lucide-react";

export default function BookDemoPage() {
  const [successData, setSuccessData] = useState<{
    fullName: string;
    hotelName: string;
    whatsappUrl: string;
  } | null>(null);

  return (
    <main className="min-h-screen bg-[#FAF7F2] text-[#2A2A2A] flex flex-col">
      <Header />

      <div className="pt-32 pb-24 max-w-[900px] mx-auto px-6 w-full flex-1">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs uppercase tracking-wider text-[#6B645A] hover:text-[#B8975A] transition-colors mb-8"
        >
          <ArrowLeft size={14} />
          <span>Back to Home</span>
        </Link>

        <div className="bg-[#FFFFFF] border border-[#E4DCCB] p-8 md:p-12 shadow-xl">
          {successData ? (
            <div className="text-center py-12 px-4">
              <div className="w-16 h-16 bg-[#25D366]/20 border border-[#25D366] rounded-full flex items-center justify-center text-[#25D366] mx-auto mb-5">
                <CheckCircle2 size={36} />
              </div>
              <span className="eyebrow block mb-2 text-[#9A7B43]">Walkthrough Scheduled</span>
              <h1 className="font-serif text-3xl sm:text-4xl text-[#141414] font-medium mb-3">
                Thank you, {successData.fullName}
              </h1>
              <p className="text-base text-[#6B645A] max-w-md mx-auto mb-6 leading-relaxed">
                Your demo request was formatted and sent to WhatsApp. Our hotel growth specialist will also reach you within <strong>24 hours</strong>.
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
                  <span>Chat on WhatsApp (+91 90791 49299)</span>
                </a>
                <Link href="/" className="btn-outline-ink">
                  Return to Home
                </Link>
              </div>
            </div>
          ) : (
            <>
              <div className="mb-8 pb-6 border-b border-[#E4DCCB] text-center sm:text-left">
                <span className="eyebrow block mb-2 text-[#9A7B43]">Book Walkthrough</span>
                <h1 className="font-serif text-3xl sm:text-4xl text-[#141414] font-medium mb-3">
                  Schedule Your Free Demo &amp; Growth Audit
                </h1>
                <p className="text-sm text-[#6B645A] max-w-xl">
                  Tell us about your property. We will prepare a live sample booking engine and direct revenue strategy tailored to your hotel.
                </p>
              </div>

              <BookDemoForm idPrefix="page" onSuccess={setSuccessData} />
            </>
          )}
        </div>
      </div>

      <Footer />
      <WhatsAppButton />
    </main>
  );
}
