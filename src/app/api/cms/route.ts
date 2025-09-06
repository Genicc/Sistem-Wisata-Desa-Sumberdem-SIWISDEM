import { NextResponse } from "next/server";
import { readSheetAsObjects } from "@/lib/sheets";

export const revalidate = 60; // ISR: cache 60 detik (ubah sesuai kebutuhan)

export async function GET() {
  try {
    const items = await readSheetAsObjects();

    // Contoh: casting kolom tanggal dan kategori
    const normalized = items.map((it) => ({
      ...it,
      // misal kolom di sheet: "date", "category", "title", "image_url", "link"
      _date: it.date ? new Date(it.date) : null,
      category: (it.category || "").toString().toLowerCase(),
    }));

    return NextResponse.json({ ok: true, items: normalized });
  } catch (e: any) {
    console.error(e);
    return NextResponse.json({ ok: false, error: e.message }, { status: 500 });
  }
}
