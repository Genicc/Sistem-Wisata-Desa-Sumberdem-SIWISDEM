"use client";
import { useRef, useEffect } from "react";

type Item = {
  title: string;
  video: string;
};

function DestinasiCard({ item }: { item: Item }) {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  
  const handleStarted = () => {
    const me = videoRef.current;
    if (!me) return;
    const others = document.querySelectorAll<HTMLVideoElement>('video[data-autoplay-card="1"]');
    others.forEach((v) => {
      if (v !== me && !v.paused) v.pause();
    });
  };

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;

    // iOS/Android autoplay rules
    v.muted = true;
    v.playsInline = true;

    // Play/pause berdasar visibilitas
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          const isVisible = e.isIntersecting && e.intersectionRatio >= 0.6;
          if (isVisible) {
            v.play().catch(() => {/* ignore */});
          } else {
            v.pause();
          }
        });
      },
      { threshold: [0, 0.6, 1] }
    );

    io.observe(v);

    
    const onVisibility = () => {
      if (document.hidden) v.pause();
    };
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      io.disconnect();
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  return (
    <div className="flex flex-col items-center rounded-xl overflow-hidden shadow-lg hover:scale-105 transform transition duration-300">
      
        <video
          ref={videoRef}
          src={item.video}
          loop
          data-autoplay-card="1"
          preload="metadata"
          className="w-full h-96 sm:h-64 md:h-72 object-cover"
          onMouseEnter={() => videoRef.current?.play()}
          onMouseLeave={() => videoRef.current?.pause()}
          onPlay={handleStarted}
        />


      <div className="bg-black text-white w-full py-2 text-center font-semibold text-base sm:text-lg">
        {item.title}
      </div>
    </div>
  );
}

export default function DestinasiTujuan() {
  const destinasi: Item[] = [
    { title: "KAMPUNG KOPI", video: "/videos/kampung-kopi.mp4" },
    { title: "KAMPUNG LEMON", video: "/videos/kampung-lemon.mp4" },
    { title: "KAMPUNG KRPL", video: "/videos/kampung-krpl.mov" },
    { title: "KAMPUNG ROSELA", video: "/videos/kampung-rosella.mov" },
    { title: "KAMPUNG TERNAK", video: "/videos/kampung-ternak.mp4" },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-12">
          DESTINASI TUJUAN
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-5 lg:gap-6">
          {destinasi.map((item, idx) => (
            <DestinasiCard key={idx} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
