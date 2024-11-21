"use client";

import { Mail, Linkedin, Github, Code2, ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

interface SocialLinkProps {
  href: string;
  icon: React.ReactNode;
  label: string;
  gradientFrom: string;
  gradientTo: string;
}

const SocialLink = ({
  href,
  icon,
  label,
  gradientFrom,
  gradientTo,
}: SocialLinkProps) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="group w-full sm:w-96 p-4 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl hover:bg-white/10 transform transition-all duration-300 hover:scale-105"
  >
    <div className="flex items-center gap-4">
      <div
        className={`p-3 rounded-xl bg-gradient-to-r ${gradientFrom} ${gradientTo} text-white`}
      >
        {icon}
      </div>
      <div>
        <h3 className="text-lg font-semibold text-gray-700 group-hover:text-gray-900">
          {label}
        </h3>
      </div>
      <div className="ml-auto">
        <svg
          className="w-6 h-6 text-gray-400 group-hover:text-gray-600 transform transition-transform group-hover:translate-x-1"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </div>
    </div>
  </a>
);

export default function ContactPage() {
  const router = useRouter();

  return (
    <>
      <main className="min-h-screen relative flex flex-col items-center justify-center p-6 md:p-24">
        <button
          onClick={() => router.push("/")}
          className="absolute top-8 left-8 flex items-center gap-2 p-3 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl hover:bg-white/10 transform transition-all duration-300 hover:scale-105 text-gray-600 hover:text-gray-900"
        >
          <ArrowLeft size={20} />
          <span className="font-medium">Ana Sayfa</span>
        </button>

        <div className="w-full max-w-4xl z-10 space-y-12">
          <div className="text-center">
            <h1 className="text-6xl font-extrabold tracking-tighter mb-4 transform transition-transform duration-700 hover:scale-105">
              İletişim
            </h1>
            <div className="text-xl text-gray-600 mb-12">
              Sosyal medya hesaplarım ve iletişim kanallarım
            </div>
          </div>

          <div className="space-y-4">
            <SocialLink
              href="https://www.linkedin.com/in/burakcan-tokses"
              icon={<Linkedin size={24} />}
              label="LinkedIn"
              gradientFrom="from-blue-500"
              gradientTo="to-blue-700"
            />

            <SocialLink
              href="mailto:burakcantokses5@gmail.com"
              icon={<Mail size={24} />}
              label="E-posta"
              gradientFrom="from-indigo-500"
              gradientTo="to-indigo-700"
            />

            <SocialLink
              href="https://github.com/burakcantokses"
              icon={<Github size={24} />}
              label="GitHub"
              gradientFrom="from-gray-600"
              gradientTo="to-gray-800"
            />

            <SocialLink
              href="https://leetcode.com/u/burakcantokses/"
              icon={<Code2 size={24} />}
              label="LeetCode"
              gradientFrom="from-yellow-500"
              gradientTo="to-orange-500"
            />
          </div>

          <div className="text-center text-gray-500 text-sm">
            Ortalama yanıt süresi: 12-24 saat
          </div>
        </div>
      </main>

      <style jsx>{`
        @keyframes text-slide {
          0%,
          100% {
            background-size: 200% 200%;
            background-position: left center;
          }
          50% {
            background-size: 200% 200%;
            background-position: right center;
          }
        }
        .animate-text-slide {
          animation: text-slide 3s ease-in-out infinite;
        }
      `}</style>
    </>
  );
}
