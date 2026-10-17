"use client";

import React, { useState } from "react";
import ThemeSwitcher from "@/demo/ThemeSwitcher";
import HotelHome from "@/demo/HotelHome";
import Rooms from "@/demo/Rooms";
import AdminSnapshot from "@/demo/AdminSnapshot";
import BookingFlowModal from "@/demo/BookingFlowModal";
import BookDemoModal from "@/components/BookDemoModal";
import { HotelType, HOTEL_PRESETS } from "@/demo/mockData";

export default function DemoPage() {
  const [currentType, setCurrentType] = useState<HotelType>("heritage");
  const [activeTab, setActiveTab] = useState<"home" | "rooms" | "admin">("home");

  // Booking Flow Modal State
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedRoomId, setSelectedRoomId] = useState<string | undefined>(undefined);
  const [bookingDates, setBookingDates] = useState<{ checkIn?: string; checkOut?: string }>({});

  // Agency Lead Demo Modal State
  const [isBookDemoOpen, setIsBookDemoOpen] = useState(false);

  // Dynamic Brand Accent based on Selected Property Preset
  const activePreset = HOTEL_PRESETS[currentType];
  const currentAccent = activePreset.defaultAccent || "#B8975A";

  const handleTypeChange = (type: HotelType) => {
    setCurrentType(type);
  };

  const handleOpenBooking = (options?: { roomId?: string; checkIn?: string; checkOut?: string } | string) => {
    if (typeof options === "string") {
      setSelectedRoomId(options);
    } else if (options) {
      setSelectedRoomId(options.roomId);
      if (options.checkIn && options.checkOut) {
        setBookingDates({ checkIn: options.checkIn, checkOut: options.checkOut });
      }
    } else {
      setSelectedRoomId(undefined);
    }
    setIsBookingOpen(true);
  };

  const sharedSwitcher = (
    <ThemeSwitcher
      currentType={currentType}
      onChangeType={handleTypeChange}
      activeTab={activeTab}
      onChangeTab={setActiveTab}
      onOpenBookDemo={() => setIsBookDemoOpen(true)}
    />
  );

  return (
    <main className="min-h-screen bg-[#FAF7F2] text-[#2A2A2A] relative">
      {/* 1. When on Hotel Home: Hero comes first at top, Switcher Bar sits directly after Hero */}
      {activeTab === "home" && (
        <HotelHome
          preset={activePreset}
          accentColor={currentAccent}
          onOpenBooking={handleOpenBooking}
          onViewRooms={() => setActiveTab("rooms")}
          switcherSlot={sharedSwitcher}
        />
      )}

      {/* 2. When on Rooms Tab: Switcher Bar at top, followed by Rooms catalog */}
      {activeTab === "rooms" && (
        <>
          {sharedSwitcher}
          <Rooms
            accentColor={currentAccent}
            hotelName={activePreset.name}
            onOpenBooking={handleOpenBooking}
          />
        </>
      )}

      {/* 3. When on Admin Tab: Switcher Bar at top, followed by Admin Snapshot */}
      {activeTab === "admin" && (
        <>
          {sharedSwitcher}
          <AdminSnapshot
            accentColor={currentAccent}
            hotelName={activePreset.name}
          />
        </>
      )}

      {/* 4. Interactive 4-Step Client-Side Direct Booking Flow */}
      <BookingFlowModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        accentColor={currentAccent}
        initialRoomId={selectedRoomId}
        initialCheckIn={bookingDates.checkIn}
        initialCheckOut={bookingDates.checkOut}
        hotelName={activePreset.name}
      />

      {/* 5. Agency Book a Demo Lead Modal */}
      <BookDemoModal
        isOpen={isBookDemoOpen}
        onClose={() => setIsBookDemoOpen(false)}
      />
    </main>
  );
}
