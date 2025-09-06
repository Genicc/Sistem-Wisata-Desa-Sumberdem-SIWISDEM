import InfoTerkiniSection from "@/components/section/infoterkini-section";

export default function InfoTerkiniPage() {
  return (
    <div className="relative flex flex-col min-h-full">
        <main className="flex-grow mt-12"> {/* Margin top to account for fixed header */}
          <InfoTerkiniSection/>
          
        </main>
      </div>

  );
}