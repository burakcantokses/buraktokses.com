import { IconType } from "react-icons";
import { DiJava } from "react-icons/di";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiNodedotjs,
  SiMongodb,
  SiGit,
  SiDotnet,
  SiSqlite,
  SiJavascript,
} from "react-icons/si";

interface TechBadgeProps {
  text: string;
  icon: IconType;
}

const TechBadge = ({ text, icon: Icon }: TechBadgeProps) => (
  <div className="group relative">
    <div
      className="flex items-center gap-2 px-4 py-2 rounded-xl
                      bg-white/5 backdrop-blur-md border border-white/10
                      hover:bg-white/10 hover:border-white/20 hover:scale-110
                      transition-all duration-300 cursor-pointer"
    >
      <Icon className="w-4 h-4 text-indigo-400 group-hover:text-indigo-300" />
      <span className="text-sm font-medium text-gray-600 group-hover:text-gray-800">
        {text}
      </span>
    </div>
    <div
      className="absolute -bottom-1 left-0 right-0 h-px bg-gradient-to-r
                      from-transparent via-indigo-500/50 to-transparent
                      opacity-0 group-hover:opacity-100 transition-opacity duration-300"
    />
  </div>
);

export const TechStack = () => {
  const techStack = [
    { name: "Java", icon: DiJava },
    { name: ".NET", icon: SiDotnet },
    { name: "Node.js", icon: SiNodedotjs },
    { name: "SQL", icon: SiSqlite },
    { name: "MongoDB", icon: SiMongodb },
    { name: "TypeScript", icon: SiTypescript },
    { name: "JavaScript", icon: SiJavascript },
    { name: "React", icon: SiReact },
    { name: "Next.js", icon: SiNextdotjs },
    { name: "Git", icon: SiGit },
  ];

  return (
    <div className="flex flex-wrap gap-3 justify-center items-center mb-8 max-w-2xl mx-auto">
      {techStack.map((tech) => (
        <TechBadge key={tech.name} text={tech.name} icon={tech.icon} />
      ))}
    </div>
  );
};
