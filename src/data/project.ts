import { Project } from "@/types/project";

export const projects: Project[] = [
  {
    id: "minecraft-extension",
    title: "Minecraft Eklenti ve Client",
    description:
      "Minecraft için özel olarak geliştirilmiş, oyun deneyimini zenginleştiren eklenti ve client uygulaması. Java kullanılarak geliştirilen bu proje, oyun içi özellikleri genişletir ve kullanıcı deneyimini iyileştirir.",
    tech: ["Java"],
    features: [
      "Özel oyun içi komutlar ve özellikler",
      "Oyuncu istatistiklerini takip etme",
      "Performans optimizasyonları",
      "Özelleştirilebilir kullanıcı arayüzü",
    ],
    githubUrl: "https://github.com/burakcantokses/TrafficSimulation-JavaFX",
    images: {
      thumbnail: "/projects/minecraft/thumbnail.jpg",
      screenshots: ["/projects/minecraft/screenshot-1.png"],
    },
    startDate: "2024-05-04",
    status: "completed",
    category: "fullstack",
  },
  {
    id: "traffic-simulation-javafx",
    title: "Traffic Simulation",
    description:
      "Java ve JavaFX framework'ü ile geliştirilmiş, nesne yönelimli programlama prensiplerini kullanan trafik simülasyon uygulaması. Çoklu thread yönetimi ile gerçek zamanlı araç takibi ve durum güncellemesi sağlar.",
    tech: ["Java"],
    features: [
      "Veriye göre rota, harita, araç ve yapılar oluşturma",
      "Araçların hız, konum ve durumlarını güncelleme",
      "Araçların çarpışma ve çıkış durumlarını kontrol etme",
      "Trafik ışıklarını kontrol etme",
    ],
    githubUrl: "https://github.com/burakcantokses/TrafficSimulation-JavaFX",
    startDate: "2024-05-04",
    status: "completed",
    category: "backend",
  },
  {
    id: "buraktokses-com",
    title: "buraktokses.com",
    description:
      "Next.js ve Tailwind CSS kullanılarak geliştirilen modern ve responsive kişisel web sitesi. Projelerimi, yeteneklerimi ve deneyimlerimi sergilemek için tasarlanmış portfolio sitesi. ",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "React"],
    features: [
      "Modern ve minimalist tasarım",
      "Responsive ve mobile-first yaklaşım",
      "Particle.js ile interaktif arka plan animasyonları",
      "Projeler için dinamik filtreleme sistemi",
      "Optimum performans ve SEO uyumlu yapı",
    ],
    githubUrl: "https://github.com/burakcantokses/buraktokses.com",
    startDate: "2024-11-11",
    status: "in-progress",
    category: "frontend",
  },
];
