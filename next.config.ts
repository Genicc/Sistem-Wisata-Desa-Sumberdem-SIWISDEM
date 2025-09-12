import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [
      "respected-desk-20258e8518.strapiapp.com",
      "respected-desk-20258e8518.media.strapiapp.com",
      "localhost",
    ],
    remotePatterns: [
      //domain dari luar
      { protocol: "https", hostname: "respected-desk-20258e8518.strapiapp.com", pathname: "/uploads/**" },
      { protocol: "https", hostname: "respected-desk-20258e8518.media.strapiapp.com", pathname: "/uploads/**" },
      
      // jika masih lokal dan diakses dari browser lain:
      { protocol: "http", hostname: "localhost", port: "1337", pathname: "/uploads/**" },
      // { protocol: "http", hostname: "192.168.1.**" },
    ],
  },
};

export default nextConfig;

// /** @type {import('next').NextConfig} */
// module.exports = {
//   images: {
//     remotePatterns: [{ protocol: 'https', hostname: 'respected-desk-20258e8518.strapiapp.com', pathname: '/uploads/**' }],
//   },
// };
