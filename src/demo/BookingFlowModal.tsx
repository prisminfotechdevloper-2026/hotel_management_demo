"use client";

import React, { useState, useEffect } from "react";
import { ROOMS_DATA, RoomOption } from "./mockData";
import { X, ArrowRight } from "lucide-react";
import {
  BookingStepRooms,
  BookingStepGuestDetails,
  BookingStepConfirmation,
} from "./BookingSteps";

interface BookingFlowModalProps {
  isOpen: boolean;
  onClose: () => void;
  accentColor: string;
  initialRoomId?: string;
  initialCheckIn?: string;
  initialCheckOut?: string;
  hotelName: string;
}

export default function BookingFlowModal({
  isOpen,
  onClose,
  accentColor,
  initialRoomId,
  initialCheckIn,
  initialCheckOut,
  hotelName,
}: BookingFlowModalProps) {
  const [step, setStep] = useState<1 | 2 | 3 | 4>(1);

  // Step 1: Dates & Guests
  const [checkIn, setCheckIn] = useState(initialCheckIn || "2026-10-24");
  const [checkOut, setCheckOut] = useState(initialCheckOut || "2026-10-27");
  const [guestsCount, setGuestsCount] = useState(2);

  // Step 2: Selected Room (Lazy initializer)
  const [selectedRoom, setSelectedRoom] = useState<RoomOption>(() => {
    return ROOMS_DATA.find((r) => r.id === initialRoomId) || ROOMS_DATA[0];
  });

  useEffect(() => {
    if (isOpen) {
      if (initialCheckIn) setCheckIn(initialCheckIn);
      if (initialCheckOut) setCheckOut(initialCheckOut);
      if (initialRoomId) {
        const found = ROOMS_DATA.find((r) => r.id === initialRoomId);
        if (found) setSelectedRoom(found);
      }
      setStep(initialRoomId ? 2 : 1);
      setErrorMsg(null);
    }
  }, [isOpen, initialCheckIn, initialCheckOut, initialRoomId]);

  // Step 3: Guest details
  const [guestName, setGuestName] = useState("");
  const [guestEmail, setGuestEmail] = useState("");
  const [guestPhone, setGuestPhone] = useState("");
  const [specialRequests, setSpecialRequests] = useState("");
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  // Step 4 Confirmation data
  const [confirmationId, setConfirmationId] = useState("");

  if (!isOpen) return null;

  const calculateNights = () => {
    const start = new Date(checkIn);
    const end = new Date(checkOut);
    const diff = (end.getTime() - start.getTime()) / (1000 * 3600 * 24);
    return diff > 0 ? diff : 1;
  };

  const nights = calculateNights();
  const subtotal = selectedRoom.pricePerNight * nights;
  const taxes = Math.round(subtotal * 0.18);
  const grandTotal = subtotal + taxes;

  const handleNextStep1 = () => {
    setStep(2);
  };

  const handleNextStep2 = (room: RoomOption) => {
    setSelectedRoom(room);
    setStep(3);
  };

  const handleConfirmReservation = (e: React.FormEvent) => {
    e.preventDefault();
    if (!guestName.trim()) {
      setErrorMsg("Please enter guest name.");
      return;
    }
    if (!guestEmail.trim() || !guestEmail.includes("@")) {
      setErrorMsg("Please enter a valid guest email.");
      return;
    }
    if (!guestPhone.trim() || guestPhone.length < 10) {
      setErrorMsg("Please enter a valid 10-digit mobile number.");
      return;
    }

    const mockId = "AUR-" + Math.floor(100000 + Math.random() * 900000);
    setConfirmationId(mockId);
    setStep(4);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-[#141414]/85 backdrop-blur-sm p-4 sm:p-6 md:p-8 flex items-center justify-center">
      {/* Modal Dialog */}
      <div className="relative w-full max-w-4xl bg-[#FAF7F2] border border-[#E4DCCB] shadow-2xl p-6 sm:p-8 md:p-9 my-auto z-10 text-[#141414]">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-1.5 text-[#141414]/60 hover:text-[#141414] hover:bg-[#E4DCCB]/40 transition-colors cursor-pointer"
          aria-label="Close booking modal"
        >
          <X size={22} />
        </button>

        {/* Modal Header */}
        <div className="mb-6 border-b border-[#E4DCCB] pb-4">
          <div className="flex items-center justify-between mb-2">
            <span
              className="text-[11px] uppercase tracking-[0.2em] font-semibold"
              style={{ color: accentColor }}
            >
              {hotelName} • Direct Reservation Engine
            </span>
            <span className="text-xs font-mono text-[#6B645A]">
              Step {step} of 4
            </span>
          </div>

          {/* Stepper Progress bar */}
          <div className="w-full h-1.5 bg-[#E4DCCB] rounded-full overflow-hidden flex">
            <div
              className="h-full transition-[width] duration-300"
              style={{
                width: `${(step / 4) * 100}%`,
                backgroundColor: accentColor,
              }}
            />
          </div>
        </div>

        {/* STEP 1: Dates & Guests */}
        {step === 1 && (
          <div className="space-y-6">
            <div>
              <h2 className="font-serif text-2xl sm:text-3xl text-[#141414] font-medium mb-1.5">
                Select Stay Dates & Guests
              </h2>
              <p className="text-xs text-[#6B645A]">
                Guaranteed direct hotel rate • Instant room reservation confirmation.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="bfm-step1-checkIn"
                  className="block text-xs uppercase tracking-wider font-semibold text-[#141414] mb-1"
                >
                  Check-in Date
                </label>
                <div className="relative">
                  <input
                    id="bfm-step1-checkIn"
                    name="checkIn"
                    type="date"
                    aria-label="Check-in Date"
                    value={checkIn}
                    onChange={(e) => setCheckIn(e.target.value)}
                    className="w-full bg-white border border-[#E4DCCB] px-3.5 py-2.5 text-sm text-[#141414] focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="bfm-step1-checkOut"
                  className="block text-xs uppercase tracking-wider font-semibold text-[#141414] mb-1"
                >
                  Check-out Date
                </label>
                <div className="relative">
                  <input
                    id="bfm-step1-checkOut"
                    name="checkOut"
                    type="date"
                    aria-label="Check-out Date"
                    value={checkOut}
                    onChange={(e) => setCheckOut(e.target.value)}
                    className="w-full bg-white border border-[#E4DCCB] px-3.5 py-2.5 text-sm text-[#141414] focus:outline-none"
                  />
                </div>
              </div>
            </div>

            <div>
              <span className="block text-xs uppercase tracking-wider font-semibold text-[#141414] mb-1">
                Number of Guests
              </span>
              <div className="flex items-center gap-3">
                {[1, 2, 3, 4].map((count) => (
                  <button
                    key={count}
                    type="button"
                    onClick={() => setGuestsCount(count)}
                    aria-pressed={guestsCount === count}
                    className={`flex-1 py-2 text-xs font-semibold uppercase tracking-wider border transition-colors cursor-pointer ${
                      guestsCount === count
                        ? "text-white"
                        : "bg-white text-[#141414] border-[#E4DCCB] hover:border-[#141414]"
                    }`}
                    style={{
                      backgroundColor: guestsCount === count ? accentColor : undefined,
                      borderColor: guestsCount === count ? accentColor : undefined,
                    }}
                  >
                    {count} {count === 1 ? "Guest" : "Guests"}
                  </button>
                ))}
              </div>
            </div>

            <div className="p-4 bg-white border border-[#E4DCCB] flex items-center justify-between">
              <div className="text-xs text-[#2A2A2A]">
                <span className="font-semibold block">{nights} Night(s) Stay</span>
                <span className="text-[#6B645A]">Exclusive Direct Booking Perks Included</span>
              </div>
              <button
                onClick={handleNextStep1}
                className="btn-gold flex items-center gap-2 py-2.5 px-6 cursor-pointer"
                style={{ backgroundColor: accentColor, borderColor: accentColor, color: "#FFFFFF" }}
              >
                <span>Choose Room</span>
                <ArrowRight size={14} />
              </button>
            </div>
          </div>
        )}

        {/* STEP 2: Room Choice */}
        {step === 2 && (
          <BookingStepRooms
            nights={nights}
            guestsCount={guestsCount}
            selectedRoom={selectedRoom}
            accentColor={accentColor}
            onBack={() => setStep(1)}
            onSelectRoom={handleNextStep2}
          />
        )}

        {/* STEP 3: Guest Details & Summary */}
        {step === 3 && (
          <BookingStepGuestDetails
            selectedRoom={selectedRoom}
            checkIn={checkIn}
            checkOut={checkOut}
            nights={nights}
            guestsCount={guestsCount}
            grandTotal={grandTotal}
            guestName={guestName}
            guestEmail={guestEmail}
            guestPhone={guestPhone}
            specialRequests={specialRequests}
            errorMsg={errorMsg}
            accentColor={accentColor}
            onBack={() => setStep(2)}
            setGuestName={setGuestName}
            setGuestEmail={setGuestEmail}
            setGuestPhone={setGuestPhone}
            setSpecialRequests={setSpecialRequests}
            onSubmit={handleConfirmReservation}
          />
        )}

        {/* STEP 4: Confirmation Screen */}
        {step === 4 && (
          <BookingStepConfirmation
            confirmationId={confirmationId}
            guestName={guestName}
            hotelName={hotelName}
            selectedRoom={selectedRoom}
            checkIn={checkIn}
            checkOut={checkOut}
            nights={nights}
            grandTotal={grandTotal}
            accentColor={accentColor}
            onClose={onClose}
          />
        )}
      </div>
    </div>
  );
}
