"use client";

import React, { useState, useEffect } from "react";
import Hero from "@/components/Hero";
import CategoryNavbar, { LandingCategory } from "@/components/CategoryNavbar";
import VideoSection from "@/components/VideoSection";
import ServiceCards from "@/components/ServiceCards";
import DemoPreview from "@/components/DemoPreview";
import Steps from "@/components/Steps";
import Proof from "@/components/Proof";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import BookDemoModal from "@/components/BookDemoModal";

export default function Home() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<LandingCategory>("video");

  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.replace("#", "");
      if (hash === "services") setActiveCategory("services");
      else if (hash === "demo-preview" || hash === "demo") setActiveCategory("demo");
      else if (hash === "process") setActiveCategory("process");
      else if (hash === "results") setActiveCategory("results");
      else if (hash === "overview-video" || hash === "video") setActiveCategory("video");

      if (hash && hash !== "contact") {
        setTimeout(() => {
          const el = document.getElementById(hash) || document.getElementById("category-content-anchor");
          el?.scrollIntoView({ behavior: "smooth" });
        }, 80);
      }
    };

    handleHash();
    window.addEventListener("hashchange", handleHash);
    return () => window.removeEventListener("hashchange", handleHash);
  }, []);

  return (
    <main className="min-h-screen bg-[#FAF7F2] text-[#2A2A2A] flex flex-col relative">
      {/* 1. Hero Section (Integrated Brand Bar, No Duplicate Sticky Header) */}
      <Hero
        onOpenBookDemo={() => setIsDemoModalOpen(true)}
        onSelectVideoCategory={() => setActiveCategory("video")}
      />

      {/* 2. Single Unified Sticky Navbar directly after Hero */}
      <CategoryNavbar
        activeCategory={activeCategory}
        onSelectCategory={setActiveCategory}
        onOpenBookDemo={() => setIsDemoModalOpen(true)}
      />

      {/* 3. Active Main Content Section (Default: Watch Film) */}
      <div id="category-content-anchor" className="scroll-mt-14">
        {activeCategory === "video" && (
          <VideoSection onOpenBookDemo={() => setIsDemoModalOpen(true)} />
        )}

        {activeCategory === "services" && <ServiceCards />}

        {activeCategory === "demo" && <DemoPreview />}

        {activeCategory === "process" && <Steps />}

        {activeCategory === "results" && (
          <>
            <Proof />
            <Testimonials />
          </>
        )}
      </div>

      {/* 4. Luxury Footer */}
      <Footer />

      {/* Floating WhatsApp Action Button */}
      <WhatsAppButton />

      {/* Book a Demo Lead Modal */}
      <BookDemoModal
        isOpen={isDemoModalOpen}
        onClose={() => setIsDemoModalOpen(false)}
      />
    </main>
  );
}
