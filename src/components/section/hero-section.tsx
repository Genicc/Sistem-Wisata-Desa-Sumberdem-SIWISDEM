// components/HeroSection.tsx
import Image from 'next/image';

const HeroSection = () => {
  return (
      // Adjust pt-16 to account for both TopBar and Navbar heights
      <section id="home" className="relative h-[600px] flex items-center justify-center text-white text-center pt-24 md:pt-0">
        <Image
            src="/images/pintu.jpg"
            alt="Gapura Sumberdem Landscape"
            layout="fill"
            objectFit="cover"
            objectPosition="center top"
            quality={90}
            className="absolute inset-0 z-0"
        />
        <div className="absolute inset-0 bg-black opacity-50 z-10"></div>

        <div className="relative z-20 p-4 max-w-2xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
            Desa Sumberdem
          </h1>
          <p className="text-lg md:text-xl mb-8">
            Jelajahi wisata edukasi yang menarik.
          </p>
        </div>
      </section>
  );
};

export default HeroSection;