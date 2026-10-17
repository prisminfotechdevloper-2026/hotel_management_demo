"use client";

import React, { useState, useEffect } from "react";
import { HotelType, getRoomsForType, RoomOption } from "./mockData";
import { X, ArrowRight } from "lucide-react";
import {
  BookingStepRooms,
  BookingStepGuestDetails,
  BookingStepConfirmation,
} from "./BookingSteps";

interface BookingFlowModalProps {
  isOpen: boolean;
  onClose: () => void;
  accentColor?: string;
  initialRoomId?: string;
  initialCheckIn?: string;
  initialCheckOut?: string;
  hotelName: string;
  hotelType?: HotelType;
}

export default function BookingFlowModal({
  isOpen,
  onClose,
  initialRoomId,
  initialCheckIn,
  initialCheckOut,
  hotelName,
  hotelType = "heritage",
}: BookingFlowModalProps) {
  const rooms = getRoomsForType(hotelType);

  const [step, setStep] = useState<1 | 2 | 3 | 4>(1);

  // Step 1: Dates & Guests
  const [checkIn, setCheckIn] = useState(initialCheckIn || "2026-10-24");
  const [checkOut, setCheckOut] = useState(initialCheckOut || "2026-10-27");
  const [guestsCount, setGuestsCount] = useState(2);

  // Step 2: Selected Room (Lazy initializer)
  const [selectedRoom, setSelectedRoom] = useState<RoomOption>(() => {
    return rooms.find((r) => r.id === initialRoomId) || rooms[0];
  });

  useEffect(() => {
    if (isOpen) {
      if (initialCheckIn) setCheckIn(initialCheckIn);
      if (initialCheckOut) setCheckOut(initialCheckOut);
      if (initialRoomId) {
        const found = rooms.find((r) => r.id === initialRoomId);
        if (found) setSelectedRoom(found);
      } else {
        setSelectedRoom(rooms[0]);
      }
      setStep(1);
    }
  }, [isOpen, initialRoomId, initialCheckIn, initialCheckOut, hotelType, rooms]);

  // Step 3: Guest Contact & Billing info
  const [guestName, setGuestName] = useState("");
  const [guestEmail, setGuestEmail] = useState("");
  const [guestPhone, setGuestPhone] = useState("");
  const [specialRequests, setSpecialRequests] = useState("");
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  // Step 4: Confirmed Mock Reservation ID
  const [confirmationId, setConfirmationId] = useState("");

  if (!isOpen) return null;

  // Nights calculation
  const start = new Date(checkIn);
  const end = new Date(checkOut);
  const diffTime = Math.abs(end.getTime() - start.getTime());
  const nights = Math.max(1, Math.ceil(diffTime / (1000 * 60 * 60 * 24)) || 1);

  const roomTotal = selectedRoom.pricePerNight * nights;
  const taxes = Math.round(roomTotal * 0.12);
  const grandTotal = roomTotal + taxes;

  const handleNextStep1 = () => {
    if (!checkIn || !checkOut) {
      alert("Please select both check-in and check-out dates.");
      return;
    }
    setStep(2);
  };

  const handleNextStep2 = (room: RoomOption) => {
    setSelectedRoom(room);
    setStep(3);
  };

  const handleConfirmReservation = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);

    if (!guestName.trim()) {
      setErrorMsg("Please enter the primary guest name.");
      return;
    }
    if (!guestEmail.trim() || !guestEmail.includes("@")) {
      setErrorMsg("Please provide a valid email address.");
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
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-sm p-4 sm:p-6 md:p-8 flex items-center justify-center">
      {/* Modal Dialog */}
      <div className="relative w-full max-w-4xl bg-white border border-neutral-200 shadow-2xl p-6 sm:p-8 md:p-9 my-auto z-10 text-[#111111]">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-1.5 text-neutral-400 hover:text-black hover:bg-neutral-100 transition-colors cursor-pointer"
          aria-label="Close booking modal"
        >
          <X size={22} />
        </button>

        {/* Modal Header */}
        <div className="mb-6 border-b border-neutral-200 pb-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[11px] uppercase tracking-[0.2em] font-semibold text-neutral-600">
              {hotelName} • Direct Reservation Engine
            </span>
            <span className="text-xs font-mono text-neutral-500">
              Step {step} of 4
            </span>
          </div>

          {/* Stepper Progress bar */}
          <div className="w-full h-1.5 bg-neutral-200 rounded-full overflow-hidden flex">
            <div
              className="h-full bg-[#0F2744] transition-[width] duration-300"
              style={{
                width: `${(step / 4) * 100}%`,
              }}
            />
          </div>
        </div>

        {/* STEP 1: Dates & Guests */}
        {step === 1 && (
          <div className="space-y-6">
            <div>
              <h2 className="font-serif text-2xl sm:text-3xl text-[#111111] font-medium mb-1.5">
                Select Stay Dates &amp; Guests
              </h2>
              <p className="text-xs text-neutral-600">
                Guaranteed direct hotel rate • Instant room reservation confirmation.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="bfm-step1-checkIn"
                  className="block text-xs uppercase tracking-wider font-semibold text-[#111111] mb-1"
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
                    className="w-full bg-white border border-neutral-300 px-3.5 py-2.5 text-sm text-[#111111] focus:outline-none focus:border-black"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="bfm-step1-checkOut"
                  className="block text-xs uppercase tracking-wider font-semibold text-[#111111] mb-1"
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
                    className="w-full bg-white border border-neutral-300 px-3.5 py-2.5 text-sm text-[#111111] focus:outline-none focus:border-black"
                  />
                </div>
              </div>
            </div>

            <div>
              <span className="block text-xs uppercase tracking-wider font-semibold text-[#111111] mb-1">
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
                        ? "bg-[#0F2744] text-white border-[#2B4C7E]"
                        : "bg-white text-[#111111] border-neutral-300 hover:border-black"
                    }`}
                  >
                    {count} {count === 1 ? "Guest" : "Guests"}
                  </button>
                ))}
              </div>
            </div>

            <div className="p-4 bg-neutral-50 border border-neutral-200 flex items-center justify-between">
              <div className="text-xs text-neutral-800">
                <span className="font-semibold block">{nights} Night(s) Stay</span>
                <span className="text-neutral-500">Exclusive Direct Booking Perks Included</span>
              </div>
              <button
                onClick={handleNextStep1}
                className="btn-navy flex items-center gap-2 py-2.5 px-6 cursor-pointer text-white font-semibold text-xs uppercase tracking-wider"
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
            rooms={rooms}
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
            onClose={onClose}
          />
        )}
      </div>
    </div>
  );
}
