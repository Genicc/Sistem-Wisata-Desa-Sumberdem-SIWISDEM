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
        creds = JSON.parse(raw); // gagal di sini kalau ENV bukan JSON valid
    } catch {
        throw new Error('GOOGLE_SERVICE_ACCOUNT_KEY bukan JSON valid. Cek format di .env / Vercel.');
    }

    // normalisasi: kalau ENV berisi '\n' literal, ubah ke newline asli
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

        // validasi singkat
        const jumlah = Number(body.jumlah_peserta || 0);
        if (!body.nama_lengkap_instansi || !body.email || jumlah < 1 || !body.tanggal_kunjungan || !body.pilihan_paket) {
        return NextResponse.json({ ok: false, error: 'Field wajib belum lengkap/valid.' }, { status: 400 });
        }

        const auth = getAuth();
        const sheets = google.sheets({ version: 'v4', auth });

        await sheets.spreadsheets.values.append({
        spreadsheetId: SPREADSHEET_ID,
        range: `${SHEET_NAME}!A:Z`,
        valueInputOption: 'USER_ENTERED',
        requestBody: { values: [[
            new Date().toISOString(),
            body.nama_lengkap_instansi,
            body.email,
            jumlah,
            body.tanggal_kunjungan,
            body.pilihan_paket,
        ]]},
        });

        return NextResponse.json({ ok: true });
    } catch (e: any) {
        return NextResponse.json({ ok: false, error: String(e?.message || e) }, { status: 500 });
    }
}
