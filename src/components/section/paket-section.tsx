import Image from "next/image";
import {Lato } from "next/font/google";

const lato = Lato({
    subsets: ["latin"],
    weight: ["400", "700"],
});

export default function PaketWisataSection() {
    return (
        <section className="relative w-full h-100 flex items-center justify-center text-center">
            {/* Background Gambar */}
            <Image
                src="/images/destinasi.png"
                alt="Kampung Tematik Sumberdem"
                fill
                priority
                className="object-cover"
            />
                
            {/* Overlay Hijau Transparan */}
            {/* <div className="absolute inset-0 bg-green-900/60"></div> */}
        
            {/* Konten Teks */}
            <div className="relative z-10 max-w-3xl px-5 flex flex-col items-center space-y-4 -mt-10">
                <Image
                src = "/images/pilihanpaket.png"
                alt="Eksplorasi"
                width={650}
                height={650}
                className="mb-1"
                />
        
                <p className={`${lato.className} text-white text-base md:text-2xl leading-relaxed font-medium -mt-15`}>
                Nikmati pengalaman wisata edukatif autentik, dan 
                    <span> berkesan di Desa Sumberdem Asri. </span>
                </p>
            </div>
        
            {/* Icon Panah ke bawah */}
            {/* <div className="absolute bottom-6 z-10">
                <div className="w-16 h-16 border-2 border-white rounded-full flex items-center justify-center">
                <span className="text-white text-4xl">&#x25BC;</span>
                </div>
            </div> */}
        </section>
    );
}