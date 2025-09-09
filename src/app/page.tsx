import Dashboard from "@/components/section/dashboard";
import AboutSection from "@/components/section/about-section";
import DestinasiTujuan from "@/components/section/destinasiwisata-section";
import LokasiMap from "@/components/section/maps-section";

export default function Home() {
  return (
    <div className="relative flex flex-col min-h-full">
        <main className="flex-grow mt-auto">
          <Dashboard />
          <AboutSection />
          <DestinasiTujuan />
          <LokasiMap />

        </main>
      </div>

  );
}