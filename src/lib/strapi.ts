// lib/strapi.ts
const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL!;
const STRAPI_TOKEN = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;

/** Fetch generic ke Strapi (v4 / v5) */
export async function strapiFetch<T>(
    path: string,
    params?: Record<string, string | number | boolean>,
    revalidateSeconds = 300
): Promise<T> {
    const url = new URL(`/api${path.startsWith('/') ? '' : '/'}${path}`, STRAPI_URL);
    if (params) url.search = new URLSearchParams(params as Record<string,string>).toString();

    const res = await fetch(url.toString(), {
        headers: STRAPI_TOKEN ? { Authorization: `Bearer ${STRAPI_TOKEN}` } : undefined,
        next: { revalidate: revalidateSeconds }, // ISR
    });

    if (!res.ok) {
        const text = await res.text();
        throw new Error(`Strapi error ${res.status}: ${text}`);
    }
    return res.json() as Promise<T>;
}

/** Utility untuk membentuk URL media Strapi */
export const mediaUrl = (url?: string | null) =>
    !url ? undefined : url.startsWith('http') ? url : `${STRAPI_URL}${url}`;
