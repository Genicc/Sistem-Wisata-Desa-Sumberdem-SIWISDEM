import KampungKopiSection from "@/components/section/kampungkopi-section"
import DestinationSection from "@/components/section/destination-section"
import KampungLemonSection from "@/components/section/kampunglemon-section"
import KampungKRPLSection from "@/components/section/kampungkrpl-section"
import KampungRosellaSection from "@/components/section/kampungrosella-section"
import KampungTernakSection from "@/components/section/kampungternak-section"

export default function ProfilPage() {
  return (
    <div className="relative flex flex-col min-h-full">
      <main className="flex-grow mt-12"> {/* Margin top to account for fixed header */}
        <DestinationSection/>
        <KampungKopiSection />
        <KampungLemonSection />
        <KampungKRPLSection />
        <KampungRosellaSection />
        <KampungTernakSection />

      </main>
    </div>
  )
}