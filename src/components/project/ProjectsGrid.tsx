/**
 * ProjectsGrid Component
 *
 * A responsive grid layout component that displays project cards.
 * - Single column on mobile devices
 * - Two columns on medium and larger screens
 * - Maintains consistent spacing between cards
 */

import { Project } from "@/types/project";
import { ProjectCard } from "./ProjectCard";

/**
 * Props interface for ProjectsGrid component
 * @property {Project[]} projects - Array of project objects to be displayed
 */
interface ProjectsGridProps {
  projects: Project[];
}

/**
 * Renders a grid of ProjectCard components
 *
 * @param {ProjectsGridProps} props - Component props containing array of projects
 * @returns {JSX.Element} A responsive grid of project cards
 *
 * Key Features:
 * - Responsive layout using CSS Grid
 * - Automatic card positioning
 * - Consistent gap spacing between cards
 * - Spreads project properties to ProjectCard components
 */
export const ProjectsGrid: React.FC<ProjectsGridProps> = ({ projects }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    {projects.map((project, index) => (
      // Spreads all project properties to ProjectCard component
      <ProjectCard
        key={index} // Using index as key since projects array is static
        {...project}
      />
    ))}
  </div>
);
