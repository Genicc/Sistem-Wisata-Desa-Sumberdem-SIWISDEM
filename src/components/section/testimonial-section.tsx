// components/TestimonialsSection.tsx
import Image from "next/image";
import { Lato } from "next/font/google";

const lato = Lato({ subsets: ["latin"], weight: ["400", "700"] });

type Testimonial = {
    name: string;
    avatar: string;
    text: string;
    };

const testimonials: Testimonial[] = [
    {
        name: "Srujiyanto",
        avatar: "/images/pp.jpg",
        text: "Mantab, penduduknya ramah, dan bisa beli kopi dgn hrga yg terjangkau.",
    },
    {
        name: "Sava Travel Photography",
        avatar: "/images/pp.jpg",
        text: "Tempat adem ayem dengan kehidupan yang ramah, terdapat perkebunan kopi yang sangat luas.",
    },
    {
        name: "Saekhun Hidayat",
        avatar: "/images/pp.jpg",
        text: "Tempat budidaya sekaligus wisata kopi paling nikmat dan ramah di Malang.",
    },
];

// star icon (filled)
function Star() {
    return (
        <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className="w-5 h-5"
        fill="currentColor"
        >
        <path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.62L12 2 9.19 8.62 2 9.24l5.46 4.73L5.82 21 12 17.27z" />
        </svg>
    );
}

export default function TestimonialsSection() {
    return (
        <section className={`w-full ${lato.className} mt-28`}>
            
            <h2 className="${lato.className} text-center text-3xl md:text-5xl font-extrabold text-[#3E7914] mb-8">
                Apa kata mereka?
            </h2>

            {/* Bagian hijau untuk kartu */}
            <div className="bg-[#254418] py-10 md:py-34">
                <div className="max-w-[90rem] mx-auto px-4 sm:px-6">
                    {/* Grid Cards */}
                    <div className="grid gap-6 md:gap-8 grid-cols-1 md:grid-cols-3">
                        {testimonials.map((item, idx) => (
                            <article
                                key={idx}
                                className="bg-[#F3EAD9] rounded-xl p-6 md:p-7 shadow-sm"
                                >
                                
                                <p className="text-[#1b1b1b]/90 leading-relaxed">{item.text}</p>

                                {/* Footer */}
                                <div className="mt-6 flex items-center gap-3">
                                    <div className="relative w-12 h-12 rounded-full overflow-hidden ring-2 ring-white/70">
                                        <Image
                                        src={item.avatar}
                                        alt={item.name}
                                        fill
                                        className="object-cover"
                                        />
                                    </div>

                                    <div className="flex flex-col">
                                        <span className="font-bold text-[#1b1b1b]">{item.name}</span>
                                        <div className="mt-1 flex items-center gap-1 text-[#F59E0B]">
                                            <Star />
                                            <Star />
                                            <Star />
                                            <Star />
                                            <Star />
                                        </div>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
