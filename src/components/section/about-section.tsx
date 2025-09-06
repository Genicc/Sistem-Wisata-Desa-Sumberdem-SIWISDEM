import Image from "next/image";

export default function AboutSection() {
  return (
    <section className="w-full bg-gray-50 py-12 px-6 md:px-16">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
        {/* Gambar Kiri */}
        <div className="overflow-hidden rounded-xl shadow-lg">
          <Image
            src="/images/gerbang.jpg"
            alt="Gapura Desa Sumberdem"
            width={700}
            height={400}
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Konten Kanan */}
        <div className="space-y-4">
          <h2 className="text-5xl font-extrabold text-gray-900">DESA SUMBERDEM</h2>
          <h3 className="text-xl font-semibold text-gray-800 uppercase tracking-wide">
            Rasakan Harmoni Alam, Budaya, dan Inovasi
          </h3>
          <p className="text-gray-700 leading-relaxed text-justify">
            Kampung Tematik Sumberdem menghadirkan pengalaman wisata unik melalui lima kampung tematik: Kopi, Lemon, KRPL, Rosela, dan Ternak. Setiap kampung menawarkan cerita khas, kearifan lokal, serta suasana pedesaan yang menyejukkan hati.
          </p>
          <button className="mt-4 px-6 py-2 border-2 border-black rounded-full text-black font-semibold hover:bg-black hover:text-white transition">
            READ MORE
          </button>
        </div>
      </div>
    </section>
  );
}
