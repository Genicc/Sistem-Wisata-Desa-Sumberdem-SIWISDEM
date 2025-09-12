// Struktur respons standar Strapi
type StrapiImage = { data: { attributes: { url: string } } | null };
type StrapiEntity<A> = { id: number; attributes: A };
type StrapiList<T> = { data: Array<StrapiEntity<T>> };

export type InfoAttributes = {
    title: string;
    slug: string;
    category: string;        // "Berita" | "Event" | dst.
    sourceUrl?: string | null;
    date?: string | null;    // ISO
    cover?: StrapiImage;
};

export type InfoItem = {
    id: number;
    title: string;
    slug: string;
    category: string;
    sourceUrl?: string;
    date?: string;
    coverUrl?: string;
};

import { strapiFetch, mediaUrl } from "./strapi";

/** Ambil daftar Info (dengan cover ter-populate) */
export async function getInfos(opts?: {
    category?: string;              // filter per kategori (opsional)
    page?: number; pageSize?: number;
    }) {
    const params: Record<string, string> = {
        // pilih field yang kamu butuhkan
        "fields[0]": "title",
        "fields[1]": "slug",
        "fields[2]": "category",
        "fields[3]": "sourceUrl",
        "fields[4]": "date",
        // populate cover
        "populate[cover]": "*",
        // urutkan terbaru dulu
        "sort[0]": "date:desc",
        // pagination
        "pagination[page]": String(opts?.page ?? 1),
        "pagination[pageSize]": String(opts?.pageSize ?? 12),
    };

    if (opts?.category && opts.category !== "Semua") {
        params["filters[category][$eq]"] = opts.category;
    }

    const json = await strapiFetch<StrapiList<InfoAttributes>>("/infos", params, 300);
    const items: InfoItem[] = json.data.map((e) => ({
        id: e.id,
        title: e.attributes.title,
        slug: e.attributes.slug,
        category: e.attributes.category,
        sourceUrl: e.attributes.sourceUrl ?? undefined,
        date: e.attributes.date ?? undefined,
        coverUrl: mediaUrl(e.attributes.cover?.data?.attributes.url ?? undefined),
    }));
    return items;
}
