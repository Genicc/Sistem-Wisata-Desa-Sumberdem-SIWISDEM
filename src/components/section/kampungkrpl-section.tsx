// components/KampungKRPLSection.tsx
"use client";

import Image from "next/image";
import { Great_Vibes, Lato } from "next/font/google";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

// Pastikan di globals.css:
// @import "swiper/css";

const greatVibes = Great_Vibes({ subsets: ["latin"], weight: "400" });
const lato = Lato({ subsets: ["latin"], weight: ["400", "700"] });

export default function KampungKRPLSection() {
    return (
        <section className="w-full py-10 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4">
            <div className="grid grid-cols-12 gap-6 lg:items-start items-stretch">
            {/* Kiri: Gambar hero + overlay (mengikuti Kampung Kopi) */}
            <div className="col-span-12 lg:col-span-8 lg:mt-24">
                <div className="relative w-full aspect-[16/10] rounded-lg overflow-hidden">
                <Image
                    src="/images/kampungkrpl.png"
                    alt="Kampung KRPL"
                    fill
                    className="object-cover"
                    priority
                    sizes="(max-width: 1024px) 100vw, 66vw"
                />
                <div className="absolute inset-0 bg-black/35" />

                {/* Overlay terpusat + padding */}
                <div className="relative z-10 w-full h-full flex flex-col items-center justify-center text-center text-white px-4">
                    {/* Judul (gambar teks) */}
                    <Image
                    src="/images/teks-kampungkrpl.png"
                    alt="Kampung KRPL"
                    width={500}
                    height={500}
                    className="mx-auto w-[70%] max-w-[420px] sm:max-w-[460px] lg:max-w-[500px]"
                    priority
                    />

                    {/* Subjudul (ukuran & leading sama) */}
                    <p
                    className={`${lato.className} mt-2 max-w-2xl text-sm sm:text-base lg:text-lg leading-relaxed`}
                    >
                    “KRPL, kampung yang memanfaatkan lahan jadi sumber sayur, buah, dan obat keluarga.”
                    </p>
                </div>
                </div>
            </div>

            {/* Kanan: Kartu deskripsi + aktivitas (mengikuti Kampung Kopi) */}
            <div className="col-span-12 lg:col-span-4 space-y-6">
                {/* Kartu deskripsi */}
                <div className="bg-[#117789] text-white rounded-md p-4 sm:p-5">
                <h3
                    className={`${greatVibes.className} text-3xl sm:text-4xl font-semibold mb-2`}
                >
                    Kampung KRPL
                </h3>
                <p className={`${lato.className} text-sm sm:text-[15px] leading-relaxed`}>
                    Di Kampung KRPL, hampir setiap rumah punya kebun kecil berisi
                    sayuran, buah, dan tanaman obat. Kampung ini terlihat hijau dan
                    asri, sekaligus memberi pelajaran tentang bagaimana masyarakat
                    bisa mandiri dengan pangan dari halaman sendiri. Pengunjung bisa
                    ikut memetik hasil panen segar dan belajar cara menanam langsung
                    dari warga.
                </p>
                </div>

                {/* Kartu aktivitas */}
                <div className="bg-[#117789] text-white rounded-md p-6">
                <div className="grid grid-cols-5 gap-4">
                    {/* Label kiri */}
                    <div className="col-span-5 lg:col-span-1 flex items-center justify-center pr-6">
                    <div
                        className={`${lato.className} text-center font-semibold leading-tight text-lg ml-7 sm:text-base lg:text-lg`}
                    >
                        <span className="block">Aktivitas</span>
                        <span className="block">Wisata</span>
                    </div>
                    </div>

                    {/* Isi kanan */}
                    <div
                    className={`${lato.className} col-span-5 lg:col-span-4 space-y-3 text-sm leading-snug pl-3`}
                    >
                    <div>
                        <p className="font-semibold">Welcome Drink Khas Desa</p>
                        <ul className="list-disc marker:text-white/80 pl-5">
                        <li>Minuman herbal segar dari hasil panen lokal.</li>
                        </ul>
                    </div>

                    <div>
                        <p className="font-semibold">Aktivitas Wisata Edukasi</p>
                        <ul className="list-disc marker:text-white/80 pl-5">
                        <li>
                            Cara budidaya, perawatan, dan sistem irigasi pancuran
                            layaknya air hujan.
                        </li>
                        </ul>
                    </div>

                    <div>
                        <p className="font-semibold">Pengalaman Interaktif</p>
                        <ul className="list-disc marker:text-white/80 pl-5">
                        <li>
                            Memetik langsung hasil panen segar dari kebun sayur,
                            buah, dan tanaman obat.
                        </li>
                        </ul>
                    </div>

                    <div>
                        <p className="font-semibold">Kuliner & Hidangan Khas</p>
                        <ul className="list-disc marker:text-white/80 pl-5">
                        <li>Hidangan desa dari hasil panen langsung, sehat dan lezat.</li>
                        </ul>
                    </div>
                    </div>
                </div>
                </div>
                {/* end kartu aktivitas */}
            </div>
            </div>

            {/* SLIDE FOTO — sama seperti Kopi: mobile 1 foto penuh, desktop 4 kartu 300×150 */}
            <div className="mt-10">
            <Swiper
                modules={[Autoplay]}
                autoplay={{ delay: 1500, disableOnInteraction: false }}
                loop
                className="w-full"
                breakpoints={{
                0: { slidesPerView: 1, spaceBetween: 12 },
                640: { slidesPerView: 1, spaceBetween: 14 },
                768: { slidesPerView: 1, spaceBetween: 16 },
                1024: { slidesPerView: 4, spaceBetween: 10 },
                }}
            >
                {[
                "/images/krpl1.jpg",
                "/images/krpl2.jpg",
                "/images/krpl3.jpg",
                "/images/krpl4.jpg",
                "/images/krpl5.jpg",
                "/images/krpl6.jpg",
                "/images/krpl7.jpg",
                "/images/krpl8.jpg",
                "/images/krpl9.jpg",
                "/images/krpl10.jpg",
                ].map((src, i) => (
                <SwiperSlide key={i} className="!h-auto !w-full lg:!w-auto">
                    <div
                    className="
                        relative
                        w-full aspect-[16/9]
                        rounded-xl overflow-hidden
                        sm:aspect-[4/3]
                        lg:w-[300px] lg:h-[150px] lg:aspect-auto
                    "
                    >
                    <Image
                        src={src}
                        alt={`Foto ${i + 1}`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 100vw, 300px"
                        priority={i < 2}
                    />
                    </div>
                </SwiperSlide>
                ))}
            </Swiper>
            </div>

            {/* Garis pembatas bawah */}
            <div className="mt-8 flex justify-center">
            <div className="border-b border-gray-300 w-full max-w-[200px]" />
            </div>
        </div>
        </section>
    );
}
