"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ROOMS_DATA, RoomOption } from "./mockData";
import { Check, Users, Maximize2, Bed, ShieldCheck, ArrowRight } from "lucide-react";

interface RoomsProps {
  accentColor: string;
  hotelName: string;
  onOpenBooking: (roomId?: string) => void;
}

export default function Rooms({ accentColor, hotelName, onOpenBooking }: RoomsProps) {
  const [filter, setFilter] = useState<"all" | "suite" | "deluxe">("all");

  const filteredRooms = ROOMS_DATA.filter((room) => {
    if (filter === "suite") return room.name.toLowerCase().includes("suite") || room.name.toLowerCase().includes("pavilion");
    if (filter === "deluxe") return room.name.toLowerCase().includes("deluxe");
    return true;
  });

  return (
    <div className="max-w-[1200px] mx-auto px-6 md:px-8 pt-12 pb-24 text-left">
      {/* Header */}
      <div className="border-b border-[#E4DCCB] pb-6 mb-10 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <span
            className="eyebrow tracking-[0.2em] block mb-1"
            style={{ color: accentColor }}
          >
            {hotelName} Accommodations
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#141414] font-normal">
            Rooms &amp; Suites
          </h1>
          <p className="text-sm text-[#6B645A] mt-2">
            Spacious, comfortable rooms with premium bedding, silent air conditioning, free Wi-Fi, and complimentary breakfast.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-2">
          {(["all", "deluxe", "suite"] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setFilter(tab)}
              className={`text-xs px-3.5 py-1.5 uppercase tracking-wider font-semibold border transition-all ${
                filter === tab
                  ? "text-white"
                  : "bg-white text-[#141414] border-[#E4DCCB] hover:border-[#141414]"
              }`}
              style={{
                backgroundColor: filter === tab ? accentColor : undefined,
                borderColor: filter === tab ? accentColor : undefined,
              }}
            >
              {tab === "all" ? "All Rooms" : tab === "suite" ? "Suites & Pavilions" : "Deluxe Rooms"}
            </button>
          ))}
        </div>
      </div>

      {/* Room Cards List */}
      <div className="space-y-8">
        {filteredRooms.map((room) => (
          <div
            key={room.id}
            className="bg-white border border-[#E4DCCB] shadow-sm hover:shadow-xl transition-[box-shadow,border-color] overflow-hidden grid grid-cols-1 lg:grid-cols-12"
          >
            {/* Room Image (5 Cols) */}
            <div className="lg:col-span-5 relative min-h-[260px] sm:min-h-[320px] bg-stone-100">
              <Image
                src={room.image}
                alt={room.name}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 500px"
              />
              <div className="absolute top-4 left-4 bg-black/75 backdrop-blur-md text-white text-xs px-3 py-1 font-mono">
                {room.size}
              </div>
            </div>

            {/* Room Info (7 Cols) */}
            <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between">
              <div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                  <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-[#141414]">
                    {room.name}
                  </h2>
                  <span className="text-xs text-green-700 bg-green-50 border border-green-200 px-2.5 py-0.5 font-medium self-start sm:self-auto">
                    Direct Rate Available
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-[#2A2A2A]/85 leading-relaxed mb-6 font-normal">
                  {room.description}
                </p>

                {/* Specs */}
                <div className="grid grid-cols-3 gap-4 pb-6 mb-6 border-b border-[#FAF7F2] text-xs text-[#2A2A2A]">
                  <div className="flex items-center gap-1.5">
                    <Maximize2 size={15} style={{ color: accentColor }} />
                    <span>{room.size}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Bed size={15} style={{ color: accentColor }} />
                    <span>{room.bedType}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Users size={15} style={{ color: accentColor }} />
                    <span>Up to {room.maxGuests} Guests</span>
                  </div>
                </div>

                {/* Amenities List */}
                <div className="grid grid-cols-2 gap-2 mb-6">
                  {room.amenities.map((a) => (
                    <div key={a} className="flex items-center gap-2 text-xs text-[#6B645A]">
                      <Check size={14} style={{ color: accentColor }} className="shrink-0" />
                      <span>{a}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Price & Reserve CTA */}
              <div className="pt-6 border-t border-[#E4DCCB] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <span className="font-serif text-3xl font-bold text-[#141414]">
                    ₹{room.pricePerNight.toLocaleString()}
                  </span>
                  <span className="text-xs text-[#6B645A] ml-2">/ night (excluding taxes)</span>
                </div>

                <button
                  onClick={() => onOpenBooking(room.id)}
                  className="w-full sm:w-auto py-3 px-8 text-xs uppercase tracking-wider font-semibold text-white shadow-md hover:shadow-lg transition-[transform,box-shadow,opacity] flex items-center justify-center gap-2 cursor-pointer"
                  style={{ backgroundColor: accentColor }}
                >
                  <span>Reserve This Room</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
