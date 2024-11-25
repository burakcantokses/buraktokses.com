import { Github, ImageIcon } from "lucide-react";
import { Project } from "@/types/project";
import { useState } from "react";
import { ImageModal } from "./ImageModal";
import techConfig from "./techConfig";

export const ProjectCard: React.FC<Project> = ({
  title,
  description,
  tech,
  githubUrl,
  status,
  category,
  images,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
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
        {/* Header with Title, Badges, and Image Icon */}
        <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
          <div className="flex items-center gap-3">
            <h3 className="text-2xl font-bold text-gray-800">{title}</h3>
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

          <div className="flex flex-wrap gap-2">
            <span
              className={`px-2.5 py-1 text-xs font-medium rounded-full border
                         ${statusConfig[status].classes}`}
            >
              {statusConfig[status].label}
            </span>

            <span
              className={`px-2.5 py-1 text-xs font-medium rounded-full border
                         ${categoryConfig[category].classes}`}
            >
              {categoryConfig[category].label}
            </span>
          </div>
        </div>

        <p className="text-gray-600 mb-4">{description}</p>

        <div className="grid gap-4">
          {/* Tech Stack with Icons */}
          <div className="flex flex-wrap gap-2">
            {tech.map((item) => {
              const techItem = techConfig[item];
              if (!techItem) return null;

              const { icon: Icon, color } = techItem;
              return (
                <span
                  key={item}
                  className={`px-3 py-1.5 text-sm font-medium rounded-full
                             bg-gradient-to-r ${color}
                             border border-white/10
                             hover:scale-105 transform transition-all duration-300
                             flex items-center gap-1.5`}
                >
                  <Icon className="w-4 h-4" />
                  {item}
                </span>
              );
            })}
          </div>

          {githubUrl && (
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
          )}
        </div>
      </article>

      {/* Image Modal */}
      <ImageModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        images={images!}
        title={title}
      />
    </>
  );
};
