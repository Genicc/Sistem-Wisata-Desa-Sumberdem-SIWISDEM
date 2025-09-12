// components/InfoTerkiniSection.tsx
"use client";

import { useEffect, useState, useMemo } from "react";
import Image from "next/image";
import { getInfos } from "@/services/api/info";
import { ChevronLeft, ChevronRight } from "lucide-react";

type Category = "Semua" | "Berita" | "Event" | "Pengumuman" | "Produk UMKM";

/* ====== API types (match your Strapi response) ====== */
type UploadFormat = {
  name: string;
  hash: string;
  ext: string;
  mime: string;
  path: string | null;
  width: number;
  height: number;
  size: number;
  sizeInBytes: number;
  url: string;
};

type UploadFormats = {
  thumbnail?: UploadFormat;
  small?: UploadFormat;
  medium?: UploadFormat;
  large?: UploadFormat;
};

type UploadFile = {
  id: number;
  documentId: string;
  name: string;
  alternativeText: string | null;
  caption: string | null;
  width: number;
  height: number;
  formats?: UploadFormats;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: string | null;
  provider: string;
  provider_metadata: any | null;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
};

type InfoApiRow = {
  id: number;
  documentId: string;
  title: string;
  slug: string;
  category: string;
  sourceUrl: string;
  date: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  cover?: UploadFile | null;
};

type ApiResponse<T> = {
  data: T[];
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
};

/* ====== UI type ====== */
type InfoItem = {
  id: number;
  title: string;
  slug: string;
  category: string;
  sourceUrl: string;
  date: string;
  coverUrl?: string;
};

const STRAPI_URL =
  process.env.NEXT_PUBLIC_STRAPI_URL || "https://respected-desk-20258e8518.strapiapp.com"; 
const mediaUrl = (url?: string) =>
  url?.startsWith("https") ? url : `${STRAPI_URL}${url ?? ""}`;

const pickCoverUrl = (file?: UploadFile | null) => {
  const rel =
    file?.formats?.small?.url ??
    file?.formats?.thumbnail?.url ??
    file?.url;
  return rel ? mediaUrl(rel) : undefined;
};

export default function InfoTerkiniSection() {
  const [active, setActive] = useState<Category>("Semua");
  const [allInfoData, setAllInfoData] = useState<InfoItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState<string | null>(null);
  
  // Pagination states
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4; // Show 4 items in the main grid

  // Fetch all data once
  useEffect(() => {
    const fetchAllInfos = async () => {
      setLoading(true);
      setErr(null);
      
      try {
        // Fetch a large number of items (adjust based on your needs)
        const response: ApiResponse<InfoApiRow> = await getInfos(1, 100);
        
        const mapped: InfoItem[] = response.data.map((row) => ({
          id: row.id,
          title: row.title,
          slug: row.slug,
          category: row.category,
          sourceUrl: row.sourceUrl,
          date: row.date,
          coverUrl: pickCoverUrl(row.cover),
        }));
        
        setAllInfoData(mapped);
      } catch (error) {
        console.error("Error fetching infos:", error);
        setErr("Failed to fetch infos");
      } finally {
        setLoading(false);
      }
    };

    fetchAllInfos();
  }, []);

  // Reset to page 1 when category changes
  useEffect(() => {
    setCurrentPage(1);
  }, [active]);

  const formatDate = (iso?: string) =>
    iso
      ? new Date(iso).toLocaleDateString("id-ID", {
          year: "numeric",
          month: "short",
          day: "2-digit",
        })
      : "—";

  const tabs: Category[] = [
    "Semua",
    "Berita",
    "Event",
    "Pengumuman",
    "Produk UMKM",
  ];

  // Filter data by category
  const filteredData = useMemo(() => {
    if (active === "Semua") return allInfoData;
    return allInfoData.filter(
      (it) => it.category.toLowerCase() === active.toLowerCase()
    );
  }, [allInfoData, active]);

  // Calculate pagination based on filtered data
  const totalItems = filteredData.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  
  // Get current page items
  const currentItems = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return filteredData.slice(startIndex, endIndex);
  }, [filteredData, currentPage, itemsPerPage]);

  // Pagination handlers
  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePageClick = (page: number) => {
    setCurrentPage(page);
  };

  // Generate page numbers to display
  const getPageNumbers = () => {
    const pages = [];
    const maxVisiblePages = 5;
    
    if (totalPages <= maxVisiblePages) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage <= 3) {
        for (let i = 1; i <= 4; i++) {
          pages.push(i);
        }
        pages.push('...');
        pages.push(totalPages);
      } else if (currentPage >= totalPages - 2) {
        pages.push(1);
        pages.push('...');
        for (let i = totalPages - 3; i <= totalPages; i++) {
          pages.push(i);
        }
      } else {
        pages.push(1);
        pages.push('...');
        pages.push(currentPage - 1);
        pages.push(currentPage);
        pages.push(currentPage + 1);
        pages.push('...');
        pages.push(totalPages);
      }
    }
    
    return pages;
  };

  return (
    <section className="w-full py-10 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-gray-900 mb-6 text-center">
          Info Terkini
        </h2>

        {/* Tabs */}
        <div className="flex flex-wrap gap-3 mb-6 justify-center">
          {tabs.map((tab) => {
            const on = active === tab;
            return (
              <button
                key={tab}
                onClick={() => setActive(tab)}
                className={[
                  "px-4 py-1 border rounded-full transition",
                  on
                    ? "bg-green-600 text-white border-green-600"
                    : "text-green-700 border-green-700 hover:bg-green-600 hover:text-white",
                ].join(" ")}
              >
                {tab.toUpperCase()}
              </button>
            );
          })}
        </div>

        <div className="grid grid-cols-12 gap-6">
          {/* Left: content grid */}
          <div className="col-span-12 md:col-span-8">
            {err && (
              <div className="p-4 border border-red-300 text-red-700 rounded mb-4">
                {err}
              </div>
            )}

            {loading ? (
              <div className="grid grid-cols-12 gap-6">
                {Array.from({ length: 4 }).map((_, i) => (
                  <div
                    key={i}
                    className="col-span-12 md:col-span-6 border border-green-200 rounded-lg p-4 animate-pulse"
                  >
                    <div className="h-6 w-24 bg-gray-200 rounded mb-3" />
                    <div className="w-full h-40 bg-gray-200 rounded mb-3" />
                    <div className="h-5 w-3/4 bg-gray-200 rounded mb-2" />
                    <div className="h-4 w-1/3 bg-gray-200 rounded" />
                  </div>
                ))}
              </div>
            ) : (
              <>
                <div className="grid grid-cols-12 gap-6">
                  {currentItems.map((it) => (
                    <div key={it.id} className="col-span-12 md:col-span-6">
                      <div className="h-full border border-green-600 rounded-lg p-4 flex flex-col justify-between transition-all duration-300 hover:shadow-lg hover:-translate-y-2 hover:scale-[1.02]">
                        <div>
                          <div className="text-sm text-white bg-green-600 inline-block px-3 py-1 rounded mb-3">
                            {String(it.category).toUpperCase()}
                          </div>

                          {it.coverUrl && (
                            <Image
                              src={it.coverUrl}
                              alt={it.title}
                              width={800}
                              height={400}
                              className="rounded-md mb-3 w-full h-40 object-cover"
                              priority
                            />
                          )}

                          <h3 className="font-bold text-gray-800 mb-2 line-clamp-2">
                            {it.title || "—"}
                          </h3>
                        </div>

                        <div className="flex justify-between items-center text-sm text-green-700 font-semibold mt-4">
                          <span>{formatDate(it.date)}</span>
                          {it.sourceUrl ? (
                            <a
                              href={it.sourceUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="underline underline-offset-4 hover:text-green-800"
                            >
                              Baca selengkapnya
                            </a>
                          ) : (
                            <span className="text-gray-400 font-normal">—</span>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Show message if no items */}
                {currentItems.length === 0 && !loading && (
                  <div className="text-center py-8 text-gray-500">
                    Tidak ada data untuk kategori {active}
                  </div>
                )}

                {/* Pagination Controls */}
                {totalPages > 1 && (
                  <div className="mt-8 flex items-center justify-center gap-2">
                    {/* Previous Button */}
                    <button
                      onClick={handlePrevPage}
                      disabled={currentPage === 1}
                      className={`
                        flex items-center gap-1 px-3 py-2 rounded-lg transition
                        ${currentPage === 1 
                          ? 'bg-gray-100 text-gray-400 cursor-not-allowed' 
                          : 'bg-white border border-gray-300 text-gray-700 hover:bg-gray-50'
                        }
                      `}
                    >
                      <ChevronLeft className="w-4 h-4" />
                      <span className="hidden sm:inline">Previous</span>
                    </button>

                    {/* Page Numbers */}
                    <div className="flex items-center gap-1">
                      {getPageNumbers().map((page, index) => (
                        page === '...' ? (
                          <span key={`ellipsis-${index}`} className="px-3 py-2 text-gray-500">
                            ...
                          </span>
                        ) : (
                          <button
                            key={page}
                            onClick={() => handlePageClick(page as number)}
                            className={`
                              min-w-[40px] px-3 py-2 rounded-lg transition
                              ${currentPage === page
                                ? 'bg-green-600 text-white font-semibold'
                                : 'bg-white border border-gray-300 text-gray-700 hover:bg-gray-50'
                              }
                            `}
                          >
                            {page}
                          </button>
                        )
                      ))}
                    </div>

                    {/* Next Button */}
                    <button
                      onClick={handleNextPage}
                      disabled={currentPage === totalPages}
                      className={`
                        flex items-center gap-1 px-3 py-2 rounded-lg transition
                        ${currentPage === totalPages 
                          ? 'bg-gray-100 text-gray-400 cursor-not-allowed' 
                          : 'bg-white border border-gray-300 text-gray-700 hover:bg-gray-50'
                        }
                      `}
                    >
                      <span className="hidden sm:inline">Next</span>
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                )}

                {/* Results Info */}
                {!loading && totalItems > 0 && (
                  <div className="mt-4 text-center text-sm text-gray-600">
                    Showing {Math.min(((currentPage - 1) * itemsPerPage) + 1, totalItems)} - {Math.min(currentPage * itemsPerPage, totalItems)} of {totalItems} {active !== "Semua" ? active : "items"}
                  </div>
                )}
              </>
            )}
          </div>

          {/* Right: sidebar */}
          <div className="col-span-12 md:col-span-4">
            {/* <div className="border border-green-600 rounded-lg p-4">
              <h3 className="font-bold text-gray-800 mb-2">AGENDA TERDEKAT</h3>
              <p className="text-gray-700 text-sm">KUNJUNGAN PKK MALANG</p>
              <div className="flex items-center gap-2 mt-1">
                <p className="text-gray-600 text-sm">3 Okt 2024</p>
                <span className="text-gray-400">|</span>
                <p className="text-gray-600 text-sm">Kampung Kopi</p>
              </div>
            </div> */}

            <div className="mt-0 rounded-lg overflow-hidden">
              <Image
                src="/images/terimakasih.jpg"
                alt="Ucapan Terima Kasih"
                width={600}
                height={800}
                className="w-full h-full object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}