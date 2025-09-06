// app/profil/deskripsi.tsx
"use client";

import React from "react";
import { Lato } from "next/font/google";

const lato = Lato({
    subsets: ["latin"],
    weight: ["400"],
});

export default function DescriptionSection() {
    return (
    <section className="bg-white px-6 py-8">
      {/* Judul Tengah */}
        <h2 className="text-center text-4xl md:text-5xl text-[#0a2240] mb-6 font-semibold">
        DESKRIPSI SINGKAT
        </h2>

      {/* Box Deskripsi */}
        <div className="max-w-5xl mx-auto bg-[#0a2240] rounded-2xl p-8 md:p-12 shadow-lg">
            <p className={`${lato.className} text-white text-lg leading-relaxed text-justify space-y-6`}>
            Sumberdem berasal dari sumber mata air yang menjadi pusat kehidupan
            warga sejak dahulu kala. Filosofi desa ini adalah menjaga keseimbangan
            antara alam, manusia, dan budaya. Dengan semangat gotong royong,
            masyarakat Sumberdem membangun kampung tematik sebagai bentuk inovasi
            desa untuk memperkuat ekonomi, sekaligus melestarikan warisan tradisi.
            </p>
            <p className={`${lato.className} text-white text-lg leading-relaxed text-justify mt-6`}>
            Desa Sumberdem adalah desa tematik yang terletak di wilayah pedesaan
            yang asri dengan suasana sejuk dan masyarakat yang ramah. Desa ini
            mengangkat potensi lokal melalui lima kampung tematik: Kopi, Lemon,
            KRPL, Rosela, dan Ternak. Melalui konsep ini, Sumberdem menghadirkan
            wisata edukasi, budaya, dan alam yang menyatu dalam kehidupan sehari-hari
            warganya.
            </p>
        </div>
    </section>
    );
}
