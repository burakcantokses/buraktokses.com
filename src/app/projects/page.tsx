"use client";

import { ProjectSection } from "@/components/project/ProjectSection";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

/**
 * Projects Page Component
 *
 * This component serves as the main projects page of the portfolio website.
 * It displays a comprehensive list of projects with filtering capabilities
 * and a navigation button to return to the home page.
 */
export default function ProjectsPage() {
  const router = useRouter();

  return (
    // Main container with full height and padding for responsive layout
    <main className="min-h-screen relative p-6 md:p-24">
      {/*
        Back to Home Navigation Button
        - Fixed position in the top-left corner
        - Semi-transparent background with blur effect
        - Hover animations for better user interaction
        - Z-index ensures it stays above other elements
      */}
      <button
        onClick={() => router.push("/")}
        className="fixed top-8 left-8 flex items-center gap-2 p-3 bg-white/5 backdrop-blur-md border
                 border-white/10 rounded-xl hover:bg-white/10 transform transition-all duration-300
                 hover:scale-105 text-gray-600 hover:text-gray-900 z-10"
      >
        <ArrowLeft size={20} />
        <span className="font-medium">Ana Sayfa</span>
      </button>

      {/*
        Content Container
        - Maximum width constraint for optimal readability
        - Centered horizontally with auto margins
        - Contains the ProjectSection component which handles project display and filtering
      */}
      <div className="max-w-6xl mx-auto">
        <ProjectSection />
      </div>
    </main>
  );
}
