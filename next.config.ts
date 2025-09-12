import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["localhost"],
    remotePatterns: [
      // contoh: Strapi di https://api.siwisdem.id
      { protocol: "https", hostname: "api.siwisdem.id" },
      { protocol: "https", hostname: "respected-desk-20258e8518.strapiapp.com" },
      // jika masih lokal dan diakses dari browser lain:
      { protocol: "http", hostname: "localhost" },
      { protocol: "http", hostname: "192.168.1.**" }, // opsional untuk LAN
    ],
  },
};

export default nextConfig;

/** @type {import('next').NextConfig} */
module.exports = {
  images: {
    remotePatterns: [{ protocol: 'http', hostname: 'localhost', port: '1337', pathname: '/uploads/**' }],
  },
};
