"use client";

import React, { useState } from "react";
import { siteConfig } from "@/config/siteConfig";
import { submitLead } from "@/lib/submitLead";
import { isValidPhoneNumber, createWhatsAppUrl } from "@/lib/whatsapp";
import { AlertCircle } from "lucide-react";

export default function FooterContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    honeypot: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [sentWhatsappUrl, setSentWhatsappUrl] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    // Validation
    if (!formData.name.trim()) {
      setErrorMessage("Please enter your name.");
      return;
    }
    if (!formData.email.trim() || !formData.email.includes("@")) {
      setErrorMessage("Please enter a valid work email address.");
      return;
    }
    if (!isValidPhoneNumber(formData.phone)) {
      setErrorMessage("Please enter a valid 10-digit phone number.");
      return;
    }

    setIsSubmitting(true);

    // Format query directly for WhatsApp
    const lines = [
      "Hello Prism Hotel Management,",
      "",
      "I have sent an inquiry from your website:",
      `• Name: ${formData.name.trim()}`,
      `• Phone: ${formData.phone.trim()}`,
      `• Email: ${formData.email.trim()}`,
    ];

    if (formData.message.trim()) {
      lines.push(`• Message: ${formData.message.trim()}`);
    } else {
      lines.push("• Interest: Hotel Management, Website & Direct Booking Growth");
    }

    const targetWhatsappUrl = createWhatsAppUrl(lines);

    try {
      await submitLead({
        fullName: formData.name,
        hotelName: "Direct Contact Form",
        workEmail: formData.email,
        phone: formData.phone,
        message: formData.message,
        honeypot: formData.honeypot,
      });

      setSentWhatsappUrl(targetWhatsappUrl);
      setSuccessMessage(
        "Your inquiry details have been saved. Click below to chat directly with our team on WhatsApp with your pre-filled details."
      );
      setFormData({ name: "", email: "", phone: "", message: "", honeypot: "" });
    } catch {
      setSentWhatsappUrl(targetWhatsappUrl);
      setSuccessMessage("Your inquiry details have been saved. Click below to message our team on WhatsApp.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="lg:col-span-7 bg-[#1C1C1C] border border-[#2A2A2A] p-8 md:p-10 shadow-2xl">
      <h3 className="font-serif text-2xl text-[#FAF7F2] font-medium mb-2">
        Send Us a Message
      </h3>
      <p className="text-xs text-[#FAF7F2]/70 mb-6">
        Enter your details below. We will call or WhatsApp you to discuss your hotel requirements.
      </p>

      {successMessage ? (
        <div className="bg-[#141414] border border-[#25D366]/40 p-6 sm:p-8 text-center space-y-4">
          <div className="w-14 h-14 bg-[#25D366]/15 border border-[#25D366] rounded-full flex items-center justify-center text-[#25D366] mx-auto">
            <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor">
              <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2ZM12.05 20.15C10.57 20.15 9.11 19.76 7.85 19.01L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.99 3.8 13.47 3.8 11.91C3.8 7.37 7.5 3.67 12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.05 20.15ZM16.57 14.39C16.32 14.26 15.1 13.66 14.87 13.58C14.65 13.5 14.48 13.46 14.32 13.71C14.15 13.96 13.68 14.51 13.54 14.67C13.4 14.84 13.25 14.86 13 14.73C12.75 14.61 11.95 14.35 11 13.5C10.26 12.84 9.76 12.03 9.62 11.78C9.48 11.53 9.6 11.4 9.73 11.27C9.84 11.16 9.98 10.98 10.1 10.84C10.22 10.7 10.27 10.6 10.35 10.43C10.43 10.26 10.39 10.12 10.33 10C10.27 9.87 9.77 8.65 9.57 8.16C9.37 7.68 9.17 7.74 9.02 7.73C8.88 7.73 8.71 7.73 8.55 7.73C8.38 7.73 8.12 7.79 7.89 8.04C7.67 8.29 7.04 8.88 7.04 10.08C7.04 11.29 7.92 12.45 8.04 12.61C8.16 12.78 9.76 15.25 12.21 16.31C12.79 16.56 13.25 16.71 13.6 16.82C14.19 17.01 14.72 16.98 15.14 16.92C15.61 16.85 16.58 16.33 16.78 15.76C16.98 15.19 16.98 14.7 16.92 14.6C16.86 14.51 16.7 14.45 16.45 14.33L16.57 14.39Z" />
            </svg>
          </div>
          <h4 className="font-serif text-2xl text-[#FAF7F2] font-medium">
            Inquiry Prepared & Saved
          </h4>
          <p className="text-sm text-[#FAF7F2]/80 max-w-md mx-auto leading-relaxed">
            Your query has been recorded. Tap the button below to start your direct WhatsApp conversation with our team:
          </p>
          {sentWhatsappUrl && (
            <div>
              <a
                href={sentWhatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 bg-[#25D366] hover:bg-[#20ba59] text-black font-semibold py-3 px-6 text-xs uppercase tracking-wider transition-[background-color,box-shadow] shadow-lg cursor-pointer"
              >
                <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                  <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2ZM12.05 20.15C10.57 20.15 9.11 19.76 7.85 19.01L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.99 3.8 13.47 3.8 11.91C3.8 7.37 7.5 3.67 12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.05 20.15ZM16.57 14.39C16.32 14.26 15.1 13.66 14.87 13.58C14.65 13.5 14.48 13.46 14.32 13.71C14.15 13.96 13.68 14.51 13.54 14.67C13.4 14.84 13.25 14.86 13 14.73C12.75 14.61 11.95 14.35 11 13.5C10.26 12.84 9.76 12.03 9.62 11.78C9.48 11.53 9.6 11.4 9.73 11.27C9.84 11.16 9.98 10.98 10.1 10.84C10.22 10.7 10.27 10.6 10.35 10.43C10.43 10.26 10.39 10.12 10.33 10C10.27 9.87 9.77 8.65 9.57 8.16C9.37 7.68 9.17 7.74 9.02 7.73C8.88 7.73 8.71 7.73 8.55 7.73C8.38 7.73 8.12 7.79 7.89 8.04C7.67 8.29 7.04 8.88 7.04 10.08C7.04 11.29 7.92 12.45 8.04 12.61C8.16 12.78 9.76 15.25 12.21 16.31C12.79 16.56 13.25 16.71 13.6 16.82C14.19 17.01 14.72 16.98 15.14 16.92C15.61 16.85 16.58 16.33 16.78 15.76C16.98 15.19 16.98 14.7 16.92 14.6C16.86 14.51 16.7 14.45 16.45 14.33L16.57 14.39Z" />
                </svg>
                <span>Open WhatsApp Chat ({siteConfig.contact.phone})</span>
              </a>
            </div>
          )}
          <div>
            <button
              onClick={() => {
                setSuccessMessage(null);
                setSentWhatsappUrl(null);
              }}
              className="mt-2 text-xs text-[#B8975A] uppercase tracking-wider underline cursor-pointer hover:text-white transition-colors"
            >
              Send another inquiry
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="honeypot"
            aria-label="Do not fill this field"
            value={formData.honeypot}
            onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
            style={{ display: "none" }}
            tabIndex={-1}
            autoComplete="off"
          />

          {errorMessage && (
            <div className="p-3 bg-red-950/60 border border-red-500/40 text-red-200 text-xs flex items-center gap-2">
              <AlertCircle size={15} className="shrink-0 text-red-400" />
              <span>{errorMessage}</span>
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="footer-contact-name" className="block text-[11px] uppercase tracking-wider text-[#FAF7F2]/70 mb-1.5 font-medium">
                Your Name <span className="text-[#B8975A]">*</span>
              </label>
              <input
                id="footer-contact-name"
                name="name"
                type="text"
                required
                aria-label="Your Name"
                placeholder="e.g. Vikramaditya Singh"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full bg-[#141414] border border-[#2A2A2A] text-sm text-[#FAF7F2] px-3.5 py-2.5 focus:outline-none focus:border-[#B8975A] transition-colors"
              />
            </div>

            <div>
              <label htmlFor="footer-contact-email" className="block text-[11px] uppercase tracking-wider text-[#FAF7F2]/70 mb-1.5 font-medium">
                Work Email <span className="text-[#B8975A]">*</span>
              </label>
              <input
                id="footer-contact-email"
                name="email"
                type="email"
                required
                aria-label="Work Email"
                placeholder="gm@heritagehotel.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full bg-[#141414] border border-[#2A2A2A] text-sm text-[#FAF7F2] px-3.5 py-2.5 focus:outline-none focus:border-[#B8975A] transition-colors"
              />
            </div>
          </div>

          <div>
            <label htmlFor="footer-contact-phone" className="block text-[11px] uppercase tracking-wider text-[#FAF7F2]/70 mb-1.5 font-medium">
              Phone / WhatsApp <span className="text-[#B8975A]">*</span>
            </label>
            <input
              id="footer-contact-phone"
              name="phone"
              type="tel"
              required
              aria-label="Phone / WhatsApp"
              placeholder={`${siteConfig.contact.phone} (10 digits)`}
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="w-full bg-[#141414] border border-[#2A2A2A] text-sm text-[#FAF7F2] px-3.5 py-2.5 focus:outline-none focus:border-[#B8975A] transition-colors"
            />
          </div>

          <div>
            <label htmlFor="footer-contact-message" className="block text-[11px] uppercase tracking-wider text-[#FAF7F2]/70 mb-1.5 font-medium">
              Message
            </label>
            <textarea
              id="footer-contact-message"
              name="message"
              rows={3}
              aria-label="Message"
              placeholder="Tell us about your property, rooms count, and current direct booking goals..."
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full bg-[#141414] border border-[#2A2A2A] text-sm text-[#FAF7F2] px-3.5 py-2.5 focus:outline-none focus:border-[#B8975A] transition-colors resize-none"
            />
          </div>

          <div className="pt-2">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-[#25D366] hover:bg-[#20ba59] text-black font-semibold py-3.5 px-6 text-xs uppercase tracking-wider flex items-center justify-center gap-2.5 transition-[background-color,box-shadow] shadow-lg hover:shadow-xl cursor-pointer disabled:opacity-50"
            >
              {isSubmitting ? (
                <span>Opening WhatsApp...</span>
              ) : (
                <>
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                    <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2ZM12.05 20.15C10.57 20.15 9.11 19.76 7.85 19.01L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.99 3.8 13.47 3.8 11.91C3.8 7.37 7.5 3.67 12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.05 20.15ZM16.57 14.39C16.32 14.26 15.1 13.66 14.87 13.58C14.65 13.5 14.48 13.46 14.32 13.71C14.15 13.96 13.68 14.51 13.54 14.67C13.4 14.84 13.25 14.86 13 14.73C12.75 14.61 11.95 14.35 11 13.5C10.26 12.84 9.76 12.03 9.62 11.78C9.48 11.53 9.6 11.4 9.73 11.27C9.84 11.16 9.98 10.98 10.1 10.84C10.22 10.7 10.27 10.6 10.35 10.43C10.43 10.26 10.39 10.12 10.33 10C10.27 9.87 9.77 8.65 9.57 8.16C9.37 7.68 9.17 7.74 9.02 7.73C8.88 7.73 8.71 7.73 8.55 7.73C8.38 7.73 8.12 7.79 7.89 8.04C7.67 8.29 7.04 8.88 7.04 10.08C7.04 11.29 7.92 12.45 8.04 12.61C8.16 12.78 9.76 15.25 12.21 16.31C12.79 16.56 13.25 16.71 13.6 16.82C14.19 17.01 14.72 16.98 15.14 16.92C15.61 16.85 16.58 16.33 16.78 15.76C16.98 15.19 16.98 14.7 16.92 14.6C16.86 14.51 16.7 14.45 16.45 14.33L16.57 14.39Z" />
                  </svg>
                  <span>Send Query via WhatsApp ({siteConfig.contact.phone})</span>
                </>
              )}
            </button>
            <p className="mt-2 text-[11px] text-[#FAF7F2]/60 text-center">
              Submitting sends your query directly to our WhatsApp support team for an instant reply.
            </p>
          </div>
        </form>
      )}
    </div>
  );
}
