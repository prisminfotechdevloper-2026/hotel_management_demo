"use client";

import React, { useState } from "react";
import Image from "next/image";
import { HotelType, getRoomsForType } from "./mockData";
import { Check, Users, Maximize2, Bed, ArrowRight } from "lucide-react";

interface RoomsProps {
  accentColor?: string;
  hotelName: string;
  hotelType?: HotelType;
  onOpenBooking: (roomId?: string) => void;
}

export default function Rooms({ hotelName, hotelType = "heritage", onOpenBooking }: RoomsProps) {
  const [filter, setFilter] = useState<"all" | "suite" | "deluxe">("all");

  const propertyRooms = getRoomsForType(hotelType);

  const filteredRooms = propertyRooms.filter((room) => {
    if (filter === "suite") {
      return (
        room.name.toLowerCase().includes("suite") ||
        room.name.toLowerCase().includes("chalet") ||
        room.name.toLowerCase().includes("villa") ||
        room.name.toLowerCase().includes("pavilion")
      );
    }
    if (filter === "deluxe") {
      return (
        room.name.toLowerCase().includes("deluxe") ||
        room.name.toLowerCase().includes("studio") ||
        room.name.toLowerCase().includes("room") ||
        room.name.toLowerCase().includes("cottage")
      );
    }
    return true;
  });

  return (
    <div className="max-w-[1200px] mx-auto px-6 md:px-8 pt-12 pb-24 text-left bg-white text-[#111111]">
      {/* Header */}
      <div className="border-b border-neutral-200 pb-6 mb-10 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <span className="eyebrow tracking-[0.2em] block mb-1 text-neutral-500">
            {hotelName} Accommodations
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#111111] font-normal">
            Rooms &amp; Suites
          </h1>
          <p className="text-sm text-neutral-600 mt-2">
            Spacious, comfortable rooms with premium bedding, silent air conditioning, free Wi-Fi, and complimentary breakfast.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-2">
          {(["all", "deluxe", "suite"] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setFilter(tab)}
              className={`text-xs px-4 py-2 uppercase tracking-wider font-semibold border transition-all cursor-pointer ${
                filter === tab
                  ? "bg-[#0F2744] text-white border-[#2B4C7E] shadow-sm"
                  : "bg-white text-[#111111] border-neutral-300 hover:border-black"
              }`}
            >
              {tab === "all" ? "All Rooms" : tab === "suite" ? "Suites & Villas" : "Standard & Deluxe"}
            </button>
          ))}
        </div>
      </div>

      {/* Room Cards List */}
      <div className="space-y-8">
        {filteredRooms.map((room) => (
          <div
            key={room.id}
            className="bg-white border border-neutral-200 shadow-sm hover:shadow-xl transition-[box-shadow,border-color] overflow-hidden grid grid-cols-1 lg:grid-cols-12"
          >
            {/* Room Image (5 Cols) */}
            <div className="lg:col-span-5 relative min-h-[260px] sm:min-h-[320px] bg-neutral-100">
              <Image
                src={room.image}
                alt={room.name}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 500px"
              />
              <div className="absolute top-4 left-4 bg-black/80 backdrop-blur-md text-white text-xs px-3 py-1 font-mono">
                {room.size}
              </div>
            </div>

            {/* Room Info (7 Cols) */}
            <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between">
              <div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                  <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-[#111111]">
                    {room.name}
                  </h2>
                  <span className="text-xs text-emerald-800 bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 font-medium self-start sm:self-auto">
                    Direct Rate Available
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed mb-6 font-normal">
                  {room.description}
                </p>

                {/* Specs */}
                <div className="grid grid-cols-3 gap-4 pb-6 mb-6 border-b border-neutral-100 text-xs text-neutral-700">
                  <div className="flex items-center gap-1.5">
                    <Maximize2 size={15} className="text-[#111111]" />
                    <span>{room.size}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Bed size={15} className="text-[#111111]" />
                    <span>{room.bedType}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Users size={15} className="text-[#111111]" />
                    <span>Up to {room.maxGuests} Guests</span>
                  </div>
                </div>

                {/* Amenities List */}
                <div className="grid grid-cols-2 gap-2 mb-6">
                  {room.amenities.map((a) => (
                    <div key={a} className="flex items-center gap-2 text-xs text-neutral-600">
                      <Check size={14} className="text-emerald-600 shrink-0" />
                      <span>{a}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Price & Reserve CTA */}
              <div className="pt-6 border-t border-neutral-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <span className="font-serif text-3xl font-bold text-[#111111]">
                    ₹{room.pricePerNight.toLocaleString()}
                  </span>
                  <span className="text-xs text-neutral-500 ml-2">/ night (excluding taxes)</span>
                </div>

                <button
                  onClick={() => onOpenBooking(room.id)}
                  className="btn-navy w-full sm:w-auto py-3 px-8 text-xs uppercase tracking-wider font-semibold text-white shadow-md hover:shadow-lg transition-[transform,box-shadow,opacity] flex items-center justify-center gap-2 cursor-pointer"
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
