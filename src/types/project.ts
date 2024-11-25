export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  tech: string[];
  features: string[];
  githubUrl?: string;
  liveUrl?: string;
  images?: {
    thumbnail: string;
    screenshots?: string[];
  };
  startDate: string;
  status: "completed" | "in-progress" | "planned";
  category: "backend" | "frontend" | "fullstack" | "devops";
}
