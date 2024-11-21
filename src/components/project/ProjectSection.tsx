/**
 * ProjectSection Component
 *
 * Main component for displaying and filtering projects.
 * Features category-based filtering, project counts, and responsive grid layout.
 */

"use client";

import { useState, useMemo } from "react";
import { projects } from "@/data/project";
import { ProjectsGrid } from "./ProjectsGrid";

// Type definition for project categories
type CategoryType = "all" | "backend" | "fullstack" | "devops";

/**
 * Props interface for the CategoryButton component
 */
interface CategoryButtonProps {
  active: boolean; // Indicates if the category is currently selected
  onClick: () => void; // Click handler for category selection
  count: number; // Number of projects in this category
  children: React.ReactNode; // Category label
}

/**
 * CategoryButton Component
 *
 * Renders a single category filter button with project count badge
 * Changes appearance based on active state
 */
const CategoryButton: React.FC<CategoryButtonProps> = ({
  active,
  onClick,
  count,
  children,
}) => (
  <button
    onClick={onClick}
    className={`px-4 py-2 rounded-xl transition-all duration-300 relative
               flex items-center gap-2
               ${
                 active
                   ? "bg-gradient-to-r from-indigo-600 to-violet-600 text-white font-medium shadow-lg shadow-indigo-500/20"
                   : "bg-white/5 text-gray-600 hover:bg-white/10 border border-white/10"
               }`}
  >
    <span>{children}</span>
    {/* Project count badge */}
    <span
      className={`
     inline-flex items-center justify-center px-2 py-0.5 text-xs font-medium rounded-full
     ${active ? "bg-white/20 text-white" : "bg-gray-100 text-gray-600"}
   `}
    >
      {count}
    </span>
  </button>
);

export const ProjectSection = () => {
  // State for tracking active category filter
  const [activeCategory, setActiveCategory] = useState<CategoryType>("all");

  /**
   * Calculate project counts for each category
   * Memoized to prevent unnecessary recalculations
   */
  const categoryCounts = useMemo(() => {
    const counts = {
      all: projects.length,
      backend: projects.filter((p) => p.category === "backend").length,
      frontend: projects.filter((p) => p.category === "frontend").length,
      fullstack: projects.filter((p) => p.category === "fullstack").length,
      devops: projects.filter((p) => p.category === "devops").length,
    };
    return counts;
  }, []);

  // Category definitions with labels
  const categories = [
    { id: "all", label: "Tüm Projeler" },
    { id: "backend", label: "Backend" },
    { id: "frontend", label: "Frontend" },
    { id: "fullstack", label: "Full Stack" },
    { id: "devops", label: "DevOps" },
  ] as const;

  /**
   * Filter projects based on selected category
   * Returns all projects if 'all' is selected, otherwise filters by category
   */
  const filteredProjects = projects.filter((project) =>
    activeCategory === "all" ? true : project.category === activeCategory
  );

  return (
    <section className="space-y-12">
      {/* Header Section */}
      <div className="text-center space-y-12">
        {/* Title and Description */}
        <div>
          <h2 className="text-6xl font-extrabold tracking-tighter mb-4 transform transition-transform duration-700 hover:scale-105">
            Projelerim
          </h2>
          <p className="text-xl text-gray-600">
            Kişisel, açık kaynak ve ticari projelerimden bazıları.
          </p>
        </div>

        {/* Category Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3">
          {categories.map((category) => (
            <CategoryButton
              key={category.id}
              active={activeCategory === category.id}
              onClick={() => setActiveCategory(category.id as CategoryType)}
              count={categoryCounts[category.id]}
            >
              {category.label}
            </CategoryButton>
          ))}
        </div>
      </div>

      {/* Projects Grid Section */}
      <div className="transition-all duration-300">
        <ProjectsGrid projects={filteredProjects} />

        {/* Empty State Message */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-12 text-gray-600">
            Bu kategoride henüz proje bulunmuyor.
          </div>
        )}
      </div>
    </section>
  );
};
