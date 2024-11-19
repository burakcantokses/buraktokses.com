"use client";

export const HeroSection = () => {
  return (
    <div className="text-center">
      <h1 className="text-6xl md:text-8xl font-extrabold tracking-tighter mb-4 transform transition-transform duration-700 hover:scale-105">
        Burakcan
      </h1>

      <div className="text-5xl md:text-7xl font-bold tracking-tight mb-8 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-violet-600 animate-text-slide">
        Tokses
      </div>

      <div className="max-w-3xl mx-auto mb-8">
        <p className="text-xl md:text-2xl text-gray-600 mb-3">
          Backend Yazılım Geliştirici
        </p>
        <p className="text-base md:text-lg text-gray-500 mb-6">
          Modern web teknolojileri ile yenilikçi çözümler geliştiren, kullanıcı
          deneyimini ön planda tutan tutkulu bir yazılımcı
        </p>
      </div>
    </div>
  );
};
