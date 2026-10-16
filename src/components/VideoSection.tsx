"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/config/siteConfig";
import { Play, RotateCcw, ArrowRight, Volume2, VolumeX, Maximize } from "lucide-react";

interface VideoSectionProps {
  onOpenBookDemo?: () => void;
}

export default function VideoSection({ onOpenBookDemo }: VideoSectionProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasEnded, setHasEnded] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const sectionRef = useRef<HTMLElement | null>(null);

  const videoConfig = siteConfig.video;
  const isVideoEmpty = !videoConfig.src || videoConfig.src.trim() === "";

  // Auto-pause if scrolled out of view on mobile
  useEffect(() => {
    if (!sectionRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting && isPlaying && videoRef.current) {
            videoRef.current.pause();
          }
        });
      },
      { threshold: 0.2 }
    );

    observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [isPlaying]);

  const handleStartPlay = () => {
    if (isVideoEmpty) return;
    setIsPlaying(true);
    setHasEnded(false);
  };

  const handleReplay = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play();
      setHasEnded(false);
      setIsPlaying(true);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const toggleFullscreen = () => {
    if (videoRef.current) {
      if (document.fullscreenElement) {
        document.exitFullscreen();
      } else {
        videoRef.current.requestFullscreen();
      }
    }
  };

  return (
    <section
      id="overview-video"
      ref={sectionRef}
      className="pt-6 pb-7 md:pt-8 md:pb-8 bg-[#FAF7F2] text-[#141414] relative border-b border-[#E4DCCB]"
    >
      <div className="max-w-[1200px] mx-auto px-6 md:px-8">
        {/* Header Block Above Player (Clean Light Aesthetic) */}
        <div className="max-w-2xl mx-auto text-center mb-6 md:mb-8">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-6 h-[1px] bg-[#B8975A]" />
            <span className="eyebrow tracking-[0.2em] text-[#9A7B43]">
              {videoConfig.eyebrow}
            </span>
            <span className="w-6 h-[1px] bg-[#B8975A]" />
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#141414] font-normal leading-tight tracking-[-0.01em]">
            {videoConfig.heading}
          </h2>
        </div>

        {/* Video Player Container (Max Width 960px, 16:9 ratio, Luxury Border & Soft Shadow) */}
        <div className="max-w-[960px] mx-auto">
          <div className="relative aspect-video w-full bg-[#141414] border border-[#E4DCCB] shadow-2xl overflow-hidden group">
            {/* If video hasn't started playing: Show Poster with Gold Play Button */}
            {!isPlaying ? (
              <div className="relative w-full h-full">
                {/* Poster Image */}
                <Image
                  src={videoConfig.poster || "/images/hero-palace.jpg"}
                  alt={videoConfig.title}
                  fill
                  priority={false}
                  className="object-cover object-center filter brightness-95 transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 960px) 100vw, 960px"
                />

                {/* Dark Vignette Overlay for focus */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/35 to-black/20" />

                {/* Empty State Notice */}
                {isVideoEmpty ? (
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 bg-black/60 backdrop-blur-xs">
                    <p className="font-serif text-xl sm:text-2xl text-[#FAF7F2] mb-2">
                      Overview video coming soon
                    </p>
                    <span className="text-xs text-[#B8975A] font-mono tracking-wider">
                      [EDIT ME: Add video.src in siteConfig.ts]
                    </span>
                  </div>
                ) : (
                  /* Large Gold Circular Play Button with Duration Label */
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <button
                      onClick={handleStartPlay}
                      className="relative flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-[#B8975A] text-[#141414] shadow-2xl transition-[transform,background-color,color] duration-300 hover:scale-110 hover:bg-[#9A7B43] hover:text-[#FFFFFF] focus:outline-none focus:ring-4 focus:ring-[#B8975A]/50 cursor-pointer"
                      aria-label="Play overview video"
                    >
                      <Play
                        size={32}
                        className="ml-1 fill-current"
                      />
                      <span className="absolute -inset-2 rounded-full border border-[#B8975A]/40 animate-ping opacity-40 pointer-events-none" />
                    </button>

                    {/* Duration Badge */}
                    <div className="mt-4 bg-[#141414]/90 backdrop-blur-md border border-[#B8975A]/40 px-3.5 py-1 text-xs uppercase tracking-widest text-[#FAF7F2] font-medium">
                      {videoConfig.duration}
                    </div>
                  </div>
                )}
              </div>
            ) : (
              /* Actual Lazy-Loaded Video Player */
              <div className="relative w-full h-full bg-black">
                <video
                  ref={videoRef}
                  src={videoConfig.src}
                  autoPlay
                  muted={isMuted}
                  controls
                  playsInline
                  onEnded={() => setHasEnded(true)}
                  className="w-full h-full object-contain"
                />

                {/* Quick Controls Overlay on Top Right */}
                <div className="absolute top-4 right-4 flex items-center gap-2 z-20">
                  <button
                    onClick={toggleMute}
                    className="p-2 bg-black/60 hover:bg-black/90 text-[#FAF7F2] rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-[#B8975A]"
                    aria-label={isMuted ? "Unmute" : "Mute"}
                  >
                    {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
                  </button>
                  <button
                    onClick={toggleFullscreen}
                    className="p-2 bg-black/60 hover:bg-black/90 text-[#FAF7F2] rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-[#B8975A]"
                    aria-label="Fullscreen"
                  >
                    <Maximize size={18} />
                  </button>
                </div>

                {/* End of Video Overlay: Book a Demo & Replay */}
                {hasEnded && (
                  <div className="absolute inset-0 bg-[#141414]/90 backdrop-blur-md flex flex-col items-center justify-center p-6 text-center z-30">
                    <span className="eyebrow mb-2 text-[#B8975A]">Next Step</span>
                    <h3 className="font-serif text-2xl sm:text-3xl text-[#FAF7F2] mb-6">
                      Ready to start getting direct bookings for your hotel?
                    </h3>
                    <div className="flex flex-col sm:flex-row items-center gap-4">
                      {onOpenBookDemo ? (
                        <button
                          onClick={onOpenBookDemo}
                          className="btn-gold"
                        >
                          Book a Demo
                          <ArrowRight size={15} className="ml-2" />
                        </button>
                      ) : (
                        <Link href="/book-demo" className="btn-gold">
                          Book a Demo
                          <ArrowRight size={15} className="ml-2" />
                        </Link>
                      )}

                      <button
                        onClick={handleReplay}
                        className="btn-outline-gold flex items-center gap-2"
                      >
                        <RotateCcw size={15} />
                        Replay Video
                      </button>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Text and Book a Demo Button Below Player (Light Styled) */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-6 pt-6 border-t border-[#E4DCCB]">
            <p className="text-sm text-[#6B645A] max-w-lg text-center sm:text-left leading-relaxed">
              {videoConfig.subtext}
            </p>

            <div className="shrink-0">
              {onOpenBookDemo ? (
                <button
                  onClick={onOpenBookDemo}
                  className="btn-gold text-xs py-3 px-6"
                >
                  Book a Demo
                </button>
              ) : (
                <Link href="/book-demo" className="btn-gold text-xs py-3 px-6">
                  Book a Demo
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
