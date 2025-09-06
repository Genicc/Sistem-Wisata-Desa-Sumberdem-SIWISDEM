// app/galeri/page.tsx
import Image from "next/image";

export default function GaleriPage() {
    return (
        <div className="w-full min-h-screen bg-white px-6 py-10 pt-10">
        {/* Judul */}
        <h1 className="text-center text-4xl md:text-5xl text-[#0a2240] mb-6 font-semibold md:transform md:-translate-x-45 md:translate-y-25">
            GALERI FOTO
        </h1>

        {/* Grid Foto */}
        {/* Mobile: 2 kolom; PC (≥ md): kembali ke layout asli (3 kolom, items-end, gap-6) */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 max-w-6xl mx-auto md:items-end">
            {/* Foto kiri atas */}
            <div className="overflow-hidden rounded-xl shadow-md aspect-square md:aspect-auto">
            <Image
                src="/images/foto3.jpg"
                alt="Jeep di jalan hijau"
                width={500}
                height={500}
                className="w-full h-full object-cover rounded-xl"
            />
            </div>

            {/* Foto tengah atas */}
            <div className="overflow-hidden rounded-xl shadow-md aspect-square md:aspect-auto">
            <Image
                src="/images/foto2.jpg"
                alt="Sekelompok orang duduk bersama"
                width={500}
                height={500}
                className="w-full h-full object-cover rounded-xl"
            />
            </div>

            {/* Foto kanan atas → besar (tetap h-[400px] di PC) */}
            <div className="overflow-hidden rounded-xl shadow-md aspect-square md:aspect-auto md:h-[400px]">
            <Image
                src="/images/foto1.jpg"
                alt="Rombongan jaket merah di taman bunga"
                width={800}
                height={800}
                className="w-full h-full object-cover rounded-xl"
            />
            </div>

            {/* Baris kedua */}
            <div className="overflow-hidden rounded-xl shadow-md aspect-square md:aspect-auto">
            <Image
                src="/images/foto4.jpg"
                alt="Sekelompok orang duduk bersama"
                width={500}
                height={500}
                className="w-full h-full object-cover rounded-xl"
            />
            </div>

            <div className="overflow-hidden rounded-xl shadow-md aspect-square md:aspect-auto">
            <Image
                src="/images/foto5.jpg"
                alt="Sekelompok orang duduk bersama"
                width={500}
                height={500}
                className="w-full h-full object-cover rounded-xl"
            />
            </div>

            <div className="overflow-hidden rounded-xl shadow-md aspect-square md:aspect-auto">
            <Image
                src="/images/foto6.jpg"
                alt="Sekelompok orang duduk bersama"
                width={500}
                height={500}
                className="w-full h-full object-cover rounded-xl"
            />
            </div>
        </div>
        </div>
    );
    }
