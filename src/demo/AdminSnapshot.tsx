"use client";

import React from "react";
import { ADMIN_MOCK_DATA } from "./mockData";
import {
  Users,
  TrendingUp,
  CreditCard,
  CheckCircle2,
  ArrowUpRight,
} from "lucide-react";

interface AdminSnapshotProps {
  accentColor?: string;
  hotelName: string;
}

export default function AdminSnapshot({ hotelName }: AdminSnapshotProps) {
  const data = ADMIN_MOCK_DATA;

  return (
    <div className="max-w-[1200px] mx-auto px-6 md:px-8 pt-12 pb-24 text-left bg-white text-[#111111]">
      {/* Header */}
      <div className="border-b border-neutral-200 pb-6 mb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-2 mb-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-xs uppercase tracking-[0.2em] font-semibold text-neutral-600">
              Real-Time Front Desk &amp; PMS Sync
            </span>
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl text-[#111111] font-normal">
            {hotelName} &mdash; Management Snapshot
          </h1>
          <p className="text-sm text-neutral-600 mt-1">
            Live overview of today&apos;s arrivals, occupancy share, direct channel revenue, and recent booking activity.
          </p>
        </div>

        <div className="bg-neutral-100 border border-neutral-200 px-3.5 py-1.5 text-xs text-neutral-600 font-mono self-start md:self-auto">
          Read-Only Demonstration Mode
        </div>
      </div>

      {/* 4 Metric Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        <div className="bg-white border border-neutral-200 p-6 shadow-sm">
          <div className="flex items-center justify-between text-xs text-neutral-500 mb-2">
            <span>Today&apos;s Arrivals</span>
            <Users size={16} className="text-[#111111]" />
          </div>
          <div className="font-serif text-4xl font-bold text-[#111111] mb-1">
            {data.todayArrivals} Guests
          </div>
          <span className="text-[11px] text-emerald-700 flex items-center gap-1 font-medium">
            <ArrowUpRight size={13} />
            All direct bookings verified
          </span>
        </div>

        <div className="bg-white border border-neutral-200 p-6 shadow-sm">
          <div className="flex items-center justify-between text-xs text-neutral-500 mb-2">
            <span>Live Occupancy</span>
            <TrendingUp size={16} className="text-[#111111]" />
          </div>
          <div className="font-serif text-4xl font-bold text-[#111111] mb-1">
            {data.occupancyPercent}%
          </div>
          <span className="text-[11px] text-neutral-500">
            Peak weekend pacing
          </span>
        </div>

        <div className="bg-white border border-neutral-200 p-6 shadow-sm">
          <div className="flex items-center justify-between text-xs text-neutral-500 mb-2">
            <span>Revenue This Week</span>
            <CreditCard size={16} className="text-[#111111]" />
          </div>
          <div className="font-serif text-3xl sm:text-4xl font-bold text-[#111111] mb-1">
            {data.weekRevenue}
          </div>
          <span className="text-[11px] text-emerald-700 font-medium">
            +22% vs. Last Week
          </span>
        </div>

        <div className="bg-white border border-neutral-200 p-6 shadow-sm">
          <div className="flex items-center justify-between text-xs text-neutral-500 mb-2">
            <span>Direct Engine Share</span>
            <CheckCircle2 size={16} className="text-[#111111]" />
          </div>
          <div className="font-serif text-4xl font-bold text-[#111111] mb-1">
            {data.directShare}
          </div>
          <span className="text-[11px] text-neutral-600 font-semibold">
            0% Commission Incurred
          </span>
        </div>
      </div>

      {/* Recent Bookings Table */}
      <div className="bg-white border border-neutral-200 shadow-sm overflow-hidden">
        <div className="p-6 border-b border-neutral-200 flex items-center justify-between">
          <h2 className="font-serif text-xl font-semibold text-[#111111]">
            Recent Direct Guest Reservations
          </h2>
          <span className="text-xs text-neutral-500">Updated 2 mins ago</span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-neutral-50 border-b border-neutral-200 text-neutral-600 uppercase tracking-wider text-[11px]">
              <tr>
                <th className="py-3 px-6 font-semibold">Booking ID</th>
                <th className="py-3 px-6 font-semibold">Guest Name</th>
                <th className="py-3 px-6 font-semibold">Accommodation</th>
                <th className="py-3 px-6 font-semibold">Stay Window</th>
                <th className="py-3 px-6 font-semibold">Status</th>
                <th className="py-3 px-6 font-semibold">Channel</th>
                <th className="py-3 px-6 font-semibold text-right">Amount</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-200">
              {data.recentBookings.map((b) => (
                <tr key={b.id} className="hover:bg-neutral-50 transition-colors">
                  <td className="py-4 px-6 font-mono font-medium text-[#111111]">
                    {b.id}
                  </td>
                  <td className="py-4 px-6 font-medium text-[#111111]">
                    {b.guestName}
                  </td>
                  <td className="py-4 px-6 text-neutral-700">
                    {b.roomName}
                  </td>
                  <td className="py-4 px-6 text-neutral-500">
                    {b.checkIn} &rarr; {b.checkOut}
                  </td>
                  <td className="py-4 px-6">
                    <span
                      className={`inline-block px-2.5 py-0.5 rounded text-[10px] font-semibold uppercase tracking-wider ${
                        b.status === "Arriving Today"
                          ? "bg-amber-100 text-amber-900 border border-amber-300"
                          : b.status === "Checked In"
                          ? "bg-blue-100 text-blue-900 border border-blue-300"
                          : "bg-emerald-100 text-emerald-900 border border-emerald-300"
                      }`}
                    >
                      {b.status}
                    </span>
                  </td>
                  <td className="py-4 px-6">
                    <span className="text-[11px] text-emerald-700 font-semibold flex items-center gap-1">
                      <CheckCircle2 size={13} />
                      Direct (0% Fee)
                    </span>
                  </td>
                  <td className="py-4 px-6 text-right font-serif font-bold text-sm text-[#111111]">
                    {b.totalAmount}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
