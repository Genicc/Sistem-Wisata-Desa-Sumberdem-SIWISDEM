"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";

type Item = {
    id: string;
    title: string;
    date: string;           // ISO
    category: string;       // "berita" | "event" | "pengumuman" | ...
    summary: string;
    image_url?: string;
    external_url?: string;
    featured?: boolean;
  // optional: location?: string;
};

const TABS = [
    { key: "semua", label: "SEMUA" },
    { key: "berita", label: "BERITA" },
    { key: "event", label: "EVENT" },
    { key: "pengumuman", label: "PENGUMUMAN" },
];

export default function InfoTerkiniSection() {
    const [items, setItems] = useState<Item[]>([]);
    const [tab, setTab] = useState<string>("semua");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        (async () => {
        setLoading(true);
        const res = await fetch("/api/info", { cache: "no-store" });
        const json = (await res.json()) as Item[];
        setItems(json);
        setLoading(false);
        })();
    }, []);

    const filtered = useMemo(() => {
        if (tab === "semua") return items;
        return items.filter((i) => i.category?.toLowerCase() === tab);
    }, [items, tab]);

    // Agenda terdekat = event dengan tanggal >= hari ini, pilih terdekat
    const agenda = useMemo(() => {
        const now = new Date();
        const onlyFutureEvents = items
        .filter((i) => i.category?.toLowerCase() === "event")
        .map((i) => ({ ...i, _d: new Date(i.date) }))
        .filter((i) => !isNaN(+i._d) && i._d >= new Date(now.toDateString()))
        .sort((a, b) => +a._d - +b._d);
        return onlyFutureEvents[0];
    }, [items]);

return (
    <section className="w-full py-6 md:py-8">
        <div className="max-w-6xl mx-auto px-4">
            {/* Judul halaman */}
            <h2 className="text-2xl md:text-3xl font-bold text-[#153A53] mb-4">InfoTerkini</h2>

            {/* Tabs */}
            <div className="flex flex-wrap gap-2 mb-6">
            {TABS.map((t) => {
                const active = tab === t.key;
                return (
                <button
                    key={t.key}
                    onClick={() => setTab(t.key)}
                    className={[
                    "px-4 py-1.5 rounded-full text-sm border transition",
                    active
                        ? "bg-[#1F7A5A] text-white border-[#1F7A5A]"
                        : "bg-white text-[#1F7A5A] border-[#1F7A5A] hover:bg-[#E8F3EE]",
                    ].join(" ")}
                >
                    {t.label}
                </button>
                );
            })}
            </div>

            <div className="grid grid-cols-12 gap-6">
            {/* Kolom konten kiri */}
            <div className="col-span-12 lg:col-span-8 space-y-6">
                {loading ? (
                <div className="text-gray-500">Memuat info…</div>
                ) : filtered.length === 0 ? (
                <div className="text-gray-600 border rounded-2xl p-6">
                    Belum ada informasi pada kategori ini.
                </div>
                ) : (
                <div className="grid grid-cols-12 gap-6">
                    {/* Kartu-kartu */}
                    {filtered.map((it, idx) => {
                    // tata letak: mirip gambar—kartu penuh lebar untuk pengumuman besar, lainnya 6/12
                    const isWide =
                        it.category?.toLowerCase() === "pengumuman" && idx < 2; // pengumuman besar di baris atas
                    const colClass = isWide
                        ? "col-span-12"
                        : "col-span-12 md:col-span-6";

                    const date = new Date(it.date);
                    const dateStr = date.toLocaleDateString("id-ID", {
                        day: "2-digit",
                        month: "long",
                        year: "numeric",
                    });

                    return (
                        <article
                        key={it.id}
                        className={`${colClass} rounded-2xl border-2 border-[#1F7A5A]/50 bg-white shadow-sm overflow-hidden`}
                        >
                        {/* Header gambar bila ada */}
                        {it.image_url && (
                            <div className="relative w-full aspect-[16/10]">
                            <Image
                                src={it.image_url}
                                alt={it.title}
                                fill
                                className="object-cover"
                            />
                            </div>
                        )}

                        <div className="p-4 md:p-5">
                            {/* Badge kategori */}
                            <div className="mb-2">
                            <span className="inline-flex items-center rounded-full bg-[#E8F3EE] text-[#1F7A5A] text-[11px] font-medium px-3 py-1 uppercase tracking-wide">
                                {it.category || "Info"}
                            </span>
                            </div>

                            {/* Judul */}
                            <h3 className="text-[17px] md:text-lg font-semibold leading-snug mb-2">
                            {it.title}
                            </h3>

                            {/* Ringkasan */}
                            <p className="text-sm text-gray-700 leading-relaxed line-clamp-4 mb-3">
                            {it.summary}
                            </p>

                            {/* Footer kartu */}
                            <div className="flex items-center justify-between text-xs text-gray-500">
                            <span>{dateStr}</span>
                            <a
                                href={it.external_url ?? `/info/${it.id}`}
                                target={it.external_url ? "_blank" : "_self"}
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1 text-[#1F7A5A] font-medium hover:underline"
                            >
                                Baca selengkapnya
                                <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="w-4 h-4"
                                >
                                <path d="M13.5 4.5a.75.75 0 0 1 .75-.75h5.25a.75.75 0 0 1 .75.75v5.25a.75.75 0 0 1-1.5 0V6.31l-8.72 8.72a.75.75 0 1 1-1.06-1.06l8.72-8.72h-3.44a.75.75 0 0 1-.75-.75z" />
                                <path d="M5.25 5.25A2.25 2.25 0 0 0 3 7.5v11.25A2.25 2.25 0 0 0 5.25 21h11.25A2.25 2.25 0 0 0 18.75 18.75V12a.75.75 0 0 0-1.5 0v6.75c0 .414-.336.75-.75.75H5.25a.75.75 0 0 1-.75-.75V7.5c0-.414.336-.75.75-.75H12a.75.75 0 0 0 0-1.5H5.25z" />
                                </svg>
                            </a>
                            </div>
                        </div>
                        </article>
                    );
                    })}
                </div>
                )}
            </div>

            {/* Sidebar kanan */}
            <aside className="col-span-12 lg:col-span-4 space-y-6">
                {/* Agenda Terdekat */}
                <div className="rounded-2xl border-2 border-[#1F7A5A]/50 bg-white p-5">
                <div className="text-sm font-semibold text-[#153A53] mb-3">
                    AGENDA TERDEKAT
                </div>

                {agenda ? (
                    <div className="space-y-2">
                    <div className="flex items-center gap-2 text-[12px] text-gray-600">
                        <span className="inline-flex px-2 py-0.5 rounded-full bg-[#E8F3EE] text-[#1F7A5A]">
                        {new Date(agenda.date).toLocaleDateString("id-ID", {
                            day: "2-digit",
                            month: "short",
                            year: "numeric",
                        })}
                        </span>
                        <span className="text-gray-500">|</span>
                        <span className="truncate max-w-[60%]">
                        {agenda.title}
                        </span>
                    </div>
                    <a
                        href={agenda.external_url ?? `/info/${agenda.id}`}
                        target={agenda.external_url ? "_blank" : "_self"}
                        rel="noopener noreferrer"
                        className="text-sm text-[#1F7A5A] font-medium hover:underline"
                    >
                        Lihat detail agenda
                    </a>
                    </div>
                ) : (
                    <div className="text-gray-500 text-sm">Belum ada agenda mendatang.</div>
                )}
                </div>

                {/* Kartu “Terima Kasih” (statis sesuai gambar) */}
                {/* <div className="rounded-2xl overflow-hidden border-2 border-[#1F7A5A]/50">
                <div className="relative">
                    <div className="h-64 bg-[url('/images/bg-terimakasih.jpg')] bg-cover bg-center" />
                    <div className="absolute inset-0 bg-[#1F7A5A]/75" />
                    <div className="absolute inset-0 p-6 flex flex-col items-center justify-center text-center text-white">
                    <div className="text-2xl font-extrabold leading-tight">
                        TERIMA<br />KASIH
                    </div>
                    <div className="mt-3 text-sm max-w-xs leading-relaxed">
                        Kami berharap kunjungan Anda di Desa Sumberdem
                        menjadi pengalaman yang menyenangkan dan berkesan
                    </div>
                    <div className="mt-4 font-semibold">Desa Sumberdem</div>
                    </div>
                </div>
                </div> */}

                <div className="col-span-12 md:col-span-4">
                    <div className="h-full border border-green-600 rounded-lg overflow-hidden">
                        <Image
                            src="/images/terimakasih.jpg" // ganti sesuai nama file gambar fix kamu
                            alt="Ucapan Terima Kasih"
                            width={400}
                            height={500}
                            className="object-cover w-full h-full"
                        />
                    </div>
                </div>

            </aside>
            </div>
        </div>
        </section>
    );
}
