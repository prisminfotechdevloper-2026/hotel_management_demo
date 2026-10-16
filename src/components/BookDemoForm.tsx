"use client";

import React, { useState } from "react";
import { submitLead, LeadPayload } from "@/lib/submitLead";
import { AlertCircle, ArrowRight } from "lucide-react";

const ROOM_OPTIONS = ["1-15", "16-40", "41-80", "80+"];
const NEED_OPTIONS = [
  "Direct Booking Engine",
  "Luxury Hotel Website",
  "OTA Commission Reduction",
  "Automated WhatsApp Confirmations",
  "Staff PMS Integration",
];
const TIME_SLOTS = [
  "10:00 AM - 12:00 PM IST",
  "02:00 PM - 04:00 PM IST",
  "04:00 PM - 06:00 PM IST",
  "07:00 PM - 09:00 PM IST",
];

interface ContactColumnProps {
  idPrefix: string;
  fullName: string;
  workEmail: string;
  city: string;
  rooms: string;
  onChange: (field: string, value: string) => void;
}

function ContactColumn({
  idPrefix,
  fullName,
  workEmail,
  city,
  rooms,
  onChange,
}: ContactColumnProps) {
  return (
    <div className="space-y-3.5">
      <div>
        <label
          htmlFor={`${idPrefix}-fullName`}
          className="block text-[11px] uppercase tracking-wider text-[#141414] font-semibold mb-1"
        >
          Full Name <span className="text-[#B8975A]">*</span>
        </label>
        <input
          id={`${idPrefix}-fullName`}
          name="fullName"
          type="text"
          required
          aria-label="Full Name"
          placeholder="e.g. Vikramaditya Singh"
          value={fullName}
          onChange={(e) => onChange("fullName", e.target.value)}
          className="w-full bg-[#FFFFFF] border border-[#E4DCCB] text-xs sm:text-sm text-[#141414] px-3.5 py-2 focus:outline-none focus:border-[#B8975A]"
        />
      </div>

      <div>
        <label
          htmlFor={`${idPrefix}-workEmail`}
          className="block text-[11px] uppercase tracking-wider text-[#141414] font-semibold mb-1"
        >
          Work Email <span className="text-[#B8975A]">*</span>
        </label>
        <input
          id={`${idPrefix}-workEmail`}
          name="workEmail"
          type="email"
          required
          aria-label="Work Email"
          placeholder="gm@heritagepalace.in"
          value={workEmail}
          onChange={(e) => onChange("workEmail", e.target.value)}
          className="w-full bg-[#FFFFFF] border border-[#E4DCCB] text-xs sm:text-sm text-[#141414] px-3.5 py-2 focus:outline-none focus:border-[#B8975A]"
        />
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div>
          <label
            htmlFor={`${idPrefix}-city`}
            className="block text-[11px] uppercase tracking-wider text-[#141414] font-semibold mb-1"
          >
            City <span className="text-[#6B645A] font-normal">(Opt)</span>
          </label>
          <input
            id={`${idPrefix}-city`}
            name="city"
            type="text"
            aria-label="City"
            placeholder="e.g. Jaipur"
            value={city}
            onChange={(e) => onChange("city", e.target.value)}
            className="w-full bg-[#FFFFFF] border border-[#E4DCCB] text-xs sm:text-sm text-[#141414] px-3 py-2 focus:outline-none focus:border-[#B8975A]"
          />
        </div>

        <div>
          <label
            htmlFor={`${idPrefix}-rooms`}
            className="block text-[11px] uppercase tracking-wider text-[#141414] font-semibold mb-1"
          >
            Rooms Count
          </label>
          <select
            id={`${idPrefix}-rooms`}
            name="rooms"
            aria-label="Rooms Count"
            value={rooms}
            onChange={(e) => onChange("rooms", e.target.value)}
            className="w-full bg-[#FFFFFF] border border-[#E4DCCB] text-xs sm:text-sm text-[#141414] px-3 py-2 focus:outline-none focus:border-[#B8975A]"
          >
            {ROOM_OPTIONS.map((opt) => (
              <option key={opt} value={opt}>
                {opt} rooms
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}

interface PropertyColumnProps {
  idPrefix: string;
  hotelName: string;
  phone: string;
  preferredDate: string;
  preferredTimeSlot: string;
  onChange: (field: string, value: string) => void;
}

function PropertyColumn({
  idPrefix,
  hotelName,
  phone,
  preferredDate,
  preferredTimeSlot,
  onChange,
}: PropertyColumnProps) {
  return (
    <div className="space-y-3.5">
      <div>
        <label
          htmlFor={`${idPrefix}-hotelName`}
          className="block text-[11px] uppercase tracking-wider text-[#141414] font-semibold mb-1"
        >
          Hotel Name <span className="text-[#B8975A]">*</span>
        </label>
        <input
          id={`${idPrefix}-hotelName`}
          name="hotelName"
          type="text"
          required
          aria-label="Hotel Name"
          placeholder="e.g. Amber Vilas Palace Resort"
          value={hotelName}
          onChange={(e) => onChange("hotelName", e.target.value)}
          className="w-full bg-[#FFFFFF] border border-[#E4DCCB] text-xs sm:text-sm text-[#141414] px-3.5 py-2 focus:outline-none focus:border-[#B8975A]"
        />
      </div>

      <div>
        <label
          htmlFor={`${idPrefix}-phone`}
          className="block text-[11px] uppercase tracking-wider text-[#141414] font-semibold mb-1"
        >
          Phone / WhatsApp <span className="text-[#B8975A]">*</span>
        </label>
        <input
          id={`${idPrefix}-phone`}
          name="phone"
          type="tel"
          required
          aria-label="Phone / WhatsApp"
          placeholder="+91 90791 49299 (10 digits)"
          value={phone}
          onChange={(e) => onChange("phone", e.target.value)}
          className="w-full bg-[#FFFFFF] border border-[#E4DCCB] text-xs sm:text-sm text-[#141414] px-3.5 py-2 focus:outline-none focus:border-[#B8975A]"
        />
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div>
          <label
            htmlFor={`${idPrefix}-preferredDate`}
            className="block text-[11px] uppercase tracking-wider text-[#141414] font-semibold mb-1"
          >
            Preferred Date
          </label>
          <input
            id={`${idPrefix}-preferredDate`}
            name="preferredDate"
            type="date"
            aria-label="Preferred Date"
            value={preferredDate}
            onChange={(e) => onChange("preferredDate", e.target.value)}
            className="w-full bg-[#FFFFFF] border border-[#E4DCCB] text-xs sm:text-sm text-[#141414] px-3 py-1.5 focus:outline-none focus:border-[#B8975A]"
          />
        </div>

        <div>
          <label
            htmlFor={`${idPrefix}-preferredTimeSlot`}
            className="block text-[11px] uppercase tracking-wider text-[#141414] font-semibold mb-1"
          >
            Preferred Slot
          </label>
          <select
            id={`${idPrefix}-preferredTimeSlot`}
            name="preferredTimeSlot"
            aria-label="Preferred Slot"
            value={preferredTimeSlot}
            onChange={(e) => onChange("preferredTimeSlot", e.target.value)}
            className="w-full bg-[#FFFFFF] border border-[#E4DCCB] text-xs sm:text-sm text-[#141414] px-3 py-2 focus:outline-none focus:border-[#B8975A]"
          >
            {TIME_SLOTS.map((slot) => (
              <option key={slot} value={slot}>
                {slot}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}

interface NeedChipsProps {
  needs: string[];
  onToggle: (need: string) => void;
}

function NeedChips({ needs, onToggle }: NeedChipsProps) {
  return (
    <div className="pt-1">
      <span className="block text-[11px] uppercase tracking-wider text-[#141414] font-semibold mb-1.5">
        What do you need?
      </span>
      <div className="flex flex-wrap gap-2">
        {NEED_OPTIONS.map((option) => {
          const isSelected = needs.includes(option);
          return (
            <button
              type="button"
              key={option}
              onClick={() => onToggle(option)}
              aria-pressed={isSelected}
              className={`text-xs px-3 py-1 transition-[background-color,border-color,color] cursor-pointer ${
                isSelected
                  ? "bg-[#B8975A] text-[#141414] font-semibold border border-[#9A7B43]"
                  : "bg-[#FFFFFF] text-[#2A2A2A] border border-[#E4DCCB] hover:border-[#B8975A]"
              }`}
            >
              {option}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export interface BookDemoFormProps {
  idPrefix: string;
  onSuccess: (data: {
    fullName: string;
    hotelName: string;
    whatsappUrl: string;
  }) => void;
}

export default function BookDemoForm({ idPrefix, onSuccess }: BookDemoFormProps) {
  const [formData, setFormData] = useState({
    fullName: "",
    hotelName: "",
    workEmail: "",
    phone: "",
    city: "",
    rooms: "16-40",
    needs: ["Direct Booking Engine", "Luxury Hotel Website"],
    preferredDate: "2026-10-20",
    preferredTimeSlot: "02:00 PM - 04:00 PM IST",
    message: "",
    honeypot: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleFieldChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const toggleNeed = (need: string) => {
    setFormData((prev) => {
      const exists = prev.needs.includes(need);
      return {
        ...prev,
        needs: exists ? prev.needs.filter((n) => n !== need) : [...prev.needs, need],
      };
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!formData.fullName.trim()) {
      setError("Full name is required.");
      return;
    }
    if (!formData.hotelName.trim()) {
      setError("Hotel name is required.");
      return;
    }
    if (!formData.workEmail.trim() || !formData.workEmail.includes("@")) {
      setError("Please provide a valid work email.");
      return;
    }
    const cleanPhone = formData.phone.replace(/\D/g, "");
    if (cleanPhone.length < 10) {
      setError("Please enter a valid 10-digit phone number for India.");
      return;
    }

    setIsSubmitting(true);

    const whatsappLines = [
      "Hello Prism Hotel Management,",
      "",
      "I have requested a Personalized Demo for my property:",
      `• Name: ${formData.fullName.trim()}`,
      `• Hotel: ${formData.hotelName.trim()}`,
      `• Phone: ${formData.phone.trim()}`,
      `• Email: ${formData.workEmail.trim()}`,
      `• Rooms: ${formData.rooms || "N/A"}`,
      `• City: ${formData.city.trim() || "N/A"}`,
      `• Needs: ${formData.needs.length ? formData.needs.join(", ") : "Direct Booking Engine & Website"}`,
      `• Preferred Date: ${formData.preferredDate} (${formData.preferredTimeSlot})`,
    ];
    if (formData.message.trim()) {
      whatsappLines.push(`• Notes: ${formData.message.trim()}`);
    }

    const whatsappText = whatsappLines.join("\n");
    const demoWhatsappUrl = `https://wa.me/919079149299?text=${encodeURIComponent(whatsappText)}`;

    try {
      const payload: LeadPayload = {
        fullName: formData.fullName,
        hotelName: formData.hotelName,
        workEmail: formData.workEmail,
        phone: formData.phone,
        city: formData.city,
        rooms: formData.rooms,
        needs: formData.needs,
        preferredTime: `${formData.preferredDate} (${formData.preferredTimeSlot})`,
        message: formData.message,
        honeypot: formData.honeypot,
      };

      await submitLead(payload);

      if (typeof window !== "undefined") {
        window.open(demoWhatsappUrl, "_blank", "noopener,noreferrer");
      }

      onSuccess({
        fullName: formData.fullName,
        hotelName: formData.hotelName,
        whatsappUrl: demoWhatsappUrl,
      });
    } catch {
      if (typeof window !== "undefined") {
        window.open(demoWhatsappUrl, "_blank", "noopener,noreferrer");
      }
      onSuccess({
        fullName: formData.fullName,
        hotelName: formData.hotelName,
        whatsappUrl: demoWhatsappUrl,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        name="honeypot"
        aria-label="Spam protection field"
        value={formData.honeypot}
        onChange={(e) => handleFieldChange("honeypot", e.target.value)}
        style={{ display: "none" }}
        tabIndex={-1}
        autoComplete="off"
      />

      {error && (
        <div className="p-3 bg-red-100 border border-red-300 text-red-800 text-xs flex items-center gap-2">
          <AlertCircle size={15} className="shrink-0 text-red-600" />
          <span>{error}</span>
        </div>
      )}

      {/* Two-Column Grid for Form Fields */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-3.5">
        <ContactColumn
          idPrefix={idPrefix}
          fullName={formData.fullName}
          workEmail={formData.workEmail}
          city={formData.city}
          rooms={formData.rooms}
          onChange={handleFieldChange}
        />
        <PropertyColumn
          idPrefix={idPrefix}
          hotelName={formData.hotelName}
          phone={formData.phone}
          preferredDate={formData.preferredDate}
          preferredTimeSlot={formData.preferredTimeSlot}
          onChange={handleFieldChange}
        />
      </div>

      <NeedChips needs={formData.needs} onToggle={toggleNeed} />

      {/* Message (Optional) */}
      <div>
        <label
          htmlFor={`${idPrefix}-message`}
          className="block text-[11px] uppercase tracking-wider text-[#141414] font-semibold mb-1"
        >
          Specific Requirements <span className="text-[#6B645A] font-normal">(Optional)</span>
        </label>
        <textarea
          id={`${idPrefix}-message`}
          name="message"
          rows={2}
          aria-label="Specific Requirements"
          placeholder="e.g. Current occupancy rates, direct booking goals, target launch timeline..."
          value={formData.message}
          onChange={(e) => handleFieldChange("message", e.target.value)}
          className="w-full bg-[#FFFFFF] border border-[#E4DCCB] text-xs sm:text-sm text-[#141414] px-3 py-2 focus:outline-none focus:border-[#B8975A] resize-none"
        />
      </div>

      <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-[#E4DCCB]">
        <div className="text-[11px] text-[#6B645A]">
          Direct response within 24 hours &bull; 100% Confidential
        </div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="btn-gold w-full sm:w-auto flex items-center justify-center gap-2 text-xs py-3 px-7 cursor-pointer disabled:opacity-50"
        >
          {isSubmitting ? (
            <span>Confirming...</span>
          ) : (
            <>
              <span>Schedule Walkthrough</span>
              <ArrowRight size={14} />
            </>
          )}
        </button>
      </div>
    </form>
  );
}
