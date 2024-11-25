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
  SiNginx,
  SiSpring,
  SiMysql,
  SiRust,
  SiGo,
  SiCplusplus,
  SiCsharp,
  SiDotnet,
  SiVuedotjs,
  SiAngular,
  SiSvelte,
  SiTailwindcss,
  SiGraphql,
  SiPrisma,
  SiFirebase,
  SiAmazon,
  SiGooglecloud,
  SiTerraform,
  SiAnsible,
  SiJenkins,
  SiGit,
  SiElasticsearch,
  SiApachekafka,
  SiRabbitmq,
} from "react-icons/si";
import { DiJava } from "react-icons/di";
import { IconType } from "react-icons";

const techConfig: Record<string, { icon: IconType; color: string }> = {
  // Backend
  "Node.js": {
    icon: SiNodedotjs,
    color: "from-green-500/20 to-green-600/20 text-green-700",
  },
  Express: {
    icon: SiExpress,
    color: "from-gray-500/20 to-gray-600/20 text-gray-700",
  },
  Java: { icon: DiJava, color: "from-red-600/20 to-red-700/20 text-red-800" },
  Spring: {
    icon: SiSpring,
    color: "from-green-500/20 to-green-600/20 text-green-700",
  },
  Python: {
    icon: SiPython,
    color: "from-blue-500/20 to-yellow-500/20 text-blue-700",
  },
  Django: {
    icon: SiDjango,
    color: "from-green-700/20 to-green-800/20 text-green-900",
  },
  "C++": {
    icon: SiCplusplus,
    color: "from-blue-600/20 to-blue-700/20 text-blue-800",
  },
  "C#": {
    icon: SiCsharp,
    color: "from-purple-500/20 to-purple-600/20 text-purple-700",
  },
  ".NET": {
    icon: SiDotnet,
    color: "from-violet-500/20 to-violet-600/20 text-violet-700",
  },
  Rust: {
    icon: SiRust,
    color: "from-orange-600/20 to-orange-700/20 text-orange-800",
  },
  Go: { icon: SiGo, color: "from-cyan-500/20 to-cyan-600/20 text-cyan-700" },

  // Frontend
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
  Vue: {
    icon: SiVuedotjs,
    color: "from-emerald-500/20 to-emerald-600/20 text-emerald-700",
  },
  Angular: {
    icon: SiAngular,
    color: "from-red-500/20 to-red-600/20 text-red-700",
  },
  Svelte: {
    icon: SiSvelte,
    color: "from-orange-500/20 to-orange-600/20 text-orange-700",
  },
  Tailwind: {
    icon: SiTailwindcss,
    color: "from-sky-500/20 to-sky-600/20 text-sky-700",
  },

  // Database
  MongoDB: {
    icon: SiMongodb,
    color: "from-green-600/20 to-green-700/20 text-green-800",
  },
  PostgreSQL: {
    icon: SiPostgresql,
    color: "from-blue-600/20 to-blue-700/20 text-blue-800",
  },
  MySQL: {
    icon: SiMysql,
    color: "from-blue-500/20 to-blue-600/20 text-blue-700",
  },
  Redis: { icon: SiRedis, color: "from-red-500/20 to-red-600/20 text-red-700" },
  Elasticsearch: {
    icon: SiElasticsearch,
    color: "from-teal-500/20 to-teal-600/20 text-teal-700",
  },

  // APIs & Tools
  GraphQL: {
    icon: SiGraphql,
    color: "from-pink-500/20 to-pink-600/20 text-pink-700",
  },
  Prisma: {
    icon: SiPrisma,
    color: "from-indigo-500/20 to-indigo-600/20 text-indigo-700",
  },
  Firebase: {
    icon: SiFirebase,
    color: "from-amber-500/20 to-amber-600/20 text-amber-700",
  },
  Kafka: {
    icon: SiApachekafka,
    color: "from-slate-600/20 to-slate-700/20 text-slate-800",
  },
  RabbitMQ: {
    icon: SiRabbitmq,
    color: "from-orange-500/20 to-orange-600/20 text-orange-700",
  },

  // DevOps & Cloud
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
  AWS: {
    icon: SiAmazon,
    color: "from-orange-500/20 to-orange-600/20 text-orange-700",
  },
  "Google Cloud": {
    icon: SiGooglecloud,
    color: "from-blue-500/20 to-blue-600/20 text-blue-700",
  },
  Terraform: {
    icon: SiTerraform,
    color: "from-violet-500/20 to-violet-600/20 text-violet-700",
  },
  Ansible: {
    icon: SiAnsible,
    color: "from-red-600/20 to-red-700/20 text-red-800",
  },
  Jenkins: {
    icon: SiJenkins,
    color: "from-yellow-600/20 to-yellow-700/20 text-yellow-800",
  },
  Git: {
    icon: SiGit,
    color: "from-orange-600/20 to-orange-700/20 text-orange-800",
  },
};

export default techConfig;
