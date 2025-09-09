import { NextResponse } from 'next/server';
import { google } from 'googleapis';

// Wajib pakai Node runtime (googleapis tidak kompatibel di Edge)
export const runtime = 'nodejs';

const SPREADSHEET_ID = process.env.SPREADSHEET_ID!;
const SHEET_NAME = process.env.SHEET_NAME || 'Sheet1';
const SCOPES = ['https://www.googleapis.com/auth/spreadsheets'];

function getAuth() {
    const raw = process.env.GOOGLE_SERVICE_ACCOUNT_KEY!;
    let creds: any;
    try {
        creds = JSON.parse(raw); // <-- gagal di sini kalau env tidak JSON valid
    } catch (e) {
        throw new Error('GOOGLE_SERVICE_ACCOUNT_KEY bukan JSON valid. Cek format di .env / Vercel.');
    }
    return new (require('googleapis').google.auth.JWT)({
        email: creds.client_email,
        key: creds.private_key,
        scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });
}


type Payload = {
    nama_lengkap_instansi?: string;
    email?: string;
    jumlah_peserta?: number | string;
    tanggal_kunjungan?: string; // ex: YYYY-MM-DD
    pilihan_paket?: string;
};

export async function POST(req: Request) {
    try {
        const body = (await req.json()) as Payload;

        // Validasi minimal
        if (!body.nama_lengkap_instansi) {
        return NextResponse.json({ ok: false, error: 'Nama Lengkap/Instansi wajib diisi' }, { status: 400 });
        }
        if (!body.email) {
        return NextResponse.json({ ok: false, error: 'Email wajib diisi' }, { status: 400 });
        }
        const jumlah = Number(body.jumlah_peserta || 0);
        if (!Number.isFinite(jumlah) || jumlah < 1) {
        return NextResponse.json({ ok: false, error: 'Jumlah peserta minimal 1' }, { status: 400 });
        }
        if (!body.tanggal_kunjungan) {
        return NextResponse.json({ ok: false, error: 'Tanggal kunjungan wajib diisi' }, { status: 400 });
        }
        if (!body.pilihan_paket) {
        return NextResponse.json({ ok: false, error: 'Pilihan paket wajib diisi' }, { status: 400 });
        }

        // Susun row sesuai header
        const values = [[
        new Date().toISOString(),                // timestamp
        body.nama_lengkap_instansi || '',
        body.email || '',
        jumlah,
        body.tanggal_kunjungan || '',
        body.pilihan_paket || '',
        ]];

        const auth = getAuth();
        const sheets = google.sheets({ version: 'v4', auth });

        await sheets.spreadsheets.values.append({
        spreadsheetId: SPREADSHEET_ID,
        range: `${SHEET_NAME}!A:Z`,
        valueInputOption: 'USER_ENTERED',
        requestBody: { values },
        });

        return NextResponse.json({ ok: true });
    } catch (e: any) {
        // Error umum: PERMISSION_DENIED (sheet belum di-share ke SA), invalid_grant (jam server/SA skew)
        return NextResponse.json({ ok: false, error: e?.message || 'Server error' }, { status: 500 });
    }
}
