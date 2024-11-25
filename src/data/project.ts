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
    id: "kiwi-tracker",
    title: "Kiwi Valorant Stats",
    description:
      "Valorant oyuncuları için geliştirilmiş, detaylı istatistik ve maç analizi sunan web uygulaması. Modern web teknolojileri kullanılarak geliştirilen bu proje, oyuncuların performansını takip etmelerini ve geliştirmelerini sağlar.",
    tech: [
      "Next.js",
      "TypeScript",
      "React",
      "Tailwind CSS",
      "Firebase",
      "Framer Motion",
    ],
    features: [
      "Detaylı maç geçmişi ve istatistikleri",
      "Harita ve mod bazlı performans analizi",
      "Kullanıcı kimlik doğrulama sistemi",
      "Responsive ve modern kullanıcı arayüzü",
      "Gerçek zamanlı veri takibi",
      "Gelişmiş filtreleme özellikleri",
    ],
    images: {
      thumbnail: "/projects/kiwi/thumbnail.png",
    },
    startDate: "2024-01-01",
    status: "in-progress",
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
    tech: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "React",
      "Framer Motion",
      "Firebase",
    ],
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
  {
    id: "quick-dev",
    title: "Quick Dev",
    description:
      "Yazılım geliştiricilerin günlük iş akışını otomatize eden, çoklu geliştirme araçlarını tek bir arayüzden yönetmelerini sağlayan masaüstü uygulaması. Git işlemleri, IDE başlatma, veritabanı yönetimi, Docker kontrolleri gibi rutin görevleri tek tıkla gerçekleştirerek geliştirme süreçlerini hızlandırır ve verimliliği artırır.",
    tech: ["C#", ".NET"],
    features: [
      "Özelleştirilebilir workflow otomasyonu",
      "Çoklu araç entegrasyonu (Git, IDE, Docker vb.)",
      "Tek tıkla çalıştırma ve durdurma işlemleri",
      "Zamanlanmış görev yönetimi",
      "Performans izleme ve raporlama",
    ],
    images: {
      thumbnail: "/projects/quick-dev/thumbnail.jpg",
      screenshots: ["/projects/quick-dev/screenshot-1.jpg"],
    },
    startDate: "2024-11-1",
    status: "completed",
    category: "backend",
  },
  {
    id: "car-parking",
    title: "Car Parking Management System",
    description:
      "Java tabanlı araç park yönetim sistemi. OOP prensipleri kullanılarak geliştirilmiş bu sistem, araçların giriş-çıkış kayıtlarını, park sürelerini ve ücretlendirmelerini takip eder. Sistem, araç plakası ve yolcu kapasitesi gibi detaylı bilgileri saklayarak, park yeri kapasitesi kontrolü ve biletleme işlemlerini otomatize eder.",
    tech: ["Java"],
    features: [
      "Araç giriş-çıkış saatlerinin detaylı takibi",
      "Otomatik kapasite kontrolü ve uyarı sistemi",
      "Plaka bazlı araç takibi",
      "Bilet oluşturma ve fiyatlandırma",
      "Park süresine göre otomatik ücretlendirme",
    ],
    githubUrl: "https://github.com/burakcantokses/Car-Parking-Application",
    startDate: "2024-01-15",
    status: "completed",
    category: "backend",
  },
];
