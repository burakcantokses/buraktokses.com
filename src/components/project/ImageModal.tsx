"use client";

import {
  Github,
  Image as ImageIcon,
  X,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import Image from "next/image";
import { useState } from "react";

interface ProjectImages {
  thumbnail: string;
  screenshots?: string[];
}

interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  images: ProjectImages;
  title: string;
}

export const ImageModal: React.FC<ImageModalProps> = ({
  isOpen,
  onClose,
  images,
  title,
}) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const allImages = [images?.thumbnail, ...(images?.screenshots || [])];

  if (!isOpen) return null;

  const handlePrevious = (e: React.MouseEvent) => {
    e.stopPropagation();
    setSelectedIndex((prev) => (prev === 0 ? allImages.length - 1 : prev - 1));
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setSelectedIndex((prev) => (prev === allImages.length - 1 ? 0 : prev + 1));
  };

  return (
    <div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/90"
      onClick={onClose}
    >
      {/* Header */}
      <div className="w-full max-w-6xl px-4 py-4 flex justify-between items-center">
        <h3 className="text-white text-xl font-medium">{title}</h3>
        <button
          onClick={onClose}
          className="p-2 text-white hover:text-gray-300 transition-colors"
        >
          <X size={24} />
        </button>
      </div>

      {/* Main Image */}
      <div className="relative flex-1 w-full max-w-6xl flex items-center justify-center px-4">
        <div className="relative h-[70vh] w-full">
          <Image
            src={allImages[selectedIndex]}
            alt={`${title} - Görsel ${selectedIndex + 1}`}
            fill
            className="object-contain"
            onClick={(e) => e.stopPropagation()}
            quality={100}
          />
        </div>

        {/* Navigation Buttons */}
        {allImages.length > 1 && (
          <>
            <button
              onClick={handlePrevious}
              className="absolute left-8 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
              aria-label="Önceki görsel"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={handleNext}
              className="absolute right-8 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
              aria-label="Sonraki görsel"
            >
              <ChevronRight size={24} />
            </button>
          </>
        )}
      </div>

      {/* Thumbnails */}
      {allImages.length > 1 && (
        <div className="w-full max-w-6xl p-4">
          <div className="flex gap-2 overflow-x-auto pb-2">
            {allImages.map((img, index) => (
              <button
                key={index}
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedIndex(index);
                }}
                className={`relative w-20 h-20 flex-shrink-0 rounded-lg overflow-hidden
                           transition-all duration-300 transform
                           ${
                             selectedIndex === index
                               ? "ring-2 ring-indigo-500 scale-105"
                               : "opacity-60 hover:opacity-100"
                           }`}
              >
                <Image
                  src={img}
                  alt={`Thumbnail ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Image Counter */}
      <div
        className="absolute bottom-4 left-1/2 transform -translate-x-1/2
                     bg-black/50 text-white px-3 py-1 rounded-full text-sm"
      >
        {selectedIndex + 1} / {allImages.length}
      </div>
    </div>
  );
};
