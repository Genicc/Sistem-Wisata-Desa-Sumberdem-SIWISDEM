// components/InfoTerkiniSection.tsx
"use client";

import Image from "next/image";

export default function InfoTerkiniSection() {
  return (
    <section className="w-full py-10 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Judul */}
        <h2 className="text-4xl font-bold text-black-900 mb-6 text-center">Info Terkini</h2>

        {/* Filter Tabs (tetap) */}
        <div className="flex flex-wrap gap-3 mb-6 justify-start md:justify-start">
          {["Semua", "Berita", "Event", "Pengumuman"].map((item, idx) => (
            <button
              key={idx}
              className="px-4 py-1 border rounded-full text-green-700 border-green-700 hover:bg-green-600 hover:text-white transition"
            >
              {item.toUpperCase()}
            </button>
          ))}
        </div>

        {/* ====== LAYOUT 2 KOLOM: KIRI (GRID KONTEN) + KANAN (SIDEBAR) ====== */}
        <div className="grid grid-cols-12 gap-6">
          {/* KIRI: GRID KONTEN (tetap 4 kartu, 2x2 di desktop) */}
          <div className="col-span-12 md:col-span-8">
            <div className="grid grid-cols-12 gap-6">
              {/* Kegiatan */}
              <div className="col-span-12 md:col-span-6">
                <div className="h-full border border-green-600 rounded-lg p-4 flex flex-col justify-between 
                                transition-all duration-300 hover:shadow-lg hover:-translate-y-2 hover:scale-[1.02]">
                  <div>
                    <div className="text-sm text-white bg-green-600 inline-block px-3 py-1 rounded mb-3">
                      KEGIATAN
                    </div>
                    <Image
                      src="/images/info1.png"
                      alt="Kegiatan"
                      width={400}
                      height={200}
                      className="rounded-md mb-3 w-full object-cover"
                    />
                    <h3 className="font-bold text-gray-800 mb-2">
                      Akselerasi Kampung Eduwisata di Desa Sumberdem, UM Berikan
                      Penguatan SDM dan Penataan Lingkungan Hijau
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Melalui kegiatan ini diharapkan mampu memberikan dampak bagi
                      pertumbuhan ekonomi masyarakat yang berkelanjutan...
                    </p>
                  </div>
                  <div className="flex justify-between text-sm text-green-700 font-semibold mt-4">
                    <span>22 Juli 2024</span>
                    <a href="#">Baca selengkapnya</a>
                  </div>
                </div>
              </div>

              {/* Pengumuman */}
              <div className="col-span-12 md:col-span-6">
                <div className="h-full border border-green-600 rounded-lg p-4 flex flex-col justify-between 
                                transition-all duration-300 hover:shadow-lg hover:-translate-y-2 hover:scale-[1.02]">
                  <div>
                    <div className="text-sm text-white bg-green-600 inline-block px-3 py-1 rounded mb-3">
                      PENGUMUMAN
                    </div>
                    <Image
                      src="/images/kampungkopi.jpg"
                      alt="Kegiatan"
                      width={400}
                      height={200}
                      className="rounded-md mb-3 w-full object-cover"
                    />
                    <h3 className="font-bold text-gray-800 mb-2">
                      Pengumuman : Peraturan Baru untuk Pengunjung
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Kami memberitahukan peraturan baru yang berlaku bagi para
                      pengunjung ...
                    </p>
                  </div>
                  <div className="flex justify-between text-sm text-green-700 font-semibold mt-4">
                    <span>22 Juli 2024</span>
                    <a href="#">Baca selengkapnya</a>
                  </div>
                </div>
              </div>

              {/* Event */}
              <div className="col-span-12 md:col-span-6">
                <div className="h-full border border-green-600 rounded-lg p-4 flex flex-col justify-between 
                                transition-all duration-300 hover:shadow-lg hover:-translate-y-2 hover:scale-[1.02]">
                  <div>
                    <div className="text-sm text-white bg-green-600 inline-block px-3 py-1 rounded mb-3">
                      EVENT
                    </div>
                    <Image
                      src="/images/info2.jpg"
                      alt="Event"
                      width={400}
                      height={200}
                      className="rounded-md mb-3 w-full object-cover"
                    />
                    <h3 className="font-bold text-gray-800 mb-2">
                      Rangkaian atraksi budaya “Bantengan” di Festival Desa
                      Sumberdem 2024
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Lestarikan budaya lokal dengan atraksi seni bantengan...
                    </p>
                  </div>
                  <div className="flex justify-between text-sm text-green-700 font-semibold mt-4">
                    <span>27 April 2024</span>
                    <a href="#">Baca selengkapnya</a>
                  </div>
                </div>
              </div>

              {/* Produk UMKM */}
              <div className="col-span-12 md:col-span-6">
                <div className="h-full border border-green-600 rounded-lg p-4 flex flex-col justify-between 
                                transition-all duration-300 hover:shadow-lg hover:-translate-y-2 hover:scale-[1.02]">
                  <div>
                    <div className="text-sm text-white bg-green-600 inline-block px-3 py-1 rounded mb-3">
                      PRODUK UMKM
                    </div>
                    <Image
                      src="/images/info3.webp"
                      alt="Event"
                      width={400}
                      height={200}
                      className="rounded-md mb-3 w-full object-cover"
                    />
                    <h3 className="font-bold text-gray-800 mb-2">
                      “Segar &amp; Menyehatkan: Minuman Rosella-Are Khas Desa
                      Sumberdem”
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Perpaduan segar rasa lemon dan hangatnya jahe memberikan
                      pengalaman minum teh yang cocok untuk semua kalangan...
                    </p>
                  </div>
                  <div className="flex justify-between text-sm text-green-700 font-semibold mt-4">
                    <span>27 April 2024</span>
                    <a href="#">Baca selengkapnya</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* KANAN: SIDEBAR (AGENDA + UCAPAN TERIMA KASIH DI LUAR GRID KONTEN) */}
          <div className="col-span-12 md:col-span-4">
            {/* Agenda Terdekat */}
            <div className="border border-green-600 rounded-lg p-4">
              <h3 className="font-bold text-gray-800 mb-2">AGENDA TERDEKAT</h3>
              <p className="text-gray-700 text-sm">KUNJUNGAN PKK MALANG</p>
              <div className="flex items-center gap-2 mt-1">
                <p className="text-gray-600 text-sm">3 Okt 2024</p>
                <span className="text-gray-400">|</span>
                <p className="text-gray-600 text-sm">Kampung Kopi</p>
              </div>
            </div>

            {/* Ucapan Terima Kasih — DI LUAR GRID, tepat di bawah agenda */}
            <div className="mt-6 rounded-lg overflow-hidden">
              <Image
                src="/images/terimakasih.jpg"
                alt="Ucapan Terima Kasih"
                width={600}
                height={800}
                className="w-full h-full object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
