// app/profil/page.tsx
"use client";

import React from "react";
import { Lato } from "next/font/google";

const lato = Lato({
    subsets: ["latin"],
    weight: ["400"],
    display: "swap",
});

export default function ProfilSection() {
    return (
        <section className="bg-white px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        {/* Grid Konten */}
        <div className="mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Kiri: Judul & Deskripsi */}
            <div className={lato.className}>
            <h3 className="text-[#0a2240] leading-snug font-semibold text-2xl sm:text-4xl md:text-5xl lg:text-6xl">
                Profil Desa Sumberdem
            </h3>
            <p className="text-gray-700 mt-4 sm:mt-5 text-base sm:text-lg md:text-xl leading-relaxed">
                “Tonton video profil Desa Sumberdem dan rasakan kehangatan desa
                tematik yang memadukan keindahan alam dengan kearifan lokal.”
            </p>
            </div>

            {/* Kanan: Video dengan background biru tua */}
            <div className="relative">
            {/* Background biru tua: aktifkan offset hanya di ≥ md */}
            <div className="hidden md:block absolute -top-6 -right-6 w-full h-full bg-[#0a2240] rounded-2xl"></div>

            {/* Bungkus video dengan aspect ratio agar responsif */}
            <div className="relative rounded-2xl overflow-hidden shadow-lg">
                <div className="aspect-video">
                <video
                    src="/videos/profil-desa.mp4" // sesuaikan path
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    className="h-full w-full object-cover"
                    // optional poster:
                    // poster="/images/profil-desa-poster.jpg"
                />
                </div>
            </div>
            </div>
        </div>
        </section>
    );
}
