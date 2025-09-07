// components/PilihanPaketSection.tsx
"use client";

import Image from "next/image";
import { Great_Vibes, Lato } from "next/font/google";
import {
    BookOpen,
    BadgeDollarSign,
    Home,
    Package,
    ChevronRight,
} from "lucide-react";

const greatVibes = Great_Vibes({ subsets: ["latin"], weight: "400" });
const lato = Lato({ subsets: ["latin"], weight: ["400", "700"] });

type Paket = {
    id: string;
    title: string;
    price: string;
    min: string;
    img: string;
    fasilitas: string[];
    note?: string;
};

const paketList: Paket[] = [
    {
        id: "paket-1",
        title: "Paket 1",
        price: "Rp. 125.000/orang",
        min: "Min 6 orang",
        img: "/images/paket1.png",
        fasilitas: [
        "Transportasi Pick up terbuka",
        "Welcome Drink",
        "Keliling kampung tematik Sumberdem Asri",
        "Makanan khas desa",
        ],
        note: "*Tersedia Tour Guide",
    },
    {
        id: "paket-2",
        title: "Paket 2",
        price: "Rp. 195.000/orang",
        min: "Min 4 orang",
        img: "/images/paket2.jpg",
        fasilitas: [
        "Transportasi JEEP (Maks. 4 orang)",
        "Welcome Drink",
        "Keliling kampung tematik Sumberdem Asri",
        "Coffee Break (Minuman khas Desa Sumberdem)",
        "Makanan khas desa",
        "Atraksi Budaya",
        ],
        note: "*Tersedia Tour Guide",
    },
    {
        id: "paket-3",
        title: "Paket 3",
        price: "Rp. 300.000/orang",
        min: "Min 6 orang",
        img: "/images/paket3.jpg",
        fasilitas: [
        "Transportasi JEEP (Maks. 4 orang)",
        "Welcome Drink",
        "Keliling kampung tematik Sumberdem Asri",
        "Coffee Break (Minuman khas Desa Sumberdem)",
        "Makanan khas desa",
        "Atraksi Budaya",
        "Souvenir UMKM",
        ],
        note: "*Tersedia Tour Guide",
    },
    {
        id: "paket-4",
        title: "Paket 4",
        price: "Rp. 750.000/orang",
        min: "Min 4 orang",
        img: "/images/paket4.jpg",
        fasilitas: [
        "Transportasi JEEP (Maks. 4 orang)",
        "Welcome Drink",
        "Keliling kampung tematik Sumberdem Asri",
        "Coffee Break (Minuman khas Desa Sumberdem)",
        "Makanan khas desa",
        "Atraksi Budaya",
        "Souvenir UMKM",
        "Homestay",
        ],
        note: "*Tersedia Tour Guide",
    },
];

const alasan = [
    { icon: BookOpen,        title: "Wisata Edukatif",    desc: "Belajar langsung dari warga lokal" },
    { icon: BadgeDollarSign, title: "Harga Terjangkau",   desc: "Paket fleksibel sesuai kebutuhan" },
    { icon: Home,            title: "Pengalaman Autentik",desc: "Rehat sejenak dari hiruk pikuk pekerjaan" },
    { icon: Package,         title: "Fasilitas Lengkap",  desc: "Welcome drink, konsumsi, dokumentasi, sarapan (jika menginap)" },
    ];

// >>> Atur offset header (px). Ubah sesuai tinggi navbar/header-mu.
const HEADER_OFFSET = 80;

// Fungsi scroll dengan offset (align start). Jika mau dipusatkan, lihat komentar di dalam.
function scrollToPemesanan(e?: React.MouseEvent) {
    e?.preventDefault();
    const el = document.getElementById("pemesanan"); // <-- pastikan SECTION FORM pakai id ini
    if (!el) return;

    // Mode align-start, dikurangi offset header
    const y =
        el.getBoundingClientRect().top + window.pageYOffset - HEADER_OFFSET;

    // --- Alternatif: pusatkan section jika tinggi section <= tinggi layar ---
    // const y =
    //   el.getBoundingClientRect().top +
    //   window.pageYOffset -
    //   Math.max((window.innerHeight - el.offsetHeight) / 2, 0);

    window.scrollTo({ top: y, behavior: "smooth" });
}

export default function PilihanPaketSection() {
    return (
        // Ganti id dari "pemesanan" -> "paket" agar tidak bentrok dengan target form
        <section id="paket" className="w-full bg-white">
            <div className="mx-auto max-w-7xl px-4 py-10 md:py-14">
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
                    {/* Kiri: Kartu Paket */}
                    <div className="lg:col-span-8">
                        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
                            {paketList.map((p) => (
                                <article
                                    key={p.id}
                                    className="flex flex-col rounded-xl border border-neutral-200 bg-white shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-2 hover:scale-[1.02]"
                                    >
                                    {/* Image */}
                                    <div className="relative h-36 w-full overflow-hidden rounded-t-xl md:h-32">
                                        <Image
                                        src={p.img}
                                        alt={p.title}
                                        fill
                                        className="object-cover"
                                        sizes="(max-width: 768px) 100vw, 25vw"
                                        />
                                    </div>

                                    {/* Content */}
                                    <div className="flex flex-col flex-grow p-4">
                                        <h3 className="text-center text-sm font-semibold text-[#0a2240]">
                                        {p.title}
                                        </h3>
                                        <p className="mt-1 text-center text-[13px] font-bold text-[#0a2240]">
                                        {p.price}
                                        </p>
                                        <p className="text-center text-[12px] text-neutral-600">
                                        ({p.min})
                                        </p>

                                        <div className="mt-3">
                                            <p className="text-[12px] font-semibold text-neutral-800">
                                                Fasilitas :
                                            </p>
                                            <ul className="mt-1 list-disc space-y-1 pl-5 text-[12px] leading-snug text-neutral-700">
                                                {p.fasilitas.map((f, i) => (
                                                <li key={i}>{f}</li>
                                                ))}
                                            </ul>
                                            {p.note && (
                                                <p className="mt-3 text-[11px] text-neutral-500">
                                                {p.note}
                                                </p>
                                            )}
                                        </div>

                                        {/* Tombol di bawah + scroll handler */}
                                        <div className="mt-auto">
                                            <a
                                                href="#pemesanan"
                                                onClick={scrollToPemesanan}
                                                className="flex w-full items-center justify-center rounded-full bg-[#2f9940] px-4 py-2 text-sm font-semibold text-white hover:bg-[#268236]"
                                            >
                                                Booking
                                                <ChevronRight className="ml-1 h-4 w-4" />
                                            </a>
                                        </div>
                                    </div>
                                </article>
                                ))}
                        </div>
                    </div>

                    {/* Kanan: Kenapa Memilih Kami */}
                    <div className="lg:col-span-4">
                        <h2
                        className={`${lato.className} mb-4 text-center text-2xl font-extrabold text-[#0a2240] md:text-3xl`}
                        >
                        Kenapa Memilih Kami
                        </h2>

                        <div className="space-y-4">
                        {alasan.map(({ icon: Icon, title, desc }, idx) => (
                            <div
                            key={idx}
                            className="flex items-center gap-4 rounded-2xl bg-[#e7f4ea] p-4"
                            >
                            <div className="flex items-center justify-center h-16 w-16 shrink-0 rounded-full bg-[#2f9940] text-white">
                                <Icon className="h-8 w-8" />
                            </div>
                            <div>
                                <p className="text-lg font-extrabold text-[#0a2240]">
                                {title}
                                </p>
                                <p className="text-sm text-neutral-700">{desc}</p>
                            </div>
                            </div>
                        ))}
                        </div>

                        {/* Garis tipis tengah (opsional) */}
                        <div className="mx-auto mt-8 h-px w-2/3 rounded bg-neutral-200" />
                    </div>
                </div>

                {/* Headline dekoratif opsional */}
                <div className="mt-10 text-center">
                <p className={`${greatVibes.className} text-3xl text-[#2f9940] md:text-4xl`}>
                    Jelajah Sumberdem Asri
                </p>
                </div>
            </div>
        </section>
    );
}
