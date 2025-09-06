import PaketWisataSection from "@/components/section/paket-section";
import PilihanPaketSection from "@/components/section/pilihanpaket-section";
import FormPemesanan from "@/components/section/formpemesanan-section";
import TestimonialSection from "@/components/section/testimonial-section";

export default function PaketlPage() {
  return (
    <div className="relative flex flex-col min-h-full">
      <main className="flex-grow mt-12"> {/* Margin top to account for fixed header */}
        <PaketWisataSection />
        <PilihanPaketSection />
        <FormPemesanan />
        <TestimonialSection />

      </main>
    </div>
  )
}