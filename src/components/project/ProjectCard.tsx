import { Github, ImageIcon } from "lucide-react";
import Image from "next/image";
import {
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiTypescript,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiPostgresql,
  SiRedis,
  SiPython,
  SiDjango,
  SiDocker,
  SiKubernetes,
  SiGithub,
  SiNginx,
  SiSpring,
  SiMysql,
} from "react-icons/si";
import { DiJava } from "react-icons/di";
import { IconType } from "react-icons";
import { Project } from "@/types/project";
import { useState } from "react";
import { ImageModal } from "./ImageModal";

/**
 * ProjectCard Component
 *
 * A card component that displays project information including:
 * - Project title and description
 * - Status and category badges
 * - Technology stack with icons
 * - GitHub repository link
 * - Image gallery (if available)
 */

/**
 * Technology configuration object
 * Maps technology names to their respective icons and color schemes
 */

const techConfig: Record<string, { icon: IconType; color: string }> = {
  "Node.js": {
    icon: SiNodedotjs,
    color: "from-green-500/20 to-green-600/20 text-green-700",
  },
  Express: {
    icon: SiExpress,
    color: "from-gray-500/20 to-gray-600/20 text-gray-700",
  },
  MongoDB: {
    icon: SiMongodb,
    color: "from-green-600/20 to-green-700/20 text-green-800",
  },
  TypeScript: {
    icon: SiTypescript,
    color: "from-blue-500/20 to-blue-600/20 text-blue-700",
  },
  JavaScript: {
    icon: SiJavascript,
    color: "from-yellow-500/20 to-yellow-600/20 text-yellow-700",
  },
  React: {
    icon: SiReact,
    color: "from-cyan-500/20 to-cyan-600/20 text-cyan-700",
  },
  "Next.js": {
    icon: SiNextdotjs,
    color: "from-black/20 to-gray-800/20 text-gray-800",
  },
  PostgreSQL: {
    icon: SiPostgresql,
    color: "from-blue-600/20 to-blue-700/20 text-blue-800",
  },
  Redis: { icon: SiRedis, color: "from-red-500/20 to-red-600/20 text-red-700" },
  Python: {
    icon: SiPython,
    color: "from-blue-500/20 to-yellow-500/20 text-blue-700",
  },
  Django: {
    icon: SiDjango,
    color: "from-green-700/20 to-green-800/20 text-green-900",
  },
  Docker: {
    icon: SiDocker,
    color: "from-blue-500/20 to-blue-600/20 text-blue-700",
  },
  Kubernetes: {
    icon: SiKubernetes,
    color: "from-blue-600/20 to-blue-700/20 text-blue-800",
  },
  nginx: {
    icon: SiNginx,
    color: "from-green-500/20 to-green-600/20 text-green-700",
  },
  Java: { icon: DiJava, color: "from-red-600/20 to-red-700/20 text-red-800" },
  Spring: {
    icon: SiSpring,
    color: "from-green-500/20 to-green-600/20 text-green-700",
  },
  MySQL: {
    icon: SiMysql,
    color: "from-blue-500/20 to-blue-600/20 text-blue-700",
  },
};

export const ProjectCard: React.FC<Project> = ({
  title,
  description,
  tech,
  githubUrl,
  status,
  category,
  images,
}) => {
  // Modal state for image gallery
  const [isModalOpen, setIsModalOpen] = useState(false);

  /**
   * Status configuration object
   * Defines visual styles and labels for different project statuses
   */
  const statusConfig = {
    completed: {
      label: "Tamamlandı",
      classes: "bg-emerald-100 text-emerald-800 border-emerald-200",
    },
    "in-progress": {
      label: "Devam Ediyor",
      classes: "bg-sky-100 text-sky-800 border-sky-200",
    },
    planned: {
      label: "Planlanıyor",
      classes: "bg-gray-100 text-gray-800 border-gray-200",
    },
  };

  /**
   * Category configuration object
   * Defines visual styles and labels for different project categories
   */
  const categoryConfig = {
    backend: {
      label: "Backend",
      classes: "bg-violet-100 text-violet-800 border-violet-200",
    },
    frontend: {
      label: "Frontend",
      classes: "bg-cyan-100 text-cyan-800 border-cyan-200",
    },
    fullstack: {
      label: "Full Stack",
      classes: "bg-indigo-100 text-indigo-800 border-indigo-200",
    },
    devops: {
      label: "DevOps",
      classes: "bg-orange-100 text-orange-800 border-orange-200",
    },
  };

  return (
    <>
      <article
        className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6
                         hover:bg-white/10 transform transition-all duration-300 hover:scale-[1.02]"
      >
        {/* Header Section: Title, Status, and Category */}
        <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
          <div className="flex items-center gap-3">
            {/* Project Title */}
            <h3 className="text-2xl font-bold text-gray-800">{title}</h3>
            {/* Image Gallery Button - Only shown if images are available */}
            {images?.thumbnail && (
              <button
                onClick={() => setIsModalOpen(true)}
                className="p-2 rounded-xl bg-gradient-to-r from-indigo-500/10 to-violet-500/10
               hover:from-indigo-500/20 hover:to-violet-500/20
               border border-indigo-200/20
               transition-all duration-300
               text-indigo-500 hover:text-indigo-600
               flex items-center gap-2 group"
                title="Görüntüyü göster"
              >
                <ImageIcon size={20} />
                <span className="text-sm font-medium">Görüntüle</span>
              </button>
            )}
          </div>

          {/* Status and Category Badges */}
          <div className="flex flex-wrap gap-2">
            {/* Project Status Badge */}
            <span className={`... ${statusConfig[status].classes}`}>
              {statusConfig[status].label}
            </span>

            {/* Project Category Badge */}
            <span className={`... ${categoryConfig[category].classes}`}>
              {categoryConfig[category].label}
            </span>
          </div>
        </div>

        {/* Project Description */}
        <p className="text-gray-600 mb-4">{description}</p>

        <div className="grid gap-4">
          {/* Technology Stack Section
              Displays icons and names of technologies used in the project */}
          <div className="flex flex-wrap gap-2">
            {tech.map((item) => {
              const techItem = techConfig[item];
              if (!techItem) return null;

              const { icon: Icon, color } = techItem;
              return (
                <span key={item} className={`... ${color} ...`}>
                  <Icon className="w-4 h-4" />
                  {item}
                </span>
              );
            })}
          </div>

          {/* GitHub Repository Link
              External link to project's source code */}
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 w-fit rounded-xl
                       bg-gradient-to-r from-gray-600/90 to-gray-700/90
                       hover:from-gray-700 hover:to-gray-800 text-white
                       transition-all duration-300"
          >
            <Github className="h-4 w-4" />
            <span>GitHub</span>
          </a>
        </div>
      </article>

      {/* Image Gallery Modal
          Displays project images in a modal overlay when opened */}
      <ImageModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        images={images!}
        title={title}
      />
    </>
  );
};
