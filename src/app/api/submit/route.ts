// app/api/submit/route.ts
import { NextResponse } from 'next/server';
import { google } from 'googleapis';

export const runtime = 'nodejs';

const SCOPES = ['https://www.googleapis.com/auth/spreadsheets'];
const SPREADSHEET_ID = process.env.SPREADSHEET_ID!;
const SHEET_NAME = process.env.SHEET_NAME || 'Sheet1';

function getAuth() {
    const raw = process.env.GOOGLE_SERVICE_ACCOUNT_KEY;
    if (!raw) throw new Error('Env GOOGLE_SERVICE_ACCOUNT_KEY tidak ditemukan.');

    let creds: any;
    try {
        creds = JSON.parse(raw);
    } catch {
        throw new Error('GOOGLE_SERVICE_ACCOUNT_KEY bukan JSON valid. Cek format di .env / Vercel.');
    }

    // ubah '\n' literal jadi newline asli untuk private_key
    const key: string = String(creds.private_key || '').replace(/\\n/g, '\n');

    return new google.auth.JWT({
        email: creds.client_email,
        key,
        scopes: SCOPES,
    });
    }

    export async function POST(req: Request) {
    try {
        const body = await req.json();

        // --- Validasi singkat
        const nama = String(body.nama_lengkap_instansi || '').trim();
        const email = String(body.email || '').trim();
        const nomorWa = String(body.nomor_wa || '').trim();
        const jumlah = Number(body.jumlah_peserta || 0);
        const tanggal = String(body.tanggal_kunjungan || '').trim();
        const paket = String(body.pilihan_paket || '').trim();

        if (!nama || !email || !nomorWa || !tanggal || !paket || !Number.isFinite(jumlah) || jumlah < 1) {
        return NextResponse.json(
            { ok: false, error: 'Field wajib belum lengkap/valid.' },
            { status: 400 }
        );
        }

        // --- Tulis ke Google Sheets
        const auth = getAuth();
        const sheets = google.sheets({ version: 'v4', auth });

        await sheets.spreadsheets.values.append({
        spreadsheetId: SPREADSHEET_ID,
        range: `${SHEET_NAME}!A:Z`,
        valueInputOption: 'USER_ENTERED',
        requestBody: {
            values: [[
            new Date().toISOString(), // timestamp
            nama,
            email,
            nomorWa,                  // 👈 kolom baru: nomor WhatsApp
            jumlah,
            tanggal,
            paket,
            ]],
        },
        });

        return NextResponse.json({ ok: true });
    } catch (e: any) {
        return NextResponse.json({ ok: false, error: String(e?.message || e) }, { status: 500 });
    }
}
