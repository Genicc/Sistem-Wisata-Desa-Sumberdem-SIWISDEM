"use client";
import { useState, useEffect } from "react";
import ProfilSection from "@/components/section/profil-section";
import DescriptionSection from "@/components/section/description-section";
import GaleriSection from "@/components/section/galeri-section";
import Image from "next/image";

export default function ProfilPage() {
  const [isOpen, setIsOpen] = useState(false);

  // Lock scroll & Esc to close
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", onKey);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [isOpen]);

  return (
    <div className="relative flex flex-col min-h-full">
      <main className="flex-grow mt-12"> {/* Margin top to account for fixed header */}
        <ProfilSection />
        <DescriptionSection />
        <GaleriSection />

        {/* Gambar dengan klik */}
        <div className="w-full flex justify-center mb-10">
        <div className="w-full max-w-6xl">
          <Image
            src="/images/papan-informasi.jpg"
            alt="Papan Informasi Wisata"
            width={1920}
            height={1080}
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 80vw, 1000px"
            className="w-full h-auto object-contain rounded-lg shadow-lg cursor-zoom-in"
            onClick={() => setIsOpen(true)}
          />
        </div>
      </div>

      {/* Modal Lightbox */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 sm:p-6 md:p-8"
          onClick={() => setIsOpen(false)}
        >
          {/* Stop bubbling agar klik pada konten tidak menutup modal */}
          <div
            className="relative w-full max-w-5xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src="/images/papan-informasi.jpg"
              alt="Papan Informasi Wisata"
              width={1920}
              height={1080}
              sizes="100vw"
              loading="eager"
              className="w-full h-auto max-h-[85vh] object-contain rounded-lg cursor-zoom-out"
              // klik gambar untuk close juga ok
              onClick={() => setIsOpen(false)}
            />

            {/* Tombol close */}
            <button
              onClick={() => setIsOpen(false)}
              aria-label="Tutup"
              className="absolute top-3 right-3 inline-flex h-9 w-9 items-center justify-center rounded-full bg-black/60 text-white text-lg leading-none"
            >
              ✕
            </button>
          </div>
        </div>
      )}
      </main>
    </div>
  );
}
