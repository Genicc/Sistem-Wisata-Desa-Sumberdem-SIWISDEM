// app/form-pemesanan/page.tsx
"use client";

import { useState } from "react";
import Swal from "sweetalert2";
import { CalendarDays, Users } from "lucide-react";

export default function FormPemesanan() {
    const bgUrl = "/images/bg-pemesanan.png";
    const nomorWA = "6281331333220";

    const [form, setForm] = useState({
        nama: "",
        email: "",
        nomorwa: "",
        jumlah: "",
        tanggal: "",
        paket: "",
    });

    const openWA = () => {
        const pesan = `Halo, saya ingin info paket wisata.\n\nNama: ${form.nama}\nEmail: ${form.email}\nJumlah: ${form.jumlah}\nTanggal: ${form.tanggal}\nPaket: ${form.paket}`;
        window.open(
        `https://wa.me/${nomorWA}?text=${encodeURIComponent(pesan)}`,
        "_blank"
        );
    };

    const [loading, setLoading] = useState(false);

    const onChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => setForm((s) => ({ ...s, [e.target.name]: e.target.value }));

    const onSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
        const payload = {
            nama_lengkap_instansi: form.nama.trim(),
            email: form.email.trim(),
            nomor_wa: form.nomorwa.trim(),
            jumlah_peserta: Number(form.jumlah || 0),
            tanggal_kunjungan: form.tanggal,
            pilihan_paket: form.paket,
        };

        const res = await fetch("/api/submit", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload),
        });

        const json = await res.json();
        if (!res.ok || !json.ok) throw new Error(json.error || "Gagal mengirim");

        await Swal.fire({
            icon: "success",
            title: "Pemesanan Terkirim!",
            text: "Terima kasih, kami akan segera menghubungi Anda.",
            confirmButtonColor: "#2f6c2f",
        });

        setForm({ nama: "", email: "", nomorwa: "", jumlah: "", tanggal: "", paket: "" });
        } catch (err: any) {
        await Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Gagal mengirim: " + (err?.message || "Terjadi kesalahan."),
        });
        } finally {
        setLoading(false);
        }
    };

    return (
        <section
        id="pemesanan"
        className="min-h-screen w-full bg-center bg-cover flex item-center justify-center"
        style={{
            backgroundImage: `linear-gradient(rgba(14,39,14,.65), rgba(14,39,14,.65)), url(${bgUrl})`,
        }}
        >
        <div className=" max-w-5xl px-6 py-14 mt-25">
            {/* Heading */}
            <h1 className="text-white leading-tight drop-shadow-sm">
            <span className="block text-4xl md:text-5xl lg:text-6xl font-semibold">
                Pesan Sekarang
            </span>
            <span className="block text-3xl md:text-4xl lg:text-5xl font-semibold">
                & Nikmati Perjalanannya!
            </span>
            </h1>

            {/* FORM */}
            <form onSubmit={onSubmit} className="mt-8 text-white/95 max-w-3xl space-y-6">
            {/* Nama */}
            <div>
                <label className="block text-sm md:text-base mb-2">Nama Lengkap / Instansi</label>
                <input
                name="nama"
                value={form.nama}
                onChange={onChange}
                required
                className="w-full bg-transparent outline-none border-b-2 border-white/70 focus:border-white py-2"
                type="text"
                />
            </div>

            {/* Email & Nomor WA */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                <label className="block text-sm md:text-base mb-2">Email</label>
                <input
                    name="email"
                    value={form.email}
                    onChange={onChange}
                    required
                    className="w-full bg-transparent outline-none border-b-2 border-white/70 focus:border-white py-2"
                    type="email"
                />
                </div>
                <div>
                <label className="block text-sm md:text-base mb-2">Nomor WhatsApp</label>
                <input
                    name="nomorwa"
                    value={form.nomorwa}
                    onChange={onChange}
                    required
                    className="w-full bg-transparent outline-none border-b-2 border-white/70 focus:border-white py-2"
                    type="tel"
                    placeholder="08xxxxxxxxxx"
                />
                </div>
            </div>

            {/* Jumlah & Tanggal */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="relative">
                <label className="block text-sm md:text-base mb-2">Jumlah peserta</label>
                <input
                    name="jumlah"
                    value={form.jumlah}
                    onChange={onChange}
                    required
                    min={1}
                    className="w-full bg-transparent outline-none border-b-2 border-white/70 focus:border-white py-2 pr-10"
                    type="number"
                />
                <Users className="absolute right-0 bottom-2 h-6 w-6 opacity-90" />
                </div>
                <div className="relative">
                <label className="block text-sm md:text-base mb-2">Tanggal kunjungan</label>
                <input
                    name="tanggal"
                    value={form.tanggal}
                    onChange={onChange}
                    required
                    className="w-full bg-transparent outline-none border-b-2 border-white/70 focus:border-white py-2 pr-10 [color-scheme:dark]"
                    type="date"
                />
                <CalendarDays className="absolute right-0 bottom-2 h-6 w-6 opacity-90" />
                </div>
            </div>

            {/* Pilihan Paket */}
            <div className="relative">
                <label className="sr-only">Pilihan Paket</label>
                <div className="flex items-center border-2 border-[#2f6c2f] bg-white rounded-md">
                <select
                    name="paket"
                    value={form.paket}
                    onChange={onChange}
                    required
                    className="w-full appearance-none bg-transparent px-4 py-3 text-gray-800 outline-none"
                >
                    <option value="">Pilihan Paket</option>
                    <option value="Paket 1">Paket 1</option>
                    <option value="Paket 2">Paket 2</option>
                    <option value="Paket 3">Paket 3</option>
                    <option value="Paket 4">Paket 4</option>
                </select>
                <div className="mr-2 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#2f6c2f]">
                    <svg viewBox="0 0 24 24" className="h-5 w-5 text-white" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M6 9l6 6 6-6" />
                    </svg>
                </div>
                </div>
            </div>

            {/* Tombol */}
            <div className="flex flex-col gap-4 pt-2 md:flex-row md:items-center md:justify-between">
                <button
                type="submit"
                disabled={loading}
                className="px-6 py-3 rounded-full bg-white text-[#2f6c2f] font-semibold shadow hover:opacity-90 transition disabled:opacity-60"
                >
                {loading ? "Mengirim…" : "Kirim Pemesanan"}
                </button>

                <button
                type="button"
                onClick={openWA}
                className="px-6 py-3 rounded-full bg-[#2f6c2f] text-white font-semibold shadow hover:bg-[#275a27] transition md:ml-auto"
                >
                Contact Person
                </button>
            </div>

            <p className="text-xs text-white mt-2 text-center lg:md:text-right sm:md:text-center">
                *ada pertanyaan atau konfirmasi ulang? Silahkan klik Contact Person.
            </p>
            
            </form>
        </div>
        </section>
    );
}
