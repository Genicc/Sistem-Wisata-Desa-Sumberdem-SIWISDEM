// app/page.tsx
import Image from "next/image";
import { Dancing_Script, Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: "400",
});

const dancing = Dancing_Script({
  subsets: ["latin"],
  weight: "700",
});

export default function Home() {
  return (
    <section className="relative w-full h-screen">
      {/* Background Image */}
      <Image
        src="/images/kawi.jpg"
        alt="Desa Sumberdem"
        layout="fill"
        objectFit="cover"
        priority
      />

      {/* Overlay gelap tipis biar teks lebih jelas */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Text Section */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
        <h2 className={`${playfair.className} text-2xl sm:text-4xl md:text-6xl font-normal`}>
          Kampung Tematik Nan Asri
        </h2>
        <h1 className={`${dancing.className} text-4xl sm:text-6xl md:text-9xl font-bold mt-2`}>
          Desa Sumberdem
        </h1>
      </div>
    </section>
  );
}
