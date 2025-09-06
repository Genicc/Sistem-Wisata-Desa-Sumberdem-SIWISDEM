"use client";

import Image from "next/image";
import { Great_Vibes, Lato } from "next/font/google";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

// pastikan css Swiper sudah diimport di globals.css:
// @import "swiper/css";

const greatVibes = Great_Vibes({ subsets: ["latin"], weight: "400" });
const lato = Lato({ subsets: ["latin"], weight: ["400", "700"] });

export default function KampungKopiSection() {
    return (
        <section className="w-full py-10 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4">
            <div className="grid grid-cols-12 gap-6 lg:items-start items-stretch">
            {/* Kiri */}
            <div className="col-span-12 lg:col-span-8 lg:mt-21">
                <div className="relative w-full aspect-[16/10] rounded-lg overflow-hidden">
                <Image
                    src="/images/kampungkopi.jpg"
                    alt="Kampung Kopi"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-black/35" />

                {/* Overlay */}
                <div className="relative z-10 w-full h-full flex flex-col items-center justify-center text-center text-white px-4">
                    {/* Judul */}
                    <Image
                    src="/images/teks-kampungkopi.png"
                    alt="Eksplorasi"
                    width={500}
                    height={500}
                    className="mx-auto w-[70%] max-w-[420px] sm:max-w-[460px] lg:max-w-[500px]"
                    priority
                    />

                    {/* Subjudul */}
                    <p
                    className={`${lato.className} mt-2 max-w-2xl text-sm sm:text-base lg:text-lg leading-relaxed`}
                    >
                    Menyusuri jejak biji kopi dari kebun hingga secangkir hangat.
                    </p>
                </div>
                </div>
            </div>

            {/* Kanan */}
            <div className="col-span-12 lg:col-span-4 space-y-6">
                {/* Kartu deskripsi */}
                <div className="bg-[#117789] text-white rounded-md p-4 sm:p-5">
                <h3
                    className={`${greatVibes.className} text-3xl sm:text-4xl font-semibold mb-2`}
                >
                    Kampung Kopi
                </h3>
                <p className={`${lato.className} text-sm sm:text-[15px] leading-relaxed`}>
                    Di Kampung Kopi, pengunjung bisa merasakan suasana kebun kopi
                    yang sejuk sambil melihat langsung proses pembuatan kopi, mulai
                    dari memetik biji, mengolah, sampai menyeduh. Aroma kopi segar
                    yang khas akan menemani setiap langkah, ditambah cerita menarik
                    dari warga tentang tradisi minum kopi yang sudah turun-temurun.
                </p>
                </div>

                {/* Kartu aktivitas */}
                <div className="bg-[#117789] text-white rounded-md p-6">
                    <div className="grid grid-cols-5 gap-4">
                        {/* Label kiri — desktop persis seperti versi kamu */}
                        <div className="col-span-5 lg:col-span-1 flex items-center justify-center pr-6">
                        <div
                            className={`${lato.className} text-center font-semibold leading-tight text-lg ml-7
                                        sm:text-base lg:text-lg`} // mobile boleh lebih kecil, desktop tetap sama
                        >
                            <span className="block">Aktivitas</span>
                            <span className="block">Wisata</span>
                        </div>
                        </div>

                        {/* Isi kanan — desktop tetap col-span-4 + pl-3 */}
                        <div className={`${lato.className} col-span-5 lg:col-span-4 space-y-3 text-sm leading-snug pl-3`}>
                        <div>
                            <p className="font-semibold">Welcome Drink Khas Desa</p>
                            <ul className="list-disc marker:text-white/80 pl-5">
                            <li>Secangkir kopi segar yang diracik langsung oleh barista lokal.</li>
                            </ul>
                        </div>

                        <div>
                            <p className="font-semibold">Aktivitas Wisata Edukasi</p>
                            <ul className="list-disc marker:text-white/80 pl-5">
                            <li>Penjelasan proses kopi dari biji hingga menjadi minuman, dipandu oleh tour guide.</li>
                            </ul>
                        </div>

                        <div>
                            <p className="font-semibold">Pengalaman Interaktif</p>
                            <ul className="list-disc marker:text-white/80 pl-5">
                            <li>Bersantai di gazebo samping kebun kopi sambil menikmati jajanan khas desa.</li>
                            </ul>
                        </div>

                        <div>
                            <p className="font-semibold">Oleh-oleh & Produk Lokal</p>
                            <ul className="list-disc marker:text-white/80 pl-5">
                            <li>Kopi 1998 (Kopi kemasan khas Desa Sumberdem).</li>
                            </ul>
                        </div>
                        </div>
                    </div>
                </div>
                {/* end kartu aktivitas */}
            </div>
            </div>

            {/* SLIDE FOTO */}
            <div className="mt-10">
                <Swiper
                    modules={[Autoplay]}
                    autoplay={{ delay: 1500, disableOnInteraction: false }}
                    loop
                    className="w-full"
                    breakpoints={{
                    // mobile/tablet: hanya 1 foto penuh
                    0:    { slidesPerView: 1, spaceBetween: 12 },
                    640:  { slidesPerView: 1, spaceBetween: 14 },
                    768:  { slidesPerView: 1, spaceBetween: 16 },
                    // desktop: desain aslimu
                    1024: { slidesPerView: 4, spaceBetween: 10 },
                    }}
                >
                    {[
                    "/images/kopi1.webp",
                    "/images/kopi2.jpg",
                    "/images/kopi3.jpg",
                    "/images/kopi4.jpg",
                    "/images/kopi5.jpg",
                    "/images/kopi6.jpg",
                    "/images/kopi7.jpg",
                    "/images/kopi8.jpg",
                    "/images/kopi9.jpg",
                    ].map((src, i) => (
                    <SwiperSlide key={i} className="!h-auto !w-full lg:!w-auto">
                        {/* MOBILE: gambar lebar penuh dengan tinggi proporsional */}
                        {/* DESKTOP: tetap ukuran 300x150 */}
                        <div 
                            className="
                                relative 
                                w-full aspect-[16/9]
                                rounded-xl overflow-hidden 
                                sm:aspect-[4/3]
                                lg:w-[300px] lg:h-[150px] lg:aspect-auto">
                                
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
