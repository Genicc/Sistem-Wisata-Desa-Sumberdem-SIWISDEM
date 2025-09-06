const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL!;
const TOKEN = process.env.STRAPI_API_TOKEN;

type FetchOptions = {
    cache?: RequestCache;
    next?: {
        revalidate?: number | false;
        tags?: string[];
    };
};

export async function strapi<T>(path: string, opts: FetchOptions = {}) {
    const url = `${STRAPI_URL}${path}`;
    const res = await fetch(url, {
        headers: {
        'Content-Type': 'application/json',
        ...(TOKEN ? { Authorization: `Bearer ${TOKEN}` } : {}),
        },
        ...opts,
    });

    if (!res.ok) {
        const text = await res.text();
        throw new Error(`Strapi error ${res.status}: ${text}`);
    }

    return (await res.json()) as T;
}