"use client";

import Image from "next/image";
import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import { home } from "@/content/site";

function subscribeReducedMotion(onChange: () => void) {
  const media = window.matchMedia("(prefers-reduced-motion: reduce)");
  media.addEventListener("change", onChange);
  return () => media.removeEventListener("change", onChange);
}

function reducedMotionNow() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function reducedMotionOnServer() {
  return false;
}

export function HeroVideo({ className = "" }: { className?: string }) {
  const reduced = useSyncExternalStore(subscribeReducedMotion, reducedMotionNow, reducedMotionOnServer);
  const [failed, setFailed] = useState(false);
  const [playing, setPlaying] = useState(true);
  const frameRef = useRef<HTMLDivElement>(null);
  const mediaRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const showVideo = !reduced && !failed;

  useEffect(() => {
    const media = mediaRef.current;
    const frame = frameRef.current;
    if (!media || !frame || !showVideo) return;

    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");

    const onScroll = () => {
      if (motion.matches) {
        media.style.transform = "";
        return;
      }
      const distance = Math.min(window.scrollY, 520);
      const shift = (distance * 0.045).toFixed(1);
      const zoom = (1 + Math.min(distance / 4000, 0.055)).toFixed(4);
      media.style.transform = `translate3d(0, ${shift}px, 0) scale(${zoom})`;
    };

    const onMove = (event: PointerEvent) => {
      if (motion.matches || !finePointer.matches || window.innerWidth < 1024) return;
      const rect = frame.getBoundingClientRect();
      const px = (event.clientX - rect.left) / rect.width - 0.5;
      const py = (event.clientY - rect.top) / rect.height - 0.5;
      frame.style.transform = `perspective(900px) rotateX(${(-py * 3.2).toFixed(2)}deg) rotateY(${(px * 4.2).toFixed(2)}deg)`;
    };

    const onLeave = () => {
      frame.style.transform = "";
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    frame.addEventListener("pointermove", onMove);
    frame.addEventListener("pointerleave", onLeave);
    motion.addEventListener("change", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      frame.removeEventListener("pointermove", onMove);
      frame.removeEventListener("pointerleave", onLeave);
      motion.removeEventListener("change", onScroll);
    };
  }, [showVideo]);

  function togglePlayback() {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      void video.play();
    } else {
      video.pause();
    }
  }

  return (
    <div ref={frameRef} className={`hero-frame relative overflow-hidden bg-green-900 ${className}`}>
      <div ref={mediaRef} className="absolute -inset-[8%] will-change-transform">
        <Image
          src={home.hero.poster}
          alt={showVideo ? "" : home.hero.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-b from-[#0c2416]/84 via-[#0c2416]/58 to-[#07160e]/88"
        />
        {showVideo ? (
          <video
            ref={videoRef}
            className="hero-video absolute inset-0 h-full w-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            poster={home.hero.poster}
            preload="auto"
            onPlay={() => setPlaying(true)}
            onPause={() => setPlaying(false)}
            onError={() => setFailed(true)}
          >
            <source src={home.hero.webm} type="video/webm" />
            <source src={home.hero.mp4} type="video/mp4" />
          </video>
        ) : null}
      </div>
      {showVideo ? (
        <button
          type="button"
          className="hero-control absolute right-4 bottom-4 z-30 flex h-11 w-11 items-center justify-center rounded-full bg-white/90 text-green-900 shadow-md"
          aria-label={playing ? "Pause hero video" : "Play hero video"}
          aria-pressed={playing}
          onClick={togglePlayback}
        >
          {playing ? <PauseIcon /> : <PlayIcon />}
        </button>
      ) : null}
    </div>
  );
}

function PlayIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true" className="translate-x-px">
      <path d="M5 3.5v11l9-5.5-9-5.5z" fill="currentColor" />
    </svg>
  );
}

function PauseIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true">
      <path d="M4.5 3.5h3v11h-3v-11zm6 0h3v11h-3v-11z" fill="currentColor" />
    </svg>
  );
}
