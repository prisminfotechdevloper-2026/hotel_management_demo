"use client";

import React from "react";
import Image from "next/image";
import { RoomOption, ROOMS_DATA } from "./mockData";
import { ArrowLeft, Check, CheckCircle2, ShieldCheck } from "lucide-react";

interface BookingStepRoomsProps {
  nights: number;
  guestsCount: number;
  selectedRoom: RoomOption;
  accentColor: string;
  onBack: () => void;
  onSelectRoom: (room: RoomOption) => void;
}

export function BookingStepRooms({
  nights,
  guestsCount,
  selectedRoom,
  accentColor,
  onBack,
  onSelectRoom,
}: BookingStepRoomsProps) {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="font-serif text-2xl sm:text-3xl text-[#141414] font-medium mb-1">
            Choose Your Luxury Accommodation
          </h2>
          <p className="text-xs text-[#6B645A]">
            {nights} Night(s) &bull; {guestsCount} Guest(s)
          </p>
        </div>

        <button
          onClick={onBack}
          className="text-xs text-[#6B645A] hover:text-[#141414] flex items-center gap-1 cursor-pointer"
        >
          <ArrowLeft size={13} />
          Edit Dates
        </button>
      </div>

      <div className="space-y-4 max-h-[380px] overflow-y-auto pr-1">
        {ROOMS_DATA.map((room) => {
          const isCurrent = selectedRoom.id === room.id;
          return (
            <div
              key={room.id}
              className={`p-4 bg-white border flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between transition-[border-color,box-shadow] ${
                isCurrent ? "border-2 shadow-md" : "border-[#E4DCCB] hover:border-stone-400"
              }`}
              style={{ borderColor: isCurrent ? accentColor : undefined }}
            >
              <div className="relative w-full sm:w-28 h-20 shrink-0 overflow-hidden bg-[#FAF7F2]">
                <Image
                  src={room.image}
                  alt={room.name}
                  fill
                  className="object-cover"
                  sizes="112px"
                />
              </div>

              <div className="flex-1">
                <h3 className="font-serif text-lg font-semibold text-[#141414]">
                  {room.name}
                </h3>
                <p className="text-xs text-[#6B645A]">
                  {room.size} &bull; {room.bedType} &bull; Up to {room.maxGuests} guests
                </p>
                <div className="flex flex-wrap gap-1 mt-1.5">
                  {room.amenities.slice(0, 2).map((a) => (
                    <span
                      key={a}
                      className="text-[10px] bg-[#FAF7F2] text-[#2A2A2A] px-2 py-0.5 border border-[#E4DCCB]"
                    >
                      {a}
                    </span>
                  ))}
                </div>
              </div>

              <div className="text-right shrink-0 w-full sm:w-auto flex sm:flex-col items-center sm:items-end justify-between">
                <div>
                  <span className="font-serif text-xl font-bold text-[#141414]">
                    ₹{room.pricePerNight.toLocaleString()}
                  </span>
                  <span className="text-[10px] text-[#6B645A] block">/ night</span>
                </div>

                <button
                  onClick={() => onSelectRoom(room)}
                  className="mt-2 text-xs py-2 px-4 uppercase font-semibold text-white tracking-wider flex items-center gap-1.5 transition-colors cursor-pointer"
                  style={{ backgroundColor: accentColor }}
                >
                  Select Room
                  <Check size={13} />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

interface BookingStepGuestDetailsProps {
  selectedRoom: RoomOption;
  checkIn: string;
  checkOut: string;
  nights: number;
  guestsCount: number;
  grandTotal: number;
  guestName: string;
  guestEmail: string;
  guestPhone: string;
  specialRequests: string;
  errorMsg: string | null;
  accentColor: string;
  onBack: () => void;
  setGuestName: (val: string) => void;
  setGuestEmail: (val: string) => void;
  setGuestPhone: (val: string) => void;
  setSpecialRequests: (val: string) => void;
  onSubmit: (e: React.FormEvent) => void;
}

export function BookingStepGuestDetails({
  selectedRoom,
  checkIn,
  checkOut,
  nights,
  guestsCount,
  grandTotal,
  guestName,
  guestEmail,
  guestPhone,
  specialRequests,
  errorMsg,
  accentColor,
  onBack,
  setGuestName,
  setGuestEmail,
  setGuestPhone,
  setSpecialRequests,
  onSubmit,
}: BookingStepGuestDetailsProps) {
  return (
    <form onSubmit={onSubmit} className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="font-serif text-2xl sm:text-3xl text-[#141414] font-medium mb-1">
            Guest Information
          </h2>
          <p className="text-xs text-[#6B645A]">
            Step 3: Client-side reservation (No real payment or backend required).
          </p>
        </div>

        <button
          type="button"
          onClick={onBack}
          className="text-xs text-[#6B645A] hover:text-[#141414] flex items-center gap-1 cursor-pointer"
        >
          <ArrowLeft size={13} />
          Change Room
        </button>
      </div>

      {errorMsg && (
        <div className="p-3 bg-red-100 border border-red-300 text-red-800 text-xs">
          {errorMsg}
        </div>
      )}

      {/* Reservation Summary Pill */}
      <div className="bg-white border border-[#E4DCCB] p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between text-xs gap-3">
        <div>
          <span className="font-semibold text-sm font-serif block text-[#141414]">
            {selectedRoom.name}
          </span>
          <span className="text-[#6B645A]">
            {checkIn} to {checkOut} &bull; {nights} Night(s) &bull; {guestsCount} Guest(s)
          </span>
        </div>
        <div className="text-right">
          <span className="text-base font-serif font-bold text-[#141414]">
            ₹{grandTotal.toLocaleString()}
          </span>
          <span className="text-[10px] text-[#6B645A] block">Taxes included</span>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label
            htmlFor="bfm-guestName"
            className="block text-xs uppercase tracking-wider font-semibold text-[#141414] mb-1"
          >
            Primary Guest Name *
          </label>
          <input
            id="bfm-guestName"
            name="guestName"
            type="text"
            required
            aria-label="Primary Guest Name"
            placeholder="e.g. Vikramaditya Rathore"
            value={guestName}
            onChange={(e) => setGuestName(e.target.value)}
            className="w-full bg-white border border-[#E4DCCB] px-3.5 py-2 text-sm text-[#141414] focus:outline-none"
          />
        </div>

        <div>
          <label
            htmlFor="bfm-guestEmail"
            className="block text-xs uppercase tracking-wider font-semibold text-[#141414] mb-1"
          >
            Email Address *
          </label>
          <input
            id="bfm-guestEmail"
            name="guestEmail"
            type="email"
            required
            aria-label="Email Address"
            placeholder="guest@luxurytravel.in"
            value={guestEmail}
            onChange={(e) => setGuestEmail(e.target.value)}
            className="w-full bg-white border border-[#E4DCCB] px-3.5 py-2 text-sm text-[#141414] focus:outline-none"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label
            htmlFor="bfm-guestPhone"
            className="block text-xs uppercase tracking-wider font-semibold text-[#141414] mb-1"
          >
            Mobile Number *
          </label>
          <input
            id="bfm-guestPhone"
            name="guestPhone"
            type="tel"
            required
            aria-label="Mobile Number"
            placeholder="+91 90791 49299"
            value={guestPhone}
            onChange={(e) => setGuestPhone(e.target.value)}
            className="w-full bg-white border border-[#E4DCCB] px-3.5 py-2 text-sm text-[#141414] focus:outline-none"
          />
        </div>

        <div>
          <label
            htmlFor="bfm-specialRequests"
            className="block text-xs uppercase tracking-wider font-semibold text-[#141414] mb-1"
          >
            Special Requests <span className="font-normal text-[#6B645A]">(Optional)</span>
          </label>
          <input
            id="bfm-specialRequests"
            name="specialRequests"
            type="text"
            aria-label="Special Requests"
            placeholder="e.g. High floor, quiet room"
            value={specialRequests}
            onChange={(e) => setSpecialRequests(e.target.value)}
            className="w-full bg-white border border-[#E4DCCB] px-3.5 py-2 text-sm text-[#141414] focus:outline-none"
          />
        </div>
      </div>

      <div className="p-3 bg-[#FAF7F2] border border-[#E4DCCB] text-[11px] text-[#6B645A] flex items-center gap-2">
        <ShieldCheck size={16} className="text-green-700 shrink-0" />
        <span>
          Demo Mode Active: No real payments or credit cards required. Instant mock booking confirmation.
        </span>
      </div>

      <button
        type="submit"
        className="w-full py-3.5 text-xs uppercase font-semibold text-white tracking-widest transition-colors cursor-pointer"
        style={{ backgroundColor: accentColor }}
      >
        Confirm Mock Reservation
      </button>
    </form>
  );
}

interface BookingStepConfirmationProps {
  confirmationId: string;
  guestName: string;
  hotelName: string;
  selectedRoom: RoomOption;
  checkIn: string;
  checkOut: string;
  nights: number;
  grandTotal: number;
  accentColor: string;
  onClose: () => void;
}

export function BookingStepConfirmation({
  confirmationId,
  guestName,
  hotelName,
  selectedRoom,
  checkIn,
  checkOut,
  nights,
  grandTotal,
  accentColor,
  onClose,
}: BookingStepConfirmationProps) {
  return (
    <div className="text-center py-8 px-4">
      <div className="w-16 h-16 bg-green-100 border border-green-400 rounded-full flex items-center justify-center text-green-700 mx-auto mb-4">
        <CheckCircle2 size={36} />
      </div>

      <span
        className="text-xs uppercase tracking-widest font-semibold block mb-1"
        style={{ color: accentColor }}
      >
        Reservation Confirmed
      </span>

      <h2 className="font-serif text-3xl sm:text-4xl text-[#141414] font-medium mb-2">
        Booking Voucher #{confirmationId}
      </h2>

      <p className="text-xs text-[#6B645A] max-w-md mx-auto mb-6">
        Thank you, <strong>{guestName}</strong>. Your direct reservation for {selectedRoom.name} at {hotelName} is confirmed!
      </p>

      <div className="max-w-md mx-auto bg-white border border-[#E4DCCB] p-5 text-left text-xs space-y-2 mb-8">
        <div className="flex justify-between border-b border-[#FAF7F2] pb-1.5">
          <span className="text-[#6B645A]">Dates:</span>
          <span className="font-semibold">{checkIn} to {checkOut} ({nights} nights)</span>
        </div>
        <div className="flex justify-between border-b border-[#FAF7F2] pb-1.5">
          <span className="text-[#6B645A]">Room:</span>
          <span className="font-semibold">{selectedRoom.name}</span>
        </div>
        <div className="flex justify-between border-b border-[#FAF7F2] pb-1.5">
          <span className="text-[#6B645A]">Total Cost:</span>
          <span className="font-semibold text-sm">₹{grandTotal.toLocaleString()}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-[#6B645A]">Channel:</span>
          <span className="font-semibold text-green-700">Direct Hotel Engine (0% OTA Fee)</span>
        </div>
      </div>

      <button
        onClick={onClose}
        className="btn-gold py-3 px-8 text-xs uppercase tracking-widest cursor-pointer"
        style={{ backgroundColor: accentColor, borderColor: accentColor, color: "#FFFFFF" }}
      >
        Done &bull; Return to Demo
      </button>
    </div>
  );
}
