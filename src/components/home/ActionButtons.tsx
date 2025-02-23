"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/button/Button";
import { FileText, FolderOpenDot, Mail } from "lucide-react";

export const ActionButtons = () => {
  const router = useRouter();

  const handleDownloadCV = () => {
    const cvPath = "/pdfs/Burakcan_TOKSES_CV_2025.pdf";

    fetch(cvPath)
      .then((response) => {
        if (!response.ok) {
          throw new Error("PDF bulunamadı");
        }
        return response.blob();
      })
      .then((blob) => {
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.download = "Burakcan_TOKSES_CV_2025.pdf";

        document.body.appendChild(link);
        link.click();

        document.body.removeChild(link);
        window.URL.revokeObjectURL(url);
      });
  };

  return (
    <div className="flex flex-wrap gap-4 justify-center items-center">
      <Button
        onClick={handleDownloadCV}
        className="bg-gradient-to-r from-indigo-600 to-indigo-800 hover:from-indigo-700 hover:to-indigo-900
                   inline-flex items-center gap-2 py-2.5 px-6 text-white shadow-xl
                   transform transition-all duration-300 hover:scale-105"
      >
        <FileText size={18} className="text-gray-200" />
        <span className="font-medium">Özgeçmiş</span>
      </Button>
      <Button
        onClick={() => router.push("/projects")}
        className="bg-gradient-to-r from-violet-600 to-violet-800 hover:from-violet-700 hover:to-violet-900
                   inline-flex items-center gap-2 py-2.5 px-6 text-white shadow-xl
                   transform transition-all duration-300 hover:scale-105"
      >
        <FolderOpenDot size={18} className="text-gray-200" />
        <span className="font-medium">Projelerim</span>
      </Button>
      <Button
        onClick={() => router.push("/contact")}
        className="bg-gradient-to-r from-purple-600 to-purple-800 hover:from-purple-700 hover:to-purple-900
                   inline-flex items-center gap-2 py-2.5 px-6 text-white shadow-xl
                   transform transition-all duration-300 hover:scale-105"
      >
        <Mail size={18} className="text-gray-200" />
        <span className="font-medium">İletişim</span>
      </Button>
    </div>
  );
};
