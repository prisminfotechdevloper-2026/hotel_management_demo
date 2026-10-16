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

  // Agency Lead Demo Modal State
  const [isBookDemoOpen, setIsBookDemoOpen] = useState(false);

  // Locked Luxury Gold Accent (#B8975A)
  const luxuryGoldAccent = "#B8975A";
  const activePreset = HOTEL_PRESETS[currentType];

  const handleTypeChange = (type: HotelType) => {
    setCurrentType(type);
  };

  const handleOpenBooking = (roomId?: string) => {
    setSelectedRoomId(roomId);
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
          accentColor={luxuryGoldAccent}
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
            accentColor={luxuryGoldAccent}
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
            accentColor={luxuryGoldAccent}
            hotelName={activePreset.name}
          />
        </>
      )}

      {/* 4. Interactive 4-Step Client-Side Direct Booking Flow */}
      <BookingFlowModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        accentColor={luxuryGoldAccent}
        initialRoomId={selectedRoomId}
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
