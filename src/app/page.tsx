"use client";

import { useEffect } from "react";
import ParticleBackground from "@/components/particle/ParticleBackground";
import { HeroSection } from "@/components/home/HeroSection";
import { TechStack } from "@/components/home/TechStack";
import { ActionButtons } from "@/components/home/ActionButtons";

export default function Home() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
      <ParticleBackground />
      <main className="relative min-h-screen flex flex-col items-center justify-center p-6 md:p-24">
        <div className="text-center z-10">
          <HeroSection />
          <TechStack />
          <ActionButtons />
        </div>
      </main>

      <style jsx>{`
        @keyframes text-slide {
          0%,
          100% {
            background-size: 200% 200%;
            background-position: left center;
          }
          50% {
            background-size: 200% 200%;
            background-position: right center;
          }
        }
        .animate-text-slide {
          animation: text-slide 3s ease-in-out infinite;
        }
      `}</style>
    </>
  );
}
