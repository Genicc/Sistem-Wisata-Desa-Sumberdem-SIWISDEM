// components/Footer.tsx
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full bg-[#E5E5E5]">
      <div className="mx-auto max-w-7xl px-6 py-8">
        {/* BARIS ATAS: Logo kiri + 2 kolom teks + supported */}
        <div className="grid grid-cols-12 gap-6 items-start">
          {/* Logo kiri */}
          <div className="col-span-12 md:col-span-3 mt-11">
            <div className="flex items-center gap-6">
              <Image src="/images/pokdarwis.png" alt="Pokdarwis" width={66} height={66} />
              <Image src="/images/sumberdem.png" alt="Sumberdem Asri" width={66} height={66} />
              <Image src="/images/kab-malang.png" alt="Kabupaten Malang" width={66} height={66} />
            </div>
          </div>

          {/* Kolom tengah kiri (judul + deskripsi) */}
          <div className="col-span-12 md:col-span-5">
            <h3 className="text-[16px] font-bold tracking-wide text-gray-900">
              WISATA TEMATIK SUMBERDEM ASRI
            </h3>

            <div className="mt-3 space-y-1 text-[14px] leading-relaxed text-gray-800">
              <p className="font-semibold">
                DESA SUMBERDEM - WONOSARI - MALANG - JAWA TIMUR
              </p>
              {/* <p className="font-semibold">
                MALANG - JAWA TIMUR
              </p> */}
              <p className="mt-2">
                Website desa dibangun dengan tujuan sebagai
                media informasi wisata, yang dibangun dan
                dikelola oleh tim desa setempat.
              </p>
              <p>
                Dengan memanfaatkan website diharapkan
                informasi wisata dapat lebih jelas dan mudah.
              </p>
            </div>
          </div>

          {/* Kolom tengah kanan (kontak) */}
          <div className="col-span-12 md:col-span-3">
            <h3 className="text-[14px] font-semibold tracking-wide text-gray-900">
              KONTAK KAMI
            </h3>

            <div className="mt-3 text-[13px] leading-relaxed text-gray-800">
              <p>Sekretariat Kantor Desa Sumberdem,</p>
              <p>Jln. Raya Sumberingin No. 30,</p>
              <p>Desa Sumberdem, Kecamatan Wonosari,</p>
              <p>Kabupaten Malang 65164</p>

              <div className="mt-2 flex items-center gap-2">
                {/* icon phone */}
                <svg width="16" height="16" viewBox="0 0 24 24" className="shrink-0 fill-current text-gray-800">
                  <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.11.37 2.3.57 3.58.57a1 1 0 011 1V21a1 1 0 01-1 1C11.3 22 2 12.7 2 1a1 1 0 011-1h3.5a1 1 0 011 1c0 1.28.2 2.47.57 3.58a1 1 0 01-.24 1.01l-2.2 2.2z"/>
                </svg>
                <span>+62813-3133-3220</span>
              </div>

              <div className="mt-1 flex items-center gap-2">
                {/* icon mail */}
                <svg width="16" height="16" viewBox="0 0 24 24" className="shrink-0 fill-current text-gray-800">
                  <path d="M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
                <span>sumberdem.wonosari@malangkab.go.id</span>
              </div>
            </div>
          </div>

          {/* Supported by (kanan) */}
          <div className="col-span-12 md:col-span-1 flex md:self-start justify-center mt-12">
            <div className="flex flex-col item-center ">
              <div className="text-[13px] text-gray-600 text-center mb-2 ">Supported by</div>
              <div className="flex items-center gap-4 justify-center">
                <Image src="/images/um.png" alt="UM" width={50} height={50} />
                <Image src="/images/smkn-wonosari.png" alt="SMKN 1 Wonosari" width={50} height={50} />
              </div>
            </div>
          </div>
        </div>

        {/* Garis tipis tengah */}
        <div className="mt-6 flex justify-center">
          <div className="w-72 md:w-[420px] border-t border-gray-400" />
        </div>

        {/* Copyright */}
        <div className="mt-2 text-center text-[12px] text-gray-800">© 2025</div>
      </div>
    </footer>
  );
}
